const DAILY_FREE_LIMIT = 20
const DAILY_USAGE_STORAGE_KEY = "dailyFreeUsage"
const BACKEND_BASE_URL_STORAGE_KEY = "backendBaseUrl"
const ANALYTICS_USER_ID_STORAGE_KEY = "analyticsUserId"
const DEFAULT_BACKEND_BASE_URL = "http://localhost:8787"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "AI_TRANSFORM") {
    void handleTransform(message.payload, sender)
      .then((result) => sendResponse({ ok: true, result }))
      .catch(async (error) => {
        await safeTrackAnalyticsEvent({
          event_name: "transform_failed",
          session_id: message?.payload?.sessionId,
          action: message?.payload?.action,
          selection_kind: message?.payload?.selectionKind,
          success: false,
          error_code: error?.code,
          error_message: error instanceof Error ? error.message : "Unknown error",
          properties: {
            requestId: message?.payload?.requestId || null
          }
        }, sender)
        sendResponse({
          ok: false,
          error: error instanceof Error ? error.message : "Unknown error",
          code: error?.code,
          details: error?.details
        })
      })

    return true
  }

  if (message?.type === "SUBMIT_FEEDBACK") {
    void submitFeedback(message.payload)
      .then((result) => sendResponse({ ok: true, result }))
      .catch((error) => {
        sendResponse({
          ok: false,
          error: error instanceof Error ? error.message : "Unknown error"
        })
      })

    return true
  }

  if (message?.type === "TRACK_EVENT") {
    void trackAnalyticsEvent(message.payload, sender)
      .then(() => sendResponse({ ok: true }))
      .catch((error) => {
        sendResponse({
          ok: false,
          error: error instanceof Error ? error.message : "Unknown error"
        })
      })

    return true
  }

  return false
})

async function handleTransform(payload, sender) {
  const startedAt = performance.now()
  const requestId = String(payload?.requestId || "")
  await safeTrackAnalyticsEvent({
    event_name: "transform_started",
    session_id: payload?.sessionId,
    action: payload?.action,
    selection_kind: payload?.selectionKind,
    properties: {
      requestId,
      targetLanguage: payload?.targetLanguage || null,
      tone: payload?.tone || null,
      textLength: String(payload?.text || "").length
    }
  }, sender)
  const quotaCheckStartedAt = performance.now()
  await ensureDailyQuotaAvailable()
  const quotaCheckMs = performance.now() - quotaCheckStartedAt
  const backendBaseUrl = await getBackendBaseUrl()
  const backendFetchStartedAt = performance.now()
  let response = await fetch(`${backendBaseUrl}/api/transform/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  if (response.status === 404) {
    response = await fetch(`${backendBaseUrl}/api/transform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text || "Backend request failed")
    }

    const result = await response.json()
    await incrementDailyUsage()
    const metrics = {
      totalMs: roundDuration(performance.now() - startedAt),
      quotaCheckMs: roundDuration(quotaCheckMs),
      backendConnectMs: roundDuration(backendFetchStartedAt - startedAt),
      backendFirstChunkMs: 0,
      backend: {
        provider: "fallback",
        cacheHit: false,
        fallbackToNonStreaming: true
      }
    }
    console.info("[AI Writer] Transform metrics", metrics)

    await safeTrackAnalyticsEvent({
      event_name: "transform_succeeded",
      session_id: payload?.sessionId,
      action: payload?.action,
      selection_kind: payload?.selectionKind,
      success: true,
      duration_ms: metrics.totalMs,
      properties: {
        requestId,
        source: "background_fallback",
        metrics
      }
    }, sender)

    return {
      ...result,
      metrics
    }
  }

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || "Backend request failed")
  }

  if (!response.body) {
    throw new Error("Streaming response is not available")
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ""
  let finalResult = null
  let backendMetrics = null
  let firstBackendChunkMs = null

  while (true) {
    const { value, done } = await reader.read()

    if (done) {
      buffer += decoder.decode()
      await processStreamBuffer(buffer, handleStreamEvent)
      break
    }

    if (firstBackendChunkMs == null) {
      firstBackendChunkMs = performance.now() - backendFetchStartedAt
    }

    buffer += decoder.decode(value, { stream: true })
    buffer = await processStreamBuffer(buffer, handleStreamEvent)
  }

  if (!finalResult) {
    throw new Error("Stream ended before the final result arrived")
  }

  await incrementDailyUsage()
  const metrics = {
    totalMs: roundDuration(performance.now() - startedAt),
    quotaCheckMs: roundDuration(quotaCheckMs),
    backendConnectMs: roundDuration(backendFetchStartedAt - startedAt),
    backendFirstChunkMs: roundDuration(firstBackendChunkMs ?? 0),
    backend: backendMetrics
  }
  console.info("[AI Writer] Transform metrics", metrics)

  await safeTrackAnalyticsEvent({
    event_name: "transform_succeeded",
    session_id: payload?.sessionId,
    action: payload?.action,
    selection_kind: payload?.selectionKind,
    success: true,
    duration_ms: metrics.totalMs,
    properties: {
      requestId,
      source: "background_stream",
      metrics
    }
  }, sender)

  return {
    ...finalResult,
    metrics
  }

  async function handleStreamEvent(event) {
    if (!event || typeof event !== "object") {
      return
    }

    if (event.type === "delta" && typeof event.delta === "string") {
      await sendStreamMessage(sender, {
        type: "AI_TRANSFORM_DELTA",
        requestId,
        delta: event.delta
      })
      return
    }

    if (event.type === "done") {
      finalResult = event.result
      backendMetrics = event.metrics || null
      return
    }

    if (event.type === "error") {
      const error = new Error(event.error || "Streaming request failed")
      throw error
    }
  }
}

