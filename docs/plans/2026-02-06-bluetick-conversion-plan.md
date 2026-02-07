# Bluetick Digital React Conversion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the static `web.html` into a high-performance, premium, and interactive React landing page with 3D parallax effects.

**Architecture:** Component-driven development using Vite, React, and Framer Motion. State management for interactive filters and accordions.

**Tech Stack:** React 18, Vite, Framer Motion, Vanilla CSS (CSS Modules), Lucide React.

---

### Task 1: Design System & Global Styles
**Files:**
- Create: `src/styles/variables.css`
- Modify: `src/index.css`
- Modify: `src/App.css`

**Step 1: Define CSS Variables**
Create `variables.css` with the "Vibrant Tech" color palette, spacing tokens, and glassmorphism utilities.

**Step 2: Setup Base Styles**
Configure `index.css` with modern resets and global typography (Inter/Outfit).

**Step 3: Verification**
Run `npm run dev` and verify that the background gradient renders correctly in the root component.

**Step 4: Commit**
`git add src/styles/ src/index.css && git commit -m "style: init global design system"`

---

### Task 2: Header & Navigation (Desktop/Mobile)
**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/Header.module.css`

**Step 1: Write failing test for Header**
Verify that the logo and navigation links render correctly.

**Step 2: Implement Header**
Build the fixed glassmorphism header with a sticky scroll effect (blur background on scroll).

**Step 3: Verfication**
Verify header sticks to top and links are clickable.

**Step 4: Commit**
`git add src/components/Header.* && git commit -m "feat: add sticky navigation header"`

---

### Task 3: Hero Section with 3D Parallax
**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Hero.module.css`

**Step 1: Implement Parallax Background**
Use `framer-motion` to create an animated mesh gradient and floating geometric shapes.

**Step 2: Implement Entrance Animations**
Add spring-based fade-ins for the main H1 and CTA buttons.

**Step 3: Verification**
Verify parallax effect works on mouse move or scroll.

**Step 4: Commit**
`git add src/components/Hero.* && git commit -m "feat: add parallax hero section"`

---

### Task 4: Workflow Cards (Services)
**Files:**
- Create: `src/components/Workflows.jsx`
- Create: `src/components/Workflows.module.css`
- Create: `src/components/WorkflowCard.jsx`

**Step 1: Define Workflow Data**
Extract the 6 workflows from `web.html` into a constants file.

**Step 2: Build Interactive Cards**
Implement hover reveal animations and metrics glows using Framer Motion.

**Step 3: Verification**
Hover over cards to verify glow and expansion effects.

**Step 4: Commit**
`git add src/components/Workflow* && git commit -m "feat: add interactive workflow cards"`

---

### Task 5: Filterable Case Studies
**Files:**
- Create: `src/components/CaseStudies.jsx`
- Create: `src/components/CaseStudies.module.css`

**Step 1: Implement Filter Logic**
Create a React state for the active industry.

**Step 2: Animate Grid Reshuffle**
Use `framer-motion`'s `layout` prop to transition cards when filter changes.

**Step 3: Verification**
Click different industries and verify smooth reshuffling.

**Step 4: Commit**
`git add src/components/CaseStudies.* && git commit -m "feat: add animated case study filter"`

---

### Task 6: FAQ & Pricing
**Files:**
- Create: `src/components/Pricing.jsx`
- Create: `src/components/FAQ.jsx`

**Step 1: Pricing Tiers**
Implement the 4 pricing cards with the "Featured" highlight.

**Step 2: Animated FAQ Accordion**
Use CSS grid or Framer Motion for height-independent expansion.

**Step 3: Verification**
Test accordion opening/closing and verify pricing toggle responsiveness.

**Step 4: Commit**
`git add src/components/Pricing.jsx src/components/FAQ.jsx && git commit -m "feat: add pricing and faq sections"`

---

### Task 7: Final Integration & WhatsApp
**Files:**
- Modify: `src/App.jsx`
- Create: `src/components/WhatsAppBtn.jsx`

**Step 1: Assemble App**
Place all sections in `App.jsx` with section anchors for smooth scroll.

**Step 2: Add WhatsApp Pulse**
Floating button with infinite pulse animation.

**Step 3: Final Sweep**
Verify all "Get Started" links and smooth scroll behaviors.

**Step 4: Commit**
`git add . && git commit -m "feat: final assembly and quality sweep"`
