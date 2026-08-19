import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import ProjectBrowserPreview from './ProjectBrowserPreview';
import styles from './ProjectsShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

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
];

const ProjectsShowcase = () => {
  const [activeMobileProject, setActiveMobileProject] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const watermarkRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const watermark = watermarkRef.current;
    const cards = cardsRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set([header, watermark, ...cards], { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Watermark Parallax Drift
      if (watermark) {
        gsap.to(watermark, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }

      // 2. Section Header Staggered Reveal
      if (header) {
        gsap.from(header.children, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 3. Project Cards ScrollTrigger Cascade
      cards.forEach((cardEl) => {
        if (!cardEl) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardEl,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        // Main card box entrance
        tl.from(cardEl, {
          y: 45,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        });

        // Story blocks stagger
        const storyBlocks = cardEl.querySelectorAll(`.${styles.storyBlock}`);
        if (storyBlocks.length) {
          tl.from(storyBlocks, {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
          }, '-=0.4');
        }

        // Capability tags pop-in
        const capTags = cardEl.querySelectorAll(`.${styles.capTag}`);
        if (capTags.length) {
          tl.from(capTags, {
            scale: 0.88,
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: 'back.out(1.5)',
          }, '-=0.3');
        }

        // CTA button entrance
        const ctaBtn = cardEl.querySelector(`.${styles.liveDemoBtn}`);
        if (ctaBtn) {
          tl.from(ctaBtn, {
            y: 12,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
          }, '-=0.2');
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Magnetic Button Hover Effects
  const handleBtnMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
  };

  const handleBtnMouseLeave = (e) => {
    const btn = e.currentTarget;
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
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
