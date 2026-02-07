import React from 'react';
import { Home, ShoppingBag, GraduationCap, Briefcase, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './IndustrySolutions.module.css';

const IndustrySolutions = () => {
    const industries = [
        {
            icon: <Home size={24} />,
            name: 'Real Estate',
            features: ['Site visit automation', 'Project brochure delivery', 'Lead scoring', 'Automatic follow-ups']
        },
        {
            icon: <ShoppingBag size={24} />,
            name: 'E-commerce',
            features: ['COD confirmation bot', 'RTO reduction system', 'Cart recovery flow', 'Feedback collector']
        },
        {
            icon: <GraduationCap size={24} />,
            name: 'Coaching & Training',
            features: ['Webinar automation', 'Payment follow-ups', 'Course delivery', 'Broadcast + reminders']
        },
        {
            icon: <Briefcase size={24} />,
            name: 'Local B2B',
            features: ['Enquiry automation', 'Appointment scheduling', 'Review collector', 'Catalogue bot']
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Industry Solutions</h2>
                <p className={styles.subtitle}>We serve businesses across multiple sectors with tailored automation</p>
                <div className={styles.grid}>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} glass-card`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.header}>
                                <div className={styles.iconBox}>{industry.icon}</div>
                                <h3 className={styles.industryName}>{industry.name}</h3>
                            </div>
                            <ul className={styles.featureList}>
                                {industry.features.map((feature, fIndex) => (
                                    <li key={fIndex} className={styles.featureItem}>
                                        <Check size={16} className={styles.checkIcon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
