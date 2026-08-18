# 09. Component Specifications — Bluetick Digital

## 1. Key Component Architecture

### 1. `HeroVisual.jsx`
* **Purpose:** Interactive architectural diagram component embedded in the homepage Hero.
* **Views / Tabs:**
  - `architecture` ("System Architecture")
  - `flow` ("Lead Flow")
  - `automation` ("Automation Pipeline")
* **State:** `activeTab` ('architecture' | 'flow' | 'automation'), `isSimulating` (boolean), `simStep` (0 | 1 | 2 | 3).
* **Interactivity:** Switches dynamic visual architecture diagrams with Framer Motion layout transitions (`activeHeroVisualTab` glider) and includes interactive "Simulate Lead Flow" button trigger.
* **Props:** None (Self-contained interactive state).

### 2. `AuditForm.jsx`
* **Purpose:** 2-step progressive lead capture form interfacing directly with Supabase (`#audit`).
* **State:** `step` (1 | 2), `status` ('idle' | 'loading' | 'success'), `hasError` (boolean), `formData` (object: `name`, `business_name`, `whatsapp`, `website_url`, `business_type`, `requirement`, `monthly_leads`, `biggest_challenge`).
* **Integrations:** Imports `supabase` from `../../supabaseClient` to execute direct insert to `leads` table.

### 3. `BusinessSystem.jsx`
* **Purpose:** Displays the 6-step horizontal architectural pipeline (`02 /`).
* **Steps:**
  - `01`: Traffic & Visitor Arrival
  - `02`: Smart Capture
  - `03`: AI Qualification
  - `04`: CRM & DB Sync
  - `05`: Automated Follow-Up
  - `06`: Sale & Conversion
* **State:** `activeStep` (index | null).
* **Interactivity:** Hovering steps highlights capability and detail specs.

### 4. `ProjectsShowcase.jsx`
* **Purpose:** Displays conceptual demonstration systems stack (`03 /` watermark).
* **Demonstrations:** `Chouhan Mattress` (D2C E-commerce) and `Laxmi Furniture` (Furniture Commerce / Local Retail).
* **Enforced Badge:** Renders `"CONCEPT / DEMO SYSTEM"` badge on every card (Addendum v1.1 compliance).
* **Browser Preview:** Uses `ProjectBrowserPreview.jsx` for desktop preview rendering.

### 5. `WhatsAppBtn.jsx` & `BackToTop.jsx`
* **Purpose:** Floating high-priority conversion tools rendered globally in `App.jsx`.
* **Behavior:** Smooth scroll back to top; direct WhatsApp redirect with pre-filled inquiry message (`wa.me/916261003050`).

