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
    name: "Starter Business Website",
    price: "₹10,000",
    description: "Essential digital presence for growing businesses looking to establish credibility and capture inbound leads.",
    features: [
      "Up to 3 high-converting landing pages",
      "Mobile-first responsive architecture",
      "WhatsApp inquiry chat integration",
      "SEO meta tags & fast hosting setup",
      "Standard 5-day delivery sprint"
    ]
  },
  {
    name: "Premium Growth Web Platform",
    price: "₹20,000",
    featured: true,
    description: "Multi-page interactive showcase built for high conversions, search engine dominance, and automated lead capture.",
    features: [
      "Up to 8 custom designed pages & sections",
      "Advanced motion & interactive components",
      "Supabase CRM database lead logging",
      "Full JSON-LD schema markup for Google SEO",
      "Custom contact & audit form multi-step wizard",
      "Dedicated 10-day engineering sprint"
    ]
  },
  {
    name: "Custom Enterprise Web System",
    price: "Custom Scoped",
    description: "Bespoke digital architecture, custom web applications, client portals, and deep multi-channel CRM integrations.",
    features: [
      "Unlimited custom pages & dynamic routes",
      "Custom web application features & dashboards",
      "Full AI Agent & WhatsApp API integration",
      "Multi-region deployment & 99.9% uptime SLA",
      "Dedicated account manager & sprint cycles"
    ]
  }
];

const WEBSITES_FAQS = [
  {
    q: "How long does it take to design and launch our website?",
    a: "Standard business websites are delivered within 5 to 7 business days. Larger multi-page platforms and custom web applications typically take 10 to 14 business days from discovery kickoff to production launch."
  },
  {
    q: "Will our website load fast on mobile devices?",
    a: "Yes. Every website we build is engineered with modern React/Vite architecture, zero heavy bloatware, and optimized assets, guaranteeing 90+ Google Core Web Vitals scores and sub-second load times on mobile 4G/5G."
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
        primaryCtaHref="/#audit"
        secondaryCtaText="Explore System Workflow"
        secondaryCtaHref="#workflow"
      />

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
        subtitle="A disciplined 4-stage sprint process guaranteeing clarity, precision, and on-time delivery."
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
      <SubPagePricing
        sectionNumber="04 /"
        sectionBadge="Transparent Investment"
        title="Transparent Website Packages"
        subtitle="No hidden agency retainers. Clear milestone-based scopes framed around your business stage."
        tiers={WEBSITES_PRICING_TIERS}
        disclaimer="Starting from prices indicate standard baseline packages. Final investment is scoped transparently during your free audit based on custom pages, integrations, and specific feature requirements."
      />

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
        ctaHref="/#audit"
      />
    </>
  );
};

export default WebsitesPage;
