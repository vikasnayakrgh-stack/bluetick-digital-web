import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import styles from './WebsitesPortfolio.module.css';

const PORTFOLIO_SAMPLES = [
  {
    id: 'chouhan-mattress',
    stepNumber: 'System 01',
    name: 'Chouhan Mattress',
    category: 'D2C Commerce & Fast Checkout',
    title: 'High-Performance D2C Commerce Experience',
    description: 'Custom React 18 storefront with sub-second page loads, dynamic variant selector, integrated 1-click checkout, and automated WhatsApp order routing.',
    deliverables: ['Sub-Second React 18', 'Dynamic Variant Selector', 'WhatsApp Verification Flow'],
    liveDemoUrl: 'https://chouhan-mattress.vercel.app/',
    imageSrc: '/images/chouhan-mattress-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'laxmi-furniture',
    stepNumber: 'System 02',
    name: 'Laxmi Furniture',
    category: 'Retail Catalog & Showroom Booking',
    title: 'Modern Furniture Catalog & Showroom Engine',
    description: 'Architectural furniture catalog designed with high-contrast typography, interactive dimension specs, and 1-click WhatsApp showroom appointment booking.',
    deliverables: ['Architectural Catalog', 'Instant PDF Dispatch', 'WhatsApp Appointment Booking'],
    liveDemoUrl: 'https://laxmi-furniture-zeta.vercel.app/',
    imageSrc: '/images/laxmi-furniture-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'zivara-jewels',
    stepNumber: 'System 03',
    name: 'Zivara Jewels',
    category: 'Luxury Retail & VIP Showroom',
    title: 'Fine Jewellery Digital Showroom & VIP Concierge',
    description: 'Editorial luxury storefront featuring live metal rate ticker, interactive wedding trousseau catalog, visit shortlist builder, and direct WhatsApp concierge.',
    deliverables: ['Live Rate Telemetry', 'Trousseau Shortlist', 'WhatsApp VIP Concierge'],
    liveDemoUrl: 'https://zivara-jewels-rouge.vercel.app/',
    imageSrc: '/images/zivara-jewels-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'aurelia-dental',
    stepNumber: 'System 04',
    name: 'Aurelia Dental Studio',
    category: 'Healthcare & Patient Consultation',
    title: 'Modern Private Dental Studio & Experience Engine',
    description: 'Patient-first digital studio featuring symptom-based intent self-triage, transparent procedure pricing, anxiety-aware layout, and zero-friction WhatsApp booking.',
    deliverables: ['Symptom Self-Triage', 'Transparent Pricing Matrix', 'Direct WhatsApp Triage'],
    liveDemoUrl: 'https://aurelia-khaki-three.vercel.app/',
    imageSrc: '/images/aurelia-dental-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
];

const WebsitesPortfolio = ({
  sectionNumber = "04 /",
  sectionBadge = "Verified Work & Demo Systems",
  title = "Live Production & Interactive Demo Systems",
  subtitle = "Inspect real digital platforms engineered by Bluetick Digital. Test sub-second load speeds, mobile layouts, and connected WhatsApp enquiry workflows."
}) => {
  return (
    <section id="showcase" className="section section-subtle">
      <div className="container">
        <FloemaReveal variant="slide-up" delay={0}>
          <div className="section-header">
            {sectionNumber && <span className="section-number">{sectionNumber}</span>}
            <span className="section-badge">{sectionBadge}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </FloemaReveal>

        <div className={styles.portfolioGrid}>
          {PORTFOLIO_SAMPLES.map((sample, idx) => (
            <FloemaReveal key={sample.id} variant="slide-up" delay={idx * 0.1}>
              <article className={styles.portfolioCard}>
                {/* Visual Image Header */}
                <div className={styles.imageWrapper}>
                  <img
                    src={sample.imageSrc}
                    alt={`${sample.name} - ${sample.title}`}
                    className={styles.projectImage}
                    loading="lazy"
                    width="600"
                    height="380"
                  />
                  <div className={styles.imageOverlay} />
                  
                  {/* Mandatory Concept / Demo System Badge */}
                  <span className={styles.conceptBadge}>
                    {sample.badge}
                  </span>
                  
                  <span className={styles.stepBadge}>
                    {sample.stepNumber}
                  </span>
                </div>

                {/* Card Body */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.categoryTag}>{sample.category}</span>
                  </div>

                  <h3 className={styles.projectTitle}>{sample.name}</h3>
                  <p className={styles.projectDesc}>{sample.description}</p>

                  <ul className={styles.deliverablesList}>
                    {sample.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className={styles.deliverableItem}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter}>
                    <a
                      href={sample.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveDemoBtn}
                      aria-label={`Open live demo system for ${sample.name}`}
                    >
                      <span>Explore Live System</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </FloemaReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesPortfolio;

