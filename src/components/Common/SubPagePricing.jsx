import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Info, Sparkles } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPagePricing.module.css';

const SubPagePricing = ({
  sectionNumber = "04 /",
  sectionBadge = "Scope & Pricing Tiers",
  title = "Transparent Investment Tiers",
  subtitle = "Clear, milestone-based pricing framed around your exact growth requirements.",
  tiers = [],
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
                  <h3 className={styles.tierName}>{tier.name}</h3>
                  <div className={styles.priceWrap}>
                    <span className={styles.priceLabel}>Starting from</span>
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

                  <a
                    href="#audit"
                    className={`btn ${isFeatured ? 'btn-primary' : 'btn-outline'} ${styles.tierBtn}`}
                  >
                    <span>Get Free Audit & Proposal</span>
                    <ArrowRight size={15} />
                  </a>
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
