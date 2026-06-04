# Issue #3 — Services Section

**Type**: AFK  
**Status**: open

## What to build

Implement the Services section with 6 service cards. Each card must show an icon, title, short description, and a bullet list of concrete benefits — the benefits list extends the Figma `ServiceCard` pattern which only had icon/title/description.

Services to implement (with appropriate Lucide icons):

1. **Tax Automation** — Automate tax calculations, filings, and compliance tracking.
2. **Document Processing** — Extract, classify, and route documents without manual handling.
3. **Workflow Automation** — Replace repetitive multi-step processes with automated pipelines.
4. **AI Assistants** — Deploy intelligent assistants that handle customer queries and internal tasks.
5. **System Integrations** — Connect your existing tools so data flows automatically between them.
6. **Analytics** — Get real-time visibility into your operations without manual reporting.

Cards render in a responsive grid (1 col mobile → 2 col tablet → 3 col desktop). Hover state: `border-yellow-500/50` highlight + icon scale-up (matching Figma `ServiceCard` pattern). Framer Motion scroll-triggered entrance stagger across the grid.

## Acceptance criteria

- [ ] All 6 service cards render with icon, title, description, and benefits list
- [ ] Grid is responsive: 1 → 2 → 3 columns at correct breakpoints
- [ ] Hover border highlight and icon scale animation work on each card
- [ ] Framer Motion stagger entrance plays when section scrolls into view
- [ ] Section has an `id="services"` anchor for navbar scroll target
- [ ] Copy uses plain business language — no technical jargon

## Blocked by

- Issue #1 (project scaffold + design system)
