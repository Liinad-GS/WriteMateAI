# Release Status

Last updated: March 28, 2026

## Ready

- Chrome extension source exists in `extension/`
- Backend source exists in `backend/`
- Store-ready packaging script exists in `scripts/package-extension.mjs`
- Store packaging switches the content script to `BUILD_CHANNEL = "production"`
- Privacy policy text exists in `PRIVACY_POLICY.md`
- Public privacy policy HTML page exists in `docs/privacy-policy.html`
- Chrome Web Store field copy exists in `CHROME_WEB_STORE_FIELDS.md`
- Submission guidance exists in `CHROME_WEB_STORE_SUBMISSION.md`
- Screenshot plan exists in `SCREENSHOT_SHOTLIST.md`
- Backend request size and payload limits are implemented
- Backend CORS allowlist support is implemented
- Paid-interest button can be measured without resetting limits in the packaged production build

## Still Needed Before Submission

- Public privacy policy URL
- Production backend HTTPS URL
- Production `CORS_ALLOWED_ORIGINS` set to the final Chrome extension origin
- Final release build generated with the production backend URL
- Release smoke test against the generated build
- Store screenshots
- Chrome Web Store listing form completed

## Highest Priority Next Steps

1. Publish privacy policy through Google Docs or another public HTTPS page
2. Confirm the production backend URL
3. Set `CORS_ALLOWED_ORIGINS` for the production backend
4. Run `node scripts/package-extension.mjs --backend-url=https://your-backend.example.com`
5. Load `dist/chrome-store/` in Chrome and smoke test the packaged build
6. Upload the zip and listing assets to Chrome Web Store
