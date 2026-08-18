import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Factory, Rocket, Building2, ShieldCheck, Zap, ArrowRight, CheckCircle2, Clock, Target, Layers } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';

const INDUSTRY_DATA = {
  ecommerce: {
    icon: ShoppingBag,
    badgeText: "D2C & Online Retail",
    title: "Digital Transformation & Automation for",
    gradientWord: "E-Commerce Brands.",
    subtitle: "Turn store visitors into high-LTV repeat buyers with sub-second storefronts, automated WhatsApp COD verification, and 1-click cart recovery.",
    metrics: [
      "3.2x Faster Checkout Completion",
      "-45% RTO Shipping Losses",
      "+184% Lead & Cart Recovery",
      "24/7 Sizing & FAQ Bot"
    ],
    traditionalTitle: "Standard Disconnected Storefront",
    traditionalItems: [
      "70%+ cart abandonment with zero proactive recovery.",
      "High RTO shipping losses on unverified COD orders.",
      "Customer support backlogs on sizing, stock, and delivery FAQs.",
      "Manual order status notifications causing customer anxiety."
    ],
    bluetickTitle: "Bluetick Connected E-Commerce Engine",
    bluetickItems: [
      "Automated WhatsApp cart recovery messages with 1-click discount codes.",
      "Automated WhatsApp COD order confirmation cutting RTO by 45%.",
      "24/7 AI agent resolving 80%+ sizing, material, and return inquiries in 2s.",
      "Automated dispatch tracking & review collection sequences."
    ],
    workflow: [
      {
        icon: ShoppingBag,
        duration: "Stage 01",
        title: "Catalog Architecture & Checkout UX",
        description: "Designing high-speed product catalog with mobile-first checkout funnels.",
        deliverable: "Product Matrix & Checkout Architecture"
      },
      {
        icon: Zap,
        duration: "Stage 02",
        title: "COD Verification & Payment Engine",
        description: "Integrating Razorpay/Stripe and automated WhatsApp address validation bot.",
        deliverable: "Multi-Gateway & COD Security System"
      },
      {
        icon: Target,
        duration: "Stage 03",
        title: "AI Cart Recovery & Support Bot",
        description: "Deploying 24/7 AI support agent and automated WhatsApp cart recovery flows.",
        deliverable: "Live WhatsApp Recovery & Support Pipeline"
      },
      {
        icon: ShieldCheck,
        duration: "Stage 04",
        title: "Production Handover & SLA Tracking",
        description: "Comprehensive stress testing across mobile devices and analytics setup.",
        deliverable: "Production Ready E-Commerce Platform"
      }
    ],
    deliverables: [
      {
        icon: ShoppingBag,
        title: "High-Converting Storefront",
        items: [
          "Sub-second React/Vite product catalog loading",
          "1-click mobile checkout with UPI autofill",
          "Dynamic product variant and combo engine",
          "Customer reviews and social proof widgets"
        ]
      },
      {
        icon: Zap,
        title: "Automated RTO & Support Control",
        items: [
          "Automated WhatsApp COD order confirmation",
          "1-click abandoned checkout recovery messages",
          "24/7 AI customer service agent for sizing & FAQs",
          "Automated dispatch & delivery tracking alerts"
        ]
      },
      {
        icon: Layers,
        title: "Data & Inventory Sync",
        items: [
          "Real-time stock deduction & low inventory alerts",
          "Supabase PostgreSQL customer transaction log",
          "Automated GST invoice generation & PDF dispatch",
          "Custom marketing & repeat purchase analytics"
        ]
      }
    ],
    pricing: [
      {
        name: "D2C Starter Package",
        price: "₹30,000",
        description: "Ideal for emerging D2C brands launching up to 50 product SKUs.",
        features: [
          "Up to 50 product catalog setup",
          "UPI, Card & COD payment integrations",
          "WhatsApp order status updates",
          "Mobile-optimized checkout funnel",
          "Standard 7-day delivery sprint"
        ]
      },
      {
        name: "Growth Commerce Engine",
        price: "₹50,000",
        featured: true,
        description: "High-scale commerce engine with automated COD verification and WhatsApp cart recovery.",
        features: [
          "Unlimited catalog & variant engine",
          "Automated WhatsApp COD verification bot",
          "Abandoned cart recovery sequences",
          "24/7 AI customer support integration",
          "Supabase customer purchase database",
          "Dedicated 14-day engineering sprint"
        ]
      },
      {
        name: "Enterprise Multi-Brand Store",
        price: "Custom Scoped",
        description: "Custom multi-warehouse inventory routing and high-volume ERP integrations.",
        features: [
          "Multi-warehouse & logistics API sync",
          "High volume scaling (10,000+ orders/mo)",
          "Custom ERP & accounting webhooks",
          "Priority 24/7 SLA engineering support",
          "Dedicated growth architect"
        ]
      }
    ],
    faqs: [
      {
        q: "How does the automated WhatsApp COD verification reduce RTO?",
        a: "When a customer selects Cash on Delivery, our system triggers an instant WhatsApp confirmation request. Unverified or fake orders are filtered out before dispatch, cutting return-to-origin losses by up to 45%."
      },
      {
        q: "Can the AI bot answer customer queries about product sizing and materials?",
        a: "Yes. The AI is trained on your exact product specifications, dimensions, wash care, and return policy to provide instant accurate answers 24/7."
      }
    ]
  },

  manufacturing: {
    icon: Factory,
    badgeText: "Manufacturing & Industrial B2B",
    title: "Digital Transformation & Lead Qualification for",
    gradientWord: "Manufacturers & B2B.",
    subtitle: "Transform your industrial business presence with a modern product catalog, automated RFQ qualification workflows, and instant technical brochure delivery.",
    metrics: [
      "-75% Manual Sales Qualification",
      "100% Pre-Qualified Sales Leads",
      "Sub-3s Technical PDF Delivery",
      "24/7 RFQ Inquiry Capture"
    ],
    traditionalTitle: "Traditional Manual RFQ Process",
    traditionalItems: [
      "Sales engineers spend 70% of time filtering small, unqualified buyers.",
      "Delays of 4-8 hours in manually emailing technical catalogs and MOQs.",
      "Zero tracking on which leads are serious tier-1 industrial buyers.",
      "Unorganized inquiries lost in email inboxes and WhatsApp chats."
    ],
    bluetickTitle: "Bluetick B2B Digital Engine",
    bluetickItems: [
      "AI automatically captures required quantity, specs & delivery location.",
      "Instant 3-second delivery of heavy PDF technical spec sheets via WhatsApp.",
      "Only high-intent bulk RFQs are routed to regional sales managers.",
      "Atomic CRM logging of full inquiry history with intent scores."
    ],
    workflow: [
      {
        icon: Factory,
        duration: "Stage 01",
        title: "Industrial Catalog & Specs Modeling",
        description: "Structuring technical specifications, certifications (ISO, BIS), and MOQ tiers.",
        deliverable: "Digital Industrial Catalog Blueprint"
      },
      {
        icon: Target,
        duration: "Stage 02",
        title: "AI RFQ Qualification Workflow",
        description: "Configuring the AI agent to ask required engineering parameters before routing.",
        deliverable: "Automated RFQ Qualification Flow"
      },
      {
        icon: Zap,
        duration: "Stage 03",
        title: "PDF Dispatch & Sales Routing Pipeline",
        description: "Automating instant WhatsApp brochure delivery and regional manager alert triggers.",
        deliverable: "Multi-Channel Technical Distribution Pipeline"
      },
      {
        icon: ShieldCheck,
        duration: "Stage 04",
        title: "CRM Database & Production Handover",
        description: "Deploying Supabase B2B lead database and staff training.",
        deliverable: "Production Ready B2B Industrial Engine"
      }
    ],
    deliverables: [
      {
        icon: Factory,
        title: "High-Performance B2B Platform",
        items: [
          "Modern industrial web architecture with technical search",
          "Dynamic product specification tables & download center",
          "Certifications, plant machinery, and quality showcases",
          "Multi-location regional inquiry routing"
        ]
      },
      {
        icon: Target,
        title: "Automated RFQ Qualification",
        items: [
          "Instant automated inquiry qualification in Hindi & English",
          "MOQ and budget verification before human alert",
          "Automated instant PDF technical brochure delivery",
          "VIP priority alert to senior sales engineers"
        ]
      },
      {
        icon: Layers,
        title: "B2B CRM & Tracking",
        items: [
          "Supabase PostgreSQL corporate lead database",
          "Full chat transcript and technical requirements log",
          "Automated follow-up reminders on pending RFQs",
          "Executive inquiry pipeline analytics"
        ]
      }
    ],
    pricing: [
      {
        name: "B2B Corporate Platform",
        price: "₹25,000",
        description: "Professional industrial website with digital product catalog and WhatsApp inquiry capture.",
        features: [
          "Comprehensive technical product showcase",
          "Specifications download & inquiry forms",
          "Basic WhatsApp auto-response bot",
          "Google search structured data indexing",
          "Standard 7-day delivery sprint"
        ]
      },
      {
        name: "Connected B2B Engine",
        price: "₹45,000",
        featured: true,
        description: "Complete B2B web platform connected with automated AI RFQ qualification and instant PDF catalog delivery.",
        features: [
          "Full digital product catalog with technical filters",
          "AI RFQ qualification agent on Web & WhatsApp",
          "Instant automated PDF spec sheet distribution",
          "Supabase B2B corporate lead CRM database",
          "Regional sales team routing triggers",
          "Dedicated 14-day engineering sprint"
        ]
      },
      {
        name: "Enterprise Industrial Matrix",
        price: "Custom Scoped",
        description: "Multi-plant corporate portals, custom ERP sync (SAP / Tally), and high-volume RFQ automation.",
        features: [
          "Custom ERP & accounting system webhooks",
          "Multi-plant & distributor portal architecture",
          "Custom distributor pricing & login tiers",
          "Dedicated SLA monitoring & priority support",
          "Executive reporting dashboard"
        ]
      }
    ],
    faqs: [
      {
        q: "How does the AI handle technical inquiries about tolerances and materials?",
        a: "The AI is grounded on your exact engineering spec sheets, material grades, and test certificates. It provides accurate technical data and directs complex custom manufacturing requests to your senior engineers."
      },
      {
        q: "Can the system send heavy PDF catalogs to buyers over WhatsApp?",
        a: "Yes! The system automatically delivers compressed, high-definition PDF technical brochures within 3 seconds of a buyer's request."
      }
    ]
  },

  startups: {
    icon: Rocket,
    badgeText: "Startups & High-Growth Tech",
    title: "Digital Transformation & Demo Pipelines for",
    gradientWord: "Startups & SaaS.",
    subtitle: "Launch high-converting product pages, automate user onboarding, and streamline Google Meet & Zoom demo bookings with zero calendar leakage.",
    metrics: [
      "<30s Demo Response SLA",
      "3x Higher Demo Show-up Rate",
      "Zero Calendar Leakage",
      "Automated Onboarding Sequences"
    ],
    traditionalTitle: "Slow Back-and-Forth Scheduling",
    traditionalItems: [
      "Prospects wait 4+ hours for a demo scheduling email; momentum is lost.",
      "High no-show rates (30-40%) due to lack of automated reminders.",
      "Disconnected landing pages with poor mobile conversion rates.",
      "Manual data entry of leads into CRM spreadsheets."
    ],
    bluetickTitle: "Bluetick Fast-Track Demo Engine",
    bluetickItems: [
      "Instant calendar slot selection directly inside WhatsApp and Web chat.",
      "Automated 24h & 1h WhatsApp reminders cutting no-shows to near zero.",
      "Sub-second React landing pages built for venture-backed clarity.",
      "Atomic Supabase database sync with automated webhook pipelines."
    ],
    workflow: [
      {
        icon: Rocket,
        duration: "Stage 01",
        title: "Product Positioning & Funnel Architecture",
        description: "Clarifying value props, social proof framing, and friction-free demo booking funnels.",
        deliverable: "High-Converting Funnel Blueprint"
      },
      {
        icon: Target,
        duration: "Stage 02",
        title: "Landing Page Engineering & Animation",
        description: "Building ultra-fast React/Vite product landing pages with interactive feature showcases.",
        deliverable: "Production Ready Startup Web Platform"
      },
      {
        icon: Clock,
        duration: "Stage 03",
        title: "Calendar Booking & Reminder Engine",
        description: "Connecting Google Meet / Zoom scheduling with automated WhatsApp reminder sequences.",
        deliverable: "Live Automated Calendar Pipeline"
      },
      {
        icon: ShieldCheck,
        duration: "Stage 04",
        title: "Webhook Sync & Launch",
        description: "Wiring webhook pipelines to your CRM, Slack, and product databases.",
        deliverable: "Deployed High-Velocity Demo Engine"
      }
    ],
    deliverables: [
      {
        icon: Rocket,
        title: "Product Launch Landing Page",
        items: [
          "Clean, modern Swiss-style product presentation",
          "Interactive feature tabs and micro-animations",
          "Dark mode / high-contrast tech aesthetic",
          "Social proof, security badges & metric callouts"
        ]
      },
      {
        icon: Clock,
        title: "Automated Demo Scheduling",
        items: [
          "Instant calendar slot booking in Web chat & WhatsApp",
          "Automated Google Meet link generation",
          "Automated 24h and 1h WhatsApp reminder alerts",
          "1-click reschedule and cancellation flows"
        ]
      },
      {
        icon: Layers,
        title: "CRM & Slack Integrations",
        items: [
          "Instant Slack notifications when high-value demo is booked",
          "Supabase PostgreSQL lead database logging",
          "Pre-demo qualification questionnaire recording",
          "Full funnel conversion and traffic analytics"
        ]
      }
    ],
    pricing: [
      {
        name: "Startup Launchpad",
        price: "₹20,000",
        description: "High-speed product landing page with embedded calendar scheduling and WhatsApp inquiry widget.",
        features: [
          "High-converting single-page product showcase",
          "Direct calendar integration (Google Meet / Calendly)",
          "Mobile-first responsive architecture",
          "SEO structured metadata setup",
          "Standard 5-day delivery sprint"
        ]
      },
      {
        name: "Growth Demo Engine",
        price: "₹40,000",
        featured: true,
        description: "Complete product platform with AI qualification bot, automated WhatsApp reminders, and CRM sync.",
        features: [
          "Multi-page product showcase & documentation pages",
          "Interactive WhatsApp AI demo booking bot",
          "Automated 24h/1h WhatsApp reminder sequences",
          "Supabase CRM database & Slack instant alerts",
          "Conversion tracking & analytics integration",
          "Dedicated 10-day engineering sprint"
        ]
      },
      {
        name: "Custom Tech Architecture",
        price: "Custom Scoped",
        description: "Custom web app frontend, user onboarding pipelines, and deep product API integrations.",
        features: [
          "Custom React dashboard & web app features",
          "Automated user KYC & onboarding workflows",
          "Multi-channel webhook pipeline integrations",
          "Dedicated sprint cycles & priority SLA",
          "Technical co-architect support"
        ]
      }
    ],
    faqs: [
      {
        q: "How do WhatsApp reminders reduce demo no-show rates?",
        a: "Email calendar invites are often ignored or sent to spam. Our system sends personalized WhatsApp reminders 24 hours and 1 hour before the call with a 1-click 'Join Call' button, cutting no-shows by up to 60%."
      },
      {
        q: "Can you connect the demo bookings directly to our Slack channel?",
        a: "Yes! Whenever a new demo is booked, an instant rich notification with the prospect's company details and budget appears in your designated Slack channel."
      }
    ]
  },

  "local-business": {
    icon: Building2,
    badgeText: "Real Estate & Local High-Value Services",
    title: "Digital Transformation & Lead Capture for",
    gradientWord: "Local Businesses & Real Estate.",
    subtitle: "Capture local service inquiries, property brochure downloads, and site visit appointments automatically 24/7 without missing a single evening or weekend lead.",
    metrics: [
      "100% Lead Capture SLA",
      "Zero Missed Off-Hours Inquiries",
      "Instant PDF Brochure Delivery",
      "Automated Site Visit Scheduling"
    ],
    traditionalTitle: "Manual Phone Call Reliance",
    traditionalItems: [
      "Missed phone calls during busy hours and evenings are permanently lost.",
      "Manual texting of property brochures and pricing lists takes hours.",
      "Unorganized prospect details scattered across staff phone books.",
      "Lack of structured follow-up on interested property buyers."
    ],
    bluetickTitle: "Bluetick 24/7 Local Growth Engine",
    bluetickItems: [
      "Instant WhatsApp auto-responder answering inquiries 24/7/365.",
      "Automated PDF floor plans and price sheet delivery in 3 seconds.",
      "Direct site visit appointment booking linked to team calendars.",
      "Centralized Supabase database logging every customer inquiry."
    ],
    workflow: [
      {
        icon: Building2,
        duration: "Stage 01",
        title: "Project / Service Catalog Setup",
        description: "Structuring property listings, floor plans, pricing tiers, and local service packages.",
        deliverable: "Digital Property / Service Showcase Blueprint"
      },
      {
        icon: Target,
        duration: "Stage 02",
        title: "WhatsApp Brochure & Booking Bot Setup",
        description: "Configuring the AI bot to share brochures and book site visit appointments.",
        deliverable: "Automated Local Lead Capture Bot"
      },
      {
        icon: Clock,
        duration: "Stage 03",
        title: "Local SEO & Location Mapping",
        description: "Setting up Google Maps schema, local business citations, and click-to-WhatsApp buttons.",
        deliverable: "Local Google SEO & Map Integration"
      },
      {
        icon: ShieldCheck,
        duration: "Stage 04",
        title: "Staff Handover & Live Activation",
        description: "Testing lead alerts on local sales staff phones and live production handover.",
        deliverable: "Active Deployed Local Business Engine"
      }
    ],
    deliverables: [
      {
        icon: Building2,
        title: "High-Impact Local Web Presence",
        items: [
          "Mobile-first responsive local business website",
          "Interactive property galleries & service packages",
          "Google Maps integration & 1-click calling/WhatsApp",
          "Customer testimonials and video walkthrough embeds"
        ]
      },
      {
        icon: Target,
        title: "24/7 Lead Capture & Booking",
        items: [
          "Instant automated WhatsApp auto-responder",
          "Instant floor plan & pricing PDF brochure dispatch",
          "Automated site visit / consultation booking",
          "Instant SMS & WhatsApp alert to relationship manager"
        ]
      },
      {
        icon: Layers,
        title: "Local Database & Review Automation",
        items: [
          "Centralized Supabase local customer database",
          "Automated 5-star Google review request flow after visit",
          "Segmented WhatsApp broadcast updates on new listings",
          "Monthly local lead generation report"
        ]
      }
    ],
    pricing: [
      {
        name: "Local Presence Package",
        price: "₹15,000",
        description: "Modern local business website with Google Maps integration and direct WhatsApp lead capture.",
        features: [
          "High-converting local business website",
          "Google Maps & Local SEO schema integration",
          "Direct WhatsApp 1-click inquiry buttons",
          "Mobile-first responsive architecture",
          "Standard 5-day delivery sprint"
        ]
      },
      {
        name: "Connected Local Engine",
        price: "₹35,000",
        featured: true,
        description: "Complete local platform connected with automated WhatsApp brochure delivery and site visit booking.",
        features: [
          "Multi-page property/service showcase",
          "Automated WhatsApp brochure delivery bot",
          "Site visit appointment booking flow",
          "Supabase local lead tracking database",
          "Google review automation flow",
          "Dedicated 10-day engineering sprint"
        ]
      },
      {
        name: "Enterprise Multi-Location System",
        price: "Custom Scoped",
        description: "Multi-branch corporate real estate portals, agent routing, and high-volume local ad capture.",
        features: [
          "Multi-location branch inquiry routing",
          "Agent commission & lead assignment system",
          "Custom CRM & lead management integration",
          "Dedicated SLA monitoring & priority support",
          "Monthly growth strategy sessions"
        ]
      }
    ],
    faqs: [
      {
        q: "How does the site visit booking bot work for real estate?",
        a: "When a buyer expresses interest, the bot presents available Saturday/Sunday site visit time slots. Once selected, it confirms the booking, sends the location pin on Google Maps, and alerts your local sales manager."
      },
      {
        q: "Can the system help us get more 5-star Google reviews?",
        a: "Yes! After a client visits your showroom or showroom appointment, the system can trigger a friendly WhatsApp message asking for a 1-click Google Maps review, significantly boosting your local search ranking."
      }
    ]
  }
};

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = INDUSTRY_DATA[slug] || INDUSTRY_DATA.ecommerce;
  const Icon = industry.icon;

  return (
    <>
      <SEO
        title={`${industry.title} ${industry.gradientWord}`}
        description={industry.subtitle}
        keywords={`Digital Transformation, Website Design, AI Automation, ${industry.title}, Bluetick Digital`}
        canonical={`https://bluetickdigital.in/industries/${slug || 'ecommerce'}`}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": `${industry.title} ${industry.gradientWord}`,
              "provider": {
                "@type": "Organization",
                "name": "Bluetick Digital",
                "url": "https://bluetickdigital.in"
              },
              "description": industry.subtitle
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
                { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://bluetickdigital.in/#industries" },
                { "@type": "ListItem", "position": 3, "name": industry.badgeText, "item": `https://bluetickdigital.in/industries/${slug || 'ecommerce'}` }
              ]
            }
          ]
        }}
      />

      {/* Hero Section */}
      <SubPageHero
        badgeIcon={Icon}
        badgeText={industry.badgeText}
        title={industry.title}
        gradientWord={industry.gradientWord}
        subtitle={industry.subtitle}
        metrics={industry.metrics}
        primaryCtaText="Get Your Free Industry Audit"
        primaryCtaHref="/#audit"
        secondaryCtaText="Explore Industry Blueprint"
        secondaryCtaHref="#workflow"
      />

      {/* The Strategic Shift */}
      <SubPageShift
        sectionNumber="01 /"
        sectionBadge="The Strategic Shift"
        title="Why Traditional Manual Operations Fail & How Automation Solves It"
        subtitle="The difference between slow manual bottlenecks and a high-converting digital engine."
        traditionalTitle={industry.traditionalTitle}
        traditionalItems={industry.traditionalItems}
        bluetickTitle={industry.bluetickTitle}
        bluetickItems={industry.bluetickItems}
      />

      {/* 4-Step Engineering Workflow */}
      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="Implementation Sprint"
        title="How We Engineer Your Industry Solution"
        subtitle="A proven 4-stage sprint cycle delivering measurable operational lift."
        steps={industry.workflow}
      />

      {/* Deliverables Checklist */}
      <SubPageDeliverables
        sectionNumber="03 /"
        sectionBadge="System Deliverables"
        title="Complete Production Architecture Deliverables"
        subtitle="Custom-tailored software and automation pipelines built around your specific vertical."
        categories={industry.deliverables}
        techStack={[
          "React 18",
          "Vite",
          "Meta WABA API",
          "OpenAI GPT-4o",
          "Supabase PostgreSQL",
          "n8n Workflows"
        ]}
      />

      {/* Pricing Tiers */}
      <SubPagePricing
        sectionNumber="04 /"
        sectionBadge="Transparent Investment"
        title="Transparent Industry Packages"
        subtitle="Milestone-based pricing scoped around your business scale."
        tiers={industry.pricing}
        disclaimer="Starting from prices indicate baseline packages. Final investment is scoped transparently based on custom integrations, catalog volume, and workflow depth."
      />

      {/* FAQ Section */}
      <SubPageFaq
        sectionNumber="05 /"
        sectionBadge="Frequently Asked Questions"
        title={`Common Questions for ${industry.badgeText}`}
        subtitle="Clear answers on technology, integration, and operational impact."
        faqs={industry.faqs}
      />

      {/* Bottom CTA Banner */}
      <SubPageCta
        badge={`Free 30-Minute ${industry.badgeText} Audit`}
        title={`Ready to Automate Your ${industry.badgeText} Operations?`}
        subtitle="We will review your inquiry pipeline, identify manual friction points, and provide a clear technical roadmap in 24 hours."
        ctaText="Get Your Free Industry Audit"
        ctaHref="/#audit"
      />
    </>
  );
};

export default IndustryPage;
