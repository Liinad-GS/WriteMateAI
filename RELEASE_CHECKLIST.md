# Release Checklist

## Before Packaging

- Confirm the local backend works with the production `.env`
- Verify `Translate`, `Grammar`, `Improve`, and `Tone` on at least:
  - Telegram Web
  - Facebook or Messenger
  - Gmail or another email composer
- Verify the daily limit modal
- Verify the feedback form submits successfully
- Verify the app-language picker works
- Verify `Replace text` works in common editable fields

## Chrome Web Store Readiness

- Add extension icons in PNG format:
  - `16x16`
  - `32x32`
  - `48x48`
  - `128x128`
- Add the `icons` field to `extension/manifest.json`
- Prepare at least 3 screenshots for the store listing
- Prepare a short description and a full description
- Publish the privacy policy from `PRIVACY_POLICY.md` to a public URL
- Fill in the Chrome Web Store privacy questionnaire
- Justify `storage` and `http://localhost:8787/*` permissions in the dashboard

## Listing Copy

- Name: `AI Writing Assistant`
- Short description:
  - `Translate, fix grammar, improve tone, and rewrite selected text right where you work.`
- Single purpose:
  - `Helps users transform selected text on web pages with AI.`

## Payment Readiness

- Keep the `$2` buy flow as a non-payment placeholder for now
- Do not enable paid claims in the store listing until payment is actually live
- Make sure the UI clearly says payment is not active yet

## Feedback Pipeline

- Set `FEEDBACK_WEBHOOK_URL` in `backend/.env`
- Verify rows are written to Google Sheets
- Add a visible success state after feedback is submitted

## Packaging

- Load the unpacked extension from `extension/`
- Final smoke test in Chrome
- Zip the contents of `extension/` for upload
- Upload through Chrome Web Store Developer Dashboard

## Remaining Gaps Right Now

- Icons are still missing
- Public privacy-policy URL is still missing
- Store screenshots are still missing
- Real payment flow is still not implemented
