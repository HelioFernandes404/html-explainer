---
name: holistic-html
description: Produce a single self-contained HTML file instead of markdown for any output that benefits from visual structure — documentation, reports, plans, code reviews, explainers, status updates, slide decks, diagrams, post-mortems, comparisons, or catalogs. Use this skill whenever the user asks for a writeup, a doc, a plan, an explanation, or anything with multiple sections, comparisons, timelines, code with annotations, or that would otherwise become a wall of markdown text — even when the user does not explicitly say "HTML". The output must use the project's signature warm editorial visual language: ivory background, serif titles with italic clay accents, sans-serif body, monospace labels, numbered section heads, card grids with subtle hover lift, and a serif-italic footer signature.
---

# holistic-html

Output a single self-contained `.html` file styled to match the project's example pages (`index.html` and the 20 numbered files in the project root). The aesthetic is **warm, editorial, confident** — closer to a New Yorker explainer than a Notion page or GitHub README.

## Process

1. **Copy** `assets/base-template.html` as your starting point — it has all tokens, signature elements, and the layout containers ready.
2. **Pick the pattern** from the table below. Read its full recipe in `references/pattern-catalog.md`.
3. **Read the reference example** at `/home/helio/Work/holistic-vision/<NN>-<name>.html` for structural detail when you need it.
4. **Replace placeholders** with the user's actual content — never leave Lorem Ipsum.
5. **Write** to a descriptive filename (e.g., `auth-rate-limiting.html`, `week-23-status.html`, `comments-thread-plan.html`).
6. **Open** in browser if available: `xdg-open <file>.html`.
7. **Tell the user** the filename and the pattern you used.

## Visual signature — required on every page

These elements are what make output look like *this project*, not a generic doc. Include all that apply.

| Element | Recipe |
|---|---|
| **Eyebrow** | `<div class="eyebrow">LABEL</div>` — mono, 12px, uppercase, `letter-spacing: 0.12em`, gray-500, with a 24px×1.5px `--clay` line via `::before` |
| **Hero h1** | serif, weight 500, `clamp(38px, 5.4vw, 62px)`, `line-height: 1.06`, `letter-spacing: -0.018em`, `max-width: 17ch`. Italic `<em>` colored `--clay` |
| **Lede** | `.intro` — 16.5px sans, gray-700, max-width 620px |
| **Section head** (when sectioned) | `.sec-head` with `.idx` (mono 13px clay 600 weight, 34px wide) + serif h2 + optional `.count` pill (mono 11px on g100, radius 999px) |
| **Footer** | `.k` element in serif italic, gray-700, with a quiet supporting line |

The italic `<em>` in the h1 colored `--clay` is the most distinctive single touch. Always use it on titles that have a natural emphasis word ("The unreasonable *effectiveness* of HTML", "How *rate limiting* works", "Cycle 14 *triage*").

## Pattern selection

| Request type | Pattern | Reference |
|---|---|---|
| Compare 2–4 approaches/options | Side-by-side panels | `01-exploration-code-approaches.html`, `02-exploration-visual-designs.html` |
| PR review with diff annotations | Annotated diff | `03-code-review-pr.html` |
| PR writeup for reviewers | Author's writeup | `17-pr-writeup.html` |
| Codebase walkthrough, module map | Boxes + arrows | `04-code-understanding.html` |
| How a feature/concept works | Sticky-nav explainer | `14-research-feature-explainer.html`, `15-research-concept-explainer.html` |
| Implementation/migration plan | Phased plan | `16-implementation-plan.html` |
| Weekly/sprint status | Status report | `11-status-report.html` |
| Incident / post-mortem | Timeline + checklist | `12-incident-report.html` |
| Slide presentation | Scroll-snap deck | `09-slide-deck.html` |
| Design tokens, component states | Token sheet | `05-design-system.html`, `06-component-variants.html` |
| Animation/interaction prototype | Live sandbox | `07-prototype-animation.html`, `08-prototype-interaction.html` |
| SVG figures, illustrations | Figure sheet | `10-svg-illustrations.html` |
| Process flow, deploy pipeline | Clickable flowchart | `13-flowchart-diagram.html` |
| Drag/sort/prioritize items | Triage editor | `18-editor-triage-board.html` |
| Toggle config or feature flags | Flag editor + diff export | `19-editor-feature-flags.html` |
| Tune a prompt/template live | Prompt tuner | `20-editor-prompt-tuner.html` |
| Catalog or index of items | Card grid + masthead | `index.html` |

When in doubt → **sticky-nav explainer**. It handles most documentation gracefully.

