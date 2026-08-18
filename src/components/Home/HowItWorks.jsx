import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import { getMotionCapabilities } from '../../utils/motionCapabilities';
import styles from './HowItWorks.module.css';

const STEPS = [
    {
        step: "01",
        title: "Understand",
        desc: "We audit your business model, customer touchpoints, and manual operational bottlenecks.",
        icon: Compass,
        badge: "Discovery & Audit"
    },
    {
        step: "02",
        title: "Design",
        desc: "We architect your custom website UX, AI agent prompts, and multi-channel workflows.",
        icon: Lightbulb,
        badge: "Architecture"
    },
    {
        step: "03",
        title: "Build & Integrate",
        desc: "We develop production web code, wire n8n pipelines, and sync WhatsApp + CRM.",
        icon: Code2,
        badge: "Engineering"
    },
    {
        step: "04",
        title: "Launch & Scale",
        desc: "We deploy live, monitor interaction metrics, and continuously optimize performance.",
        icon: Rocket,
        badge: "Scale & Growth"
    }
];

const HowItWorks = () => {
    const capabilities = getMotionCapabilities();

    return (
        <section id="how-it-works" className="section">
            <div className="container">
                {/* Section Header with Floema Watermark Number */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.watermarkNumber}>04</span>
                        <h2 className="section-title">
                            Process & Execution
                        </h2>
                        <p className="section-subtitle">
                            From initial workflow audit to live system deployment, we build end-to-end digital infrastructure that turns leads into measurable business outcomes.
                        </p>
                    </div>
                </FloemaReveal>

                <div className={styles.systemTimeline}>
                    {/* SVG Connector Path for Desktop */}
                    {capabilities.allowComplexMotion && (
                        <svg className={styles.desktopConnector} preserveAspectRatio="none" viewBox="0 0 1000 4" fill="none">
                            <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--color-border-light)" strokeWidth="2" strokeDasharray="4 4" />
                            <motion.line
                                x1="0"
                                y1="2"
                                x2="1000"
                                y2="2"
                                stroke="var(--color-brand)"
                                strokeWidth="2.5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.9, ease: MOTION_TOKENS.ease.outExpo }}
                            />
                        </svg>
                    )}

                    {/* Step Cards Grid with Floema Staggered Reveals */}
                    <div className={styles.timelineGrid}>
                        {STEPS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <FloemaReveal
                                    key={idx}
                                    variant="slide-up"
                                    delay={0.08 * (idx + 1)}
                                >
                                    <motion.div
                                        className={styles.timelineStep}
                                        whileHover={{ y: -3 }}
                                        transition={{ duration: 0.2, ease: MOTION_TOKENS.ease.outExpo }}
                                    >
                                        <div className={styles.stepHeader}>
                                            <div className={styles.stepNumBadge}>
                                                <span className={styles.stepNum}>{item.step}</span>
                                                <span className={styles.badgeText}>{item.badge}</span>
                                            </div>
                                            <div className={styles.iconBox}>
                                                <Icon size={18} />
                                            </div>
                                        </div>
                                        <h3 className={styles.stepTitle}>{item.title}</h3>
                                        <p className={styles.stepDesc}>{item.desc}</p>
                                        
                                        <div className={styles.stepFooter}>
                                            <span className={styles.statusIndicator}>
                                                <span className={styles.statusDot} />
                                                Phase {item.step}
                                            </span>
                                            {idx < STEPS.length - 1 && (
                                                <ArrowRight size={14} className={styles.stepArrow} />
                                            )}
                                        </div>
                                    </motion.div>
                                </FloemaReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

