# Issue #6 — Database schema + Prisma setup

**Type**: AFK  
**Status**: open

## What to build

Define and migrate the full Prisma schema for all four models used by the site. This is the data foundation that issues #7–#13 depend on.

Schema decisions (from PRD):

```prisma
model ConsultationRequest {
  id                String   @id @default(cuid())
  fullName          String
  companyName       String
  email             String
  phone             String
  industry          String
  companySize       String
  businessChallenge String
  desiredOutcome    String
  createdAt         DateTime @default(now())
}

model AutomationRequest {
  id                     String   @id @default(cuid())
  fullName               String
  companyName            String
  email                  String
  phone                  String
  industry               String
  existingSystems        String
  currentProcess         String
  painPoints             String
  desiredAutomation      String
  estimatedMonthlyVolume String
  createdAt              DateTime @default(now())
}

model CaseStudy {
  id            String   @id @default(cuid())
  clientProblem String
  solution      String
  results       String
  industry      String?
  companySize   String?
  published     Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
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

`SiteSettings` uses a singleton pattern — only one row ever exists (`id = "singleton"`). All writes must upsert this row, never insert a second one.

Also seed the database with:
- The `SiteSettings` singleton row with placeholder social links
- 2–3 mock `CaseStudy` rows with `published: true`

## Acceptance criteria

- [ ] `prisma migrate dev` runs cleanly against a local PostgreSQL instance
- [ ] All 4 models exist with the exact fields specified above
- [ ] `prisma db seed` creates the `SiteSettings` singleton and 2–3 published mock case studies
- [ ] `prisma studio` shows all tables populated correctly
- [ ] `prisma generate` produces a typed client with no errors
- [ ] `DATABASE_URL` is read from `.env` (never hardcoded)

## Blocked by

- Issue #1 (project scaffold + design system)
