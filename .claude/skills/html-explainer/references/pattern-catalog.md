# Pattern Catalog

20 structural patterns for HTML output. Each entry lists the layout, key HTML elements, and which example file to read for reference.

---

## 1. Side-by-side comparison

**When:** Comparing 2–4 approaches, options, designs, or solutions.

**Structure:**
```
header (title + context)
grid of panels (2–4 columns)
  each panel: label + content + trade-offs
optional: verdict or recommendation row
```

**Key CSS:** `display: grid; grid-template-columns: repeat(N, 1fr); gap: 1.5rem;`

Each panel: `background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 1.25rem;`

Highlight the recommended option: `border-color: var(--accent);`

**Reference:** `01-exploration-code-approaches.html`, `02-exploration-visual-designs.html`

---

## 2. Annotated document / PR review

**When:** Code diff explanation, PR writeup, annotated file walkthrough.

**Structure:**
```
header (PR title, author, date, status badge)
tab bar or section nav (Overview / Files / Conversation)
diff view: left context, right annotation
  - line numbers
  - colored additions/removals
  - margin notes with severity tags
jump links to each file or section
```

**Key elements:**
- `<span class="add">` / `<span class="del">` with green/red background tint
- Annotation bubbles: `position: absolute; right: -16px;` or inline after the block
- Severity tags: pill badges with `--danger`, `--success`, `--fg-muted`

**Reference:** `03-code-review-pr.html`, `17-pr-writeup.html`

---

## 3. Module map / dependency diagram

**When:** Explaining module relationships, call graphs, data flow, architecture.

**Structure:**
```
header
inline SVG diagram
  - boxes with labels
  - arrows between nodes
  - hot path highlighted
sidebar or below: node descriptions
```

Use `<svg>` with `viewBox`, draw rectangles and paths. Use `var(--accent)` for the hot path, `var(--border)` for normal edges.

Clickable nodes: `cursor: pointer` on `<g>` elements with JS to show a detail panel.

**Reference:** `04-code-understanding.html`, `13-flowchart-diagram.html`

---

## 4. Feature explainer

**When:** Explaining how something works, a new concept, an API, or a system's internals. Best for documentation-style content.

**Structure:**
```
sidebar nav (sticky, left column)
  - section links
  - related files list
main content (right column)
  - TL;DR callout box at top
  - sections with h2
  - collapsible detail blocks for deep-dives
  - tabbed code samples
  - glossary or FAQ at bottom
```

**Key CSS:**
```css
.page { display: grid; grid-template-columns: 200px 1fr; gap: 3rem; }
nav { position: sticky; top: 2rem; align-self: start; }
```

Collapsible:
```html
<details>
  <summary>Step 3 — What happens at the middleware layer</summary>
  <div class="detail-body">…</div>
</details>
```

**Reference:** `14-research-feature-explainer.html`, `15-research-concept-explainer.html`

---

## 5. Phased implementation plan

**When:** Project plan, implementation roadmap, migration strategy.

**Structure:**
```
header (title + context box showing the original prompt/request)
phase timeline (horizontal or vertical)
  each phase: name, duration, tasks, owner
data-flow or architecture diagram (SVG)
risk table
open questions or next steps
```

Phases: numbered cards with a connecting line. Active phase: `border-color: var(--accent)`.

Risk table: rows colored by severity using background tints.

**Reference:** `16-implementation-plan.html`

---

## 6. Status report

**When:** Weekly/sprint status, engineering update, team standup summary.

**Structure:**
```
header (team + period + date)
summary row: N shipped / N slipped / N at-risk
section: Shipped (green badge list)
section: In Progress (with % bar or status tag)
section: Slipped / Blocked (with reason)
mini chart (bar or sparkline, inline SVG)
next week / upcoming
```

Status badges: small pill elements. Use `--success` tint for done, `--danger` tint for blocked, `--fg-muted` for in-progress.

**Reference:** `11-status-report.html`

---

## 7. Incident / post-mortem timeline

**When:** Incident report, post-mortem, outage summary.

**Structure:**
```
header (incident name, severity, duration, status)
timeline: vertical line, events as dots with timestamps
  - each event: time, description, actor, impact
  - inflection points highlighted (incident start, resolution)
root cause section
follow-up checklist (checkboxes, owners, due dates)
```

Timeline: `position: relative; border-left: 2px solid var(--border)` on container, each event `::before` as a dot.

**Reference:** `12-incident-report.html`

---

## 8. Slide deck

**When:** Presentation for a meeting, briefing, or share-out.

