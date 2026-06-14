---
name: lit-design
description: Use this skill to generate well-branded interfaces and assets for Lit (the web-components library) and the Lit DevTools, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and DevTools UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `README.md` — full design guide: content + visual foundations, iconography, manifest.
- `styles.css` — link this one file to get every token (`@import`s `tokens/*`).
- `tokens/` — colors (dark DevTools default + `.theme-light`), type, spacing, fonts.
- `components/` — React primitives (Icon, Button, IconButton, Badge, Card, Input, Switch, StatCard, SegmentedTabs, TreeNode, StateRow).
- `ui_kits/devtools/` — the interactive Lit DevTools recreation.
- `assets/` — flame logos, the "lit" pattern tile; `fonts/` — Manrope + Roboto Mono.

Theme note: tokens default to the **dark DevTools theme**; add class `theme-light` for the bright lit.dev website palette.
