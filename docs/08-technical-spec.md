# 08. Technical Specification — Bluetick Digital

## 1. Core Architecture & Tech Stack

```
Framework:        Vite 4.4.1 + React 18.2.0 (ESM module architecture)
Routing:          React Router DOM 7.13.0
State Management: Local Component State + Custom React Hooks
Styling:          Vanilla CSS Modules + CSS Custom Properties (`variables.css`, `design-system.css`)
Motion Engine:    Framer Motion 10.16.4 + Lenis 1.3.26 smooth scroll
SEO:              React Helmet Async 2.0.5
Database / BaaS:  Supabase JS Client (`@supabase/supabase-js` v2.95.3)
Icons:            Lucide React 0.284.0
```

---

## 2. Environment & Project Mapping (PROJECT_CONFIG.md)

* **Target Supabase Project:** `kgaeffyumccbnyrlzfex` (Website Leads & Forms).
* **CRITICAL ISOLATION RULE:** Never route website lead operations to the separate `AI Priya` Supabase project (`jmpbuarqntbtoybqjbre`).
* **Environment Variables (`.env`):**
  ```env
  VITE_SUPABASE_URL=https://kgaeffyumccbnyrlzfex.supabase.co
  VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```

---

## 3. Database Schema & Payload Contract (`leads` Table)

The client application (`src/components/Home/AuditForm.jsx`) sends the following payload directly to the Supabase `leads` table:

```sql
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  website_url TEXT,
  business_type TEXT NOT NULL,
  requirement TEXT NOT NULL,
  monthly_leads TEXT,
  biggest_challenge TEXT,
  source TEXT DEFAULT 'free_audit_form'
);
```

---

## 4. Production Build & Deployment Pipeline
* **Build Command:** `npm run build` (`vite build`).
* **Output Path:** `/dist`.
* **Zero Warning Standards:** Zero module resolution errors, verified smooth chunk splitting (`index.js` bundle minification).
