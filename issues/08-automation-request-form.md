# Issue #8 — Custom Automation Request Form — end-to-end

**Type**: AFK  
**Status**: open

## What to build

Implement the Custom Automation Request flow. It follows the same architectural pattern as Issue #7 (React Hook Form + Zod → Server Action → DB write + Resend email) but targets `AutomationRequest` with 10 fields for prospects who have a specific automation use case in mind.

**Form fields** (all required unless noted):
1. Full Name
2. Company Name
3. Email
4. Phone Number
5. Industry
6. Existing Systems (textarea — list the tools/software currently in use)
7. Current Process (textarea — describe the manual workflow to automate)
8. Pain Points (textarea — what is slow, error-prone, or costly)
9. Desired Automation (textarea — what should happen automatically)
10. Estimated Monthly Volume (text — e.g., "~500 invoices/month")

**Behavior**: identical UX pattern to Issue #7 — inline validation, server-side Zod re-validation, DB write, Resend team notification, success confirmation state, graceful server error handling.

This form lives on a dedicated `/request` page (or in a modal triggered from "Explore Solutions" CTA) so it does not compete visually with the Consultation Form.

## Acceptance criteria

- [ ] All 10 fields render with correct input types
- [ ] Required field validation prevents submission and shows per-field error messages
- [ ] Successful submission creates an `AutomationRequest` row in the database
- [ ] Resend sends a notification email to the team inbox on every successful submission
- [ ] Success state replaces the form with a confirmation message
- [ ] Server-side Zod validation rejects malformed payloads independently of client validation
- [ ] Form is fully keyboard-navigable and accessible
- [ ] Form is reachable from the "Explore Solutions" hero CTA

## Blocked by

- Issue #6 (database schema + Prisma setup)
