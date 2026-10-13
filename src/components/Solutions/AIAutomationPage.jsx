import React from 'react';
import { Bot, Cpu, Target, Database, Zap, Sparkles, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';

const AI_WORKFLOW = [
  {
    icon: Database,
    duration: "Stage 01",
    title: "Knowledge Base Ingestion & Policy Mapping",
    description: "We ingest your company documentation, FAQs, pricing tables, and sales qualifying criteria into a custom vector database.",
    deliverable: "Structured Knowledge Base & Tone Guidelines"
  },
  {
    icon: Cpu,
    duration: "Stage 02",
    title: "AI Intent Engine Fine-Tuning",
    description: "Configuring GPT-4o with deterministic guardrails to prevent hallucinations and classify buyer intents (High Buy, Info, Support).",
    deliverable: "Fine-Tuned Intent Classification Engine"
  },
  {
    icon: Zap,
    duration: "Stage 03",
    title: "n8n Workflow & API Pipeline Integration",
    description: "Connecting the AI agent to your website, WhatsApp Meta API, Google Calendar, and Supabase CRM via atomic webhooks.",
    deliverable: "Live Orchestration Pipeline (n8n + Webhooks)"
  },
  {
    icon: ShieldCheck,
    duration: "Stage 04",
    title: "Stress Testing, Sandbox & Production Handover",
    description: "Running 100+ simulated edge case scenarios (refunds, angry customers, off-topic queries) before production activation.",
    deliverable: "24/7 Autonomous Deployed AI Agent"
  }
];

const AI_DELIVERABLES = [
  {
    icon: Bot,
    title: "Autonomous AI Agent Capabilities",
    items: [
      "Sub-30 second instant response across 24/7/365",
      "Natural conversational Hindi, English & Hinglish support",
      "Accurate lead intent scoring (Hot, Warm, Cold)",
      "Automated PDF catalog, quote, and brochure distribution"
    ]
  },
  {
    icon: Target,
    title: "Operational Guardrails & Quality",
    items: [
      "Zero hallucinations with strict vector grounding",
      "Off-topic rejection & polite redirection",
      "Seamless escalation to human manager for complex queries",
      "Anti-spam protection & cooldown tracking"
    ]
  },
  {
    icon: Database,
    title: "Automated CRM & Calendar Sync",
    items: [
      "Direct Google Calendar / Calendly appointment booking",
      "Atomic Supabase database sync with tagged intent scores",
      "Instant SMS / WhatsApp team alerts for VIP hot buyers",
      "Comprehensive weekly performance & conversion analytics"
    ]
  }
];

const AI_PRICING_TIERS = [
  {
    name: "Growth Plan",
    price: "₹11,999 / year",
    description: "Official Meta WhatsApp Business API platform foundation for team messaging, broadcasts, and shared inbox.",
    features: [
      "Official Meta WABA API onboarding & panel access",
      "Shared team multi-agent chat inbox",
      "Unlimited broadcast campaigns (Meta charges apply)",
      "Template message management & approval assistance",
      "Annual billing with manual renewal"
    ],
    ctaHref: "/#audit?req=whatsapp_waba",
    ctaText: "Get Growth Plan"
  },
  {
    name: "AI Growth Engine",
    price: "₹14,999 / year",
    description: "Autonomous 24/7 conversational sales & support agent deployed over your WhatsApp Business platform. (*Requires active Growth Plan at ₹11,999/yr, or get both in Power Combo at ₹25,000/yr)",
    features: [
      "Autonomous 24/7 AI conversational responses",
      "Sub-30 second lead qualification & intent triage",
      "Conversation memory & context-aware answering",
      "Atomic Supabase / CRM transaction logging",
      "BYOK model: Direct LLM billing with zero agency markup"
    ],
    ctaHref: "/#audit?req=ai_automation",
    ctaText: "Deploy AI Engine"
  },
  {
    name: "Power Combo",
    price: "₹25,000 / year",
    featured: true,
    description: "Best value unified offering combining the official WhatsApp platform and autonomous AI engine. (Does not include website development)",
    features: [
      "Everything in Growth Plan (WABA & Multi-Agent Inbox)",
      "Everything in AI Growth Engine (24/7 Sales Agent & CRM Sync)",
      "Priority onboarding & unified workflow configuration",
      "BYOK model: Direct LLM billing with zero markup",
      "Annual billing with manual renewal"
    ],
    ctaHref: "/#audit?req=website_plus_automation",
    ctaText: "Choose Power Combo"
  },
  {
    name: "Custom Automation Projects",
    price: "Custom quote",
    description: "Discussion-led engineering for bespoke multi-agent workflows, legacy ERP integrations, and custom logic.",
    features: [
      "Custom multi-step business logic & agentic pipelines",
      "Proprietary ERP, CRM, or database integrations",
      "Private vector knowledge bases (RAG) & document search",
      "Dedicated prompt engineering & weekly accuracy tuning",
      "Quotation tailored to integrations & workflow depth"
    ],
    ctaHref: "/#audit?req=ai_automation",
    ctaText: "Contact Us for a Custom Quote"
  }
];

const AI_FAQS = [
  {
    q: "Will the AI hallucinate or give wrong pricing to customers?",
    a: "No. We implement deterministic vector grounding with strict system prompts. The AI is programmed to strictly reference your verified knowledge base documents. If a customer asks a question outside its scope, it politely routes the query to your human team."
  },
  {
    q: "Can the AI understand and reply in Hindi and Hinglish?",
    a: "Yes! Our AI agents are fine-tuned for the Indian market, fluently handling English, pure Hindi, and casual conversational Hinglish (e.g. 'Bhaiya King Size ka price kya hai?')."
  },
  {
    q: "How does the AI hand off a conversation to a human manager?",
    a: "When a customer triggers an escalation intent (e.g. asking for a manager, requesting a custom bulk discount, or reporting an issue), the AI instantly notifies your team via WhatsApp/SMS with full chat history and pauses automated replies for that thread."
  },
  {
    q: "Can the AI book appointments directly on our team calendar?",
    a: "Yes! The AI can check real-time availability on Google Calendar or Calendly, present open time slots to the customer in the chat, and confirm the booking instantly."
  }
];

const AI_AUTOMATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bluetickdigital.in/solutions/ai-automation#service",
      "name": "Custom AI Automation Systems & Workflow Engineering",
      "provider": {
        "@type": "Organization",
        "@id": "https://bluetickdigital.in/#organization",
        "name": "Bluetick Digital"
      },
      "serviceType": "AI Workflow Automation & Custom AI Agents",
      "description": "Custom AI agents, n8n workflows, and Supabase CRM integrations that automate support, qualify leads in sub-30s, and eliminate manual overhead.",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://bluetickdigital.in/#solutions" },
        { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://bluetickdigital.in/solutions/ai-automation" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bluetickdigital.in/solutions/ai-automation#faq",
      "mainEntity": AI_FAQS.map(faq => ({
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

const AIAutomationPage = () => {
  return (
    <>
      <SEO
        title="Custom AI Automation Systems & Workflow Engineering"
        description="Custom AI agents, n8n workflows, and Supabase CRM integrations that automate support, qualify leads in sub-30s, and eliminate manual business overhead."
        keywords="AI Business Automation, Custom AI Agents, GPT-4o, n8n Workflows, Lead Qualification AI, Bluetick Digital"
        canonical="https://bluetickdigital.in/solutions/ai-automation"
        structuredData={AI_AUTOMATION_SCHEMA}
      />

      <SubPageHero
        badgeIcon={Bot}
        badgeText="Autonomous AI Systems"
        title="Custom AI Agents & Automated Workflows Built for"
        gradientWord="24/7 Scaling."
        subtitle="Eliminate slow response times, unqualified inquiries, and manual data entry. We engineer custom AI agents that qualify buyer intent in sub-30 seconds, deliver instant quotes, and sync directly with your CRM."
        metrics={[
          "Sub-30s Response SLA",
          "Direct WhatsApp CRM Sync",
          "Automated Meeting Booking",
          "24/7 Multi-Channel Handling"
        ]}
        primaryCtaText="Get Your Free AI Audit"
        primaryCtaHref="/#audit?req=ai_automation"
        secondaryCtaText="Explore AI Workflow"
        secondaryCtaHref="#workflow"
      />

      <SubPageShift
        sectionNumber="01 /"
        sectionBadge="The Strategic Shift"
        title="Why Manual Inquiry Handling Fails & How AI Changes Everything"
        subtitle="The difference between slow human follow-up and instant autonomous conversion."
        traditionalTitle="Manual Human Follow-Up"
        traditionalItems={[
          "Average response time of hours; prospects buy elsewhere.",
          "Sales team spends extensive time filtering cold, unqualified leads.",
          "Zero customer support during evening and weekend off-hours.",
          "Forgotten follow-ups and unrecorded lead data.",
          "High recurring overhead for repetitive, basic questions."
        ]}
        bluetickTitle="Bluetick Autonomous AI Engine"
        bluetickItems={[
          "Instant sub-30s responses 24 hours a day, 7 days a week.",
          "AI automatically qualifies budget, quantity & buying timeline.",
          "Instant 24/7 PDF brochure and quotation distribution.",
          "Automated calendar booking & multi-touch WhatsApp sequences.",
          "Atomic CRM logging with zero manual data entry required."
        ]}
      />

      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="Engineering Sprint Cycle"
        title="How We Build Your Custom AI Engine"
        subtitle="A proven 4-stage engineering sprint ensuring zero hallucinations and maximum conversion accuracy."
        steps={AI_WORKFLOW}
      />

      <SubPageDeliverables
        sectionNumber="03 /"
        sectionBadge="AI Capabilities"
        title="Complete AI System Deliverables"
        subtitle="Production-grade AI architecture engineered for accuracy, speed, and deep CRM integration."
        categories={AI_DELIVERABLES}
        techStack={[
          "OpenAI GPT-4o",
          "n8n Workflow Automation",
          "Supabase PostgreSQL",
          "Meta WABA API",
          "Vector Embeddings",
          "Google Calendar API"
        ]}
      />

      <SubPagePricing
        sectionNumber="04 /"
        sectionBadge="Transparent Investment"
        title="Transparent AI Automation Packages"
        subtitle="Milestone-based pricing with transparent scope. No long-term restrictive locks."
        tiers={AI_PRICING_TIERS}
        ctaHref="/#audit?req=ai_automation"
        disclaimer="Starting from prices indicate standard baseline automation engines. Final investment is scoped based on monthly chat volume, custom API integrations, and workflow complexity."
      />

      <SubPageFaq
        sectionNumber="05 /"
        sectionBadge="Frequently Asked Questions"
        title="Common Questions About Our AI Agents"
        subtitle="Clear answers on guardrails, accuracy, languages, and human handoff."
        faqs={AI_FAQS}
      />

      <SubPageCta
        badge="Free 30-Minute AI Architecture Audit"
        title="Ready to Automate Your Business Inquiries?"
        subtitle="We will review your inquiry volume, map out your AI decision flow, and demonstrate a working prototype within 24 hours."
        ctaText="Get Your Free AI Audit"
        ctaHref="/#audit?req=ai_automation"
      />
    </>
  );
};

export default AIAutomationPage;
