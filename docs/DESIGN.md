---
name: GitHub Dark Minimalist
version: 1.0.0
description: Sistema visual escuro, minimalista e técnico, inspirado no GitHub Dark, para páginas de documentação, dashboards simples e interfaces de desenvolvedor.
language: pt-BR

colors:
  canvas:
    default: "#0d1117"
    subtle: "#161b22"
  foreground:
    default: "#e6edf3"
    muted: "#7d8590"
    inverse: "#ffffff"
  accent:
    foreground: "#2f81f7"
    focusRing: "rgba(47, 129, 247, 0.3)"
  border:
    default: "#30363d"
    hover: "#8b949e"
  button:
    background: "#21262d"
    hover: "#30363d"
    primary: "#238636"
    primaryHover: "#2ea043"
    dangerForeground: "#f85149"
    dangerHover: "#b62324"
  code:
    background: "rgba(110, 118, 129, 0.4)"
  table:
    rowEven: "rgba(22, 27, 34, 0.5)"

typography:
  body:
    fontFamily: '"JetBrainsMono Nerd Font", "JetBrains Mono", monospace'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  heading:
    fontFamily: '"JetBrainsMono Nerd Font", "JetBrains Mono", monospace'
    fontWeight: 600
    lineHeight: 1.25
  ui:
    fontFamily: '"Inter", sans-serif'
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
  code:
    fontFamily: '"JetBrainsMono Nerd Font", "JetBrains Mono", monospace'
    fontSize: "0.9em"
    fontWeight: 400

spacing:
  pagePadding: "2rem"
  pageMaxWidth: "800px"
  sectionGap: "2rem"
  headingUnderlineGap: "0.3em"
  buttonGap: "8px"
  buttonPadding: "5px 16px"
  inputPadding: "5px 12px"
  tableCellPadding: "8px 13px"
  inlineCodePadding: "0.2em 0.4em"
  blockquoteMargin: "1.5rem 0"
  blockquotePadding: "0 1em"

radii:
  control: "6px"
  inlineCode: "6px"

borders:
  default: "1px solid #30363d"
  divider: "1px solid #30363d"
  blockquote: "0.25em solid #30363d"

layout:
  page:
    maxWidth: "800px"
    margin: "0 auto"
    padding: "2rem"
  contentDensity: "compact"
  colorMode: "dark-only"

components:
  link:
    color: "{colors.accent.foreground}"
    textDecoration: "none"
    hoverTextDecoration: "underline"
  button:
    fontFamily: "{typography.ui.fontFamily}"
    backgroundColor: "{colors.button.background}"
    color: "{colors.foreground.default}"
    border: "{borders.default}"
    borderRadius: "{radii.control}"
    padding: "{spacing.buttonPadding}"
    fontSize: "{typography.ui.fontSize}"
    fontWeight: "{typography.ui.fontWeight}"
    hoverBackgroundColor: "{colors.button.hover}"
    hoverBorderColor: "{colors.border.hover}"
  buttonPrimary:
    backgroundColor: "{colors.button.primary}"
    color: "{colors.foreground.inverse}"
    borderColor: "rgba(240,246,252,0.1)"
    hoverBackgroundColor: "{colors.button.primaryHover}"
  buttonDanger:
    backgroundColor: "{colors.button.background}"
    color: "{colors.button.dangerForeground}"
    border: "{borders.default}"
    hoverBackgroundColor: "{colors.button.dangerHover}"
    hoverColor: "{colors.foreground.inverse}"
    hoverBorderColor: "{colors.button.dangerHover}"
  inputText:
    backgroundColor: "{colors.canvas.default}"
    color: "{colors.foreground.default}"
    border: "{borders.default}"
    borderRadius: "{radii.control}"
    padding: "{spacing.inputPadding}"
    fontSize: "{typography.ui.fontSize}"
    maxWidth: "300px"
    focusBorderColor: "{colors.accent.foreground}"
    focusBoxShadow: "0 0 0 3px rgba(47, 129, 247, 0.3)"
  inlineCode:
    backgroundColor: "{colors.code.background}"
    color: "{colors.foreground.default}"
    borderRadius: "{radii.inlineCode}"
    padding: "{spacing.inlineCodePadding}"
    fontFamily: "{typography.code.fontFamily}"
    fontSize: "{typography.code.fontSize}"
  table:
    width: "100%"
    borderCollapse: "collapse"
    cellPadding: "{spacing.tableCellPadding}"
    cellBorder: "{borders.default}"
    headerBackgroundColor: "{colors.canvas.subtle}"
    evenRowBackgroundColor: "{colors.table.rowEven}"
  blockquote:
    color: "{colors.foreground.muted}"
    borderLeft: "{borders.blockquote}"
    margin: "{spacing.blockquoteMargin}"
    padding: "{spacing.blockquotePadding}"
---

# Overview

