# Pattern Catalog

Concrete recipes for each pattern. Every recipe assumes you started from `assets/base-template.html` and have all tokens already declared in `:root`.

For deep reference, read the corresponding example in `/home/helio/Work/holistic-vision/`.

---

## Catalog / index page

**When:** Index of items, gallery, table of contents, deliverables overview.

**Reference:** `index.html`

**Container:** `.wrap` (1120px)

**Structure:**
```html
<header class="masthead">
  <div class="hero-grid">
    <div>
      <div class="eyebrow">COMPANION TO SOMETHING</div>
      <h1>The unreasonable <em>effectiveness</em> of HTML</h1>
      <p class="intro">One or two sentences explaining the catalog.</p>
      <nav class="pills">
        <a href="#section-id">Section name <span class="n">3</span></a>
        ...
      </nav>
    </div>
    <div class="hero-fig" aria-hidden="true">…optional decorative SVG figure…</div>
  </div>
</header>

<section id="section-id">
  <div class="sec-head">
    <span class="idx">01</span>
    <h2>Section name</h2>
    <span class="count">3 items</span>
  </div>
  <p class="sec-intro">Lede for this section.</p>
  <div class="grid">
    <a class="card" href="...">
      <div class="thumb"><svg viewBox="0 0 120 80">…</svg></div>
      <div class="body">
        <div class="title">Card title</div>
        <div class="desc">One-sentence description.</div>
        <div class="file"><span>filename.html</span><span class="arrow">→</span></div>
      </div>
    </a>
  </div>
</section>
```

**Key CSS additions:**
```css
.hero-grid { display: grid; grid-template-columns: 1fr 340px; gap: 48px; align-items: end; }
@media (max-width: 880px) { .hero-grid { grid-template-columns: 1fr; } }

.sec-intro { font-size: 14.5px; color: var(--g700); max-width: 700px; margin: 0 0 24px 50px; }

.card .thumb {
  height: 132px; background: var(--g100);
  border-bottom: 1.5px solid var(--g200);
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  transition: background 150ms;
}
a.card:hover .thumb { background: var(--oat); }

.card .file {
  font-family: var(--mono); font-size: 11px; color: var(--g500);
  border-top: 1px solid var(--g100); padding-top: 11px;
  display: flex; justify-content: space-between;
}
.card .file .arrow { color: var(--g300); transition: transform 150ms; }
a.card:hover .file { color: var(--clay); }
a.card:hover .file .arrow { transform: translateX(3px); color: var(--clay); }
```

---

## Side-by-side comparison

**When:** Comparing 2–4 approaches, options, designs, or solutions.

**Reference:** `01-exploration-code-approaches.html`, `02-exploration-visual-designs.html`

**Container:** `.wrap` (1120px)

**Structure:**
```html
<header>
  <div class="eyebrow">COMPARISON</div>
  <h1>Three approaches to <em>X</em></h1>
  <p class="intro">…</p>
</header>

<div class="compare">
  <div class="panel">
    <div class="panel-head">
      <span class="label">Approach A</span>
      <span class="badge">Recommended</span>
    </div>
    <div class="panel-body">…content…</div>
    <div class="panel-foot">
      <strong>Trade-offs:</strong> …
    </div>
  </div>
  …repeat…
</div>
```

**CSS:**
```css
.compare {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 32px;
}
.panel {
  background: var(--paper);
  border: 1.5px solid var(--g300);
  border-radius: 14px;
  overflow: hidden;
}
.panel.recommended { border-color: var(--clay); }
.panel-head {
  padding: 14px 18px;
  border-bottom: 1.5px solid var(--g200);
  display: flex; align-items: center; justify-content: space-between;
}
.panel-head .label { font-family: var(--serif); font-size: 18px; color: var(--slate); }
.panel-body { padding: 18px; font-size: 14.5px; }
.panel-foot {
  padding: 14px 18px;
  border-top: 1px solid var(--g200);
  background: var(--g100);
  font-size: 13px;
}
```

---

## Annotated PR / diff

**When:** Code review, PR, diff explanation.

**Reference:** `03-code-review-pr.html`, `17-pr-writeup.html`

**Container:** `.wrap` (1120px) — needs room for diff + margin notes

**Key elements:**
- File list / jump links sidebar
- Diff blocks: line numbers + colored add/del lines
- Margin annotations with severity badges (info/warn/danger)
- Author summary at top

```css
.diff {
  font-family: var(--mono);
  font-size: 13px;
  background: var(--paper);
  border: 1.5px solid var(--g300);
  border-radius: 10px;
  overflow: hidden;
}
.diff .line { display: flex; padding: 2px 14px; }
.diff .line.add { background: rgba(120, 140, 93, 0.10); }
.diff .line.del { background: rgba(176, 74, 63, 0.08); }
.diff .ln { color: var(--g500); width: 40px; text-align: right; padding-right: 12px; user-select: none; }
.diff .annot {
  margin: 8px 14px;
  padding: 10px 14px;
  background: var(--g100);
  border-left: 3px solid var(--clay);
  border-radius: 6px;
  font-family: var(--sans);
  font-size: 13px;
}
```

