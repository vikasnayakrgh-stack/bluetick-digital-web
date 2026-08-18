import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import { getMotionCapabilities } from '../../utils/motionCapabilities';
import styles from './NotchedRoiCard.module.css';

const SAVINGS_BREAKDOWN = [
  {
    category: "Labor & Follow-up Savings",
    scope: "(WhatsApp AI Agent, Auto-Replies, Lead Filtering)",
    amount: "₹ 2,55,000 / yr"
  },
  {
    category: "Lead Drop-off Recovery",
    scope: "(<30s SLA, Instant Qualification, Demo Scheduling)",
    amount: "₹ 1,93,000 / yr"
  },
  {
    category: "Support Ticket Resolution",
    scope: "(80%+ Knowledge Base Auto-Resolution)",
    amount: "₹ 1,42,000 / yr"
  }
];

const TARGET_AMOUNT = 590000;
const ANIMATION_DURATION = 1100; // ms

const formatInr = (val) => {
  return "₹ " + Math.round(val).toLocaleString('en-IN') + "+";
};

const outExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const NotchedRoiCard = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [countValue, setCountValue] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return TARGET_AMOUNT;
    }
    return 0;
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);


  useEffect(() => {
    const capabilities = getMotionCapabilities();
    if (!capabilities.allowComplexMotion) {
      setCountValue(TARGET_AMOUNT);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    let rafId = 0;
    let startTime = 0;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / ANIMATION_DURATION, 1);
      const easedProgress = outExpo(progress);
      const currentVal = easedProgress * TARGET_AMOUNT;
      setCountValue(currentVal);

      if (progress < 1) {
        rafId = requestAnimationFrame(animateCount);
      } else {
        setCountValue(TARGET_AMOUNT);
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          rafId = requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasAnimated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) return;
    setSubmitted(true);
  };

  return (
    <motion.div 
      ref={cardRef}
      className={styles.notchedCard}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: MOTION_TOKENS.floema.ease }}
    >
      {/* Background Subtle Radial Glow */}
      <div className={styles.cardGlowOverlay} />

      {/* Top Header Row */}
      <div className={styles.cardHeader}>
        <div className={styles.titleGroup}>
          <h3 className={styles.mainTitle}>With Bluetick Systems</h3>
          <span className={styles.accentSubTitle}>your business saves</span>
        </div>

        <div className={styles.metricGroup}>
          <div className={styles.bigMetric} aria-label="Estimated savings: ₹5,90,000+ per year">
            {formatInr(countValue)}
          </div>
          <div className={styles.metricSubTag}>Est. Annual Savings: <strong>34%</strong></div>
        </div>
      </div>


      {/* Savings Breakdown Table */}
      <div className={styles.breakdownSection}>
        <h4 className={styles.breakdownHeading}>Estimated annual savings by category:</h4>

        <div className={styles.breakdownList}>
          {SAVINGS_BREAKDOWN.map((item, idx) => (
            <div key={idx} className={styles.breakdownRow}>
              <div className={styles.rowLabelGroup}>
                <span className={styles.categoryName}>{item.category}</span>
                <span className={styles.categoryScope}>{item.scope}</span>
              </div>
              <span className={styles.categoryAmount}>{item.amount}</span>
            </div>
          ))}
        </div>

        <p className={styles.benchmarkCaption}>
          * Illustrative composite benchmark calculated for Indian businesses managing 150–500 monthly inquiries. Custom savings and architecture are scoped in your free audit.
        </p>
      </div>


      {/* Embedded Sub-Card Form Container */}
      <div className={styles.embeddedSubCard}>
        {submitted ? (
          <div className={styles.successState}>
            <CheckCircle2 size={24} className={styles.successIcon} />
            <div>
              <h4 className={styles.successTitle}>Custom ROI Audit Scheduled!</h4>
              <p className={styles.successDesc}>Our technical architects will send your personalized ROI breakdown via WhatsApp.</p>
            </div>
          </div>
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.formTextGroup}>
              <h4 className={styles.subCardTitle}>Want to know your exact ROI?</h4>
              <p className={styles.subCardDesc}>
                Enter your work email or WhatsApp below to run a custom ROI analysis with our engineering team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.roiForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="name@company.com / WhatsApp"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className={styles.roiInput}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                <span>RUN ROI AUDIT</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NotchedRoiCard;
