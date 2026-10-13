import React from 'react';
import { Check, Zap, Star, Sparkles } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
    const plans = {
        growth: {
            name: 'Growth Plan',
            icon: <Zap size={24} />,
            tagline: 'Complete WhatsApp Business API Platform for Growing Teams',
            price: '₹11,999',
            period: '/year',
            features: [
                'Official Meta WABA API Onboarding',
                'Multi-Agent Shared Team Inbox',
                'Unlimited Broadcast Campaigns',
                'Template Message Approvals',
                'Green Tick Verification Assistance',
                'Manual Annual Renewal (No Auto-Debit)',
            ],
            cta: 'Get Growth Plan',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20am%20interested%20in%20Growth%20Plan',
        },
        ai: {
            name: 'AI Growth Engine',
            icon: <Sparkles size={24} />,
            tagline: 'Autonomous AI Sales & Qualification Layer on WhatsApp',
            price: '₹14,999',
            period: '/year',
            note: '*Requires active Growth plan (₹11,999/yr) or get both with Power Combo (₹25,000/yr)',
            features: [
                '24/7 Autonomous AI WhatsApp Responses',
                'Sub-30s Lead Qualification & Intent Triage',
                'Atomic Supabase / CRM Integration',
                'Automated Follow-ups & Conversation Memory',
                'BYOK Model: Direct LLM Billing with Zero Markup',
            ],
            cta: 'Deploy AI Engine',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20want%20to%20add%20AI%20Growth%20Engine',
        },
        combo: {
            name: 'Power Combo',
            icon: <Star size={24} />,
            tagline: 'Best Value: WhatsApp API Platform + AI Engine Combined',
            badge: 'Best Value',
            price: '₹25,000',
            period: '/year',
            note: 'WhatsApp Platform + AI Growth Engine',
            features: [
                'Everything in Growth Plan (WABA + Team Inbox)',
                'Everything in AI Growth Engine (24/7 Sales Agent)',
                'Priority Onboarding & Workflow Setup',
                'BYOK Model: Direct LLM Billing with Zero Markup',
                'Manual Annual Renewal (No Auto-Debit)',
                'Note: Does not include website development',
            ],
            cta: 'Choose Power Combo',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20want%20the%20Power%20Combo%20Plan',
            featured: true,
        },
    };

    const renderPlan = (plan, key) => {
        const isFeatured = plan.featured;

        return (
            <div className={`${styles.card} ${isFeatured ? styles.featured : ''}`} key={key}>
                {plan.badge && <div className={styles.featuredBadge}>{plan.badge}</div>}
                <div className={styles.cardHeader}>
                    <div className={styles.planIcon}>{plan.icon}</div>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.tagline}>{plan.tagline}</p>
                </div>

                <div className={styles.priceBox}>
                    <div className={styles.priceValue}>
                        {plan.price}<span className={styles.period}>{plan.period}</span>
                    </div>
                    <p className={styles.billedAnnually}>Billed annually (Manual renewal)</p>
                    {plan.note && <p className={styles.note}>{plan.note}</p>}
                </div>

                <div className={styles.featureListWrapper}>
                    <ul className={styles.featureList}>
                        {plan.features.map((feature, i) => (
                            <li className={styles.featureItem} key={i}>
                                <Check size={18} className={styles.checkIcon} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className={`${styles.ctaBtn} ${isFeatured ? styles.featuredBtn : ''}`}
                    onClick={() => window.open(plan.ctaLink, '_blank')}
                >
                    {plan.cta}
                </button>
            </div>
        );
    };

    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, Transparent Subscriptions</h2>
                    <p className={styles.subtitle}>
                        Predictable annual investments with manual renewal and zero hidden lock-in.
                    </p>
                </div>

                <div className={styles.grid}>
                    {renderPlan(plans.growth, 'growth')}
                    {renderPlan(plans.ai, 'ai')}
                    {renderPlan(plans.combo, 'combo')}
                </div>

                <div className={styles.footnote}>
                    <p>All plans are billed annually with manual renewal (no surprise auto-debits).</p>
                    <p>Customer pays their chosen LLM provider directly under the BYOK model with zero agency markup.</p>
                    <p>WhatsApp conversation charges are billed separately by Meta at official pass-through rates.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
