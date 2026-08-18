import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Bot, MessageCircle, ArrowRight, Check, Info, Cpu, Layers } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './CoreSolutions.module.css';

const SYSTEM_MODES = [
    {
        id: 'full-engine',
        label: 'Connected Full Engine',
        subtitle: 'Website + AI Agent + WhatsApp API + Supabase CRM (Recommended)',
        activePillar: 'both'
    },
    {
        id: 'web-platform',
        label: 'Digital Web Platform',
        subtitle: 'High-Performance E-commerce & Business Web Architecture',
        activePillar: 'pillar1'
    },
    {
        id: 'ai-automation',
        label: 'AI Workflow Automation',
        subtitle: 'Custom n8n Pipelines & Automated Lead Qualification',
        activePillar: 'pillar2'
    }
];

const CoreSolutions = () => {
    const [activeMode, setActiveMode] = useState('full-engine');

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const currentModeObj = SYSTEM_MODES.find(m => m.id === activeMode) || SYSTEM_MODES[0];

    return (
        <section id="solutions" className="section">
            <div className="container">
                {/* Section Header with Floema Watermark Number */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.watermarkNumber}>01</span>
                        <h2 className="section-title">
                            Two pillars. One connected business engine.
                        </h2>
                        <p className="section-subtitle">
                            Whether you need a high-converting web platform, automated business workflows, or a unified ecosystem — we engineer custom solutions built around your exact growth pipeline.
                        </p>
                    </div>
                </FloemaReveal>

                {/* Connected System Mode Selector */}
                <div className={styles.modeSelectorWrapper}>
                    <div className={styles.modeTabs}>
                        {SYSTEM_MODES.map((mode) => {
                            const isActive = activeMode === mode.id;
                            return (
                                <button
                                    key={mode.id}
                                    className={`${styles.modeTab} ${isActive ? styles.modeTabActive : ''}`}
                                    onClick={() => setActiveMode(mode.id)}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePillarModeGlider"
                                            className={styles.modeGlider}
                                            transition={MOTION_TOKENS.spring.snappy}
                                        />
                                    )}
                                    <span className={styles.modeLabel}>{mode.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    
                    <motion.div 
                        className={styles.modeSubtitleBox}
                        key={activeMode}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: MOTION_TOKENS.ease.outExpo }}
                    >
                        <Layers size={14} className={styles.modeIcon} />
                        <span>{currentModeObj.subtitle}</span>
                    </motion.div>
                </div>

                <div className={styles.asymmetricGrid}>
                    {/* Pillar 01: Websites & E-commerce */}
                    <motion.div
                        className={`${styles.pillarCard} ${currentModeObj.activePillar === 'pillar1' || currentModeObj.activePillar === 'both' ? styles.pillarCardHighlighted : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: MOTION_TOKENS.ease.outExpo }}
                        whileHover={{ y: -4 }}
                    >
                        <div className={styles.pillarHeader}>
                            <div className={styles.tagRow}>
                                <span className={styles.pillarTag}>PILLAR 01</span>
                                {(currentModeObj.activePillar === 'pillar1' || currentModeObj.activePillar === 'both') && (
                                    <span className={styles.activeTag}>● System Active</span>
                                )}
                            </div>
                            <div className={styles.titleRow}>
                                <Globe size={24} className={styles.pillarIcon} />
                                <h3 className={styles.pillarTitle}>Websites & E-commerce</h3>
                            </div>
                            <p className={styles.pillarDesc}>
                                High-performance digital platforms designed to attract, engage and convert visitors into qualified business leads.
                            </p>
                        </div>

                        <div className={styles.pricingGrid}>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Business Websites</span>
                                <span className={styles.itemPrice}>from ₹10,000</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Premium Profile Websites</span>
                                <span className={styles.itemPrice}>from ₹20,000</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Small E-commerce Stores</span>
                                <span className={styles.itemPrice}>from ₹30,000</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Large Catalog Platforms</span>
                                <span className={styles.itemPrice}>from ₹50,000</span>
                            </motion.div>
                        </div>

                        <a href="#audit?req=new_website" className={`${styles.pillarBtn} btn btn-outline`}>
                            Explore Web Solutions <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Pillar 02: AI Automation (Featured with Spotlight) */}
                    <motion.div
                        className={`${styles.pillarCard} ${styles.pillarFeatured} ${currentModeObj.activePillar === 'pillar2' || currentModeObj.activePillar === 'both' ? styles.pillarCardHighlightedDark : ''}`}
                        onMouseMove={handleMouseMove}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1, ease: MOTION_TOKENS.ease.outExpo }}
                        whileHover={{ y: -4 }}
                        style={{
                            position: 'relative',
                            backgroundImage: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)`,
                        }}
                    >
                        <div className={styles.pillarHeader}>
                            <div className={styles.tagRow}>
                                <span className={styles.pillarTagDark}>PILLAR 02 · SYSTEM AUTOMATION</span>
                                {(currentModeObj.activePillar === 'pillar2' || currentModeObj.activePillar === 'both') && (
                                    <span className={styles.activeTagDark}>● AI Pipeline Active</span>
                                )}
                            </div>
                            <div className={styles.titleRow}>
                                <Bot size={24} className={styles.pillarIconBlue} />
                                <h3 className={styles.pillarTitle}>AI & Workflow Automation</h3>
                            </div>
                            <p className={styles.pillarDesc}>
                                Custom n8n workflows, LLM qualification agents, and automated CRM pipelines that eliminate manual lead follow-up.
                            </p>
                        </div>

                        <div className={styles.capabilityList}>
                            <motion.div className={styles.capItem} whileHover={{ x: 4 }}>
                                <Check size={16} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.capTitle}>AI WhatsApp Agents</span>
                                    <span className={styles.capSub}>24/7 lead qualification & instant FAQ answers</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.capItem} whileHover={{ x: 4 }}>
                                <Check size={16} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.capTitle}>Lead Intelligence & Scoring</span>
                                    <span className={styles.capSub}>Real-time intent detection & automated CRM sync</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.capItem} whileHover={{ x: 4 }}>
                                <Check size={16} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.capTitle}>Business Workflow Integrations</span>
                                    <span className={styles.capSub}>Custom n8n pipelines connecting Web, Supabase & WhatsApp</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className={styles.customPriceNote}>
                            <span>Custom pricing scoped to your business workflow</span>
                        </div>

                        <a href="#audit?req=ai_automation" className={`${styles.pillarBtn} btn btn-primary`}>
                            Explore AI Automation <ArrowRight size={16} />
                        </a>

                    </motion.div>
                </div>

                {/* Mandatory Scoping Disclaimer */}
                <div className={styles.disclaimerBox}>
                    <Info size={16} className={styles.infoIcon} />
                    <span>
                        Final pricing depends on scope, features, integrations, design requirements, catalog size and business requirements.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CoreSolutions;
