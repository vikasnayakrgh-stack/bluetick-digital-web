import React from 'react';
import { Globe, Layout, Smartphone, Search, Zap, Code2, Database, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';
import NavratriWebsiteCampaign from './NavratriWebsiteCampaign';

const WEBSITES_WORKFLOW = [
  {
    icon: Search,
    duration: "Stage 01",
    title: "Discovery & User Journey Blueprint",
    description: "We analyze your audience, competitors, and conversion pathways to design an architecture that captures intent.",
    deliverable: "Wireframes & Information Architecture"
  },
  {
    icon: Layout,
    duration: "Stage 02",
    title: "Custom Swiss-Style UI/UX Design",
    description: "High-contrast visual design, custom typography, micro-interactions, and mobile-first responsive layouts.",
    deliverable: "Figma High-Fidelity Interactive Prototype"
  },
  {
    icon: Code2,
    duration: "Stage 03",
    title: "Production Frontend Engineering",
    description: "Engineered in React 18 & Vite for lightning-fast sub-second TTFB, SEO structured data, and 95+ Core Web Vitals.",
    deliverable: "Clean Git Repository & Static Build"
  },
  {
    icon: Database,
    duration: "Stage 04",
    title: "AI Chat & CRM Pipeline Integration",
    description: "Connecting your inquiry forms directly to WhatsApp Meta API and Supabase CRM for automated lead capture.",
    deliverable: "Live Deployed Production Web Platform"
  }
];

const WEBSITES_DELIVERABLES = [
  {
    icon: Globe,
    title: "Performance & UX Engineering",
    items: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Sub-second page load times (<1.2s LCP)",
      "Interactive micro-animations with Framer Motion",
      "Accessibility & WCAG AA standard compliance"
    ]
  },
  {
    icon: Search,
    title: "Search & Visibility (SEO & GEO)",
    items: [
      "Full JSON-LD Schema structured data markup",
      "OpenGraph social preview cards & meta tags",
      "Dynamic XML sitemap & robots.txt indexing",
      "Generative Engine Optimization (ChatGPT & Perplexity ready)"
    ]
  },
  {
    icon: Zap,
    title: "Connected Lead Automation",
    items: [
      "Integrated WhatsApp 1-click lead capture widget",
      "Atomic Supabase database inquiry recording",
      "Instant email notifications to your sales team",
      "Custom analytics & conversion tracking events"
    ]
  }
];

const WEBSITES_PRICING_TIERS = [
  {
    name: "Business Website",
    price: "₹9,999",
    description: "Essential digital presence for growing businesses looking to establish credibility and capture inbound leads.",
    features: [
      "Custom responsive design (mobile, tablet, desktop)",
      "Sub-second page speeds (<1.2s LCP on mobile)",
      "Integrated WhatsApp inquiry capture & lead routing",
      "Essential SEO meta tags & fast hosting setup",
      "Production-ready codebase & clean architecture"
    ],
    ctaHref: "/#audit?req=new_website",
    ctaText: "Start Business Website"
  },
  {
    name: "Premium Website",
    price: "₹19,999",
    featured: true,
    description: "Tailored multi-page interactive showcase built for high conversions, search engine visibility, and corporate credibility.",
    features: [
      "Multi-section corporate information architecture",
      "Custom Swiss-style typography & editorial visual design",
      "Supabase CRM database lead logging",
      "Full JSON-LD schema markup for Google SEO",
      "Interactive micro-animations & conversion touchpoints"
    ],
    ctaHref: "/#audit?req=new_website",
    ctaText: "Choose Premium Website"
  },
  {
    name: "Custom / Enterprise Website",
    price: "Custom quote",
    description: "Bespoke digital architecture, large catalogues, custom web applications, client portals, and deep multi-channel CRM integrations.",
    features: [
      "Large product catalogues & complex e-commerce requirements",
      "Advanced workflows, customer portals & bespoke web logic",
      "Custom integrations (ERPs, proprietary APIs, CRMs)",
      "Specialized database architecture & role-based authentication",
      "Dedicated technical architecture roadmap & weekly milestones"
    ],
    ctaHref: "/#audit?req=website_plus_automation",
    ctaText: "Discuss Your Project"
  }
];

