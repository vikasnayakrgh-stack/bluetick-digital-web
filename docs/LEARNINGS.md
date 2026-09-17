# Bluetick Digital — Project Learnings & Institutional Memory

This file logs meaningful bugs, mistakes, architectural discoveries, and reusable engineering decisions for the Bluetick Digital web application. 

Every entry must use the `[BLT-XXX]` sequential ID format as mandated by `AGENTS.md`.

---

## 🌟 Golden Rules

1. **Top-Level Exceptions Cause Blank Pages in React:** Never throw exceptions at the top level of a module (like in a database client initialization). If a module throws before `ReactDOM.createRoot().render()` executes, the entire application fails to mount, resulting in a blank white screen. Always wrap external integrations in try/catch or provide safe fallbacks.
2. **CSP Must Evolve with External Assets:** When adding new external assets (like AWS CloudFront videos or external analytics pixels), always update the Content-Security-Policy in `vercel.json` to allow the new domains in the appropriate directives (`media-src`, `img-src`, etc.).

---

## 📖 Learning Log

### [BLT-001] Production React App Blank Page Crash due to Missing Env Vars

**Date:** 2026-09-02  
**Category:** Technical / Runtime / Process  
**Severity:** Critical  
**Status:** Resolved  

### Problem
The deployed Bluetick Digital website rendered a completely blank white page. The UI did not load, and no interactive elements were visible.

### Immediate Cause
An unhandled exception: `Error: supabaseUrl is required.` was thrown during the initial module parsing phase.

### Root Cause
The Vercel environment did not have `VITE_SUPABASE_URL` defined (as the user is on a free tier and avoids paid env var features). In `src/supabaseClient.js`, the `@supabase/supabase-js` `createClient` function was invoked at the top level. When it received `undefined` for the URL, it immediately threw an error. Because this file is imported by UI components, the exception bubbled up before React could mount, crashing the entire application.

### Why We Missed It
The code worked perfectly in local development where `.env` files provided the necessary variables. The assumption was that missing environment variables would just cause API calls to fail gracefully later, rather than crashing the module loader instantly.

### Fix
Updated `src/supabaseClient.js` to:
1. Provide hardcoded, safe fallback credentials if `VITE_...` variables are missing.
2. Wrap the `createClient` initialization in a `try/catch` block.
3. Return a safe mock object if initialization fails, allowing the rest of the React UI to mount and render properly.

### What We Learned
A successful build (`npm run build`) does not guarantee a successful runtime render. Module-level exceptions are fatal to React SPAs. Integrations must fail gracefully.

### Prevention Rule
Never initialize external clients at the top level without safe defaults or error boundaries that prevent the entire app from crashing.

### Future Checklist
- [x] Are all third-party client initializations wrapped in try/catch or provided with safe fallbacks?
- [x] Can the app still render its static marketing UI if the database connection fails completely?

---

### [BLT-002] Hero Video Blocked by Content-Security-Policy

**Date:** 2026-09-02  
**Category:** Security & Headers  
**Severity:** Medium  
**Status:** Resolved  

### Problem
The hero background video on the homepage was not playing in production, leaving an empty or static background space.

### Immediate Cause
The browser refused to load the video asset from `https://d361nmyps2vry.cloudfront.net`, logging a Content Security Policy (CSP) violation in the console.

### Root Cause
The `vercel.json` file enforced a strict `Content-Security-Policy`. The `media-src` directive was set to allow only `'self'`, blocking any videos loaded from external CDNs like AWS CloudFront. 

### Why We Missed It
CSP headers applied by Vercel in production (`vercel.json`) are often not enforced during local Vite development (`npm run dev`), leading to a discrepancy between the local and production environments.

### Fix
Updated `vercel.json` to explicitly allow the CloudFront domain in the `media-src` directive:
`media-src 'self' https://*.cloudfront.net blob:;`

### What We Learned
When introducing new asset domains (CDNs, analytics, external APIs), the infrastructure configuration (CSP) must be updated simultaneously. 

### Prevention Rule
When adding a new external resource, always verify if it violates the existing CSP in `vercel.json`.

### Future Checklist
- [x] Does `vercel.json` whitelist the required CDN domains for `media-src`?
- [x] Does `vercel.json` whitelist the required analytics domains for `img-src` and `connect-src`?

---

### [BLT-003] Main Bundle Heaviness from Static GSAP / ScrollTrigger Imports

**Date:** 2026-09-16  
**Category:** Performance / Architecture  
**Severity:** High  
**Status:** Resolved  

### Problem
The initial JavaScript entry bundle exceeded 275 kB (>85 kB gzip), causing slower initial load and Time to Interactive (TTI) on mobile networks.

