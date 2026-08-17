# 0003 — Color and dark-mode token strategy

- **Status:** Accepted
- **Date:** 2026-08-17

## Context

`tailwind.config.mjs` defines three custom colors (`primary`, `primary-inverted`,
`brand`) on top of the full default Tailwind palette. Dark mode
(`darkMode: 'selector'`) is applied inconsistently across the codebase by eye
rather than by rule — only 6 `dark:` occurrences exist in all of `src/`. A
review surfaced no documented answer to "which color system do I reach for,
and where does `dark:` go?"

## Decision

- **Dark mode is centralized, not per-component.** `@layer base` in
  `globals.css` applies `dark:` once, on `body`/`nav` (background) and on a
  fixed list of text-bearing tags (`header, span, svg, p, ul, a`). Components
  do not add their own `dark:` for text or for the two structural
  backgrounds — they inherit it.
- **A component adds its own `dark:` only when it introduces a new
  surface/background color** the base layer doesn't cover (e.g. `Header.astro`'s
  nav-pill `bg-gray-400/70 dark:bg-slate-700/70`). This is local and expected,
  not an inconsistency to eliminate.
- **The base-layer tag list is an "add-as-needed" list, not an exhaustive
  one.** A new element used for visible text (e.g. a future `<button>` or
  `<time>`) needs its tag added to `globals.css:14-21` or it silently won't
  get dark-mode text color. Accepted trade-off for a site this size.
- **Token usage is split by role, not by preference:**
  - `primary` / `primary-inverted` — page/surface background only. Today
    that's exactly `body` and `nav`; never used for text, borders, or accents.
  - `brand` — the single accent/interactive token: links, buttons,
    hover/focus states, highlights, dividers that need emphasis.
  - Everything else (body text, secondary/muted text, borders that aren't
    accents) uses raw Tailwind `gray`/`slate` shades directly, chosen ad hoc
    per use. `text-gray-900 dark:text-gray-100` in the base layer stays raw
    rather than becoming a named token — it has exactly one call site, so a
    token would rename without adding reuse.

## Consequences

- Adding a genuinely new structural surface (not just an accent) means
  extending the base-layer rule or its tag list, not scattering `dark:`
  through components.
- Contributors picking a color have a rule to follow: background → `primary`
  family, accent/interactive → `brand`, anything else → raw palette.
- If `primary`-family or raw-gray text usage grows beyond the current single
  call site, revisit whether text deserves its own semantic token.

## Alternatives rejected

- **`dark:` on every component individually**: more explicit locally, but
  duplicates the same two rules (`text-gray-900 dark:text-gray-100`,
  background swap) across every file that renders text — the base layer
  already covers 6 tag types for free.
- **A `color-scheme`/CSS-variable-driven palette instead of enumerated
  tags**: more robust against new element types, but no concrete need has
  hit yet on a codebase this size; revisit if the tag list becomes a
  recurring source of bugs.
- **Promoting `gray-900`/`gray-100` to named tokens now**: no second call
  site exists yet, so it would be a rename with no behavioral or reuse
  benefit.
