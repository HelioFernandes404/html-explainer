# html-explainer

Toolkit for generating self-contained `.html` artifacts in Claude Code.

Instead of answering with a wall of markdown, `html-explainer` turns requests into browser-ready HTML for:

- documentation
- explainers
- plans
- reports
- code reviews
- diagrams
- slide decks

This repository has two separate workflows:

1. `html-explainer` as a skill
2. `html-explainer-prompt` as a standalone slash command for Claude Code and OpenCode

## Workflows

| Workflow | Use when | Invocation |
|---|---|---|
| Skill | You want Claude to auto-discover the capability, or you want to invoke it as a reusable skill | `/html-explainer` |
| Prompt | You want an explicit manual command isolated from the skill system | `/html-explainer-prompt` |

## Recommended use

| Goal | Recommended workflow |
|---|---|
| Reusable capability that Claude can discover automatically | Skill |
| Explicit one-shot command with manual control | Prompt |
| Install both and choose per project/session | Both |

## What it does

When the request has real structure, `html-explainer` produces a single browser-ready `.html` file instead of a markdown response.

The output uses the **GitHub Dark Minimalist** design system: dark background (`#0d1117`), JetBrains Mono body, GitHub-style tokens, no external dependencies.

## Install the skill

Global install with the `vercel-labs/skills` pattern:

```bash
npx skills add https://github.com/HelioFernandes404/html-explainer --skill html-explainer -a claude-code -g
```

Project-local install:

```bash
npx skills add https://github.com/HelioFernandes404/html-explainer --skill html-explainer -a claude-code
```

This installs the skill at `~/.claude/skills/html-explainer/` or `.claude/skills/html-explainer/`.

## Install the prompt

Global install for Claude Code:

```bash
mkdir -p ~/.claude/commands
curl -fsSL https://raw.githubusercontent.com/HelioFernandes404/html-explainer/main/.claude/commands/html-explainer-prompt.md -o ~/.claude/commands/html-explainer-prompt.md
```

Project-local install:

```bash
mkdir -p .claude/commands
curl -fsSL https://raw.githubusercontent.com/HelioFernandes404/html-explainer/main/.claude/commands/html-explainer-prompt.md -o .claude/commands/html-explainer-prompt.md
```

This installs the prompt at `~/.claude/commands/html-explainer-prompt.md` or `.claude/commands/html-explainer-prompt.md`.

Global install for OpenCode:

```bash
mkdir -p ~/.config/opencode/commands
curl -fsSL https://raw.githubusercontent.com/HelioFernandes404/html-explainer/main/.opencode/commands/html-explainer-prompt.md -o ~/.config/opencode/commands/html-explainer-prompt.md
```

Project-local install for OpenCode:

```bash
mkdir -p .opencode/commands
curl -fsSL https://raw.githubusercontent.com/HelioFernandes404/html-explainer/main/.opencode/commands/html-explainer-prompt.md -o .opencode/commands/html-explainer-prompt.md
```

This installs the OpenCode prompt at `~/.config/opencode/commands/html-explainer-prompt.md` or `.opencode/commands/html-explainer-prompt.md`.

## Install both with the bundled installer

```bash
npx html-explainer
```

Only skill:

```bash
npx html-explainer --skill
```

Only prompt:

```bash
npx html-explainer --prompt
```

## Repository layout

```text
.
├── .claude/
│   ├── commands/
│   │   └── html-explainer-prompt.md
│   └── skills/
│       └── html-explainer/
│           ├── SKILL.md
│           └── references/
├── .opencode/
│   └── commands/
│       └── html-explainer-prompt.md
├── bin/
│   └── install.js
└── examples/
```

## Examples

20 reference files organized by use case:

| Category | Examples |
|---|---|
| `examples/01-exploration/` | Code approaches, visual design directions, implementation plan |
| `examples/02-code-review/` | Annotated PR, module map, PR writeup |
| `examples/03-design/` | Living design system, component variants |
| `examples/04-prototyping/` | Animation sandbox, clickable flow |
| `examples/05-diagrams/` | SVG figure sheet, annotated flowchart |
| `examples/06-decks/` | Arrow-key slide deck |
| `examples/07-research/` | Feature explainer, concept explainer |
| `examples/08-reports/` | Weekly status, incident timeline |
| `examples/09-editors/` | Triage board, feature flag editor, prompt tuner |

Open any file in `examples/` in a browser to explore the references.

## Skill structure

```
~/.claude/skills/html-explainer/
├── SKILL.md
├── references/
│   ├── design-tokens.md
│   └── pattern-catalog.md
└── examples/
    └── 01-exploration/ … 09-editors/
```

## Prompt structure

```
~/.claude/commands/html-explainer-prompt.md
~/.config/opencode/commands/html-explainer-prompt.md
```

## License

MIT
