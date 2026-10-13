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

---

### [BLT-006] Subpage Infinite Loading / White Screen Caused by Top-Level Schema ReferenceError

**Date:** 2026-09-20  
**Category:** Bug / Technical / Runtime  
**Severity:** Critical  
**Status:** Resolved  

### Problem
The route `https://bluetickdigital.in/solutions/whatsapp-automation` (and `solutions/ecommerce`) failed to load in the browser, showing an infinite spinning loader (`PageFallback`) or failing hydration.

### Immediate Cause
An unhandled `ReferenceError: WABA_FAQS is not defined` occurred at module evaluation time when the lazy-loaded chunk for `WhatsAppAutomationPage` was imported.

### Root Cause
In `src/components/Solutions/WhatsAppAutomationPage.jsx`, the FAQ data array was declared as `const WA_FAQS = [...]`. However, in the top-level structured data object `WABA_SCHEMA`, the `mainEntity` field called `WABA_FAQS.map(...)` instead of `WA_FAQS.map(...)`. Because `WABA_SCHEMA` is evaluated immediately when the module is imported, the `ReferenceError` prevented the React component from mounting, causing `<Suspense>` to hang indefinitely or throw an unhandled rejection. A similar mismatch (`ECOM_FAQS` instead of `ECOMMERCE_FAQS`) existed in `src/components/Solutions/EcommercePage.jsx`.

### Why We Missed It
`vite build` performs AST syntax bundling and tree-shaking but does not evaluate runtime JavaScript outside of TypeScript type-checking or strict lint passes. Furthermore, `scripts/prerender.js` uses regex string injection rather than executing the React component tree in Node, allowing the build step to pass with 0 errors while the browser runtime crashed.

### Fix
1. Corrected `WABA_SCHEMA` in `src/components/Solutions/WhatsAppAutomationPage.jsx` to map over `WA_FAQS` and added a safe alias `const WABA_FAQS = WA_FAQS;`.
2. Corrected `ECOMMERCE_SCHEMA` in `src/components/Solutions/EcommercePage.jsx` to map over `ECOMMERCE_FAQS` and added a safe alias `const ECOM_FAQS = ECOMMERCE_FAQS;`.
3. Verified the build and static pre-rendering passes cleanly with `npm run build`.

### What We Learned
Top-level constants and JSON-LD schema objects that reference other module-scoped variables must be strictly typed or verified against their source declarations. A passing `vite build` does not verify runtime variable resolution in plain JavaScript.

### Prevention Rule
Always cross-verify that all data variables referenced inside top-level structured data (`@graph` / `FAQPage` schemas) match their local declarations exactly before committing.

### Future Checklist
- [x] Do all `.map()` calls in schema definitions reference defined array constants?
- [x] Are both `WA_FAQS` and `ECOMMERCE_FAQS` consistently named and aliased?

---

### [BLT-007] Third-Party CDN Chat Widget Integration (CSP & Floating Action Collision)

**Date:** 2026-09-29  
**Category:** Security & Headers / UI / UX / Mobile / Architecture  
**Severity:** High  
**Status:** Resolved  

### Problem
Integrating an external `@n8n/chat` sales agent widget ("AI Priya") into a production React 18 + Vite SPA deployed on Vercel can cause three distinct production defects:
1. Strict Vercel CSP directives blocking CDN bundle scripts (`cdn.jsdelivr.net`) and webhook API calls.
2. Direct collisions with the existing fixed bottom-right floating actions (`WhatsAppBtn` and `BackToTop`).
3. Overlap with the `CookieConsentBanner` on mobile and desktop viewports.

### Immediate Cause
- `vercel.json` CSP had strict `script-src`, `style-src`, and `connect-src` directives omitting `https://cdn.jsdelivr.net` and the self-hosted n8n instance.
- Both the default `@n8n/chat` launcher and Bluetick's `FloatingActions` container shared `position: fixed; bottom: 2rem; right: 2rem`.

### Root Cause
Third-party web chat widgets inject fixed DOM elements directly into the `document.body` outside React's virtual DOM tree. Without intentional spacing and CSP provisioning, external CDN scripts fail to load silently in production, and if loaded, stack directly over existing fixed buttons.

### Why We Missed It
Default vendor snippets are designed as standalone HTML script tags without awareness of single-page application lifecycle (StrictMode re-mounting), CSP headers, or existing floating UI components.

### Fix
1. **CSP Whitelisting:** Updated `vercel.json` CSP to include `https://cdn.jsdelivr.net` in `script-src` and `style-src`, and `https://n8n.srv1179181.hstgr.cloud` in `connect-src`.
2. **Modular Dynamic Mounting:** Implemented `src/components/Chat/AIPriyaChat.jsx` using dynamic import `/* @vite-ignore */` with a `window.__n8nChatInitialized` guard to prevent duplicate instances under React StrictMode.
3. **Ergonomic Floating Actions Repositioning:** Moved `.floatingContainer` (`WhatsAppBtn` and `BackToTop`) to the bottom-left (`left: 2rem` / `left: 1.25rem`), keeping the AI Priya widget anchored on the standard bottom-right.
4. **Cookie Banner Sync:** Toggled `document.body.classList.toggle('hasCookieBanner', !hasChosen)` so `--chat--window--bottom` and `.floatingContainer` elevate synchronously above the cookie banner.
5. **Theme Harmonization:** Overrode `@n8n/chat` CSS variables with Bluetick Digital's Swiss palette (`--chat--color--primary: #1d4ed8; --chat--header--background: #080A0E`).