**Structure:**
```
each slide: full-viewport section
  - scroll-snap-align: start
  - centered content, max-width 780px
keyboard nav: arrow keys → next/prev slide
progress indicator: fixed bottom, dots or "N / total"
```

**Key CSS:**
```css
body { scroll-snap-type: y mandatory; overflow-x: hidden; }
.slide { width: 100vw; height: 100vh; scroll-snap-align: start; display: flex; align-items: center; justify-content: center; }
```

**Key JS:**
```js
document.addEventListener('keydown', e => {
  const slides = document.querySelectorAll('.slide');
  let cur = Math.round(window.scrollY / window.innerHeight);
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') cur = Math.min(cur + 1, slides.length - 1);
  if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  cur = Math.max(cur - 1, 0);
  slides[cur].scrollIntoView({ behavior: 'smooth' });
});
```

**Reference:** `09-slide-deck.html`

---

## 9. Design system / component sheet

**When:** Showing color tokens, type scale, component states, design review.

**Structure:**
```
color swatches grid
type scale samples
component examples: buttons (all states), inputs, badges, tables
spacing/radius tokens
```

Swatches: `width: 3rem; height: 3rem; border-radius: 6px; border: 1px solid var(--border)`

**Reference:** `05-design-system.html`, `06-component-variants.html`

---

## 10. Animation / interaction prototype

**When:** Demonstrating a UI animation, transition, or interactive behavior.

**Structure:**
```
preview area (the live component or animation)
controls: range sliders for duration/easing, toggle buttons
code output: the CSS/JS that reproduces what's shown
```

Live controls update CSS custom properties via JS: `el.style.setProperty('--duration', val + 'ms')`.

**Reference:** `07-prototype-animation.html`, `08-prototype-interaction.html`

---

## 11. SVG figure sheet

**When:** Diagrams for a post, visual explanations, iconography.

**Structure:**
```
grid of SVG figures
  each: inline <svg>, caption below
optional: copy button that grabs the SVG source
```

**Reference:** `10-svg-illustrations.html`

---

## 12. Flowchart / pipeline diagram

**When:** Deploy pipeline, CI/CD flow, decision tree, process map.

**Structure:**
```
inline SVG flowchart
  nodes: <rect> or <circle> with labels
  arrows: <path> with arrowhead markers
  decision nodes: diamond shapes
clickable nodes: JS panel shows node details on click
```

Arrowhead marker:
```svg
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="var(--border-hover)"/>
  </marker>
</defs>
```

**Reference:** `13-flowchart-diagram.html`

---

## 13. Triage / prioritization editor

**When:** Sorting tickets, ranking items, dragging tasks across columns.

**Structure:**
```
column headers: Now / Next / Later / Cut (or custom)
draggable card items in each column
  - drag-and-drop via HTML5 dragstart/dragover/drop
export button: serializes all columns to markdown or JSON
```

**Reference:** `18-editor-triage-board.html`

---

## 14. Feature flag / config editor

**When:** Toggling feature flags, reviewing config diffs, managing settings.

**Structure:**
```
grouped list of flags/settings
  each row: name, description, toggle switch or input
  dependency warnings when a prerequisite is off
export / copy diff: shows only changed values
```

Toggle switch CSS (pure CSS, no JS needed for basic):
```css
.toggle { width: 36px; height: 20px; background: var(--btn-bg); border-radius: 10px; cursor: pointer; }
.toggle.on { background: var(--success); }
.toggle .knob { width: 16px; height: 16px; background: white; border-radius: 50%; transition: transform 150ms; }
.toggle.on .knob { transform: translateX(16px); }
```

**Reference:** `19-editor-feature-flags.html`

---

## 15. Prompt / template tuner

**When:** Editing a prompt template with variable slots, previewing with sample inputs.

**Structure:**
```
left panel: editable template, variable slots highlighted
right panel: N sample inputs that re-render as the template is edited
```

Highlight `{{variable}}` slots with `color: var(--accent); background: rgba(47,129,247,0.1)`.

**Reference:** `20-editor-prompt-tuner.html`

---

## Choosing when none match

If the request doesn't fit a named pattern:

1. **Single-topic explanation** → Feature explainer (pattern 4), stripped down
2. **Comparison of exactly 2 things** → Side-by-side (pattern 1) with 2 columns
3. **Ordered list of steps** → Phased plan (pattern 5), simplified to just the steps
4. **Raw data / metrics** → Status report (pattern 6) adapted to the data shape
5. **Anything with a timeline** → Incident timeline (pattern 7), relabeled

When in doubt: feature explainer with a TL;DR callout and collapsible sections handles almost anything.
