# Release Status

Last updated: April 16, 2026

## Ready

- Chrome extension source exists in `extension/`
- Backend source exists in `backend/`
- Store-ready packaging script exists in `scripts/package-extension.mjs`
- Store packaging switches the content script to `BUILD_CHANNEL = "production"`
- Privacy policy text exists in `PRIVACY_POLICY.md`
- Public privacy policy HTML page exists in `docs/privacy-policy.html`
- Public privacy policy URL is live at `https://liinad-gs.github.io/WriteMateAI/privacy-policy.html`
- Public GitHub Pages project page is live at `https://liinad-gs.github.io/WriteMateAI/`
- Chrome Web Store field copy exists in `CHROME_WEB_STORE_FIELDS.md`
- Submission guidance exists in `CHROME_WEB_STORE_SUBMISSION.md`
- Screenshot plan exists in `SCREENSHOT_SHOTLIST.md`
- Backend request size and payload limits are implemented
- Backend CORS allowlist support is implemented
- Paid-interest button can be measured without resetting limits in the packaged production build
- Production backend is deployed at `https://writemateai.up.railway.app`
- Draft production zip was generated at `dist/WriteMateAI-chrome-0.2.0.zip`
- Draft production zip points to the Railway backend and uses `BUILD_CHANNEL = "production"`

## Still Needed Before Submission

- Fix production backend smoke-test failures:
  - `/api/transform/stream` currently returns `Transform request failed`
  - `/api/events` currently returns `Analytics request failed`
  - `/api/feedback` currently returns `Feedback request failed`
- Production `CORS_ALLOWED_ORIGINS` set to the final Chrome extension origin
- Final release build regenerated after backend smoke tests pass
- Release smoke test against the generated build
- Store screenshots
- Chrome Web Store listing form completed

## Highest Priority Next Steps

1. Open Railway deploy logs and resolve the exact OpenAI, BigQuery, and feedback webhook errors
2. Re-run production smoke tests for `/api/transform/stream`, `/api/events`, and `/api/feedback`
3. Create the Chrome Web Store draft and get the extension ID
4. Set `CORS_ALLOWED_ORIGINS=chrome-extension://<extension-id>` for the production backend
5. Rebuild the final zip with `node scripts/package-extension.mjs --backend-url=https://writemateai.up.railway.app`
6. Load `dist/chrome-store/` in Chrome and smoke test the packaged build
7. Upload the final zip and listing assets to Chrome Web Store
