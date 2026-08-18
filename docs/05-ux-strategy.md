# 05. UX Strategy — Bluetick Digital

## 1. Target User Personas & Intent

1. **The Growth-Focused Founder / CEO:**
   - Goal: Scale lead flow without ballooning sales headcount.
   - Pain Point: Leads dropping off outside business hours; slow manual WhatsApp response.
   - Ideal Flow: Sees Hero interactive visual → Understands 6-step Business System → Views WhatsApp Automation demo → Submits Audit Form / clicks WhatsApp CTA.
2. **The D2C E-commerce Operations Manager:**
   - Goal: Reduce COD order drop-offs and automate cart recovery.
   - Pain Point: High CAC and manual order confirmation calls.
   - Ideal Flow: Navigates to `/solutions/ecommerce` → Checks starting price (₹30k/₹50k) → Tests WhatsApp Calculator → Requests Architecture Proposal.
3. **The Industrial B2B Manufacturer:**
   - Goal: Qualify complex machinery inquiries automatically before routing to sales engineering.
   - Pain Point: Wasted sales hours answering basic RFQ details.
   - Ideal Flow: Clicks Industry page (`/industries/manufacturing`) → Reviews RFQ System Concept → Fills Audit Form.

---

## 2. Friction Reduction & Conversion Architecture

* **Interactive Hero Visual (`HeroVisual.jsx`):** Allows instant visual exploration of system architecture, lead flows, and automation pipelines without reading heavy paragraphs.
* **Progressive 2-Step Lead Form (`AuditForm.jsx`):** Breaks lead intake into high-conversion steps:
  1. *Basic Details* (Name, Business Name, WhatsApp Number, Website URL)
  2. *Business Focus & Requirements* (Business Type, Primary Requirement, Monthly Leads Volume, Biggest Challenge)
* **Accessibility & Usability:**
  - High-contrast CTAs (`#1d4ed8` brand blue fill on light background).
  - Floating WhatsApp action button on mobile viewports.
  - Skip-to-main-content link for keyboard screen-reader navigation.
