import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Quote, ShieldCheck } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './WhyBluetick.module.css';

const COMPARISONS = [
    {
        aspect: "Team Structure & Access",
        traditional: "Big agency pitch team disappears; work handed off to junior interns",
        bluetick: "2-person senior team. Direct founder engineering with zero junior handoff",
    },
    {
        aspect: "Systems Architecture",
        traditional: "Disconnected tools (WordPress plugins, manual copy-pasting to CRM)",
        bluetick: "Unified connected engine (Sub-second React + Official Meta WABA + AI + Supabase)",
    },
    {
        aspect: "Lead Response Time",
        traditional: "Hours or days delay; off-hours inquiries go cold before morning",
        bluetick: "< 30 Seconds automated qualification & Google Calendar booking 24/7",
    },
    {
        aspect: "Engagement Capacity",
        traditional: "Overloaded agency handling 30+ low-budget projects simultaneously",
        bluetick: "Strictly 4 client engagements per quarter. Full focus & continuous optimization",
    }
];

const WhyBluetick = () => {
    return (
        <section className={styles.whySectionWrapper}>
            <div className={styles.notchedBannerContainer}>
                <div className={styles.bgOverlay} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Section Header with Floema Watermark */}
                    <FloemaReveal variant="slide-up" delay={0}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.watermarkNumber}>05</span>
                            <span className="section-badge section-badge-dark font-mono">
                                <ShieldCheck size={13} /> SENIOR TECH PARTNER STANDARD
                            </span>
                            <h2 className={styles.sectionTitleDark}>
                                Technology should simplify your business, not add complexity.
                            </h2>
                            <p className={styles.sectionSubtitleDark}>
                                Why growing Indian businesses choose Bluetick Digital as their dedicated engineering partner.
                            </p>
                        </div>
                    </FloemaReveal>

                    {/* Centered High-Impact Quote */}
                    <FloemaReveal variant="slide-up" delay={0.1}>
                        <div className={styles.quoteBlock}>
                            <Quote size={28} className={styles.quoteIcon} />
                            <blockquote className={styles.quoteText}>
                                “We don’t have junior developers or account managers. When you partner with Bluetick, the senior founders who architect your system are the engineers who write the code and take full responsibility for your results.”
                            </blockquote>
                            <div className={styles.quoteAuthorMeta}>
                                <span className={styles.authorName}>Vikas Nayak</span>
                                <span className={styles.authorRole}>Founder & Lead Systems Architect · Bluetick Digital</span>
                            </div>
                        </div>
                    </FloemaReveal>

                    {/* Side-by-Side System Comparison Grid */}
                    <div className={styles.comparisonGrid}>
                        {/* Left: Traditional Agency Model (Fragmented) */}
                        <FloemaReveal variant="slide-left" delay={0.15} className={styles.colWrapper}>
                            <div className={styles.traditionalCol}>
                                <div className={styles.colHeader}>
                                    <span className={styles.colBadgeMuted}>Legacy Approach</span>
                                    <h3 className={styles.colTitleMuted}>Traditional Agency</h3>
                                    <p className={styles.colSubMuted}>Junior handoffs, fragmented tools & slow delivery</p>
                                </div>

                                <div className={styles.comparisonList}>
                                    {COMPARISONS.map((item, idx) => (
                                        <div key={idx} className={styles.tradCard}>
                                            <XCircle size={16} className={styles.xIcon} />
                                            <div>
                                                <span className={styles.aspectLabel}>{item.aspect}</span>
                                                <p className={styles.tradText}>{item.traditional}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FloemaReveal>

                        {/* Right: Bluetick Digital System (Aligned Order & Scale) */}
                        <FloemaReveal variant="slide-right" delay={0.2} className={styles.colWrapper}>
                            <div className={styles.bluetickCol}>
                                <div className={styles.colHeader}>
                                    <span className={styles.colBadgeActive}>Senior Engineering Partner</span>
                                    <h3 className={styles.colTitleActive}>Bluetick Standard</h3>
                                    <p className={styles.colSubActive}>Founder-led, selective capacity, connected engines</p>
                                </div>

                                <div className={styles.comparisonList}>
                                    {COMPARISONS.map((item, idx) => (
                                        <div 
                                            key={idx} 
                                            className={styles.blueCard}
                                        >
                                            <CheckCircle2 size={16} className={styles.checkIcon} />
                                            <div>
                                                <span className={styles.aspectLabelActive}>{item.aspect}</span>
                                                <p className={styles.blueText}>{item.bluetick}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FloemaReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBluetick;