### What We Learned
External conversational widgets must be isolated in a dedicated React wrapper component, guarded against re-initialization, styled through brand CSS custom properties, and positioned to maintain ergonomic separation from primary communication channels like WhatsApp.

### Prevention Rule
Whenever introducing an external floating widget, always verify CSP header compatibility in `vercel.json`, coordinate z-indexes and screen corner positions with existing floating CTAs, and ensure banner collision clearance across all mobile viewports.

### Future Checklist
- [x] Are external script/style/connect domains declared in `vercel.json` CSP?
- [x] Does the chat widget launcher avoid overlapping WhatsApp or back-to-top buttons?
- [x] Does the widget elevate above sticky banners (e.g. cookie consent)?
- [x] Is the widget guarded against duplicate initialization in React StrictMode?

---

### [BLT-008] Separation of Project-Based Website Pricing and Recurring AI Automation Workflows (Information Architecture & Hub Pattern)

**Date:** 2026-09-29  
**Category:** Architecture / UX / Process  
**Severity:** Medium  
**Status:** Resolved  

### Problem
Grouping distinct pricing models (one-time project-based website development from ₹10K vs setup + monthly recurring AI automation from ₹5K + ₹1K/mo) into a single generic 3-card SaaS pricing table caused user confusion and unclear expectations around deliverables and billing cycles.

### Immediate Cause
The website displayed a single pricing section that attempted to compare websites, WhatsApp API, and AI bots within the same comparison frame.

### Root Cause
Web development and AI automation represent two fundamentally different commercial engagements:
1. Websites & E-commerce: Fixed-scope, milestone-delivered capital projects (one-time).
2. AI Automation & Workflows: Setup engineering + recurring cloud compute and prompt maintenance (setup + monthly).
Presenting them in a standard SaaS table forced an artificial apples-to-oranges comparison.

### Fix
1. **Engineered a Dedicated Pricing Hub (`/pricing`):** Directs the user immediately to choose their intended solution path ("Websites & E-Commerce" vs "AI Automation & Workflows") in under 2 seconds.
2. **Dedicated Website Pricing Page (`/pricing/websites`):** Outlines project-based tiers (Business Website from ₹10K, Premium Profile from ₹20K, Small E-commerce from ₹30K, Large Catalog from ₹50K, Custom) with explicit disclaimers that prices are starting estimates based on scope.
3. **Dedicated AI Automation Pricing Page (`/pricing/ai-automation`):** Outlines setup + monthly operational tiers (Starter from ₹5K setup + ₹1K/mo, Business from ₹10K + ₹2K/mo, Advanced from ₹20K + ₹5K/mo, Custom) with an embedded, clearly separated Meta pass-through WhatsApp conversation rates subsection.
4. **Pre-rendering & SEO:** Pre-rendered all 3 pricing routes as static HTML with synchronized XML sitemap and JSON-LD breadcrumbs.

### What We Learned
Never force heterogeneous service models into a homogeneous SaaS comparison table. High-ticket digital agency and technology partner offerings require clear cognitive bifurcation at the top of the pricing funnel.

### Prevention Rule
Whenever commercial models differ in billing cadence (project-based vs recurring), separate them through an intentional Hub & Spoke architecture (`/pricing` → `/pricing/[service]`) rather than combining them into a single generic pricing grid.

### Future Checklist
- [x] Does `/pricing` guide the user to choose between project-based and recurring models within 2 seconds?
- [x] Do all project tiers use explicit "From" starting indicators rather than deceptive fixed packages?
- [x] Are third-party pass-through costs (Meta WhatsApp conversation charges) explicitly isolated from core service fees?
- [x] Are all pricing sub-routes pre-rendered statically with zero 404s?

---

### [BLT-009] URL Fragment Query Parsing Failure and Fixed Header Scroll Clipping in Single-Page Navigation

**Date:** 2026-10-10  
**Category:** Bug / UI / UX / Navigation / Mobile  
**Severity:** High  
**Status:** Resolved  

### Problem
When visitors clicked service-specific call-to-action buttons (or followed external ad/campaign links) formatted with query parameters attached to hash fragments (e.g., `/#audit?req=new_website`), the page failed to scroll smoothly to the target form, threw a JavaScript `DOMException`, failed to pre-select the relevant service requirement in the form, and if scrolled manually, the target heading was hidden behind the fixed navigation bar.

### Immediate Cause
`document.querySelector(hash)` was called directly with the raw `window.location.hash`. Because `?` is not a valid character in standard CSS ID selectors, `querySelector` crashed. Furthermore, `scrollIntoView()` aligned elements to the top of the browser window (`y = 0`), which positioned the section title directly underneath the fixed 72px header.

