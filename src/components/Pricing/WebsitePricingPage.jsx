import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Info, Sparkles, ChevronRight, Globe, Layers, ArrowLeft, ShieldCheck } from 'lucide-react';
import SEO from '../Common/SEO';
import styles from './WebsitePricingPage.module.css';

const WEBSITE_PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluetickdigital.in/pricing/websites#webpage",
      "url": "https://bluetickdigital.in/pricing/websites",
      "name": "Website & E-commerce Pricing | Transparent Investment Starting ₹9,999 | Bluetick Digital",
      "description": "Transparent project-based pricing for high-performance React business websites and custom D2C e-commerce stores in India. Starting from ₹9,999.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://bluetickdigital.in/pricing" },
          { "@type": "ListItem", "position": 3, "name": "Websites & E-Commerce", "item": "https://bluetickdigital.in/pricing/websites" }
        ]
      }
    }
  ]
};

const WEBSITE_TIERS = [
  {
    name: "Business Website",
    price: "Starting from ₹9,999",
    model: "Project-Based",
    tagline: "Essential high-speed digital presence built for credibility, brand visibility, and inbound inquiry capture.",
    features: [
      "Custom responsive design (mobile, tablet, desktop)",
      "Sub-second page speeds (<1.2s LCP on mobile)",
      "Essential SEO meta tags & OpenGraph cards",
      "Integrated WhatsApp inquiry capture & lead routing",
      "Production-ready codebase & high-performance static hosting"
    ],
    popular: false,
    ctaText: "Start Business Website",
    cta: "/#audit?req=new_website"
  },
  {
    name: "Premium Website",
    price: "Starting from ₹19,999",
    model: "Project-Based",
    tagline: "Tailored website experience for established businesses, corporate firms, and growing consultancies.",
    features: [
      "Everything in Business Website tier",
      "Multi-section corporate information architecture",
      "Custom Swiss-style typography & editorial visual design",
      "Full JSON-LD Schema structured data for Google",
      "Interactive micro-animations & conversion touchpoints"
    ],
    popular: true,
    ctaText: "Choose Premium Website",
    cta: "/#audit?req=new_website"
  },
  {
    name: "E-commerce Website",
    price: "Starting from ₹29,999",
    model: "Project-Based",
    tagline: "Conversion-focused online storefront engineered for businesses selling products online.",
    features: [
      "Product catalog architecture & category browsing",
      "Dynamic product variant selector (sizes, weights, materials)",
      "Online checkout & integrated UPI / payment workflow",
      "Order inquiry & customer notification flow",
      "Mobile-first shopping funnel & fast catalog load speeds"
    ],
    popular: false,
    ctaText: "Launch E-commerce Store",
    cta: "/#audit?req=ecommerce_store"
  },
  {
    name: "Custom / Enterprise Website",
    price: "Custom quote",
    model: "Tailored Scope",
    tagline: "Tailored architecture for large catalogues, complex integrations, and specialized digital workflows.",
    features: [
      "Large product catalogues & complex e-commerce requirements",
      "Advanced workflows, customer portals & bespoke web logic",
      "Custom integrations (ERPs, proprietary APIs, CRMs)",
      "Specialized database architecture & role-based authentication",
      "Dedicated technical architecture roadmap & weekly milestones"
    ],
    popular: false,
    ctaText: "Discuss Your Project",
    cta: "/#audit?req=website_plus_automation"
  }
];

