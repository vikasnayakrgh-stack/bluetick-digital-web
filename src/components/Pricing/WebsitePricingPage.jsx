import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Info, Sparkles, ChevronRight, Globe, Layers, ArrowLeft } from 'lucide-react';
import SEO from '../Common/SEO';
import styles from './WebsitePricingPage.module.css';

const WEBSITE_PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluetickdigital.in/pricing/websites#webpage",
      "url": "https://bluetickdigital.in/pricing/websites",
      "name": "Website & E-commerce Pricing | Transparent Investment Starting ₹10K | Bluetick Digital",
      "description": "Transparent project-based pricing for high-performance React business websites and custom D2C e-commerce stores in India. Starting from ₹10,000.",
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
    price: "From ₹10,000",
    model: "Project-Based",
    tagline: "Essential high-speed digital presence built for credibility and inbound inquiry capture.",
    features: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Sub-second page speeds (<1.2s LCP on mobile)",
      "Essential SEO meta tags & OpenGraph cards",
      "Integrated 1-click WhatsApp inquiry capture",
      "SSL certificate & high-performance static hosting",
      "Fast 7 to 10 days deployment timeline"
    ],
    popular: false,
    ctaText: "Start Business Website"
  },
  {
    name: "Premium Profile Website",
    price: "From ₹20,000",
    model: "Project-Based",
    tagline: "Bespoke Swiss architectural design for established firms, consultancies & corporate brands.",
    features: [
      "Everything in Business Website tier",
      "Multi-page corporate information architecture",
      "Custom Swiss-style typography & visual design",
      "Interactive micro-animations with Framer Motion",
      "Full JSON-LD Schema structured data for Google",
      "Google Maps local optimization & inquiry analytics",
      "14 to 18 days structured sprint delivery"
    ],
    popular: true,
    ctaText: "Choose Premium Profile"
  },
  {
    name: "Small E-commerce",
    price: "From ₹30,000",
    model: "Project-Based",
    tagline: "High-conversion D2C storefront with automated checkout & WhatsApp cart recovery.",
    features: [
      "Custom D2C storefront with up to 100 product catalog",
      "Dynamic variant selector (sizes, weights, materials)",
      "Integrated Razorpay & 1-click UPI checkout",
      "Automated WhatsApp COD order verification bot",
      "Automated 1-click WhatsApp cart recovery workflow",
      "Supabase order database & customer ledger",
      "18 to 21 days turnkey deployment"
    ],
    popular: false,
    ctaText: "Launch Small Store"
  },
  {
    name: "Large Catalog E-commerce",
    price: "From ₹50,000",
    model: "Project-Based",
    tagline: "Enterprise-grade digital commerce platform engineered for large catalogs and high volume.",
    features: [
      "Everything in Small E-commerce tier",
      "Large catalog architecture (1,000+ SKUs & categories)",
      "Faceted multi-filter search & instant category triage",
      "Automated courier & shipping tracking integrations",
      "Multi-agent team order management panel",
      "Customer accounts, wishlists & repeat order history",
      "Dedicated staging server & thorough load-testing"
    ],
    popular: false,
    ctaText: "Scale Catalog Store"
  },
  {
    name: "Custom Website",
    price: "Custom Pricing",
    model: "Scoped Architecture",
    tagline: "Tailored web applications, client portals, and bespoke database platforms.",
    features: [
      "Bespoke system architecture & database schema design",
      "Client portals, booking engines & custom dashboards",
      "Third-party API & proprietary ERP integrations",
      "Role-based access control (RBAC) & authentication",
      "Dedicated sprint roadmap with weekly demo milestones",
      "Custom SLA, source code handover & team training"
    ],
    popular: false,
    ctaText: "Request Custom Scope"
  }
];

const WebsitePricingPage = () => {
  return (
    <>
      <SEO
        title="Website & E-commerce Pricing | Transparent Investment Starting ₹10K | Bluetick Digital"
        description="Clear, milestone-based investment tiers for business websites and D2C stores in India. From ₹10K for standard business sites, ₹30K for e-commerce. Transparent starting points."
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
                      href="/#audit"
                      className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'} ${styles.cardBtn}`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
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
