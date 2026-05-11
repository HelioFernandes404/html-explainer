---
name: html-explainer
description: Produce a self-contained HTML file instead of markdown for any output that benefits from visual structure. Use this skill whenever the user asks for documentation, a report, a writeup, a plan, an explanation, a code review summary, a diagram, a status update, a slide deck, or any content that would otherwise become a wall of markdown text. Even when the user doesn't say "HTML" — if the output has structure, comparisons, timelines, code with annotations, or multiple sections, an HTML file will serve them far better. Always produce a single self-contained `.html` file, ready to open in a browser, styled with the project's GitHub Dark Minimalist design system.
---

# html-explainer

When producing output that has meaningful structure — comparisons, phases, timelines, code explanations, reports, plans — a self-contained HTML file is almost always better than markdown. Markdown gets skimmed; HTML gets read.

Your job is to:
1. Identify which structural pattern fits the request
2. Build a complete self-contained HTML using the project's dark design system
3. Write the file to disk and tell the user where it is

---

## Design system

Read the full design system from `references/design-tokens.md` before writing any HTML. Use those tokens, not the warm ivory/clay palette from the example files in the project.

Key tokens (always declare in `:root`):

```css
:root {
  --canvas:      #0d1117;
  --surface:     #161b22;
  --fg:          #e6edf3;
  --fg-muted:    #7d8590;
  --accent:      #2f81f7;
  --border:      #30363d;
  --border-hover:#8b949e;
  --btn-bg:      #21262d;
  --btn-hover:   #30363d;
  --success:     #238636;
  --danger:      #f85149;

  --mono: "JetBrainsMono Nerd Font", "JetBrains Mono", monospace;
  --sans: "Inter", system-ui, sans-serif;
}
```

Base body:
```css
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

Use `var(--sans)` for buttons, labels, and interactive controls. Use `var(--mono)` for body text, headings, and code — it's intentional; it reinforces the technical, developer-tool aesthetic.

---

## Choosing the right pattern

Match the request to a structural pattern. Read `references/pattern-catalog.md` for full structural details on each.

| Request type | Pattern |
|---|---|
| Compare approaches, options, or designs | **Side-by-side** |
| PR, diff, or code change explanation | **Annotated document** |
| Codebase walkthrough, module relationships | **Module map / diagram** |
| How a feature or concept works | **Feature explainer** (sticky nav, collapsible steps, TL;DR) |
| Implementation or project plan | **Phased plan** (milestones, phases, risk table) |
| Weekly/sprint status | **Status report** (chart, shipped/slipped/next) |
| Incident or post-mortem | **Incident timeline** |
| Slide presentation | **Slide deck** (scroll-snap, arrow-key nav) |
| Design tokens, component states | **Design system / component sheet** |
| Interactive prototype, animation tuning | **Prototype / sandbox** |
| Process flow, deploy pipeline | **Flowchart** (SVG, clickable nodes) |
| Drag/organize/prioritize items | **Triage editor** (with export button) |
| Toggle flags or config | **Flag/config editor** |
| Prompt or template tuning | **Prompt tuner** |

When the request doesn't match cleanly, default to the **Feature explainer** pattern — it handles most documentation well.

**Example file locations** (relative to this skill's install dir):
| Category | Path |
|---|---|
| Exploration / planning | `examples/01-exploration/` |
| Code review | `examples/02-code-review/` |
| Design | `examples/03-design/` |
| Prototyping | `examples/04-prototyping/` |
| Diagrams | `examples/05-diagrams/` |
| Decks | `examples/06-decks/` |
| Research | `examples/07-research/` |
| Reports | `examples/08-reports/` |
| Editors | `examples/09-editors/` |

---

## HTML construction rules

### Always self-contained
- No external CSS or JS CDN links. Everything inline in `<style>` and `<script>`.
- Fonts: use system stacks. Don't load Google Fonts. `var(--mono)` already falls back cleanly.
- SVG icons: inline. No icon library imports.

### Structure
Every page needs:
- `<!doctype html>` + `<html lang="en">`
- `<meta charset="utf-8">` and viewport meta
- A descriptive `<title>` derived from the actual content
- `:root` with all tokens declared
- A clean reset: `* { box-sizing: border-box; margin: 0; padding: 0; }`

### Headings
- `h2` elements: `border-bottom: 1px solid var(--border)`, `padding-bottom: 0.3em`, `margin-top: 2rem`
- Use `var(--fg-muted)` for eyebrow labels (small caps, mono, `0.1em` letter-spacing)
- Don't use `h1` as a section header — reserve it for the page title

### Interactive elements
- Buttons: `background: var(--btn-bg)`, `border: 1px solid var(--border)`, `border-radius: 6px`, `font-family: var(--sans)`, `padding: 5px 16px`, `font-size: 14px`
- Hover: `background: var(--btn-hover)`, `border-color: var(--border-hover)`
- Primary action: `background: var(--success)`, `color: #fff`
- Destructive: start with `color: var(--danger)` on neutral bg; on hover, invert

### Tables
```css
table { width: 100%; border-collapse: collapse; }
th, td { padding: 8px 13px; border: 1px solid var(--border); text-align: left; }
th { background: var(--surface); font-weight: 600; }
tr:nth-child(even) { background: rgba(22,27,34,0.5); }
```

### Code blocks
```css
pre, code {
  font-family: var(--mono);
  font-size: 0.9em;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
}
pre { padding: 1rem; overflow-x: auto; }
code { padding: 0.2em 0.4em; }
```

### Blockquotes / callouts
```css
blockquote {
  border-left: 3px solid var(--border);
  color: var(--fg-muted);
  margin: 1.5rem 0;
  padding: 0 1em;
}
```

For callout boxes (TL;DR, warnings, highlights):
```css
.callout {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 6px;
  padding: 1rem 1.25rem;
}
```

---

## Patterns with interactive JS

For patterns that need interactivity (slide decks, editors, triage boards):

**Slide deck** — keyboard nav:
```js
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prevSlide();
});
```
Use `scroll-snap-type: y mandatory` on `body`, `scroll-snap-align: start` on each `.slide`.

**Editors with export** — always end with a button that serializes the current state to text the user can paste or commit. The export closes the loop between the HTML artifact and the next step in the user's workflow.

**Collapsible sections** — for explainers with many steps:
```html
<details>
  <summary>Step 3 — Request hits rate-limit middleware</summary>
  <div class="detail-body">…</div>
</details>
```
Style `summary` with `cursor: pointer`, `padding: 0.5rem 0`, and a marker indicating expand/collapse state.

---

## What to do when the skill triggers

1. Read the user's request carefully — identify the content type and the information they want communicated.
2. Choose the pattern from the table above.
3. If any of the example files match the pattern closely, read it for structural reference. Examples are installed alongside this skill at `examples/<category>/<file>.html` (see category map below). Don't copy their colors — use the dark design system.
4. Write the complete HTML to a file named descriptively (e.g., `feature-auth-explainer.html`, `week-23-status.html`, `refactor-plan.html`). Save it in the project root or wherever makes sense for the context.
5. Open it in the browser if possible: `xdg-open <filename>.html`
6. Tell the user the filename and what pattern you used.

---

## Quality check before delivering

- [ ] Opens in a browser with no external requests
- [ ] All tokens reference `:root` variables, no hardcoded hex values outside `:root`
- [ ] Title is specific to the actual content, not generic
- [ ] Content is real — populated from the user's actual request, not placeholder Lorem Ipsum
- [ ] Interactive elements (if any) have visible focus styles
- [ ] The page would be useful to someone who has never seen the source markdown
