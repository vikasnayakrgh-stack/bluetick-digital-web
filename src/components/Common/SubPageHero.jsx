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
  priceBadge = null,
  primaryCtaText = "Request Scoped Architecture",
  primaryCtaHref = "/#audit",
  onPrimaryClick = null,
  secondaryCtaText = "Explore Features",
  secondaryCtaHref = "#workflow",
  secondaryIsWhatsApp = false,
  secondaryOnClick = null,
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

          {/* Optional Prominent Price / Value Highlight */}
          {priceBadge && (
            <motion.div
              className={styles.priceHighlightBar}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <div className={styles.priceBadgeInner}>
                {priceBadge.amount && (
                  <span className={styles.priceAmount}>{priceBadge.amount}</span>
                )}
                {priceBadge.label && (
                  <span className={styles.priceLabel}>{priceBadge.label}</span>
                )}
              </div>
            </motion.div>
          )}

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
            <a
              href={primaryCtaHref}
              onClick={onPrimaryClick}
              className={styles.primaryCta}
            >
              <span>{primaryCtaText}</span>
              <ArrowRight size={16} />
            </a>

            {secondaryCtaHref && (
              secondaryIsWhatsApp ? (
                <a
                  href={secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={secondaryOnClick}
                  className={styles.whatsappSecondaryCta}
                  aria-label={`${secondaryCtaText} on WhatsApp`}
                >
                  <svg viewBox="0 0 32 32" className={styles.whatsappSvg} aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16.002 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.614 4.653 1.782 6.681L2.667 29.333l6.841-1.79a13.276 13.276 0 0 0 6.494 1.681c7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.002 2.667zm7.736 18.8c-.325.913-1.608 1.703-2.606 1.93-.684.152-1.58.276-4.59-.985-3.852-1.61-6.322-5.506-6.516-5.76-.188-.254-1.513-2.016-1.513-3.843s.956-2.726 1.295-3.1c.34-.373.742-.466.988-.466h.711c.229 0 .535-.086.836.637.325.789 1.105 2.695 1.2 2.889.095.195.158.42.032.673-.126.254-.19.412-.378.63-.188.22-.395.49-.565.659-.188.188-.384.392-.165.77.22.378.974 1.606 2.093 2.602 1.436 1.28 2.647 1.676 3.022 1.865.374.189.593.156.813-.095.22-.25.94-1.092 1.19-1.465.25-.374.5-.312.843-.189.343.126 2.18 1.029 2.554 1.215.374.189.623.28.717.436.095.158.095.912-.229 1.826z"
                    />
                  </svg>
                  <span>{secondaryCtaText}</span>
                </a>
              ) : (
                <a
                  href={secondaryCtaHref}
                  onClick={secondaryOnClick}
                  className={styles.secondaryCta}
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowUpRight size={15} />
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
