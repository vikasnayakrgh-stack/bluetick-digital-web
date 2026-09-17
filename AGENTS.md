# AGENTS.md — Bluetick Digital AI Coding Directives

## 1. Core Mandate & Context
You are working on **Bluetick Digital** (`bluetick-digital-web`), an AI-powered Digital Transformation Partner web application built with React 18, Vite, CSS Modules, and Supabase.

---

## 2. Mandatory Architectural Rules & Source of Truth

1. **Always Inspect Existing Code:** Before modifying or creating components, inspect existing files using file tools.
2. **Follow the Swiss Architectural Design Language:**
   - Use `Plus Jakarta Sans` (`700`, `800`) for display headings (`--font-heading`).
   - Use explicit numeric markers (`01 /` through `06 /`) for section headers.
   - Use hairline borders (`rgba(15, 23, 42, 0.08)`) and border lists instead of generic rounded cards.
   - Avoid generic glowing blue gradients, macOS browser window dots, and fake URLs.
3. **Database Project Mapping (`PROJECT_CONFIG.md`):**
   - Website leads **MUST ALWAYS** use Supabase project `kgaeffyumccbnyrlzfex`.
   - **NEVER** use the separate `AI Priya` Supabase project (`jmpbuarqntbtoybqjbre`).
4. **Content & Pricing Rules (Addendum v1.1):**
   - Portfolio cards in `ProjectsShowcase.jsx` are CONCEPTUAL / DEMO SYSTEMS and **MUST** carry a visible `"Concept / Demo System"` badge label.
   - Website & E-commerce prices must be framed as `"Starting from"` (₹10k, ₹20k, ₹30k, ₹50k) with the mandatory disclaimer included.
   - Do NOT re-enable the AnnouncementBar without explicit user instruction.
5. **Verification Requirement:**
   - Always run `npm run build` to verify clean compilation with 0 errors before completing any task.

---

## 3. Project Learning & Mistake Logging System (`/docs/LEARNINGS.md`)

The repository maintains an authoritative, permanent institutional memory at:
`/docs/LEARNINGS.md`

This file logs meaningful bugs, mistakes, technical issues, architectural discoveries, responsive/mobile pitfalls, performance bottlenecks, SEO errors, and reusable engineering decisions.

### 3.1 Before Starting Any Task
1. Check whether `/docs/LEARNINGS.md` exists (create if missing).
2. Review relevant sections and past incidents before implementing non-trivial changes.
3. Apply lessons proactively to prevent repeating previously documented mistakes.

### 3.2 When to Log a Learning
Log an entry whenever a meaningful issue, discovery, or mistake occurs across:
- **Technical / Runtime:** Blank pages, unhandled top-level module throws, missing env fallback crashes, hydration errors, routing/pre-render failures, dependency incompatibilities.
- **UI / UX / Mobile:** Viewport layout breaks (<360px), unreadable text, clipping, incorrect spacing, broken navigation menus, touch-target sizing.
- **Performance:** Excessive bundle chunks, unoptimized assets, video/animation main-thread blocking, Core Web Vitals (LCP/CLS) regressions.
- **SEO & Social:** Missing canonicals, broken sitemaps, un-synchronized pre-render routes, invalid JSON-LD schemas.
- **Accessibility:** Low contrast, missing ARIA/labels, broken keyboard focus trapping, missing skip-links.
- **Security & Headers:** Missing/overly-strict CSP directives, exposed secrets, unvalidated webhook payloads, missing HSTS.
- **Process & Architecture:** Component duplication, hardcoded business endpoints, unnecessary rewrites.

### 3.3 What NOT to Log (No Trivial Issues)
- Do NOT log minor typos, simple syntax fixes, or routine styling tweaks.
- Filter test: *"Could this mistake happen again in another feature or project?"*
  - **YES** → Log it.
  - **NO** → Do not create redundant documentation.

### 3.4 Standard Entry Format
Every new learning entry in `/docs/LEARNINGS.md` must use sequential unique IDs (`[BLT-001]`, `[BLT-002]`, ...) and follow this structure:

```md
## [BLT-XXX] Short Descriptive Title

**Date:** YYYY-MM-DD  
**Category:** Bug / UI / UX / Mobile / Performance / SEO / Accessibility / Security / Architecture / Process  
**Severity:** Critical / High / Medium / Low  
**Status:** Resolved / Open / Monitoring  

### Problem
Describe what happened.

### Immediate Cause
Explain the direct symptom or triggering action.

### Root Cause
Explain the fundamental technical, configuration, or architectural root cause.

### Why We Missed It
Explain why the issue slipped through or was not caught earlier.

### Fix
Describe what was changed to resolve the issue.

### What We Learned
Extract the general engineering principle from this incident.

### Prevention Rule
Convert the lesson into a permanent, actionable rule for future development.

### Future Checklist
- [ ] Preventive check 1
- [ ] Preventive check 2
```

### 3.5 Converting Repeated Mistakes into Rules
If the same category of mistake happens more than once, extract the recurring pattern into the **Recurring Patterns** section and elevate the preventative rule into the **Golden Rules** section of `/docs/LEARNINGS.md`.

### 3.6 Absolute Integrity Rule
Never fabricate history, hallucinate metrics, or invent bugs. Document only real issues, verified causes, and actual resolutions. If root cause is uncertain, explicitly mark: *"Root cause could not be conclusively verified."*
