import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, DURATION_FEATURES } from '../../constants/pricing_faq';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [featureDuration, setFeatureDuration] = useState('annual');

    const durationData = featureDuration === 'annual' ? DURATION_FEATURES.annual : DURATION_FEATURES.shortTerm;

    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, Fixed Pricing</h2>
                    <p className={styles.subtitle}>Choose your base plan. Feature access is determined by subscription duration below.</p>
                </div>

                {/* 1. Pricing Cards */}
                <div className={styles.grid}>
                    {PRICING_PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
                        >
                            {plan.featured && <div className={styles.featuredBadge}>{plan.featuredLabel}</div>}

                            <div className={styles.planHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <p className={styles.tagline}>{plan.tagline}</p>

                                <div className={styles.priceGrid}>
                                    <div className={styles.priceBox}>
                                        <span className={styles.priceLabel}>Monthly</span>
                                        <span className={styles.priceValue}>{plan.price}<small>/mo</small></span>
                                    </div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.priceLabel}>Annual</span>
                                        <span className={styles.priceValue}>{plan.priceAnnual}<small>/yr</small></span>
                                    </div>
                                </div>

                                <div className={styles.billingInfo}>
                                    <p>Min. 3 months commitment</p>
                                    <span className={styles.savingsHighlight}>{plan.savings}</span>
                                </div>
                            </div>

                            <button className={`${styles.ctaBtn} ${plan.featured ? styles.featuredBtn : ''}`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Feature Access Section */}
                <div className={styles.featureAccessSection}>
                    <div className={styles.accessHeader}>
                        <h2 className={styles.accessTitle}>
                            <ShieldCheck size={32} className={styles.accessIcon} />
                            🔒 Feature Access Based on Plan Duration
                        </h2>

                        <div className={styles.accessToggleWrapper}>
                            <span className={featureDuration === 'shortTerm' ? styles.activeToggleText : ''}>Short-Term (3-9 Mo)</span>
                            <button
                                className={`${styles.accessToggle} ${featureDuration === 'annual' ? styles.toggleOn : ''}`}
                                onClick={() => setFeatureDuration(featureDuration === 'annual' ? 'shortTerm' : 'annual')}
                                aria-label="Toggle feature duration"
                            >
                                <div className={styles.toggleBall} />
                            </button>
                            <span className={featureDuration === 'annual' ? styles.activeToggleText : ''}>Annual (12 Months) – Recommended ⭐</span>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={featureDuration}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={styles.durationContent}
                        >
                            <div className={styles.durationInfo}>
                                <h3>{durationData.title} ({durationData.duration})</h3>
                                <p>{durationData.subtext}</p>
                            </div>

                            <div className={styles.featureGroups}>
                                <div className={styles.featureGroup}>
                                    <h4 className={styles.groupTitleIncluded}>Included (✅)</h4>
                                    <ul className={styles.featureList}>
                                        {durationData.included.map((item, idx) => (
                                            <li key={idx} className={styles.featureItem}>
                                                <Check size={18} className={styles.checkIcon} /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {durationData.notIncluded.length > 0 && (
                                    <div className={styles.featureGroup}>
                                        <h4 className={styles.groupTitleNotIncluded}>Not Included (❌)</h4>
                                        <ul className={styles.featureList}>
                                            {durationData.notIncluded.map((item, idx) => (
                                                <li key={idx} className={`${styles.featureItem} ${styles.disabledItem}`}>
                                                    <X size={18} className={styles.crossIcon} /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.accessFooter}>
                        <p>📌 Advanced automation and integrations are unlocked only on annual plans.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
