# 0001 — Migrated posts declare canonical to Medium

- **Status:** Accepted
- **Date:** 2026-08-16

## Context

The first content on this site is a three-part series from 2020, migrated out of
Medium (published there under the *Easyread* publication, which we do not
control). The Medium originals stay published — they hold whatever inbound links
and readership the series has.

That leaves two live copies of identical text on the public web. Search engines
resolve duplicates by picking one copy and suppressing the other, and
`medium.com` outranks this domain on every signal that decides it.

## Decision

Migrated posts carry a `canonicalUrl` in frontmatter, rendered as
`<link rel="canonical">` pointing at the Medium original. Posts written here
leave the field empty and are canonical to this domain.

## Consequences

- Search engines credit Medium, not us, for these three posts. Accepted: Medium
  would win the duplicate-content contest either way, and an explicit canonical
  at least stops the two copies cannibalising each other.
- Anyone reading the frontmatter will see our own posts pointing at a third-party
  publication and may assume it is a bug. It is not — it is this decision.
- The canonical targets a publication on a domain we do not own. If Easyread
  unpublishes the originals, these posts lose their canonical target and the
  field should be dropped.
- Reversible by unpublishing the Medium originals and removing the field. Cheap
  in code, slow to take effect in a search index.

## Alternatives rejected

- **Unpublish the Medium originals and go canonical here.** Cleanest for SEO,
  but discards the existing readership and breaks inbound links.
- **Leave the posts on Medium and don't migrate.** Rejected: we want the content
  to survive independently of Medium.
- **Migrate with no canonical at all.** Rejected: that is the duplicate-content
  problem with no mitigation, and the outcome is decided silently by a crawler
  rather than by us.
