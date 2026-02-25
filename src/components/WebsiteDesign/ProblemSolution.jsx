import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Zap, TrendingUp, MessageCircle } from 'lucide-react';
import styles from './WebsiteDesign.module.css';

const problems = [
    { title: "Generic Templates", desc: "Cookie-cutter designs that look like everyone else — zero brand identity.", icon: <X size={16} /> },
    { title: "Slow Performance", desc: "Heavy code that kills SEO rankings and frustrates users before they convert.", icon: <X size={16} /> },
    { title: "Zero Automation", desc: "Missed leads because you can't be online 24/7 to respond to inquiries.", icon: <X size={16} /> },
];

const solutions = [
    "Custom brand-first design that stands out",
    "React/Vite stack — sub-1s load times",
    "WhatsApp automation running 24/7",
    "Built-in lead capture & CRM sync",
];

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "We map your business goals, target audience, and competitors to build a winning digital strategy before we write a single line of code.",
        features: ["Brand audit", "Competitor analysis", "Conversion goal setting"],
        icon: <Zap size={22} />,
    },
    {
        num: "02",
        title: "Design & Development",
        desc: "Premium UI crafted in Figma, then built on React/Vite for maximum performance. Every element is conversion-optimised.",
        features: ["Mobile-first design", "Sub-1s page load", "WhatsApp integration"],
        icon: <TrendingUp size={22} />,
    },
    {
        num: "03",
        title: "Launch & Automate",
        desc: "We go live, connect WhatsApp API, and set up your 24/7 lead automation system so you never miss a hot prospect.",
        features: ["Automated lead capture", "Instant WhatsApp replies", "Analytics dashboard"],
        icon: <MessageCircle size={22} />,
    },
];

const ProblemSolution = () => {
    return (
        <>
            {/* Stats Bar */}
            <div className={styles.statsBar}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {[
                            { number: "50", suffix: "+", label: "Brands Launched" },
                            { number: "₹12L", suffix: "+", label: "Revenue Generated" },
                            { number: "24/7", suffix: "", label: "Lead Automation" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className={styles.statItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.statNumber}>
                                    {stat.number}<span>{stat.suffix}</span>
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <section className={styles.processSection}>
                <div className="container">
                    <div className={styles.processSplit}>
                        {/* LEFT: Header */}
                        <div className={styles.processLeft}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className={styles.sectionLabel}>The Bluetick Process</div>
                                <h2 className={styles.sectionTitle}>
                                    How we turn websites into growth engines.
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    A proven 3-step system that delivers measurable results — from strategy to perpetual lead automation.
                                </p>
                            </motion.div>

                            <div className={styles.processSteps}>
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        className={styles.processStep}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.15, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.stepNumber}>{step.num}</div>
                                        <div className={styles.stepContent}>
                                            <div className={styles.stepTitle}>{step.title}</div>
                                            <p className={styles.stepDesc}>{step.desc}</p>
                                            <div className={styles.stepFeatures}>
                                                {step.features.map((f, fi) => (
                                                    <div key={fi} className={styles.stepFeature}>
                                                        <Check size={14} className={styles.stepCheck} />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Problem → Solution Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className={styles.processProblemCard}>
                                <div className={styles.problemCardTitle}>❌ What traditional websites look like</div>

                                <div className={styles.problemList}>
                                    {problems.map((p, i) => (
                                        <div key={i} className={styles.problemItem}>
                                            <div className={styles.problemIcon}>{p.icon}</div>
                                            <div className={styles.problemText}>
                                                <h4>{p.title}</h4>
                                                <p>{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.problemDivider} />

                                <div className={styles.solutionTitle}>✓ The Bluetick Standard</div>
                                <div className={styles.solutionList}>
                                    {solutions.map((s, i) => (
                                        <div key={i} className={styles.solutionItem}>
                                            <Check size={16} className={styles.solCheck} />
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProblemSolution;
