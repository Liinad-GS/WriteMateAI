import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { BigQuery } from "@google-cloud/bigquery"

loadEnvFile()

const port = Number(process.env.PORT || 8787)
const aiProvider = process.env.AI_PROVIDER || "auto"
const openAiApiKey = process.env.OPENAI_API_KEY
const openAiModel = process.env.OPENAI_MODEL || "gpt-5-mini"
const deepSeekApiKey = process.env.DEEPSEEK_API_KEY
const deepSeekModel = process.env.DEEPSEEK_MODEL || "deepseek-chat"
const feedbackWebhookUrl = process.env.FEEDBACK_WEBHOOK_URL || ""
const bigQueryProjectId = process.env.BIGQUERY_PROJECT_ID || ""
const bigQueryDatasetId = process.env.BIGQUERY_DATASET_ID || ""
const bigQueryEventsTableId = process.env.BIGQUERY_EVENTS_TABLE_ID || "events"
const bigQueryCredentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || ""
const bigQueryCredentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || ""
const AI_REQUEST_TIMEOUT_MS = Number(process.env.AI_REQUEST_TIMEOUT_MS || 15000)
const TRANSFORM_CACHE_TTL_MS = Number(process.env.TRANSFORM_CACHE_TTL_MS || 5 * 60 * 1000)
const TRANSFORM_CACHE_MAX_ENTRIES = Number(process.env.TRANSFORM_CACHE_MAX_ENTRIES || 200)
const MAX_JSON_BODY_BYTES = Number(process.env.MAX_JSON_BODY_BYTES || 64 * 1024)
const MAX_TRANSFORM_TEXT_CHARS = Number(process.env.MAX_TRANSFORM_TEXT_CHARS || 12000)
const MAX_FEEDBACK_CHARS = Number(process.env.MAX_FEEDBACK_CHARS || 2000)
const MAX_ANALYTICS_PROPERTIES_CHARS = Number(process.env.MAX_ANALYTICS_PROPERTIES_CHARS || 8000)
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60 * 1000)
const RATE_LIMIT_MAX_TRANSFORM = Number(process.env.RATE_LIMIT_MAX_TRANSFORM || 20)
const RATE_LIMIT_MAX_FEEDBACK = Number(process.env.RATE_LIMIT_MAX_FEEDBACK || 10)
const RATE_LIMIT_MAX_EVENTS = Number(process.env.RATE_LIMIT_MAX_EVENTS || 120)
const ENABLE_MOCK_AI_FALLBACK = String(process.env.ENABLE_MOCK_AI_FALLBACK || "").trim().toLowerCase() === "true"
const allowedOrigins = parseAllowedOrigins(process.env.CORS_ALLOWED_ORIGINS || "")
const transformCache = new Map()
const rateLimitBuckets = new Map()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedBigQueryCredentialsPath = resolveCredentialPath(bigQueryCredentialsPath, __dirname)
let bigQueryClient = null
const SUPPORTED_ACTIONS = new Set(["translate", "grammar", "improve", "tone"])
const SUPPORTED_TONES = new Set(["professional", "friendly", "confident", "warm", "shorter"])
const SUPPORTED_CORRESPONDENCE_LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Polish",
  "Czech",
  "Ukrainian",
  "Russian",
  "Turkish",
  "Arabic",
  "Hebrew",
  "Hindi",
  "Chinese (Simplified)",
  "Japanese",
  "Korean",
  "Vietnamese",
  "Indonesian"
]

