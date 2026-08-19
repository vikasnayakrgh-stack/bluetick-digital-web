import React from 'react';
import { ShoppingBag, Factory, Rocket, Building2, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './IndustrySolutions.module.css';

const INDUSTRIES = [
    {
        slug: 'ecommerce',
        icon: ShoppingBag,
        name: 'E-commerce Brands',
        type: 'Primary Industry',
        desc: 'Turn storefront traffic into verified buyers with instant automated support.',
        useCases: [
            '24/7 AI product recommendations & customer support',
            'Automated COD confirmation to eliminate fake orders',
            'WhatsApp abandoned cart recovery sequences',
            'Order tracking & automated review collection'
        ]
    },
    {
        slug: 'manufacturing',
        icon: Factory,
        name: 'Manufacturers',
        type: 'Primary Industry',
        desc: 'Qualify B2B buyers and capture custom manufacturing RFQs automatically.',
        useCases: [
            'B2B RFQ & catalog request automation',
            'AI lead qualification (specs, quantity, budget)',
            'Instant CRM lead routing to regional sales team',
            'Automated brochure & company profile delivery'
        ]
    },
    {
        slug: 'startups',
        icon: Rocket,
        name: 'Startups & Tech',
        type: 'Primary Industry',
        desc: 'Launch product landing pages & automate demo bookings.',
        useCases: [
            'High-converting landing page & website design',
            'Automated demo qualification & calendar scheduling',
            'CRM sync (HubSpot, Salesforce, Supabase)',
            'Multi-touch follow-up nurturing workflows'
        ]
    },
    {
        slug: 'local-business',
        icon: Building2,
        name: 'Local Businesses & Real Estate',
        type: 'Secondary Industry',
        desc: 'Capture site visits, appointments & service requests 24/7.',
        useCases: [
            'Property brochure delivery & site visit booking',
            'Instant service quotation & booking requests',
            'Location & direction auto-responder',
            'Automated post-service review collection'
        ]
    }
];

const IndustrySolutions = () => {
    return (
        <section id="industries" className="section section-subtle">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Building2 size={14} /> Industry Expertise
                    </span>
                    <h2 className="section-title">
                        Solutions built for your specific industry.
                    </h2>
                    <p className="section-subtitle">
                        We don't build generic websites. We design industry-specific digital engines tailored to your customer journey.
                    </p>
                </div>

                <div className={styles.grid}>
                    {INDUSTRIES.map((ind, index) => {
                        const Icon = ind.icon;
                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <span className={styles.indType}>{ind.type}</span>
                                        <h3 className={styles.indName}>{ind.name}</h3>
                                    </div>
                                </div>

                                <p className={styles.indDesc}>{ind.desc}</p>

                                <ul className={styles.useCaseList}>
                                    {ind.useCases.map((useCase, uIdx) => (
                                        <li key={uIdx} className={styles.useCaseItem}>
                                            <Check size={16} className={styles.checkIcon} />
                                            <span>{useCase}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(15, 23, 42, 0.06)' }}>
                                    <Link 
                                        to={`/industries/${ind.slug}`} 
                                        style={{ 
                                            display: 'inline-flex', 
                                            alignItems: 'center', 
                                            gap: '0.45rem', 
                                            fontSize: '0.85rem', 
                                            fontWeight: 700, 
                                            color: 'var(--color-brand)',
                                            minHeight: '44px' 
                                        }}
                                    >
                                        <span>View Industry Blueprint</span>
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
