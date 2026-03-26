import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"

loadEnvFile()

const port = Number(process.env.PORT || 8787)
const aiProvider = process.env.AI_PROVIDER || "auto"
const openAiApiKey = process.env.OPENAI_API_KEY
const openAiModel = process.env.OPENAI_MODEL || "gpt-5-nano"
const deepSeekApiKey = process.env.DEEPSEEK_API_KEY
const deepSeekModel = process.env.DEEPSEEK_MODEL || "deepseek-chat"
const feedbackWebhookUrl = process.env.FEEDBACK_WEBHOOK_URL || ""
const OPENAI_MODEL_OPTIONS = {
  nano: "gpt-5-nano",
  mini: "gpt-5-mini"
}
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
  addCorsHeaders(res)

  if (req.method === "OPTIONS") {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ ok: true }))
    return
  }

  if (req.method === "POST" && req.url === "/api/transform") {
    try {
      const body = await readJson(req)
      const output = await transformText(body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(output))
      return
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected server error"
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
      res.end(message)
      return
    }
  }

  if (req.method === "POST" && req.url === "/api/feedback") {
    try {
      const body = await readJson(req)
      const output = await submitFeedback(body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(output))
      return
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected server error"
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
      res.end(message)
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
  const action = payload?.action
  const text = String(payload?.text || "").trim()
  const targetLanguage = String(payload?.targetLanguage || "Spanish").trim()
  const tone = String(payload?.tone || "professional").trim()
  const model = resolveOpenAIModel(payload?.modelTier)

  if (!text) {
    throw new Error("Text is required")
  }

  if (!openAiApiKey && !deepSeekApiKey) {
    return mockTransform(action, text, targetLanguage)
  }

  const instructions = buildInstructions(action, targetLanguage, tone)
  const provider = resolveProvider()
  const output = provider === "deepseek"
    ? await requestDeepSeek(instructions, text)
    : await requestOpenAI(instructions, text, model)

  if (action === "translate") {
    const translationResult = normalizeTranslationResult(output, text, targetLanguage)

    if (!translationResult.text) {
      throw new Error("No text returned from AI")
    }

    return translationResult
  }

  const outputText = typeof output === "string" ? output.trim() : String(output?.text || "").trim()
  if (!outputText) {
    throw new Error("No text returned from AI")
  }

  return { text: outputText }
}

async function submitFeedback(payload) {
  const message = String(payload?.message || "").trim()
  if (!message) {
    throw new Error("Feedback text is required")
  }

  if (!feedbackWebhookUrl) {
    throw new Error("FEEDBACK_WEBHOOK_URL is not configured")
  }

  const feedbackPayload = {
    createdAt: new Date().toISOString(),
    feedback: message,
    appLanguage: String(payload?.appLanguage || ""),
    currentAction: String(payload?.currentAction || ""),
    modelTier: String(payload?.modelTier || ""),
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

async function requestOpenAI(instructions, text, model) {
  if (!openAiApiKey) {
    throw new Error("OPENAI_API_KEY is not configured")
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({
      model,
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
    throw new Error(`OpenAI request failed: ${errorText}`)
  }

  const data = await response.json()
  return extractOpenAIOutput(data)
}

async function requestDeepSeek(instructions, text) {
  if (!deepSeekApiKey) {
    throw new Error("DEEPSEEK_API_KEY is not configured")
  }

  const response = await fetch("https://api.deepseek.com/chat/completions", {
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
    throw new Error(`DeepSeek request failed: ${errorText}`)
  }

  const data = await response.json()
  return extractDeepSeekOutput(data)
}

function buildInstructions(action, targetLanguage, tone) {
  const formattingRule = "Preserve paragraph breaks, line breaks, list structure, and basic formatting whenever possible. Do not collapse multiple paragraphs into one."

  switch (action) {
    case "improve":
      return `Improve the text for clarity and style. Keep the original meaning. ${formattingRule} Return only the rewritten text.`
    case "grammar":
      return `Fix grammar and spelling mistakes only. Preserve tone and meaning. ${formattingRule} Return only the corrected text.`
    case "tone":
      return `Rewrite the text in a ${tone} tone. Keep the original meaning. ${formattingRule} Return only the rewritten text.`
    case "translate":
      return [
        `Translate the text into ${targetLanguage}. Preserve meaning and tone.`,
        formattingRule,
        "Also detect the source language.",
        `The source language must be one of: ${SUPPORTED_CORRESPONDENCE_LANGUAGES.join(", ")}.`,
        "Return strict JSON with exactly this shape:",
        '{"translatedText":"...", "sourceLanguage":"..."}',
        "Do not add markdown fences or extra commentary."
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
        translatedText: `[MOCK TRANSLATE -> ${targetLanguage}]\n${text}`,
        sourceLanguage: detectLanguageHeuristically(text)
      }
    default:
      return `[MOCK]\n${text}`
  }
}

function normalizeTranslationResult(output, text, targetLanguage) {
  if (output && typeof output === "object" && !Array.isArray(output)) {
    const translatedText = String(output.translatedText || output.text || "").trim()
    const sourceLanguage = normalizeSupportedLanguage(output.sourceLanguage) || detectLanguageHeuristically(text)

    return {
      text: translatedText,
      sourceLanguage,
      targetLanguage
    }
  }

  return {
    text: typeof output === "string" ? output.trim() : "",
    sourceLanguage: detectLanguageHeuristically(text),
    targetLanguage
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
    if (/[ЁёЫыЭэЪъ]/u.test(value)) {
      return "Russian"
    }
    return "Ukrainian"
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

  throw new Error("No AI provider is configured")
}

function resolveOpenAIModel(modelTier) {
  if (typeof modelTier === "string" && OPENAI_MODEL_OPTIONS[modelTier]) {
    return OPENAI_MODEL_OPTIONS[modelTier]
  }

  return openAiModel
}

function addCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = ""

    req.on("data", (chunk) => {
      raw += chunk
    })

    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        reject(new Error("Invalid JSON body"))
      }
    })

    req.on("error", () => {
      reject(new Error("Failed to read request body"))
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
