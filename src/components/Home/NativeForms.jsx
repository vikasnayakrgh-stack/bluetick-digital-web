import React from 'react';
import { FileText, Database, Check } from 'lucide-react';
import styles from './NativeForms.module.css';

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
                            {/* iPhone Frame */}
                            <div className={styles.phoneFrame}>

                                {/* Notch / Buttons */}
                                <div className={styles.buttonLeft1}></div>
                                <div className={styles.buttonLeft2}></div>
                                <div className={styles.buttonLeft3}></div>
                                <div className={styles.buttonRight}></div>

                                {/* Screen Content */}
                                <div className={styles.screenContent}>

                                    {/* WhatsApp Header */}
                                    <div className={styles.whatsappHeader}>
                                        <div className={styles.avatar}>B</div>
                                        <div className={styles.headerInfo}>
                                            <h3>Bluetick Bot</h3>
                                            <p>Online</p>
                                        </div>
                                    </div>

                                    {/* Chat Area */}
                                    <div className={styles.chatArea}>
                                        <div className={styles.chatPattern}></div>

                                        {/* Bot Message */}
                                        <div className={styles.botMessage}>
                                            <p>Hi there! 👋 ready to book your demo? Please fill out this quick form.</p>
                                            <span className={styles.messageTime}>10:00 AM</span>
                                        </div>

                                        {/* THE FORM CARD (WhatsApp Flow UI) */}
                                        <div className={styles.formCard}>

                                            {/* Form Header */}
                                            <div className={styles.formCardHeader}>
                                                <span className={styles.formTitle}>Demo Request</span>
                                                <div className={styles.headerDot}></div>
                                            </div>

                                            {/* Form Fields */}
                                            <div className={styles.formBody}>

                                                {/* Name Input */}
                                                <div className={styles.inputGroup}>
                                                    <label>Name</label>
                                                    <input type="text" defaultValue="Rahul Sharma" className={styles.inputField} />
                                                </div>

                                                {/* Dropdown */}
                                                <div className={styles.inputGroup}>
                                                    <label>Service</label>
                                                    <div className={styles.selectWrapper}>
                                                        <select className={styles.selectField}>
                                                            <option>WhatsApp API</option>
                                                            <option>Chatbots</option>
                                                        </select>
                                                        <div className={styles.selectArrow}>▼</div>
                                                    </div>
                                                </div>

                                                {/* Chips */}
                                                <div className={styles.inputGroup}>
                                                    <label>Team Size</label>
                                                    <div className={styles.chipGroup}>
                                                        <button className={`${styles.chip} ${styles.chipActive}`}>1-10</button>
                                                        <button className={styles.chip}>11-50</button>
                                                    </div>
                                                </div>

                                                {/* Submit Button */}
                                                <button className={styles.submitBtn}>
                                                    Send Request
                                                </button>

                                            </div>
                                        </div>

                                        {/* Success Toast (Floating) */}
                                        <div className={styles.successToast}>
                                            <div className={styles.toastIcon}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <div className={styles.toastContent}>
                                                <p>Captured! 🚀</p>
                                                <p>Sent to CRM</p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bottom Bar (iOS Home Indicator) */}
                                    <div className={styles.homeIndicator}></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NativeForms;