### Immediate Cause
GSAP and ScrollTrigger were imported statically in showcase components, causing the heavy animation engine to be included directly in the main `index.js` chunk.

### Root Cause
Vite bundles all static module imports into the entry chunk by default unless split into vendor manual chunks or loaded via dynamic `import()`. Because showcase components were part of the home page tree, GSAP was parsed and evaluated on initial page load before the user ever scrolled to the showcase section.

### Why We Missed It
The build completed without errors, and local fast-refresh masked the bundle size impact on initial load.

### Fix
1. Extracted all GSAP and ScrollTrigger logic into a dedicated helper module (`src/utils/showcaseAnimations.js`) loaded dynamically via `import()`.
2. Configured a dedicated `vendor-gsap` manual chunk in `vite.config.js`.
3. Main entry bundle dropped from 275 kB to 128.19 kB (~37 kB gzip) with zero GSAP references in the entry chunk.

### What We Learned
Heavy animation libraries (GSAP, Three.js, Lottie) must always be dynamically imported and isolated into separate chunks so they don't delay First Contentful Paint.

### Prevention Rule
Never statically import GSAP or large animation runtimes in components that render above or near the fold unless explicitly required for the hero view.

### Future Checklist
- [x] Is GSAP isolated in `manualChunks` in `vite.config.js`?
- [x] Are showcase animations loaded dynamically via `import()` when the component mounts?

---

### [BLT-004] Static Prerender Title Flips vs Hydration Mismatch

**Date:** 2026-09-16  
**Category:** SEO & Runtime  
**Severity:** Medium  
**Status:** Resolved  

### Problem
Pages experienced a title flip/flash during client hydration where the browser tab title changed momentarily after the page loaded.

### Immediate Cause
The static HTML title generated by `scripts/prerender.js` differed by casing or suffix formatting from the runtime React `<SEO>` component output.

### Root Cause
Title strings were defined independently in `scripts/prerender.js` and React route components instead of referencing a single centralized configuration or identical title formulas.

### Why We Missed It
Both versions were valid strings, so linters and builds passed without warning. The discrepancy was only visible visually during client hydration on slow networks.

### Fix
Synchronized all titles character-for-character across `scripts/prerender.js`, `index.html`, `src/config/siteConfig.js`, `src/App.jsx`, and route components, ensuring exact string parity during hydration.

### What We Learned
In pre-rendered React SPAs, any divergence between statically generated HTML meta tags and React Helmet/SEO state causes hydration layout shifts or title flickering.

### Prevention Rule
All static pre-render routes and dynamic client `<SEO>` components must derive their page titles and meta tags from identical source definitions.

### Future Checklist
- [x] Does the pre-rendered `<title>` in `scripts/prerender.js` match `SEO.jsx` character-for-character?
- [x] Are Open Graph URLs, titles, and descriptions consistent between static HTML and client meta tags?

---

### [BLT-005] Mobile Viewport Cookie Banner & Floating Actions Collision

**Date:** 2026-09-16  
**Category:** UI / UX / Mobile / Accessibility  
**Severity:** Medium  
**Status:** Resolved  

### Problem
On mobile viewports (<768px), the floating WhatsApp CTA button and Back-to-Top trigger rendered directly on top of the fixed cookie consent banner, obscuring the cookie choice buttons and causing accidental mis-taps.

### Immediate Cause
Both elements used `position: fixed` anchored to `bottom: 1.25rem` / `bottom: 1.5rem` without awareness of each other's visual presence.

### Root Cause
`FloatingActions` had no state connection to `CookieConsentContext`. When the user had not yet made a cookie choice (`!hasChosen`), both elements occupied the bottom-right touch zone simultaneously.

### Why We Missed It
Testing on desktop screens where the cookie banner is centered with `max-width: 960px` left ample room on the right for floating buttons, concealing the mobile stacking bug.

### Fix
1. Subscribed `FloatingActions.jsx` to `useCookieConsent()`.
2. Applied `.hasCookieBanner` class to `<aside>` when `!hasChosen`.
3. Elevated bottom position to `calc(13rem + env(safe-area-inset-bottom, 0px))` on mobile with smooth transition, automatically settling down to `calc(1.25rem + ...)` once cookies are accepted or rejected.

### What We Learned
All fixed-position viewport overlays (drawers, cookie notices, floating action buttons, banners) must share coordination or contextual awareness to prevent touch-target collision on small viewports.

### Prevention Rule
Any fixed bottom element on mobile must account for transient full-width overlays like cookie banners or announcement toasts.

### Future Checklist
- [x] Does the floating action button clear the cookie banner when viewed on a 375px mobile screen?
- [x] Does the transition animate smoothly when the banner is dismissed?
