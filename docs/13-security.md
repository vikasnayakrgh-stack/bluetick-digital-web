# 13. Security Specification — Bluetick Digital

## 1. Credentials & Environment Isolation (`PROJECT_CONFIG.md`)

### Project Mapping Security:
* **Bluetick Website Project:** `kgaeffyumccbnyrlzfex`
* **AI Priya Project:** `jmpbuarqntbtoybqjbre` (DO NOT USE FOR WEBSITE LEADS).

```
VITE_SUPABASE_URL=https://kgaeffyumccbnyrlzfex.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 2. Row Level Security (RLS) Policies (Supabase `leads` Table)

To ensure client-side safety while using the public anonymous key:
1. **INSERT Policy:** Enabled for `anon` role (`WITH CHECK (true)`).
2. **SELECT / UPDATE / DELETE Policies:** Disabled for `anon` role (`USING (false)`).
*Result:* Public visitors can submit lead forms, but cannot read, list, update, or delete existing lead data from the browser console.

---

## 3. Client-Side Input Validation & Security
* All form inputs in `AuditForm.jsx` require mandatory fields (`name`, `business_name`, `whatsapp`, `business_type`, `requirement`) before proceeding between steps and payload dispatch.
* Fallbacks to `null` are provided for optional fields (`website_url`, `monthly_leads`, `biggest_challenge`).
* External links (e.g., WhatsApp API CTAs, demo systems) specify `rel="noopener noreferrer"` to prevent reverse tabnabbing and window hijacking.
