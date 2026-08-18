import React from 'react';
import { ArrowRight, ShieldCheck, Bot, Globe, MessageSquare, Terminal } from 'lucide-react';
import styles from './Hero.module.css';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";

const TELEMETRY_CHIPS = [
  { icon: ShieldCheck, label: "Official Meta WABA Partner" },
  { icon: Bot, label: "24/7 Custom AI Chatbots" },
  { icon: Globe, label: "Sub-1.2s React Web Engine" },
  { icon: Terminal, label: "4 Engagements / Quarter" }
];

const Hero = () => {
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.heroRoot}>
      {/* Background Looping Video with Ambient Overlay */}
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgVideo}
          src={VIDEO_URL}
        />
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
            We build connected <br className={styles.responsiveBreak} />
            business engines <br className={styles.responsiveBreak} />
            for ambitious brands.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.heroParagraph}>
            Official Meta Partner. 2-person senior team engineering high-speed websites, official WhatsApp Business API workflows, and 24/7 custom AI chatbots. Selective capacity with direct founder access throughout.
          </p>

          {/* Actions & Proof */}
          <div className={styles.actionRow}>
            <a
              href="#audit"
              className={styles.exploreBtn}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#audit');
              }}
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight size={15} className={styles.btnArrow} />
            </a>

            <a
              href="/whatsapp-api-cost-calculator"
              className={styles.secondaryBtn}
            >
              <span>Calculate WhatsApp API Cost →</span>
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
