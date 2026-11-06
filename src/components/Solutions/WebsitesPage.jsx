import React, { useEffect } from 'react';
import { Globe, Layout, Smartphone, Search, Zap, Code2, Database, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';
import WebsitesPortfolio from './WebsitesPortfolio';
import { SITE_CONFIG } from '../../config/siteConfig';
import { trackWhatsAppClick, trackCtaClick } from '../../utils/analytics';
import { captureUtmParams } from '../../utils/utm';

const WHATSAPP_RAW = SITE_CONFIG.contact.whatsappRaw || '916261003050';

const HERO_WA_URL = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  'Hi Bluetick Digital! I’m interested in the ₹9,999 Complete Business Website package (10 pages + Domain + Hosting + Maintenance). Please share more details.'
)}`;

const PRICING_WA_URL = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  'Hi Bluetick Digital! I want to start my Business Website for ₹9,999. Can you guide me on the next steps?'
)}`;

const FINAL_CTA_WA_URL = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  'Hi Bluetick Digital! I\'m planning to build a business website. Can we discuss requirements and timelines?'
)}`;

const WEBSITES_WORKFLOW = [
  {
    icon: Search,
    duration: "Stage 01",
    title: "Discovery & User Journey Blueprint",
    description: "We analyze your audience, target search terms, and conversion pathways to design a clear information architecture.",
    deliverable: "10-Page Wireframe & Content Blueprint"
  },
  {
    icon: Layout,
    duration: "Stage 02",
    title: "Custom Swiss-Style UI/UX Design",
    description: "High-contrast visual design, brand-tailored typography, clean mobile layouts, and conversion-focused CTAs.",
    deliverable: "Figma High-Fidelity Prototype"
  },
  {
    icon: Code2,
    duration: "Stage 03",
    title: "Production Frontend Engineering",
    description: "Built on React 18 & Vite for lightning-fast sub-second TTFB, SEO structured data, and 95+ Core Web Vitals.",
    deliverable: "Clean Production Codebase & Domain/Hosting Setup"
  },
  {
    icon: Database,
    duration: "Stage 04",
    title: "WhatsApp & CRM Pipeline Integration",
    description: "Connecting your inquiry forms directly to WhatsApp Meta API and database for instant zero-loss lead routing.",
    deliverable: "Live Deployed Web Platform & Milestone Handover"
  }
];

const WEBSITES_DELIVERABLES = [
  {
    icon: Globe,
    title: "Performance & UX Engineering",
    items: [
      "Up to 10 custom responsive pages (Mobile, Tablet, Desktop)",
      "Sub-second page load times (<1.2s LCP on mobile)",
      "Interactive micro-animations with Framer Motion",
      "Full cross-browser & mobile viewport optimization"
    ]
  },
  {
    icon: Search,
    title: "Search & Visibility (SEO & GEO)",
    items: [
      "Full JSON-LD Schema structured data markup",
      "OpenGraph social preview cards & meta descriptions",
      "Dynamic XML sitemap & search console indexing",
      "Generative Engine Optimization (ChatGPT & Perplexity ready)"
    ]
  },
  {
    icon: Zap,
    title: "Connected Inclusions & Maintenance",
    items: [
      "1 year of domain registration (.com, .in, .co.in)",
      "1 year of high-speed cloud hosting with global CDN & SSL",
      "12 months of technical maintenance & uptime monitoring",
      "Instant WhatsApp 1-click lead capture routing"
    ]
  }
];

const WEBSITES_PRICING_TIERS = [
  {
    name: "Business Website",
    price: "₹9,999",
    priceLabel: "Confirmed All-Inclusive Package",
    paymentTerms: "50% Advance · 50% on Launch",
    description: "Complete 10-page business web engine designed to establish instant market credibility and convert search & ad traffic into WhatsApp enquiries.",
    features: [
      "Up to 10 custom-designed website pages",
      "Domain registration included for 1 year (.com / .in / .co.in)",
      "High-speed cloud hosting included for 1 year (SSL + CDN)",
      "12 months of technical maintenance & uptime monitoring",
      "100% mobile-responsive design (<1.2s load speeds)",
      "Instant WhatsApp enquiry integration & lead routing",
      "Clean modern React 18 / Vite frontend architecture",
      "Turnaround time: 5 to 7 business days"
    ],
    renewalInfo: "Domain & hosting renew annually at actual provider rates (~₹2,500–₹3,500/year). 100% ownership of your code, domain, and data with zero vendor lock-in.",
    ctaHref: "/#audit?req=new_website",
    ctaText: "Get My Business Website",
    whatsappHref: PRICING_WA_URL,
    whatsappText: "Enquire via WhatsApp",
    onCtaClick: () => trackCtaClick('pricing_business_website_get_quote', '/#audit?req=new_website'),
    onWhatsAppClick: () => trackWhatsAppClick('pricing_card_9999')
  },
  {
    name: "Premium Website",
    price: "₹19,999",
    featured: true,
    priceLabel: "Growth Architecture",
    description: "Tailored multi-page interactive showcase built for high conversions, search engine prominence, and corporate credibility.",
    features: [
      "Multi-section corporate information architecture",
      "Custom Swiss-style typography & editorial visual design",
      "Supabase CRM database lead logging",
      "Full JSON-LD schema markup for Google SEO",
      "Interactive micro-animations & conversion touchpoints",
      "Priority milestone sprint delivery"
    ],
    ctaHref: "/#audit?req=new_website",
    ctaText: "Choose Premium Website",
    onCtaClick: () => trackCtaClick('pricing_premium_website_choose', '/#audit?req=new_website')
  },
  {
    name: "Custom / Enterprise Website",
    price: "Custom quote",
    priceLabel: "Bespoke Digital Systems",
    description: "Bespoke digital architecture, large catalogues, custom web applications, client portals, and deep multi-channel CRM integrations.",
    features: [
      "Large product catalogues & complex e-commerce requirements",
      "Advanced workflows, customer portals & bespoke web logic",
      "Custom integrations (ERPs, proprietary APIs, CRMs)",
      "Specialized database architecture & role-based authentication",
      "Dedicated technical architecture roadmap & weekly milestones"
    ],
    ctaHref: "/#audit?req=website_plus_automation",
    ctaText: "Discuss Your Project",
    onCtaClick: () => trackCtaClick('pricing_custom_enterprise_discuss', '/#audit?req=website_plus_automation')
  }
];

const WEBSITES_FAQS = [
  {
    q: "What is included in the ₹9,999 package?",
    a: "The ₹9,999 Business Website package is an all-inclusive launch solution for growing businesses. It includes up to 10 custom-designed website pages, 1 year of domain registration (.com, .in, or .co.in), 1 year of high-speed cloud hosting with global CDN, 12 months of technical maintenance, mobile-first responsive architecture, an SSL security certificate, and 1-click WhatsApp enquiry integration."
  },
  {
    q: "How many pages are included?",
    a: "Up to 10 website pages are included in the baseline package. A standard 10-page structure typically covers Home, About Us, Services/Products, Pricing/Packages, Portfolio/Showcase, Contact Us, Privacy Policy, Terms & Conditions, and up to 2 custom landing or conversion sections. Additional pages can be added as needed based on your scope."
  },
  {
    q: "Is domain included?",
    a: "Yes. Standard 1-year domain registration (.com, .in, or .co.in) is fully included. If your business already owns a domain, we configure DNS records and connect it securely to your new site at no extra charge. Premium or auctioned domains are excluded from the bundled offer and billed at actual registrar cost."
  },
  {
    q: "Is hosting included?",
    a: "Yes. 1 full year of high-speed cloud hosting on global edge CDN (Vercel / Cloudflare) with automated SSL security certificates (HTTPS) is fully included. This architecture guarantees sub-second page loads (<1.2s LCP) and 99.9% uptime."
  },
  {
    q: "What does 12-month maintenance cover?",
    a: "12 months of technical maintenance includes: (1) Core technical health: continuous uptime monitoring, SSL security checks, monthly cloud backups, and framework security patches; (2) Minor content updates: updating phone numbers, contact info, business hours, text tweaks, or image replacements. Excluded from standard maintenance: major redesigns, new page additions, custom software features, and third-party subscription costs (e.g. paid CRM accounts, Meta conversation fees). Support is available via WhatsApp and email during standard business hours (Mon–Sat)."
  },
  {
    q: "What happens after domain and hosting expire?",
    a: "After the initial 12-month period, your domain registration and cloud hosting renew annually at actual standard provider cost (typically ₹2,500 to ₹3,500/year depending on your domain extension and traffic scale). You retain 100% ownership of your domain name, code repository, and assets with zero vendor lock-in. Technical maintenance continuation is available through an optional annual support retainer."
  },
  {
    q: "What are the payment terms?",
    a: "Our milestone payment terms are clear and transparent: 50% advance upon project kickoff to reserve engineering sprint bandwidth, and the remaining 50% upon final milestone approval before the live production DNS launch and ownership handover."
  },
  {
    q: "What is the expected delivery timeline?",
    a: "The standard delivery timeline for a complete 10-page Business Website is 5 to 7 business days from the receipt of your text content, brand assets, and initial brief."
  }
];

const WEBSITES_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bluetickdigital.in/solutions/websites#service",
      "name": "Complete 10-Page Business Website Package",
      "provider": {
        "@type": "Organization",
        "@id": "https://bluetickdigital.in/#organization",
        "name": "Bluetick Digital",
        "url": "https://bluetickdigital.in"
      },
      "serviceType": "High-Performance Business Web Platforms",
      "description": "Get your complete 10-page business website at just ₹9,999. Includes 1-yr domain, 1-yr hosting, 12 months maintenance, mobile-first responsive layout, and instant WhatsApp enquiry integration.",
      "offers": {
        "@type": "Offer",
        "price": "9999",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://bluetickdigital.in/solutions/websites"
      },
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://bluetickdigital.in/#solutions" },
        { "@type": "ListItem", "position": 3, "name": "Websites", "item": "https://bluetickdigital.in/solutions/websites" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bluetickdigital.in/solutions/websites#faq",
      "mainEntity": WEBSITES_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

const WebsitesPage = () => {
  useEffect(() => {
    // Capture and persist UTM parameters for Meta Ads attribution
    captureUtmParams();
  }, []);

  return (
    <>
      <SEO
        title="Get Your Complete 10-Page Business Website at Just ₹9,999 | Bluetick Digital"
        description="Get your complete 10-page business website at just ₹9,999. Includes 1-yr domain registration, 1-yr cloud hosting, 12 months maintenance, mobile-responsive design, and WhatsApp lead integration. Launched in 5–7 days."
        keywords="Business Website ₹9999, 10 Page Website Development, Lead Generation Websites, Mobile Responsive Website India, React 18, Bluetick Digital"
        canonical="https://bluetickdigital.in/solutions/websites"
        structuredData={WEBSITES_SCHEMA}
      />

      {/* Hero Section: Optimized for Meta Ads Traffic & Instant Conversion */}
      <SubPageHero
        badgeIcon={Globe}
        badgeText="Confirmed Business Package · 5–7 Day Sprint"
        title="Get Your Complete 10-Page Business Website at Just"
        gradientWord="₹9,999"
        priceBadge={{
          amount: "₹9,999 All-Inclusive",
          label: "10 Pages · Domain · Hosting · 12 Mo Maintenance"
        }}
        subtitle="Launch your high-performance business web engine with everything included: up to 10 custom pages, 1 year of domain registration (.com/.in), 1 year of high-speed cloud hosting (SSL + global CDN), 12 months of technical maintenance, and instant WhatsApp enquiry integration. 50% advance to start, delivered in 5–7 business days."
        metrics={[
          "Up to 10 Custom Pages",
          "1-Yr Domain & Hosting Included",
          "12 Months Technical Maintenance",
          "Instant WhatsApp Lead Routing"
        ]}
        primaryCtaText="Get My Business Website"
        primaryCtaHref="/#audit?req=new_website"
        onPrimaryClick={() => trackCtaClick('hero_get_my_business_website', '/#audit?req=new_website')}
        secondaryCtaText="Enquire on WhatsApp"
        secondaryCtaHref={HERO_WA_URL}
        secondaryIsWhatsApp={true}
        secondaryOnClick={() => trackWhatsAppClick('hero_secondary')}
      />

      {/* Section 01 / — The Strategic Shift */}
      <SubPageShift
        sectionNumber="01 /"
        sectionBadge="The Strategic Shift"
        title="Why Generic Template Websites Fail & How Bluetick Solves It"
        subtitle="The difference between a sluggish static brochure and an active digital sales engine."
        traditionalTitle="Generic Freelancer / WordPress Template"
        traditionalItems={[
          "Slow 4+ second load times with heavy plugin bloat.",
          "Static contact forms that send inquiries to forgotten inboxes.",
          "Generic stock templates that look identical to competitors.",
          "Zero structured schema markup or AI search visibility.",
          "No integration with WhatsApp, CRM, or automated follow-ups."
        ]}
        bluetickTitle="Bluetick High-Performance Web Engine"
        bluetickItems={[
          "Sub-second React 18 architecture with 95+ Core Web Vitals.",
          "Instant WhatsApp notification triggers and atomic CRM logging.",
          "Custom Swiss-style editorial UI designed around your brand.",
          "Full JSON-LD structured data for Google & AI search engines.",
          "Pre-built for 24/7 AI qualification bots & automated workflows."
        ]}
      />

      {/* Section 02 / — 4-Step Engineering Sprint Cycle */}
      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="Engineering Sprint Cycle"
        title="From Architecture Blueprint to Production Launch"
        subtitle="A disciplined 4-stage sprint process designed for clarity, precision, and on-time delivery in 5 to 7 days."
        steps={WEBSITES_WORKFLOW}
      />

      {/* Section 03 / — Deliverables Architecture */}
      <SubPageDeliverables
        sectionNumber="03 /"
        sectionBadge="Included Architecture"
        title="Complete Production Deliverables"
        subtitle="Everything needed for high conversion, search prominence, and seamless scalability."
        categories={WEBSITES_DELIVERABLES}
        techStack={[
          "React 18",
          "Vite",
          "Framer Motion",
          "Plus Jakarta Sans",
          "Supabase DB",
          "Meta WABA API",
          "Vercel Edge CDN"
        ]}
      />

      {/* Section 04 / — Portfolio & Trust: Verified Work & Demo Systems */}
      <WebsitesPortfolio
        sectionNumber="04 /"
        sectionBadge="Verified Work & Demo Systems"
        title="Live Production & Interactive Demo Systems"
        subtitle="Inspect real digital platforms engineered by Bluetick Digital. Test sub-second load speeds, mobile layouts, and connected WhatsApp enquiry workflows."
      />

      {/* Section 05 / — Transparent Pricing Tiers */}
      <div id="packages">
        <SubPagePricing
          sectionNumber="05 /"
          sectionBadge="Transparent Investment"
          title="Transparent Website Packages"
          subtitle="No hidden agency retainers. Clear milestone-based scopes framed around your business stage."
          tiers={WEBSITES_PRICING_TIERS}
          ctaHref="/#audit?req=new_website"
          disclaimer={
            <span>
              Starting from prices indicate standard baseline packages. The ₹9,999 Business Website package includes up to 10 pages, 1 year domain, 1 year hosting, and 12 months maintenance with 50% advance and 50% on final launch approval. Domain &amp; hosting renew annually at standard provider cost (~₹2,500–₹3,500/yr). For detailed industry pricing benchmarks, see our <a href="/blog/website-development-cost-in-india-2026" style={{ color: 'var(--color-brand)', textDecoration: 'underline', fontWeight: 600 }}>2026 website development cost guide</a>.
            </span>
          }
        />
      </div>

      {/* Section 06 / — FAQ Section */}
      <SubPageFaq
        sectionNumber="06 /"
        sectionBadge="Frequently Asked Questions"
        title="Common Questions About Our Web Platforms"
        subtitle="Clear answers on tech stack, inclusions, delivery timelines, payment terms, and maintenance."
        faqs={WEBSITES_FAQS}
      />

      {/* Section 07 / — Bottom CTA Banner */}
      <SubPageCta
        badge="Verified ₹9,999 Package · 5–7 Day Sprint"
        title="Ready to Launch Your 10-Page Business Website for ₹9,999?"
        subtitle="Get up to 10 custom pages, 1 year domain registration, 1 year cloud hosting, and 12 months maintenance with 50% advance. Connect directly with our engineering team."
        ctaText="Get My Business Website"
        ctaHref="/#audit?req=new_website"
        onCtaClick={() => trackCtaClick('bottom_cta_get_my_business_website', '/#audit?req=new_website')}
        whatsappHref={FINAL_CTA_WA_URL}
        whatsappText="Chat on WhatsApp"
        onWhatsAppClick={() => trackWhatsAppClick('final_cta')}
      />
    </>
  );
};

export default WebsitesPage;
