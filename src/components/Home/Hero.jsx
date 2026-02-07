import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Play } from 'lucide-react';
import ChatSimulator from './ChatSimulator';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                {/* Left Column: Content */}
                <div className={styles.content}>
                    <motion.div
                        className={styles.aiBadge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className={styles.badgeText}>Meet AI Priya — Your New Sales Expert 💎</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Official WhatsApp Business API <br />
                        Partner for <span className={styles.highlight}>AI Sales Automation</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        AI Priya doesn't just reply—she sells. From intent detection to demo booking, automate your entire sales funnel on the world's most popular messaging app.
                    </motion.p>

                    <motion.div
                        className={styles.ctaGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.a
                            href="https://wa.me/918770440636?text=Hi,%20I%20am%20interested%20in%20AI%20Priya%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Free <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="#demo"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Play size={18} /> Watch Demo
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className={styles.apiBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Zap size={16} className={styles.zapIcon} />
                        <span>Official **WhatsApp Business API** Partner</span>
                    </motion.div>
                </div>

                {/* Right Column: Interactive Simulator */}
                <div className={styles.visualStage}>
                    <div className={styles.glow} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <ChatSimulator />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
