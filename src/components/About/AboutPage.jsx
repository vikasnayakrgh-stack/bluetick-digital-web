import React from 'react';
import { ShieldCheck, Target, Cpu, Users2, ArrowRight } from 'lucide-react';
import SEO from '../Common/SEO';

const ABOUT_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "AboutPage",
            "@id": "https://bluetickdigital.in/about#webpage",
            "url": "https://bluetickdigital.in/about",
            "name": "About Bluetick Digital",
            "description": "Learn about Bluetick Digital — an AI-powered Digital Transformation Partner headquartered in Raipur, serving Pan-India clients with high-performance websites and AI business automation."
        },
        {
            "@type": "Person",
            "@id": "https://bluetickdigital.in/#founder",
            "name": "Vikas Nayak",
            "jobTitle": "Founder & Principal Systems Architect",
            "worksFor": {
                "@type": "Organization",
                "@id": "https://bluetickdigital.in/#organization",
                "name": "Bluetick Digital"
            },
            "sameAs": [
                "https://www.linkedin.com/in/vikasnayak/"
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://bluetickdigital.in/about" }
            ]
        }
    ]
};

const AboutPage = () => {
    return (
        <>
            <SEO
                title="About Us | AI Digital Transformation Partner"
                description="Learn about Bluetick Digital — a technology company based in Raipur (HQ) serving Pan-India clients with high-performance websites and AI business automation."
                keywords="About Bluetick Digital, Digital Transformation Partner, AI Business Systems, Vikas Nayak"
                canonical="https://bluetickdigital.in/about"
                structuredData={ABOUT_SCHEMA}
            />
            <section className="section" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">
                            <Users2 size={14} /> Technology Company
                        </span>
                        <h1 className="section-title">
                            We build digital systems that <span className="text-gradient">simplify business growth.</span>
                        </h1>
                        <p className="section-subtitle">
                            Bluetick Digital is an AI-powered Digital Transformation Partner for growing businesses in India. We combine modern web design, custom AI agents, and workflow automation.
                        </p>
                    </div>

                    <div className="grid-3" style={{ marginBottom: '4rem' }}>
                        <div className="card">
                            <Target size={32} color="var(--color-brand-600)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Business-First Focus</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)', lineHeight: '1.6' }}>
                                We measure success by lead quality, conversion rates, and operational time saved for your team.
                            </p>
                        </div>

                        <div className="card">
                            <Cpu size={32} color="var(--color-accent-500)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Engineering Quality</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)', lineHeight: '1.6' }}>
                                High-performance React code, atomic Supabase transactions, n8n orchestrations, and Meta API security.
                            </p>
                        </div>

                        <div className="card">
                            <ShieldCheck size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Long-Term Partner</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)', lineHeight: '1.6' }}>
                                Headquartered in Raipur, Chhattisgarh, serving clients across India with dedicated support and continuous system optimization.
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-slate-900)', color: 'white' }}>
                        <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '1rem' }}>Ready to transform your digital presence?</h3>
                        <p style={{ color: 'var(--color-slate-300)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                            Tell us what you're trying to improve. We'll identify where a better website or AI automation creates the biggest impact.
                        </p>
                        <a href="/#audit" className="btn btn-primary btn-lg">
                            Get Your Free Audit <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
