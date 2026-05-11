---
name: html-explainer-prompt
description: Generate a self-contained HTML artifact from the current request. Use this when you want to run the html explainer manually with /html-explainer-prompt instead of relying on the installable skill.
disable-model-invocation: true
argument-hint: [request]
---

# html-explainer-prompt

Create a self-contained `.html` file instead of a markdown answer.

Use `$ARGUMENTS` as the request if arguments were passed. Otherwise, use the user's current request from the conversation.

## Goal

Turn the request into an HTML artifact that is useful on its own in a browser.

- Write the full HTML to disk.
- Save it with a descriptive filename like `feature-auth-explainer.html`, `refactor-plan.html`, or `incident-report.html`.
- If possible, open it with `xdg-open <filename>.html`.
- Tell the user which file you created.

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
| Process flow or pipeline | Flowchart |
| Prioritization or drag-and-drop workflow | Triage editor |
| Config or flags editing | Flag/config editor |
| Prompt editing or tuning | Prompt tuner |

Default to **Feature explainer** when the request is documentation-like or ambiguous.

## Design system

Use a GitHub Dark Minimalist style.

Always declare these tokens in `:root`:

```css
:root {
  --canvas: #0d1117;
  --surface: #161b22;
  --fg: #e6edf3;
  --fg-muted: #7d8590;
  --accent: #2f81f7;
  --border: #30363d;
  --border-hover: #8b949e;
  --btn-bg: #21262d;
  --btn-hover: #30363d;
  --success: #238636;
  --danger: #f85149;
  --mono: "JetBrainsMono Nerd Font", "JetBrains Mono", monospace;
  --sans: "Inter", system-ui, sans-serif;
}
```

Base page rules:

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--mono);
  background: var(--canvas);
  color: var(--fg);
  line-height: 1.6;
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
  -webkit-font-smoothing: antialiased;
}
```

## Required HTML rules

- Use `<!doctype html>` and `<html lang="en">`
- Include UTF-8 charset and viewport meta tags
- Use a specific `<title>` based on the real content
- Keep CSS and JS inline; no external dependencies
- Use inline SVG if you need icons or diagrams
- Use `var(--sans)` only for buttons, labels, and controls
- Use `var(--mono)` for body text, headings, and code

## Common styling rules

- `h2`: bottom border, spacing above, clear section separation
- Tables: full width, collapsed borders, subtle row striping
- Code blocks: `var(--surface)` background and `1px solid var(--border)`
- Callouts: surface background with left accent border
- Buttons: neutral dark background, clear hover state, 6px radius

## Interactivity

If the page needs interactivity:

- Slide deck: arrow-key navigation and scroll snap
- Explainers: use `<details>` and `<summary>` for collapsible deep dives
- Editors: include an export action that serializes the current state
- Flowcharts: prefer inline SVG with clickable nodes when useful

## Execution steps

1. Identify the user's real output goal.
2. Pick the structural pattern.
3. Build a complete HTML page with real content from the request.
4. Write the file to disk with a descriptive name.
5. Open it in the browser if possible.
6. Reply with the filename and pattern used.

## Quality bar

- No placeholder text
- No external requests
- No hardcoded hex colors outside `:root`
- Content should be useful without the original chat context
- Interactive elements should have visible focus states

## Optional local references

If this repository is available locally, you may read these for deeper reference:

- `.claude/skills/html-explainer/references/design-tokens.md`
- `.claude/skills/html-explainer/references/pattern-catalog.md`
- `examples/`

Do not depend on those files being present. This prompt must still work on its own.
