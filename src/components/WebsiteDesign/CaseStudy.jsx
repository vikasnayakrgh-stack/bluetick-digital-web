import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import styles from './WebsiteDesign.module.css';

const CaseStudy = () => {
    return (
        <section className={styles.caseStudySection}>
            <div className="container">
                <div className={styles.caseStudyContent}>
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.badge}>Real Results</div>
                        <h2 className={styles.caseTitle}>
                            How a Local Realtor Got{' '}
                            <span className={styles.textGradient}>42 Hot Leads</span>{' '}
                            in 30 Days
                        </h2>
                        <p className={styles.caseDescription}>
                            Without automation, they missed calls and lost deals. With Bluetick's
                            website + WhatsApp system, they now book site visits automatically —
                            zero manual follow-up needed.
                        </p>

                        <div className={styles.statRow}>
                            <div>
                                <div className={styles.statValue}>42</div>
                                <div className={styles.statLabel}>WhatsApp Leads</div>
                            </div>
                            <div>
                                <div className={styles.statValue}>₹12L</div>
                                <div className={styles.statLabel}>Pipeline Value</div>
                            </div>
                            <div>
                                <div className={styles.statValue}>0 hrs</div>
                                <div className={styles.statLabel}>Manual Follow-up</div>
                            </div>
                        </div>

                        <button className={styles.comingSoonBtn} disabled>
                            View Full Case Study{' '}
                            <span className={styles.comingSoonTag}>Coming Soon</span>
                        </button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className={styles.caseVisual}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop"
                                alt="Modern Luxury Real Estate"
                                className={styles.roundedImage}
                            />
                            <div className={styles.floatStat}>
                                <TrendingUp size={22} color="#4ade80" />
                                <div>
                                    <div className={styles.fsLabel}>Growth</div>
                                    <div className={styles.fsValue}>+300%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
