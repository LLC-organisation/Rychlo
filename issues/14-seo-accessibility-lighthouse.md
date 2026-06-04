# Issue #14 — SEO + accessibility + Lighthouse ≥ 90

**Type**: AFK  
**Status**: open

## What to build

Add all SEO infrastructure and perform an accessibility audit to bring all four Lighthouse categories (Performance, Accessibility, SEO, Best Practices) above 90.

**SEO implementation**:
- `app/sitemap.ts` — dynamic XML sitemap including all public routes
- `app/robots.ts` — robots.txt allowing all crawlers, pointing to sitemap
- Root `app/layout.tsx` — Open Graph metadata (title, description, image, url, type) and Twitter Card metadata
- JSON-LD structured data (`Organization` schema) injected via `<script type="application/ld+json">` in root layout
- Target keywords in metadata: AI Automation, Business Automation, Workflow Automation, AI Consulting, Digital Transformation
- Page `<title>` and meta description set per route using Next.js `generateMetadata`

**Accessibility audit** (fix any issues found):
- All images have meaningful `alt` text
- All interactive elements (buttons, links, inputs) have accessible labels
- Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text (yellow-on-black must pass)
- Keyboard navigation works through the full page: Tab order is logical, focus ring is visible
- Forms have associated `<label>` elements and `aria-describedby` for error messages (verify Issues #7 and #8)
- Skip-to-main-content link for keyboard users

**Performance**:
- Images use Next.js `<Image>` component with correct `width`, `height`, and `priority` on hero image
- No render-blocking resources
- Framer Motion animations respect `prefers-reduced-motion`

## Acceptance criteria

- [ ] `https://<domain>/sitemap.xml` returns a valid XML sitemap
- [ ] `https://<domain>/robots.txt` returns correct robots directives with sitemap URL
- [ ] Open Graph tags are present and correct in page `<head>`
- [ ] JSON-LD `Organization` structured data is present in root layout
- [ ] Lighthouse Performance score ≥ 90 on production build
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Lighthouse SEO score ≥ 90
- [ ] Lighthouse Best Practices score ≥ 90
- [ ] All images have non-empty `alt` attributes
- [ ] Keyboard navigation reaches all interactive elements in a logical order
- [ ] Framer Motion animations are suppressed when `prefers-reduced-motion: reduce` is set

## Blocked by

- Issue #2 (Navbar + Hero)
- Issue #3 (Services Section)
- Issue #4 (Capabilities + How It Works + Why Choose Us)
- Issue #5 (About + Footer)
