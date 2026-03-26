const DAILY_FREE_LIMIT = 20
const DAILY_USAGE_STORAGE_KEY = "dailyFreeUsage"
const BACKEND_BASE_URL_STORAGE_KEY = "backendBaseUrl"
const DEFAULT_BACKEND_BASE_URL = "http://localhost:8787"

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "AI_TRANSFORM") {
    void handleTransform(message.payload)
      .then((result) => sendResponse({ ok: true, result }))
      .catch((error) => {
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

  return false
})

async function handleTransform(payload) {
  await ensureDailyQuotaAvailable()

  const response = await fetch(`${await getBackendBaseUrl()}/api/transform`, {
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
  return result
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
