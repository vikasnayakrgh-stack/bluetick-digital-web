import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
import styles from './HeroVisual.module.css';

const HeroVisual = () => {
    return (
        <div className={styles.wrapper}>
            {/* Main Phone/Interface Mockup */}
            <motion.div
                className={styles.phoneMockup}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={styles.screenHeader}>
                    <div className={styles.userAvatar}>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                    <div className={styles.headerInfo}>
                        <span className={styles.contactName}>New Lead (Qualified)</span>
                        <span className={styles.status}>Online</span>
                    </div>
                </div>

                <div className={styles.screenBody}>
                    <motion.div
                        className={`${styles.message} ${styles.received}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        Hi! I'm interested in the Enterprise plan. Can I get a demo?
                    </motion.div>

                    <motion.div
                        className={`${styles.message} ${styles.sent}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                    >
                        Absolutely! 🚀 I can help with that. What's the best time for you?
                    </motion.div>

                    <motion.div
                        className={`${styles.message} ${styles.received}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.5, duration: 0.5 }}
                    >
                        Tomorrow at 2 PM works.
                    </motion.div>

                    <motion.div
                        className={styles.typingIndicator}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 4.5, repeat: Infinity, duration: 1.5 }}
                    >
                        <span></span><span></span><span></span>
                    </motion.div>
                </div>

                {/* Success Overlay */}
                <motion.div
                    className={styles.successOverlay}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 5, type: "spring", stiffness: 200 }}
                >
                    <CheckCircle2 size={32} className={styles.successIcon} />
                    <span>Demo Booked!</span>
                </motion.div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
                className={`${styles.statCard} ${styles.statRevenue}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <div className={styles.iconBox}><TrendingUp size={20} /></div>
                <div>
                    <span className={styles.statLabel}>Revenue</span>
                    <span className={styles.statValue}>+127%</span>
                </div>
            </motion.div>

            <motion.div
                className={`${styles.statCard} ${styles.statLeads}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <div className={styles.iconBox}><Users size={20} /></div>
                <div>
                    <span className={styles.statLabel}>Active Leads</span>
                    <span className={styles.statValue}>2,405</span>
                </div>
            </motion.div>

            <motion.div
                className={`${styles.statCard} ${styles.statResponse}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
            >
                <div className={styles.iconBox}><Zap size={20} /></div>
                <div>
                    <span className={styles.statLabel}>Response Time</span>
                    <span className={styles.statValue}>&lt; 2s</span>
                </div>
            </motion.div>

            {/* Background Glow */}
            <div className={styles.glowEffect}></div>
        </div>
    );
};

export default HeroVisual;
