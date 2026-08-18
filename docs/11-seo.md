# 11. SEO & Metadata Strategy — Bluetick Digital

## 1. Technical SEO Architecture
* **Helmet Integration:** Using `react-helmet-async` for per-route dynamic `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, and Open Graph tags (`SEO.jsx`).
* **Semantic HTML:** Strict heading hierarchy enforced per page: single `<h1>` tag in Hero, `<h2>` for section markers, `<h3>` for cards/steps.

---

## 2. Dynamic Title & Meta Strategy

| Route | Page Title | Meta Description Target Keywords |
|---|---|---|
| `/` | Websites + AI \| Digital Transformation Partner \| Bluetick Digital | Build a high-performance website, automate repetitive business processes, and turn your digital presence into a growth engine. |
| `/solutions/websites` | Custom Web Development Services \| Bluetick Digital | High-converting business websites starting from ₹10,000. Mobile-first responsive architecture. |
| `/solutions/ecommerce` | E-commerce Platform Engineering \| Bluetick Digital | Scale your D2C brand with high-speed e-commerce platforms starting from ₹30,000. |
| `/solutions/ai-automation` | Custom AI Business Automation \| Bluetick Digital | Automate lead qualification, CRM sync, and customer support with custom AI workflows. |
| `/solutions/whatsapp-automation` | WhatsApp API Workflow Automation \| Bluetick Digital | Convert leads 24/7 with automated WhatsApp sales agents and API workflows. |
| `/whatsapp-api-pricing-india` | WhatsApp API Cost Calculator India 2026 \| Bluetick Digital | Estimate your WhatsApp Business API costs in India with real-time Meta conversation pricing. |

---

## 3. Structured Data Schema (`SEO.jsx`)
* Includes JSON-LD `ProfessionalService` schema markup:
  - `@type`: "ProfessionalService"
  - `name`: "Bluetick Digital"
  - `areaServed`: "IN" (India)
  - `url`: Canonical domain URL
