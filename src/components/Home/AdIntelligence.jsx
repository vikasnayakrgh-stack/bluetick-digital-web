import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ShieldCheck, Zap, Users } from 'lucide-react';
import styles from './FeatureShowcase.module.css';

const AdIntelligence = () => {
    return (
        <section className={`${styles.section} ${styles.bgLight}`}>
            <div className="container">
                <div className={`${styles.grid} ${styles.reverse}`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Run AI powered Ads that Click to WhatsApp
                        </h2>
                        <p className={styles.subtitle}>
                            Fast-track Facebook & Instagram ads that land on WhatsApp. Get 3x lead generations & 10x conversions instantly!
                        </p>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <MousePointer2 size={24} />
                                </div>
                                <div>
                                    <h3>Smart Ad Targeting</h3>
                                    <p>Identify high-intent visitors and land them directly to your WhatsApp funnel.</p>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3>Automated Lead Qualification</h3>
                                    <p>AI Chatbot engages with real-time leads as they click, saving hours of manual follow-up effort.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => window.open('https://wa.me/918770440636?text=Hi,%20I%20want%20to%20learn%20more%20about%20Click%20to%20WhatsApp%20Ads%20(CTWA)%20for%20my%20business.', '_blank')}
                        >
                            Explore CTWA →
                        </button>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.mockupWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt="Ad Intelligence"
                                className={styles.mainImg}
                            />
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className={styles.floatingCard}
                                style={{ left: '-40px', right: 'auto' }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.dot} />
                                    <span>Ad Performance</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <p>Conversion Rate: <span className="text-gradient">24.5%</span></p>
                                    <p className={styles.small}>Targeting: E-commerce Founders</p>
                                    <div className={styles.miniChart}>
                                        <div className={styles.bar} style={{ height: '30%' }} />
                                        <div className={styles.bar} style={{ height: '50%' }} />
                                        <div className={styles.bar} style={{ height: '80%' }} />
                                        <div className={styles.bar} style={{ height: '60%' }} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdIntelligence;
