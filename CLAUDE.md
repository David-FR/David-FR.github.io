# CLAUDE.md

Guidance for Claude Code working in this repository.

## Stack

Hugo static site using [Hugo Blox Kit](https://hugoblox.com) (academic-cv template, schema v2, blox module v0.12.0). Deployed to GitHub Pages.

Dependencies: Hugo (v0.160+, extended), Go (Hugo modules), Node/npm.

## Dev commands

```bash
hugo server --port 1313   # local dev with hot reload
hugo build                # production build to public/
```

## Schema v2 — important

Hugo Blox has migrated author profiles. The **old** location (`content/authors/<slug>/_index.md`) is **ignored** by the theme. Profiles live in `data/authors/<slug>.yaml` (schema `hugoblox/author/v1`). Editing the old location silently does nothing — this was the cause of a real bug.

## Key file locations

| What | Where |
|---|---|
| Site identity, theme, analytics | `config/_default/params.yaml` |
| Site title, baseURL | `config/_default/hugo.yaml` |
| Navigation menu | `config/_default/menus.yaml` |
| Author profile (bio, education, links) | `data/authors/me.yaml` |
| Homepage sections | `content/_index.md` |
| Publications | `content/publications/<slug>/index.md` |
| Hosted PDFs | `static/files/publications/` |
| CV PDF | `static/files/CV_DavidFernandez.pdf` |
| Custom publication list view | `layouts/_partials/views/publication-list*.html` |
| Site reference (links, bios, pub info) | `SITE_INFO.md` |

## Author profile (`data/authors/me.yaml`)

Key fields under schema `hugoblox/author/v1`:

- `name.display` / `name.given` / `name.family`
- `role` — line under name
- `bio` — multi-line bio paragraph (rendered via the biography block)
- `affiliations` — list of `{ name, url }`
- `links` — social: list of `{ icon, url, label }` (Heroicons + academicons)
- `interests` — list
- `education` — list of `{ degree, institution, start, end, summary }`
- `experience` — list of `{ role, org, start, end, summary }`

**Bio is written in third person** ("David Fernandez is..."). This is intentional — bio prose needs to be reusable for speaker intros, journal author blurbs, panel programs, postdoc/faculty applications. Don't rewrite to first person.

## Homepage (`content/_index.md`)

Two sections:

1. **`resume-biography-3`** block — renders the "About Me" header, name, role, bio, education cards, and interests. The heading text is overridden via `headings.about: 'About Me'`.
2. **`collection`** block (`id: papers`, `view: publication-list`) — the custom publications list, sorted newest-first.

## Publications

Each publication is a folder under `content/publications/<slug>/` with an `index.md`. Minimum frontmatter:

```yaml
---
title: 'Full paper title'
authors:
  - me                                       # bolded; resolves via data/authors/me.yaml
  - Co Author Name
date: 'YYYY-MM-DDT00:00:00Z'
publication_types: ['paper-conference']      # 'article' for journals/preprints
publication: '*Venue Name*'                  # markdown italics; rendered italic
publication_short: '*Short Name*'
featured: true                               # currently has no visual effect — single list view
links:
  - type: pdf
    url: /files/publications/filename.pdf    # or external URL
---
```

**Optional sibling files** (auto-detected by the theme, no frontmatter needed):
- `cite.bib` — enables the Cite button on the publication list
- `<basename>.pdf` — alternative to `links` for hosted PDF

**Hosted PDF naming convention**: `lastname-year-short-title.pdf` (e.g. `fernandez-2025-avoiding-the-crash.pdf`). Drop in `static/files/publications/` and reference as `/files/publications/<file>.pdf`.

**Hosting policy**: SAE papers are paywalled — must be hosted. arXiv, USENIX, CVF, OpenReview — link directly, no need to host.

## Custom publication list view

Located at `layouts/_partials/views/publication-list{,-start,-end}.html`. Per-item rendering:

- **Authors** comma-separated; the slug `me` (or any author with `is_owner: true` in their data file) is bolded
- **Year** in parens after authors (from `event_start` or `date`)
- **Title** linked to the publication's detail page
- **Venue** rendered from `publication` (or `publication_short` fallback) via `markdownify` so the `*...*` markdown italics produce `<em>`
- **PDF** button if `links` has `type: pdf` or a sibling `<basename>.pdf` exists
- **Cite** button if a sibling `cite.bib` exists

**Cite button behavior** (custom JS in `publication-list--end.html`): on click, builds a `text/plain` Blob from the embedded bib content, opens it in a new tab (so server MIME on GitHub Pages doesn't matter), and triggers a `.bib` download. The bib text is embedded as a `data-cite-text` attribute at build time — no fetch, no popup-blocker issues.

**To enable Cite for a publication**: drop a `cite.bib` next to its `index.md`. Hugo Blox auto-detects the filename; no frontmatter change required.

## Available collection views

The `collection` block's `design.view` accepts (templates that actually exist):

- `article-grid` — large image cards, 2-col
- `card` — denser cards
- `citation` — academic citation list (theme default)
- `date-title-summary` — compact blog-style
- `publication-list` — **this project's custom view** (use this for publications)

To browse other blocks/views: previews live under `~/Library/Caches/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!hugoblox/kit/modules/blox@v0.12.0/blox/<name>/preview.svg`. Online catalog: <https://hugoblox.com/blocks/>.

## Updating site identity

- Name, tagline, description: `config/_default/params.yaml` under `hugoblox.identity`
- baseURL: `config/_default/hugo.yaml` (currently `https://david-fr.github.io/`)
- Custom domain: also add `static/CNAME` containing the domain

## Removed starter content

The blog, courses, events, projects, slides, and example publications from the Hugo Blox starter template were deleted. Don't reintroduce them unless asked.
