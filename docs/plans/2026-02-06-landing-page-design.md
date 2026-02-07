       # Design Document - Bluetick Digital "Vibrant Tech" Landing Page

**Date:** 2026-02-06
**Project:** Bluetick Digital React Conversion
**Visual Style:** Re-imagined Premium Design

## Visual Identity
- **Primary Theme:** Vibrant Gradient / tech-startup energy.
- **Color Palette:** 
    - Gradient Start: Electric Violet (#8B5CF6)
    - Gradient End: Deep Azure (#2563EB)
    - Background: Deep charcoal/midnight foundations with animated gradient overlays.
- **Typography:** Sans-serif (Inter/Outfit) focused on hierarchy and clarity.

## Architecture & Depth (3D Parallax)
The interface is structured into three logical depth planes:
1. **Background Plane:** Moving mesh gradients and subtle noise texture.
2. **Standard Plane:** Responsive grid containing the core content within Glassmorphism (Frosted Glass) containers.
3. **Parallax Plane:** Decorative geometric shapes and abstract icons that move faster than scroll speed to create a "floating" effect.

## Component Specifications & Interactions
- **Hero:** Dynamic entrance with spring animations. Large, bold typography with a "glow" text-shadow.
- **Workflow Cards:** Responsive layout. Hover state expansion with outer glow on metrics.
- **Case Studies Filter:** Uses `framer-motion` layout animations for fluid reshuffling of cards.
- **FAQ:** Custom accordion with smooth height transition via CSS `grid-template-rows`.
- **WhatsApp Button:** Fixed position with a subtle pulse animation. Mobile-optimized placement.
- **Entrance Effects:** `whileInView` reveals with spring-based fade-ins (20px vertical offset).

## Tech Stack
- Vite
- React
- Framer Motion (for animations/parallax)
- Vanilla CSS (for layout and core styling)
- CSS Modules (to prevent style leakage)
