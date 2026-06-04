# Issue #13 — Admin content management — social links + case study CRUD

**Type**: AFK  
**Status**: open

## What to build

Implement the two content management areas of the admin dashboard: the social link settings form and the case study CRUD interface. These allow the team to keep the public site current without touching code.

**Social Links Settings** (`/admin/settings`):
- A form with one text input per channel: Email, WhatsApp, Telegram, LinkedIn, Instagram, X, Facebook
- Pre-populated with current values from the `SiteSettings` singleton
- On save: Server Action upserts the singleton row (`id = "singleton"`) — never inserts a second row
- Success toast on save; validation ensures URL/handle fields are not obviously malformed

**Case Study CRUD** (`/admin/case-studies`):
- List view: table of all case studies with Title (derived from first line of clientProblem), Industry, Published status, Edit / Delete actions
- Create/Edit form fields: Client Problem (textarea), Solution (textarea), Results (textarea), Industry (text, optional), Company Size (text, optional), Published toggle
- Delete: confirmation dialog before permanent deletion
- Server Actions for create, update, delete — all re-validate inputs server-side
- The `published` toggle controls visibility on the public Case Studies section immediately (no deploy required)

## Acceptance criteria

- [ ] `/admin/settings` renders a form pre-populated with current `SiteSettings` values
- [ ] Saving the settings form upserts the singleton; only one `SiteSettings` row ever exists
- [ ] Updated social links appear on the public Contact section on next page load
- [ ] `/admin/case-studies` lists all case studies with published status and action buttons
- [ ] Creating a case study adds a row to the DB; it appears on the public site if published
- [ ] Editing a case study updates the row; changes reflect on the public site immediately
- [ ] Deleting a case study requires a confirmation dialog; row is permanently removed
- [ ] Toggling `published` on/off shows or hides the case study on the public Case Studies section
- [ ] All pages require authentication (middleware from Issue #11 enforces this)

## Blocked by

- Issue #9 (Contact Section — so social link changes are observable)
- Issue #10 (Case Studies Section — so case study changes are observable)
- Issue #11 (admin authentication)
