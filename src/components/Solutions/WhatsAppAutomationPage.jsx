import React from 'react';
import { Sparkles, MessageCircle, CheckCheck, Zap, ShieldCheck, Send, Layers, Database } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';

const WA_WORKFLOW = [
  {
    icon: ShieldCheck,
    duration: "Stage 01",
    title: "Meta Business Verification & WABA Setup",
    description: "We set up your official Meta WhatsApp Business Account (WABA), verify your business manager, and apply for Green Tick verification.",
    deliverable: "Verified Official WhatsApp Business API Account"
  },
  {
    icon: MessageCircle,
    duration: "Stage 02",
    title: "Template Design & Meta Approval",
    description: "Drafting high-converting interactive template messages with quick-reply buttons, media headers, and submitting for 24h Meta approval.",
    deliverable: "Pre-Approved Meta Marketing & Utility Templates"
  },
  {
    icon: Zap,
    duration: "Stage 03",
    title: "Webhook Routing & AI Agent Connection",
    description: "Wiring WhatsApp webhooks to n8n automation pipelines and connecting our 24/7 AI intent qualification engine.",
    deliverable: "Live Connected Multi-Channel Routing Pipeline"
  },
  {
    icon: CheckCheck,
    duration: "Stage 04",
    title: "Team Inbox, Broadcast Engine & Launch",
    description: "Configuring multi-agent shared team inboxes, broadcast sequence triggers, and delivering staff training.",
    deliverable: "Production Ready Enterprise WhatsApp Channel"
  }
];

const WA_DELIVERABLES = [
  {
    icon: MessageCircle,
    title: "Official Meta API Infrastructure",
    items: [
      "Official WhatsApp Business Account (WABA) setup",
      "Green Tick verification application guidance",
      "High-speed Tier-1 Cloud API messaging servers",
      "Zero risk of number bans compared to unofficial tools"
    ]
  },
  {
    icon: Send,
    title: "Interactive Messaging & Broadcasts",
    items: [
      "Rich media templates (PDFs, Images, Video brochures)",
      "Interactive Quick-Reply & CTA URL buttons",
      "Automated segmented broadcast campaigns",
      "Real-time delivery, read, and click-through analytics"
    ]
  },
  {
    icon: Zap,
    title: "Deep System & CRM Automation",
    items: [
      "Instant 1-click lead notification on your website",
      "Automated appointment & demo reminder sequences",
      "Multi-agent shared team inbox with live agent routing",
      "Automated Supabase / CRM database logging"
    ]
  }
];

const WA_PRICING_TIERS = [
  {
    name: "Starter WhatsApp API Engine",
    price: "₹12,000",
    description: "Official Meta WABA API onboarding, essential automated welcome flow, and basic website lead notification triggers.",
    features: [
      "Official Meta WABA API setup & phone number onboarding",
      "Up to 5 approved interactive templates",
      "Automated welcome & FAQ auto-reply flow",
      "Website 1-click WhatsApp widget connection",
      "Standard 5-day setup sprint"
    ]
  },
  {
    name: "Growth WhatsApp Automation Suite",
    price: "₹28,000",
    featured: true,
    description: "Complete conversational workflow engine with multi-agent team inbox, AI qualification bot, and automated broadcast campaigns.",
    features: [
      "Full 24/7 AI conversational agent integration",
      "Multi-agent shared team inbox (unlimited agents)",
      "Automated appointment booking & reminder sequences",
      "Broadcast messaging & campaign analytics dashboard",
      "Atomic Supabase CRM transaction sync",
      "Dedicated 10-day engineering sprint"
    ]
  },
  {
    name: "Enterprise Multi-Channel Pipeline",
    price: "Custom Scoped",
    description: "Custom enterprise messaging architecture, high-volume broadcasting, dedicated webhooks, and custom ERP integration.",
    features: [
      "High volume messaging infrastructure (50,000+ msgs/mo)",
      "Custom ERP & accounting system webhooks",
      "Dedicated account manager & 24/7 priority SLA",
      "Custom analytics & automated executive reports",
      "Full Green Tick verification management"
    ]
  }
];

const WA_FAQS = [
  {
    q: "What is the difference between WhatsApp Business App and WhatsApp Business API?",
    a: "The regular WhatsApp Business app is tied to a single phone and can easily get banned if you send bulk messages. The official WhatsApp Business API (WABA) is hosted on Meta cloud servers, allows unlimited agents, enables 24/7 automated bots, and supports verified Green Tick status."
  },
  {
    q: "Will our phone number get banned for sending automated messages?",
    a: "No! We only use the Official Meta Cloud API, which adheres strictly to WhatsApp policies. Unlike risky third-party unofficial tools, your number remains 100% compliant and protected from bans."
  },
  {
    q: "What are the Meta messaging charges?",
    a: "Meta charges a nominal fee per 24-hour conversation window (typically around ₹0.40 to ₹0.80 per conversation in India, depending on whether it is marketing, utility, or service). Inbound customer-initiated service conversations often include free monthly quotas."
  },
  {
    q: "Can multiple team members chat with customers on the same number?",
    a: "Yes! With our multi-agent shared team inbox, your entire sales and support team can view, reply, and assign chats to specific agents from a single official business number."
  }
];

