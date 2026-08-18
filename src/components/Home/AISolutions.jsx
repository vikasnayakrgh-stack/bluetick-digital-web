import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Bot, MessageSquare, Target, Clock, Zap, Network, Sparkles, CheckCircle2, AlertCircle, Play, ArrowUpRight, ShieldCheck } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import { getMotionCapabilities } from '../../utils/motionCapabilities';
import styles from './AISolutions.module.css';

const TILT_MAX = 8;
const TILT_SPRING = { stiffness: 300, damping: 28 };
const GLOW_SPRING = { stiffness: 180, damping: 22 };


const AI_SOLUTIONS = [
    {
        id: "whatsapp-agent",
        title: "AI WhatsApp Agent",
        category: "Instant Engagement",
        icon: Bot,
        accentColor: "#25D366",
        metrics: "⚡ <30s Lead SLA",
        problem: "Manual WhatsApp replies are slow & prospects drop off before sales team sees them.",
        aiAction: "Intelligent GPT-4o agent responds instantly to customer queries 24/7 in natural Hindi/English.",
        benefit: "Instant customer engagement & zero dropped lead enquiries."
    },
    {
        id: "qualification-engine",
        title: "Lead Qualification Engine",
        category: "Intent Scoring",
        icon: Target,
        accentColor: "#1d4ed8",
        metrics: "📈 98% Intent Accuracy",
        problem: "Sales reps waste 70% of time talking to unqualified, cold prospects with low budget.",
        aiAction: "Scores leads dynamically based on budget, timeline, and intent before alerting owner.",
        benefit: "Sales team talks ONLY to high-intent, hot buying prospects."
    },
    {
        id: "customer-support",
        title: "AI Customer Support",
        category: "Knowledge Base",
        icon: MessageSquare,
        accentColor: "#0284c7",
        metrics: "🛡️ 80%+ FAQ Auto-Resolved",
        problem: "Support teams spend hours answering routine FAQs over and over again.",
        aiAction: "AI handles 80%+ support tickets instantly using company knowledge base docs.",
        benefit: "Reduced support overhead & 24/7 instant customer resolution."
    },
    {
        id: "automated-nurturing",
        title: "Automated Nurturing",
        category: "Follow-up Pipeline",
        icon: Clock,
        accentColor: "#8b5cf6",
        metrics: "📈 3x Conversion Rate",
        problem: "Leads slip through cracks due to forgotten manual follow-up calls.",
        aiAction: "Multi-touch automated follow-up sequences via WhatsApp & Email over 7-14 days.",
        benefit: "Zero lost enquiries & automated prospect conversion."
    },
    {
        id: "demo-scheduler",
        title: "AI Demo Scheduler",
        category: "Calendar Sync",
        icon: Zap,
        accentColor: "#d97706",
        metrics: "⚡ Instant Slot Booking",
        problem: "Back-and-forth scheduling emails delay sales demos by days.",
        aiAction: "AI qualifies prospect and books meeting slot directly into Google Calendar / Calendly.",
        benefit: "Shorter sales cycle & maximum booked sales meetings."
    },
    {
        id: "workflow-automation",
        title: "Workflow Infrastructure",
        category: "System Integration",
        icon: Network,
        accentColor: "#10b981",
        metrics: "🛡️ 100% CRM Data Sync",
        problem: "Disconnected software leads to manual copy-pasting & data entry errors.",
        aiAction: "n8n pipelines connect web forms, WhatsApp, Supabase, CRM & Google Sheets.",
        benefit: "Seamless business operations & error-free atomic data sync."
    }
];

const SIMULATION_PROMPTS = [
    {
        label: "Price Inquiry",
        userMsg: "Hi, what are your website and AI automation package prices?",
        aiReply: "Namaste! Our digital web platforms start at ₹10,000 for business sites, and AI workflow packages are custom scoped. What type of business do you run?",
        intent: "High Buy Intent (96%)",
        tag: "HOT LEAD"
    },
    {
        label: "Demo Slot",
        userMsg: "Can I book a live system demo for tomorrow at 3 PM?",
        aiReply: "Absolutely! Tomorrow at 3:00 PM is open. I've reserved your demo slot and sent calendar invite to your WhatsApp.",
        intent: "Demo Booked (100%)",
        tag: "DEMO BOOKED"
    },
    {
        label: "Custom API",
        userMsg: "Do you integrate n8n workflows with Supabase and Meta WhatsApp WABA?",
        aiReply: "Yes! We build production n8n workflows connected to Supabase PostgreSQL and Meta WABA API with atomic deduplication.",
        intent: "Technical Inquiry (92%)",
        tag: "QUALIFIED"
    }
];

