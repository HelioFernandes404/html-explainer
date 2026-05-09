# Design Tokens — Warm Editorial

The full token set used by every page in this project. Source of truth: `index.html` and the 20 example `.html` files in the project root. Use these tokens, not the dark system in `docs/DESIGN.md`.

---

## Color tokens

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `--ivory` | `#FAF9F5` | Page background. Warm off-white. **Never use pure white as bg.** |
| `--paper` | `#FFFFFF` | Cards, callouts, panels lifted off the page |

### Text

| Token | Hex | Contrast on ivory | Use |
|---|---|---|---|
| `--slate` | `#141413` | ~16:1 | h1, h2, h3, primary headings, hover border |
| `--g700` | `#3D3D3A` | ~10:1 | Body text, paragraphs, descriptions |
| `--g500` | `#87867F` | ~3.5:1 | Labels, captions, metadata, footer text (don't use for body) |

### Accent

| Token | Hex | Use |
|---|---|---|
| `--clay` | `#D97757` | Italic em in titles, links, indices, eyebrow line. The signature accent. |
| `--clay-d` | `#B85C3E` | Hover state on clay elements |
| `--olive` | `#788C5D` | Affirmative state: shipped, success, on-track |
| `--rust` | `#B04A3F` | Warning state: slipped, blocked, at-risk |
| `--oat` | `#E3DACC` | Warm hover background on illustrations, decorative panels |

### Tints

| Token | Hex | Use |
|---|---|---|
| `--g100` | `#F0EEE6` | Count pills, subtle row tinting, code background |
| `--g200` | `#E6E3DA` | Dividers in light contexts, lighter borders |
| `--g300` | `#D1CFC5` | **Default border (use 1.5px width)** |

---

## Typography

### Families

```css
--serif: ui-serif, Georgia, "Times New Roman", Times, serif;
--sans:  system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--mono:  ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
```

System fonts only. **Do not load Google Fonts**. The system stacks were chosen on purpose — Georgia gives the editorial feel, system-ui keeps body text grounded, ui-monospace is clean across OSes.

### Roles

| Family | Used for |
|---|---|
| `--serif` | h1, h2, h3, card titles, blockquote, footer `.k`, `<details>` summary |
| `--sans` | Body paragraphs, `.intro`, descriptions, button labels, table cells |
| `--mono` | `.eyebrow`, file names, indices, count pills, badges, code, table headers, metadata |

### Sizes (canonical from `index.html`)

| Element | Size | Family | Weight | Other |
|---|---|---|---|---|
| Hero h1 | `clamp(38px, 5.4vw, 62px)` | serif | 500 | `line-height: 1.06`, `letter-spacing: -0.018em`, `max-width: 17ch` |
| Section h2 (head) | `27px` | serif | 500 | `letter-spacing: -0.012em` |
| In-content h2 | `22-27px` | serif | 500 | `margin: 40-48px 0 14px` |
| h3 | `20px` | serif | 500 | `margin: 28px 0 10px` |
| Card title | `19px` | serif | 500 | `letter-spacing: -0.008em` |
| Body | `15-16px` | sans | 400 | `line-height: 1.55-1.65` |
| Lede / .intro | `16.5px` | sans | 400 | `max-width: 620px` |
| Eyebrow | `12px` | mono | 400 | uppercase, `letter-spacing: 0.12em` |
| Card desc | `13.5px` | sans | 400 | `line-height: 1.5` |
| File path / metadata | `11px` | mono | 400 | gray-500 |
| Count pill | `11px` | mono | 400 | g100 bg |
| Badge | `10.5px` | mono | 400 | uppercase, `letter-spacing: 0.06em` |

---

## Spacing

| Token | Value | Use |
|---|---|---|
| Page side padding | `32px` (wide) / `32px` (narrow) | Container horizontal padding |
| Page top padding | `0-80px` | Hero sets its own padding |
| Page bottom padding | `120-140px` | Generous bottom whitespace |
| Section margin-top | `72px` | Between catalog sections |
| h2 margin | `48px 0 14px` | In-content section spacing |
| h3 margin | `28px 0 10px` | Sub-section spacing |
| Card gap | `20px` | Grid gap |
| Eyebrow margin-bottom | `18px` | Between eyebrow and h1 |
| Footer margin-top | `100px` | Push footer down |

---

## Borders & radii

### Borders

```css
/* Default — use this everywhere */
border: 1.5px solid var(--g300);

/* Strong / hover */
border: 1.5px solid var(--slate);

/* Subtle internal dividers */
border-bottom: 1px solid var(--g100);
```

**Always 1.5px** for default borders. 1px feels web-default; 1.5px feels editorial.

### Radii

| Value | Use |
|---|---|
| `4px` | Inline code |
| `6px` | Small chips, badges, tags |
| `10px` | Callouts, code blocks, tabs, `<details>` panels |
| `14px` | Cards |
| `999px` | Pills, count badges |

---

## Layout containers

### Wide — for catalogs, comparisons, dashboards

```css
.wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px 140px; }
```

Use when: card grids, multi-column comparisons, design-system contact sheets, anything that benefits from breathing room.

### Narrow — for single-column reading

```css
.page { max-width: 860px; margin: 0 auto; padding: 56px 32px 120px; }
```

Use when: explainers, reports, plans, post-mortems, prose-heavy documents.

### With sidebar nav

```css
.page {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 48px;
  padding: 56px 24px 120px;
}
@media (max-width: 920px) { .page { grid-template-columns: 1fr; } nav { display: none; } }
```

Use when: feature explainers with many sections (pattern 14), code understanding pages.

---

## Hover & motion

Restrained transitions, never flashy.

```css
/* Cards lift slightly */
.card { transition: transform 150ms, box-shadow 150ms, border-color 150ms; }
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(20, 20, 19, 0.10);
  border-color: var(--slate);
}

/* Pills firm up */
nav.pills a { transition: border-color 120ms, color 120ms, background 120ms; }
nav.pills a:hover { border-color: var(--slate); color: var(--slate); }

/* Links underline */
a { color: var(--clay); text-decoration: none; }
a:hover { text-decoration: underline; text-decoration-color: var(--oat); text-underline-offset: 3px; }
```

No transforms over 4px. No durations over 200ms. No bounce easing.

---

## Focus

```css
:focus-visible {
  outline: 2px solid var(--clay);
  outline-offset: 2px;
  border-radius: 4px;
}
```

Never `outline: none` without replacing it. Focus is part of the visual identity.

---

## What this system is NOT

- Not GitHub. Not VS Code. Not a developer dashboard. (`docs/DESIGN.md` is — ignore it for the default skill output.)
- Not a SaaS landing page. No gradients, no glassmorphism, no hero illustrations.
- Not Notion. No emoji-heavy headings, no faux-friendly tone, no generic sans-serif everywhere.
- Not Material. No elevation system, no FAB, no rippling buttons.

It is: an editorial document that happens to render in a browser. Closer in spirit to The New Yorker, NYT graphics, or a well-designed print zine.