Este design system descreve uma interface escura, técnica e minimalista. A estética deve lembrar ferramentas de desenvolvimento, documentação de repositórios e painéis de engenharia: fundo profundo, texto claro, bordas discretas, tipografia monoespaçada e interações objetivas.

A interface deve parecer estável, confiável e orientada a conteúdo. Evite ornamentos visuais, gradientes decorativos, sombras pesadas, glassmorphism, excesso de cor e componentes com aparência promocional. A linguagem visual correta é funcional, densa o suficiente para leitura técnica, mas ainda confortável.

Use este arquivo como fonte de verdade ao gerar páginas, componentes, temas CSS, Tailwind config ou protótipos visuais.

# Design Principles

## Dark-first, not adaptive by default

O modo escuro é parte da identidade visual. Não gere automaticamente um tema claro, a menos que isso seja solicitado. O fundo principal deve usar `canvas.default`, com superfícies secundárias em `canvas.subtle`.

## Developer-oriented minimalism

A interface deve priorizar legibilidade, hierarquia e previsibilidade. A estética deve parecer próxima de uma página de documentação técnica ou de uma interface GitHub-like. Bordas, espaçamento compacto e estados de hover sutis são preferíveis a cartões muito destacados.

## Token-first consistency

Use sempre os tokens definidos no front matter antes de escolher novos valores. Novas cores só devem ser criadas quando houver uma necessidade semântica clara. Quando possível, derive estados a partir dos tokens existentes.

# Color Usage

## Backgrounds

Use `canvas.default` como fundo principal da página. Ele deve cobrir o `body`, áreas de leitura e containers principais.

Use `canvas.subtle` para cabeçalhos de tabela, áreas de contraste leve, blocos secundários e superfícies que precisam se separar do fundo sem parecer cartões elevados.

Não use branco puro como fundo. Não use cinzas claros para superfícies principais.

## Text

Use `foreground.default` para texto principal, títulos, parágrafos e valores importantes.

Use `foreground.muted` para descrições, legendas, metadados, labels secundários e textos de apoio.

Use `foreground.inverse` apenas sobre fundos de ação fortes, como `button.primary` e `button.dangerHover`.

## Accent

Use `accent.foreground` para links, foco de inputs, realces interativos e pequenas indicações de navegação.

Não use o azul de acento como cor dominante de superfície. Ele deve aparecer em detalhes funcionais, não como bloco visual principal.

## Borders

Use `border.default` para separar seções, tabelas, botões, inputs e divisões horizontais.

Use `border.hover` apenas em estados interativos de hover, principalmente em botões neutros.

# Typography

## Body text

A fonte principal do corpo é `"JetBrainsMono Nerd Font", "JetBrains Mono", monospace`. Isso reforça a estética técnica e torna o layout adequado para documentação, variáveis, comandos e conteúdo de desenvolvedor.

Use `line-height: 1.6` para parágrafos e áreas de leitura. Não reduza excessivamente a altura de linha em conteúdo textual longo.

## UI controls

Use `"Inter", sans-serif` para botões e controles de interface. Isso diferencia ações clicáveis do conteúdo técnico e melhora a leitura em tamanhos menores.

Botões e inputs devem usar tamanho base de `14px`, peso `500` e espaçamento compacto.

## Code

Use a mesma família monoespaçada do corpo para `code`, blocos técnicos e tokens. Inline code deve ter fundo translúcido e raio de `6px`.

# Layout

Use largura máxima de `800px` para páginas de documentação e exemplos. Centralize a página com `margin: 0 auto` e aplique `padding: 2rem`.

O conteúdo deve ter ritmo vertical claro. Use divisões discretas entre seções, especialmente em títulos de segundo nível. Títulos `h2` devem ter borda inferior em `border.default`, padding inferior de `0.3em` e margem superior de `2rem`.

Evite layouts excessivamente largos para texto corrido. Se uma tela precisar de dashboard, preserve o mesmo vocabulário visual: fundo escuro, bordas finas, superfícies sutis e baixa saturação.

# Components

## Links

Links devem usar `accent.foreground` sem sublinhado no estado padrão. No hover, aplique sublinhado. Não use botões estilizados como links quando a ação for navegação textual simples.

## Buttons

Botões neutros usam:

- fundo `button.background`
- texto `foreground.default`
- borda `border.default`
- raio `6px`
- padding `5px 16px`
- fonte Inter em `14px` e peso `500`

No hover, use `button.hover` e `border.hover`.

Botões primários devem ser reservados para a principal ação afirmativa da tela. Use `button.primary` com texto branco. O hover pode usar `button.primaryHover`, mas verifique contraste quando o texto for pequeno.

Botões destrutivos devem começar discretos, com texto `dangerForeground` sobre fundo neutro. No hover, use fundo `dangerHover`, texto branco e borda da mesma cor do fundo. Essa mudança comunica risco apenas quando a ação está em foco.

## Inputs

