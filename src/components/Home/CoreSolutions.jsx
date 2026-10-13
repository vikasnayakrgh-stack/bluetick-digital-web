import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Bot, MessageCircle, ArrowRight, Check, Info, Cpu, Layers } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './CoreSolutions.module.css';

const SYSTEM_MODES = [
    {
        id: 'full-engine',
        label: 'Connected Full Engine',
        subtitle: 'Website + AI Agent + WhatsApp API + Supabase CRM (Recommended Bundle)',
        activePillar: 'both'
    },
    {
        id: 'web-platform',
        label: 'I Need a Website',
        subtitle: 'High-Performance E-commerce & Business Web Architecture',
        activePillar: 'pillar1'
    },
    {
        id: 'whatsapp-automation',
        label: 'WhatsApp API',
        subtitle: 'Official Meta WhatsApp Business API, 24/7 Bots & Team Inboxes',
        activePillar: 'both'
    },
    {
        id: 'ai-automation',
        label: 'Automate Business Tasks',
        subtitle: 'Custom n8n Pipelines, Lead Intelligence & Automated Qualification',
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
            <div id="pricing" tabIndex="-1" style={{ position: 'relative', top: '-80px' }} />
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
                                <span className={styles.itemPrice}>from ₹9,999</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Premium Websites</span>
                                <span className={styles.itemPrice}>from ₹19,999</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>E-commerce Stores</span>
                                <span className={styles.itemPrice}>from ₹29,999</span>
                            </motion.div>
                            <motion.div className={styles.pricingItem} whileHover={{ x: 4, background: 'var(--color-bg-subtle)' }}>
                                <span className={styles.itemTitle}>Custom / Enterprise</span>
                                <span className={styles.itemPrice}>Custom quote</span>
                            </motion.div>
                        </div>

                        <div className={styles.pillarActions}>
                            <Link to="/solutions/websites" className={`${styles.pillarBtn} btn btn-outline`}>
                                View Website Services <ArrowRight size={16} />
                            </Link>
                            <a href="/#audit?req=new_website" className={styles.quoteLink}>
                                Get a Website Quote →
                            </a>
                        </div>
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

                        <div className={styles.pillarActions}>
                            <Link to="/solutions/ai-automation" className={`${styles.pillarBtn} btn btn-primary`}>
                                View AI Automation Services <ArrowRight size={16} />
                            </Link>
                            <a href="/#audit?req=ai_automation" className={styles.quoteLinkDark}>
                                Get an Automation Quote →
                            </a>
                        </div>

                    </motion.div>
                </div>

                {/* Quick Strip for WhatsApp and Full Engine bundles */}
                <div className={styles.servicesQuickstrip}>
                    <div className={styles.quickstripItem}>
                        <MessageCircle size={18} className={styles.quickstripIconGreen} />
                        <span>Looking for WhatsApp Business API setup?</span>
                        <Link to="/solutions/ai-automation" className={styles.quickstripLink}>Explore WhatsApp Solutions</Link>
                        <span className={styles.quickstripDivider}>·</span>
                        <a href="/#audit?req=whatsapp_automation" className={styles.quickstripQuoteLink}>Get a WhatsApp Quote</a>
                    </div>
                    <div className={styles.quickstripItem}>
                        <Cpu size={18} className={styles.quickstripIconBlue} />
                        <span>Need a Website + AI + WhatsApp combined?</span>
                        <a href="/#audit?req=website_plus_automation" className={styles.quickstripBundleLink}>Get Connected Engine Quote →</a>
                    </div>
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