const server = http.createServer(async (req, res) => {
  const corsResult = addCorsHeaders(req, res)
  addSecurityHeaders(res)

  if (req.method === "OPTIONS") {
    if (!corsResult.allowed) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" })
      res.end("Origin is not allowed")
      return
    }

    res.writeHead(204)
    res.end()
    return
  }

  if (!corsResult.allowed) {
    logBlockedOrigin(req)
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" })
    res.end("Origin is not allowed")
    return
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(buildHealthResponse()))
    return
  }

  if (req.method === "POST" && req.url === "/api/transform") {
    try {
      enforceRateLimit(req, "transform", RATE_LIMIT_MAX_TRANSFORM)
      const body = await readJson(req)
      const output = await transformText(body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(output))
      return
    } catch (error) {
      const response = buildErrorResponse(error, "Transform request failed")
      res.writeHead(response.status, { "Content-Type": "text/plain; charset=utf-8" })
      res.end(response.message)
      return
    }
  }

  if (req.method === "POST" && req.url === "/api/transform/stream") {
    try {
      enforceRateLimit(req, "transform", RATE_LIMIT_MAX_TRANSFORM)
      const body = await readJson(req)
      await streamTransformText(body, res)
      return
    } catch (error) {
      const response = buildErrorResponse(error, "Transform request failed")
      if (!res.headersSent) {
        res.writeHead(response.status, { "Content-Type": "text/plain; charset=utf-8" })
        res.end(response.message)
        return
      }

      writeStreamEvent(res, { type: "error", error: response.message })
      res.end()
      return
    }
  }

  if (req.method === "POST" && req.url === "/api/feedback") {
    try {
      enforceRateLimit(req, "feedback", RATE_LIMIT_MAX_FEEDBACK)
      const body = await readJson(req)
      const output = await submitFeedback(body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(output))
      return
    } catch (error) {
      const response = buildErrorResponse(error, "Feedback request failed")
      res.writeHead(response.status, { "Content-Type": "text/plain; charset=utf-8" })
      res.end(response.message)
      return
    }
  }

  if (req.method === "POST" && req.url === "/api/events") {
    try {
      enforceRateLimit(req, "events", RATE_LIMIT_MAX_EVENTS)
      const body = await readJson(req)
      const output = await recordEvent(body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(output))
      return
    } catch (error) {
      const response = buildErrorResponse(error, "Analytics request failed")
      res.writeHead(response.status, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ ok: false, error: response.message }))
      return
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
  res.end("Not found")
})

server.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})

async function transformText(payload) {
  const context = createTransformContext(payload)
  const {
    action,
    text,
    targetLanguage,
    tone,
    model,
    provider,
    cacheKey,
    sourceLanguage
  } = context
  const cachedResult = getCachedTransform(cacheKey)
  if (cachedResult) {
    return cachedResult
  }

  if (!openAiApiKey && !deepSeekApiKey) {
    const mockResult = mockTransform(action, text, targetLanguage, sourceLanguage)
    setCachedTransform(cacheKey, mockResult)
    return mockResult
  }

  const instructions = buildInstructions(action, targetLanguage, tone)
  const output = provider === "deepseek"
    ? await requestDeepSeek(instructions, text)
    : await requestOpenAI(instructions, text, model)

  const outputText = typeof output === "string" ? output.trim() : String(output?.text || "").trim()
  if (!outputText) {
    throw new Error("No text returned from AI")
  }

  const result = buildTransformResult(action, outputText, sourceLanguage, targetLanguage)
  setCachedTransform(cacheKey, result)
  return result
}

async function streamTransformText(payload, res) {
  const startedAt = performance.now()
  const context = createTransformContext(payload)
  const {
    action,
    text,
    targetLanguage,
    tone,
    model,
    provider,
    cacheKey,
    sourceLanguage
  } = context

  res.writeHead(200, {
    "Content-Type": "application/x-ndjson; charset=utf-8",
    "Cache-Control": "no-store",
    Connection: "keep-alive"
  })

  const cachedResult = getCachedTransform(cacheKey)
  if (cachedResult) {
    streamTextChunks(res, cachedResult.text)
    writeStreamEvent(res, {
      type: "done",
      result: cachedResult,
      metrics: {
        provider,
        cacheHit: true,
        totalMs: roundDuration(performance.now() - startedAt),
        firstTokenMs: 0,
        sourceLanguage
      }
    })
    res.end()
    return
  }

  if (!openAiApiKey && !deepSeekApiKey) {
    const mockResult = mockTransform(action, text, targetLanguage, sourceLanguage)
    setCachedTransform(cacheKey, mockResult)
    streamTextChunks(res, mockResult.text)
    writeStreamEvent(res, {
      type: "done",
      result: mockResult,
      metrics: {
        provider: "mock",
        cacheHit: false,
        totalMs: roundDuration(performance.now() - startedAt),
        firstTokenMs: 0,
        sourceLanguage
      }
    })
    res.end()
    return
  }

  const instructions = buildInstructions(action, targetLanguage, tone)
  let outputText = ""
  let providerMetrics = {
    provider,
    cacheHit: false,
    firstTokenMs: 0
  }

  if (provider === "openai") {
    const streamed = await requestOpenAIStream(instructions, text, model, (delta) => {
      outputText += delta
      writeStreamEvent(res, { type: "delta", delta })
    })
    outputText = streamed.text.trim()

    if (!outputText) {
      const fallbackText = await requestOpenAI(instructions, text, model)
      outputText = typeof fallbackText === "string"
        ? fallbackText.trim()
        : String(fallbackText?.text || "").trim()
    }

    providerMetrics = {
      provider,
      cacheHit: false,
      firstTokenMs: roundDuration(streamed.firstTokenMs),
      upstreamMs: roundDuration(streamed.totalMs),
      streamFallbackToNonStreaming: !streamed.text.trim() && Boolean(outputText)
    }
  } else {
    const deepSeekText = await requestDeepSeek(instructions, text)
    outputText = String(deepSeekText || "").trim()
    streamTextChunks(res, outputText)
    providerMetrics = {
      provider,
      cacheHit: false,
      firstTokenMs: 0,
      upstreamMs: roundDuration(performance.now() - startedAt)
    }
  }

  if (!outputText) {
    throw new Error("No text returned from AI")
  }

  const result = buildTransformResult(action, outputText, sourceLanguage, targetLanguage)
  setCachedTransform(cacheKey, result)
  writeStreamEvent(res, {
    type: "done",
    result,
    metrics: {
      ...providerMetrics,
      totalMs: roundDuration(performance.now() - startedAt),
      sourceLanguage
    }
  })
  res.end()
}

