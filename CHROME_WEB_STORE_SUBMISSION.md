# Chrome Web Store Submission Notes

Last updated: March 27, 2026

## Package To Upload

Build the release zip with your production backend URL:

```bash
node scripts/package-extension.mjs --backend-url=https://your-app.up.railway.app
```

Upload:

- `dist/WriteMateAI-chrome-0.2.0.zip`

## Store Listing Draft

### Name

`WriteMate AI`

### Summary

`All-in-one writing, translation, and communication assistant for real conversations.`

### Description

`Stop switching between translators, grammar tools, and chat apps.

WriteMate AI is an all-in-one writing, translation, and communication assistant built for real conversations.

Use it directly on the page where you already write. Select text, choose what you want to do, and get a better version in seconds.

What WriteMate AI can do:
- Translate selected text
- Fix grammar and spelling
- Improve clarity and readability
- Rewrite text in a different tone
- Help draft cleaner replies for chats and email

Typical use cases:
- Reply to emails in a language you do not fully trust yourself in
- Improve short messages before sending
- Rewrite text to sound more friendly or more professional
- Translate outgoing replies without changing tabs
- Practice writing more naturally in another language

WriteMate AI works through a small on-page widget and only processes text when you explicitly select it and run an action.

No matter where you write, WriteMate AI helps you communicate faster and more confidently.`

### Category

`Productivity`

### Single Purpose

`Helps users transform selected text on web pages with AI.`

## Screenshot Plan

Prepare at least 3 screenshots.

Recommended set:

1. Translation flow on a web chat or email draft
2. Grammar fix result in an email composer
3. Tone rewrite with the widget and result visible
4. Daily limit modal with feedback form

Keep the screenshots focused on:

- selected text
- the widget actions
- result area
- replace/copy action

## Privacy Policy URL

Publish [`PRIVACY_POLICY.md`](/Users/daniil/Documents/GoPracticeCodingAgents/LGext/PRIVACY_POLICY.md) at a public HTTPS URL and use that link in the store listing.

## Permission Justifications

### `storage`

Suggested explanation:

`The extension stores user preferences locally in Chrome storage, including preferred language, app language, onboarding flags, daily usage counters, backend URL override, and an anonymous local analytics user ID.`

### Host permission for the production backend

Suggested explanation:

`The extension sends user-selected text to the configured backend API to perform the requested AI transformation, submit optional user feedback, and record product analytics events.`

### Content script access on web pages

Suggested explanation:

`The extension adds an on-page widget next to user-selected text so the feature can work inside editable fields and common websites such as chat and email apps. It does not automatically process page content; actions run only after explicit user selection and interaction.`

## Privacy Questionnaire Draft

These answers should be checked against the final Chrome Web Store form wording at submission time.

### Does the extension collect or transmit user data?

Suggested answer:

`Yes`

Reason:

- selected text is transmitted when the user explicitly runs an AI action
- optional feedback text is transmitted if the user submits feedback
- analytics events are transmitted to the backend

### What data types are involved?

Suggested mapping:

- `Personal communications`
  - selected text from chats, email drafts, or other user-written content may be sent for processing
- `User activity`
  - extension interaction events and feature usage analytics
- `Website content`
  - only the user-selected text that is explicitly submitted

### Is all data optional / user-triggered?

Suggested answer:

`Mostly yes, but analytics events are sent during product usage. Text processing and feedback submission are explicitly user-triggered.`

### Is data sold to third parties?

Suggested answer:

`No`

### Is data used or transferred for creditworthiness or lending purposes?

Suggested answer:

`No`

### Is data used only for the extension's core functionality?

Suggested answer:

`Selected text: Yes`

`Feedback text: Yes`

`Analytics events: Used for product improvement, diagnostics, and abuse monitoring`

### Is data handled securely?

Suggested answer:

`Yes. The release build is intended to use an HTTPS backend only.`

### Can users request deletion?

Suggested answer:

`Local extension data can be removed by clearing extension storage or uninstalling the extension. Server-side retention depends on the configured backend and services.`

## Support Contact

Before submission, decide what support contact will appear in the listing:

- support email
- website
- privacy contact

Update [`PRIVACY_POLICY.md`](/Users/daniil/Documents/GoPracticeCodingAgents/LGext/PRIVACY_POLICY.md) if you want a more explicit contact section.

## Final Pre-Submit Checks

- Backend is deployed and responds from the exact HTTPS URL used in the package build
- `dist/chrome-store/manifest.json` contains only the production backend origin in `host_permissions`
- `dist/chrome-store/background.js` contains the production backend in `DEFAULT_BACKEND_BASE_URL`
- The extension works when loaded from `dist/chrome-store/`
- Privacy policy is published publicly
- Screenshots are ready
- The listing does not claim paid access is live

## Known Review Risks

- The extension injects a content script on `<all_urls>`, which may trigger extra reviewer scrutiny
- The extension sends selected text to an external backend for AI processing, so the privacy disclosure must be consistent
- The buy flow is still a placeholder, so the store listing should not promise an active payment feature
