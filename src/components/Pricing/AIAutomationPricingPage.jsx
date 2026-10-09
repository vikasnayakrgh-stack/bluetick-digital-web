import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Info, Sparkles, ChevronRight, Bot, MessageSquare, Calculator, ShieldCheck, ArrowLeft, Zap } from 'lucide-react';
import SEO from '../Common/SEO';
import styles from './AIAutomationPricingPage.module.css';

const AI_PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluetickdigital.in/pricing/ai-automation#webpage",
      "url": "https://bluetickdigital.in/pricing/ai-automation",
      "name": "AI Automation Pricing | Setup + Monthly Operations Starting ₹5K | Bluetick Digital",
      "description": "Transparent setup and monthly pricing for AI sales agents, WhatsApp business bots, autonomous lead triage, and CRM integrations in India.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://bluetickdigital.in/pricing" },
          { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://bluetickdigital.in/pricing/ai-automation" }
        ]
      }
    }
  ]
};

const AUTOMATION_TIERS = [
  {
    name: "Starter Automation",
    setup: "From ₹5,000",
    monthly: "+ ₹1,000 / month",
    model: "Setup + Monthly",
    tagline: "Single automated workflow to eliminate repetitive manual data entry and capture inbound leads.",
    features: [
      "1 core automated workflow (e.g. Inquiry capture to Google Sheets / CRM)",
      "Standard webhook & form listener integration",
      "Automated instant email / WhatsApp notification alert",
      "Basic intent triage & data formatting",
      "Cloud execution hosting & uptime monitoring",
      "Standard email support & monthly maintenance"
    ],
    popular: false,
    ctaText: "Start Starter Workflow"
  },
  {
    name: "Business Automation",
    setup: "From ₹10,000",
    monthly: "+ ₹2,000 / month",
    model: "Setup + Monthly",
    tagline: "Autonomous sales qualification and conversational AI support connected to your CRM.",
    features: [
      "AI Sales or Support Agent (GPT-4o-mini / Claude 3.5)",
      "Official Meta WhatsApp Business API integration",
      "Sub-30 second lead qualification & calendar appointment booking",
      "Atomic Supabase / CRM bidirectional database synchronization",
      "Human handoff alerts & notification cooldown rules",
      "Monthly prompt engineering updates & conversation log audits",
      "Priority WhatsApp engineering support"
    ],
    popular: true,
    ctaText: "Deploy Business Agent"
  },
  {
    name: "Advanced Automation",
    setup: "From ₹20,000",
    monthly: "+ ₹5,000 / month",
    model: "Setup + Monthly",
    tagline: "End-to-end multi-agent orchestration for sales, customer support, and operational logistics.",
    features: [
      "Multi-agent architecture (Sales Consultant + Support Triage + Escalations)",
      "Dynamic catalog lookup, inventory status & order tracking bots",
      "Custom self-hosted n8n workflows with complex business logic",
      "Automated follow-up cadences with anti-spam rate limiting",
      "Private vector knowledge base (RAG) for deep document retrieval",
      "Weekly performance reviews & conversation optimization",
      "Dedicated account engineer & SLA guarantees"
    ],
    popular: false,
    ctaText: "Scale Advanced Workflows"
  },
  {
    name: "Custom AI Systems",
    setup: "Custom Pricing",
    monthly: "Custom Monthly SLA",
    model: "Enterprise Architecture",
    tagline: "Proprietary enterprise AI infrastructure, internal tooling, and on-premise VPC deployments.",
    features: [
      "Custom fine-tuned or local LLM deployments",
      "Proprietary ERP, SAP, or legacy database integrations",
      "Custom agentic architectures with strict data isolation",
      "High-throughput concurrency & compliance audits",
      "Full source code ownership & architectural documentation",
      "Dedicated 24/7 incident response SLA"
    ],
    popular: false,
    ctaText: "Consult Enterprise Architect"
  }
];

const META_CONVERSATION_RATES = [
  { category: "Marketing", rate: "~₹0.863", desc: "Promotional broadcasts, product offers & re-engagement campaigns" },
  { category: "Utility", rate: "~₹0.115", desc: "Order confirmations, shipping updates, payment links & reminders" },
  { category: "Authentication", rate: "~₹0.115", desc: "Login OTPs, 2-factor authentication & account verification" },
  { category: "Service (Support)", rate: "User-Initiated", desc: "Free customer service window (24 hours from user message)" }
];