const WABA_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bluetickdigital.in/solutions/whatsapp-automation#service",
      "name": "Official WhatsApp Business API & Automation Systems",
      "provider": {
        "@type": "Organization",
        "@id": "https://bluetickdigital.in/#organization",
        "name": "Bluetick Digital"
      },
      "serviceType": "WhatsApp Business API & Conversation Automation",
      "description": "Official Meta WhatsApp Business API integration, AI chat automation, broadcast workflows, and multi-agent team inboxes for growing businesses.",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://bluetickdigital.in/#solutions" },
        { "@type": "ListItem", "position": 3, "name": "WhatsApp Automation", "item": "https://bluetickdigital.in/solutions/whatsapp-automation" }
      ]
    }
  ]
};

const WhatsAppAutomationPage = () => {
  return (
    <>
      <SEO
        title="Official WhatsApp Business API & Automation Systems"
        description="Official Meta WhatsApp Business API integration, AI chat automation, broadcast workflows, and multi-agent team inboxes for growing businesses."
        keywords="WhatsApp Business API, Official Meta Partner, WhatsApp Automation, Green Tick Verification, Bluetick Digital"
        canonical="https://bluetickdigital.in/solutions/whatsapp-automation"
        structuredData={WABA_SCHEMA}
      />

      <SubPageHero
        badgeIcon={Sparkles}
        badgeText="Official Meta WABA Messaging"
        title="Official WhatsApp Business API Workflows Engineered for"
        gradientWord="High Engagement."
        subtitle="Turn WhatsApp into your primary revenue and support engine. Connect your website inquiries directly to official Meta WhatsApp APIs with 24/7 AI qualification, automated reminders, and zero ban risk."
        metrics={[
          "Official Meta Cloud API Infrastructure",
          "Sub-5s Instant Response Speed",
          "Multi-Agent Shared Team Inbox",
          "Green Tick Application Support"
        ]}
        primaryCtaText="Get Your Free WhatsApp Audit"
        primaryCtaHref="/#audit"
        secondaryCtaText="Explore API Workflow"
        secondaryCtaHref="#workflow"
      />

      <SubPageShift
        sectionNumber="01 /"
        sectionBadge="The Strategic Shift"
        title="Why Unofficial Tools & Manual Chats Fail & How Official API Wins"
        subtitle="The difference between risky third-party tools and enterprise-grade Meta API infrastructure."
        traditionalTitle="Unofficial Tools / Manual Chat"
        traditionalItems={[
          "High risk of permanent phone number bans by WhatsApp.",
          "Single-device restriction: multiple staff cannot manage chats.",
          "Manual typing of repetitive pricing quotes and catalog PDFs.",
          "Zero integration with your website database or CRM.",
          "No delivery or read-rate analytics on customer broadcasts."
        ]}
        bluetickTitle="Bluetick Official WhatsApp API Pipeline"
        bluetickItems={[
          "100% compliant Official Meta Cloud API with zero ban risk.",
          "Multi-agent team inbox accessible on desktop and mobile.",
          "Instant automated delivery of rich PDF catalogs & quotes.",
          "Atomic Supabase database sync with lead scoring.",
          "Interactive buttons, quick-replies, and complete analytics."
        ]}
      />

      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="API Sprint Cycle"
        title="How We Set Up & Deploy Your WhatsApp API Engine"
        subtitle="A turnkey 4-stage onboarding sprint taking you from Meta verification to live automated broadcasting."
        steps={WA_WORKFLOW}
      />

      <SubPageDeliverables
        sectionNumber="03 /"
        sectionBadge="API Capabilities"
        title="Complete WhatsApp Architecture Deliverables"
        subtitle="Everything needed for verified official business messaging, automated bots, and high-converting broadcast campaigns."
        categories={WA_DELIVERABLES}
        techStack={[
          "Meta WABA API",
          "n8n Workflow Automation",
          "Supabase PostgreSQL",
          "OpenAI GPT-4o",
          "Cloudflare Webhooks",
          "Team Inbox UI"
        ]}
      />

      <SubPagePricing
        sectionNumber="04 /"
        sectionBadge="Transparent Investment"
        title="Transparent WhatsApp Packages"
        subtitle="Milestone-based setup scopes with transparent Meta messaging fees."
        tiers={WA_PRICING_TIERS}
        disclaimer="Starting from prices indicate baseline setup and engineering packages. Meta official conversation messaging fees are billed directly at cost based on your actual monthly conversation volume."
      />

      <SubPageFaq
        sectionNumber="05 /"
        sectionBadge="Frequently Asked Questions"
        title="Common Questions About WhatsApp API"
        subtitle="Clear answers on Meta verification, green tick status, pricing, and multi-agent inboxes."
        faqs={WA_FAQS}
      />

      <SubPageCta
        badge="Free 30-Minute WhatsApp Strategy Audit"
        title="Ready to Automate Your Customer Communication?"
        subtitle="We will audit your customer inquiry volume, design your custom WhatsApp conversation flow, and provide a working prototype in 24 hours."
        ctaText="Get Your Free WhatsApp Audit"
        ctaHref="/#audit"
      />
    </>
  );
};

export default WhatsAppAutomationPage;
