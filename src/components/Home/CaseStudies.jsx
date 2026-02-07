import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users } from 'lucide-react';
import styles from './CaseStudies.module.css';

const CASE_STUDIES = [
    {
        client: "Snitch E-commerce",
        result: "40% RTO Reduction",
        description: "AI Priya automated COD verification, saving ₹5L/mo in logistics costs.",
        icon: BarChart3
    },
    {
        client: "EdTech Global",
        result: "15x ROI Realized",
        description: "WhatsApp broadcasting with personalized AI follow-ups increased course signups.",
        icon: TrendingUp
    },
    {
        client: "Urban Oasis",
        result: "80% Automation",
        description: "Customer support queries handled entirely by AI Priya without human intervention.",
        icon: Users
    }
];

const CaseStudies = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Real Impact with <span className="text-gradient">AI Priya</span></h2>
                    <p className={styles.subtitle}>Trusted by India's fastest-growing brands to automate sales and support.</p>
                </div>

                <div className={styles.grid}>
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`${styles.card} glass-card`}
                        >
                            <div className={styles.iconBox}>
                                <study.icon size={28} />
                            </div>
                            <h3 className={styles.result}>{study.result}</h3>
                            <p className={styles.client}>{study.client}</p>
                            <p className={styles.description}>{study.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
