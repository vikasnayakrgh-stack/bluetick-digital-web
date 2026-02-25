import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Smartphone, Globe, ShieldAlert, MessageSquare } from 'lucide-react';
import styles from './ImportantDetails.module.css';

const ImportantDetails = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Few things to know <span className="text-gradient">before you get started</span></h2>
                    <p className={styles.subtitle}>Important details →</p>
                </div>

                <div className={styles.grid}>
                    {/* Meta Business Account Card */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardHeader}>
                            <Globe size={32} className={styles.icon} />
                            <h3>For Meta Business Account</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <CheckCircle size={18} className={styles.checkIcon} />
                                <span>Make sure you have an <strong>official business website</strong> to proceed smoothly.</span>
                            </li>
                            <li>
                                <ShieldAlert size={18} className={styles.checkIcon} />
                                <span>Learn about allowed businesses in <strong>WhatsApp Commerce Policy</strong>. Many businesses like medicines, arms, political marketing or any illegal products etc. are not authorized to use Meta APIs.</span>
                            </li>
                            <li>
                                <CheckCircle size={18} className={styles.checkIcon} />
                                <span>If your Meta Business Manager is <strong>not verified</strong>, you can send proactive messages to only <strong>50 unique contacts</strong> every 24 hours.</span>
                            </li>
                            <li>
                                <CheckCircle size={18} className={styles.checkIcon} />
                                <span>If not verified, you can always send <strong>unlimited replies</strong> to user-initiated conversations.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* WhatsApp Business Number Card */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardHeader}>
                            <Smartphone size={32} className={styles.icon} />
                            <h3>For WhatsApp Business Number</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <AlertTriangle size={18} className={styles.alertIcon} />
                                <span>You must have a phone number that <strong>does not have a WhatsApp Account</strong>.</span>
                            </li>
                            <li>
                                <CheckCircle size={18} className={styles.checkIcon} />
                                <span>If you have a WhatsApp account, you can take a backup of your existing WhatsApp data and then <strong>delete your WhatsApp Account</strong>.</span>
                            </li>
                            <li>
                                <ShieldAlert size={18} className={styles.alertIcon} />
                                <span>If a WhatsApp number is blocked or reported spam, Bluetick digital has no control over it and Meta and its policies decide to reactivate or permanently block the linked WhatsApp number.</span>
                            </li>
                            <li>
                                <MessageSquare size={18} className={styles.checkIcon} />
                                <span>Meta has introduced <strong>'Frequency Limit'</strong> for Broadcasting messages. Users receive limited marketing messages to avoid spam. Utility and authentication messages will differ.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className={styles.ctaWrapper}>
                    <button
                        className={styles.ctaBtn}
                        onClick={() => window.open('https://wa.me/916261003050?text=Hi,%20I%20have%20read%20the%20important%20details%20and%20want%20to%20connect%20my%20WhatsApp.', '_blank')}
                    >
                        Connect your WhatsApp →
                    </button>
                    <p className={styles.note}>Ready to get started? Let's verify your eligibility.</p>
                </div>
            </div>
        </section>
    );
};

export default ImportantDetails;
