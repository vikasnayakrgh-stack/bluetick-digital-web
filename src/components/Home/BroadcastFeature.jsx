import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Target, Clock } from 'lucide-react';
import styles from './FeatureShowcase.module.css';

const BroadcastFeature = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Broadcast Promotional Messages on WhatsApp <span className="text-gradient">(Officially)</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Enjoy a limitless broadcasting experience on WhatsApp. Reach thousands of customers instantly with high-conversion templates.
                        </p>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3>6+ Powerful Messaging Categories</h3>
                                    <p>Send newsletters, offers, coupon codes, renewals and more—risk-free.</p>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3>Add CTAs to drive 3x conversions</h3>
                                    <p>Turn broadcast lists into conversions with eye-catching CTAs and Quick Reply buttons.</p>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3>Schedule your WhatsApp messages</h3>
                                    <p>Streamline your work. Schedule broadcasts 3 months ahead of time.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => window.open('https://wa.me/916261003050?text=Hi,%20I%20want%20to%20get%20started%20with%20WhatsApp%20Business%20API%20for%20my%20broadcasts.', '_blank')}
                        >
                            Start for FREE →
                        </button>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.mockupWrapper}>
                            <img
                                src="/src/assets/broadcast-woman.png"
                                alt="Broadcast Feature"
                                className={styles.mainImg}
                            />
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className={styles.floatingCard}
                            >
                                <div className={styles.cardHeader}>
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                    <span>Priya Bot</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <p>Limited Edition: Personalised prices!</p>
                                    <p className={styles.small}>Get early DIY threshold pricing on popular items.</p>
                                    <button className={styles.innerBtn}>Buy Now</button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BroadcastFeature;
