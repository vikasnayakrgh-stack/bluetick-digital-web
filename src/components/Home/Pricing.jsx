import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../../constants/pricing_faq';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = React.useState(false);

    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, Transparent Pricing</h2>
                    <p className={styles.subtitle}>Choose the plan that fits your business scale.</p>

                    <div className={styles.toggleWrapper}>
                        <span>Monthly</span>
                        <button
                            className={`${styles.toggle} ${isAnnual ? styles.active : ''}`}
                            onClick={() => setIsAnnual(!isAnnual)}
                        >
                            <div className={styles.switch} />
                        </button>
                        <span>Annual <span className={styles.discount}>SAVE 20%</span></span>
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
                            <div className={styles.planHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>
                                        {isAnnual ? plan.priceAnnual : plan.price}
                                    </span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                            </div>

                            <ul className={styles.featureList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <span className={styles.check}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`${styles.ctaBtn} ${plan.featured ? styles.featuredBtn : ''}`}
                            >
                                {plan.cta}
                            </button>

                            {plan.featured && <div className={styles.featuredBadge}>BEST VALUE</div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
