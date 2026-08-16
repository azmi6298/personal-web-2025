# 0002 — Site-wide view transitions via Astro's ClientRouter

- **Status:** Accepted
- **Date:** 2026-08-16

## Context

Navigating between pages (home, about-me, blogs, individual posts) was a hard
page swap with no continuity. Astro ships a native View Transitions API
(`astro:transitions`) that animates same-origin navigations and falls back
gracefully on unsupported browsers.

## Decision

- `<ClientRouter />` is added once in `Layout.astro`, the shared layout for
  every route, so transitions apply site-wide with no per-page opt-in.
- No custom `transition:animate` directives — use Astro's default crossfade.
- `<Header />` carries `transition:persist` so it stays mounted across
  navigations instead of re-rendering; safe because `Header.astro` has no
  per-page state (no active-link highlighting).
- Fallback stays at Astro's default (`animate`), no explicit config.

## Consequences

- Every route transition now crossfades; no code changes needed per page.
- Header no longer flashes/remounts between pages.
- If Header ever gains per-page state (e.g. active nav highlighting), that
  state will need to be re-derived on `astro:page-load`/`astro:after-swap`
  since the element persists across navigations.

## Alternatives rejected

- **Per-page opt-in** (`ClientRouter` on individual pages instead of the
  shared layout): more control, but every current page shares `Layout.astro`
  anyway, so it would just be duplicated boilerplate for no benefit.
- **Custom `transition:animate` directives**: more visual control, but no
  concrete animation spec was requested — default fade covers the ask with
  zero extra code. Can be layered on later.
