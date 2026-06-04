# PRD: Biashara Automation Website

## Problem Statement

Non-technical business owners who are spending hours on repetitive, manual tasks have no clear way to discover, evaluate, or engage an automation partner online. They land on generic tech websites full of jargon they don't understand, can't quickly grasp what the company does or why they should trust it, and have no easy path to request help. Biashara Automation needs a professional, conversion-focused website that speaks the language of business owners — not engineers — so that potential clients can understand the value proposition within 30 seconds and take action immediately.

## Solution

A modern, mobile-first marketing website built on Next.js 15 that communicates Biashara Automation's services in plain business language, builds trust through case studies and testimonials, and captures leads via two purpose-built forms (Consultation Request and Custom Automation Request). An authenticated admin dashboard lets the team view leads, manage content, and export data — all without a separate CMS.

The visual style follows the Genix Technology Solutions Figma reference: dark backgrounds (black/zinc-950), yellow accent (#EAB308), rounded cards with hover highlights, shadcn/ui components, and smooth Framer Motion transitions.

---

## User Stories

### Navigation & General Experience

1. As a business owner, I want to see a sticky navigation bar at the top of every page, so that I can jump to any section without scrolling back up.
2. As a visitor, I want to click a "Request Consultation" CTA button in the navbar, so that I can immediately begin the engagement process from anywhere on the page.
3. As a mobile user, I want the navigation to collapse into a hamburger menu, so that I can browse the site comfortably on my phone.
4. As a visitor, I want the page to load in under 3 seconds, so that I don't leave before seeing the content.
5. As a screen-reader user, I want all interactive elements to have accessible labels, so that I can navigate the site without a mouse.

### Hero Section

6. As a business owner, I want to see the headline "Automate Your Business. Focus on Growth." immediately when the page loads, so that I understand the core value proposition within seconds.
7. As a visitor, I want to see a subheading explaining that the company helps eliminate repetitive work with tailored automation solutions, so that I understand concretely what the company does.
8. As a visitor, I want two CTA buttons — "Request Consultation" and "Explore Solutions" — so that I can take action immediately or explore further before committing.
9. As a visual learner, I want to see an illustration related to business automation in the hero section, so that the concept is reinforced visually.

### Services Section

10. As a business owner, I want to browse a grid of service cards, so that I can quickly see all the areas Biashara Automation can help me.
11. As a visitor, I want each service card to show an icon, title, description, and specific benefits, so that I understand what the service delivers and why it matters to my business.
12. As a visitor exploring Tax Automation, I want to see what pain points this service addresses, so that I know if it applies to my situation.
13. As a visitor exploring Document Processing, I want to understand what the service replaces (manual document handling), so that I can estimate time savings.
14. As a visitor, I want to explore Workflow Automation, AI Assistants, System Integrations, and Analytics as distinct service offerings, so that I understand the full scope of solutions available.

### Capabilities Section

15. As a business owner, I want to see a capabilities section listing what the platform can do (e.g., Intelligent Document Processing, Multi-System Integration, Autonomous Task Execution), so that I can evaluate technical fit without reading a whitepaper.
16. As a visitor, I want capabilities described in outcome-focused language (not technical jargon), so that I can immediately relate them to my business problems.
17. As a visitor, I want to see AI Agents & Copilots, Analytics & Monitoring, Compliance & Governance, and Security & Scalability listed as capabilities, so that I understand the breadth of the platform.

### How It Works Section

18. As a first-time visitor, I want to see a numbered step-by-step process (Tell us → Analyze → Design → Implement → Support), so that I understand what engaging Biashara Automation looks like from start to finish.
19. As a skeptical prospect, I want the process to feel human and collaborative (not a black box), so that I feel comfortable starting a conversation.

### Why Choose Us Section

20. As a budget-conscious business owner, I want to see a "Reduce Costs" benefit card with a supporting statistic or explanation, so that I can make the business case internally.
21. As an operations manager, I want to see "Increase Efficiency" and "Minimize Errors" as explicit benefit cards, so that I can tie automation to measurable outcomes.
22. As a decision-maker, I want to see "Faster Operations," "Custom Solutions," and "Continuous Support" benefit cards, so that I understand the ongoing relationship beyond initial delivery.

### Case Studies Section

23. As a skeptical prospect, I want to read real case studies showing the client problem, solution, and measurable results, so that I can trust the company's track record.
24. As a visitor, I want case studies to include industry and company size context, so that I can find ones relevant to my situation.
25. As an admin, I want to create, edit, and delete case studies from the admin dashboard, so that the website reflects our latest work without requiring a developer.

### About Section

26. As a visitor, I want to read the company's mission and vision statements, so that I understand their values and long-term intent.
27. As a prospective client, I want to see the company's core values listed clearly, so that I can assess cultural fit.
28. As a visitor, I want to see the leadership team with names, roles, and short bios, so that I know who I'd be working with.
29. As a first-time visitor, I want to read the company story, so that I understand how Biashara Automation came to exist and why.

### Contact Section

30. As a visitor, I want to see all contact channels (Email, WhatsApp, Telegram, LinkedIn, Instagram, X, Facebook) in one place, so that I can reach the company through my preferred medium.
31. As a mobile user, I want WhatsApp and Telegram links to open the respective apps directly, so that I can start a conversation in one tap.
32. As a visitor, I want social media links to open in a new tab, so that I don't lose my place on the website.
33. As an admin, I want to update social media links from the admin dashboard, so that I can change handles without touching code.

### Consultation Request Form

34. As a business owner ready to engage, I want to fill out a consultation request form with my Full Name, Company Name, Email, Phone Number, Industry, Company Size, Business Challenge, and Desired Outcome, so that the team has enough context before our first call.
35. As a form submitter, I want to see inline validation errors as I type, so that I can correct mistakes before submitting.
36. As a form submitter, I want to see a success confirmation message after submitting, so that I know my request was received.
37. As a Biashara Automation team member, I want to receive an email notification for every new consultation request, so that I can follow up promptly.
38. As an admin, I want every consultation request stored in the database, so that no leads are lost if emails are delayed.

### Custom Automation Request Form

39. As a business owner with a specific automation need, I want to fill out a detailed request form with Full Name, Company Name, Email, Phone Number, Industry, Existing Systems, Current Process, Pain Points, Desired Automation, and Estimated Monthly Volume, so that the team understands my workflow before any conversation.
40. As a form submitter, I want the same validation and confirmation experience as the consultation form, so that both form flows are consistent.
41. As a Biashara Automation team member, I want an email notification for every new automation request, so that I can prioritize and respond quickly.
42. As an admin, I want automation requests stored in the database with all fields intact, so that I can reference them during scoping calls.

### Admin Dashboard

43. As an admin, I want to log in with a password-protected route, so that leads and case study data are not publicly accessible.
44. As an admin, I want to view a table of all consultation request leads with filtering and sorting, so that I can manage my pipeline efficiently.
45. As an admin, I want to view all custom automation requests in a separate table, so that I can distinguish between types of inquiries.
46. As an admin, I want to export leads and requests as a CSV file, so that I can import them into my CRM or spreadsheet.
47. As an admin, I want to update social media links through a settings form, so that the website always reflects current handles without a code deployment.
48. As an admin, I want to create, edit, and delete case studies with client problem, solution, and results fields, so that the website stays current as we complete new engagements.

### SEO & Performance

49. As a business owner searching for "business automation consulting," I want Biashara Automation to appear in search results, so that I can discover the company organically.
50. As a search engine crawler, I want to find a sitemap.xml and robots.txt at standard URLs, so that all pages are indexed correctly.
51. As a social media sharer, I want Open Graph metadata (title, description, image) on every page, so that links shared on LinkedIn and WhatsApp render with a professional preview.
52. As a page performance monitor, I want all four Lighthouse categories (Performance, Accessibility, SEO, Best Practices) to score above 90, so that the site meets professional standards.

---

## Implementation Decisions

### Architecture

- **Framework**: Next.js 15 with the App Router. All marketing pages are React Server Components; forms use Client Components for interactivity.
- **Styling**: Tailwind CSS v4 + shadcn/ui. Dark theme as default (black/zinc backgrounds, yellow-500 accent), matching the Genix Technology Solutions Figma reference.
- **Animations**: Framer Motion for section entrance animations and micro-interactions (card hover scale, CTA pulse).
- **Deployment**: Vercel. Environment variables manage database URL, Resend API key, and admin credentials.

### Page & Section Modules

Each section is an independent React Server Component receiving data as props from the page. This keeps sections testable in isolation and decoupled from data-fetching logic.

| Module | Type | Notes |
|---|---|---|
| `Navbar` | Client Component | Sticky, scroll-aware, mobile hamburger menu |
| `HeroSection` | Server Component | Static content + two CTA buttons |
| `ServicesSection` | Server Component | 6 `ServiceCard` instances; icon + title + description + benefits list |
| `CapabilitiesSection` | Server Component | 7 capability items in a grid |
| `HowItWorksSection` | Server Component | 5 numbered steps, horizontal on desktop, vertical on mobile |
| `WhyChooseUsSection` | Server Component | 6 benefit cards |
| `CaseStudiesSection` | Server Component | Reads from DB; falls back to static mock data if empty |
| `AboutSection` | Server Component | Static content: mission, vision, values, team, story |
| `ContactSection` | Server Component | Reads social links from DB `SiteSettings`; renders icon links |
| `ConsultationForm` | Client Component | React Hook Form + Zod; submits to Server Action |
| `AutomationRequestForm` | Client Component | React Hook Form + Zod; submits to Server Action |

### Database Schema (Prisma + PostgreSQL)

```
model ConsultationRequest {
  id               String   @id @default(cuid())
  fullName         String
  companyName      String
  email            String
  phone            String
  industry         String
  companySize      String
  businessChallenge String
  desiredOutcome   String
  createdAt        DateTime @default(now())
}

model AutomationRequest {
  id                    String   @id @default(cuid())
  fullName              String
  companyName           String
  email                 String
  phone                 String
  industry              String
  existingSystems       String
  currentProcess        String
  painPoints            String
  desiredAutomation     String
  estimatedMonthlyVolume String
  createdAt             DateTime @default(now())
}

model CaseStudy {
  id          String   @id @default(cuid())
  clientProblem String
  solution    String
  results     String
  industry    String?
  companySize String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model SiteSettings {
  id        String   @id @default("singleton")
  email     String?
  whatsapp  String?
  telegram  String?
  linkedin  String?
  instagram String?
  twitter   String?
  facebook  String?
  updatedAt DateTime @updatedAt
}
```

### Server Actions

- `submitConsultationRequest(formData)` — validates with Zod, writes to `ConsultationRequest`, triggers Resend email to the team.
- `submitAutomationRequest(formData)` — validates with Zod, writes to `AutomationRequest`, triggers Resend email.
- `updateSiteSettings(data)` — admin only; upserts `SiteSettings` singleton row.
- `upsertCaseStudy(data)` — admin only; creates or updates a `CaseStudy`.
- `deleteCaseStudy(id)` — admin only.

### Admin Authentication

Simple password-based auth using Next.js middleware + an HTTP-only cookie. No OAuth required for v1. Admin credentials stored in environment variables. The `/admin` route tree is protected by middleware that checks the session cookie.

### Email (Resend)

One transactional email template per form type. Both emails go to the team inbox configured in an environment variable. No client-facing confirmation email in v1 (just the on-page success state).

### SEO

- `app/sitemap.ts` generates the XML sitemap dynamically.
- `app/robots.ts` generates robots.txt.
- Root `layout.tsx` sets Open Graph and Twitter card metadata.
- JSON-LD structured data (`Organization` schema) rendered in root layout.
- Target keywords: AI Automation, Business Automation, Workflow Automation, AI Consulting, Digital Transformation.

---

## Testing Decisions

**What makes a good test here**: Tests should assert the observable behavior that a user or API caller would care about — form validation rejecting bad input, Server Actions writing correct data to the database, admin routes returning 401 for unauthenticated requests. Tests should not assert React component internals, Prisma method call counts, or Tailwind class names.

### Modules to test

| Module | Test Type | What to assert |
|---|---|---|
| `submitConsultationRequest` Server Action | Integration (test DB) | Valid payload creates a DB row; invalid payload returns a field-level error object; Resend is called with correct recipient |
| `submitAutomationRequest` Server Action | Integration (test DB) | Same pattern as above |
| `ConsultationForm` | Component (React Testing Library) | Required-field validation messages appear on submit with empty fields; success state renders after mock Server Action resolves |
| `AutomationRequestForm` | Component (React Testing Library) | Same as above |
| Admin middleware | Integration | Unauthenticated request to `/admin` redirects to login; authenticated request passes through |
| `updateSiteSettings` | Integration | Upserts the singleton row; second call updates rather than creates |
| CSV export endpoint | Integration | Returns correct `Content-Type: text/csv` header and includes all rows from DB |

**Prior art**: No existing tests in the repo. Establish the pattern with `vitest` + `@testing-library/react` for component tests; use a local test PostgreSQL instance (or `pg-mem`) for Server Action integration tests.

---

## Out of Scope

- **Multi-language / i18n** — English only for v1.
- **Client portal** — no authenticated area for clients to track their projects.
- **Payment processing** — no invoicing or billing in v1.
- **Blog / content marketing** — no CMS-driven blog section.
- **Live chat widget** — contact is handled through forms and social links only.
- **Client-facing confirmation emails** — team notification emails only in v1.
- **Analytics dashboard** — no embedded GA4 or Mixpanel charts; raw DB data only.
- **Multi-admin accounts** — single admin credential in v1; no user management.

---

## Further Notes

- **Biashara** is a Swahili word for "business." Copy and naming should reflect that the company serves business owners broadly, not a specific geography.
- The Figma reference (Genix Technology Solutions) uses `bg-black`, `bg-zinc-900/950`, `border-zinc-800`, and `yellow-500` as the core palette. The Biashara Automation build should inherit this palette exactly.
- Service card structure in the Figma uses icon → title → description. The PRD requires an additional **benefits** list per card — implement this as a `ul` below the description within the same card component.
- Case Studies start with static mock data (`published: true` rows seeded in the DB). When the admin adds real case studies via the dashboard, they replace the mocks automatically because the section queries `published` records.
- The `SiteSettings` table uses a singleton pattern (fixed `id: "singleton"`). The admin settings form should upsert this row, never insert a new one.
- Primary conversion KPI is **consultation requests submitted**. Every design decision should make the path to that form shorter and more compelling.
