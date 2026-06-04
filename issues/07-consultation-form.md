# Issue #7 — Consultation Request Form — end-to-end

**Type**: AFK  
**Status**: open

## What to build

Implement the full Consultation Request flow: a client-side form with validation that submits to a Next.js Server Action, persists to the database, and triggers a team notification email via Resend.

This is the site's **primary conversion point** — the primary KPI is consultation requests submitted.

**Form fields** (all required unless noted):
1. Full Name
2. Company Name
3. Email
4. Phone Number
5. Industry (text or select)
6. Company Size (select: 1–10, 11–50, 51–200, 200+)
7. Business Challenge (textarea)
8. Desired Outcome (textarea)

**Behavior**:
- React Hook Form + Zod for client-side validation
- Inline field-level error messages appear on blur and on submit attempt
- On submit: calls a Server Action that re-validates with Zod server-side, writes to `ConsultationRequest`, then calls Resend to send a notification email to the team inbox (configured via `RESEND_TO_EMAIL` env var)
- On success: form is replaced with a confirmation message ("We'll be in touch within 1 business day.")
- On server error: a toast or inline error message appears without losing form data

The form lives in the Contact section (`id="contact"`) and is also reachable from all "Request Consultation" CTA buttons on the page.

## Acceptance criteria

- [ ] All 8 fields render with correct input types (text, email, tel, select, textarea)
- [ ] Required field validation prevents submission and shows per-field error messages
- [ ] Email field validates format
- [ ] Successful submission creates a `ConsultationRequest` row in the database
- [ ] Resend sends a notification email to the configured team address on every successful submission
- [ ] Success state replaces the form with a confirmation message
- [ ] Server-side Zod validation rejects malformed payloads independently of client validation
- [ ] Form is fully keyboard-navigable and screen-reader accessible (labels, aria-describedby for errors)

## Blocked by

- Issue #6 (database schema + Prisma setup)
