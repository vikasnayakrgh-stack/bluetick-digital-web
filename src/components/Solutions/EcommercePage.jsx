import React from 'react';
import { ShoppingBag, CreditCard, RefreshCw, MessageSquare, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import SEO from '../Common/SEO';
import SubPageHero from '../Common/SubPageHero';
import SubPageShift from '../Common/SubPageShift';
import SubPageWorkflow from '../Common/SubPageWorkflow';
import SubPageDeliverables from '../Common/SubPageDeliverables';
import SubPagePricing from '../Common/SubPagePricing';
import SubPageFaq from '../Common/SubPageFaq';
import SubPageCta from '../Common/SubPageCta';

const ECOMMERCE_WORKFLOW = [
  {
    icon: Layers,
    duration: "Stage 01",
    title: "Catalog Architecture & UX Modeling",
    description: "Structuring product categories, variant attributes (size, color, material), and frictionless checkout funnels.",
    deliverable: "Product Matrix & Checkout Wireframes"
  },
  {
    icon: CreditCard,
    duration: "Stage 02",
    title: "Payment Gateway & COD Engine Setup",
    description: "Integrating UPI, Cards, NetBanking via Razorpay/Stripe, plus automated WhatsApp COD address verification.",
    deliverable: "Secure Multi-Gateway Payment Pipeline"
  },
  {
    icon: MessageSquare,
    duration: "Stage 03",
    title: "WhatsApp Abandoned Cart Recovery",
    description: "Building automated 1-click discount recovery triggers that recover lost checkouts directly over WhatsApp.",
    deliverable: "Automated WhatsApp Recovery Bot"
  },
  {
    icon: ShieldCheck,
    duration: "Stage 04",
    title: "Testing, Order Sync & Launch",
    description: "End-to-end stress testing across mobile devices, automated order dispatch notifications, and analytics integration.",
    deliverable: "Production Ready Scalable Storefront"
  }
];

const ECOMMERCE_DELIVERABLES = [
  {
    icon: ShoppingBag,
    title: "Storefront & Checkout UX",
    items: [
      "Fast product discovery with dynamic filtering & search",
      "1-click mobile checkout with UPI autofill support",
      "Custom product variant engine (Sizes, Colors, Combos)",
      "Customer reviews, ratings, and social proof widgets"
    ]
  },
  {
    icon: RefreshCw,
    title: "Automated Order & RTO Control",
    items: [
      "Automated WhatsApp COD order confirmation flow",
      "Instant WhatsApp order tracking & shipping updates",
      "Abandoned checkout recovery sequences with 1-click links",
      "Automated return/exchange query handling agent"
    ]
  },
  {
    icon: Zap,
    title: "Backend & Inventory Sync",
    items: [
      "Real-time inventory deduction & low-stock alerts",
      "Secure admin dashboard for order & fulfillment tracking",
      "Supabase PostgreSQL customer transaction database",
      "Automated GST invoice generation & PDF dispatch"
    ]
  }
];

const ECOMMERCE_PRICING_TIERS = [
  {
    name: "D2C Starter Storefront",
    price: "₹30,000",
    description: "Complete modern e-commerce platform for emerging D2C brands launching up to 50 product SKUs.",
    features: [
      "Up to 50 product catalog setup",
      "Payment gateway integration (UPI, Cards, COD)",
      "Basic WhatsApp order notification messages",
      "Mobile-optimized checkout funnel",
      "Standard 7-day engineering delivery"
    ]
  },
  {
    name: "Growth Commerce Engine",
    price: "₹50,000",
    featured: true,
    description: "High-scale commerce platform with automated COD verification, WhatsApp cart recovery, and deep inventory management.",
    features: [
      "Unlimited product catalog & dynamic variant engine",
      "Automated WhatsApp COD confirmation workflow",
      "Abandoned cart recovery sequences over WhatsApp",
      "Custom discounts, promo codes & bundled offers",
      "Supabase CRM customer purchase history database",
      "Dedicated 14-day engineering sprint"
    ]
  },
  {
    name: "Enterprise Multi-Vendor / Custom Store",
    price: "Custom Scoped",
    description: "Bespoke high-volume commerce architecture, custom ERP integrations, multi-warehouse sync, and international payments.",
    features: [
      "Multi-warehouse inventory routing",
      "Custom ERP & logistics API integrations (Shiprocket / Delhivery)",
      "Full 24/7 AI WhatsApp customer support bot",
      "Multi-currency & international payment gateways",
      "Dedicated SLA monitoring & priority support"
    ]
  }
];

const ECOMMERCE_FAQS = [
  {
    q: "How does the automated WhatsApp COD verification work?",
    a: "When a customer places a Cash on Delivery order, our system instantly triggers a WhatsApp message with an interactive 'Confirm Order' button. Only verified orders move to fulfillment, reducing RTO returns by up to 45%."
  },
  {
    q: "Can we migrate our existing products from Shopify or WooCommerce?",
    a: "Yes! We provide complete catalog migration services, importing all your existing products, categories, customer records, and imagery seamlessly."
  },
  {
    q: "Which payment gateways do you integrate?",
    a: "We integrate Razorpay, Cashfree, PayU, PhonePe, and Stripe for seamless domestic UPI, credit/debit card, net banking, and international payments."
  },
  {
    q: "How do we manage product stock and orders?",
    a: "You receive an intuitive, secure admin dashboard to add/edit products, track incoming orders in real-time, generate GST invoices, and update shipping tracking numbers."
  }
];

const ECOMMERCE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bluetickdigital.in/solutions/ecommerce#service",
      "name": "E-Commerce Website Development & Conversion Automation",
      "provider": {
        "@type": "Organization",
        "@id": "https://bluetickdigital.in/#organization",
        "name": "Bluetick Digital"
      },
      "serviceType": "D2C E-Commerce Platforms & Automation",
      "description": "High-converting online stores built with seamless WhatsApp automation, COD verification, and cart recovery workflows. Engineered for scale.",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluetickdigital.in/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://bluetickdigital.in/#solutions" },
        { "@type": "ListItem", "position": 3, "name": "E-commerce", "item": "https://bluetickdigital.in/solutions/ecommerce" }
      ]
    }
  ]
};

