# 02. Product Requirements Document (PRD) — Bluetick Digital

## 1. Product Scope & Functional Requirements

### 1.1 Core Pages & Views
1. **Homepage (`/`):**
   - Hero Section with interactive `HeroVisual` (System Architecture, Lead Flow, Automation Pipeline tabs).
   - TrustBar (`TrustBar.jsx`) with capability pills and scroll reveal animations.
   - CoreSolutions (`01` watermark) showcasing 60/40 asymmetric split between Websites and AI Automation.
   - BusinessSystem (`02` watermark) displaying 6-step horizontal architectural pipeline with interactive detail steps.
   - AutomationDemo (`AutomationDemo.jsx`) displaying interactive tabbed automation workflow demonstration with industry metrics.
   - ProjectsShowcase (`03` watermark) displaying conceptual demo project cards with mandatory `"CONCEPT / DEMO SYSTEM"` labels.
   - AISolutions (`04` watermark) displaying modular AI capabilities and implementation tiers.
   - WebsiteAutomationBundle (`WebsiteAutomationBundle.jsx`) showcasing connected full-engine infrastructure.
   - IndustrySolutions (`IndustrySolutions.jsx`) sector-specific digital transformation blueprints.
   - HowItWorks (`04` watermark) 4-step execution timeline.
   - WhyBluetick (`05` watermark) featuring high-impact quote and comparative analysis matrix.
   - FAQ (`06` watermark) accordion with instant toggle animation.
   - AuditForm (`07` watermark) 2-step progressive lead capture syncing atomically to Supabase `leads` table.
2. **Solution Pages:**
   - `/solutions/websites` — High-converting website packages starting from ₹10,000 / ₹20,000.
   - `/solutions/ecommerce` — Scale e-commerce platforms starting from ₹30,000 / ₹50,000.
   - `/solutions/ai-automation` — Custom AI workflows & Lead qualification agents with mandatory pricing disclaimer.
   - `/solutions/whatsapp-automation` — WhatsApp API workflows & automated response bots with mandatory pricing disclaimer.
3. **Industry Pages:**
   - `/industries/:slug` — Dynamic industry page renderer (E-commerce, Manufacturing, Startups, Local Businesses & Real Estate).
4. **Tools & Resources:**
   - `/whatsapp-api-pricing-india` & `/whatsapp-api-cost-calculator` — Interactive WhatsApp conversation cost estimator.
   - `/whatsapp-green-tick-checker` — Interactive eligibility diagnostic.
   - `/blog` & `/blog/:slug` — Thought leadership & technical guide articles.

---

## 2. Non-Functional Requirements

* **Performance:** Static asset loading optimizations, lazy loading below-the-fold components, and lightweight scroll animations via `IntersectionObserver`.
* **Accessibility (WCAG 2.1 AA):** All interactive elements must maintain contrast ratios >= 4.5:1, include keyboard focus rings (`:focus-visible`), and respect `prefers-reduced-motion`.
* **Data Layer:** Form submissions must interface directly with Supabase project `kgaeffyumccbnyrlzfex` via the `leads` table.

---

## 3. Mandatory Portfolio & Pricing Policy (Addendum v1.1)

* All projects in `ProjectsShowcase` are **CONCEPTUAL / DEMO SYSTEMS**. Every card **MUST** carry a visible `"Concept / Demo System"` badge label.
* FORBIDDEN: Fake client logos, fake URLs, fake ROI metrics, fake client testimonials.
* All Website & E-commerce prices must be explicitly framed as `"Starting from"` with the mandatory disclaimer attached.
