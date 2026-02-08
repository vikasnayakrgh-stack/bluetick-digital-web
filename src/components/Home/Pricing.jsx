import React from 'react';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, Transparent Pricing</h2>
                    <p className={styles.subtitle}>
                        Prices are shown as monthly equivalents for easy understanding. <br />
                        All plans are billed annually (upfront).
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* CARD 1: Growth */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Growth</h3>
                            <p className={styles.tagline}>The foundation that powers business growth</p>
                        </div>

                        <div className={styles.priceBox}>
                            <div className={styles.priceValue}>
                                ₹1,199<span className={styles.period}>/mo</span>
                            </div>
                            <p className={styles.billingText}>Billed annually ₹11,999</p>
                        </div>

                        <div className={styles.featureListWrapper}>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Chat</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Calls</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Contacts</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Broadcast</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Media</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Multi-user access</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Sync App</li>
                            </ul>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => window.open('https://wa.me/918770440636?text=Hi,%20I%20am%20interested%20in%20Growth%20Plan', '_blank')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* CARD 2: AI Growth Engine (Add-On) */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>AI Growth Engine</h3>
                            <p className={styles.tagline}>AI-powered replies, follow-ups & lead qualification on WhatsApp</p>
                        </div>

                        <div className={styles.priceBox}>
                            <div className={styles.priceValue}>
                                ₹1,999<span className={styles.period}>/mo</span>
                            </div>
                            <p className={styles.billingText}>Billed annually ₹14,999</p>
                            <p className={styles.note}>*Requires active WhatsApp API</p>
                        </div>

                        <div className={styles.featureListWrapper}>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />AI WhatsApp Reply Bot</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Lead Qualification</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Auto Follow-ups & Memory</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Supabase / CRM Integration</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />10,000 AI replies per month</li>
                            </ul>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => window.open('https://wa.me/918770440636?text=Hi,%20I%20want%20to%20add%20AI%20Growth%20Engine', '_blank')}
                        >
                            Add to Plan
                        </button>
                    </div>

                    {/* CARD 3: Power Combo */}
                    <div className={`${styles.card} ${styles.featured}`}>
                        <div className={styles.featuredBadge}>Most Businesses Choose This</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Power Combo</h3>
                            <p className={styles.tagline}>Best value for automation-first businesses</p>
                        </div>

                        <div className={styles.priceBox}>
                            <div className={styles.priceValue}>
                                ₹2,999<span className={styles.period}>/mo</span>
                            </div>
                            <p className={styles.billingText}>Billed annually ₹25,000</p>
                        </div>

                        <div className={styles.featureListWrapper}>
                            <h4 className={styles.everythingIncluded}>Everything Included:</h4>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Chat & Calls</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Contacts & Multi-user access</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Broadcast & Media</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Sync App</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />CRM</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Bots & AI Automation</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Orders Management</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Shopify / WooCommerce Integration</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />Connectors & APIs</li>
                                <li className={styles.featureItem}><Check size={18} className={styles.checkIcon} />15,000 AI replies per month</li>
                            </ul>
                        </div>

                        <button
                            className={`${styles.ctaBtn} ${styles.featuredBtn}`}
                            onClick={() => window.open('https://wa.me/918770440636?text=Hi,%20I%20want%20the%20Power%20Combo%20Plan', '_blank')}
                        >
                            Go Pro Now
                        </button>
                    </div>
                </div>

                <div className={styles.footnote}>
                    <p>Monthly or short-term plans are not available.</p>
                    <p>All subscriptions are billed annually.</p>
                    <p>Prices shown are monthly equivalents for clarity.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
