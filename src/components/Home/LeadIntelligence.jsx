import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, ShieldCheck } from 'lucide-react';
import styles from './LeadIntelligence.module.css';

const INTELLIGENCE_FEATURES = [
    {
        icon: Brain,
        title: "Intent Consolidator",
        description: "Hierarchical intent detection that prioritizes human escalation over sales queries.",
        badge: "v7.1 Logic"
    },
    {
        icon: Target,
        title: "Dynamic Scoring",
        description: "Leads are scored in real-time based on interaction quality, not just volume.",
        badge: "v6.1 Engine"
    },
    {
        icon: Zap,
        title: "Atomic Transactions",
        description: "Zero data loss with atomic database operations for lead persistence.",
        badge: "Supabase"
    },
    {
        icon: ShieldCheck,
        title: "Anti-Spam Shield",
        description: "Advanced deduplication prevents token waste and alert fatigue.",
        badge: "Active"
    }
];

const LeadIntelligence = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>The Brain Behind <span className="text-gradient">AI Priya</span></h2>
                        <p className={styles.subtitle}>
                            Most bots are just decision trees. AI Priya is a sophisticated sales engine built on
                            deterministic logic and LLM reasoning.
                        </p>

                        <div className={styles.featureList}>
                            {INTELLIGENCE_FEATURES.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={styles.featureItem}
                                >
                                    <div className={styles.iconBox}>
                                        <feature.icon size={24} />
                                    </div>
                                    <div className={styles.featureInfo}>
                                        <div className={styles.headerRow}>
                                            <h3>{feature.title}</h3>
                                            <span className={styles.badge}>{feature.badge}</span>
                                        </div>
                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.codeCanvas}>
                            <pre className={styles.codeSnippet}>
                                <code>{`// Intent Consolidator v7.1
if (sentiment === 'frustrated') {
  escalateTo('human_manager');
  triggerAlert('CRITICAL');
} else if (intent === 'buy_intent') {
  tagLead('HOT');
  notifyOnly(); // No alert spam
}`}</code>
                            </pre>

                            <div className={styles.intelligenceCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.dot} />
                                    <span>Real-time Lead Scoring</span>
                                </div>
                                <div className={styles.scoreCircle}>
                                    <svg viewBox="0 0 36 36" className={styles.circularChart}>
                                        <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className={styles.circle} strokeDasharray="95, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className={styles.percentage}>95%</text>
                                    </svg>
                                </div>
                                <div className={styles.cardFooter}>
                                    <span className={styles.status}>Status: Hot Lead</span>
                                    <span className={styles.action}>Action: Book Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadIntelligence;