const AIAutomationPricingPage = () => {
  return (
    <>
      <SEO
        title="AI Automation Pricing | Setup + Monthly Operations Starting ₹5K | Bluetick Digital"
        description="Transparent setup and monthly pricing for AI sales agents, WhatsApp business automation, and CRM integrations in India. Starting from ₹5,000 setup + ₹1,000/month."
        keywords="AI Automation Pricing, WhatsApp Bot Cost India, AI Sales Agent Pricing, n8n Automation Pricing, Bluetick Digital"
        canonical="https://bluetickdigital.in/pricing/ai-automation"
        structuredData={AI_PRICING_SCHEMA}
      />

      <div className={styles.aiPricingPage}>
        {/* Breadcrumb Bar */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
          <div className="container">
            <ol className={styles.breadcrumbList}>
              <li><Link to="/">Home</Link></li>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} />
              <li><Link to="/pricing">Pricing Hub</Link></li>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} />
              <li aria-current="page">AI Automation &amp; Workflows</li>
            </ol>
          </div>
        </nav>

        {/* Back Link */}
        <div className="container">
          <Link to="/pricing" className={styles.backToHubLink}>
            <ArrowLeft size={15} />
            <span>Switch to Website &amp; E-commerce Pricing</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className={styles.pageHero}>
          <div className="container">
            <span className={styles.sectionBadge}>
              <Bot size={13} /> Setup + Monthly Operations Model
            </span>
            <h1 className={styles.pageTitle}>
              AI Automation Pricing
            </h1>
            <p className={styles.pageSubtitle}>
              Predictable setup investment plus transparent monthly operational upkeep for autonomous AI sales agents, WhatsApp bots, and CRM sync pipelines.
            </p>
          </div>
        </header>

        {/* Mandatory Scope Disclaimer Callout */}
        <div className="container">
          <div className={styles.mandatoryNoticeBox}>
            <Info size={20} className={styles.noticeIcon} />
            <div className={styles.noticeText}>
              <strong>Customizable Workflow Pricing:</strong> All tiers represent starting estimates. Final pricing depends on the specific workflow requirements, integration depth, AI token consumption, and business complexity.
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <section className={styles.tiersSection}>
          <div className="container">
            <div className={styles.tiersGrid}>
              {AUTOMATION_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`${styles.tierCard} ${tier.popular ? styles.popularCard : ''}`}
                >
                  {tier.popular && (
                    <div className={styles.popularBadge}>
                      <Sparkles size={12} /> Most Popular
                    </div>
                  )}

                  <div className={styles.tierTop}>
                    <div className={styles.tierModelBadge}>{tier.model}</div>
                    <h2 className={styles.tierName}>{tier.name}</h2>
                    <div className={styles.priceWrap}>
                      <span className={styles.setupPrice}>{tier.setup}</span>
                      <span className={styles.monthlyPrice}>{tier.monthly}</span>
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

            {/* ==================================================
                WHATSAPP BUSINESS API (OFFICIAL META PASS-THROUGH)
                Positioned inside AI Automation as requested
               ================================================== */}
            <div id="whatsapp" className={styles.whatsappSubsection}>
              <div className={styles.whatsappHeader}>
                <div className={styles.whatsappBadge}>
                  <MessageSquare size={14} /> Ecosystem Capability
                </div>
                <h2 className={styles.whatsappTitle}>
                  WhatsApp Business API (Official Meta Pass-Through)
                </h2>
                <p className={styles.whatsappSubtitle}>
                  Meta charges for WhatsApp API conversations directly based on standardized per-conversation category rates. Bluetick Digital passes these through at exact actuals with zero markup.
                </p>
              </div>

              {/* Rates Table / Grid */}
              <div className={styles.ratesGrid}>
                {META_CONVERSATION_RATES.map((rate, rIdx) => (
                  <div key={rIdx} className={styles.rateCard}>
                    <span className={styles.rateCategory}>{rate.category}</span>
                    <span className={styles.rateValue}>{rate.rate}</span>
                    <p className={styles.rateDesc}>{rate.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tools & Verification Links */}
              <div className={styles.whatsappToolsBar}>
                <div className={styles.toolsBarText}>
                  <strong>Official Meta Verification &amp; Calculators:</strong> WABA onboarding, phone number migration, and Green Tick assistance are bundled into our Business and Advanced Automation setups.
                </div>
                <div className={styles.toolsBarActions}>
                  <Link to="/whatsapp-api-pricing-india" className={styles.toolBtn}>
                    <Calculator size={16} />
                    <span>WhatsApp Calculator</span>
                  </Link>
                  <Link to="/whatsapp-green-tick-checker" className={styles.toolBtnOutline}>
                    <ShieldCheck size={16} />
                    <span>Green Tick Eligibility</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Live Demo Callout */}
            <div className={styles.bottomDemoCallout}>
              <div className={styles.demoCalloutContent}>
                <div className={styles.demoCalloutText}>
                  <h3 className={styles.demoCalloutTitle}>Experience our AI Sales Agent in action</h3>
                  <p className={styles.demoCalloutDesc}>
                    Try AI Priya right now on this website. See how an autonomous agent qualifies business needs, recommends plans, and answers sales inquiries in real-time.
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.demoCalloutBtn}
                  onClick={() => {
                    if (window.openAIPriyaChat) {
                      window.openAIPriyaChat();
                    } else {
                      window.dispatchEvent(new CustomEvent('bluetick:open-ai-chat'));
                    }
                  }}
                >
                  <Zap size={16} />
                  <span>Launch Live Priya Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPricingPage;
