import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import ProjectBrowserPreview from './ProjectBrowserPreview';
import styles from './ProjectsShowcase.module.css';

const PROJECTS = [
  {
    id: 'chouhan-mattress',
    stepNumber: 'System 01',
    name: 'Chouhan Mattress',
    category: 'D2C Commerce & RTO Automation',
    title: 'High-Performance D2C Commerce Experience',
    challenge: 'High checkout abandonment on mobile and expensive RTO shipping losses on Cash-on-Delivery orders.',
    systemBuilt: 'Custom React 18 storefront with dynamic variant selector, integrated Razorpay 1-click checkout, and automated WhatsApp COD verification workflow.',
    outcome: 'Sub-1.2s page load, up to 45% reduction in RTO shipping losses, and automated 1-click cart recovery.',
    capabilities: ['Sub-Second React', 'WhatsApp COD Bot', '1-Click Cart Recovery', 'Supabase Ledger'],
    liveDemoUrl: 'https://chouhan-mattress.vercel.app/',
    imageSrc: '/images/chouhan-mattress-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'laxmi-furniture',
    stepNumber: 'System 02',
    name: 'Laxmi Furniture',
    category: 'Omnichannel Retail & Showroom Booking',
    title: 'Modern Furniture Catalog & Showroom Engine',
    challenge: 'Potential buyers visited local competitors due to slow response on custom pricing and showroom availability.',
    systemBuilt: 'Architectural furniture catalog platform connected with 24/7 WhatsApp AI bot for instant PDF dimension sheets and showroom appointment scheduling.',
    outcome: '100% of weekend showroom visits booked automatically with zero human broker delays.',
    capabilities: ['Architectural Catalog', 'Instant PDF Dispatch', 'Showroom Booking Bot', 'Meta WABA API'],
    liveDemoUrl: 'https://laxmi-furniture-zeta.vercel.app/',
    imageSrc: '/images/laxmi-furniture-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'zivara-jewels',
    stepNumber: 'System 03',
    name: 'Zivara Jewels',
    category: 'Luxury Retail & VIP Showroom Booking',
    title: 'Fine Jewellery Digital Showroom & VIP Consultation Engine',
    challenge: 'High-value jewellery buyers hesitate online without live metal rate transparency, certified purity proof, and personalized in-store viewing concierge.',
    systemBuilt: 'Editorial luxury storefront featuring live gold/silver rate ticker (AU 916), interactive wedding trousseau catalog, visit shortlist builder, and WhatsApp appointment booking concierge.',
    outcome: 'Sub-second catalog browsing, 100% BIS HUID purity transparency, and 3x higher in-store private viewing conversions.',
    capabilities: ['Live Metal Ticker', 'VIP Visit Concierge', 'BIS HUID Transparency', 'WhatsApp Booking'],
    liveDemoUrl: 'https://zivara-jewels-rouge.vercel.app/',
    imageSrc: '/images/zivara-jewels-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'aurelia-dental',
    stepNumber: 'System 04',
    name: 'Aurelia Dental Studio',
    category: 'Healthcare & Patient Consultation Engine',
    title: 'Modern Private Dental Studio & Patient Experience Engine',
    challenge: 'Dental patients experience booking friction and anxiety when clinics bury treatment transparent pricing and rely on manual phone scheduling.',
    systemBuilt: 'Patient-first digital studio featuring symptom-based intent self-triage, transparent procedure pricing, anxiety-aware clinical presentation, and direct WhatsApp appointment booking.',
    outcome: 'Sub-second consultation routing, 24/7 symptom self-triage, and automated patient appointment confirmations.',
    capabilities: ['Symptom Self-Triage', 'Direct WhatsApp Triage', 'Transparent Pricing', 'Zero-Friction Booking'],
    liveDemoUrl: 'https://aurelia-khaki-three.vercel.app/',
    imageSrc: '/images/aurelia-dental-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
  {
    id: 'forgecore-industries',
    stepNumber: 'System 05',
    name: 'ForgeCore Industries',
    category: 'Industrial Manufacturing & B2B RFQ Engine',
    title: 'Precision Components Manufacturing & RFQ Platform',
    challenge: 'Industrial procurement teams face slow quoting cycles, vague tolerance specs, and friction submitting technical CAD/drawing requirements.',
    systemBuilt: 'Heavy-industry digital catalog showcasing 5-axis CNC machining, tolerance guides, live machine capacity telemetry, automated DFM review workflow, and direct WhatsApp RFQ desk.',
    outcome: '4-hour DFM turnaround, 100% CMM inspection transparency, and automated industrial RFQ lead qualification.',
    capabilities: ['Automated DFM Review', 'Tolerance Specifications', 'Direct WhatsApp RFQ', 'CMM Quality Standards'],
    liveDemoUrl: 'https://forge-core-industries.vercel.app/',
    imageSrc: '/images/forgecore-preview.jpg',
    badge: 'CONCEPT / DEMO SYSTEM',
  },
];

const ProjectsShowcase = () => {
  const [activeMobileProject, setActiveMobileProject] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const watermarkRef = useRef(null);
  const cardsRef = useRef([]);
  const animModuleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const watermark = watermarkRef.current;
    const cards = cardsRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let cleanup;
    let isMounted = true;

    import('../../utils/showcaseAnimations').then((mod) => {
      if (!isMounted) return;
      animModuleRef.current = mod;
      cleanup = mod.initShowcaseAnimations({ section, header, watermark, cards, styles });
    });

    return () => {
      isMounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  // Magnetic Button Hover Effects
  const handleBtnMouseMove = (e) => {
    if (animModuleRef.current?.animateBtnMouseMove) {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
      animModuleRef.current.animateBtnMouseMove(btn, x, y);
    }
  };

  const handleBtnMouseLeave = (e) => {
    if (animModuleRef.current?.animateBtnMouseLeave) {
      animModuleRef.current.animateBtnMouseLeave(e.currentTarget);
    }
  };

  return (
    <section ref={sectionRef} id="showcase" className={styles.projectsShowcase}>
      <div className={styles.container}>
        {/* Section Header with Parallax Watermark Number */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <span ref={watermarkRef} className={styles.watermarkNumber}>03</span>
          <span className="section-badge font-mono">
            <Sparkles size={13} /> SELECTED DIGITAL SYSTEMS
          </span>
          <h2 className="section-title">
            Engineered demonstration systems.
          </h2>
          <p className="section-subtitle">
            Interactive demonstration platforms engineered to prove real architecture, sub-second code, and automated WhatsApp workflows.
          </p>
        </div>

        {/* Mobile Project Switcher (< 768px) */}
        <div className={styles.mobileProjectSwitcher}>
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              className={`${styles.switcherPill} ${activeMobileProject === idx ? styles.switcherPillActive : ''}`}
              onClick={() => setActiveMobileProject(idx)}
              type="button"
            >
              <span className={styles.switcherNumber}>0{idx + 1}</span>
              <span className={styles.switcherName}>{proj.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Demonstration Systems Stack */}
        <div className={styles.systemsStack}>
          {PROJECTS.map((project, index) => {
            const isHiddenOnMobile = activeMobileProject !== index;
            return (
              <div 
                key={project.id} 
                className={`${styles.projectWrapper} ${isHiddenOnMobile ? styles.hideOnMobile : ''}`}
              >
                <article 
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={styles.projectArticle}
                >
                  <div className={styles.projectTopMeta}>
                    <div className={styles.stepBadgeGroup}>
                      <span className={styles.projectStepTag}>{project.stepNumber}</span>
                      <span className={styles.conceptBadge}>{project.badge}</span>
                    </div>
                    <span className={styles.categoryPill}>{project.category}</span>
                  </div>

                  <div className={styles.projectTitleWrapper}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectSubtitle}>{project.title}</p>
                  </div>

                  {/* Editorial 2-Column Layout */}
                  <div className={styles.projectGrid}>
                    {/* Left Column: Interactive Browser Preview */}
                    <div className={styles.previewColumn}>
                      <ProjectBrowserPreview
                        url={project.liveDemoUrl}
                        title={project.name}
                        imageSrc={project.imageSrc}
                      />
                    </div>

                    {/* Right Column: Problem -> Approach -> Outcome Storytelling */}
                    <div className={styles.storyColumn}>
                      <div className={styles.storyBlock}>
                        <span className={styles.storyLabel}>THE CHALLENGE</span>
                        <p className={styles.storyText}>{project.challenge}</p>
                      </div>

                      <div className={styles.storyBlock}>
                        <span className={styles.storyLabel}>SYSTEM ENGINEERED</span>
                        <p className={styles.storyText}>{project.systemBuilt}</p>
                      </div>

                      <div className={styles.storyBlock}>
                        <span className={styles.storyLabel}>MEASURABLE OUTCOME</span>
                        <p className={styles.outcomeHighlight}>{project.outcome}</p>
                      </div>

                      {/* Capabilities Tags */}
                      <div className={styles.capabilitiesList}>
                        {project.capabilities.map((cap, i) => (
                          <span key={i} className={styles.capTag}>
                            {cap}
                          </span>
                        ))}
                      </div>

                      {/* Primary CTA Link with Magnetic Hover */}
                      <div className={styles.projectCtaWrapper}>
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.liveDemoBtn}
                          onMouseMove={handleBtnMouseMove}
                          onMouseLeave={handleBtnMouseLeave}
                        >
                          <span>Explore Live Demo System</span>
                          <ExternalLink size={14} className={styles.btnIcon} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