async function submitFeedback(payload) {
  const message = String(payload?.message || "").trim()
  if (!message) {
    throw createPublicError("Feedback text is required", 400)
  }

  if (message.length > MAX_FEEDBACK_CHARS) {
    throw createPublicError(`Feedback text must be at most ${MAX_FEEDBACK_CHARS} characters`, 400)
  }

  if (!feedbackWebhookUrl) {
    throw createInternalError("FEEDBACK_WEBHOOK_URL is not configured")
  }

  if (!isAllowedWebhookUrl(feedbackWebhookUrl)) {
    throw createInternalError("FEEDBACK_WEBHOOK_URL must use https or localhost")
  }

  const feedbackPayload = {
    createdAt: new Date().toISOString(),
    feedback: message,
    appLanguage: String(payload?.appLanguage || ""),
    currentAction: String(payload?.currentAction || ""),
    targetLanguage: String(payload?.targetLanguage || ""),
    tone: String(payload?.tone || ""),
    browserLanguage: String(payload?.browserLanguage || ""),
    pageHost: String(payload?.pageHost || ""),
    selectionKind: String(payload?.selectionKind || ""),
    extensionVersion: String(payload?.extensionVersion || "")
  }

  const response = await fetch(feedbackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(feedbackPayload)
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Feedback request failed: ${errorText}`)
  }

  return { ok: true }
}

async function recordEvent(payload) {
  const event = normalizeAnalyticsEvent(payload)
  const client = getBigQueryClient()
  const table = client
    .dataset(bigQueryDatasetId)
    .table(bigQueryEventsTableId)

  await table.insert([event])
  return { ok: true }
}

function normalizeAnalyticsEvent(payload) {
  const eventName = String(payload?.event_name || payload?.eventName || "").trim()

  if (!eventName) {
    throw createPublicError("event_name is required", 400)
  }

  const eventTimeValue = payload?.event_time || payload?.eventTime
  const eventTime = eventTimeValue ? new Date(eventTimeValue) : new Date()
  if (Number.isNaN(eventTime.getTime())) {
    throw createPublicError("event_time must be a valid date", 400)
  }

  return {
    event_time: eventTime.toISOString(),
    event_name: eventName,
    user_id: normalizeNullableString(payload?.user_id ?? payload?.userId),
    session_id: normalizeNullableString(payload?.session_id ?? payload?.sessionId),
    extension_version: normalizeNullableString(payload?.extension_version ?? payload?.extensionVersion),
    page_host: normalizeNullableString(payload?.page_host ?? payload?.pageHost),
    action: normalizeNullableString(payload?.action),
    selection_kind: normalizeNullableString(payload?.selection_kind ?? payload?.selectionKind),
    success: normalizeNullableBoolean(payload?.success),
    duration_ms: normalizeNullableNumber(payload?.duration_ms ?? payload?.durationMs),
    error_code: normalizeNullableString(payload?.error_code ?? payload?.errorCode),
    error_message: normalizeNullableString(payload?.error_message ?? payload?.errorMessage),
    properties: normalizeProperties(payload?.properties)
  }
}

function getBigQueryClient() {
  if (bigQueryClient) {
    return bigQueryClient
  }

  if (!bigQueryProjectId) {
    throw createInternalError("BIGQUERY_PROJECT_ID is not configured")
  }

  if (!bigQueryDatasetId) {
    throw createInternalError("BIGQUERY_DATASET_ID is not configured")
  }

  const options = {
    projectId: bigQueryProjectId
  }

  if (resolvedBigQueryCredentialsPath) {
    if (!fs.existsSync(resolvedBigQueryCredentialsPath)) {
      throw createInternalError("GOOGLE_APPLICATION_CREDENTIALS file not found")
    }

    options.keyFilename = resolvedBigQueryCredentialsPath
  } else if (bigQueryCredentialsJson) {
    try {
      options.credentials = JSON.parse(bigQueryCredentialsJson)
    } catch {
      throw createInternalError("GOOGLE_APPLICATION_CREDENTIALS_JSON must be valid JSON")
    }
  }

  bigQueryClient = new BigQuery(options)
  return bigQueryClient
}

function buildHealthResponse() {
  return {
    ok: true,
    limits: {
      maxJsonBodyBytes: MAX_JSON_BODY_BYTES,
      maxTransformTextChars: MAX_TRANSFORM_TEXT_CHARS,
      maxFeedbackChars: MAX_FEEDBACK_CHARS
    },
    cors: {
      restricted: allowedOrigins.length > 0
    },
    ai: {
      provider: aiProvider,
      openaiConfigured: Boolean(openAiApiKey),
      deepSeekConfigured: Boolean(deepSeekApiKey),
      mockFallbackEnabled: ENABLE_MOCK_AI_FALLBACK
    },
    feedback: {
      configured: Boolean(feedbackWebhookUrl)
    },
    analytics: {
      configured: Boolean(
        bigQueryProjectId &&
        bigQueryDatasetId &&
        bigQueryEventsTableId &&
        (resolvedBigQueryCredentialsPath || bigQueryCredentialsJson)
      )
    }
  }
}

async function requestOpenAI(instructions, text, model) {
  if (!openAiApiKey) {
    throw createInternalError("OPENAI_API_KEY is not configured")
  }

  const maxOutputTokens = estimateMaxOutputTokens(text)
  const response = await fetchOpenAIResponses(instructions, text, model, maxOutputTokens)

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[AI Writer] OpenAI request failed", summarizeForLog(errorText))
    throw createInternalError("AI provider request failed")
  }

  const data = await response.json()
  const extracted = extractOpenAIOutput(data)
  if (hasOpenAIText(extracted)) {
    return extracted
  }

  if (data?.incomplete_details?.reason === "max_output_tokens") {
    const retryResponse = await fetchOpenAIResponses(instructions, text, model, estimateRetryMaxOutputTokens(text))

    if (!retryResponse.ok) {
      const retryErrorText = await retryResponse.text()
      console.error("[AI Writer] OpenAI retry failed", summarizeForLog(retryErrorText))
      throw createInternalError("AI provider request failed")
    }

    const retryData = await retryResponse.json()
    const retryExtracted = extractOpenAIOutput(retryData)
    if (hasOpenAIText(retryExtracted)) {
      return retryExtracted
    }

    console.warn("[AI Writer] Empty retry Responses output, falling back to chat.completions", summarizeForLog(retryData))
    return requestOpenAIChatFallback(instructions, text, model, estimateRetryMaxOutputTokens(text))
  }

  console.warn("[AI Writer] Empty Responses output, falling back to chat.completions", summarizeForLog(data))
  return requestOpenAIChatFallback(instructions, text, model, maxOutputTokens)
}

async function fetchOpenAIResponses(instructions, text, model, maxOutputTokens) {
  return fetch("https://api.openai.com/v1/responses", {
    signal: AbortSignal.timeout(AI_REQUEST_TIMEOUT_MS),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({
      model,
      reasoning: {
        effort: "minimal"
      },
      max_output_tokens: maxOutputTokens,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: instructions
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text
            }
          ]
        }
      ]
    })
  })
}

async function requestOpenAIStream(instructions, text, model, onDelta) {
  if (!openAiApiKey) {
    throw createInternalError("OPENAI_API_KEY is not configured")
  }

  const startedAt = performance.now()
  const maxOutputTokens = estimateMaxOutputTokens(text)
  const response = await fetch("https://api.openai.com/v1/responses", {
    signal: AbortSignal.timeout(AI_REQUEST_TIMEOUT_MS),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({
      model,
      stream: true,
      reasoning: {
        effort: "minimal"
      },
      max_output_tokens: maxOutputTokens,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: instructions
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text
            }
          ]
        }
      ]
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[AI Writer] OpenAI streaming request failed", summarizeForLog(errorText))
    throw createInternalError("AI provider request failed")
  }

  if (!response.body) {
    const fallbackText = await response.text()
    return {
      text: fallbackText,
      firstTokenMs: 0,
      totalMs: performance.now() - startedAt
    }
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ""
  let textOutput = ""
  let firstTokenMs = 0

  while (true) {
    const { value, done } = await reader.read()

    if (done) {
      buffer += decoder.decode()
      const processed = processOpenAIStreamBuffer(buffer, textOutput, onDelta, startedAt, (valueMs) => {
        firstTokenMs = firstTokenMs || valueMs
      })
      textOutput = processed.text
      break
    }

    buffer += decoder.decode(value, { stream: true })
    const processed = processOpenAIStreamBuffer(buffer, textOutput, onDelta, startedAt, (valueMs) => {
      firstTokenMs = firstTokenMs || valueMs
    })
    textOutput = processed.text
    buffer = processed.pending
  }

  return {
    text: textOutput,
    firstTokenMs,
    totalMs: performance.now() - startedAt
  }
}

async function requestDeepSeek(instructions, text) {
  if (!deepSeekApiKey) {
    throw createInternalError("DEEPSEEK_API_KEY is not configured")
  }

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    signal: AbortSignal.timeout(AI_REQUEST_TIMEOUT_MS),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${deepSeekApiKey}`
    },
    body: JSON.stringify({
      model: deepSeekModel,
      messages: [
        {
          role: "system",
          content: instructions
        },
        {
          role: "user",
          content: text
        }
      ],
      stream: false
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[AI Writer] DeepSeek request failed", summarizeForLog(errorText))
    throw createInternalError("AI provider request failed")
  }

  const data = await response.json()
  return extractDeepSeekOutput(data)
}

async function requestOpenAIChatFallback(instructions, text, model, maxOutputTokens = estimateRetryMaxOutputTokens(text)) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    signal: AbortSignal.timeout(AI_REQUEST_TIMEOUT_MS),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({
      model,
      reasoning_effort: "minimal",
      messages: [
        {
          role: "system",
          content: instructions
        },
        {
          role: "user",
          content: text
        }
      ],
      max_completion_tokens: maxOutputTokens
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[AI Writer] OpenAI chat fallback failed", summarizeForLog(errorText))
    throw createInternalError("AI provider request failed")
  }

  const data = await response.json()
  const extracted = extractChatCompletionOutput(data)
  if (extracted) {
    return extracted
  }

  console.error("[AI Writer] Empty chat.completions output", summarizeForLog(data))
  return ""
}

function buildInstructions(action, targetLanguage, tone) {
  const formattingRule = "Keep paragraph breaks and basic formatting. Return only the final text."

  switch (action) {
    case "improve":
      return `Rewrite for clarity and readability. Keep the original meaning. ${formattingRule}`
    case "grammar":
      return `Fix grammar and spelling only. Keep the original tone and meaning. ${formattingRule}`
    case "tone":
      return `Rewrite the text in a ${tone} tone. Keep the original meaning. ${formattingRule}`
    case "translate":
      return [
        `Translate the text into ${targetLanguage}.`,
        "Always translate the user's text, even if it is slang, rude, profane, or emotionally charged.",
        "Keep meaning, tone, paragraph breaks, and basic formatting.",
        "Return only the translated text.",
        "Do not add quotes, JSON, markdown, or extra text."
      ].join(" ")
    default:
      return "Improve the text for clarity. Return only the result."
  }
}

function extractOpenAIOutput(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return tryParseJson(data.output_text.trim())
  }

  if (!Array.isArray(data?.output)) {
    return ""
  }

  const parts = []

  for (const item of data.output) {
    if (!Array.isArray(item?.content)) {
      continue
    }

    for (const content of item.content) {
      if (content?.type === "output_text" && typeof content.text === "string") {
        parts.push(content.text)
      }
    }
  }

  return tryParseJson(parts.join("\n").trim())
}