Inputs de texto devem ter fundo igual ao canvas principal, borda padrão, texto claro e raio de `6px`.

No foco, remova o outline padrão e use:

```css
border-color: #2f81f7;
box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.3);
```

Labels devem ser discretos, em `foreground.muted`, tamanho `14px` e espaçamento inferior pequeno.

## Tables

Tabelas devem ocupar 100% da largura disponível, com `border-collapse: collapse`.

Cabeçalhos usam `canvas.subtle` e peso `600`. Células usam padding `8px 13px` e borda `border.default`.

Linhas pares podem usar `rgba(22, 27, 34, 0.5)` para melhorar escaneabilidade sem criar ruído visual.

## Blockquotes

Blockquotes devem ser calmos e secundários. Use texto `foreground.muted`, borda esquerda de `0.25em solid #30363d`, padding lateral `1em` e margem vertical `1.5rem`.

Não trate citações como cards. Elas devem parecer anotações editoriais dentro do fluxo do documento.

## Inline code

Inline code deve usar fundo translúcido `rgba(110, 118, 129, 0.4)`, padding `0.2em 0.4em`, raio `6px`, fonte monoespaçada e tamanho `0.9em`.

Use inline code para tokens, variáveis CSS, nomes de classes, comandos curtos e valores técnicos.

# Accessibility Guidance

Os pares principais têm contraste forte:

- `foreground.default` sobre `canvas.default`: aproximadamente 16.02:1.
- `foreground.muted` sobre `canvas.default`: aproximadamente 5.07:1.
- `accent.foreground` sobre `canvas.default`: aproximadamente 5.05:1.
- branco sobre `button.primary`: aproximadamente 4.63:1.
- `dangerForeground` sobre `canvas.default`: aproximadamente 5.65:1.

Atenção: branco sobre `button.primaryHover` (`#2ea043`) fica em torno de 3.37:1. Para texto pequeno, prefira manter `button.primary` no hover, escurecer o hover ou aumentar tamanho/peso do texto se a conformidade WCAG AA for obrigatória.

Sempre preserve foco visível em elementos interativos. O foco azul com box-shadow é parte do sistema visual e não deve ser removido.

# Implementation Notes

## CSS Variables

Ao implementar em CSS, exponha estes tokens como variáveis no `:root`:

```css
:root {
  --canvas-default: #0d1117;
  --canvas-subtle: #161b22;
  --fg-default: #e6edf3;
  --fg-muted: #7d8590;
  --accent-fg: #2f81f7;
  --border-default: #30363d;
  --btn-bg: #21262d;
  --btn-hover: #30363d;
  --success-bg: #238636;
  --danger-fg: #f85149;
}
```

## Recommended Base CSS

```css
body {
  font-family: "JetBrainsMono Nerd Font", "JetBrains Mono", monospace;
  background-color: var(--canvas-default);
  color: var(--fg-default);
  line-height: 1.6;
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
}
```

## Tailwind Mapping

Se estiver usando Tailwind, mapeie os tokens principais para nomes semânticos:

```js
theme: {
  extend: {
    colors: {
      canvas: {
        default: "#0d1117",
        subtle: "#161b22",
      },
      fg: {
        default: "#e6edf3",
        muted: "#7d8590",
      },
      accent: {
        fg: "#2f81f7",
      },
      border: {
        default: "#30363d",
      },
      button: {
        bg: "#21262d",
        hover: "#30363d",
        primary: "#238636",
        danger: "#f85149",
      },
    },
    fontFamily: {
      mono: ['"JetBrainsMono Nerd Font"', '"JetBrains Mono"', "monospace"],
      sans: ['"Inter"', "sans-serif"],
    },
    borderRadius: {
      control: "6px",
    },
    maxWidth: {
      content: "800px",
    },
  },
}
```

# Do and Don't

## Do

Use bordas finas para estruturar a interface.

Use superfícies escuras próximas entre si, sem contraste exagerado.

Use azul apenas para links, foco e realces interativos.

Use verde apenas para ações afirmativas principais.

Use vermelho apenas para ações destrutivas ou estados de erro.

Use monoespaçada como parte central da personalidade visual.

## Don't

Não introduza gradientes decorativos.

Não use sombras grandes para criar profundidade.

Não transforme cada seção em card se uma borda ou divisão simples resolver.

Não troque a tipografia principal por uma sans-serif genérica no conteúdo técnico.

Não use cores saturadas em grandes áreas.

Não remova indicadores de foco.

# Example Prompt for Agents

Ao gerar novas telas, siga este sistema visual: dark-only, GitHub-like, técnico, compacto, com JetBrains Mono para conteúdo, Inter para controles, fundo `#0d1117`, texto `#e6edf3`, bordas `#30363d`, links e foco em `#2f81f7`, botões neutros em `#21262d`, botão primário verde `#238636` e ações destrutivas em vermelho `#f85149`. Priorize legibilidade, bordas discretas e consistência de tokens.
