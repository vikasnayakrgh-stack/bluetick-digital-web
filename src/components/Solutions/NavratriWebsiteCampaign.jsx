import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ShieldCheck, Smartphone, Layout, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { trackWhatsAppClick } from '../../utils/analytics';
import FloemaReveal from '../Common/FloemaReveal';
import styles from './NavratriWebsiteCampaign.module.css';

const CAMPAIGN_HIGHLIGHTS = [
  { icon: Layout, label: 'Professional Business Architecture' },
  { icon: Smartphone, label: '100% Mobile-Responsive Design' },
  { icon: MessageSquare, label: 'WhatsApp Inquiry Integration' },
  { icon: ShieldCheck, label: 'Transparent Packages from ₹10,000' }
];

const NavratriWebsiteCampaign = () => {
  const phoneNumber = SITE_CONFIG.contact.whatsappRaw;
  const message = encodeURIComponent(
    'Hi Bluetick Digital! I’m interested in the Navratri website development offer. Please share the available packages and discount details.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('navratri_campaign');
  };

  return (
    <section className={styles.campaignSection} aria-label="Navratri Website Special Offer">
      <div className="container">
        <FloemaReveal variant="slide-up" delay={0.05}>
          <div className={styles.card}>
            <div className={styles.ambientGlow} aria-hidden="true" />

            <div className={styles.contentWrap}>
              {/* Eyebrow Badge */}
              <div className={styles.eyebrowBadge}>
                <Sparkles size={13} className={styles.sparkleIcon} aria-hidden="true" />
                <span>NAVRATRI WEBSITE SPECIAL</span>
              </div>

              {/* Main Headline */}
              <h2 className={styles.headline}>
                This Navratri, Give Your Business a Stronger Digital Presence
              </h2>

              {/* Supporting Text */}
              <p className={styles.supportingText}>
                Launch a professional, mobile-friendly business website designed to showcase your services, build trust, and generate customer inquiries.
              </p>

              {/* Offer Messaging Callout */}
              <div className={styles.offerBanner}>
                <div className={styles.offerIconWrap} aria-hidden="true">
                  <Sparkles size={16} />
                </div>
                <p className={styles.offerText}>
                  Ask us about our Navratri special discount on website development.
                </p>
              </div>

              {/* Core Feature Highlights */}
              <div className={styles.highlightsGrid}>
                {CAMPAIGN_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className={styles.highlightItem}>
                      <Icon size={15} className={styles.highlightIcon} aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Row */}
              <div className={styles.actionRow}>
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className={styles.primaryWhatsappBtn}
                  aria-label="Enquire on WhatsApp about Navratri website development offer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg viewBox="0 0 32 32" className={styles.whatsappIcon} aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16.002 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.614 4.653 1.782 6.681L2.667 29.333l6.841-1.79a13.276 13.276 0 0 0 6.494 1.681c7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.002 2.667zm7.736 18.8c-.325.913-1.608 1.703-2.606 1.93-.684.152-1.58.276-4.59-.985-3.852-1.61-6.322-5.506-6.516-5.76-.188-.254-1.513-2.016-1.513-3.843s.956-2.726 1.295-3.1c.34-.373.742-.466.988-.466h.711c.229 0 .535-.086.836.637.325.789 1.105 2.695 1.2 2.889.095.195.158.42.032.673-.126.254-.19.412-.378.63-.188.22-.395.49-.565.659-.188.188-.384.392-.165.77.22.378.974 1.606 2.093 2.602 1.436 1.28 2.647 1.676 3.022 1.865.374.189.593.156.813-.095.22-.25.94-1.092 1.19-1.465.25-.374.5-.312.843-.189.343.126 2.18 1.029 2.554 1.215.374.189.623.28.717.436.095.158.095.912-.229 1.826z"
                    />
                  </svg>
                  <span>Enquire on WhatsApp</span>
                </motion.a>

                <a href="#packages" className={styles.secondaryPackageLink}>
                  <span>Explore the website packages below</span>
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </FloemaReveal>
      </div>
    </section>
  );
};

export default NavratriWebsiteCampaign;
