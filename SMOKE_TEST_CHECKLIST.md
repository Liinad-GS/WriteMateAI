# WriteMate AI Smoke Test Checklist

Use this short checklist right before release, draft submission, or any important demo.

## 1. Extension Loads

- [ ] Open `chrome://extensions`
  - Steps: Load or reload [/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/chrome-store](/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/chrome-store)
  - Expected: `WriteMate AI` is enabled and loads without errors

## 2. Widget Opens

- [ ] Select text on a normal web page
  - Steps: Highlight a short sentence
  - Expected: The WriteMate widget appears near the selection

## 3. Translate Works

- [ ] Run `Translate`
  - Steps: Select text, choose `Translate`, keep any supported target language
  - Expected: The result streams in and finishes successfully

## 4. Streaming Looks Stable

- [ ] Watch the result while it streams
  - Steps: Run any transform on medium-length text
  - Expected: The preview grows progressively without flicker or replacing earlier text

## 5. Grammar Works

- [ ] Run `Grammar`
  - Steps: Select text with mistakes and click `Grammar`
  - Expected: The text comes back corrected

## 6. Improve Works

- [ ] Run `Improve`
  - Steps: Select awkward text and click `Improve`
  - Expected: The result is clearer and more readable

## 7. Tone Works

- [ ] Run `Tone`
  - Steps: Select text, choose `Tone`, pick a tone option
  - Expected: The text is rewritten in the selected tone

## 8. Copy and Apply Work

- [ ] Copy result
  - Steps: Generate any result and press copy
  - Expected: The text is copied to clipboard

- [ ] Apply result in editable field
  - Steps: Run a transform inside a textarea or editable field, then press apply
  - Expected: The selected source text is replaced with the generated result

## 9. Limit Flow Works

- [ ] Reach the daily limit
  - Steps: Use the app until the free limit modal appears
  - Expected: The daily limit modal opens

- [ ] Buy access resets the limit
  - Steps: Click `Buy access`
  - Expected: The app shows the purchase simulation message, resets the daily limit, and becomes available again

## 10. Feedback Works

- [ ] Submit feedback
  - Steps: Open feedback, type a short message, submit
  - Expected: Feedback is sent successfully and the success message appears

## 11. No Production Connectivity Errors

- [ ] Verify no backend access errors
  - Steps: Run at least one transform and one feedback action
  - Expected: No `Failed to fetch` and no `Origin is not allowed`

## 12. Ready for Store Upload

- [ ] Confirm final package exists
  - Steps: Check [/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/WriteMateAI-chrome-0.2.0.zip](/Users/daniil/Documents/GoPracticeCodingAgents/LGext/dist/WriteMateAI-chrome-0.2.0.zip)
  - Expected: Final zip is present and ready for upload
