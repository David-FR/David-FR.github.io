# CLAUDE.md

Guidance for Claude Code working in this repository.

## Stack

Hugo static site using [Hugo Blox Kit](https://hugoblox.com) (academic-cv template, schema v2, blox module v0.12.0). Deployed to GitHub Pages.

Dependencies: Hugo (extended, **pinned to `build.hugo_version` in `hugoblox.yaml`** — currently 0.159.2; CI uses that pin), Go (Hugo modules), Node/npm.

## Local environment (all project-local, inside `.venv/`)

Hugo and Go both live in the gitignored `.venv` — nothing is installed globally. To recreate from scratch:

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt        # Hugo extended binary via pip wheel
GOVER=$(curl -fsSL "https://go.dev/VERSION?m=text" | head -1)
curl -fsSL "https://go.dev/dl/${GOVER}.darwin-arm64.tar.gz" | tar -xz -C .venv
ln -sf ../go/bin/go .venv/bin/go                 # Hugo shells out to `go` for modules
npm install
```

Don't install a newer Hugo than the `hugoblox.yaml` pin: Hugo ≥0.164 enforces a
`security.allowContent` policy that rejects the raw `_*.html` partials used by
publication pages.

## Dev commands

```bash
source .venv/bin/activate  # puts hugo + go on PATH
hugo server --port 1313    # local dev with hot reload
hugo build                 # production build to public/
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

The **`resume-biography-3`** block renders the "About Me" header, name, role, bio, education cards, and interests. The heading text is overridden via `headings.about: 'About Me'`.
Its optional `content.contact_button` label enables a Contact button beside Download CV,
using the first `mailto:` link in the author profile. The buttons wrap on narrow screens.
An optional `content.headline` list replaces the displayed role and affiliation lines;
each entry has `text` and can set `secondary: true` for supporting context.

The **`selected-research`** block follows the biography with three publication cards.
Its `content.papers` entries in `content/_index.md` set the publication page path,
research area, accent, short summary, and optional `affiliation` (name, context, logo). Titles,
venue labels, and links resolve from the publication pages. Cards appear in three
columns on desktop and stack on mobile; styling lives in `assets/css/selected-research.css`.
Affiliation footers align at the bottom of each card. Logos live under
`assets/media/affiliations/`; TigerSec and VIPR-GS were supplied by the site owner.
The BMW Group wordmark comes from `https://www.bmwgroup.com/etc.clientlibs/grpw-web/clientlibs/grpw-base/resources/images/logo/BMWGroup_light.svg`.
Its dark-theme variant comes from `https://www.bmwgroup.com/etc.clientlibs/grpw-web/clientlibs/grpw-base/resources/images/logo/BMWGroup_dark.svg`.
Affiliations can set `logo_dark` for a dark-theme asset and `backing: muted` for a
subtle light backing when needed for legibility; other logo backgrounds are transparent.

The publications list lives on its own page, configured in `content/publications/_index.md`.

## Publications

Paper pages use a sticky navigation bar configured by `paper_navigation` entries
with `label` and `anchor`. The shared template provides `paper-overview` for key
takeaways, `paper-abstract`, and `paper-details`; custom sections provide their own
unique IDs with `paper-section-anchor` and `tabindex="-1"`. Link only to sections
present on the page. The bar includes a Back to publications link and is rendered
by `layouts/_partials/components/paper-navigation.html`.

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

### Presentation slides

Publication folders use `content/publications/<venue-year-short-title>/`; an explicit
`slug` in each `index.md` preserves the existing public URL when a folder is renamed.
Drop slide PDFs into the paper's `presentations/` folder (e.g. `presentations/icip-2026.pdf`).
The shared `layouts/_partials/components/presentation-links.html` partial automatically
adds Slides buttons to both the publication list and paper page. No frontmatter edit is needed.
PDFs open in a new tab; `.ppt` and `.pptx` files download with their format in the button label.
Multiple files get filename-based labels. Missing or empty folders produce no buttons.
Publication actions use PDF → Slides → Code → DOI → Cite order, omitting unavailable links.

## Custom publication list view

The publications page uses `layouts/_partials/hbx/blocks/publications-filtered/block.html`
to render one continuous list across all years. `publication_order` in each paper's
frontmatter sets the editorial venue priority (lower numbers first; use increments
of 10 to leave room for additions). Papers at the same priority are newest-first;
papers without a priority follow ranked papers. The current venue order is DSN,
IEEE IV, ICIP, CVPR Workshops, VehicleSec, AdvML@CVPR, SAE WCX, SACAIR, then arXiv.
The list includes topic buttons for LLMs & Generative AI, VLMs & Multimodal AI,
Agentic AI, AI Security & Robustness, Model Evaluation, Explainable AI,
Efficient & Edge AI, Computer Vision, and Autonomous Driving.
Model Evaluation covers papers contributing comparative model studies, benchmarks,
or evaluation metrics. Efficient & Edge AI includes model-size/quality tradeoffs
and on-device inference. Topic membership should be supported by each paper,
not inferred from the author's broader work experience.
`data/publication_topics.yaml` maps each topic to publication tags. Matching any tag
in a topic includes the paper. Selecting All resets the topic filter. A visible
"Showing X of Y papers" count updates with the selection without changing paper
order. The controls are enabled by
`assets/js/publication-filters.js`, styled by `assets/css/publication-filters.css`;
without JavaScript, all papers remain visible and filter controls stay hidden.
All topic buttons are visible on both desktop and mobile, wrapping as needed.
The topic buttons and result count are centered above a narrower, centered paper
column. Publication text and action buttons remain left-aligned; summaries wrap naturally.
It reuses `layouts/_partials/views/publication-list.html` for each entry; the collection
view's start/end fragments remain available for flat lists elsewhere. Per-item rendering:

- **Authors** comma-separated; the slug `me` (or any author with `is_owner: true` in their data file) is bolded
- **Year** in parens after authors (from `event_start` or `date`)
- **Title** linked to the publication's detail page
- **Summary** optional `list_summary` frontmatter: one plain-language sentence beneath the title, describing the contribution for recruiters. Keep it grounded in the paper; it wraps naturally on small screens and does not replace the abstract or detail-page pull quote.
- **Venue** rendered from `publication` (or `publication_short` fallback) via `markdownify` so the `*...*` markdown italics produce `<em>`
- **Award** gold badge beneath the venue for each `links` entry with `type: award` and a URL; uses its `label` and links to the award source. The same metadata already enables the award link on the detail page.
- **PDF** button if `links` has `type: pdf` or a sibling `<basename>.pdf` exists
- **Cite** button if a sibling `cite.bib` exists

**Cite button behavior** (shared JS in `layouts/_partials/components/publication-cite-script.html`): on click, builds a `text/plain` Blob from the embedded bib content, opens it in a new tab (so server MIME on GitHub Pages doesn't matter), and triggers a `.bib` download. The bib text is embedded as a `data-cite-text` attribute at build time — no fetch, no popup-blocker issues.

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
- baseURL: `config/_default/hugo.yaml` (currently `https://davidferna.com/`)
- Custom domain: also add `static/CNAME` containing the domain

## Removed starter content

The blog, courses, events, projects, slides, and example publications from the Hugo Blox starter template were deleted. Don't reintroduce them unless asked.
