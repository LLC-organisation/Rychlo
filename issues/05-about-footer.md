# Issue #5 — About Section + Footer

**Type**: AFK  
**Status**: open

## What to build

Implement the About section and the site footer. The About section anchors the company's identity and builds human trust. The footer closes the page with brand reinforcement and legal copy.

**About Section** (`id="about"`) must display:
- **Mission** — a short statement about why the company exists
- **Vision** — where the company is heading
- **Values** — a grid of core values (matching the Figma `ValueCard` pattern)
- **Leadership Team** — team member cards (name, role, short bio) using the Figma `TeamCard` pattern
- **Company Story** — a 2–3 sentence narrative paragraph

Placeholder copy is fine for v1 — the admin will refine it. The structure must make future copy updates a single-file change.

**Footer** must include:
- Logo (yellow gradient square + wordmark)
- Tagline
- Navigation links mirroring the navbar
- Copyright line: "© 2025 Biashara Automation. All rights reserved."

## Acceptance criteria

- [ ] About section renders all five subsections: Mission, Vision, Values, Team, Company Story
- [ ] Values display in a responsive grid (1 → 2 → 3 cols)
- [ ] Team cards show name, role, and bio; layout is responsive
- [ ] Footer renders logo, tagline, nav links, and copyright
- [ ] Section has `id="about"` anchor
- [ ] No images are broken or missing (use placeholder avatars for team if photos are unavailable)
- [ ] All copy is in plain business language

## Blocked by

- Issue #1 (project scaffold + design system)