function extractDeepSeekOutput(data) {
  return tryParseJson(String(data?.choices?.[0]?.message?.content || "").trim())
}

function extractChatCompletionOutput(data) {
  return extractTextValue(data?.choices?.[0]?.message?.content)
}

function hasOpenAIText(value) {
  if (typeof value === "string") {
    return Boolean(value.trim())
  }

  if (value && typeof value === "object") {
    return Boolean(String(value.text || value.translatedText || "").trim())
  }

  return false
}

function extractTextValue(value) {
  if (typeof value === "string") {
    return value.trim()
  }

  if (Array.isArray(value)) {
    const parts = value.map((item) => {
      if (typeof item === "string") {
        return item
      }

      if (item && typeof item === "object") {
        if (typeof item.text === "string") {
          return item.text
        }

        if (typeof item.output_text === "string") {
          return item.output_text
        }
      }

      return ""
    }).filter(Boolean)

    return parts.join("\n").trim()
  }

  if (value && typeof value === "object") {
    if (typeof value.text === "string") {
      return value.text.trim()
    }

    if (typeof value.output_text === "string") {
      return value.output_text.trim()
    }
  }

  return ""
}

function summarizeForLog(value) {
  try {
    return JSON.stringify(value).slice(0, 1200)
  } catch {
    return "[unserializable]"
  }
}

