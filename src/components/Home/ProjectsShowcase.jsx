import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import ProjectBrowserPreview from './ProjectBrowserPreview';
import { MOTION_TOKENS } from '../../constants/motionTokens';
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
];

const ProjectsShowcase = () => {
  const [activeMobileProject, setActiveMobileProject] = React.useState(0);

  return (
    <section id="showcase" className={styles.projectsShowcase}>
      <div className={styles.container}>
        {/* Section Header with Floema Watermark Number */}
        <FloemaReveal variant="slide-up" delay={0}>
          <div className={styles.sectionHeader}>
            <span className={styles.watermarkNumber}>03</span>
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
        </FloemaReveal>

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
                <FloemaReveal 
                  variant="slide-up" 
                  delay={0.1 + index * 0.1}
                >
                  <article className={styles.projectArticle}>
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

                    {/* Primary CTA Link */}
                    <div className={styles.projectCtaWrapper}>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.liveDemoBtn}
                      >
                        <span>Explore Live Demo System</span>
                        <ExternalLink size={14} className={styles.btnIcon} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FloemaReveal>
          </div>
        );
      })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
