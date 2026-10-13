import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Minus, 
  ArrowRight, 
  Info, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  Globe, 
  ArrowLeft, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  FileText,
  ShoppingBag,
  Cpu,
  MessageSquare
} from 'lucide-react';
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
    },
    {
      "@type": "FAQPage",
      "@id": "https://bluetickdigital.in/pricing/websites#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in the starting price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The starting price covers complete bespoke frontend and responsive web development according to the package scope, including mobile optimization, essential SEO metadata, WhatsApp enquiry integration, cross-browser testing, and production launch setup."
          }
        },
        {
          "@type": "Question",
          "name": "How many pages are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Business Website package includes 5 website pages. The Premium Website includes 10 website pages. E-commerce and Custom / Enterprise websites are scoped according to agreed project requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What are the payment terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate on clear project milestones: 50% advance to begin engineering, and the remaining 50% before website launch or final handover."
          }
        },
        {
          "@type": "Question",
          "name": "Are domain, hosting and third-party charges included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Domain registration, hosting, and third-party services are billed directly by your chosen providers to ensure 100% asset ownership with zero vendor lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build custom functionality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Through our Custom / Enterprise tier, we build tailored web applications, customer portals, custom calculators, dynamic databases, CRM/ERP webhooks, and private API integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Which package should I choose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose the Business Website (₹9,999) for a clean 5-page digital presence. Choose the Premium Website (₹19,999) for up to 10 pages with structured data and tailored corporate presentation. Choose the E-commerce Website (₹29,999) to sell online with cart and UPI checkout. For specialized workflows or large catalogues, request a custom quote."
          }
        }
      ]
    }
  ]
};

const WEBSITE_TIERS = [
  {
    name: "Business Website",
    price: "₹9,999",
    pricePrefix: "Starting price",
    pageCountBadge: "5 website pages",
    model: "Project-Based",
    targetAudience: "For startups, local service providers, and emerging firms building a credible online footprint.",
    features: [
      "5 website pages",
      "Custom responsive design",
      "Mobile, tablet and desktop support",
      "Essential SEO metadata and social-sharing previews",
      "WhatsApp enquiry capture and lead routing",
      "Performance-focused implementation and launch setup"
    ],
    benefitStatement: "Build immediate credibility, rank cleanly on search, and capture visitor enquiries directly to WhatsApp.",
    ctaText: "Get Business Website",
    cta: "/#audit?req=new_website"
  },
  {
    name: "Premium Website",
    price: "₹19,999",
    pricePrefix: "Starting price",
    pageCountBadge: "10 website pages",
    model: "Project-Based",
    targetAudience: "For established businesses, consulting firms, and growing brands requiring a bespoke corporate profile.",
    features: [
      "10 website pages",
      "Includes all approved Business Website features",
      "Tailored corporate design and information architecture",
      "Structured data for Google (JSON-LD Schema)",
      "Interactive micro-animations and conversion touchpoints"
    ],
    benefitStatement: "Elevate your brand perception with tailored aesthetics, deeper content structure, and rich search snippets.",
    ctaText: "Get Premium Website",
    cta: "/#audit?req=new_website"
  },
  {
    name: "E-commerce Website",
    price: "₹29,999",
    pricePrefix: "Starting price",
    pageCountBadge: "Agreed project scope",
    model: "Project-Based",
    targetAudience: "For retailers, D2C brands, and product businesses ready to showcase catalogs and sell online.",
    features: [
      "Page count according to agreed scope",
      "Product catalogue and category browsing",
      "Product variants (sizes, colors, materials)",
      "Cart, checkout and agreed payment integration, including UPI where supported",
      "Order enquiries and customer notifications",
      "Mobile-friendly shopping experience"
    ],
    benefitStatement: "Turn visitors into paying customers with fast browsing, frictionless UPI checkout, and automated order alerts.",
    ctaText: "Start Selling Online",
    cta: "/#audit?req=ecommerce_store"
  },
  {
    name: "Custom / Enterprise Website",
    price: "Custom quote",
    pricePrefix: "Tailored scope",
    pageCountBadge: "Custom architecture",
    model: "Tailored Scope",
    targetAudience: "For enterprises with large product catalogs, specialized workflows, customer portals, or deep integrations.",
    features: [
      "Large catalogues and specialized requirements",
      "Custom workflows, portals and business logic",
      "CRM, ERP and API integrations where agreed",
      "Specialized database and role-based access where required",
      "Technical roadmap and milestones according to agreed scope"
    ],
    benefitStatement: "A bespoke web platform engineered specifically for your operational workflows, integrations, and scale.",
    ctaText: "Discuss Your Project",
    cta: "/#audit?req=website_plus_automation"
  }
];

