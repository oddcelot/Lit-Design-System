# Lit Design System

A design system for **Lit** — the simple, fast library for building web
components — with a flagship focus on the new **Lit DevTools**, a
Vite-DevTools-style inspector for Lit applications.

Lit ships small, standards-based custom elements. Its visual identity is the
**flame** mark (cyan → blue → indigo), the **Manrope** typeface, and a dark,
developer-tooling aesthetic borrowed from the Vue / Vite DevTools family. This
system packages those foundations as design tokens and a
full interactive DevTools UI kit so agents can build on-brand Lit interfaces,
docs, and tooling.

> **Theme model:** the tokens default (`:root`) to the **dark DevTools theme**
> — the flagship surface. The light lit.dev website theme is opt-in via a
> `.theme-light` class on any container.

---

## Sources

This system was reverse-engineered from the official Lit and Vue projects.
Anyone extending it should explore these directly for deeper fidelity:

- **lit.dev** — the marketing + docs site. Tokens, fonts, the flame logo, and
  the color system were lifted from here.
  `https://github.com/lit/lit.dev` → `packages/lit-dev-content/site/css/colors.css`,
  `…/css/fonts/*`, `…/site/images/*`
- **lit/lit** — the Lit core library (web components, reactive properties).
  `https://github.com/lit/lit`
- **Vue DevTools** — the structural & interaction reference for the DevTools UI
  (the new Lit DevTools is conceptually based on the Vite DevTools shown here).
  `https://github.com/vuejs/devtools` → `docs/getting-started/features.md`
  Live demo of equivalent features: `https://devtools.vuejs.org/getting-started/features`
- **lit.dev** live site: `https://lit.dev/`

Explore these repositories to do a better job building designs based on Lit.

---

## CONTENT FUNDAMENTALS

How Lit writes copy — calm, technical, second-person, lowercase-leaning.

- **Voice & person.** Speaks to *you*, the developer ("Build your next…",
  "your components"). Authoritative but unpretentious. First-person plural is
  rare and reserved for the team ("we recommend").
- **Tone.** Confident and concise. Lit's own taglines are three-word,
  period-terminated fragments: *"Simple. Fast. Web Components."* Favor short
  declarative statements over marketing fluff.
- **Casing.** Sentence case everywhere — headings, buttons, nav. Title Case is
  avoided. Product names keep their literal casing (`Lit`, `LitElement`,
  `lit.dev`, `@property`). Code identifiers stay verbatim and monospaced.
- **DevTools microcopy.** Terse, functional, lowercase labels: *"Find
  components…"*, *"Filter state…"*, *"8 pages"*, *"6 components"*. Counts read
  as `{n} {noun}`. Section headers in the inspector are lowercase
  (`reactive properties`, `internal state`, `attributes`, `events`).
- **Numbers & versions.** Versions are monospace with a leading `v` (`v3.2.1`).
  Durations are precise and small (`0.4ms`, `16.6ms frame budget`).
- **Emoji.** Not part of the brand. Avoid them in UI and copy. Status is shown
  with color + dots + words, not emoji. (Lit's own logo flame is the only
  "icon" with personality.)
- **Punctuation.** Ellipses on placeholder/searching states; `→` for
  transitions in logs (`done: false → true`). Avoid exclamation marks.

Examples to imitate:
- Hero: **"Build fast, lightweight web components."**
- Button: **"New element"**, **"Reload"**, **"Disconnect"**
- Empty state: **"Browse project files served by Vite. Pick a file to preview
  it with quick actions."**

---

## VISUAL FOUNDATIONS

- **Color vibe.** Two worlds. The **website** is bright, near-white
  (`#f4f4f4` bg) with electric flame blue (`#324eff`) accents. The **DevTools**
  is near-black (`hsl(0 0% 1%)` void, `hsl(0 0% 7%)` panels) with the brighter
  flame blue (`#4d63ff`) as the single accent and cyan (`#00e8ff`) as a spot
  highlight. Both are cool-toned; no warm grays.
- **Accent discipline.** One accent (flame blue) drives selection, primary
  buttons, and active nav. Cyan is a rare secondary spot (the floating pill
  target, ref values). Semantic green/amber/red appear only for status.
- **Type.** Manrope for everything UI — extrabold (800) for display, semibold
  (600) for controls/labels, regular/medium for body. Roboto Mono for all code,
  state values, tag names, versions, and durations. Tight tracking on large
  display sizes.
- **Backgrounds.** Mostly flat solid surfaces. The only imagery is the **"lit"
  repeat-pattern tile** (cyan glyphs on indigo) used as an occasional hero wash,
  and a subtle radial glow behind the DevTools window. No gradients on
  components; no photography.
- **Borders.** Hairlines everywhere — 1px, very low-contrast
  (`hsl(0 0% 100% / 0.06)` on dark). Panels are separated by these subtle rules
  rather than shadows. Strong borders (`ink-7`) only on inputs/controls.
- **Corner radii.** Soft but not pill-y: controls/cards `8px`, panels and the
  active-nav highlight `12px`, the DevTools window shell `22px`. True pills
  (`999px`) only for badges and the floating toolbar.
- **Cards.** Flat `surface-container` fill, 1px subtle border, `12px` radius,
  no shadow. Elevation is reserved for truly floating things.
