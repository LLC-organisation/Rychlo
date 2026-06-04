# Issue #4 — Capabilities + How It Works + Why Choose Us sections

**Type**: AFK  
**Status**: open

## What to build

Three static server-component sections that appear between Services and Case Studies. All copy uses outcome-focused, jargon-free business language.

**Capabilities Section** — grid of 7 capability items, each with icon + title + one-line description:
1. Intelligent Document Processing
2. Multi-System Integration
3. Autonomous Task Execution
4. AI Agents & Copilots
5. Analytics & Monitoring
6. Compliance & Governance
7. Security & Scalability

**How It Works Section** — 5-step numbered process, horizontal timeline on desktop, vertical stacked on mobile:
1. Tell us about your challenge.
2. We analyze your workflow.
3. We design your solution.
4. We implement automation.
5. We support and optimize.

**Why Choose Us Section** — 6 benefit cards (icon + title + stat or supporting sentence):
1. Reduce Costs
2. Increase Efficiency
3. Minimize Errors
4. Faster Operations
5. Custom Solutions
6. Continuous Support

All three sections get Framer Motion scroll-triggered entrance animations.

## Acceptance criteria

- [ ] All 7 capability items render with icon and description
- [ ] How It Works renders as a horizontal timeline on desktop (≥768px) and vertical stack on mobile
- [ ] Step numbers are visually prominent and sequential
- [ ] All 6 Why Choose Us cards render with icon, title, and supporting copy
- [ ] Each section has the correct `id` anchor (`#solutions` for Capabilities, `#how-it-works`, `#why-us`)
- [ ] Framer Motion scroll entrance plays for each section independently
- [ ] Zero horizontal scroll at any viewport width

## Blocked by

- Issue #1 (project scaffold + design system)
