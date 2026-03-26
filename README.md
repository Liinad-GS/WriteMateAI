# AI Writing Assistant MVP

This repository contains a simple MVP of a Chrome extension plus a tiny backend proxy.

## What the MVP does

- Detects selected text on a page
- Shows a small action button near the selection
- Opens a compact widget with actions:
  - Translate
  - Grammar check
  - Improve
  - Tone rewrite
- Sends the text to a backend proxy
- Lets the user apply the returned text back into the page
- Supports a daily free limit modal and feedback submission flow

## Project structure

- `extension/` - Chrome extension files
- `backend/` - Node.js proxy server
- `PRIVACY_POLICY.md` - draft privacy policy for the store listing
- `RELEASE_CHECKLIST.md` - release prep checklist

## Backend config

The backend reads `backend/.env`.

Recommended OpenAI setup:

- `AI_PROVIDER=openai`
- `OPENAI_API_KEY=...`
- `OPENAI_MODEL=gpt-5-nano`

`gpt-5-nano` stays the default for the cheapest usage. The extension UI can temporarily switch a request to `gpt-5-mini` when you want a faster response and are okay with higher token cost.

## Feedback webhook

To enable feedback delivery from the limit modal, set:

- `FEEDBACK_WEBHOOK_URL=...`

This can point to a Google Apps Script web app URL that writes rows into Google Sheets.

## Release prep

Before publishing, check:

- `RELEASE_CHECKLIST.md`
- `PRIVACY_POLICY.md`

The biggest remaining store blockers are:

- missing icon assets
- missing public privacy-policy URL
- missing listing screenshots
- placeholder payment flow only

## Railway deployment

Recommended production setup:

1. Deploy `backend/` to Railway as a Node service
2. Set Railway variables:
   - `AI_PROVIDER`
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`
   - `FEEDBACK_WEBHOOK_URL`
   - `PORT`
3. Verify `GET /health`
4. Set the extension backend URL in Chrome extension storage:

```js
chrome.storage.local.set({
  backendBaseUrl: "https://your-app.up.railway.app"
})
```

For local development, if this value is missing, the extension falls back to:

```text
http://localhost:8787
```
