import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import FloemaReveal from './FloemaReveal';
import styles from './SubPageWorkflow.module.css';

const SubPageWorkflow = ({
  sectionNumber = "02 /",
  sectionBadge = "System Architecture & Delivery",
  title = "How We Engineer & Deploy Your System",
  subtitle = "A transparent, 4-stage sprint cycle from blueprint to automated production launch.",
  steps = []
}) => {
  return (
    <section id="workflow" className="section">
      <div className="container">
        <FloemaReveal variant="slide-up" delay={0}>
          <div className="section-header">
            {sectionNumber && <span className="section-number">{sectionNumber}</span>}
            <span className="section-badge">{sectionBadge}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </FloemaReveal>

        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <FloemaReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumberWrap}>
                    <span className={styles.stepNumber}>0{idx + 1}</span>
                    <span className={styles.stepDuration}>{step.duration || 'Sprint'}</span>
                  </div>
                  {Icon && (
                    <div className={styles.stepIconBox}>
                      <Icon size={20} className={styles.stepIcon} />
                    </div>
                  )}
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                  {step.deliverable && (
                    <div className={styles.deliverableTag}>
                      <span>Output: {step.deliverable}</span>
                    </div>
                  )}
                </div>
              </FloemaReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubPageWorkflow;
