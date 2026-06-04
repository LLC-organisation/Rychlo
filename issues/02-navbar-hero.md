# Issue #2 — Sticky Navbar + Hero Section

**Type**: AFK  
**Status**: open

## What to build

Implement the sticky navigation bar and the full-screen hero section. These are the first things a visitor sees and directly serve the "understand within 30 seconds" success criterion.

**Navbar** must be sticky (fixed top), render on all pages, and include:
- Logo (yellow gradient square + "Biashara Automation" wordmark)
- Links: Home, Services, Solutions, About, Contact (smooth-scroll to page anchors)
- "Request Consultation" CTA button (yellow-500, scrolls to the consultation form)
- Mobile: hamburger menu that collapses into a drawer/overlay

**Hero Section** content (exact copy per PRD):
- Headline: "Automate Your Business. Focus on Growth."
- Subheading: "We help businesses eliminate repetitive work through intelligent automation solutions tailored to their needs."
- Two CTA buttons: "Request Consultation" (primary, yellow) + "Explore Solutions" (secondary, outlined)
- Background: dark overlay with a business/automation illustration or abstract image

Entrance animations via Framer Motion: headline fades + slides up, subheading and buttons stagger in after.

## Acceptance criteria

- [ ] Navbar is sticky and visible at all scroll positions
- [ ] All nav links smooth-scroll to correct page sections
- [ ] "Request Consultation" CTA in navbar scrolls to the consultation form section
- [ ] Mobile hamburger menu opens/closes correctly and closes on link tap
- [ ] Hero headline matches exact PRD copy
- [ ] Both hero CTA buttons are present and functional
- [ ] Hero has a background image or illustration with dark overlay
- [ ] Framer Motion entrance animation plays on first load
- [ ] No horizontal scroll on any viewport width (320px–1920px)

## Blocked by

- Issue #1 (project scaffold + design system)
