---
name: html-explainer-prompt
description: Generate a self-contained HTML artifact from the current request. Use this when you want to run the html explainer manually with /html-explainer-prompt instead of relying on the installable skill.
disable-model-invocation: true
---

# html-explainer-prompt

Create a self-contained `.html` file instead of a markdown answer.

Do not depend on `$ARGUMENTS` as the main flow. Start by identifying whether you already have enough information to proceed.

## Goal

Turn the request into an HTML artifact that is useful on its own in a browser.

- Write the full HTML to disk.
- Save it with a descriptive filename like `feature-auth-explainer.html`, `refactor-plan.html`, or `incident-report.html`.
- If possible, open it with `xdg-open <filename>.html`.
- Tell the user which file you created.

If the request is incomplete, do not create the file yet. Ask for the missing inputs first.

## Pattern selection

Choose the structure that best matches the request:

| Request type | Pattern |
|---|---|
| Compare approaches, options, or designs | Side-by-side comparison |
| PR, diff, or code change explanation | Annotated document |
| Codebase walkthrough or architecture | Module map / diagram |
| Feature or concept explanation | Feature explainer |
| Implementation or migration plan | Phased plan |
| Weekly or sprint update | Status report |
| Incident or post-mortem | Incident timeline |
| Presentation content | Slide deck |
| Design tokens or component states | Design system / component sheet |
| Prototype or interaction idea | Prototype / sandbox |
| SVG illustrations, iconography, figure sheets | SVG figure sheet |
| Process flow or pipeline | Flowchart |
| Prioritization or drag-and-drop workflow | Triage editor |
| Config or flags editing | Flag/config editor |
| Prompt editing or tuning | Prompt tuner |

Default to **Feature explainer** when the request is documentation-like or ambiguous.

## Visual reference

Use the closest matching file in `examples/` as the visual and structural reference when this repository is available locally.

- Preserve the example's native palette, typography, spacing, borders, radius, and layout density.
- Adapt the structure and content to the request.
- Do not convert the page to a separate global design system.

## Required HTML rules

- Use `<!doctype html>` and `<html lang="en">`
- Include UTF-8 charset and viewport meta tags
- Use a specific `<title>` based on the real content
- Keep CSS and JS inline; no external dependencies
- Use inline SVG if you need icons or diagrams
- Use system font stacks; do not load Google Fonts

## Common styling rules

- Follow the selected example's treatment for headings, tables, code blocks, callouts, and buttons.
- Keep responsive behavior from the example when it applies.

## Interactivity

If the page needs interactivity:

- Slide deck: arrow-key navigation and scroll snap
- Explainers: use `<details>` and `<summary>` for collapsible deep dives
- Editors: include an export action that serializes the current state
- Flowcharts: prefer inline SVG with clickable nodes when useful

## Execution steps

1. Check whether the user already provided enough information to generate the HTML.
2. If information is missing, ask for it before generating anything.
3. Pick the structural pattern.
4. Build a complete HTML page with real content from the request.
5. Write the file to disk with a descriptive name.
6. Open it in the browser if possible.
7. Reply with the filename and pattern used.

## Intake flow

When the user invokes `/html-explainer-prompt` without a complete request, ask these questions first:

1. Which catalog pattern should I use?
2. What message, text, or content should become HTML?
3. Should I generate the file now, or only prepare a plan?

Use this pattern list when asking:

1. Side-by-side comparison
2. Annotated document
3. Module map / diagram
4. Feature explainer
5. Phased plan
6. Status report
7. Incident timeline
8. Slide deck
9. Design system / component sheet
10. Prototype / sandbox
11. SVG figure sheet
12. Flowchart
13. Triage editor
14. Flag/config editor
15. Prompt tuner

If the user already gave enough context in the conversation, do not ask unnecessary questions. Confirm the detected pattern briefly and proceed.

## Plan Mode

If you see a system reminder indicating Plan Mode, do not create files and do not run execution steps.

In Plan Mode:
- identify the most likely pattern
- ask for any missing inputs
- return only the plan and pending questions
- stop before creating the HTML artifact

## Quality bar

- No placeholder text
- No external requests
- Visual style should follow the selected example instead of a separate theme
- Content should be useful without the original chat context
- Interactive elements should have visible focus states

## Optional local references

If this repository is available locally, you may read these for deeper reference:

- `.claude/skills/html-explainer/references/pattern-catalog.md`
- `.claude/skills/html-explainer/references/editor-templates.md`
- `examples/`

Do not depend on those files being present. This prompt must still work on its own.