const EcommercePage = () => {
  return (
    <>
      <SEO
        title="E-commerce Website Development & Automation"
        description="High-converting online stores built with seamless WhatsApp automation, COD verification, and cart recovery workflows. Engineered for scale."
        keywords="E-commerce Website Development, D2C Commerce, COD Verification, Cart Recovery, Bluetick Digital"
        canonical="https://bluetickdigital.in/solutions/ecommerce"
        structuredData={ECOMMERCE_SCHEMA}
      />

      <SubPageHero
        badgeIcon={ShoppingBag}
        badgeText="E-Commerce Transformation"
        title="E-Commerce Platforms Engineered to"
        gradientWord="Maximize Conversions."
        subtitle="Turn casual browsers into repeat buyers. We build high-speed, mobile-first e-commerce platforms connected with automated WhatsApp COD verification, 1-click cart recovery, and instant order tracking."
        metrics={[
          "3.2x Faster Checkout Completion",
          "-45% RTO Shipping Losses",
          "+184% Lead & Cart Recovery",
          "Automated UPI & COD Verification"
        ]}
        primaryCtaText="Get Your Free Store Audit"
        primaryCtaHref="/#audit"
        secondaryCtaText="Explore Store Workflow"
        secondaryCtaHref="#workflow"
      />

      <SubPageShift
        sectionNumber="01 /"
        sectionBadge="The Strategic Shift"
        title="Why Traditional Stores Lose 70% of Sales & How Bluetick Fixes It"
        subtitle="Eliminate checkout drop-offs and high RTO shipping losses with automated commerce infrastructure."
        traditionalTitle="Generic Storefront"
        traditionalItems={[
          "Slow product loading causing immediate visitor bounce.",
          "High RTO losses due to unverified, fake COD orders.",
          "70%+ cart abandonment with zero proactive follow-up.",
          "Manual customer support for sizing, stock, and tracking FAQs.",
          "Disconnected databases requiring manual order entry."
        ]}
        bluetickTitle="Bluetick Automated Commerce Platform"
        bluetickItems={[
          "Sub-second React catalog browsing with instant mobile checkout.",
          "Automated WhatsApp COD verification cutting RTO losses by 45%.",
          "Automated WhatsApp cart recovery messages with 1-click discounts.",
          "24/7 AI agent answering sizing, stock, and policy questions in 2s.",
          "Atomic Supabase database sync with automated GST invoice generation."
        ]}
      />

      <SubPageWorkflow
        sectionNumber="02 /"
        sectionBadge="Store Engineering Cycle"
        title="From Catalog Modeling to High-Conversion Launch"
        subtitle="A disciplined 4-stage sprint process to engineer a resilient, scalable online store."
        steps={ECOMMERCE_WORKFLOW}
      />

      <SubPageDeliverables
        sectionNumber="03 /"
        sectionBadge="Store Capabilities"
        title="Complete E-Commerce Architecture Deliverables"
        subtitle="Everything needed for high checkout conversion, automated fulfillment, and happy repeat buyers."
        categories={ECOMMERCE_DELIVERABLES}
        techStack={[
          "React 18",
          "Vite",
          "Razorpay / Stripe API",
          "Meta WABA API",
          "Supabase PostgreSQL",
          "Shiprocket API",
          "Tailwind CSS"
        ]}
      />

      <SubPagePricing
        sectionNumber="04 /"
        sectionBadge="Transparent Investment"
        title="Transparent E-Commerce Packages"
        subtitle="No hidden revenue cuts or surprise retainers. Clear milestone-based scopes framed around your catalog scale."
        tiers={ECOMMERCE_PRICING_TIERS}
        disclaimer="Starting from prices indicate standard baseline storefront packages. Final investment is scoped transparently based on total SKU count, custom integrations (ERP/logistics), and specific automation workflows."
      />

      <SubPageFaq
        sectionNumber="05 /"
        sectionBadge="Frequently Asked Questions"
        title="Common Questions About Our E-Commerce Stores"
        subtitle="Clear answers on payment gateways, RTO control, and catalog management."
        faqs={ECOMMERCE_FAQS}
      />

      <SubPageCta
        badge="Free 30-Minute E-Commerce Audit"
        title="Ready to Scale Your Online Store Revenue?"
        subtitle="We will review your checkout funnel, identify conversion bottlenecks, and provide a clear technical roadmap in 24 hours."
        ctaText="Get Your Free Store Audit"
        ctaHref="/#audit"
      />
    </>
  );
};

export default EcommercePage;
