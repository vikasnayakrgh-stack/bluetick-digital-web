import React from 'react';
import SEO from '../Common/SEO';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage = () => (
  <>
    <SEO
      title="Privacy Policy | Bluetick Digital"
      description="Bluetick Digital's Privacy Policy explains how we protect and manage your business information, confidential requirements, and contact data."
    />
    <section className="section" style={{ minHeight: '80vh', paddingTop: 'calc(72px + 3rem)', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-brand)', fontWeight: 600, fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <ShieldCheck size={28} color="var(--color-brand)" />
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800 }}>Privacy Policy</h1>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          Last updated: February 2026 · Bluetick Digital, Raipur, Chhattisgarh, India
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-text-primary)', lineHeight: 1.75 }}>
          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Zero-Spam & Confidentiality Commitment</h2>
            <p>
              At Bluetick Digital, we build high-performance business engines. We treat your technical specifications, business workflows, customer data, and communication records with strict enterprise confidentiality. We never sell, rent, or trade your contact or business data.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Information We Collect</h2>
            <p>
              When you submit a growth audit request, consultation form, or message us via WhatsApp, we collect only the necessary details to scope your system: your name, business name, WhatsApp number, website URL, and specified technical requirements.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Data Storage & Security</h2>
            <p>
              Lead audit information is stored securely in encrypted PostgreSQL databases (Supabase) with Row-Level Security (RLS) enabled. API keys, Meta Business Manager credentials, and webhook endpoints are isolated in secure environment variables.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Contact Us</h2>
            <p>
              For any questions regarding your data privacy or to request data deletion, contact us directly at <a href="mailto:contact@bluetickdigital.in" style={{ color: 'var(--color-brand)', textDecoration: 'underline' }}>contact@bluetickdigital.in</a> or via WhatsApp at +91 62610 03050.
            </p>
          </section>
        </div>
      </div>
    </section>
  </>
);

export const TermsPage = () => (
  <>
    <SEO
      title="Terms of Service | Bluetick Digital"
      description="Bluetick Digital's Terms of Service governing web design, custom AI automation, and WhatsApp API integration engagements."
    />
    <section className="section" style={{ minHeight: '80vh', paddingTop: 'calc(72px + 3rem)', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-brand)', fontWeight: 600, fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <FileText size={28} color="var(--color-brand)" />
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800 }}>Terms of Service</h1>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          Last updated: February 2026 · Bluetick Digital, Raipur, Chhattisgarh, India
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-text-primary)', lineHeight: 1.75 }}>
          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Scope of Engagement</h2>
            <p>
              Bluetick Digital provides custom web engineering, e-commerce development, custom AI agent configuration, and official Meta WhatsApp Business API integration services. All client engagements are executed under explicit milestone-based project scopes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Intellectual Property & Code Ownership</h2>
            <p>
              Upon complete milestone settlement, full ownership of custom website code, database schemas, and tailored automation workflows transitions to the client. Bluetick Digital retains ownership of internal reusable boilerplate frameworks.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Third-Party Platform Policies</h2>
            <p>
              Clients utilizing WhatsApp Business API automation must comply with Meta's Business and Commerce Policies. Bluetick Digital does not guarantee Meta Green Tick approval as verification is solely determined by Meta's editorial review team.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Inquiries & Legal Support</h2>
            <p>
              For legal inquiries or agreement documentation, contact <a href="mailto:contact@bluetickdigital.in" style={{ color: 'var(--color-brand)', textDecoration: 'underline' }}>contact@bluetickdigital.in</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  </>
);