const WebsitePricingPage = () => {
  return (
    <>
      <SEO
        title="Website & E-commerce Pricing | Transparent Investment Starting ₹9,999 | Bluetick Digital"
        description="Clear, milestone-based investment tiers for business websites and D2C stores in India. From ₹9,999 for standard business sites, ₹29,999 for e-commerce. Transparent starting points."
        keywords="Website Development Cost India 2026, E-commerce Website Pricing India, React Website Cost, Bluetick Digital Website Pricing"
        canonical="https://bluetickdigital.in/pricing/websites"
        structuredData={WEBSITE_PRICING_SCHEMA}
      />

      <div className={styles.websitePricingPage}>
        {/* Breadcrumb Bar */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
          <div className="container">
            <ol className={styles.breadcrumbList}>
              <li><Link to="/">Home</Link></li>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} />
              <li><Link to="/pricing">Pricing Hub</Link></li>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} />
              <li aria-current="page">Websites &amp; E-Commerce</li>
            </ol>
          </div>
        </nav>

        {/* Back Link */}
        <div className="container">
          <Link to="/pricing" className={styles.backToHubLink}>
            <ArrowLeft size={15} />
            <span>Switch to AI Automation Pricing</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className={styles.pageHero}>
          <div className="container">
            <span className={styles.sectionBadge}>
              <Globe size={13} /> Project-Based Investment Model
            </span>
            <h1 className={styles.pageTitle}>
              Website &amp; E-commerce Pricing
            </h1>
            <p className={styles.pageSubtitle}>
              Milestone-based, fixed-scope engineering for high-speed React websites and custom D2C stores. All tiers include clean code, SEO metadata, and mobile optimization.
            </p>
          </div>
        </header>

        {/* Mandatory Scope Disclaimer Callout */}
        <div className="container">
          <div className={styles.mandatoryNoticeBox}>
            <Info size={20} className={styles.noticeIcon} />
            <div className={styles.noticeText}>
              <strong>Starting Points, Not Fixed Packages:</strong> All prices shown below are starting estimates based on standard feature scopes. Final pricing depends on scope, features, integrations, design requirements, and project complexity.
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <section className={styles.tiersSection}>
          <div className="container">
            <div className={styles.tiersGrid}>
              {WEBSITE_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`${styles.tierCard} ${tier.popular ? styles.popularCard : ''}`}
                >
                  {tier.popular && (
                    <div className={styles.popularBadge}>
                      <Sparkles size={12} /> Recommended
                    </div>
                  )}

                  <div className={styles.tierTop}>
                    <div className={styles.tierModelBadge}>{tier.model}</div>
                    <h2 className={styles.tierName}>{tier.name}</h2>
                    <div className={styles.priceWrap}>
                      <span className={styles.priceFigure}>{tier.price}</span>
                    </div>
                    <p className={styles.tierTagline}>{tier.tagline}</p>
                  </div>

                  <div className={styles.tierDivider} />

                  <div className={styles.featuresHeader}>Included Scope:</div>
                  <ul className={styles.featureList}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tierFooter}>
                    <a
                      href={tier.cta || "/#audit"}
                      className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'} ${styles.cardBtn}`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Terms & Commercial Guidelines */}
            <div className={styles.paymentTermsSection}>
              <div className={styles.paymentTermsHeader}>
                <ShieldCheck size={22} color="#1d4ed8" />
                <h3 className={styles.paymentTermsTitle}>Payment Terms &amp; Commercial Guidelines</h3>
              </div>
              <div className={styles.paymentTermsGrid}>
                <div className={styles.paymentTermCard}>
                  <div className={styles.termTitle}>
                    <span>50% Advance &amp; 50% Pre-Launch Handover</span>
                  </div>
                  <p className={styles.termDesc}>
                    50% advance invoice before architectural sprint kickoff. The remaining 50% balance is cleared upon sprint completion, prior to live domain launch and code handover.
                  </p>
                </div>

                <div className={styles.paymentTermCard}>
                  <div className={styles.termTitle}>
                    <span>100% Standalone Website Purchase</span>
                  </div>
                  <p className={styles.termDesc}>
                    Website development is an independent, one-time project service. You are never required to purchase or subscribe to any recurring AI or WhatsApp automation plan to build a website.
                  </p>
                </div>

                <div className={styles.paymentTermCard}>
                  <div className={styles.termTitle}>
                    <span>Transparent Cost Demarcation</span>
                  </div>
                  <p className={styles.termDesc}>
                    Project fees strictly cover bespoke design, clean code engineering, and testing. Domain registration, cloud hosting, and third-party payment gateway transaction fees are paid directly to your chosen providers.
                  </p>
                </div>

                <div className={styles.paymentTermCard}>
                  <div className={styles.termTitle}>
                    <span>Full Source Code Ownership</span>
                  </div>
                  <p className={styles.termDesc}>
                    Upon final project handover, 100% source code repository access and deployment configurations are transferred directly to your organization with zero vendor lock-in.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Architecture Advisory */}
            <div className={styles.bottomAdvisory}>
              <div className={styles.advisoryContent}>
                <h3 className={styles.advisoryTitle}>Need a custom quote or technical evaluation?</h3>
                <p className={styles.advisoryDesc}>
                  Share your wireframes, references, or current website URL. Our system architects will deliver a detailed scope breakdown within 24 hours.
                </p>
                <div className={styles.advisoryActions}>
                  <a href="/#audit" className="btn btn-primary btn-md">
                    Request Architecture Proposal <ArrowRight size={16} />
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline btn-md"
                    onClick={() => {
                      if (window.openAIPriyaChat) {
                        window.openAIPriyaChat();
                      } else {
                        window.dispatchEvent(new CustomEvent('bluetick:open-ai-chat'));
                      }
                    }}
                  >
                    Consult AI Priya (Instant)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebsitePricingPage;
