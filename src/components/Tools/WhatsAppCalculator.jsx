import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Tools.module.css';
import { Link } from 'react-router-dom';

const WhatsAppCalculator = () => {
    const [marketingCount, setMarketingCount] = useState(1000);
    const [utilityCount, setUtilityCount] = useState(500);
    const [authCount, setAuthCount] = useState(100);
    const [serviceCount, setServiceCount] = useState(200);
    const [totalCost, setTotalCost] = useState(0);

    // Pricing Constants (INR)
    const RATES = {
        MARKETING: 0.86,
        UTILITY: 0.11,
        AUTHENTICATION: 0.11,
        SERVICE: 0 // Free
    };

    useEffect(() => {
        const marketingCost = marketingCount * RATES.MARKETING;
        const utilityCost = utilityCount * RATES.UTILITY;
        const authCost = authCount * RATES.AUTHENTICATION;
        const serviceCost = serviceCount * RATES.SERVICE;

        setTotalCost(marketingCost + utilityCost + authCost + serviceCost);
    }, [marketingCount, utilityCount, authCount, serviceCount]);

    return (
        <div className={styles.toolsContainer}>
            <Helmet>
                <title>WhatsApp API Pricing Calculator India | Bluetick Digital</title>
                <meta name="description" content="Calculate your monthly WhatsApp Business API costs in India. Accurate estimator for Marketing, Utility, and Service conversations." />
            </Helmet>

            <div className={styles.card}>
                <h1 className={styles.title}>WhatsApp API Price Calculator</h1>
                <p className={styles.subtitle}>Estimate your monthly investment based on Meta's latest pricing for India</p>

                {/* Marketing Input */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        <div>
                            Marketing Conversations
                            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'normal', color: '#64748b' }}>Promotions, offers, updates (Rate: ₹{RATES.MARKETING})</span>
                        </div>
                        <span className={styles.valueDisplay}>{marketingCount.toLocaleString()}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={marketingCount}
                        onChange={(e) => setMarketingCount(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                </div>

                {/* Utility Input */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        <div>
                            Utility Conversations
                            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'normal', color: '#64748b' }}>Order updates, transactional (Rate: ₹{RATES.UTILITY})</span>
                        </div>
                        <span className={styles.valueDisplay}>{utilityCount.toLocaleString()}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={utilityCount}
                        onChange={(e) => setUtilityCount(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                </div>

                {/* Authentication Input */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        <div>
                            Authentication Conversations
                            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'normal', color: '#64748b' }}>OTPs, login verification (Rate: ₹{RATES.AUTHENTICATION})</span>
                        </div>
                        <span className={styles.valueDisplay}>{authCount.toLocaleString()}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={authCount}
                        onChange={(e) => setAuthCount(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                </div>

                {/* Service Input */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        <div>
                            Service Conversations
                            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'normal', color: '#64748b' }}>User-initiated support (Rate: FREE)</span>
                        </div>
                        <span className={styles.valueDisplay}>{serviceCount.toLocaleString()}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={serviceCount}
                        onChange={(e) => setServiceCount(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                </div>

                {/* Result Section */}
                <div className={styles.resultBox}>
                    <div className={styles.resultTitle}>Estimated Monthly Cost</div>
                    <div className={styles.resultValue}>
                        ₹{totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>

                    <Link to="/contact" className={styles.ctaButton}>
                        Get This API with Bluetick Digital
                    </Link>
                </div>
            </div>

            {/* SEO / FAQ Section */}
            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What is the WhatsApp Business API?</h3>
                    <p className={styles.faqAnswer}>It is a powerful tool designed for medium to large businesses to communicate with customers at scale. Unlike the regular app, it supports automation, chatbots, and integration with CRM systems.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>How do I get a Green Tick?</h3>
                    <p className={styles.faqAnswer}>To get the Green Tick, you need a verified Facebook Business Manager account, 2-step verification enabled, and a notable brand presence (press coverage). Bluetick Digital can assist you with this application.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>Is the WhatsApp API free?</h3>
                    <p className={styles.faqAnswer}>The API itself is not free. Costs are based on conversation categories (Marketing, Utility, Authentication, Service). The first 1,000 service conversations per month are typically free.</p>
                </div>
            </section>
        </div>
    );
};

export default WhatsAppCalculator;
