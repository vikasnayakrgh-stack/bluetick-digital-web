import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './SubPageHero.module.css';

const SubPageHero = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  gradientWord,
  subtitle,
  metrics = [],
  primaryCtaText = "Request Scoped Architecture",
  primaryCtaHref = "/#audit",
  secondaryCtaText = "Explore Features",
  secondaryCtaHref = "#workflow"
}) => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.ambientAura} aria-hidden="true" />
      <div className={styles.gridLines} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroInner}>
          {/* Eyebrow Badge */}
          {badgeText && (
            <motion.div
              className={styles.eyebrowBadge}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {BadgeIcon && <BadgeIcon size={14} className={styles.badgeIcon} />}
              <span>{badgeText}</span>
            </motion.div>
          )}

          {/* Display Heading */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: MOTION_TOKENS.ease.outExpo }}
          >
            {title}{' '}
            {gradientWord && <span className={styles.gradientWord}>{gradientWord}</span>}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Metric Badges */}
          {metrics.length > 0 && (
            <motion.div
              className={styles.metricsGroup}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              {metrics.map((item, idx) => (
                <div key={idx} className={styles.metricPill}>
                  <span className={styles.metricDot} />
                  <span className={styles.metricText}>{item}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Cluster */}
          <motion.div
            className={styles.ctaCluster}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.4 }}
          >
            <a href={primaryCtaHref} className={styles.primaryCta}>
              <span>{primaryCtaText}</span>
              <ArrowRight size={16} />
            </a>
            {secondaryCtaHref && (
              <a href={secondaryCtaHref} className={styles.secondaryCta}>
                <span>{secondaryCtaText}</span>
                <ArrowUpRight size={15} />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
