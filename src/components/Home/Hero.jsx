import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Bot, Globe, MessageSquare, Terminal } from 'lucide-react';
import { trackCtaClick } from '../../utils/analytics';
import styles from './Hero.module.css';

import { resolveTargetElement, scrollToElementWithOffset } from '../Common/ScrollToTop';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";

const TELEMETRY_CHIPS = [
  { icon: ShieldCheck, label: "Official Meta WhatsApp Business API" },
  { icon: Bot, label: "24/7 Custom AI Chatbots" },
  { icon: Globe, label: "Sub-1.2s React Web Engine" },
  { icon: Terminal, label: "4 Engagements / Quarter" }
];

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = (e) => setPrefersReducedMotion(e.matches);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
      }
    }
  }, []);

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = resolveTargetElement(href);
      if (el) {
        scrollToElementWithOffset(el);
      }
    }
  };

  return (
    <section className={styles.heroRoot}>
      {/* Background Looping Video with Ambient Overlay */}
      <div className={styles.videoWrapper}>
        {prefersReducedMotion ? (
          <img
            src="/images/cinematic-tech-bg.jpg"
            alt=""
            className={styles.bgVideo}
            aria-hidden="true"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/cinematic-tech-bg.jpg"
            className={styles.bgVideo}
            src={VIDEO_URL}
          />
        )}
        <div className={styles.videoOverlay} aria-hidden="true" />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Editorial Mono Eyebrow */}
          <div className={styles.eyebrowBadge}>
            <span className={styles.monoDot}>●</span>
            <span className={styles.monoText}>WHAT WE DO — SENIOR TECH PARTNER</span>
          </div>

          {/* Display Headline */}
          <h1 className={styles.heroHeading}>
            Websites that win enquiries. <br className={styles.responsiveBreak} />
            Automation that handles <br className={styles.responsiveBreak} />
            the follow-up.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.heroParagraph}>
            Bluetick Digital builds business websites, WhatsApp automation, and AI-powered workflows for growing businesses in Raipur and across India. Start with one service or connect them into a complete system.
          </p>

          {/* Actions & Proof */}
          <div className={styles.actionRow}>
            <a
              href="#audit"
              className={styles.exploreBtn}
              onClick={(e) => {
                handleNavClick('#audit');
                trackCtaClick('hero_primary_discuss_project', '#audit');
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </a>

            <a
              href="#showcase"
              className={styles.secondaryBtn}
              onClick={(e) => {
                handleNavClick('#showcase');
                trackCtaClick('hero_secondary_view_demos', '#showcase');
              }}
            >
              <span>View Our Demos</span>
              <ArrowRight size={15} className={styles.btnArrow} />
            </a>
          </div>

          {/* Micro Telemetry Chips */}
          <div className={styles.telemetryRow}>
            {TELEMETRY_CHIPS.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <div key={idx} className={styles.telemetryChip}>
                  <Icon size={12} className={styles.chipIcon} />
                  <span>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