const COMPARISON_CATEGORIES = [
  {
    name: "Scope & Structure",
    features: [
      {
        name: "Website Page Count",
        business: "5 pages",
        premium: "10 pages",
        ecommerce: "Agreed scope",
        custom: "Custom scope"
      },
      {
        name: "Custom Responsive Design",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Mobile, Tablet & Desktop Support",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Tailored Corporate Information Architecture",
        business: false,
        premium: true,
        ecommerce: "Optional",
        custom: true
      },
      {
        name: "Performance-Focused Implementation & Launch",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      }
    ]
  },
  {
    name: "Search & Visibility",
    features: [
      {
        name: "Essential SEO Metadata & Descriptions",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Social-Sharing Previews (OpenGraph / Twitter)",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Structured Data for Google (JSON-LD Schema)",
        business: false,
        premium: true,
        ecommerce: "Product Schema",
        custom: "Custom Schema"
      }
    ]
  },
  {
    name: "Conversion & Inquiries",
    features: [
      {
        name: "WhatsApp Enquiry Capture & Lead Routing",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Interactive Micro-Animations & Conversion Touchpoints",
        business: false,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Order Enquiries & Customer Notifications",
        business: false,
        premium: false,
        ecommerce: true,
        custom: true
      }
    ]
  },
  {
    name: "E-Commerce Capabilities",
    features: [
      {
        name: "Product Catalogue & Category Browsing",
        business: false,
        premium: false,
        ecommerce: true,
        custom: "Large catalogs"
      },
      {
        name: "Product Variants (Sizes, Colors, Materials)",
        business: false,
        premium: false,
        ecommerce: true,
        custom: true
      },
      {
        name: "Cart, Checkout & Payment Integration (inc. UPI)",
        business: false,
        premium: false,
        ecommerce: true,
        custom: "Custom gateways"
      },
      {
        name: "Mobile-Friendly Shopping Funnel",
        business: false,
        premium: false,
        ecommerce: true,
        custom: true
      }
    ]
  },
  {
    name: "Custom Logic & Integrations",
    features: [
      {
        name: "Custom Workflows, Portals & Business Logic",
        business: false,
        premium: false,
        ecommerce: "Optional",
        custom: true
      },
      {
        name: "CRM, ERP & API Integrations Where Agreed",
        business: false,
        premium: false,
        ecommerce: "Optional",
        custom: true
      },
      {
        name: "Specialized Database & Role-Based Access",
        business: false,
        premium: false,
        ecommerce: false,
        custom: true
      },
      {
        name: "Technical Roadmap & Milestone Schedule",
        business: false,
        premium: false,
        ecommerce: false,
        custom: true
      }
    ]
  },
  {
    name: "Commercial Terms",
    features: [
      {
        name: "Standard Payment Terms",
        business: "50% Adv. / 50% Launch",
        premium: "50% Adv. / 50% Launch",
        ecommerce: "50% Adv. / 50% Launch",
        custom: "50% Adv. / 50% Launch"
      },
      {
        name: "100% Standalone Website Purchase",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      },
      {
        name: "Full Source Code Ownership Transfer",
        business: true,
        premium: true,
        ecommerce: true,
        custom: true
      }
    ]
  }
];

const FAQS_LIST = [
  {
    q: "What is included in the starting price?",
    a: "The starting price covers complete bespoke frontend and responsive web development according to the package scope, including mobile optimization, essential SEO metadata, WhatsApp enquiry integration, cross-browser testing, and production launch setup. Domain, hosting, and third-party fees are paid directly to your chosen providers."
  },
  {
    q: "How many pages are included?",
    a: "The Business Website package includes up to 5 custom website pages (e.g., Home, About, Services, Work/Portfolio, Contact). The Premium Website includes up to 10 pages for deeper corporate architecture. E-commerce and Custom / Enterprise websites are scoped according to your catalog size, category depth, and custom functional requirements."
  },
  {
    q: "What are the payment terms?",
    a: "We work on a transparent milestone basis: 50% advance before the engineering sprint begins to schedule design and technical resources, and the remaining 50% balance upon final review, prior to live domain launch and repository handover."
  },
  {
    q: "Are domain, hosting and third-party charges included?",
    a: "No. To ensure you have 100% independence and data ownership of your digital assets with zero vendor lock-in, domain registration, hosting servers, and payment gateway transaction fees are paid directly to your preferred third-party providers. We assist with complete setup, DNS pointing, and production deployment."
  },
  {
    q: "Can you build custom functionality?",
    a: "Yes. Through our Custom / Enterprise tier, we build tailored web applications, client portals, custom quotation calculators, dynamic database dashboards, CRM/ERP webhooks, and private API integrations."
  },
  {
    q: "Which package should I choose?",
    a: "Choose the Business Website (₹9,999) if you need a clean 5-page digital presence to establish credibility and capture WhatsApp leads. Choose the Premium Website (₹19,999) if your brand needs up to 10 pages, rich structured data, and custom corporate architecture. Choose the E-commerce Website (₹29,999) if you sell physical or digital goods online with UPI checkout. For specialized workflows or large catalogs, request a Custom quotation."
  }
];

const WebsitePricingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  const scrollToPackages = (e) => {
    e.preventDefault();
    const target = document.getElementById('packages');
    if (target) {
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderTableCell = (val) => {
    if (val === true) {
      return (
        <span className={styles.tableCheckIcon} aria-label="Included">
          <Check size={18} />
        </span>
      );
    }
    if (val === false) {
      return (
        <span className={styles.tableMinusIcon} aria-label="Not included">
          <Minus size={16} />
        </span>
      );
    }
    return <span className={styles.tableValueText}>{val}</span>;
  };

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

        {/* Back Link to Hub */}
        <div className="container">
          <Link to="/pricing" className={styles.backToHubLink}>
            <ArrowLeft size={15} />
            <span>Switch to AI Automation Pricing</span>
          </Link>
        </div>

        {/* Section A — Hero Section */}
        <header className={styles.pageHero}>
          <div className="container">
            <span className={styles.eyebrowBadge}>
              <Globe size={13} /> WEBSITE DEVELOPMENT
            </span>
            <h1 className={styles.heroHeadline}>
              A Better Website Starts Here.
            </h1>
            <p className={styles.heroSupportingCopy}>
              Build a professional online presence, attract enquiries, or start selling online—with a website designed around your business.
            </p>

            <div className={styles.heroCtaRow}>
              <a 
                href="#packages" 
                onClick={scrollToPackages} 
                className="btn btn-primary btn-md"
              >
                <span>Explore Packages</span>
                <ChevronDown size={16} />
              </a>
              <a 
                href="/#audit?req=new_website" 
                className="btn btn-outline btn-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </header>

        {/* Section D — Mandatory Pricing Transparency Disclaimer */}
        <section className={styles.disclaimerSection}>
          <div className="container">
            <div className={styles.mandatoryNoticeBox}>
              <Info size={20} className={styles.noticeIcon} />
              <div className={styles.noticeText}>
                <strong>Pricing Transparency:</strong> All prices are starting prices. Final pricing depends on the agreed project scope and requirements. Payment terms: 50% advance and 50% before launch/handover. Any separate domain, hosting, payment gateway or recurring third-party charges will be specified in the final quotation.
              </div>
            </div>
          </div>
        </section>

        {/* Section B — Pricing Cards */}
        <section id="packages" className={styles.tiersSection}>
          <div className="container">
            <div className={styles.sectionSubHeader}>
              <h2 className={styles.sectionMainTitle}>Website Engineering Packages</h2>
              <p className={styles.sectionMainSubtitle}>
                Fixed-scope sprint deliverables engineered with modern React architecture, mobile speed optimization, and verified payment milestones.
              </p>
            </div>

            <div className={styles.tiersGrid}>
              {WEBSITE_TIERS.map((tier, idx) => (
                <div key={idx} className={styles.tierCard}>
                  <div className={styles.tierTop}>
                    <div className={styles.tierHeaderMeta}>
                      <span className={styles.tierModelBadge}>{tier.model}</span>
                      <span className={styles.pageCountChip}>
                        <FileText size={12} /> {tier.pageCountBadge}
                      </span>
                    </div>

                    <h3 className={styles.tierName}>{tier.name}</h3>

                    <div className={styles.priceWrap}>
                      <span className={styles.pricePrefix}>{tier.pricePrefix}</span>
                      <span className={styles.priceFigure}>{tier.price}</span>
                    </div>

                    <p className={styles.targetAudienceText}>{tier.targetAudience}</p>
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

                  {/* Short Business Benefit Statement */}
                  <div className={styles.benefitBox}>
                    <div className={styles.benefitLabel}>Business Outcome</div>
                    <p className={styles.benefitText}>{tier.benefitStatement}</p>
                  </div>

                  <div className={styles.tierFooter}>
                    <a
                      href={tier.cta || "/#audit?req=new_website"}
                      className={`btn btn-primary ${styles.cardBtn}`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Section C — Feature Comparison Table */}
            <div className={styles.comparisonWrapper}>
              <div className={styles.comparisonHeader}>
                <span className={styles.comparisonBadge}>
                  <Layers size={13} /> Side-by-Side Breakdown
                </span>
                <h3 className={styles.comparisonTitle}>Compare Package Deliverables</h3>
                <p className={styles.comparisonSubtitle}>
                  Evaluate specific features, technical inclusions, and scope requirements across all four tiers.
                </p>
                <div className={styles.mobileScrollCue}>
                  <span>← Swipe horizontally to compare all 4 packages →</span>
                </div>
              </div>

              <div className={styles.tableResponsiveContainer}>
                <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                      <th className={styles.featureColHeader}>Feature &amp; Scope</th>
                      <th className={styles.tierColHeader}>
                        <div className={styles.thName}>Business</div>
                        <div className={styles.thPrice}>₹9,999</div>
                      </th>
                      <th className={styles.tierColHeader}>
                        <div className={styles.thName}>Premium</div>
                        <div className={styles.thPrice}>₹19,999</div>
                      </th>
                      <th className={styles.tierColHeader}>
                        <div className={styles.thName}>E-commerce</div>
                        <div className={styles.thPrice}>₹29,999</div>
                      </th>
                      <th className={styles.tierColHeader}>
                        <div className={styles.thName}>Custom / Enterprise</div>
                        <div className={styles.thPrice}>Custom Quote</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_CATEGORIES.map((cat, cIdx) => (
                      <React.Fragment key={cIdx}>
                        <tr className={styles.categoryRow}>
                          <td colSpan={5} className={styles.categoryCell}>
                            {cat.name}
                          </td>
                        </tr>
                        {cat.features.map((feat, fIdx) => (
                          <tr key={fIdx} className={styles.featureRow}>
                            <td className={styles.featureNameCell}>
                              {feat.name}
                            </td>
                            <td className={styles.featureValueCell}>
                              {renderTableCell(feat.business)}
                            </td>
                            <td className={styles.featureValueCell}>
                              {renderTableCell(feat.premium)}
                            </td>
                            <td className={styles.featureValueCell}>
                              {renderTableCell(feat.ecommerce)}
                            </td>
                            <td className={styles.featureValueCell}>
                              {renderTableCell(feat.custom)}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standard Website Payment Terms & Transparency Cards */}
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
                    50% advance before project work begins to schedule dedicated engineering resources. The remaining 50% balance is settled upon milestone completion, prior to live domain launch or final repository handover.
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

            {/* Section E — FAQs Accordion */}
            <div className={styles.faqSectionWrapper}>
              <div className={styles.faqHeader}>
                <span className={styles.faqBadge}>
                  <HelpCircle size={13} /> Common Queries
                </span>
                <h3 className={styles.faqSectionTitle}>Frequently Asked Questions</h3>
                <p className={styles.faqSectionSubtitle}>
                  Clear answers on website package inclusions, deliverables, payment terms, and technical scope.
                </p>
              </div>

              <div className={styles.faqList}>
                {FAQS_LIST.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div key={fIdx} className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}>
                      <button
                        type="button"
                        className={styles.faqQuestionBtn}
                        onClick={() => toggleFaq(fIdx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.faqQuestionText}>{faq.q}</span>
                        <ChevronDown 
                          size={18} 
                          className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`} 
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.faqAnswerContainer}
                          >
                            <p className={styles.faqAnswerText}>{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section F — Final Conversion Section */}
            <div className={styles.finalConversionCard}>
              <div className={styles.finalConversionContent}>
                <span className={styles.finalConversionBadge}>
                  <Sparkles size={13} /> Tailored Scope Guidance
                </span>
                <h2 className={styles.finalConversionTitle}>
                  Not Sure Which Website Is Right for You?
                </h2>
                <p className={styles.finalConversionDesc}>
                  Tell us about your business and goals. We'll help you identify the right package and clarify the project scope before you commit.
                </p>
                <div className={styles.finalConversionActions}>
                  <a 
                    href="/#audit?req=new_website" 
                    className={styles.finalPrimaryBtn}
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={16} />
                  </a>
                  <button
                    type="button"
                    className={styles.finalSecondaryBtn}
                    onClick={() => {
                      if (window.openAIPriyaChat) {
                        window.openAIPriyaChat();
                      } else {
                        window.dispatchEvent(new CustomEvent('bluetick:open-ai-chat'));
                      }
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Consult AI Priya (Instant)</span>
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
