# WriteMate AI Test Checklist

Use this checklist before release or after any meaningful product change.

## Setup

- [ ] Load the packaged extension from [/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/chrome-store](/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/chrome-store)
  - Steps: Open `chrome://extensions`, enable Developer mode, click `Load unpacked`, select `dist/chrome-store`
  - Expected: `WriteMate AI` appears, is enabled, and shows version `0.2.0`

- [ ] Verify backend connectivity
  - Steps: Open any normal web page and trigger the widget on selected text
  - Expected: No `Failed to fetch`, no `Origin is not allowed`, and the request starts loading

## Core Selection and Widget

- [ ] Widget appears on page text selection
  - Steps: Select plain text on a regular page
  - Expected: The WriteMate widget appears near the selection

- [ ] Widget appears inside a text input or textarea
  - Steps: Select text inside an input or textarea
  - Expected: The widget appears and can run actions on the selected text

- [ ] Widget appears inside a contenteditable field
  - Steps: Select text in a rich-text editor or contenteditable field
  - Expected: The widget appears and keeps the selection context

- [ ] Widget updates when selection changes
  - Steps: Select one text fragment, then select another one
  - Expected: The widget repositions and uses the new selected text

- [ ] Widget hides when selection disappears
  - Steps: Click away after selecting text
  - Expected: The widget closes or becomes inactive

## Translate

- [ ] Translate selected text
  - Steps: Select English text, choose `Translate`, target `Spanish`
  - Expected: A Spanish translation is returned

- [ ] Translate respects target language switch
  - Steps: Run `Translate`, then change target language to another supported language
  - Expected: The translation reruns in the newly selected language

- [ ] Translate works in reply-like scenario
  - Steps: Use the widget in a chat or email compose area with selected text
  - Expected: The result is suitable for reply drafting and stays inside the current writing flow

## Grammar

- [ ] Grammar fixes mistakes without changing meaning too much
  - Steps: Select a short text with spelling and grammar mistakes, run `Grammar`
  - Expected: Errors are fixed and the meaning stays intact

## Improve

- [ ] Improve rewrites for clarity
  - Steps: Select awkward or unclear text, run `Improve`
  - Expected: The result is cleaner, more readable, and still aligned with the original intent

## Tone

- [ ] Tone rewrites text in selected tone
  - Steps: Select text, choose `Tone`, pick one tone option
  - Expected: The wording changes to match that tone

- [ ] Tone reruns when tone option changes
  - Steps: Change the tone selector after a tone result is shown
  - Expected: The result refreshes for the new tone

## Streaming UX

- [ ] Streaming result grows progressively
  - Steps: Run a transformation on medium-length text
  - Expected: The preview appears as one gradually growing text

- [ ] Streaming does not flicker or replace prior content
  - Steps: Watch the preview while the result streams
  - Expected: Already shown text stays stable and only new text is appended

- [ ] Final result matches the last streamed content
  - Steps: Wait until loading finishes
  - Expected: The final text is complete and does not jump backward or truncate

## Applying and Copying Results

- [ ] Copy result
  - Steps: Generate any result and click copy
  - Expected: The result is copied to clipboard

- [ ] Copy reply draft
  - Steps: In a reply scenario, click the reply draft copy action if shown
  - Expected: The drafted reply is copied to clipboard

- [ ] Replace selected text in editable field
  - Steps: Run an action inside an input, textarea, or contenteditable, then click apply
  - Expected: The selected original text is replaced with the generated result

## Onboarding and Language Preference

- [ ] First-run onboarding appears
  - Steps: Use a clean extension state or reset onboarding, then select text
  - Expected: The welcome onboarding appears

- [ ] Onboarding walkthrough can move forward
  - Steps: Click `Next` through the onboarding steps
  - Expected: The flow advances through Translate, Grammar, Improve, and Tone

- [ ] Onboarding can be skipped
  - Steps: Click `Skip`
  - Expected: The onboarding closes and normal usage continues

- [ ] Default reply language prompt can be saved
  - Steps: Trigger the language prompt, choose a language, click `Save and continue`
  - Expected: The preference is saved and the flow continues

- [ ] Default reply language prompt can be postponed
  - Steps: Trigger the language prompt, click `Maybe later`
  - Expected: The prompt closes and the app remains usable

## App Language

- [ ] UI language can be changed
  - Steps: Switch app language from the language toggle in the widget
  - Expected: Widget labels, helper text, loading text, and modal copy switch to the selected UI language

## Limit Flow and Purchase Simulation

- [ ] Daily limit blocks further free usage
  - Steps: Reach the daily free limit
  - Expected: The daily limit modal opens and normal transform action is blocked

- [ ] Limit modal shows feedback path
  - Steps: Open the daily limit modal
  - Expected: The modal offers both purchase and feedback actions

- [ ] Buy CTA resets the limit in production build
  - Steps: In the packaged production build, hit the daily limit and click `Buy access`
  - Expected: The app shows the purchase simulation message, resets today's limit, and becomes available again

- [ ] Post-purchase message matches behavior
  - Steps: Click `Buy access`
  - Expected: The user sees that no charge happened, the flow is simulated, and the app is available again

## Feedback

- [ ] Feedback modal opens
  - Steps: Click the feedback action
  - Expected: The feedback form opens and focuses the textarea

- [ ] Feedback sends successfully
  - Steps: Enter a message and submit it
  - Expected: Success message is shown and the form resets

- [ ] Feedback failure is handled gracefully
  - Steps: Test with a broken feedback webhook in a non-release environment if needed
  - Expected: The user sees an error message and the widget stays usable

## Error Handling

- [ ] Backend failure is surfaced clearly
  - Steps: Trigger a request when the backend is unavailable or misconfigured in a test environment
  - Expected: The user sees a readable error message instead of a broken or frozen UI

- [ ] Analytics failures do not block usage
  - Steps: Trigger a flow while analytics is failing in a test environment
  - Expected: Main user actions still work

## Production Build Verification

- [ ] Packaged build points to Railway backend
  - Steps: Inspect the packaged extension or verify behavior against production
  - Expected: Requests go to `https://writemateai.up.railway.app`

- [ ] Production CORS accepts the real extension
  - Steps: Run a transform from the packaged extension
  - Expected: Requests succeed without CORS errors

- [ ] Production CORS blocks unrelated origins
  - Steps: Verify from backend diagnostics or prior smoke tests
  - Expected: Only allowed Chrome extension origins can access the API

## Final Release Pass

- [ ] Translate
- [ ] Grammar
- [ ] Improve
- [ ] Tone
- [ ] Copy result
- [ ] Apply result
- [ ] Onboarding
- [ ] Language preference prompt
- [ ] App language switch
- [ ] Daily limit
- [ ] Buy access reset flow
- [ ] Feedback
- [ ] No CORS errors
- [ ] No `Failed to fetch`
- [ ] No obvious UI flicker during streaming
