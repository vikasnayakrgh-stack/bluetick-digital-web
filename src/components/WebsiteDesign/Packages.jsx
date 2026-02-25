import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, Plus } from 'lucide-react';
import styles from './WebsiteDesign.module.css';

const packages = [
    {
        name: "Starter",
        priceDisplay: "9,999",
        currency: "₹",
        desc: "Perfect for small businesses starting their digital journey.",
        features: [
            "1–3 Page Website",
            "Contact Form",
            "WhatsApp Button",
            "Basic SEO Setup",
            "7 Days Delivery",
        ],
        cta: "Book Starter Audit",
        popular: false,
    },
    {
        name: "Growth",
        priceDisplay: "19,999",
        currency: "₹",
        desc: "For businesses ready to scale aggressively with automation.",
        features: [
            "5–7 Pages Website",
            "WhatsApp API Integration",
            "Lead Capture Automation",
            "Basic CRM Setup",
            "Speed Optimization",
            "15 Days Delivery",
        ],
        cta: "Book Growth Audit",
        popular: true,
    },
    {
        name: "Pro",
        priceDisplay: "39,999+",
        currency: "₹",
        desc: "Complete digital dominance — website, automation & funnel.",
        features: [
            "Custom Premium Design",
            "WhatsApp API + AI Chatbot",
            "n8n Lead Automation",
            "Email + WhatsApp Follow-ups",
            "Payment Integration",
            "Sales Funnel Setup",
        ],
        cta: "Book Pro Strategy",
        popular: false,
    },
];

const addons = [
    { name: "WhatsApp API", price: "₹3,000 setup + ₹1,200/mo" },
    { name: "AI Lead Nurture", price: "₹3,499/mo" },
    { name: "SEO Monthly", price: "₹5,000/mo" },
];

const Packages = () => {
    return (
        <section id="packages" className={styles.packagesSection}>
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>Pricing</div>
                    <h2 className={styles.sectionTitle}>
                        Simple, profitable packages.
                    </h2>
                    <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
                        Choose the engine that fits your growth goals. No hidden fees.
                    </p>
                </motion.div>

                <div className={styles.pricingGrid}>
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.pricingCard} ${pkg.popular ? styles.popularCard : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}

                            <div className={styles.cardHeader}>
                                <div className={styles.planName}>{pkg.name}</div>
                                <div className={styles.priceRow}>
                                    <span className={styles.priceCurrency}>{pkg.currency}</span>
                                    <span className={styles.priceValueRaw}>{pkg.priceDisplay}</span>
                                </div>
                                <p className={styles.cardDesc}>{pkg.desc}</p>
                            </div>

                            <div className={styles.cardDivider} />

                            <ul className={styles.featureListCard}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className={styles.featureCheck} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/916261003050?text=Hi,%20I'm%20interested%20in%20the%20${pkg.name}%20website%20package.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={pkg.popular ? styles.primaryPricingBtn : styles.outlinePricingBtn}
                            >
                                <MessageSquare size={18} />
                                {pkg.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.addonsSection}>
                    <h4 className={styles.addonsTitle}>Optional Add-ons</h4>
                    <div className={styles.addonsGrid}>
                        {addons.map((addon, index) => (
                            <div key={index} className={styles.addonItem}>
                                <div className={styles.addonIcon}>
                                    <Plus size={18} />
                                </div>
                                <span className={styles.addonName}>{addon.name}</span>
                                <span className={styles.addonPrice}>— {addon.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;
