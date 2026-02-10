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

    // Pricing Constants (INR) - Updated Feb 2026
    const RATES = {
        MARKETING: 0.863,
        UTILITY: 0.115,
        AUTHENTICATION: 0.115,
        SERVICE: 0 // Free within 24hrs
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
                <title>WhatsApp API Pricing India 2026 | Calculator & Meta Rates</title>
                <meta name="description" content="Check the latest Meta WhatsApp API rates for India (Feb 2026). Calculate Marketing (~₹0.86), Utility (~₹0.115), and Service message costs instantly." />
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [{
                    "@type": "Question",
                    "name": "What is the cost of 1 WhatsApp Marketing message in India in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Meta rate for marketing messages in India is approximately ₹0.863 per delivered message as of February 2026."
                    }
                  }, {
                    "@type": "Question",
                    "name": "Is the WhatsApp Business API free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, while the first 1,000 service conversations per month are often free, businesses pay per conversation for Marketing (~₹0.863), Utility (~₹0.115), and Authentication (~₹0.115) categories."
                    }
                  }]
                }
                `}
                </script>
            </Helmet>

            <div className={styles.card}>
                <h1 className={styles.title}>WhatsApp Business API Pricing India (2026 Updated)</h1>
                <p className={styles.subtitle}>Calculate Your Monthly WhatsApp Marketing Budget</p>

                <div className={styles.directAnswer}>
                    <p>
                        <strong>Quick Answer:</strong> As of <strong>February 2026</strong>, Meta's estimated base charges for WhatsApp API in India are <strong>~₹0.863 per Marketing message</strong> and <strong>~₹0.115 per Utility/Auth message</strong>. Service messages initiated by customers remain free within a 24-hour window.
                    </p>
                </div>

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

            {/* How It Works Section */}
            <section className={styles.howItWorks}>
                <h2 className={styles.sectionTitle}>How WhatsApp Automation Works</h2>
                <div className={styles.stepGrid}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <h3 className={styles.stepTitle}>Get Verified</h3>
                        <p className={styles.stepDesc}>We help you verify your Facebook Business Manager and apply for the official WhatsApp Business API.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.stepTitle}>Connect Intelligence</h3>
                        <p className={styles.stepDesc}>Link your number to Bluetick's AI dashboard. Customize your AI Sales Agent, "Priya," to handle leads.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.stepTitle}>Start Broadcasts</h3>
                        <p className={styles.stepDesc}>Upload your customer list and send personalized offers (Marketing) or updates (Utility) at official Meta rates.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>4</div>
                        <h3 className={styles.stepTitle}>Automate & Scale</h3>
                        <p className={styles.stepDesc}>AI handles incoming queries 24/7. You only intervene for high-value closures. Pay Meta directly for usage.</p>
                    </div>
                </div>
            </section>

            {/* SEO / FAQ Section */}
            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What is the cost of 1 WhatsApp Marketing message in India in 2026?</h3>
                    <p className={styles.faqAnswer}>As of February 2026, the official Meta rate for a marketing conversation in India is approximately <strong>₹0.863</strong> per delivered message. This applies to promotional offers, product launches, and discount codes.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>Are there any hidden costs with Bluetick Digital?</h3>
                    <p className={styles.faqAnswer}>No. You pay a fixed monthly subscription for the Bluetick platform (starting at ₹2,999/mo) and pay Meta directly for conversation charges. We do not markup Meta's message rates.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What is the difference between Utility and Service conversations?</h3>
                    <p className={styles.faqAnswer}><strong>Utility (~₹0.115)</strong> messages are transaction updates like "Order Confirmed" or "Payment Received". <strong>Service (Free)</strong> conversations are user-initiated threads where you reply to a customer's query within 24 hours.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>Can I get a Green Tick on my WhatsApp number?</h3>
                    <p className={styles.faqAnswer}>Yes! To get the Green Tick, you need a verified Facebook Business Manager, 2-step verification, and significant press coverage (3-5 articles). Bluetick Digital assists all annual plan clients with the Green Tick application process for free.</p>
                </div>
            </section>
        </div>
    );
};

export default WhatsAppCalculator;
