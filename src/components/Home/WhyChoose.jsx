import React from 'react';
import { Zap, Bot, CircleDollarSign, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhyChoose.module.css';

const WhyChoose = () => {
    const reasons = [
        {
            icon: <Zap size={24} />,
            title: 'Speed First',
            description: 'Setup your complete automation in just 30 minutes. Live in hours, not days.'
        },
        {
            icon: <Bot size={24} />,
            title: 'AI-Powered',
            description: 'In-house n8n workflows that competitors don\'t have. Smarter automation.'
        },
        {
            icon: <CircleDollarSign size={24} />,
            title: 'Best Price',
            description: 'Starting from ₹1,200/month. 40% cheaper than competitors with more features.'
        },
        {
            icon: <Fingerprint size={24} />,
            title: 'All-in-One',
            description: 'API + Chatbot + Automation in one plan. No hidden costs.'
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Why Choose Bluetick Digital?</h2>
                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} glass-card`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconBox}>{reason.icon}</div>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardText}>{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
