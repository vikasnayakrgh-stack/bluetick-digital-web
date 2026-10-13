import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Bot, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import SEO from '../Common/SEO';
import styles from './PricingHub.module.css';

const PRICING_HUB_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluetickdigital.in/pricing#webpage",
      "url": "https://bluetickdigital.in/pricing",
      "name": "Pricing Hub | Transparent Website & AI Automation Investment | Bluetick Digital",
      "description": "Select your solution: Project-based website & e-commerce pricing starting from ₹9,999, or annual AI automation & WhatsApp platforms starting from ₹11,999/year.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://bluetickdigital.in/pricing" }
        ]
      }
    }
  ]
};

const PricingHub = () => {
  return (
    <>
      <SEO
        title="Pricing Hub | Website & AI Automation Investment | Bluetick Digital"
        description="Choose your path: Transparent project-based pricing for high-performance websites starting from ₹9,999, or annual AI automation platforms from ₹11,999/year."
        keywords="Bluetick Digital Pricing, Website Development Cost India, AI Automation Pricing, WhatsApp Bot Pricing"
        canonical="https://bluetickdigital.in/pricing"
        structuredData={PRICING_HUB_SCHEMA}
      />

      <div className={styles.pricingHubPage}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
          <div className="container">
            <ol className={styles.breadcrumbList}>
              <li><Link to="/">Home</Link></li>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} />
              <li aria-current="page">Pricing Hub</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className={styles.hubHero}>
          <div className="container">
            <span className={styles.sectionBadge}>
              <Sparkles size={13} /> Transparent Investment Architecture
            </span>
            <h1 className={styles.heroTitle}>
              Which solution are you looking for?
            </h1>
            <p className={styles.heroSubtitle}>
              Bluetick Digital operates with two distinct, transparent pricing models. Select your area of interest to view full scope tiers, delivery timelines, and starting investments.
            </p>
          </div>
        </header>

        {/* Dual Solution Paths Grid */}
        <section className={styles.pathsSection}>
          <div className="container">
            <div className={styles.pathsGrid}>
              {/* Path 1: Websites & E-Commerce */}
              <div className={`${styles.pathCard} ${styles.websiteCard}`}>
                <div className={styles.pathHeader}>
                  <div className={styles.iconWrap}>
                    <Globe size={26} className={styles.iconBlue} />
                  </div>
                  <div className={styles.modelTag}>Project-Based Investment</div>
                </div>

                <h2 className={styles.pathTitle}>Websites &amp; E-Commerce</h2>
                <p className={styles.pathTagline}>
                  Custom React 18 &amp; Vite platforms engineered for sub-second speed, architectural UI/UX, and high conversion. One-time project investment.
                </p>

                <div className={styles.startingPriceBox}>
                  <span className={styles.pricePrefix}>Starting from</span>
                  <div className={styles.priceFigures}>
                    <span className={styles.amount}>₹9,999</span>
                    <span className={styles.scopeNote}>/ project scope</span>
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.scopeListTitle}>Included Solutions:</div>
                <ul className={styles.scopeList}>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Business Websites</strong> (Entry-level high-converting platforms)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Premium Websites</strong> (Tailored corporate &amp; executive branding)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>E-commerce Storefronts</strong> (D2C shopping &amp; online checkout)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Custom / Enterprise Websites</strong> (Large catalogues &amp; complex integrations)</span>
                  </li>
                </ul>

                <div className={styles.cardFooter}>
                  <Link to="/pricing/websites" className={styles.pathCtaPrimary}>
                    <span>View Website Pricing</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Path 2: AI Automation */}
              <div className={`${styles.pathCard} ${styles.aiCard}`}>
                <div className={styles.pathHeader}>
                  <div className={styles.iconWrap}>
                    <Bot size={26} className={styles.iconBrand} />
                  </div>
                  <div className={styles.modelTag}>Annual Platform &amp; Systems</div>
                </div>

                <h2 className={styles.pathTitle}>AI Automation &amp; Workflows</h2>
                <p className={styles.pathTagline}>
                  Official WhatsApp Business platform, autonomous 24/7 AI sales agents, and custom workflow automations that eliminate manual follow-ups.
                </p>

                <div className={styles.startingPriceBox}>
                  <span className={styles.pricePrefix}>Starting from</span>
                  <div className={styles.priceFigures}>
                    <span className={styles.amount}>₹11,999</span>
                    <span className={styles.scopeNote}>/ year (Annual Plan)</span>
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.scopeListTitle}>Included Solutions:</div>
                <ul className={styles.scopeList}>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Growth Plan</strong> (Official WhatsApp Business API &amp; team inbox)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>AI Growth Engine</strong> (Autonomous lead qualification &amp; CRM sync)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Power Combo</strong> (Combined WhatsApp + AI engine offering)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span><strong>Custom Projects</strong> (Discussion-led bespoke workflows)</span>
                  </li>
                </ul>

                <div className={styles.cardFooter}>
                  <Link to="/pricing/ai-automation" className={styles.pathCtaPrimary}>
                    <span>View Automation Pricing</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Consultation Banner */}
            <div className={styles.needHelpBanner}>
              <div className={styles.needHelpContent}>
                <div className={styles.needHelpText}>
                  <h3 className={styles.needHelpTitle}>Unsure which solution fits your exact business stage?</h3>
                  <p className={styles.needHelpDesc}>
                    Our AI Sales Consultant Priya can analyze your requirements in under 2 minutes, or our engineering team can provide a custom architecture proposal.
                  </p>
                </div>
                <div className={styles.needHelpActions}>
                  <button
                    type="button"
                    className={styles.consultPriyaBtn}
                    onClick={() => {
                      if (window.openAIPriyaChat) {
                        window.openAIPriyaChat();
                      } else {
                        window.dispatchEvent(new CustomEvent('bluetick:open-ai-chat'));
                      }
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Ask AI Priya</span>
                  </button>
                  <a href="/#audit" className={styles.consultAuditBtn}>
                    <span>Request Proposal</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingHub;
