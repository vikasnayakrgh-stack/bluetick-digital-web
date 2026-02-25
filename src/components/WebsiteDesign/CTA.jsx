import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import styles from './WebsiteDesign.module.css';

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.ctaOverline}>Ready to grow?</div>
                    <h2 className={styles.ctaHeading}>
                        Stop losing leads today.
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Get a website that works as hard as you do — with 24/7 WhatsApp automation capturing every lead.
                    </p>

                    <div className={styles.ctaActions}>
                        <a
                            href="https://wa.me/916261003050?text=Hi,%20I%20want%20a%20free%20website%20audit%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCtaBtn}
                        >
                            <MessageCircle size={22} />
                            Get Free Website Audit
                        </a>

                        <a href="/#contact" className={styles.secondaryLink}>
                            Or fill out a form <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
