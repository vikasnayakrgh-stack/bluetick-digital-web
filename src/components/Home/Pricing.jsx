import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, DURATION_FEATURES } from '../../constants/pricing_faq';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Final & Transparent Pricing</h2>
                    <p className={styles.subtitle}>Minimum subscription: 3 months. No 1–2 month plans available.</p>

                    <div className={styles.toggleWrapper}>
                        <span className={!isAnnual ? styles.activeText : ''}>3 Months (Quarterly)</span>
                        <button
                            className={`${styles.toggle} ${isAnnual ? styles.active : ''}`}
                            onClick={() => setIsAnnual(!isAnnual)}
                        >
                            <div className={styles.switch} />
                        </button>
                        <span className={isAnnual ? styles.activeText : ''}>Annual <span className={styles.discount}>SAVE UP TO 40%</span></span>
                    </div>
                </div>

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
                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>
                                        {isAnnual ? plan.priceAnnual : plan.price}
                                    </span>
                                    <span className={styles.period}>{isAnnual ? '/year' : '/month'}</span>
                                </div>
                                {!isAnnual && (
                                    <div className={styles.upfront}>
                                        <span>Total upfront: <strong>{plan.upfront}</strong></span>
                                        <small>(Billed every 3 months)</small>
                                    </div>
                                )}
                            </div>

                            <ul className={styles.featureList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <Check size={16} className={styles.check} /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`${styles.ctaBtn} ${plan.featured ? styles.featuredBtn : ''}`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.featureMatrix}>
                    <div className={styles.matrixHeader}>
                        <ShieldCheck size={24} color="var(--color-action-primary)" />
                        <h3>Feature Access Dependency</h3>
                        <p>Annual plan unlocks Calls, CRM, Bots, Integrations & Orders Management</p>
                    </div>

                    <div className={styles.matrixGrid}>
                        {(isAnnual ? DURATION_FEATURES.annual : DURATION_FEATURES.monthly).map((feature, idx) => (
                            <div key={idx} className={styles.matrixItem}>
                                {feature.available ? (
                                    <Check size={14} className={styles.matrixCheck} />
                                ) : (
                                    <X size={14} className={styles.matrixCross} />
                                )}
                                <span className={!feature.available ? styles.unavailable : ''}>{feature.name}</span>
                            </div>
                        ))}
                    </div>

                    <p className={styles.finalNote}>
                        💡 <strong>Note:</strong> AI Automation is available only with an active WhatsApp API.
                        Annual plan is highly recommended for automation-first businesses.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
