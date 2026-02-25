import React, { useState } from 'react';
import { Check, Zap, Star, Sparkles } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = {
        growth: {
            name: 'Growth',
            icon: <Zap size={24} />,
            tagline: 'Complete WhatsApp API Platform for Growing Businesses',
            monthly: { price: '₹1,199', period: '/mo', billing: '' },
            annual: { price: '₹11,999', period: '/year', billing: '~17% OFF', monthlyEquiv: '₹999/mo' },
            features: [
                'WABA Setup & Panel Access',
                'Unlimited Broadcasts',
                'Template Approvals',
                'Multi-Agent Login',
                'Chatbot Builder (Basic)',
                'Green Tick Assistance',
                'Priority Support',
            ],
            cta: 'Get Started',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20am%20interested%20in%20Growth%20Plan',
        },
        ai: {
            name: 'AI Growth Engine',
            icon: <Sparkles size={24} />,
            tagline: 'AI-Powered Automation on Top of Your WhatsApp',
            monthly: { price: '₹1,999', period: '/mo', billing: '' },
            annual: { price: '₹14,999', period: '/year', billing: '~37% OFF', monthlyEquiv: '₹1,249/mo' },
            features: [
                'AI WhatsApp Reply Bot',
                'Lead Qualification',
                'Supabase / CRM Integration',
                'Auto Follow-ups & Memory',
                '10,000 AI Replies/month Included',
            ],
            note: '*Requires active Growth plan',
            addOn: 'Extra 10,000 AI replies → ₹499',
            cta: 'Add to Plan',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20want%20to%20add%20AI%20Growth%20Engine',
        },
        combo: {
            name: 'Power Combo',
            icon: <Star size={24} />,
            tagline: 'Best Value: WhatsApp API + AI Engine Combined',
            badge: 'Most Businesses Choose This',
            monthly: { price: '₹2,999', period: '/mo', billing: '' },
            annual: { price: '₹25,000', period: '/year', billing: '~40% OFF', monthlyEquiv: '₹2,083/mo' },
            features: [
                'Everything in Growth Plan',
                'Everything in AI Growth Engine',
                '10,000 AI Replies/month Included',
                'Priority Onboarding',
            ],
            addOns: [
                'Extra 10k AI replies → ₹499',
                'Extra WhatsApp Number → ₹6,999/year',
            ],
            cta: 'Go Pro Now',
            ctaLink: 'https://wa.me/916261003050?text=Hi,%20I%20want%20the%20Power%20Combo%20Plan',
            featured: true,
        },
    };

    const renderPlan = (plan, key) => {
        const pricing = isAnnual ? plan.annual : plan.monthly;
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
                    {isAnnual ? (
                        <>
                            <div className={styles.priceValue}>
                                {pricing.monthlyEquiv?.replace('/mo', '')}<span className={styles.period}>/mo</span>
                            </div>
                            <p className={styles.billedAnnually}>Billed annually at {pricing.price}</p>
                            {pricing.billing && (
                                <span className={styles.savingsBadge}>{pricing.billing}</span>
                            )}
                        </>
                    ) : (
                        <div className={styles.priceValue}>
                            {pricing.price}<span className={styles.period}>{pricing.period}</span>
                        </div>
                    )}
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

                {plan.addOn && (
                    <div className={styles.addOnSection}>
                        <p className={styles.addOnItem}>➕ {plan.addOn}</p>
                    </div>
                )}
                {plan.addOns && (
                    <div className={styles.addOnSection}>
                        {plan.addOns.map((addOn, i) => (
                            <p className={styles.addOnItem} key={i}>➕ {addOn}</p>
                        ))}
                    </div>
                )}

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
                    <h2 className={styles.title}>Simple, Transparent Pricing</h2>
                    <p className={styles.subtitle}>
                        Choose the plan that fits your business. Save more with annual billing.
                    </p>

                    <div className={styles.toggleWrapper}>
                        <span className={!isAnnual ? styles.activeToggle : ''}>Monthly</span>
                        <button
                            className={styles.toggleBtn}
                            onClick={() => setIsAnnual(!isAnnual)}
                            aria-label="Toggle billing period"
                        >
                            <span className={`${styles.toggleThumb} ${isAnnual ? styles.toggleOn : ''}`}></span>
                        </button>
                        <span className={isAnnual ? styles.activeToggle : ''}>Annual <span className={styles.savingsHint}>(Save up to 40%)</span></span>
                    </div>
                </div>

                <div className={styles.grid}>
                    {renderPlan(plans.growth, 'growth')}
                    {renderPlan(plans.ai, 'ai')}
                    {renderPlan(plans.combo, 'combo')}
                </div>

                <div className={styles.footnote}>
                    <p>All prices are exclusive of applicable taxes.</p>
                    <p>WhatsApp conversation charges are billed separately by Meta.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
