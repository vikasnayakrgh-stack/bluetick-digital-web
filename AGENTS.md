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
