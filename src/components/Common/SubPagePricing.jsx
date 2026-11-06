import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Info, Sparkles, ShieldCheck } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPagePricing.module.css';

const SubPagePricing = ({
  sectionNumber = "04 /",
  sectionBadge = "Scope & Pricing Tiers",
  title = "Transparent Investment Tiers",
  subtitle = "Clear, milestone-based pricing framed around your exact growth requirements.",
  tiers = [],
  ctaHref = "/#audit",
  disclaimer = "Final investment depends on exact feature scope, integration depth, custom design requirements, and monthly volume."
}) => {
  return (
    <section className="section">
      <div className="container">
        <FloemaReveal variant="slide-up" delay={0}>
          <div className="section-header">
            {sectionNumber && <span className="section-number">{sectionNumber}</span>}
            <span className="section-badge">{sectionBadge}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </FloemaReveal>

        <div className={styles.tiersGrid}>
          {tiers.map((tier, idx) => {
            const isFeatured = tier.featured;
            return (
              <FloemaReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className={`${styles.tierCard} ${isFeatured ? styles.tierCardFeatured : ''}`}>
                  {isFeatured && (
                    <div className={styles.featuredBadge}>
                      <Sparkles size={12} /> Most Popular
                    </div>
                  )}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.tierName}>{tier.name}</h3>
                    {tier.paymentTerms && (
                      <span className={styles.paymentTermsBadge}>
                        {tier.paymentTerms}
                      </span>
                    )}
                  </div>

                  <div className={styles.priceWrap}>
                    <span className={styles.priceLabel}>
                      {tier.priceLabel || (tier.price?.toLowerCase().includes('custom') ? 'Investment Model' : (tier.price?.includes('/ year') ? 'Annual Subscription' : 'Confirmed Package'))}
                    </span>
                    <span className={styles.priceValue}>{tier.price}</span>
                  </div>

                  <p className={styles.tierDesc}>{tier.description}</p>

                  <div className={styles.tierDivider} />

                  <ul className={styles.tierFeaturesList}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.tierFeatureItem}>
                        <Check size={16} className={styles.tierCheckIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.renewalInfo && (
                    <div className={styles.tierRenewalBox}>
                      <ShieldCheck size={14} className={styles.renewalIcon} />
                      <span>{tier.renewalInfo}</span>
                    </div>
                  )}

                  <div className={styles.tierActions}>
                    <a
                      href={tier.ctaHref || ctaHref}
                      onClick={tier.onCtaClick}
                      className={`btn ${isFeatured ? 'btn-primary' : 'btn-primary'} ${styles.tierBtn}`}
                    >
                      <span>{tier.ctaText || "Request Architecture Proposal"}</span>
                      <ArrowRight size={15} />
                    </a>

                    {tier.whatsappHref && (
                      <a
                        href={tier.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={tier.onWhatsAppClick}
                        className={styles.tierWhatsAppBtn}
                        aria-label={`Enquire about ${tier.name} on WhatsApp`}
                      >
                        <svg viewBox="0 0 32 32" className={styles.whatsappSvg} aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M16.002 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.614 4.653 1.782 6.681L2.667 29.333l6.841-1.79a13.276 13.276 0 0 0 6.494 1.681c7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.002 2.667zm7.736 18.8c-.325.913-1.608 1.703-2.606 1.93-.684.152-1.58.276-4.59-.985-3.852-1.61-6.322-5.506-6.516-5.76-.188-.254-1.513-2.016-1.513-3.843s.956-2.726 1.295-3.1c.34-.373.742-.466.988-.466h.711c.229 0 .535-.086.836.637.325.789 1.105 2.695 1.2 2.889.095.195.158.42.032.673-.126.254-.19.412-.378.63-.188.22-.395.49-.565.659-.188.188-.384.392-.165.77.22.378.974 1.606 2.093 2.602 1.436 1.28 2.647 1.676 3.022 1.865.374.189.593.156.813-.095.22-.25.94-1.092 1.19-1.465.25-.374.5-.312.843-.189.343.126 2.18 1.029 2.554 1.215.374.189.623.28.717.436.095.158.095.912-.229 1.826z"
                          />
                        </svg>
                        <span>{tier.whatsappText || "Chat on WhatsApp"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </FloemaReveal>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        {disclaimer && (
          <FloemaReveal variant="fade" delay={0.3}>
            <div className={styles.disclaimerBox}>
              <Info size={16} className={styles.disclaimerIcon} />
              <span>{disclaimer}</span>
            </div>
          </FloemaReveal>
        )}
      </div>
    </section>
  );
};

export default SubPagePricing;
