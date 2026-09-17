import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './TrustBar.module.css';

const TrustBar = () => {
  const capabilities = [
    'Modern Web Architecture',
    'AI Intent Qualification',
    'n8n Workflow Automation',
    'Supabase & CRM Sync',
  ];

  const techBadges = [
    'React 18',
    'Next.js / Vite',
    'n8n Automation',
    'Supabase DB',
    'Meta WABA API',
    'OpenAI GPT-4o',
    'Tailwind CSS',
    'Lucide Vectors',
  ];

  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.trustHeader}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.outExpo }}
        >
          <h2 className={styles.trustTitle}>
            Engineering High-Performance Digital Infrastructure for E-commerce Brands, Manufacturers & Startups.
          </h2>
        </motion.div>

        {/* Capability Pills */}
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              className={styles.capabilityPill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: MOTION_TOKENS.ease.outExpo }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <span className={styles.checkIcon}>✓</span>
              <span>{capability}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee Ticker */}
        <div className={styles.marqueeWrapper}>
          <motion.div
            className={styles.marqueeTrack}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
          >
            {[...techBadges, ...techBadges].map((badge, idx) => (
              <span key={idx} className={styles.techBadge}>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
