import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { trackCtaClick } from '../../utils/analytics';
import FloemaReveal from './FloemaReveal';
import styles from './SubPageCta.module.css';

const SubPageCta = ({
  badge = "Free 30-Minute Growth Audit",
  title = "Ready to Engineer Your Automated Business Engine?",
  subtitle = "Let's review your current bottlenecks, map out your custom architecture, and estimate your measurable ROI in 24 hours.",
  ctaText = "Get Your Free Growth Audit",
  ctaHref = "/#audit",
  onCtaClick = null,
  whatsappHref = null,
  whatsappText = "Chat on WhatsApp",
  onWhatsAppClick = null
}) => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ambientAura} aria-hidden="true" />

      <div className="container">
        <FloemaReveal variant="slide-up" delay={0}>
          <div className={styles.ctaCard}>
            <span className={styles.ctaBadge}>
              <Sparkles size={13} /> {badge}
            </span>
            <h2 className={styles.ctaTitle}>{title}</h2>
            <p className={styles.ctaSubtitle}>{subtitle}</p>

            <div className={styles.ctaActionRow}>
              <motion.a
                href={ctaHref}
                onClick={onCtaClick || (() => trackCtaClick('subpage_cta_primary', ctaHref))}
                className={styles.ctaPrimaryBtn}
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} />
              </motion.a>

              {whatsappHref && (
                <motion.a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onWhatsAppClick}
                  className={styles.ctaWhatsAppBtn}
                  whileHover={{ scale: 1.03, x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`${whatsappText} regarding website development`}
                >
                  <svg viewBox="0 0 32 32" className={styles.whatsappSvg} aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16.002 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.614 4.653 1.782 6.681L2.667 29.333l6.841-1.79a13.276 13.276 0 0 0 6.494 1.681c7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.002 2.667zm7.736 18.8c-.325.913-1.608 1.703-2.606 1.93-.684.152-1.58.276-4.59-.985-3.852-1.61-6.322-5.506-6.516-5.76-.188-.254-1.513-2.016-1.513-3.843s.956-2.726 1.295-3.1c.34-.373.742-.466.988-.466h.711c.229 0 .535-.086.836.637.325.789 1.105 2.695 1.2 2.889.095.195.158.42.032.673-.126.254-.19.412-.378.63-.188.22-.395.49-.565.659-.188.188-.384.392-.165.77.22.378.974 1.606 2.093 2.602 1.436 1.28 2.647 1.676 3.022 1.865.374.189.593.156.813-.095.22-.25.94-1.092 1.19-1.465.25-.374.5-.312.843-.189.343.126 2.18 1.029 2.554 1.215.374.189.623.28.717.436.095.158.095.912-.229 1.826z"
                    />
                  </svg>
                  <span>{whatsappText}</span>
                </motion.a>
              )}
            </div>

            <div className={styles.trustFooterRow}>
              <div className={styles.trustItem}>
                <ShieldCheck size={14} className={styles.trustIcon} />
                <span>Zero Sales Pressure · 100% Technical Clarity</span>
              </div>
              <div className={styles.trustItem}>
                <Zap size={14} className={styles.trustIconYellow} />
                <span>Delivered in 5–7 Days</span>
              </div>
            </div>
          </div>
        </FloemaReveal>
      </div>
    </section>
  );
};

export default SubPageCta;
