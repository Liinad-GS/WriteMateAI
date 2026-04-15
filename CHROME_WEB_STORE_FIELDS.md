# Chrome Web Store Fields

## Listing

Name:

`WriteMate AI`

Summary:

`All-in-one writing, translation, and communication assistant for real conversations.`

Category:

`Productivity`

Single purpose:

`Helps users transform selected text on web pages with AI.`

Description:

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

## Permissions

`storage`

`The extension stores user preferences locally in Chrome storage, including preferred language, app language, onboarding flags, daily usage counters, backend URL override, and an anonymous local analytics user ID.`

Production backend host permission:

`The extension sends user-selected text to the configured backend API to perform the requested AI transformation, submit optional user feedback, and record product analytics events.`

Content script access:

`The extension adds an on-page widget next to user-selected text so the feature can work inside editable fields and common websites such as chat and email apps. It does not automatically process page content; actions run only after explicit user selection and interaction.`

## Privacy Questionnaire

Collects or transmits user data:

`Yes`

Data types involved:

- `Personal communications`
- `User activity`
- `Website content`

Data sold:

`No`

Used for creditworthiness or lending:

`No`

Text processing and feedback submission:

`User-triggered`

Analytics:

`Sent during product usage for product improvement, diagnostics, and abuse monitoring`

Data handled securely:

`Yes, the release build is intended to use an HTTPS backend only.`

Deletion:

`Local extension data can be removed by clearing extension storage or uninstalling the extension. Server-side retention depends on the configured backend and services.`
