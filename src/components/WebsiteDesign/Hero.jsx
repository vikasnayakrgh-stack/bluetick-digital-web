import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import styles from './WebsiteDesign.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBg}>
                <div className={styles.heroGrid} />
            </div>

            <div className={styles.heroInner}>
                <div className="container">
                    <div className={styles.heroContent}>
                        {/* Text Side */}
                        <motion.div
                            className={styles.textContent}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            <motion.div
                                className={styles.heroTag}
                                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                <span className={styles.heroTagDot} />
                                Website + WhatsApp Automation
                            </motion.div>

                            <motion.h1
                                className={styles.heroHeading}
                                variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            >
                                Digital experiences
                                <span className={styles.heroAccent}>that sell.</span>
                            </motion.h1>

                            <motion.p
                                className={styles.heroSubtitle}
                                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                We craft world-class websites integrated with WhatsApp automation.
                                Turn passive visitors into active leads, 24/7 — automatically.
                            </motion.p>

                            <motion.div
                                className={styles.heroActions}
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }}
                            >
                                <a
                                    href="https://wa.me/916261003050?text=Hi,%20I%20want%20a%20premium%20website."
                                    className={styles.heroCta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Start Your Project <ArrowRight size={18} />
                                </a>
                                <a href="#packages" className={styles.heroCtaGhost}>
                                    View Packages
                                </a>
                            </motion.div>

                            <motion.div
                                className={styles.trustBadge}
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }}
                            >
                                <span className={styles.greenDot} />
                                Trusted by 50+ growing businesses
                            </motion.div>
                        </motion.div>

                        {/* Visual Side */}
                        <motion.div
                            className={styles.visualContent}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            <div className={styles.showcaseCard}>
                                <img
                                    src="/assets/hero-visual.gif"
                                    alt="Website Design and Automation Demo"
                                    className={styles.heroImage}
                                    loading="eager"
                                />
                            </div>
                            <div className={styles.showcaseGlow} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollArrow}>
                <ChevronDown size={20} />
            </div>
        </section>
    );
};

export default Hero;
