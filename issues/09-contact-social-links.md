# Issue #9 — Contact Section with DB-driven social links

**Type**: AFK  
**Status**: open

## What to build

Implement the Contact section that reads social link URLs from the `SiteSettings` singleton in the database and renders them as icon links. Links must be configurable from the admin dashboard (Issue #13) without a code deployment.

**Social channels to support** (render only if the URL is set in DB — skip if null):
- Email (`mailto:` link)
- WhatsApp (deep link: `https://wa.me/<number>`)
- Telegram (deep link: `https://t.me/<handle>`)
- LinkedIn
- Instagram
- X (formerly Twitter)
- Facebook

All external links open in a new tab (`target="_blank" rel="noopener noreferrer"`). WhatsApp and Telegram use deep links that open the respective mobile apps on mobile devices.

The section also contains a heading ("Get In Touch"), a short invitation sentence, and the two form CTAs ("Request a Consultation" → scrolls to form, "Submit Automation Request" → navigates to `/request`).

The `SiteSettings` singleton is fetched server-side at render time (Next.js Server Component) so the links are always fresh.

## Acceptance criteria

- [ ] Section reads social links from `SiteSettings` singleton in DB
- [ ] Social link icons render only for non-null values
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] WhatsApp and Telegram use correct deep-link URL formats
- [ ] Seeded mock social links from Issue #6 appear correctly on first render
- [ ] Section has `id="contact"` anchor

## Blocked by

- Issue #6 (database schema + Prisma setup)
