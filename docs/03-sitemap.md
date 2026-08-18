# 03. Sitemap & Navigation Structure — Bluetick Digital

## 1. Complete Route Hierarchy

```
/ (Home)
├── #hero (Hero + HeroVisual)
├── #solutions (CoreSolutions - 01)
├── #business-system (BusinessSystem - 02)
├── AutomationDemo
├── #showcase (ProjectsShowcase - 03)
├── #ai-solutions (AISolutions - 04)
├── #system-bundle (WebsiteAutomationBundle)
├── #industries (IndustrySolutions)
├── #how-it-works (HowItWorks - 04)
├── WhyBluetick (05)
├── #faq (FAQ - 06)
└── #audit (AuditForm - 07)
│
├── /solutions
│   ├── /solutions/websites (Websites & Profile Systems)
│   ├── /solutions/ecommerce (D2C & Catalog E-commerce)
│   ├── /solutions/ai-automation (AI Agents & Intent Qualification)
│   └── /solutions/whatsapp-automation (WhatsApp API & Chatbots)
│
├── /industries
│   ├── /industries/ecommerce (E-commerce Brands)
│   ├── /industries/manufacturing (Manufacturers)
│   ├── /industries/startups (Startups & Tech)
│   └── /industries/local-business (Local Businesses & Real Estate)
│
├── /about (About Bluetick Digital)
│
├── /blog (Technical Articles & Growth Guides)
│   └── /blog/:slug (Individual Blog Posts)
│
└── /tools (Direct Routes)
    ├── /whatsapp-api-pricing-india (Calculator)
    ├── /whatsapp-api-cost-calculator (Calculator Alias)
    └── /whatsapp-green-tick-checker (Checker Tool)
```

---

## 2. Navigation Architecture Rules (Addendum v1.1)

* **Header Navigation (`src/components/Layout/Header.jsx`):**
  - Brand Logo (Home link)
  - Solutions Dropdown (`Websites`, `E-commerce`, `AI Automation`, `WhatsApp Automation`)
  - Industries Dropdown (`E-commerce Brands`, `Manufacturers`, `Startups`, `Local Businesses`)
  - How It Works (`/#how-it-works`)
  - Projects (`/#projects` / `#showcase`)
  - About (`/about`)
  - Primary CTA Button (`"Get Free Audit"` → `#audit`)
  - **REMOVED:** "Resources" link from desktop navbar and mobile drawer.
* **Footer Navigation (`src/components/Layout/Footer.jsx`):**
  - **Brand Column:** Logo, Tagline, Enterprise Security badge.
  - **Solutions Column:** Business Websites, E-commerce Stores, AI Automation Systems, WhatsApp API Workflows.
  - **Industries Column:** E-commerce Brands, Manufacturers, Startups & Tech, Real Estate & Services (`/industries/local-business`).
  - **Company Column:** About Bluetick, Projects & Showcase, How It Works, Get Free Audit.
  - **Legal & Direct Contact:** Direct WhatsApp button, Raipur HQ address, Privacy Policy, Terms of Service.

