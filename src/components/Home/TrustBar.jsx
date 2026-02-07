import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustBar.module.css';

const LOGOS = [
    { name: 'Founder 1', id: 1 },
    { name: 'Marketer 2', id: 2 },
    { name: 'Startup 3', id: 3 },
    { name: 'Agency 4', id: 4 },
    { name: 'Brand 5', id: 5 },
    { name: 'SaaS 6', id: 6 },
];

const TrustBar = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <p className={styles.label}>Founders & Marketers Love Us</p>
                    <div className={styles.logoGrid}>
                        {LOGOS.map((logo) => (
                            <motion.div
                                key={logo.id}
                                whileHover={{ opacity: 1, scale: 1.1 }}
                                className={styles.logoItem}
                            >
                                <div className={styles.placeholderLogo}>
                                    <span className={styles.logoIcon}>{logo.name[0]}</span>
                                    {logo.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Added a floating WhatsApp floating icon reference from the image */}
            <div className={styles.whatsappFloat}>
                <div className={styles.pulse} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </div>
        </section>
    );
};

export default TrustBar;
