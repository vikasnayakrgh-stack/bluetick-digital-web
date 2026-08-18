import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_TOKENS } from '../../constants/motionTokens';

/**
 * Floema-Style Reveal Wrapper Component (Framer Motion Native)
 * 
 * Usage:
 * <FloemaReveal variant="slide-up" delay={0.1}>
 *   <YourComponent />
 * </FloemaReveal>
 * 
 * Variants: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up'
 */
const VARIANT_MAP = {
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 }
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function FloemaReveal({
  variant = 'slide-up',
  delay = 0,
  duration = 0.45,
  children,
  className = '',
  style = {}
}) {
  const selectedVariant = VARIANT_MAP[variant] || VARIANT_MAP['slide-up'];

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: MOTION_TOKENS.ease.outExpo,
      }}
    >
      {children}
    </motion.div>
  );
}

