# Release Checklist

## Before Packaging

- Confirm the local backend works with the production `.env`
- Set backend safety limits such as `MAX_JSON_BODY_BYTES`, `MAX_TRANSFORM_TEXT_CHARS`, and `MAX_FEEDBACK_CHARS`
- Make sure `ENABLE_MOCK_AI_FALLBACK=false` in production
- Configure `CORS_ALLOWED_ORIGINS` for the production backend before release
- Confirm the packaged extension has `BUILD_CHANNEL = "production"` in `dist/chrome-store/content.js`
- Verify `Translate`, `Grammar`, `Improve`, and `Tone` on at least:
  - Telegram Web
  - Facebook or Messenger
  - Gmail or another email composer
- Verify the daily limit modal
- Verify the feedback form submits successfully
- Verify the app-language picker works
- Verify `Replace text` works in common editable fields

## Chrome Web Store Readiness

- Prepare at least 3 screenshots for the store listing
- Prepare a short description and a full description
- Publish the privacy policy from `PRIVACY_POLICY.md` to a public URL
- Fill in the Chrome Web Store privacy questionnaire
- Justify `storage`, the production backend host permission, and the on-page content script behavior in the dashboard

## Listing Copy

- Name: `WriteMate AI`
- Short description:
  - `All-in-one writing, translation, and communication assistant for real conversations.`
- Full description:
  - `Stop switching between translators, grammar tools, and chat apps.`
  - ``
  - `WriteMate AI is your all-in-one writing, translation, and communication assistant — built for real conversations.`
  - ``
  - `---`
  - ``
  - `Tired of writing in a language you're not confident in?`
  - ``
  - `Here’s how WriteMate AI helps:`
  - ``
  - `---`
  - ``
  - `💼 "I need to reply to an email in English, but I'm not sure it sounds right."`
  - ``
  - `WriteMate AI fixes grammar, improves clarity, and rewrites your message to sound natural and professional — in seconds.`
  - ``
  - `---`
  - ``
  - `🌍 "I'm chatting with someone in another language."`
  - ``
  - `WriteMate AI detects the language automatically and helps you translate and reply instantly — without switching tabs.`
  - ``
  - `---`
  - ``
  - `💬 "I want my message to sound more polite, confident, or friendly."`
  - ``
  - `Adjust tone with one click — make your text fit any situation.`
  - ``
  - `---`
  - ``
  - `⚡ "I need to respond quickly in chats or customer support."`
  - ``
  - `Generate smart replies and save time while keeping your communication clear and accurate.`
  - ``
  - `---`
  - ``
  - `✍️ "I wrote something, but it feels awkward."`
  - ``
  - `Rewrite sentences, simplify text, or improve readability instantly.`
  - ``
  - `---`
  - ``
  - `📚 "I'm learning a language and want to write correctly."`
  - ``
  - `WriteMate AI helps you practice by correcting mistakes and suggesting better phrasing.`
  - ``
  - `---`
  - ``
  - `🚀 What you can do with WriteMate AI:`
  - `• Fix grammar and improve writing`
  - `• Rewrite and simplify text`
  - `• Translate across multiple languages`
  - `• Adjust tone of voice`
  - `• Generate replies in any language`
  - `• Communicate faster and more confidently`
  - ``
  - `---`
  - ``
  - `No matter where you write — emails, chats, or social media — WriteMate AI helps you express yourself clearly and without language barriers.`
  - ``
  - `Write better. Reply faster. Communicate with less friction.`
- Single purpose:
  - `Helps users transform selected text on web pages with AI.`

## Payment Readiness

- Keep the `$2` buy flow as a non-payment placeholder for now
- Do not enable paid claims in the store listing until payment is actually live
- Make sure the UI clearly says payment is not active yet

## Feedback Pipeline

- Set `FEEDBACK_WEBHOOK_URL` in `backend/.env`
- Verify rows are written to Google Sheets
- Verify the visible success state after feedback is submitted

## Security Hardening

- Configure `CORS_ALLOWED_ORIGINS` for the production backend
- Keep backend rate limits enabled in production
- Verify `/health` does not expose secrets or unnecessary infrastructure details
- Confirm the release package contains only the production backend host permission
- Confirm debug shortcuts do not run in the packaged production build
- Confirm the paid-interest button records interest but does not reset limits in the packaged production build

## Packaging

- Run:
  - `node scripts/package-extension.mjs --backend-url=https://your-app.up.railway.app`
- Load the unpacked extension from `extension/`
- Final smoke test in Chrome
- Smoke test the generated build from `dist/chrome-store/`
- Upload `dist/WriteMateAI-chrome-<version>.zip`
- Upload through Chrome Web Store Developer Dashboard

## Remaining Gaps Right Now

- Public privacy-policy URL is still missing
- Store screenshots are still missing
- Real payment flow is still not implemented
