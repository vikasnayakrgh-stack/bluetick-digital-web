import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPageShift.module.css';

const SubPageShift = ({
  sectionNumber = "01 /",
  sectionBadge = "The Strategic Shift",
  title = "Why Traditional Methods Fail & How Bluetick Solves It",
  subtitle = "The difference between static manual setups and an autonomous digital engine.",
  traditionalTitle = "The Traditional / Generic Agency Approach",
  traditionalItems = [],
  bluetickTitle = "The Bluetick Engineering Engine",
  bluetickItems = []
}) => {
  return (
    <section className="section section-subtle">
      <div className="container">
        <FloemaReveal variant="slide-up" delay={0}>
          <div className="section-header">
            {sectionNumber && <span className="section-number">{sectionNumber}</span>}
            <span className="section-badge">{sectionBadge}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </FloemaReveal>

        <div className={styles.comparisonGrid}>
          {/* Traditional Way */}
          <FloemaReveal variant="slide-up" delay={0.1}>
            <div className={styles.cardTraditional}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTagRed}>SLOW & DISCONNECTED</span>
                <h3 className={styles.cardTitle}>{traditionalTitle}</h3>
              </div>
              <ul className={styles.itemsList}>
                {traditionalItems.map((item, idx) => (
                  <li key={idx} className={styles.itemRowRed}>
                    <XCircle size={18} className={styles.iconRed} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FloemaReveal>

          {/* Bluetick Way */}
          <FloemaReveal variant="slide-up" delay={0.2}>
            <div className={styles.cardBluetick}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTagBlue}>ENGINEERED & AUTOMATED</span>
                <h3 className={styles.cardTitle}>{bluetickTitle}</h3>
              </div>
              <ul className={styles.itemsList}>
                {bluetickItems.map((item, idx) => (
                  <li key={idx} className={styles.itemRowBlue}>
                    <CheckCircle2 size={18} className={styles.iconBlue} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FloemaReveal>
        </div>
      </div>
    </section>
  );
};

export default SubPageShift;
