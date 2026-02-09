import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Tools.module.css';
import { Link } from 'react-router-dom';

const GreenTickChecker = () => {
    const [businessType, setBusinessType] = useState('ecommerce');
    const [volume, setVolume] = useState('low'); // low, mid, high, enterprise
    const [hasPress, setHasPress] = useState(false);
    const [result, setResult] = useState(null);

    const checkEligibility = () => {
        // Logic:
        // Eligible (High): Volume > 100k OR (Volume > 10k AND Press Coverage)
        // Eligible (Moderate): Volume > 10k OR Specific Categories (Edu/Gov/Finance)
        // Not Yet: Volume < 1k AND No Press

        let score = 0;
        
        // Volume score
        if (volume === 'enterprise') score += 5; // > 100k
        if (volume === 'high') score += 3; // 10k - 100k
        if (volume === 'mid') score += 1; // 1k - 10k
        
        // Press score
        if (hasPress) score += 3;

        // Category boost
        if (['education', 'finance', 'government'].includes(businessType)) score += 1;

        let likelihood = 'low';
        let badgeClass = styles.lowBadge;
        let containerClass = styles.lowChance;
        let message = "Currently, your chances are low. WhatsApp typically requires visible brand presence and higher messaging volumes.";

        if (score >= 5) {
            likelihood = 'high';
            badgeClass = styles.highBadge;
            containerClass = styles.highChance;
            message = "Great news! You have a high chance of getting a Green Tick. Your volume and brand presence are strong signals.";
        } else if (score >= 3) {
            likelihood = 'medium';
            badgeClass = styles.mediumBadge;
            containerClass = styles.mediumChance;
            message = "You have a moderate chance. Increasing your messaging volume or securing notable press coverage will help.";
        }

        setResult({ likelihood, badgeClass, containerClass, message });
    };

    return (
        <div className={styles.toolsContainer}>
            <Helmet>
                <title>WhatsApp Green Tick Eligibility Checker | Bluetick Digital</title>
                <meta name="description" content="Check if your business is eligible for the verified WhatsApp Green Tick. Simple tool by Bluetick Digital." />
            </Helmet>

            <div className={styles.card}>
                <h1 className={styles.title}>Green Tick Eligibility Checker</h1>
                <p className={styles.subtitle}>Find out if your business qualifies for the verified badge</p>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Business Type</label>
                    <select 
                        className={styles.rangeInput} // Reuse generic input style optionally or define select style
                        style={{ height: '40px', padding: '0 1rem' }}
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                    >
                        <option value="ecommerce">E-commerce / Retail</option>
                        <option value="education">Education</option>
                        <option value="finance">Finance / Banking</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Monthly Message Volume</label>
                    <select 
                        className={styles.rangeInput}
                        style={{ height: '40px', padding: '0 1rem' }}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    >
                        <option value="low">&lt; 1,000 messages</option>
                        <option value="mid">1,000 - 10,000 messages</option>
                        <option value="high">10,000 - 100,000 messages</option>
                        <option value="enterprise">&gt; 100,000 messages</option>
                    </select>
                </div>

                <div className={styles.inputGroup} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input 
                        type="checkbox" 
                        id="press"
                        checked={hasPress} 
                        onChange={(e) => setHasPress(e.target.checked)}
                        style={{ width: '20px', height: '20px' }}
                    />
                    <label htmlFor="press" style={{ marginBottom: 0 }}>
                        We have notable press coverage or news articles
                    </label>
                </div>

                <button 
                    onClick={checkEligibility} 
                    className={styles.ctaButton} 
                    style={{ width: '100%', marginTop: '1rem' }}
                >
                    Check Eligibility
                </button>

                {result && (
                    <div className={`${styles.resultCard} ${result.containerClass}`}>
                        <span className={`${styles.resultBadge} ${result.badgeClass}`}>
                            {result.likelihood.toUpperCase()} CHANCE
                        </span>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{result.message}</p>
                        
                        <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.5)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Recommended Next Steps:</h3>
                            <ul className={styles.stepList} style={{ marginTop: 0 }}>
                                <li><strong>1. Verify Facebook Business Manager:</strong> Ensure your Meta Business Suite is fully verified.</li>
                                <li><strong>2. Enable 2FA:</strong> Security is a requirement for the Green Tick.</li>
                                <li><strong>3. Reach Tier 2:</strong> Try to scale your traffic to 10k messages/day quality tier.</li>
                                <li><strong>4. Apply with Expert Help:</strong> We can guide you through the application to maximize success.</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/contact" className={styles.ctaButton}>
                                Apply for Green Tick Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                
                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What is the WhatsApp Green Tick?</h3>
                    <p className={styles.faqAnswer}>The Green Tick is a verification badge that appears next to your business name, signaling to customers that you are an authentic, verified brand. It builds trust and increases message open rates.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>Is the Green Tick free?</h3>
                    <p className={styles.faqAnswer}>Applying for the Green Tick through Meta is free, but you must be using the WhatsApp Business API. Agencies like Bluetick Digital can help manage the application process for you.</p>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What documents are required?</h3>
                    <p className={styles.faqAnswer}>You primarily need business registration documents (gst, incorporation certificate) and proof of brand presence (links to 3-5 notable news articles or press coverage).</p>
                </div>
            </section>
        </div>
    );
};

export default GreenTickChecker;
