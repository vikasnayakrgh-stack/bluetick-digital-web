import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPageDeliverables.module.css';

const SubPageDeliverables = ({
  sectionNumber = "03 /",
  sectionBadge = "Included Architecture & Specs",
  title = "Complete Engineering Deliverables",
  subtitle = "Every component is built for speed, security, and effortless scaling.",
  categories = [],
  techStack = []
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

        {/* Deliverables Grid */}
        <div className={styles.categoriesGrid}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon || ShieldCheck;
            return (
              <FloemaReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className={styles.categoryCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.categoryIconBox}>
                      <Icon size={20} className={styles.categoryIcon} />
                    </div>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  </div>
                  <ul className={styles.featureList}>
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.featureItem}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FloemaReveal>
            );
          })}
        </div>

        {/* Tech Stack Bar */}
        {techStack.length > 0 && (
          <FloemaReveal variant="fade" delay={0.3}>
            <div className={styles.techStackContainer}>
              <div className={styles.techStackHeader}>
                <Code2 size={16} className={styles.techIcon} />
                <span className={styles.techStackLabel}>Verified Production Tech Stack:</span>
              </div>
              <div className={styles.techChips}>
                {techStack.map((tech, idx) => (
                  <span key={idx} className={styles.techChip}>{tech}</span>
                ))}
              </div>
            </div>
          </FloemaReveal>
        )}
      </div>
    </section>
  );
};

export default SubPageDeliverables;
