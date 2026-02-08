import React from 'react';
import { ArrowRight, Package, Sparkles, Zap } from 'lucide-react';
import styles from './Hero.module.css';
import HeroVisual from './HeroVisual';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <div className={styles.aiBadge}>
                        <Sparkles size={14} className={styles.badgeIcon} />
                        <span className={styles.badgeText}>Powering 500+ Businesses</span>
                    </div>

                    <h1 className={styles.title}>
                        Automate Sales with
                        <span className={styles.highlight}>WhatsApp AI Agents</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Transform WhatsApp into a 24/7 revenue channel. Auto-qualify leads, book meetings, and close deals while you sleep.
                        <br />
                        <span className={styles.apiBadge}>
                            <Zap size={14} className={styles.zapIcon} /> Official Meta Business Partner
                        </span>
                    </p>

                    <div className={styles.ctaGroup}>
                        <a
                            href="https://wa.me/918770440636?text=Hi,%20I%20want%20to%20book%20a%20demo%20for%20AI%20Priya."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                        >
                            Book a Demo <ArrowRight size={20} />
                        </a>
                        <a href="#pricing" className={styles.secondaryBtn}>
                            View Pricing
                        </a>
                    </div>
                </div>

                <div className={styles.visualStage}>
                    <div className={styles.glow} />
                    <HeroVisual />


                </div>
            </div>
        </section>
    );
};

export default Hero;