function mockTransform(action, text, targetLanguage) {
  switch (action) {
    case "improve":
      return `[MOCK IMPROVE]\n${text}`
    case "grammar":
      return `[MOCK GRAMMAR]\n${text}`
    case "tone":
      return `[MOCK TONE]\n${text}`
    case "translate":
      return {
        text: `[MOCK TRANSLATE -> ${targetLanguage}]\n${text}`,
        sourceLanguage: detectLanguageHeuristically(text),
        targetLanguage
      }
    default:
      return `[MOCK]\n${text}`
  }
}

function tryParseJson(value) {
  if (typeof value !== "string") {
    return value
  }

  const trimmed = value.trim()
  if (!trimmed.startsWith("{")) {
    return trimmed
  }

  try {
    return JSON.parse(trimmed)
  } catch {
    return trimmed
  }
}

function normalizeSupportedLanguage(language) {
  if (typeof language !== "string") {
    return ""
  }

  const normalized = language.trim().toLowerCase()
  return SUPPORTED_CORRESPONDENCE_LANGUAGES.find((item) => item.toLowerCase() === normalized) || ""
}

function detectLanguageHeuristically(text) {
  const value = String(text || "")

  if (/[\u0400-\u04FF]/u.test(value)) {
    if (/[ІіЇїЄєҐґ]/u.test(value)) {
      return "Ukrainian"
    }

    return "Russian"
  }

  if (/[\u3040-\u30ff]/u.test(value)) {
    return "Japanese"
  }

  if (/[\uac00-\ud7af]/u.test(value)) {
    return "Korean"
  }

  if (/[\u0590-\u05FF]/u.test(value)) {
    return "Hebrew"
  }

  if (/[\u0600-\u06FF]/u.test(value)) {
    return "Arabic"
  }

  if (/[\u0900-\u097F]/u.test(value)) {
    return "Hindi"
  }

  if (/[\u4E00-\u9FFF]/u.test(value)) {
    return "Chinese (Simplified)"
  }

  if (/\b(ahoj|dobry|dekuj|pojisteni|vozidlo|zpravy|prosim|skla|udalosti)\b/iu.test(value)) {
    return "Czech"
  }

  return "English"
}

