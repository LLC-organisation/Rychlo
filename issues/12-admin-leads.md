# Issue #12 — Admin lead management — view tables + CSV export

**Type**: AFK  
**Status**: open

## What to build

Implement the two lead management views inside the admin dashboard and the CSV export endpoint. Admins need to review incoming consultation and automation requests without leaving the site.

**Consultations table** (`/admin/consultations`):
- Columns: Full Name, Company, Email, Phone, Industry, Company Size, Submitted At
- Clicking a row expands or navigates to a detail view showing Business Challenge and Desired Outcome
- Sortable by Submitted At (newest first by default)

**Automation Requests table** (`/admin/automation-requests`):
- Columns: Full Name, Company, Email, Industry, Estimated Monthly Volume, Submitted At
- Clicking a row expands to show Existing Systems, Current Process, Pain Points, Desired Automation
- Sortable by Submitted At (newest first by default)

**CSV export**:
- A "Export CSV" button on each table triggers a download of all rows for that table
- Response headers: `Content-Type: text/csv`, `Content-Disposition: attachment; filename="consultations-<date>.csv"` (or `automation-requests-<date>.csv`)
- All fields included as columns; timestamps formatted as ISO 8601

Both pages are Server Components that fetch data directly from the database. No client-side pagination required in v1 (table shows all rows).

## Acceptance criteria

- [ ] `/admin/consultations` renders a table of all `ConsultationRequest` rows, newest first
- [ ] Row detail view shows Business Challenge and Desired Outcome
- [ ] `/admin/automation-requests` renders a table of all `AutomationRequest` rows, newest first
- [ ] Row detail view shows the additional long-form fields
- [ ] "Export CSV" on each page downloads a valid CSV file with all rows and all fields
- [ ] CSV filename includes the current date
- [ ] Both pages require authentication (middleware from Issue #11 enforces this)
- [ ] Empty state message renders when no rows exist yet

## Blocked by

- Issue #7 (Consultation Request Form — so there are rows to display)
- Issue #8 (Automation Request Form — so there are rows to display)
- Issue #11 (admin authentication)
