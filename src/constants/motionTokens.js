/**
 * BLUETICK DIGITAL 2.0 — MOTION SYSTEM TOKENS
 * Brikken-Inspired Restrained Precision Motion Tokens
 */

export const MOTION_TOKENS = {
  // Single Unified Easing Curve (ease-out-expo)
  ease: {
    outExpo: [0.16, 1, 0.3, 1],
    outQuint: [0.16, 1, 0.3, 1],
    inOutCirc: [0.16, 1, 0.3, 1],
    bounce: [0.16, 1, 0.3, 1],
  },

  // Spring Physics Presets (Restrained)
  spring: {
    snappy: { type: "spring", stiffness: 350, damping: 30 },
    bouncy: { type: "spring", stiffness: 300, damping: 28 },
    gentle: { type: "spring", stiffness: 200, damping: 24 },
  },

  // Standard Reusable Transition Presets (in seconds)
  transition: {
    instant: { duration: 0.075, ease: [0.16, 1, 0.3, 1] },
    fast: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
    normal: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    slow: { duration: 0.40, ease: [0.16, 1, 0.3, 1] },
    deliberate: { duration: 0.60, ease: [0.16, 1, 0.3, 1] },
  },

  // Editorial Floema Timing Curves (Standardized to ease-out-expo)
  floema: {
    ease: [0.16, 1, 0.3, 1],
    duration: 0.8,      // 800ms
    durationSlow: 0.9,  // 900ms
    durationLong: 1.0,  // 1000ms
  },

  // Standard Variants for Components (Vertical Only, 32px)
  variants: {
    floemaSlideUp: {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    },
    floemaSlideLeft: {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    },
    floemaSlideRight: {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    },
    floemaScaleUp: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    },
    fadeUp: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    },
  },
};