function resolveProvider() {
  if (aiProvider === "openai") {
    return "openai"
  }

  if (aiProvider === "deepseek") {
    return "deepseek"
  }

  if (openAiApiKey) {
    return "openai"
  }

  if (deepSeekApiKey) {
    return "deepseek"
  }

  throw createInternalError("No AI provider is configured")
}

function resolveOpenAIModel() {
  return openAiModel
}

function createTransformContext(payload) {
  const action = String(payload?.action || "").trim()
  const text = String(payload?.text || "").trim()
  const targetLanguage = String(payload?.targetLanguage || "Spanish").trim()
  const tone = String(payload?.tone || "professional").trim().toLowerCase()
  const model = resolveOpenAIModel()

  if (!text) {
    throw createPublicError("Text is required", 400)
  }

  if (text.length > MAX_TRANSFORM_TEXT_CHARS) {
    throw createPublicError(`Text must be at most ${MAX_TRANSFORM_TEXT_CHARS} characters`, 400)
  }

  if (!SUPPORTED_ACTIONS.has(action)) {
    throw createPublicError("Unsupported action", 400)
  }

  if (action === "translate" && !normalizeSupportedLanguage(targetLanguage)) {
    throw createPublicError("Unsupported target language", 400)
  }

  if (action === "tone" && !SUPPORTED_TONES.has(tone)) {
    throw createPublicError("Unsupported tone", 400)
  }

  const provider = (!openAiApiKey && !deepSeekApiKey)
    ? resolveMockOrConfiguredProvider()
    : resolveProvider()
  const sourceLanguage = detectLanguageHeuristically(text)
  const cacheKey = getTransformCacheKey({
    action,
    text,
    targetLanguage: action === "translate" ? normalizeSupportedLanguage(targetLanguage) : targetLanguage,
    tone,
    model,
    provider
  })

  return {
    action,
    text,
    targetLanguage: action === "translate" ? normalizeSupportedLanguage(targetLanguage) : targetLanguage,
    tone,
    model,
    provider,
    sourceLanguage,
    cacheKey
  }
}

