# Design Guidelines: Transitions Global Journalism

**Status: APPROVED** - 2026-08-02 - Based directly on the user-supplied `design.png` reference.

## Visual Identity

**Style:** Credible, human-centered editorial landing page with authentic documentary photography and a restrained university-program feel.
**Primary inspiration:** The supplied full-page design reference and the Transitions parent-site identity.

## Color Palette

| Role | Color | Hex |
| --- | --- | --- |
| Primary | Transitions burgundy | `#82001e` |
| Primary dark | Deep burgundy | `#620016` |
| Secondary | Editorial navy | `#071a50` |
| Background | Warm white | `#fffdfb` |
| Surface | White | `#ffffff` |
| Text primary | Near black | `#171717` |
| Text secondary | Charcoal | `#454545` |
| Border | Warm gray | `#e7dedb` |
| Focus | Gold | `#f0b429` |

## Typography

**Primary font:** `Arial`, `Helvetica`, sans-serif, chosen to match the supplied prototype and avoid a render-blocking font request.
**Display heading:** 40-58px desktop, 38px mobile, 700 weight, 1.04 line height.
**Section heading:** 28-34px, 700 weight, 1.15 line height.
**Body:** 16-18px, 1.55 line height.
**Letter spacing:** `0` throughout.

## Spacing And Shape

**Base unit:** 4px.
**Content width:** 1180px maximum.
**Section spacing:** 56-80px desktop, 40-56px mobile.
**Card radius:** 4px.
**Button radius:** 4px.
**Image radius:** 4px.

## Layout

- Mobile-first single-column flow below 720px.
- Three-column opportunity grid and four-column reasons grid on desktop.
- Two-column supporting content at tablet widths where space permits.
- Hero uses a real Prague reporting image with a left-to-right dark overlay for readable copy.
- A compact mobile header exposes navigation through an accessible menu button.
- Footer contact content remains visible and readable without hover-dependent interactions.

## Image Direction

- Use only supplied photography, selected for relevance rather than filename order.
- Convert every delivered raster asset to WebP.
- Use responsive `srcset` variants for the hero and lazy-load all below-fold images.
- Preserve documentary authenticity; avoid heavy color effects or artificial crops that obscure the subject.

## Interaction And Accessibility

- External destinations requested by the user open in a new tab with `noopener noreferrer`.
- Placeholder destinations use `#` and are clearly inert when activated.
- All controls have visible keyboard focus.
- Maintain WCAG AA contrast and honor `prefers-reduced-motion`.
- Touch targets are at least 44px high.

## Implementation Rules

- Plain semantic HTML, CSS, and minimal JavaScript; no framework or runtime dependency.
- No analytics, trackers, cookie banner, or render-blocking third-party resources.
- Preserve the supplied copy verbatim, including capitalization and punctuation.
- Target Lighthouse/PageSpeed scores of 95 or above in all categories.