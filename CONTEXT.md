# Context

Glossary for this codebase. Terms only — no implementation detail, no plans.

## Post

A single piece of long-form writing, authored as one markdown file in the `blog`
collection. A Post is the unit of publishing: it has one canonical location, one
publication date, and one language.

A Post is not a page. Pages (`/`, `/about-me`) are hand-built; Posts are content.

## Draft

A Post that is not yet published. Drafts are visible while developing and absent
from the built site — they appear in neither the index, nor the homepage list,
nor the feed.

"Draft" is about readiness to be *read*, not about completeness of a file. A
finished Post held back for launch timing is still a Draft.

## Published

A Post that is not a Draft. "The published posts" always means the built,
publicly visible set — never "everything in the collection".

## Canonical

The address a Post should be credited to, as distinct from the address it is
served at. Most Posts are canonical to this site. A [Migrated Post](#migrated-post)
is canonical to Medium — see `docs/adr/0001`.

Note the direction: canonical points *away* from us for exactly the posts we did
not originate here.

## Migrated Post

A Post whose text was moved out of Medium into this repo while the Medium copy
stayed published. Migrated Posts are the only Posts with a Canonical other than
this site.

Currently the three-part *Membangun Aplikasi Reservasi Meja dengan MEVN* series.

## Language (`lang`)

The language a Post is written in, not the language of the site. The site is
English; a Post may be Indonesian. Posts not in the site language are marked so
a reader is not surprised by what they land on.

## Position

One engagement in Azmi's professional past: a salaried job, a freelance
contract, a teaching stint, or an internship. All four are Positions — the
kind is described in prose, not modelled.

A Position has a start and an end. An end of "present" means the Position is
still running; there is at most one such Position at a time in practice, but
nothing enforces it.

Positions overlap. Several freelance Positions ran inside the span of a
salaried one. Overlapping is normal, not an anomaly to be resolved.

## Work History

The ordered set of all Positions. Ordered by *end* date, most recently active
first — not by start date, which would sink a long Position below the short
ones that ran inside it.

Work History includes Positions from before the career proper began: the 2018
internship predates the 2019 start date claimed in the About Me prose. Both
are correct — an internship is not a career start.
