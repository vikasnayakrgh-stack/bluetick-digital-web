import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactForm.module.css';

import { supabase } from '../../supabaseClient';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = {
            name: e.target.name.value,
            phone: e.target.whatsapp.value,
            business_type: e.target.business.value,
            source: 'web_form',
            created_at: new Date().toISOString()
        };

        try {
            console.log('Attempting to submit form data:', formData);
            const { data, error } = await supabase
                .from('leads')
                .insert([formData])
                .select();

            if (error) {
                console.error('Supabase Insert Error:', error);
                throw error;
            }

            console.log('Supabase Insert Success:', data);
            e.target.reset(); // Reset form after successful submission
            setStatus('success');
        } catch (error) {
            console.error('Full Error Object:', error);
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
