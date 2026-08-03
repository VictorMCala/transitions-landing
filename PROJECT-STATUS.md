# Project Status — Transitions Global Journalism Landing Page

**Last updated:** 2026-08-03
**Repo:** https://github.com/VictorMCala/transitions-landing (branch `main`)
**Live (staging):** https://victormcala.github.io/transitions-landing/
**Target production domain:** https://globaledu.transitionsmedia.org/ (not live yet — deploy via FTP)
**Local project path:** `globaledu.transitions/` (Google Drive)

---

## What this is
A static, mobile-first landing page for Transitions' Prague journalism programs, reproduced from the supplied `design.png`. No framework, no backend, no build step — plain HTML/CSS/JS + WebP images.

## Current state: DONE & DEPLOYED to staging
- All content, images, links, animations, favicon, and social tags implemented.
- Lighthouse: **100 / 100 / 100 / 100** (mobile + desktop), CLS 0.
- Git is clean and pushed (local `main` == `origin/main`).
- FTP deploy package built and ready (see "Deployment").

---

## Files (runtime)
- `index.html` — page markup + `<head>` meta (OG/Twitter/favicon)
- `styles.css` — all styles + animations
- `script.js` — mobile menu, muted-link guard, IntersectionObserver scroll-reveal
- `assets/images/` — all WebP photos, `logos/` (5 university logos), favicons (PNG), `og-image.jpg`, `qr-code.webp`
- `prd/design-guidelines.md` — approved design spec

## Build artifacts (gitignored, NOT committed)
- `dist/` — ready-to-upload web root (includes `README-DEPLOY.txt`)
- `globaledu-transitions-deploy.zip` — same, zipped (~1.2 MB)
- `Landing Global journalism page/` — original source photos (JPG/HEIC), never deployed

---

## Design system (from prd/design-guidelines.md)
- Burgundy `#82001e`, dark burgundy `#620016`, navy `#071a50`, paper `#fffdfb`
- Font: Arial/Helvetica (matches reference, no render-blocking web font)
- Tennessee wordmark color adjusted to `#a94600` for AA contrast

---

## Links wired up
| Element | Destination | New tab |
|---|---|---|
| Nav: About Transitions | https://transitionsmedia.org/ | yes |
| Nav: Transitions Magazine | https://tol.org/ | no |
| Nav: Contact | https://tol.org/contact-information | no |
| Hero: Schedule a Conversation | https://calendly.com/jeremy-druker/new-meeting | yes |
| Faculty-Led Courses: Let's Talk | https://calendly.com/jeremy-druker/new-meeting | yes |
| Going on Assignment: View Course | https://toleducation.org/courses/goa2027/ | yes |
| Internships: Explore Internships | https://toleducation.org/internships/ | yes |
| Footer email | mailto:education@tol.org?subject=Globale%20Education%20Transitions | — |
| Footer WhatsApp | https://wa.me/420725545475 | yes |
| Footer: Schedule a Zoom Meeting | https://calendly.com/jeremy-druker/new-meeting | yes |
| Footer QR + "Scan to learn more" | https://globaledu.transitionsmedia.org/ (encoded in QR) | yes |
| Header logo | `#` (inert placeholder) | — |

## University logos (Trusted by…) — link out, new tab
UTK → utk.edu · WCU → wcu.edu · HKBU → hkbu.edu.hk · CUHK → cuhk.edu.hk/english/index.html · NYU → nyu.edu
(Logos rasterized from official sources with `rsvg-convert`, correct brand colors, transparent WebP.)

---

## Key images
- Hero = Prague Castle group photo (source `IMG_9259`… actually 11821.HEIC "Option B"), 3 breakpoint crops: `hero-mobile/tablet/desktop.webp`
- Footer portrait = `jerry-druker.webp` (Jeremy Druker headshot, cache-busted `?v=2`)
- University logos cache-busted `?v=2`
- `og-image.jpg` = 1200×630 share card (logo header + hero + headline) — JPG on purpose (WebP OG not reliable on social)
- Favicon = official Transitions "T" icon (`favicon-32/192.png`, `apple-touch-icon.png`) — PNG for universal support

## Animations (reduced-motion safe)
- Scroll-reveal fade+rise (staggered grids) via IntersectionObserver + `.js` pre-paint flag
- Hero staggered entrance on load
- Card hover lift + image zoom, button micro-lift, logo hover
- Only transform/opacity → CLS stays 0; fully disabled under `prefers-reduced-motion`; degrades gracefully with no JS

---

## PENDING / NEXT STEPS
1. **FTP deploy** to `globaledu.transitionsmedia.org` — upload contents of `dist/` to web root (see `dist/README-DEPLOY.txt`). User is getting FTP access.
2. **After go-live:** run PageSpeed on the real URL; refresh OG cache (FB debugger, LinkedIn inspector); scan QR to confirm.
3. **Google Analytics (GA4)** — user will provide Measurement ID `G-XXXXXXXXXX`. Decide: "GA with consent banner" (EU/GDPR) vs "GA no banner". Recommended alt: Plausible/Cloudflare (cookieless, keeps 100 scores). NOT yet implemented.
4. If site ever lives in a **subfolder** instead of domain root, update the 3 OG absolute URLs + canonical in `index.html`.

## Open questions / confirmations
- Footer portrait subject confirmed as Jeremy Druker? (assumed yes)
- Email subject uses "Globale" (user's exact wording) — confirm not a typo for "Global".

---

## Deployment (how-to recap)
- Package: `dist/` folder or `globaledu-transitions-deploy.zip`
- Upload **contents of dist/** to web root (public_html / www / htdocs), keep `assets/images/` structure, index.html at root.
- Static only — no server config needed. Relative paths → works at domain root as-is.

## Environment notes (for the assistant)
- Tools available: `ffmpeg`, `sips`, `qrencode`, `rsvg-convert`, system Google Chrome, node + Playwright (`~/.npm/_npx/705bc6b22212b352/node_modules/playwright`).
- The VS Code integrated browser renders at a scaled CSS width and has flaky scroll/element screenshots — use **real Chrome headless** or the **node Playwright script** for reliable mobile screenshots.
- Preview: `cd` into project root first, then `python3 -m http.server 4173`.
- `gh` CLI active account must be **VictorMCala** (personal), not the work account, to push.