### Root Cause
1. **Selector Syntax Incompatibility:** In hybrid hash/query URLs like `/#audit?req=new_website`, the query string is part of the hash string in browser DOM APIs (`location.hash`). Passing this directly into `document.querySelector` treats `?` as an invalid pseudo-class or attribute selector.
2. **Fixed Header Geometry:** Fixed elements (`position: fixed; height: 72px;`) are removed from document flow. Standard `scrollIntoView({ behavior: 'smooth' })` does not calculate offset coordinates, causing fixed header overlap unless `scroll-margin-top` or manual coordinate calculation is applied.
3. **Single-Source Intent Parsing:** The enquiry form only checked `window.location.search`, ignoring requirements passed in `window.location.hash`.

### Why We Missed It
Simple in-page anchor links without query parameters (`/#audit`) worked without throwing syntax errors. The issue only manifested when combining deep links with attribution/preselection query parameters (`/#audit?req=...`).

### Fix
1. **Safe Fragment Parsing:** Implemented `resolveTargetElement` which strips any leading `#` and trailing `?query` string, querying elements strictly via `document.getElementById(cleanId)`.
2. **Header-Offset Scrolling:** Implemented `scrollToElementWithOffset` with an 84px offset (72px header + 12px breathing room) using `window.scrollTo({ top: targetY, behavior: 'smooth' })`.
3. **Multi-Stage Retry Schedule:** Added staggered retry timers (60ms, 180ms, 400ms) to ensure targets are resolved even during client-side route transitions and animation mounts.
4. **Dual-Source Intent Parsing:** Updated `AuditForm.jsx` to parse requirements from both `location.search` and `location.hash`, with live listeners for `hashchange` and `popstate`.
5. **Initial-View Requirement Selector:** Exposed requirement options directly on the initial view of the enquiry form so users see and can adjust preselected requirements with a single tap.

### What We Learned
Never pass `window.location.hash` directly into `document.querySelector`. Always sanitize fragment identifiers and compute scroll positions relative to fixed layout headers. Deep-link query parameters should be parsed from both search and hash strings to support modern marketing campaigns.

### Prevention Rule
Whenever building anchor navigation or intent-preselected forms, use `document.getElementById` with sanitized IDs, apply fixed-header scroll offsets, and check both `location.search` and `location.hash` for parameter passing.

### Future Checklist
- [x] Does `resolveTargetElement` safely handle URLs with both search and hash query parameters?
- [x] Does smooth scrolling stop with adequate clearance below fixed headers on both desktop and mobile?
- [x] Does the form react dynamically to in-page hash changes (`hashchange` event)?
- [x] Are service-specific CTAs preselecting the appropriate requirement on initial form load?

---

### [BLT-010] Static HTML Prerender Out-of-Sync with React Pricing Components & CTA Intent Aliases

**Date:** 2026-10-11  
**Category:** Architecture / SEO / Process  
**Severity:** High  
**Status:** Resolved  

### Problem
During the release-readiness QA audit, static pre-rendered HTML templates in `scripts/prerender.js` were discovered still containing obsolete pricing references (`₹10K`, `₹5K setup + ₹1K/mo`), despite all client React components being upgraded to the approved pricing models (`₹9,999`, `₹11,999/yr`). Additionally, specific CTA parameter aliases (`?req=whatsapp_waba`) failed to preselect the WhatsApp service in `AuditForm.jsx`.

### Immediate Cause
`scripts/prerender.js` maintains hardcoded static HTML representations of key routes for SEO crawler ingestion that must be updated manually in lockstep with React route components. In addition, the alias dictionary in `AuditForm.jsx` omitted `whatsapp_waba` and `waba`.

### Root Cause
1. **Decoupled Prerender Script:** In static pre-rendering setups where route HTML is constructed outside of SSR/React rendering passes, any modification to pricing or copy in React components must have a matching update in the static generator.
2. **CTA Alias Incompleteness:** Different subpage CTAs used varying semantic parameter names (`req=whatsapp_waba` vs `req=whatsapp_automation`), requiring full coverage in the form's normalization map.

### Why We Missed It
`npm run build` compiled without warnings because both the client bundle and `scripts/prerender.js` were syntactically valid. The discrepancy was only caught through systematic ripgrep auditing across the entire repo prior to release.

### Fix
1. Synchronized all pricing figures, descriptions, and terms in `scripts/prerender.js` for `/pricing`, `/pricing/websites`, and `/pricing/ai-automation`.
2. Expanded `aliasMap` in `src/components/Home/AuditForm.jsx` to map `whatsapp_waba` and `waba` to `whatsapp_automation`.

### What We Learned
Whenever updating public commercial terms, prices, or CTAs in a static pre-rendered SPA, static prerender scripts must be audited alongside client components to prevent crawler/user hydration divergences.

### Prevention Rule
Always execute repo-wide searches for obsolete pricing tokens across both `src/` and `scripts/` before certifying any release build.

### Future Checklist
- [x] Are prerender route definitions in `scripts/prerender.js` updated whenever React page copy changes?
- [x] Are all query parameter variants in subpage CTAs registered in `AuditForm.jsx`'s alias dictionary?
- [x] Does `dist/` static output match client-rendered text exactly?

