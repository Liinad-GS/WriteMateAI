# WriteMate AI Release Runbook

This guide is written for a non-developer release flow. Codex can run checks, build the zip, inspect files, and verify endpoints. The product owner still needs to click through account-specific dashboards such as hosting, Google Cloud, and Chrome Web Store.

## Current Status

Done:

- Public GitHub repository: `https://github.com/Liinad-GS/WriteMateAI`
- GitHub Pages project page: `https://liinad-gs.github.io/WriteMateAI/`
- Public privacy policy: `https://liinad-gs.github.io/WriteMateAI/privacy-policy.html`
- Chrome extension source
- Backend source
- Chrome Web Store packaging script
- Store listing copy and privacy questionnaire draft

Still needed:

- Production backend HTTPS URL
- Chrome Web Store draft item and extension ID
- Production CORS allowlist set to the final extension ID
- Final release zip built with the production backend URL
- Store screenshots
- Final packaged smoke test

## Stage 1: Production Backend

Goal: get a public HTTPS backend URL such as:

```text
https://your-app.up.railway.app
```

You do:

1. Open the hosting dashboard, for example Railway, Render, or Fly.
2. Create or open the backend service for this project.
3. Add the production environment variables.
4. Send Codex the public HTTPS URL.

Codex does:

- Verify `/health`
- Verify `/api/transform/stream`
- Verify `/api/events`
- Verify `/api/feedback`, if the feedback webhook is configured
- Report any missing environment variables or backend errors

Production environment variables:

```env
AI_PROVIDER=openai
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5-mini
AI_REQUEST_TIMEOUT_MS=15000
TRANSFORM_CACHE_TTL_MS=300000
TRANSFORM_CACHE_MAX_ENTRIES=200
MAX_JSON_BODY_BYTES=65536
MAX_TRANSFORM_TEXT_CHARS=12000
MAX_FEEDBACK_CHARS=2000
MAX_ANALYTICS_PROPERTIES_CHARS=8000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_TRANSFORM=20
RATE_LIMIT_MAX_FEEDBACK=10
RATE_LIMIT_MAX_EVENTS=120
ENABLE_MOCK_AI_FALLBACK=false
FEEDBACK_WEBHOOK_URL=https://your-webhook.example.com/feedback
GOOGLE_APPLICATION_CREDENTIALS=./your-service-account.json
BIGQUERY_PROJECT_ID=your-gcp-project-id
BIGQUERY_DATASET_ID=lgext_analytics
BIGQUERY_EVENTS_TABLE_ID=events
CORS_ALLOWED_ORIGINS=
```

Note: `CORS_ALLOWED_ORIGINS` can be finalized after the Chrome Web Store draft gives us the extension ID.

## Stage 2: First Store Draft

Goal: create a Chrome Web Store item so we can get the final extension ID.

Codex does:

1. Build a draft zip with the production backend URL:

```bash
node scripts/package-extension.mjs --backend-url=https://your-production-backend.example.com
```

2. Tell you the exact zip path to upload.

You do:

1. Open the Chrome Web Store Developer Dashboard.
2. Create a new item.
3. Upload the zip Codex built.
4. Copy the extension ID from the item URL or dashboard.
5. Send Codex the extension ID.

Do not submit for review yet.

## Stage 3: Lock Backend CORS

Goal: make the backend accept requests only from the final extension origin.

You do:

1. Open the backend hosting dashboard.
2. Set:

```env
CORS_ALLOWED_ORIGINS=chrome-extension://<extension-id>
```

3. Redeploy or restart the backend if the host requires it.
4. Tell Codex when it is redeployed.

Codex does:

- Re-run backend smoke tests
- Rebuild the final zip
- Check `dist/chrome-store/manifest.json`
- Check `dist/chrome-store/background.js`
- Check `dist/chrome-store/content.js` has `BUILD_CHANNEL = "production"`

## Stage 4: Packaged Extension Smoke Test

Goal: test the exact production package before submission.

You do:

1. Open `chrome://extensions`
2. Enable Developer mode
3. Click "Load unpacked"
4. Select `dist/chrome-store/`
5. Open a normal web page with text
6. Select text and test the main flows

Codex can guide you through the exact clicks and interpret errors.

Test checklist:

- Translate works
- Grammar works
- Improve works
- Tone works
- Streaming text grows smoothly
- Copy result works
- Replace text works in a text area
- Daily limit modal opens
- "Buy access" records interest but does not reset limits in production build
- Feedback submits, if configured

## Stage 5: Store Listing

You do:

1. Fill in the Chrome Web Store listing fields.
2. Upload screenshots.
3. Add the privacy policy URL.
4. Fill in privacy questionnaire answers.
5. Submit for review.

Codex does:

- Provide listing text from `CHROME_WEB_STORE_SUBMISSION.md`
- Check screenshots for obvious privacy issues
- Verify the final zip before upload
- Help answer review questions if Chrome asks for clarification

Important URL:

```text
https://liinad-gs.github.io/WriteMateAI/privacy-policy.html
```

## What To Send Codex Next

Send one of these:

- Production backend URL, if it already exists
- A screenshot of your hosting dashboard, if you are not sure what to click
- Chrome Web Store extension ID, after you create the draft item
- A screenshot of any error you see during upload or smoke test
