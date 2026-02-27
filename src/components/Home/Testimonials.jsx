import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const REVIEWS = [
    {
        name: "Rajat Kumar",
        role: "Founder, Arish Krafts Home",
        content: "Bluetick Digital cut our RTO by 30% in just the first month. Their COD verification workflow is a game changer for Indian D2C brands.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajat"
    },
    {
        name: "Ananya Sharma",
        role: "Director, Skin Health",
        content: "Our sales team now only talks to qualified leads. The AI Bot handles the first 5 minutes of qualification perfectly. Highly recommended!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
    },
    {
        name: "Vikram Singh",
        role: "CEO, TechSolutions",
        content: "The WhatsApp broadcasting tool is incredibly intuitive. We've seen a 20% increase in campaign response rates since switching.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Trusted by Indian SMBs</h2>
                    <p className={styles.subtitle}>Join 500+ businesses automating their growth with AI Priya.</p>
                </div>

                <div className={styles.grid}>
                    {REVIEWS.map((review, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`${styles.card} glass-card`}
                        >
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-yellow-400)" color="var(--color-yellow-400)" />)}
                            </div>
                            <p className={styles.content}>"{review.content}"</p>
                            <div className={styles.author}>
                                <img src={review.avatar} alt={review.name} className={styles.avatar} loading="lazy" decoding="async" />
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{review.name}</h4>
                                    <p className={styles.role}>{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