## Typography rules

The mix is intentional and is part of the visual identity.

| Family | Variable | Use for |
|---|---|---|
| Serif (Georgia) | `--serif` | h1, h2, h3, card titles, blockquotes, footer `.k` italic, summary in `<details>` |
| Sans (system-ui) | `--sans` | body paragraphs, descriptions, intros, button labels, table cells |
| Mono (ui-monospace) | `--mono` | eyebrows, file names, indices, count pills, badges, code, table headers, metadata |

Don't:
- Use mono for body text
- Use sans for h1/h2
- Use a generic geometric sans (Inter, Manrope, etc.) — system-ui is intentional, it feels editorial-not-startup

## Color rules

| Token | When to use |
|---|---|
| `--ivory` (#FAF9F5) | Page background. Never pure white. |
| `--paper` (#FFFFFF) | Cards, callouts, surfaces lifted off the page |
| `--slate` (#141413) | h1, h2, primary headings, hover border on cards |
| `--g700` (#3D3D3A) | Body text |
| `--g500` (#87867F) | Labels, metadata, captions, footer text |
| `--clay` (#D97757) | Italic em in titles, links, numbered indices, eyebrow line, accent details |
| `--olive` (#788C5D) | Affirmative state: shipped, success, completed |
| `--rust` (#B04A3F) | Warning state: slipped, blocked, at-risk |
| `--oat` (#E3DACC) | Warm hover background on illustrations, decorative panels |
| `--g100` / `--g200` / `--g300` | Tints, count pills, dividers, default 1.5px borders |

`--clay` is the only loud accent. Use sparingly:
- Italic emphasis in serif headings
- Numbered section indices
- The 24px line in eyebrows
- Link color
- Hover state markers

Never use `--clay` as a large fill or background block. Borders, slim accents, and small fills only.

## Layout

Two canonical containers — pick by content type:

```css
/* Wide — for catalogs, comparisons, dashboards, multi-column grids */
.wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px 140px; }

/* Narrow — for documents, explainers, reports, plans, single-column reading */
.page { max-width: 860px; margin: 0 auto; padding: 56px 32px 120px; }
```

Section spacing:
- `margin-top: 72px` between top-level sections in catalog layouts
- `margin: 48px 0 14px` for h2 in document layouts
- `scroll-margin-top: 24px` so anchored navigation lands cleanly

## Borders and radii

Borders are `1.5px solid var(--g300)` — slightly thicker than the standard 1px, which gives the editorial weight. Don't use 1px borders.

Radii:
- `6px` — small chips, badges
- `10px` — callouts, code blocks, tabs, details
- `14px` — cards
- `999px` — pills, count badges

## Hover and transitions

Cards:
```css
.card { transition: transform 150ms, box-shadow 150ms, border-color 150ms; }
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(20, 20, 19, 0.10);
  border-color: var(--slate);
}
```

Pills/links:
```css
nav.pills a { transition: border-color 120ms, color 120ms; }
nav.pills a:hover { border-color: var(--slate); color: var(--slate); }
```

No hover effect should change colors dramatically — the aesthetic is restrained.

## Quality checklist before delivering

- [ ] Single `.html` file, opens in a browser with no external requests
- [ ] All tokens declared in `:root`; no hardcoded hex outside `:root`
- [ ] Eyebrow with clay `::before` line is present (or page is genuinely too short to need it)
- [ ] Hero h1 is serif with at least one italic `<em>` colored `--clay`
- [ ] Body text is sans, headings are serif, labels/file names are mono
- [ ] Borders are `1.5px solid var(--g300)`, never 1px
- [ ] Real content from the user's request — no Lorem Ipsum, no placeholder names
- [ ] Footer with serif-italic `.k` element is present
- [ ] If interactive (deck, editor): keyboard works, focus styles visible

## Anti-patterns

Don't:
- Use a dark theme. The aesthetic is warm light. (`docs/DESIGN.md` describes an alternate dark system but it is not the default — only use it if the user explicitly asks.)
- Use mono for body text (despite what `docs/DESIGN.md` says — it conflicts with this skill's default)
- Use Inter, Manrope, or any geometric sans
- Use 1px borders; the project uses 1.5px
- Use heavy drop shadows except on card hover
- Use gradients, glassmorphism, or decorative backgrounds
- Use pure white as the page background — it must be `--ivory`
- Skip the eyebrow + serif h1 hero — that opening is the signature
- Use generic Bootstrap-style cards with a subtle gray background
- Add introductory or summary fluff text — the page itself is the deliverable