function buildTransformResult(action, text, sourceLanguage, targetLanguage) {
  if (action === "translate") {
    return {
      text,
      sourceLanguage,
      targetLanguage
    }
  }

  return { text }
}

function estimateMaxOutputTokens(text) {
  const estimated = Math.ceil(String(text || "").length / 2)
  return Math.max(600, Math.min(1600, estimated))
}

function estimateRetryMaxOutputTokens(text) {
  const estimated = Math.ceil(String(text || "").length)
  return Math.max(1200, Math.min(3200, estimated))
}

function getTransformCacheKey({ action, text, targetLanguage, tone, model, provider }) {
  return JSON.stringify({
    action: action || "",
    text,
    targetLanguage,
    tone,
    model,
    provider
  })
}

function getCachedTransform(cacheKey) {
  const cached = transformCache.get(cacheKey)
  if (!cached) {
    return null
  }

  if (Date.now() > cached.expiresAt) {
    transformCache.delete(cacheKey)
    return null
  }

  return structuredClone(cached.value)
}

function setCachedTransform(cacheKey, value) {
  if (!cacheKey) {
    return
  }

  if (transformCache.size >= TRANSFORM_CACHE_MAX_ENTRIES) {
    const oldestKey = transformCache.keys().next().value
    if (oldestKey) {
      transformCache.delete(oldestKey)
    }
  }

  transformCache.set(cacheKey, {
    value: structuredClone(value),
    expiresAt: Date.now() + TRANSFORM_CACHE_TTL_MS
  })
}

function writeStreamEvent(res, event) {
  res.write(`${JSON.stringify(event)}\n`)
}

function streamTextChunks(res, text) {
  const value = String(text || "")
  const chunkSize = 24

  for (let index = 0; index < value.length; index += chunkSize) {
    writeStreamEvent(res, {
      type: "delta",
      delta: value.slice(index, index + chunkSize)
    })
  }
}

function processOpenAIStreamBuffer(buffer, textOutput, onDelta, startedAt, setFirstTokenMs) {
  const lines = buffer.split("\n")
  const pending = lines.pop() || ""
  let nextText = textOutput

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed.startsWith("data:")) {
      continue
    }

    const rawData = trimmed.slice(5).trim()
    if (!rawData || rawData === "[DONE]") {
      continue
    }

    const event = JSON.parse(rawData)
    if (event?.type === "response.output_text.delta" && typeof event.delta === "string") {
      if (!nextText) {
        setFirstTokenMs(roundDuration(performance.now() - startedAt))
      }
      nextText += event.delta
      onDelta(event.delta)
      continue
    }

    if (event?.type === "response.output_text.done" && typeof event.text === "string" && !nextText) {
      if (!nextText) {
        setFirstTokenMs(roundDuration(performance.now() - startedAt))
      }
      nextText = event.text
      continue
    }

    if (!nextText && event?.type === "response.completed" && event.response) {
      nextText = String(extractOpenAIOutput(event.response) || "").trim()
    }
  }

  return {
    text: nextText,
    pending
  }
}

function roundDuration(value) {
  return Number((Number(value) || 0).toFixed(1))
}

function normalizeNullableString(value) {
  if (value == null) {
    return null
  }

  const normalized = String(value).trim()
  return normalized || null
}

function normalizeNullableBoolean(value) {
  if (value == null) {
    return null
  }

  if (typeof value === "boolean") {
    return value
  }

  if (value === "true") {
    return true
  }

  if (value === "false") {
    return false
  }

  return null
}

function normalizeNullableNumber(value) {
  if (value == null || value === "") {
    return null
  }

  const normalized = Number(value)
  return Number.isFinite(normalized) ? normalized : null
}

function normalizeProperties(value) {
  if (value == null) {
    return null
  }

  if (typeof value === "string") {
    try {
      return limitSerializedProperties(JSON.stringify(JSON.parse(value)))
    } catch {
      return limitSerializedProperties(JSON.stringify({ raw: value }))
    }
  }

  if (typeof value === "object") {
    return limitSerializedProperties(JSON.stringify(value))
  }

  return limitSerializedProperties(JSON.stringify({ value }))
}

function resolveCredentialPath(value, baseDir) {
  if (!value) {
    return ""
  }

  if (path.isAbsolute(value)) {
    return value
  }

  return path.resolve(baseDir, value)
}

function addCorsHeaders(req, res) {
  const requestOrigin = String(req.headers.origin || "").trim()
  const allowed = isOriginAllowed(requestOrigin)

  if (allowed) {
    res.setHeader("Access-Control-Allow-Origin", requestOrigin || "*")
  }

  res.setHeader("Vary", "Origin")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  return { allowed }
}

