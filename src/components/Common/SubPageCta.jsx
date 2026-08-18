import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPageCta.module.css';

const SubPageCta = ({
  badge = "Free 30-Minute Growth Audit",
  title = "Ready to Engineer Your Automated Business Engine?",
  subtitle = "Let's review your current bottlenecks, map out your custom architecture, and estimate your measurable ROI in 24 hours.",
  ctaText = "Get Your Free Growth Audit",
  ctaHref = "/#audit"
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
                className={styles.ctaPrimaryBtn}
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} />
              </motion.a>
            </div>

            <div className={styles.trustFooterRow}>
              <div className={styles.trustItem}>
                <ShieldCheck size={14} className={styles.trustIcon} />
                <span>Zero Sales Pressure · 100% Technical Clarity</span>
              </div>
              <div className={styles.trustItem}>
                <Zap size={14} className={styles.trustIconYellow} />
                <span>Delivered in 24 Hours</span>
              </div>
            </div>
          </div>
        </FloemaReveal>
      </div>
    </section>
  );
};

export default SubPageCta;
