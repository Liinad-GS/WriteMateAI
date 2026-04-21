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
- Paid-interest button can be measured and resets limits in the packaged production build
- Production backend is deployed at `https://writemateai.up.railway.app`
- Draft production zip was generated at `dist/WriteMateAI-chrome-0.2.0.zip`
- Draft production zip points to the Railway backend and uses `BUILD_CHANNEL = "production"`
- Production backend smoke tests pass:
  - `/api/transform/stream` returns streamed OpenAI text
  - `/api/events` records analytics events
  - `/api/feedback` accepts feedback messages
- Chrome Web Store extension ID is `bdhhojkkdjidacohlgalckihekfpfaap`
- Production `CORS_ALLOWED_ORIGINS` is restricted to `chrome-extension://bdhhojkkdjidacohlgalckihekfpfaap`
- Final production zip was regenerated at `dist/WriteMateAI-chrome-0.2.0.zip`

## Still Needed Before Submission

- Release smoke test against the generated build
- Store screenshots
- Chrome Web Store listing form completed

## Highest Priority Next Steps

1. Load `dist/chrome-store/` in Chrome and smoke test the packaged build
2. Capture store screenshots
3. Upload `dist/WriteMateAI-chrome-0.2.0.zip` and listing assets to Chrome Web Store
