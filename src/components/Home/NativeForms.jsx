import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, Send, Zap } from 'lucide-react';
import styles from './FeatureShowcase.module.css';

const NativeForms = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Build WhatsApp Native Forms
                        </h2>
                        <p className={styles.subtitle}>
                            Capture leads & collect useful information directly in WhatsApp. Chatbot reduces friction and boost response rates.
                        </p>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3>Reduce drop-offs compared to external links</h3>
                                    <p>One-tap data submissions for users within the chat flow.</p>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h3>Instant CRM sync for your team</h3>
                                    <p>Lead data is pushed to your database or CRM in real-time.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => window.open('https://wa.me/918770440636?text=Hi,%20I%20want%20to%20build%20WhatsApp%20Native%20Forms%20for%20lead%20capture.', '_blank')}
                        >
                            Build My First Form →
                        </button>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.mockupWrapper}>
                            <div className={styles.formMockup}>
                                <div className={styles.formHeader}>
                                    <span>Lead Information</span>
                                </div>
                                <div className={styles.formBody}>
                                    <div className={styles.formField}>
                                        <label>Name</label>
                                        <div className={styles.fakeInput}>John Doe</div>
                                    </div>
                                    <div className={styles.formField}>
                                        <label>Email</label>
                                        <div className={styles.fakeInput}>john@example.com</div>
                                    </div>
                                    <button className={styles.innerBtn}>Submit</button>
                                </div>
                            </div>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className={styles.floatingCard}
                                style={{ bottom: '-40px', right: '20px' }}
                            >
                                <div className={styles.cardHeader}>
                                    <Zap size={14} className="text-gradient" />
                                    <span>Success State</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <p>Lead Captured! 🚀</p>
                                    <p className={styles.small}>Automatic follow-up scheduled in 2 mins.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NativeForms;
