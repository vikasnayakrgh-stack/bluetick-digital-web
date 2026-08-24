import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ContactForm.module.css';
import { supabase } from '../../supabaseClient';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = {
            name: (e.target.name.value || '').trim(),
            phone: (e.target.whatsapp.value || '').trim(),
            business_type: e.target.business.value,
            source: 'web_form',
            consent_agreed: true,
            consent_version: 'v2.0',
            consent_timestamp: new Date().toISOString(),
            created_at: new Date().toISOString()
        };

        try {
            const { error } = await supabase
                .from('leads')
                .insert([formData]);

            if (error) {
                console.error('Lead submission failed');
                throw error;
            }

            e.target.reset(); // Reset form after successful submission
            setStatus('success');
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successMessage}
            >
                <CheckCircle2 size={64} className={styles.successIcon} />
                <h2>Request Received!</h2>
                <p>AI Priya will contact you on WhatsApp within 5 minutes. Get ready for a demo!</p>
                <button
                    onClick={() => setStatus('idle')}
                    className={styles.resetBtn}
                >
                    Send another request
                </button>
            </motion.div>
        );
    }

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2>Ready to meet <span className="text-gradient">AI Priya</span>?</h2>
                        <p>Book a personalized demo and see how we can automate your sales.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                autoComplete="name"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="whatsapp">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                placeholder="+91 98765 43210"
                                required
                                autoComplete="tel"
                                inputMode="tel"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="business">Business Type</label>
                            <select id="business" name="business" className={styles.select} required>
                                <option value="">Select your industry</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="edtech">EdTech</option>
                                <option value="realestate">Real Estate</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`${styles.submitBtn} ${status === 'loading' ? styles.loading : ''}`}
                        >
                            {status === 'loading' ? 'Processing...' : (
                                <>
                                    Book My Demo <Send size={18} />
                                </>
                            )}
                        </button>

                        <p style={{ textAlign: 'center', margin: '0.65rem 0 0 0', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.45 }}>
                            By submitting this form, you agree to our <Link to="/terms" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Terms of Service</Link> and acknowledge our <Link to="/privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Privacy Policy</Link>.
                        </p>

                        <p className={styles.footerNote}>
                            🛡️ No credit card required. Official WhatsApp API security.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
