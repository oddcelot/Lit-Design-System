---
name: lit-design
description: Use this skill to generate well-branded interfaces and assets for Lit (the web-components library) and the Lit DevTools, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, design tokens (colors, type, spacing, motion), fonts, assets, and DevTools UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Design tokens come first

**Tokens are the source of truth for this brand.** Before writing any markup or styling, link `styles.css` (it `@import`s every token layer) and build with the CSS custom properties below. Never hard-code a hex color, font size, radius, or duration when a token exists — reach for a raw value only when nothing in the scale fits, and prefer extending the tokens over one-off values.

Read the token files in full before designing — they are short and they _are_ the spec:

- **`tokens/colors.css`** — the flame brand palette (`--lit-blue`, `--lit-cyan`, …), a 14-step neutral `--ink-*` scale, and **semantic aliases** (`--accent`, `--bg`, `--surface*`, `--text*`, `--border*`, `--success/warning/error/info`) plus code-syntax colors. **Always style against the semantic aliases**, not the raw palette — that is what makes theme switching work.
- **`tokens/typography.css`** — `--font-sans` (Manrope) / `--font-mono` (Roboto Mono), `--weight-*` (400–800), the `--text-2xs…--text-5xl` size scale, `--leading-*`, `--tracking-*`.
- **`tokens/spacing.css`** — the 4px-based `--space-*` scale, `--radius-*`, `--shadow-*` (incl. `--shadow-window`), `--ring`, motion (`--ease-*`, `--dur-*`), layout (`--rail-width`, `--header-height`, `--content-max-width`), and `--z-*`.
- **`tokens/fonts.css`** — `@font-face` declarations for the bundled webfonts.

**Theming:** tokens default (`:root`) to the **dark DevTools theme** — the flagship surface. The bright lit.dev website palette is opt-in: add class `theme-light` to any container (or `<html>`). Because all surfaces consume semantic aliases, a single class toggle reskins the whole tree. See `theme-showcase.html` and the `guidelines/` specimen cards for live token references.

## Key files

- `README.md` — full design guide: content + visual foundations, iconography, manifest.
- `styles.css` — link this one file to get every token (`@import`s `tokens/*`).
- `tokens/` — the design tokens (see above). Read these first.
- `src/components/` — **Lit web components** reading the tokens:
  - `core/` — `Icon`, `Button`, `IconButton`, `Badge`, `Card`
  - `forms/` — `Input`, `Switch`
  - `devtools/` — `StatCard`, `SegmentedTabs`, `TreeNode`, `StateRow`
  - `components/**/*.prompt.md` + `*.card.html` — per-component usage notes and specimens.
- `ui_kits/devtools/` — the interactive Lit DevTools recreation.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — flame logos, the "lit" pattern tile; `fonts/` — Manrope + Roboto Mono.
