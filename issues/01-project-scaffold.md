# Issue #1 — Project scaffold + design system foundation

**Type**: AFK  
**Status**: open

## What to build

Bootstrap the Next.js 15 project with the full approved technology stack and establish the shared design system so every subsequent slice inherits correct theming from day one.

The app must run locally and render a blank page with the correct dark background before this issue is considered done. All tooling (linting, type-checking, Prisma) must pass with no errors.

Design tokens to establish:
- Background palette: `black` / `zinc-950` / `zinc-900`
- Accent: `yellow-500` (#EAB308) for CTAs, icon backgrounds, highlights
- Card pattern: `bg-zinc-900 border border-zinc-800 rounded-lg hover:border-yellow-500/50`
- shadcn/ui configured with the dark theme base
- Framer Motion installed and verified working

## Acceptance criteria

- [ ] `next dev` runs without errors on Node 20+
- [ ] TypeScript strict mode enabled; `tsc --noEmit` passes
- [ ] Tailwind CSS v4 configured with dark theme tokens (black/zinc/yellow-500 palette)
- [ ] shadcn/ui initialized and at least one test component renders correctly
- [ ] Framer Motion installed and importable
- [ ] Prisma installed with a placeholder schema; `prisma generate` succeeds
- [ ] ESLint passes with no errors
- [ ] `.env.example` documents all required environment variables (DATABASE_URL, RESEND_API_KEY, ADMIN_PASSWORD)

## Blocked by

None — can start immediately.
