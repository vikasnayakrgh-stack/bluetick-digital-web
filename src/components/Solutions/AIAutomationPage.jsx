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
    name: "Starter AI Qualification Engine",
    price: "₹15,000",
    description: "Essential AI lead capture and instant qualification bot for emerging businesses managing up to 300 inquiries/month.",
    features: [
      "Custom business FAQ & lead qualification bot",
      "Natural English & Hindi conversation support",
      "Direct WhatsApp & Website Webhook integration",
      "Google Sheets & email alert sync",
      "Standard 5-day deployment sprint"
    ]
  },
  {
    name: "Growth AI Sales & Support Engine",
    price: "₹35,000",
    featured: true,
    description: "Complete autonomous AI agent with dynamic lead scoring, automated calendar booking, and deep Supabase CRM synchronization.",
    features: [
      "Advanced GPT-4o custom knowledge base engine",
      "Automated demo & site visit calendar scheduling",
      "Dynamic lead scoring & VIP sales team escalation",
      "Automated multi-touch WhatsApp nurturing sequences",
      "Atomic Supabase CRM transaction logging",
      "Dedicated 10-day engineering sprint"
    ]
  },
  {
    name: "Enterprise Custom Workflow Matrix",
    price: "Custom Scoped",
    description: "Bespoke multi-agent system, multi-channel support pipelines, custom ERP integrations, and high-volume inquiry handling.",
    features: [
      "Multi-agent architecture (Support, Sales, Booking sub-agents)",
      "High volume inquiry scaling (10,000+ chats/month)",
      "Custom REST API & legacy CRM integrations",
      "Dedicated prompt engineering & weekly accuracy tuning",
      "Strict SLA uptime & priority engineering support"
    ]
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
          "Sub-30s Lead Qualification",
          "98.8% Intent Classification Accuracy",
          "-75% Manual Sales Overhead",
          "24/7/365 Zero-Downtime Availability"
        ]}
        primaryCtaText="Get Your Free AI Audit"
        primaryCtaHref="/#audit"
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
          "Average response time of 2-4 hours; prospects buy elsewhere.",
          "Sales team spends 70% of time filtering cold, unqualified leads.",
          "Zero customer support during evening and weekend off-hours.",
          "Forgotten follow-ups and unrecorded lead data.",
          "High recurring monthly payroll cost for basic repetitive chats."
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
        ctaHref="/#audit"
      />
    </>
  );
};

export default AIAutomationPage;