---

## Sticky-nav explainer

**When:** Documentation, feature explainer, concept walkthrough. **The default when in doubt.**

**Reference:** `14-research-feature-explainer.html`, `15-research-concept-explainer.html`

**Container:** Two-column grid

**Structure:**
```html
<div class="page">
  <nav class="sidebar">
    <div class="label">On this page</div>
    <a href="#overview">Overview</a>
    <a href="#how-it-works">How it works</a>
    <a href="#configuration">Configuration</a>
    <div class="files">
      <code>src/middleware/rate-limit.ts</code>
      <code>config/limits.yaml</code>
    </div>
  </nav>

  <main>
    <header>
      <div class="eyebrow">DOCUMENTATION</div>
      <h1>How <em>rate limiting</em> works</h1>
    </header>

    <div class="tldr">
      <b>TL;DR.</b> One-paragraph summary.
    </div>

    <h2 id="how-it-works">How it works</h2>

    <details>
      <summary>Step 1 — Request arrives at the edge <span class="where">edge/router.ts</span></summary>
      <div class="body">
        <p>Detail here.</p>
      </div>
    </details>
  </main>
</div>
```

**Key CSS:**
```css
.page { display: grid; grid-template-columns: 200px minmax(0,1fr); gap: 48px; max-width: 1100px; margin: 0 auto; padding: 56px 24px 120px; }
@media (max-width: 920px) { .page { grid-template-columns: 1fr; } .sidebar { display: none; } }

.sidebar { position: sticky; top: 32px; align-self: start; font-size: 13px; }
.sidebar .label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--g500); margin-bottom: 12px; }
.sidebar a { display: block; padding: 5px 0 5px 12px; border-left: 2px solid var(--g300); color: var(--g700); text-decoration: none; }
.sidebar a:hover { color: var(--slate); border-color: var(--slate); }
.sidebar .files { margin-top: 28px; border-top: 1px solid var(--g300); padding-top: 16px; }
.sidebar .files code { display: block; font-size: 11px; color: var(--g500); padding: 3px 0; background: none; }

details { border: 1.5px solid var(--g300); border-radius: 10px; background: var(--paper); margin: 14px 0; overflow: hidden; }
summary {
  list-style: none; cursor: pointer;
  padding: 14px 16px;
  font-family: var(--serif); font-size: 16px; color: var(--slate);
  display: flex; align-items: baseline; gap: 10px;
}
summary::-webkit-details-marker { display: none; }
summary::before {
  content: "▸"; color: var(--clay); font-family: var(--sans); font-size: 12px;
  transition: transform 120ms;
}
details[open] summary::before { transform: rotate(90deg); }
summary .where { font-family: var(--mono); font-size: 11px; color: var(--g500); margin-left: auto; }
details .body { padding: 0 16px 16px; }
```

---

## Phased implementation plan

**When:** Project plan, roadmap, migration strategy.

**Reference:** `16-implementation-plan.html`

**Container:** `.wrap` or `.page` depending on density

**Key elements:**
- Prompt-box at the top showing the original request
- Phases as numbered cards on a timeline
- Risk table
- Open questions list

```css
.prompt-box {
  background: var(--g100);
  border: 1.5px solid var(--g300);
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 14.5px;
}
.prompt-box .label {
  font-family: var(--mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--g500); display: block; margin-bottom: 6px;
}

.phase {
  display: grid; grid-template-columns: 60px 1fr; gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--g200);
}
.phase .num {
  font-family: var(--mono); font-size: 28px; color: var(--clay); font-weight: 600;
  line-height: 1;
}
.phase h3 { margin-top: 0; }
.phase .meta {
  font-family: var(--mono); font-size: 11px; color: var(--g500);
  text-transform: uppercase; letter-spacing: 0.06em;
}
```

---

## Status report

**When:** Weekly/sprint update.

**Reference:** `11-status-report.html`

**Container:** `.page` (860px)

**Key elements:**
- Summary row: N shipped / N at-risk / N slipped
- Per-area sections with status badges
- Mini SVG bar chart
- "Next week" section

```css
.summary { display: flex; gap: 24px; margin: 24px 0; flex-wrap: wrap; }
.summary .stat {
  flex: 1; min-width: 140px;
  background: var(--paper);
  border: 1.5px solid var(--g300);
  border-radius: 12px;
  padding: 14px 16px;
}
.summary .stat .n { font-family: var(--serif); font-size: 32px; color: var(--slate); }
.summary .stat .lbl { font-family: var(--mono); font-size: 11px; color: var(--g500); text-transform: uppercase; letter-spacing: 0.06em; }

.item { display: flex; align-items: baseline; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--g200); }
.item .name { flex: 1; font-family: var(--serif); font-size: 16px; color: var(--slate); }
.item .badge.shipped { color: var(--olive); border-color: var(--olive); }
.item .badge.slipped { color: var(--rust); border-color: var(--rust); }
```

---

## Incident timeline

**When:** Post-mortem, incident report, outage.

**Reference:** `12-incident-report.html`

**Container:** `.page` (860px)