async function submitFeedback(payload) {
  const response = await fetch(`${await getBackendBaseUrl()}/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || "Feedback request failed")
  }

  return response.json()
}

async function trackAnalyticsEvent(payload, sender) {
  const event = await buildAnalyticsEvent(payload, sender)
  const response = await fetch(`${await getBackendBaseUrl()}/api/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || "Analytics request failed")
  }

  return response.json()
}

async function safeTrackAnalyticsEvent(payload, sender) {
  try {
    await trackAnalyticsEvent(payload, sender)
  } catch (error) {
    console.warn("[AI Writer] Analytics event failed", error)
  }
}

async function ensureDailyQuotaAvailable() {
  const usage = await getDailyUsage()

  if (usage.count < DAILY_FREE_LIMIT) {
    return
  }

  const error = new Error(`Daily free limit reached. You have used ${DAILY_FREE_LIMIT} results today.`)
  error.code = "DAILY_LIMIT_REACHED"
  error.details = {
    limit: DAILY_FREE_LIMIT,
    count: usage.count
  }
  throw error
}

async function incrementDailyUsage() {
  const usage = await getDailyUsage()
  await chrome.storage.local.set({
    [DAILY_USAGE_STORAGE_KEY]: {
      date: usage.date,
      count: usage.count + 1
    }
  })
}

async function getDailyUsage() {
  const today = getTodayKey()
  const result = await chrome.storage.local.get(DAILY_USAGE_STORAGE_KEY)
  const saved = result?.[DAILY_USAGE_STORAGE_KEY]

  if (!saved || saved.date !== today || typeof saved.count !== "number") {
    const resetUsage = {
      date: today,
      count: 0
    }
    await chrome.storage.local.set({
      [DAILY_USAGE_STORAGE_KEY]: resetUsage
    })
    return resetUsage
  }

  return saved
}

function getTodayKey() {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date())
}

async function getBackendBaseUrl() {
  const result = await chrome.storage.local.get(BACKEND_BASE_URL_STORAGE_KEY)
  const configuredUrl = typeof result?.[BACKEND_BASE_URL_STORAGE_KEY] === "string"
    ? result[BACKEND_BASE_URL_STORAGE_KEY].trim()
    : ""

  return (configuredUrl || DEFAULT_BACKEND_BASE_URL).replace(/\/+$/, "")
}

async function buildAnalyticsEvent(payload, sender) {
  const userId = await getOrCreateAnalyticsUserId()
  const pageHost = getPageHost(payload?.page_host || payload?.pageHost, sender)

  return {
    event_time: new Date().toISOString(),
    event_name: String(payload?.event_name || payload?.eventName || "").trim(),
    user_id: userId,
    session_id: normalizeString(payload?.session_id ?? payload?.sessionId),
    extension_version: chrome.runtime.getManifest().version,
    page_host: pageHost,
    action: normalizeString(payload?.action),
    selection_kind: normalizeString(payload?.selection_kind ?? payload?.selectionKind),
    success: typeof payload?.success === "boolean" ? payload.success : null,
    duration_ms: normalizeNumber(payload?.duration_ms ?? payload?.durationMs),
    error_code: normalizeString(payload?.error_code ?? payload?.errorCode),
    error_message: normalizeString(payload?.error_message ?? payload?.errorMessage),
    properties: normalizeProperties({
      source: "extension",
      ...(payload?.properties && typeof payload.properties === "object" ? payload.properties : {})
    })
  }
}

async function getOrCreateAnalyticsUserId() {
  const result = await chrome.storage.local.get(ANALYTICS_USER_ID_STORAGE_KEY)
  const existingId = normalizeString(result?.[ANALYTICS_USER_ID_STORAGE_KEY])
  if (existingId) {
    return existingId
  }

  const nextId = crypto.randomUUID()
  await chrome.storage.local.set({
    [ANALYTICS_USER_ID_STORAGE_KEY]: nextId
  })
  return nextId
}

function getPageHost(explicitHost, sender) {
  const normalizedExplicitHost = normalizeString(explicitHost)
  if (normalizedExplicitHost) {
    return normalizedExplicitHost
  }

  try {
    return sender?.url ? new URL(sender.url).hostname || null : null
  } catch {
    return null
  }
}

function normalizeString(value) {
  if (value == null) {
    return null
  }

  const normalized = String(value).trim()
  return normalized || null
}

function normalizeNumber(value) {
  if (value == null || value === "") {
    return null
  }

  const normalized = Number(value)
  return Number.isFinite(normalized) ? normalized : null
}

function normalizeProperties(value) {
  if (!value || typeof value !== "object") {
    return null
  }

  return value
}

async function processStreamBuffer(buffer, onEvent) {
  const lines = buffer.split("\n")
  const pending = lines.pop() || ""

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      continue
    }

    const event = JSON.parse(trimmed)
    await onEvent(event)
  }

  return pending
}

async function sendStreamMessage(sender, message) {
  const tabId = sender?.tab?.id
  if (typeof tabId !== "number") {
    return
  }

  const options = typeof sender?.frameId === "number"
    ? { frameId: sender.frameId }
    : undefined

  try {
    await chrome.tabs.sendMessage(tabId, message, options)
  } catch {
    // The user may have navigated away before the streamed update arrived.
  }
}

function roundDuration(value) {
  return Number((Number(value) || 0).toFixed(1))
}