/**
 * Kokonut UI Inspired Spotlight Card Component
 * Features: Magnetic 3D tilt, focus-dim siblings, aurora ambient glow, shimmer sweep, bottom progress line.
 */
function SpotlightCard({ item, dimmed, isProblemMode, onToggleMode, onHoverStart, onHoverEnd }) {
    const Icon = item.icon;
    const cardRef = useRef(null);

    const normX = useMotionValue(0.5);
    const normY = useMotionValue(0.5);

    const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
    const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

    const rotateX = useSpring(rawRotateX, TILT_SPRING);
    const rotateY = useSpring(rawRotateY, TILT_SPRING);
    const glowOpacity = useSpring(0, GLOW_SPRING);

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        normX.set((e.clientX - rect.left) / rect.width);
        normY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseEnter = () => {
        glowOpacity.set(1);
        onHoverStart();
    };

    const handleMouseLeave = () => {
        normX.set(0.5);
        normY.set(0.5);
        glowOpacity.set(0);
        onHoverEnd();
    };

    return (
        <motion.div
            ref={cardRef}
            animate={{
                scale: dimmed ? 0.96 : 1,
                opacity: dimmed ? 0.55 : 1,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 900,
            }}
            className={`${styles.spotlightCard} group`}
        >
            {/* Static Ambient Tint Layer */}
            <div
                aria-hidden="true"
                className={styles.staticTint}
                style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${item.accentColor}18, transparent 70%)`
                }}
            />

            {/* Hover Glow Layer */}
            <motion.div
                aria-hidden="true"
                className={styles.hoverGlow}
                style={{
                    opacity: glowOpacity,
                    background: `radial-gradient(ellipse at 25% 25%, ${item.accentColor}33, transparent 65%)`
                }}
            />

            {/* Diagonal Shimmer Sweep Sweep */}
            <div aria-hidden="true" className={styles.shimmerSweep} />

            {/* Card Content Wrapper */}
            <div className={styles.cardInnerContent}>
                {/* Header */}
                <div className={styles.cardHeader}>
                    <div className={styles.iconBox} style={{ color: item.accentColor, background: `${item.accentColor}18`, boxShadow: `inset 0 0 0 1px ${item.accentColor}30` }}>
                        <Icon size={20} />
                    </div>

                    <button
                        className={styles.modeToggleBtn}
                        onClick={onToggleMode}
                        title="Toggle Problem vs AI Solution"
                    >
                        {isProblemMode ? (
                            <span className={styles.toggleRed}>🔴 Problem View</span>
                        ) : (
                            <span className={styles.toggleGreen}>⚡ AI Solution</span>
                        )}
                    </button>
                </div>

                <span className={styles.categoryLabel}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {/* Card Dynamic Body */}
                <AnimatePresence mode="wait">
                    {isProblemMode ? (
                        <motion.div
                            key="problem"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className={styles.problemBox}
                        >
                            <div className={styles.boxHeaderRed}>
                                <AlertCircle size={14} />
                                <span>OPERATIONAL BOTTLENECK</span>
                            </div>
                            <p className={styles.problemText}>{item.problem}</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className={styles.solutionBox}
                        >
                            <p className={styles.aiActionText}>{item.aiAction}</p>
                            <div className={styles.benefitRow}>
                                <CheckCircle2 size={16} className={styles.benefitCheckIcon} />
                                <span>{item.benefit}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Card Footer Metric Badge */}
                <div className={styles.cardFooter}>
                    <span className={styles.metricBadge} style={{ color: item.accentColor, borderColor: `${item.accentColor}33`, background: `${item.accentColor}12` }}>
                        {item.metrics}
                    </span>
                    <a href="#audit" className={styles.cardLink}>
                        Deploy <ArrowUpRight size={15} className={styles.arrowShift} />
                    </a>
                </div>
            </div>

            {/* Accent Bottom Line */}
            <div
                aria-hidden="true"
                className={styles.accentBottomLine}
                style={{
                    background: `linear-gradient(to right, ${item.accentColor}, transparent)`
                }}
            />
        </motion.div>
    );
}

const AISolutions = () => {
    const [selectedPrompt, setSelectedPrompt] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [activeViewMode, setActiveViewMode] = useState({});
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const typingTimerRef = useRef(null);

    const activePromptObj = SIMULATION_PROMPTS[selectedPrompt];

    const handleSelectPrompt = (idx) => {
        if (idx === selectedPrompt && !isTyping) return;

        if (typingTimerRef.current) {
            clearTimeout(typingTimerRef.current);
            typingTimerRef.current = null;
        }

        setSelectedPrompt(idx);

        const capabilities = getMotionCapabilities();
        if (!capabilities.allowComplexMotion) {
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        typingTimerRef.current = setTimeout(() => {
            setIsTyping(false);
            typingTimerRef.current = null;
        }, 380);
    };

    useEffect(() => {
        return () => {
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
            }
        };
    }, []);

    const toggleCardMode = (id) => {
        setActiveViewMode(prev => ({
            ...prev,
            [id]: prev[id] === 'problem' ? 'solution' : 'problem'
        }));
    };

    return (
        <section id="ai-solutions" className="section section-subtle">
            <div className="container">
                {/* Section Header with Floema Watermark */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.watermarkNumber}>04</span>
                        <span className="section-badge">
                            <Sparkles size={14} /> Intelligence Suite
                        </span>
                        <h2 className="section-title">
                            Core AI & Automation Solutions.
                        </h2>
                        <p className="section-subtitle">
                            Practical business systems designed to solve operational bottlenecks, save time, and boost revenue.
                        </p>
                    </div>
                </FloemaReveal>

                {/* Hero Interactive AI Simulator Card */}
                <FloemaReveal variant="slide-up" delay={0.1}>
                    <div className={styles.simHeroCard}>
                        <div className={styles.simHeader}>
                            <div className={styles.simBadgeGroup}>
                                <span className={styles.simLiveDot} />
                                <span className={styles.simTitle}>Live AI Agent Simulator</span>
                            </div>
                            <span className={styles.simSubtitle}>Select a customer inquiry to test real-time intent scoring:</span>
                        </div>

                        {/* Interactive Prompt Tabs */}
                        <div className={styles.promptTabs}>
                            {SIMULATION_PROMPTS.map((p, idx) => (
                                <button
                                    key={idx}
                                    className={`${styles.promptBtn} ${selectedPrompt === idx ? styles.promptBtnActive : ''}`}
                                    onClick={() => handleSelectPrompt(idx)}
                                >
                                    <Play size={12} fill="currentColor" />
                                    <span>{p.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Animated Chat Simulation Box */}
                        <div className={styles.chatViewport}>
                            <div className={styles.chatStream}>
                                <div className={styles.userBubble}>
                                    <span className={styles.bubbleSender}>Prospect</span>
                                    <p>{activePromptObj.userMsg}</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isTyping ? (
                                        <motion.div
                                            key="typing"
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            transition={{ duration: 0.15 }}
                                            className={styles.typingBubble}
                                        >
                                            <span className={styles.typingSender}>AI Priya Agent is typing</span>
                                            <div className={styles.typingDots} aria-hidden="true">
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={`reply-${selectedPrompt}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25, ease: MOTION_TOKENS.ease.outExpo }}
                                            className={styles.aiBubble}
                                        >
                                            <div className={styles.aiSenderRow}>
                                                <span className={styles.aiSender}>AI Priya Agent</span>
                                                <span className={styles.intentTag}>{activePromptObj.tag}</span>
                                            </div>
                                            <p>{activePromptObj.aiReply}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className={styles.simMetaFooter}>
                                <div className={styles.scorePill}>
                                    <ShieldCheck size={14} className={styles.shieldIcon} />
                                    <span>Calculated Intent: <strong>{activePromptObj.intent}</strong></span>
                                </div>
                                <div className={styles.dispatchPill}>
                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                    <span>CRM Status: <strong>Synced & Dispatched (&lt;18s SLA)</strong></span>
                                </div>
                            </div>

                            <div className={styles.simDirectActionRow}>
                                <span className={styles.simActionHint}>Want to test AI Priya with your own custom questions?</span>
                                <a
                                    href={`https://wa.me/916261003050?text=${encodeURIComponent("Hi Bluetick team, I would like to test the live AI Priya WhatsApp demo for my business.")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.simActionBtn}
                                    aria-label="Test AI Priya live on WhatsApp"
                                >
                                    <MessageSquare size={14} />
                                    <span>Test Live on WhatsApp</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </FloemaReveal>

                {/* Creative Kokonut UI Spotlight Cards Grid */}
                <div className={styles.bentoGrid}>

                    {AI_SOLUTIONS.map((item, idx) => (
                        <FloemaReveal
                            key={item.id}
                            variant="slide-up"
                            delay={0.08 * (idx + 1)}
                        >
                            <SpotlightCard
                                item={item}
                                dimmed={hoveredCardId !== null && hoveredCardId !== item.id}
                                isProblemMode={activeViewMode[item.id] === 'problem'}
                                onToggleMode={() => toggleCardMode(item.id)}
                                onHoverStart={() => setHoveredCardId(item.id)}
                                onHoverEnd={() => setHoveredCardId(null)}
                            />
                        </FloemaReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AISolutions;
