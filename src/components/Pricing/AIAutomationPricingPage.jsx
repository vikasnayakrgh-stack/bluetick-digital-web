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
      "name": "AI Automation & WhatsApp Pricing | Annual Plans Starting ₹11,999/yr | Bluetick Digital",
      "description": "Transparent annual pricing for official WhatsApp Business platform, 24/7 AI conversational sales agents, and custom workflow automations. BYOK model with direct provider billing.",
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
    name: "Growth Plan",
    price: "₹11,999",
    period: "/ year",
    model: "Annual Platform",
    tagline: "Official Meta WhatsApp Business API platform foundation for team messaging, broadcasts, and shared inbox.",
    features: [
      "Official Meta WABA API onboarding & panel access",
      "Shared team multi-agent chat inbox",
      "Unlimited broadcast campaigns (Meta conversation charges apply)",
      "Template message management & approval assistance",
      "Green Tick verification guidance & phone migration",
      "Annual billing with manual renewal (no auto-debit)"
    ],
    popular: false,
    ctaText: "Get Growth Plan",
    cta: "/#audit?req=whatsapp_waba"
  },
  {
    name: "AI Growth Engine",
    price: "₹14,999",
    period: "/ year",
    note: "*Requires active Growth Plan (₹11,999/yr) or get both with Power Combo (₹25,000/yr)",
    model: "Annual AI Layer",
    tagline: "Autonomous 24/7 conversational sales & support agent deployed over your WhatsApp Business platform.",
    features: [
      "Autonomous 24/7 AI conversational responses",
      "Sub-30 second lead qualification & intent triage",
      "Conversation memory & context-aware answering",
      "Supabase / CRM bidirectional database synchronization",
      "Automated follow-up scheduling & manager handoff alerts",
      "BYOK model: Direct LLM billing with zero agency markup"
    ],
    popular: false,
    ctaText: "Deploy AI Engine",
    cta: "/#audit?req=ai_automation"
  },
  {
    name: "Power Combo",
    price: "₹25,000",
    period: "/ year",
    note: "WhatsApp Platform + AI Growth Engine",
    model: "Unified Annual Suite",
    tagline: "Best value unified offering combining the official WhatsApp platform and autonomous AI engine.",
    features: [
      "Everything in Growth Plan (WhatsApp API & Multi-Agent Inbox)",
      "Everything in AI Growth Engine (24/7 Sales Agent & CRM Sync)",
      "Priority onboarding & unified workflow configuration",
      "BYOK model: Direct LLM provider billing with zero markup",
      "Annual billing with manual renewal (no auto-debit)",
      "Note: Does not include website development (standalone service)"
    ],
    popular: true,
    ctaText: "Choose Power Combo",
    cta: "/#audit?req=website_plus_automation"
  },
  {
    name: "Custom Automation Projects",
    price: "Custom quote",
    period: "",
    model: "Scoped Architecture",
    tagline: "Discussion-led engineering for bespoke multi-agent workflows, legacy ERP integrations, and custom logic.",
    features: [
      "Custom multi-step business logic & agentic pipelines",
      "Proprietary ERP, CRM, or database integrations",
      "Private vector knowledge bases (RAG) & document search",
      "Custom webhook architectures & high-concurrency pipelines",
      "Quotation tailored to integrations, workflow depth & SLA"
    ],
    popular: false,
    ctaText: "Contact Us for a Custom Quote",
    cta: "/#audit?req=ai_automation"
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
        title="AI Automation & WhatsApp Pricing | Annual Plans Starting ₹11,999/yr | Bluetick Digital"
        description="Predictable annual subscription plans for official Meta WhatsApp Business API platform, 24/7 AI conversational sales agents, and custom workflow automations. BYOK model with direct provider billing."
        keywords="AI Automation Pricing, WhatsApp Bot Cost India, AI Sales Agent Pricing, WhatsApp Business API Rates 2026, Bluetick Digital"
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
              <Bot size={13} /> Annual Subscription &amp; Platform Model
            </span>
            <h1 className={styles.pageTitle}>
              AI Automation &amp; WhatsApp Pricing
            </h1>
            <p className={styles.pageSubtitle}>
              Transparent annual subscription plans for official WhatsApp Business platform, autonomous AI sales agents, and custom workflow orchestrations.
            </p>
          </div>
        </header>

        {/* Mandatory Scope Disclaimer Callout */}
        <div className="container">
          <div className={styles.mandatoryNoticeBox}>
            <Info size={20} className={styles.noticeIcon} />
            <div className={styles.noticeText}>
              <strong>Bring Your Own Key (BYOK) Architecture:</strong> Subscriptions cover software platform access, webhook infrastructure, and system engineering. LLM API usage is paid directly to your chosen provider (OpenAI, Anthropic) at actual cost with zero agency markup or reply caps.
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
                      <Sparkles size={12} /> Best Value
                    </div>
                  )}

                  <div className={styles.tierTop}>
                    <div className={styles.tierModelBadge}>{tier.model}</div>
                    <h2 className={styles.tierName}>{tier.name}</h2>
                    <div className={styles.priceWrap}>
                      <span className={styles.annualPrice}>
                        {tier.price}
                        {tier.period && <span className={styles.pricePeriod}>{tier.period}</span>}
                      </span>
                      {tier.note && <span className={styles.tierNote}>{tier.note}</span>}
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

            {/* Bring Your Own API Key (BYOK) Model & Commercial Terms */}
            <div className={styles.byokSection}>
              <div className={styles.byokHeader}>
                <ShieldCheck size={22} color="#1d4ed8" />
                <h3 className={styles.byokTitle}>Bring Your Own Key (BYOK) Model &amp; Commercial Terms</h3>
              </div>
              <div className={styles.byokGrid}>
                <div className={styles.byokCard}>
                  <div className={styles.byokCardTitle}>Bring Your Own Key (BYOK) Model</div>
                  <p className={styles.byokCardDesc}>
                    You connect your chosen LLM provider (OpenAI, Anthropic, etc.) directly. You pay your provider directly at actual cost with zero agency markup, zero artificial reply caps, and no inflated add-ons.
                  </p>
                </div>

                <div className={styles.byokCard}>
                  <div className={styles.byokCardTitle}>Annual Subscription Billing &amp; Manual Renewal</div>
                  <p className={styles.byokCardDesc}>
                    All software plans are billed annually. Renewals are manual—we do not auto-debit your payment methods. Plan pricing covers software maintenance, webhook reliability, and workflow updates.
                  </p>
                </div>

                <div className={styles.byokCard}>
                  <div className={styles.byokCardTitle}>Meta WhatsApp Conversation Charges</div>
                  <p className={styles.byokCardDesc}>
                    WhatsApp API conversation charges are billed directly by Meta based on official category rates (Marketing, Utility, Service). Bluetick Digital passes these through at exact actuals with zero markup.
                  </p>
                </div>

                <div className={styles.byokCard}>
                  <div className={styles.byokCardTitle}>Independent Website &amp; Automation Scopes</div>
                  <p className={styles.byokCardDesc}>
                    Power Combo and automation subscriptions do not include website development. Websites and custom automations are distinct standalone scopes that can be purchased separately.
                  </p>
                </div>
              </div>
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
                  <strong>Official Meta Verification &amp; Calculators:</strong> WABA onboarding, phone number migration, and Green Tick assistance are included in our Growth Plan and Power Combo annual offerings.
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