function logBlockedOrigin(req) {
  console.warn("[AI Writer] Blocked CORS origin", {
    origin: String(req.headers.origin || ""),
    method: req.method,
    path: req.url
  })
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = ""
    let settled = false
    const declaredLength = Number(req.headers["content-length"] || 0)

    if (declaredLength && declaredLength > MAX_JSON_BODY_BYTES) {
      settled = true
      reject(createPublicError(`Request body must be at most ${MAX_JSON_BODY_BYTES} bytes`, 413))
      req.destroy()
      return
    }

    req.on("data", (chunk) => {
      if (settled) {
        return
      }

      raw += chunk

      if (Buffer.byteLength(raw, "utf8") > MAX_JSON_BODY_BYTES) {
        settled = true
        reject(createPublicError(`Request body must be at most ${MAX_JSON_BODY_BYTES} bytes`, 413))
        req.destroy()
      }
    })

    req.on("end", () => {
      if (settled) {
        return
      }

      try {
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        reject(createPublicError("Invalid JSON body", 400))
      }
    })

    req.on("error", () => {
      if (!settled) {
        settled = true
        reject(createInternalError("Failed to read request body"))
      }
    })
  })
}

function loadEnvFile() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const envPath = path.join(__dirname, ".env")

  if (!fs.existsSync(envPath)) {
    return
  }

  const content = fs.readFileSync(envPath, "utf8")
  const lines = content.split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separatorIndex = trimmed.indexOf("=")
    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()

    if (key && !process.env[key]) {
      process.env[key] = value
    }
  }
}

function resolveMockOrConfiguredProvider() {
  if (ENABLE_MOCK_AI_FALLBACK) {
    return "mock"
  }

  throw createInternalError("No AI provider is configured")
}

function createPublicError(message, status = 400) {
  const error = new Error(message)
  error.status = status
  error.expose = true
  return error
}

function createInternalError(message, status = 500) {
  const error = new Error(message)
  error.status = status
  error.expose = false
  return error
}

function buildErrorResponse(error, fallbackMessage) {
  const status = Number(error?.status) || 500
  const expose = Boolean(error?.expose) && status < 500
  const message = expose
    ? (error instanceof Error ? error.message : fallbackMessage)
    : fallbackMessage

  if (!expose && error) {
    console.error("[AI Writer] Request failed", error)
  }

  return { status, message }
}

function addSecurityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff")
  res.setHeader("Referrer-Policy", "no-referrer")
  res.setHeader("X-Frame-Options", "DENY")
  res.setHeader("Cache-Control", "no-store")
}

function enforceRateLimit(req, scope, limit) {
  const ip = getClientIp(req)
  const key = `${scope}:${ip}`
  const now = Date.now()
  const bucket = rateLimitBuckets.get(key)

  if (!bucket || now >= bucket.resetAt) {
    rateLimitBuckets.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    })
    cleanupRateLimitBuckets(now)
    return
  }

  if (bucket.count >= limit) {
    throw createPublicError("Too many requests. Please try again later.", 429)
  }

  bucket.count += 1
}

function cleanupRateLimitBuckets(now) {
  if (rateLimitBuckets.size < 2000) {
    return
  }

  for (const [key, bucket] of rateLimitBuckets.entries()) {
    if (now >= bucket.resetAt) {
      rateLimitBuckets.delete(key)
    }
  }
}

function getClientIp(req) {
  const forwardedFor = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim()
  const realIp = String(req.headers["x-real-ip"] || "").trim()
  const socketIp = String(req.socket?.remoteAddress || "").trim()
  return forwardedFor || realIp || socketIp || "unknown"
}

function isAllowedWebhookUrl(value) {
  let parsed

  try {
    parsed = new URL(value)
  } catch {
    return false
  }

  if (parsed.protocol === "https:") {
    return true
  }

  if (parsed.protocol !== "http:") {
    return false
  }

  return parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1"
}

function parseAllowedOrigins(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

function isOriginAllowed(origin) {
  if (!origin) {
    return true
  }

  if (allowedOrigins.length === 0) {
    return true
  }

  return allowedOrigins.includes(origin)
}

function limitSerializedProperties(value) {
  const serialized = String(value || "")
  if (serialized.length <= MAX_ANALYTICS_PROPERTIES_CHARS) {
    return serialized
  }

  return JSON.stringify({
    truncated: true,
    value: serialized.slice(0, MAX_ANALYTICS_PROPERTIES_CHARS)
  })
}
