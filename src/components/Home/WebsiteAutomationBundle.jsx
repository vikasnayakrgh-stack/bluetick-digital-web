import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Bot, MessageCircle, Database } from 'lucide-react';
import NotchedRoiCard from '../Common/NotchedRoiCard';
import FloemaReveal from '../Common/FloemaReveal';
import Strands from '../Common/Strands';
import styles from './WebsiteAutomationBundle.module.css';

const BUNDLE_NODES = [
    {
        id: 'website',
        label: 'High-Speed Website',
        sub: '01 · Digital Front Door',
        icon: Globe,
        colorClass: styles.iconBlue
    },
    {
        id: 'ai',
        label: 'AI Intent Agent',
        sub: '02 · 24/7 Qualification',
        icon: Bot,
        colorClass: styles.iconCyan
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp API',
        sub: '03 · Instant Engagement',
        icon: MessageCircle,
        colorClass: styles.iconGreen
    },
    {
        id: 'crm',
        label: 'Supabase CRM Sync',
        sub: '04 · Automated Pipeline',
        icon: Database,
        colorClass: styles.iconPurple
    }
];

const WebsiteAutomationBundle = () => {
    return (
        <section id="system-bundle" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className="section-badge">
                            <Sparkles size={14} /> System Savings & ROI Engine
                        </span>
                        <h2 className="section-title">
                            Quantifiable Business Growth.
                        </h2>
                        <p className="section-subtitle">
                            We don't just build websites — we build automated business engines that eliminate manual overhead and generate measurable ROI.
                        </p>
                    </div>
                </FloemaReveal>

                {/* 4-Component Convergence Pipeline */}
                <FloemaReveal variant="slide-up" delay={0.1}>
                    <div className={styles.convergencePipeline}>
                        {BUNDLE_NODES.map((node, idx) => {
                            const Icon = node.icon;
                            return (
                                <React.Fragment key={node.id}>
                                    <motion.div
                                        className={styles.nodeBox}
                                        whileHover={{ y: -3, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                                    >
                                        <div className={styles.nodeIconWrap}>
                                            <Icon size={20} className={node.colorClass} />
                                        </div>
                                        <div className={styles.nodeTextWrap}>
                                            <span className={styles.nodeSub}>{node.sub}</span>
                                            <span className={styles.nodeLabel}>{node.label}</span>
                                        </div>
                                    </motion.div>

                                    {idx < BUNDLE_NODES.length - 1 && (
                                        <div className={styles.plusWrap}>
                                            <span className={styles.plusSymbol} aria-hidden="true">+</span>
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </FloemaReveal>

                {/* Minimal WebGL Strands Ambient Background behind Notched ROI Card */}
                <div style={{ marginTop: '2.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: -20, pointerEvents: 'none', zIndex: 0, opacity: 0.8 }}>
                        <Strands
                            colors={["#1d4ed8", "#38bdf8", "#10b981"]}
                            count={2}
                            speed={0.25}
                            amplitude={0.7}
                            thickness={0.4}
                            glow={1.8}
                            opacity={0.35}
                            scale={1.2}
                        />
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <NotchedRoiCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteAutomationBundle;