- **Shadows.** Dark-tuned and restrained. Most surfaces have none. The floating
  DevTools window gets a large soft shadow + a 1px white-alpha ring; the
  floating pill gets a medium shadow.
- **Hover / press.** Hover = a faint white-alpha overlay (`/0.04`) or accent
  text tint; never a color inversion. Active nav = `accent-soft` fill + a 3px
  accent indicator bar. Press is a quick background darken, not a scale-down.
  Selected tree/list rows flip to a solid accent fill with white text.
- **Motion.** Quick and functional. `140ms` for most state changes, `220ms` for
  larger transitions, `cubic-bezier(0.2,0,0,1)` standard easing. Chevrons
  rotate, panels fade; **no bounces, no decorative looping animation** on UI.
- **Transparency & blur.** Minimal. Alpha is used for hover overlays, the
  window ring, and `accent-soft` tints — not glassmorphism. No backdrop-blur.
- **Layout.** The DevTools is a fixed 56px icon **rail** on the left + a fluid
  content area, often split 50/50 (tree | state). The website uses a 60px
  sticky header and a `76rem` max content column.

---

## ICONOGRAPHY

- **DevTools (this kit):** a **Lucide-style stroke set** — 24×24 grid, 2px
  stroke, round caps/joins, `fill: none`. This matches the lightweight outline
  aesthetic of the Vite / Vue DevTools. It is delivered as the **`Icon`**
  Lit component (`src/components/core/Icon.ts`) with a curated set
  (`info, components, tree, assets, route, timeline, graph, search, settings,
  close, chevrons, refresh, code, eye, external-link, target, filter, copy,
  split, star, bulb, map, bug, command, zap, file, folder, terminal, github,
  layers, package, link`). Use `<Icon name="…" size={…} />` — never hand-roll
  SVGs.
  > **Substitution flag:** Lucide is used as a stand-in for the DevTools' own
  > custom outline set (the real Vite/Vue DevTools icons are not redistributed
  > here). Stroke weight & style match; individual glyphs may differ. Swap in
  > the official set if you have it.
- **lit.dev website:** uses **Material Symbols (outlined)** — e.g. the
  `code`, `preview`, `splitscreen`, `edit-square`, `calendar-month` glyphs in
  `lit.dev/.../site/images/icons/`. If recreating website surfaces, link
  Material Symbols (outlined) from Google Fonts rather than the stroke set.
- **Brand mark:** the **flame** (`assets/flame.svg`, `assets/icon.svg`,
  `assets/flame-favicon.svg`) and the full logo+wordmark
  (`assets/logo.svg`). The flame is the only "filled" brand graphic and uses
  the four flame colors verbatim.
- **Emoji / unicode:** not used as iconography. (The `⌘ ⇧ ⌥` glyphs appear only
  inside keyboard-hint chips, and `⚡`/`→` as tiny inline accents in logs.)

---

## VISUAL ASSETS (`assets/`)

| File | Use |
|---|---|
| `flame.svg` | Primary flame mark (hardcoded brand colors) — use everywhere |
| `flame-white.svg` | Monochrome flame for dark-on-color contexts |
| `flame-favicon.svg` / `icon.svg` | Favicon / app icon variants |
| `logo.svg` | Full flame + "Lit" wordmark lockup (CSS-var driven) |
| `repeat-patterns-lit.webp` | The "lit" repeat-tile hero wash |
| `texture-white.png` | Subtle white texture overlay |

Fonts live in `fonts/` (Manrope 400–800, Roboto Mono 400) — see `fonts/LICENSE`.

---

## INDEX / MANIFEST

**Foundations**
- `styles.css` — the single entry point consumers link. `@import`s the tokens.
- `tokens/colors.css` — flame palette, neutral ink scale, dark + `.theme-light`
  semantic aliases, code syntax colors.
- `tokens/typography.css` — Manrope / Roboto Mono families, weights, type scale.
- `tokens/spacing.css` — spacing, radius, shadow, motion, layout, z-index.
- `tokens/fonts.css` — `@font-face` declarations.

**Components** (`src/components/`, Lit)
- `core/` — `Icon`, `Button`, `IconButton`, `Badge`, `Card`
- `forms/` — `Input`, `Switch`
- `devtools/` — `StatCard`, `SegmentedTabs`, `TreeNode`, `StateRow`

**UI Kits** (`ui_kits/`)
- `devtools/` — **Lit DevTools**, an interactive window with Overview,
  Elements (tree + state inspector), Pages, Timeline, and Settings screens.
  Open `ui_kits/devtools/index.html`.

**Guidelines** (`guidelines/`) — foundation specimen cards shown in the Design
System tab (Colors, Type, Spacing, Brand).

**Meta**
- `SKILL.md` — Agent-Skills wrapper so this system works in Claude Code.
- `_ds_manifest.json` — generated; do not edit.

---

## Using the components

Components are built with Lit and live in `src/components/`. Import them directly:

```html
<script type="module">
  import './src/components/core/Button.ts';
  import './src/components/core/Icon.ts';
</script>
<lit-button variant="primary">New element</lit-button>
```

For production work, copy the token CSS and the component source and
adapt as needed — every component is a Lit element reading CSS custom properties,
with no external dependencies.
