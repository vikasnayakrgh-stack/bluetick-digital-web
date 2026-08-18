import React, { useState } from 'react';
import FloemaReveal from '../Common/FloemaReveal';
import { CheckCircle2, Sparkles } from 'lucide-react';
import styles from './BusinessSystem.module.css';

const steps = [
  {
    number: '01',
    title: 'Traffic & Visitor Arrival',
    description: 'High-speed website attracts prospects from Search, Ads & Social channels.',
    detail: 'Optimized for Core Web Vitals — LCP < 2.5s, CLS < 0.1, FID < 100ms',
  },
  {
    number: '02',
    title: 'Smart Capture',
    description: 'Native web forms & WhatsApp CTA trigger instant automated events.',
    detail: 'Multi-channel capture: Web forms, WhatsApp click-to-chat, calendar booking',
  },
  {
    number: '03',
    title: 'AI Qualification',
    description: 'AI agent asks qualification questions & analyzes buying intent 24/7.',
    detail: 'Custom LLM prompts trained on your business context, pricing, and FAQs',
  },
  {
    number: '04',
    title: 'CRM & DB Sync',
    description: 'Qualified lead data stored atomically in Supabase / Zoho / HubSpot CRM.',
    detail: 'Real-time sync with automatic deduplication and lead scoring',
  },
  {
    number: '05',
    title: 'Automated Follow-Up',
    description: 'Personalized WhatsApp & Email follow-up sequences nurture prospects.',
    detail: 'Multi-touch sequences over 7-14 days with dynamic content insertion',
  },
  {
    number: '06',
    title: 'Sale & Conversion',
    description: 'Qualified lead booked directly into sales calendar with full context.',
    detail: 'Calendar integration (Google Calendar, Calendly) with automated reminders',
  },
];

const BusinessSystem = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="business-system" className="section section-subtle">
      <div className="container">
        {/* Section Header with Floema Watermark Number */}
        <FloemaReveal variant="slide-up" delay={0}>
          <div className={styles.sectionHeader}>
            <span className={styles.watermarkNumber}>02</span>
            <span className="section-badge">
              <Sparkles size={14} /> Connected Ecosystem
            </span>
            <h2 className="section-title">
              Don't just build a website. Build a business system.
            </h2>
            <p className="section-subtitle">
              Your website should not work in isolation. We connect your digital presence 
              with AI and automation to eliminate manual follow-up and streamline your sales operations.
            </p>
          </div>
        </FloemaReveal>

        {/* System Steps Grid with Floema Staggered Reveals */}
        <div className={styles.systemSteps}>
          {steps.map((step, index) => (
            <FloemaReveal
              key={step.number}
              variant="slide-up"
              delay={0.1 * ((index % 3) + 1)}
            >
              <div
                className={`${styles.systemStep} ${activeStep === index ? styles.isActive : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>

                {/* Detail Panel */}
                <div className={styles.stepDetailBox}>
                  <CheckCircle2 size={14} className={styles.checkIcon} />
                  <span className={styles.stepDetail}>{step.detail}</span>
                </div>
              </div>
            </FloemaReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSystem;
