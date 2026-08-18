# 07. Design System Specifications — Bluetick Digital

## 1. Typography System (`src/styles/variables.css`)

```css
/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-heading: 'Plus Jakarta Sans', 'Inter', sans-serif;

/* Font Sizes — Responsive Scale (Brikken-Inspired Editorial Scale) */
--h1-size: clamp(3rem, 5.5vw, 4.75rem);
--h2-size: clamp(2.25rem, 4vw, 3.5rem);
--h3-size: clamp(1.35rem, 2.4vw, 1.75rem);
--h4-size: clamp(1.15rem, 1.6vw, 1.35rem);
--body-size: 1rem;
--body-lead-size: clamp(1.125rem, 1.6vw, 1.3rem);
--eyebrow-size: 0.75rem;
--caption-size: 0.875rem;

/* Line Heights */
--h1-line-height: 1.04;
--h2-line-height: 1.10;
--h3-line-height: 1.22;
--h4-line-height: 1.30;
--body-line-height: 1.7;
--body-lead-line-height: 1.65;

/* Letter Spacing (Tracking) */
--h1-tracking: -0.038em;
--h2-tracking: -0.028em;
--h3-tracking: -0.018em;
--eyebrow-tracking: 0.12em;
--body-tracking: 0;

/* Font Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

---

## 2. Color Palette Tokens

```css
/* Backgrounds */
--color-bg-body: #ffffff;
--color-bg-subtle: #fafafa;
--color-bg-muted: #f8fafc;
--color-bg-dark: #0f172a;

/* Text */
--color-text-primary: #0f172a;      /* Deep Ink Navy */
--color-text-secondary: #475569;    /* Muted Slate */
--color-text-tertiary: #64748b;     /* Light Slate */
--color-text-inverse: #ffffff;

/* Brand Accent */
--color-brand: #1d4ed8;             /* Bluetick Blue */
--color-brand-hover: #1e40af;       /* Darker Blue */
--color-brand-light: #dbeafe;       /* Light Blue Tint */

/* Borders */
--color-border-hairline: rgba(15, 23, 42, 0.08); /* Architectural Hairline */
--color-border-subtle: rgba(15, 23, 42, 0.12);
--color-border-strong: rgba(15, 23, 42, 0.2);

/* Semantic Colors */
--color-success: #16a34a;
--color-warning: #ca8a04;
--color-error: #dc2626;
```

---

## 3. Spacing Grid (8px Base Scale)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

---

## 4. Animation & Micro-Interactions (`src/utils/scrollReveal.js` & `src/styles/design-system.css`)

* `.reveal-on-scroll`: Viewport entrance opacity fade and 24px translateY spring.
* `.stagger-1` to `.stagger-6`: Staggered transition delays (50ms increments).
* `@media (prefers-reduced-motion: reduce)`: Disables transition delays and forces immediate appearance for accessibility.