const WEBSITES_FAQS = [
  {
    q: "How long does it take to design and launch our website?",
    a: "Standard business websites are delivered within 5 to 7 business days. Larger multi-page platforms and custom web applications typically take 10 to 14 business days from discovery kickoff to production launch."
  },
  {
    q: "Will our website load fast on mobile devices?",
    a: "Yes. Every website we build is engineered with modern React/Vite architecture, zero heavy bloatware, and optimized assets, targeting 90+ Google Core Web Vitals performance benchmarks and sub-second load times on mobile 4G/5G."
  },
  {
    q: "Can we connect our website forms to WhatsApp and our CRM?",
    a: "Absolutely. All Bluetick websites are pre-architected to connect with our official WhatsApp Meta API bots and Supabase PostgreSQL databases, ensuring zero dropped inquiries and instant lead routing."
  },
  {
    q: "Do you handle domain setup and hosting?",
    a: "Yes, we handle complete DNS configuration, SSL security certificate provisioning, and high-speed global CDN deployment (Vercel / Cloudflare) as part of our sprint handover."
  }
];

const WEBSITES_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bluetickdigital.in/solutions/websites#service",
      "name": "Business Website Design & Web Platform Engineering",
      "provider": {
        "@type": "Organization",
        "@id": "https://bluetickdigital.in/#organization",
        "name": "Bluetick Digital"
      },
      "serviceType": "High-Performance Business Web Platforms",
      "description": "High-converting, sub-second business websites designed to attract, engage, and convert customers. Engineered with modern React tech and connected AI lead pipelines.",
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
  return (
    <>
      <SEO
        title="Business Website Design & Web Platform Engineering"
        description="High-converting, sub-second business websites designed to attract, engage, and convert customers. Engineered with modern React tech and connected AI lead pipelines."
        keywords="Business Website Design, Lead Generation Websites, Modern Web Development, React 18, Bluetick Digital"
        canonical="https://bluetickdigital.in/solutions/websites"
        structuredData={WEBSITES_SCHEMA}
      />

      {/* Hero Section */}
      <SubPageHero
        badgeIcon={Globe}
        badgeText="Digital Platform Engineering"
        title="High-Speed Business Websites Engineered for"
        gradientWord="Measurable Growth."
        subtitle="Don't settle for a slow, static digital brochure. We build ultra-fast, mobile-first business web platforms that capture intent, rank on search engines, and connect directly to automated sales pipelines."
        metrics={[
          "Sub-1.2s LCP Load Speed",
          "100% Mobile Responsive",
          "Instant WhatsApp Lead Routing",
          "95+ Google Core Web Vitals"
        ]}
        primaryCtaText="Get Your Free Web Audit"
        primaryCtaHref="/#audit?req=new_website"
        secondaryCtaText="Explore System Workflow"
        secondaryCtaHref="#workflow"
      />

      {/* Navratri Website Campaign Spotlight */}
      <NavratriWebsiteCampaign />

      {/* The Strategic Shift */}
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

      {/* 4-Step Engineering Workflow */}
      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="Engineering Sprint Cycle"
        title="From Architecture Blueprint to Production Launch"
        subtitle="A disciplined 4-stage sprint process designed for clarity, precision, and on-time delivery."
        steps={WEBSITES_WORKFLOW}
      />

      {/* Deliverables Checklist */}
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

      {/* Pricing Tiers */}
      <div id="packages">
        <SubPagePricing
          sectionNumber="04 /"
          sectionBadge="Transparent Investment"
          title="Transparent Website Packages"
          subtitle="No hidden agency retainers. Clear milestone-based scopes framed around your business stage."
          tiers={WEBSITES_PRICING_TIERS}
          ctaHref="/#audit?req=new_website"
          disclaimer={
            <>
              Starting from prices indicate standard baseline packages. Final investment is scoped transparently during your free audit based on custom pages, integrations, and specific feature requirements. For detailed industry pricing benchmarks, see our <a href="/blog/website-development-cost-in-india-2026" style={{ color: 'var(--color-brand)', textDecoration: 'underline', fontWeight: 600 }}>2026 website development cost guide</a>.
            </>
          }
        />
      </div>

      {/* FAQ Section */}
      <SubPageFaq
        sectionNumber="05 /"
        sectionBadge="Frequently Asked Questions"
        title="Common Questions About Our Web Platforms"
        subtitle="Clear answers on tech stack, delivery timelines, and maintenance."
        faqs={WEBSITES_FAQS}
      />

      {/* Bottom CTA Banner */}
      <SubPageCta
        badge="Free 30-Minute Web Architecture Audit"
        title="Ready to Build a High-Performance Digital Platform?"
        subtitle="We will analyze your current digital presence, provide a clear technical roadmap, and give you an exact milestone quote in 24 hours."
        ctaText="Get Your Free Web Audit"
        ctaHref="/#audit?req=new_website"
      />
    </>
  );
};

export default WebsitesPage;
