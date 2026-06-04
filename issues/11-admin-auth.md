# Issue #11 — Admin authentication + protected `/admin` route

**Type**: AFK  
**Status**: open

## What to build

Implement simple password-based authentication that protects the entire `/admin` route tree. No OAuth or third-party auth provider in v1 — credentials live in environment variables.

**Flow**:
1. Unauthenticated request to any `/admin/**` route → Next.js middleware redirects to `/admin/login`
2. `/admin/login` renders a login form (password only — the team knows the admin URL)
3. On correct password: middleware sets an HTTP-only, `Secure`, `SameSite=Strict` session cookie with a signed value; redirects to `/admin`
4. On incorrect password: login form shows a generic error ("Invalid credentials") with no detail about what was wrong
5. Logout: a Server Action clears the session cookie and redirects to `/admin/login`

Admin password is read from `ADMIN_PASSWORD` env var. Session cookie is signed with `SESSION_SECRET` env var (randomly generated, ≥32 chars). No session data is stored in the database.

The `/admin` index page (built in Issues #12 and #13) renders a simple dashboard shell with a sidebar: Consultations | Automation Requests | Case Studies | Settings | Logout.

## Acceptance criteria

- [ ] Unauthenticated GET `/admin` redirects to `/admin/login`
- [ ] Correct password sets session cookie and redirects to `/admin`
- [ ] Incorrect password shows error message; no session cookie is set
- [ ] Session cookie is HTTP-only, Secure, SameSite=Strict
- [ ] Authenticated requests to `/admin/**` pass through middleware without redirect
- [ ] Logout clears the session cookie and redirects to `/admin/login`
- [ ] `ADMIN_PASSWORD` and `SESSION_SECRET` are read from env vars (never hardcoded)
- [ ] Admin dashboard shell renders with sidebar navigation after login

## Blocked by

- Issue #6 (database schema + Prisma setup)
