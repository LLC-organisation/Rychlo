# Issue #10 — Case Studies Section with seeded mock data

**Type**: AFK  
**Status**: open

## What to build

Implement the Case Studies section that reads `published: true` rows from the `CaseStudy` table and renders them as cards. Seed data from Issue #6 provides 2–3 mock entries so the section is never empty in v1.

**Each case study card** displays:
- Client Problem (the challenge they faced)
- Solution (what Biashara Automation built)
- Results (measurable outcomes — e.g., "Reduced processing time by 70%")
- Industry tag (optional badge)
- Company size context (optional)

Cards render in a responsive grid (1 col mobile → 2 col desktop). The section title is "Success Stories" — plain language over "Case Studies" per the PRD's simplicity-first principle. A "View All" CTA can be a placeholder for a future `/case-studies` page.

The section is a Next.js Server Component: it fetches published case studies at render time. When the admin later adds real case studies via Issue #13, they replace the mocks automatically because the query filters by `published: true`.

## Acceptance criteria

- [ ] Section renders all `published: true` `CaseStudy` rows from DB
- [ ] Each card shows client problem, solution, and results
- [ ] Industry and company size display as optional badges (omitted if null)
- [ ] Seeded mock data from Issue #6 appears correctly without additional setup
- [ ] Grid is responsive (1 col → 2 col)
- [ ] Section has `id="case-studies"` anchor
- [ ] Section title reads "Success Stories"

## Blocked by

- Issue #6 (database schema + Prisma setup)