**Structure:** vertical line + dotted events + minute-by-minute log

```css
.timeline { position: relative; margin: 32px 0; padding-left: 28px; }
.timeline::before {
  content: ""; position: absolute; left: 6px; top: 0; bottom: 0;
  width: 2px; background: var(--g300);
}
.event { position: relative; padding: 12px 0; }
.event::before {
  content: ""; position: absolute; left: -28px; top: 18px;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--paper); border: 2px solid var(--g500);
}
.event.critical::before { border-color: var(--rust); background: var(--rust); }
.event.resolution::before { border-color: var(--olive); background: var(--olive); }
.event .time { font-family: var(--mono); font-size: 11px; color: var(--g500); }
.event .what { font-family: var(--serif); font-size: 16px; color: var(--slate); margin-top: 2px; }
```

---

## Slide deck

**When:** Presentation, briefing, share-out.

**Reference:** `09-slide-deck.html`

**Container:** Full viewport, scroll-snap

```css
body {
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  padding: 0;
  max-width: none;
}
.slide {
  width: 100vw; height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex; align-items: center; justify-content: center;
  padding: 8vh 6vw;
}
.slide-inner { width: 100%; max-width: 780px; }
.slide.invert { background: var(--slate); color: var(--ivory); }
.slide.invert h1, .slide.invert h2 { color: var(--ivory); }
.slide.invert em { color: var(--oat); }

.deck-progress {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
  font-family: var(--mono); font-size: 11px; color: var(--g500);
}
```

```js
document.addEventListener('keydown', e => {
  const slides = document.querySelectorAll('.slide');
  let cur = Math.round(window.scrollY / window.innerHeight);
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') cur = Math.min(cur + 1, slides.length - 1);
  if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  cur = Math.max(cur - 1, 0);
  slides[cur].scrollIntoView({ behavior: 'smooth' });
});
```

---

## Module map / flowchart

**When:** Architecture diagram, deploy pipeline, decision tree.

**Reference:** `04-code-understanding.html`, `13-flowchart-diagram.html`

**Use inline SVG.** Fill nodes with `--paper`, stroke with `--g500` 1.5px. Hot path strokes use `--clay`.

```html
<svg viewBox="0 0 600 300" class="diagram">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#87867F"/>
    </marker>
  </defs>
  <rect x="20" y="40" width="120" height="50" rx="8" fill="#FFFFFF" stroke="#87867F" stroke-width="1.5"/>
  <text x="80" y="70" text-anchor="middle" font-family="ui-serif, Georgia, serif" font-size="14" fill="#141413">Edge router</text>
  <line x1="140" y1="65" x2="240" y2="65" stroke="#87867F" stroke-width="1.5" marker-end="url(#arrow)"/>
</svg>
```

```css
.diagram { width: 100%; max-width: 720px; margin: 24px 0; display: block; }
.diagram .hot { stroke: var(--clay); stroke-width: 2; }
```

---

## Triage editor

**When:** Drag/sort items into columns. **Always include export button.**

**Reference:** `18-editor-triage-board.html`

```css
.board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0; }
.col {
  background: var(--paper);
  border: 1.5px solid var(--g300);
  border-radius: 12px;
  padding: 14px;
  min-height: 320px;
}
.col-head {
  font-family: var(--mono); font-size: 11px; color: var(--g500);
  text-transform: uppercase; letter-spacing: 0.08em;
  padding-bottom: 10px; margin-bottom: 12px;
  border-bottom: 1px solid var(--g200);
}
.ticket {
  background: var(--ivory);
  border: 1.5px solid var(--g300);
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 8px;
  font-size: 13px;
  cursor: grab;
}
.ticket:active { cursor: grabbing; }
.ticket.dragging { opacity: 0.4; }

.export-bar {
  position: sticky; bottom: 24px;
  display: flex; justify-content: flex-end; gap: 12px;
  margin-top: 32px;
}
button.export {
  font-family: var(--sans);
  background: var(--slate); color: var(--ivory);
  border: none; border-radius: 8px;
  padding: 10px 18px; font-size: 14px; cursor: pointer;
}
```

---

## Toggle / config editor

**When:** Feature flags, settings panel.

**Reference:** `19-editor-feature-flags.html`

```css
.flag { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--g200); }
.flag .name { font-family: var(--serif); font-size: 16px; color: var(--slate); }
.flag .desc { font-size: 13px; color: var(--g500); margin-top: 2px; }

.toggle { width: 38px; height: 22px; background: var(--g300); border-radius: 11px; position: relative; cursor: pointer; transition: background 120ms; }
.toggle.on { background: var(--olive); }
.toggle::after { content: ""; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; background: var(--paper); border-radius: 50%; transition: transform 120ms; }
.toggle.on::after { transform: translateX(16px); }
```

---

## Generic sections (when nothing else fits)

A simple sectioned document, no sidebar, no special layout. Just narrow `.page`, eyebrow + serif h1 + intro, then h2 sections with prose, callouts, and tables as needed.

This is the fallback. It's still styled — the eyebrow, the italic-clay h1, the editorial typography mix all carry the visual identity even without complex structure.
