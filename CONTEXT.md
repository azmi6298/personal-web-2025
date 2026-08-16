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
