import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Read built index.html template
const templatePath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf-8');

// Authoritative Route Definitions with Complete Semantic Metadata & Initial HTML Snapshot
const ROUTES = [
  {
    route: '/',
    title: 'Bluetick Digital | Websites + AI Automation Growth Engine',
    description: 'Build a high-performance website, automate repetitive business processes, and turn your digital presence into an autonomous growth engine with Bluetick Digital.',
    keywords: 'AI Business Automation, Custom AI Agents, WhatsApp Business API, React Web Development, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://bluetickdigital.in/#organization",
      "name": "Bluetick Digital",
      "url": "https://bluetickdigital.in",
      "logo": "https://bluetickdigital.in/assets/logo.png",
      "description": "AI-powered Digital Transformation Partner for Growing Businesses. High-converting websites, custom AI agents, and connected WhatsApp automation systems.",
      "sameAs": [
        "https://wa.me/916261003050",
        "https://www.linkedin.com/company/bluetick-digital/"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-6261003050",
          "contactType": "sales",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-8770440636",
          "contactType": "customer support",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    bodyHtml: `
      <header>
        <h1>Websites & AI Automation Engineered for Measurable Growth</h1>
        <p>We combine modern React web design, custom 24/7 AI qualification agents, and official WhatsApp Business API workflows into an autonomous growth engine for your business.</p>
      </header>
      <section>
        <h2>Core Capabilities</h2>
        <ul>
          <li><strong>Autonomous AI Agents:</strong> Sub-30s lead qualification, dynamic intent scoring, automated CRM sync.</li>
          <li><strong>WhatsApp Business API:</strong> Official Meta Cloud API onboarding, broadcast workflows, and multi-agent inboxes.</li>
          <li><strong>High-Performance Web Platforms:</strong> Sub-second React 18 platforms built for maximum conversion.</li>
          <li><strong>Knowledge Hub:</strong> <a href="/blog">Engineering guides, pricing benchmarks, and WhatsApp automation blueprints</a>.</li>
        </ul>
      </section>
    `
  },
  {
    route: '/about',
    title: 'About Us | AI Digital Transformation Partner | Bluetick Digital',
    description: 'Learn about Bluetick Digital — an AI-powered Digital Transformation Partner headquartered in Raipur, serving Pan-India clients with high-performance websites and AI business automation.',
    keywords: 'About Bluetick Digital, Digital Transformation Partner, AI Business Systems, Vikas Nayak',
    canonical: 'https://bluetickdigital.in/about',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://bluetickdigital.in/about#webpage",
      "name": "About Bluetick Digital",
      "url": "https://bluetickdigital.in/about",
      "description": "Bluetick Digital is an AI-powered Digital Transformation Partner headquartered in Raipur (HQ) serving Pan-India clients."
    },
    bodyHtml: `
      <header>
        <h1>We build digital systems that simplify business growth.</h1>
        <p>Bluetick Digital is an AI-powered Digital Transformation Partner for growing businesses in India. We combine modern web design, custom AI agents, and workflow automation.</p>
      </header>
      <section>
        <h2>Leadership & Engineering Philosophy</h2>
        <p>Founded by Vikas Nayak, Bluetick Digital operates on senior-led engineering, atomic data isolation in Supabase, and transparent automation delivery.</p>
      </section>
    `
  },
  {
    route: '/solutions/ai-automation',
    title: 'Custom AI Automation Systems & Workflow Engineering | Bluetick Digital',
    description: 'Custom AI agents, n8n workflows, and Supabase CRM integrations that automate support, qualify leads in sub-30s, and eliminate manual business overhead.',
    keywords: 'AI Business Automation, Custom AI Agents, GPT-4o, n8n Workflows, Lead Qualification AI, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/ai-automation',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom AI Automation Systems & Workflow Engineering",
      "provider": { "@type": "Organization", "name": "Bluetick Digital", "url": "https://bluetickdigital.in" },
      "serviceType": "AI Workflow Automation & Custom AI Agents",
      "description": "Custom AI agents, n8n workflows, and Supabase CRM integrations that automate support, qualify leads in sub-30s, and eliminate manual business overhead."
    },
    bodyHtml: `
      <header>
        <h1>Custom AI Agents & Automated Workflows Built for 24/7 Scaling</h1>
        <p>Eliminate slow response times, unqualified inquiries, and manual data entry. We engineer custom AI agents that qualify buyer intent in sub-30 seconds, deliver instant quotes, and sync directly with your CRM.</p>
      </header>
      <section>
        <h2>Performance Metrics</h2>
        <ul>
          <li>Sub-30s Lead Qualification</li>
          <li>98.8% Intent Classification Accuracy</li>
          <li>-75% Manual Sales Overhead</li>
          <li>24/7/365 Zero-Downtime Availability</li>
        </ul>
      </section>
    `
  },
  {
    route: '/solutions/whatsapp-automation',
    title: 'Official WhatsApp Business API & Automation Systems | Bluetick Digital',
    description: 'Official Meta WhatsApp Business API integration, AI chat automation, broadcast workflows, and multi-agent team inboxes for growing businesses.',
    keywords: 'WhatsApp Business API, Official Meta Partner, WhatsApp Automation, Green Tick Verification, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/whatsapp-automation',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Official WhatsApp Business API & Automation Systems",
      "provider": { "@type": "Organization", "name": "Bluetick Digital", "url": "https://bluetickdigital.in" },
      "serviceType": "WhatsApp Business API & Conversation Automation",
      "description": "Official Meta WhatsApp Business API integration, AI chat automation, broadcast workflows, and multi-agent team inboxes."
    },
    bodyHtml: `
      <header>
        <h1>Official WhatsApp Business API Workflows Engineered for High Engagement</h1>
        <p>Turn WhatsApp into your primary revenue and support engine. Connect your website inquiries directly to official Meta WhatsApp APIs with 24/7 AI qualification, automated reminders, and zero ban risk.</p>
      </header>
    `
  },
  {
    route: '/solutions/websites',
    title: 'Business Website Design & Web Platform Engineering | Bluetick Digital',
    description: 'High-converting, sub-second business websites designed to attract, engage, and convert customers. Engineered with modern React tech and connected AI lead pipelines.',
    keywords: 'Business Website Design, Lead Generation Websites, Modern Web Development, React 18, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/websites',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Business Website Design & Web Platform Engineering",
      "provider": { "@type": "Organization", "name": "Bluetick Digital", "url": "https://bluetickdigital.in" },
      "serviceType": "High-Performance Business Web Platforms"
    },
    bodyHtml: `
      <header>
        <h1>High-Speed Business Websites Engineered for Measurable Growth</h1>
        <p>We build ultra-fast, mobile-first business web platforms that capture intent, rank on search engines, and connect directly to automated sales pipelines.</p>
      </header>
    `
  },
  {
    route: '/solutions/ecommerce',
    title: 'E-commerce Website Development & Automation | Bluetick Digital',
    description: 'High-converting online stores built with seamless WhatsApp automation, COD verification, and cart recovery workflows. Engineered for scale.',
    keywords: 'E-commerce Website Development, D2C Commerce, COD Verification, Cart Recovery, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/ecommerce',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-commerce Website Development & Automation",
      "provider": { "@type": "Organization", "name": "Bluetick Digital", "url": "https://bluetickdigital.in" },
      "serviceType": "D2C E-Commerce Platforms & Automation"
    },
    bodyHtml: `
      <header>
        <h1>E-Commerce Platforms Engineered to Maximize Conversions</h1>
        <p>Turn casual browsers into repeat buyers with sub-second storefronts, automated WhatsApp COD verification, and 1-click cart recovery.</p>
      </header>
    `
  },
  {
    route: '/industries/ecommerce',
    title: 'E-Commerce Digital Transformation & Automation | Bluetick Digital',
    description: 'Digital transformation & automation for D2C brands: automated WhatsApp COD verification, 1-click cart recovery, and 24/7 AI sizing support.',
    canonical: 'https://bluetickdigital.in/industries/ecommerce',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `<h1>Digital Transformation & Automation for E-Commerce Brands</h1><p>Turn store visitors into high-LTV repeat buyers with sub-second storefronts, automated WhatsApp COD verification, and 1-click cart recovery.</p>`
  },
  {
    route: '/industries/manufacturing',
    title: 'Manufacturing Inbound & RFQ Automation | Bluetick Digital',
    description: 'Automated RFQ intake, instant spec sheet delivery, and CRM routing for industrial manufacturers and distributors.',
    canonical: 'https://bluetickdigital.in/industries/manufacturing',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `<h1>Digital Systems & Lead Engines for Manufacturers</h1><p>Accelerate B2B sales cycles with automated RFQ pipelines, instant PDF catalog delivery, and distributor routing.</p>`
  },
  {
    route: '/industries/startups',
    title: 'Fast-Moving Digital Infrastructure for Startups | Bluetick Digital',
    description: 'Sprint-based web platforms, automated onboarding flows, and scalable tech infrastructure for high-growth startups.',
    canonical: 'https://bluetickdigital.in/industries/startups',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `<h1>High-Velocity Systems & Automation for Startups</h1><p>Launch scalable web platforms with integrated automated qualification and CRM pipelines in 2-week sprints.</p>`
  },
  {
    route: '/industries/local-business',
    title: 'Local Business Growth & WhatsApp Booking Systems | Bluetick Digital',
    description: 'High-converting local business websites, Google Maps optimization, and automated WhatsApp appointment booking.',
    canonical: 'https://bluetickdigital.in/industries/local-business',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `<h1>Local Business Growth & Automated WhatsApp Booking</h1><p>Dominate local search and convert showroom inquiries into paying customers automatically.</p>`
  },
  {
    route: '/whatsapp-api-pricing-india',
    title: 'WhatsApp API Pricing India (2026) | Calculator & Rates | Bluetick Digital',
    description: 'Check latest Meta WhatsApp API conversation rates for India (2026). Calculate Marketing, Utility, Authentication, and Service message costs instantly.',
    keywords: 'WhatsApp API Pricing India, Meta Conversation Rates, WhatsApp Marketing Cost, WhatsApp Business API Rates 2026',
    canonical: 'https://bluetickdigital.in/whatsapp-api-pricing-india',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <header>
        <h1>WhatsApp Business API Pricing India (2026 Updated)</h1>
        <p>Calculate your exact monthly Meta conversation costs across Marketing (~₹0.863), Utility (~₹0.115), and Authentication categories.</p>
      </header>
    `
  },
  {
    route: '/whatsapp-green-tick-checker',
    title: 'WhatsApp Green Tick Eligibility Checker | Bluetick Digital',
    description: 'Check if your business qualifies for the verified Meta WhatsApp Green Tick badge. Free assessment tool by Bluetick Digital.',
    keywords: 'WhatsApp Green Tick Checker, Meta Verified Badge, WhatsApp Business Verification, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/whatsapp-green-tick-checker',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <header>
        <h1>Green Tick Eligibility Checker</h1>
        <p>Find out if your business qualifies for the official Meta verified badge.</p>
      </header>
    `
  },
  {
    route: '/blog',
    title: 'Resources & Insights | AI Automation & WhatsApp API | Bluetick Digital',
    description: 'Engineering guides, automation blueprints, and technical insights on AI agents, n8n workflows, and WhatsApp Business API.',
    keywords: 'WhatsApp Marketing, AI Automation Blog, n8n Workflows, Business Transformation, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/blog',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <header>
        <h1>Resources & Insights</h1>
        <p>Learn how to scale your business with AI agents, n8n automation, and official WhatsApp Business API workflows.</p>
      </header>
    `
  },
  {
    route: '/blog/whatsapp-chatbot-automation',
    title: 'The Ultimate Guide to WhatsApp Chatbot Automation (2026) | Bluetick Digital',
    description: 'Scale your business 10x with AI-powered WhatsApp automation. Learn how to capture leads, book demos, and provide 24/7 support.',
    keywords: 'WhatsApp Chatbot Automation, AI Sales Engine, WhatsApp Business API 2026',
    canonical: 'https://bluetickdigital.in/blog/whatsapp-chatbot-automation',
    ogImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Ultimate Guide to WhatsApp Chatbot Automation (2026)",
      "description": "Scale your business 10x with AI-powered WhatsApp automation. Learn how to capture leads, book demos, and provide 24/7 support.",
      "image": "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      "author": {
        "@type": "Person",
        "name": "Vikas Nayak",
        "url": "https://bluetickdigital.in/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bluetick Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bluetickdigital.in/assets/logo.png"
        }
      },
      "datePublished": "2026-02-07T00:00:00+05:30",
      "dateModified": "2026-02-07T00:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://bluetickdigital.in/blog/whatsapp-chatbot-automation"
      }
    },
    bodyHtml: `
      <article>
        <h1>The Ultimate Guide to WhatsApp Chatbot Automation (2026)</h1>
        <p>In 2026, customers expect instant responses. WhatsApp is no longer just a messaging app; it is the world's most powerful sales engine. With over 2 billion active users and a 98% open rate, automating your WhatsApp conversations turns inquiries into closed deals 24/7.</p>
        <h2>Key Features of an Enterprise AI Chatbot</h2>
        <ul>
          <li><strong>24/7 Lead Capture:</strong> Never miss a prospect, even after office hours.</li>
          <li><strong>CRM Integration:</strong> Instantly sync leads to Supabase, HubSpot, or Zoho.</li>
          <li><strong>Payment Collection:</strong> Send secure UPI and Razorpay payment links directly in chat.</li>
        </ul>
      </article>
    `
  },
  {
    route: '/blog/website-development-cost-in-india-2026',
    title: 'Website Development Cost in India (2026 Pricing Guide) | Bluetick Digital',
    description: 'Transparent 2026 guide to website development costs in India. Compare pricing for small business websites, WordPress, custom platforms, and e-commerce stores.',
    keywords: 'Website Development Cost India, Website Design Pricing 2026, Custom Website Cost, E-commerce Website Cost India',
    canonical: 'https://bluetickdigital.in/blog/website-development-cost-in-india-2026',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Website Development Cost in India: Complete 2026 Pricing Guide",
      "description": "Transparent 2026 guide to website development costs in India. Compare pricing for small business websites, WordPress, custom platforms, and e-commerce stores.",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "author": {
        "@type": "Person",
        "name": "Vikas Nayak",
        "url": "https://bluetickdigital.in/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bluetick Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bluetickdigital.in/assets/logo.png"
        }
      },
      "datePublished": "2026-08-18T00:00:00+05:30",
      "dateModified": "2026-08-18T00:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://bluetickdigital.in/blog/website-development-cost-in-india-2026"
      }
    },
    bodyHtml: `
      <article>
        <h1>Website Development Cost in India: Complete 2026 Pricing Guide</h1>
        <p>In 2026, the cost of developing a professional business website in India typically ranges from ₹15,000 to ₹90,000 for standard business and corporate websites, ₹50,000 to ₹1,50,000 for D2C e-commerce stores, and ₹1,50,000 to ₹10,00,000+ for custom web applications and enterprise portals.</p>
        <h2>5 Core Cost Determinants</h2>
        <ul>
          <li><strong>Design Approach:</strong> Pre-made Theme vs Bespoke UX Wireframing.</li>
          <li><strong>Page Volume & Content Depth:</strong> Information architecture and catalog size.</li>
          <li><strong>Technology Stack:</strong> WordPress, Shopify, or modern custom builds (React / Vite).</li>
          <li><strong>Lead Pipeline Complexity:</strong> Static forms vs atomic database and WhatsApp alerts.</li>
          <li><strong>Integrations:</strong> Payment gateways, logistics APIs, and CRM synchronization.</li>
        </ul>
      </article>
    `
  },
  {
    route: '/privacy',
    title: 'Privacy Policy | Bluetick Digital',
    description: 'Privacy Policy for Bluetick Digital (owned by Kheerendra Nayak) governing data protection, WhatsApp Business API services, AI-powered automation, customer data processing, and user rights.',
    keywords: 'Privacy Policy, Bluetick Digital Privacy, Data Protection, WhatsApp API Privacy, AI Data Security',
    canonical: 'https://bluetickdigital.in/privacy',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <main>
        <h1>Privacy Policy</h1>
        <p>Bluetick Digital (owned by Kheerendra Nayak) is committed to protecting personal data handled through our website, WhatsApp Business API solutions, AI automation, and customer communications.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Registered Address under applicable MSME/Udyam registration.</p>
      </main>
    `
  },
  {
    route: '/terms',
    title: 'Terms of Service | Bluetick Digital',
    description: 'Terms of Service governing access to and use of Bluetick Digital\'s (owned by Kheerendra Nayak) website, software, AI chatbots, and WhatsApp Business API automation services.',
    keywords: 'Terms of Service, Bluetick Digital Terms, WhatsApp API Terms, AI Automation Agreement',
    canonical: 'https://bluetickdigital.in/terms',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <main>
        <h1>Terms of Service</h1>
        <p>These Terms of Service govern your access to and use of Bluetick Digital (owned by Kheerendra Nayak) website, WhatsApp Business API workflows, custom AI agents, and digital automation platforms.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Registered Address under applicable MSME/Udyam registration.</p>
      </main>
    `
  },
  {
    route: '/refund',
    title: 'Refund & Cancellation Policy | Bluetick Digital',
    description: 'Read Bluetick Digital\'s refund, cancellation, subscription and service policy.',
    keywords: 'Refund Policy, Cancellation Policy, Bluetick Digital Subscription, WhatsApp Automation Refund',
    canonical: 'https://bluetickdigital.in/refund',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <main>
        <h1>Refund &amp; Cancellation Policy</h1>
        <p>Read Bluetick Digital's annual subscription, service cancellation, and refund guidelines for WhatsApp Business API and AI automation solutions.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Owner: Kheerendra Nayak</p>
      </main>
    `
  },
  {
    route: '/cookies',
    title: 'Cookie Policy | Bluetick Digital',
    description: 'Learn how Bluetick Digital uses cookies, analytics and similar technologies on its website.',
    keywords: 'Cookie Policy, Website Cookies, Google Analytics Cookies, Meta Pixel Consent, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/cookies',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <main>
        <h1>Cookie Policy</h1>
        <p>Learn how Bluetick Digital uses essential, analytics, and marketing cookies to operate our website and measure performance.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Owner: Kheerendra Nayak</p>
      </main>
    `
  },
  {
    route: '/acceptable-use',
    title: 'Acceptable Use & WhatsApp Messaging Policy | Bluetick Digital',
    description: 'Learn the rules for responsible WhatsApp messaging, automation, AI and acceptable use of Bluetick Digital services.',
    keywords: 'Acceptable Use Policy, WhatsApp Messaging Rules, Anti-Spam Policy, AI Automation Policy, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/acceptable-use',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
    bodyHtml: `
      <main>
        <h1>Acceptable Use &amp; WhatsApp Messaging Policy</h1>
        <p>Rules and compliance guidelines for WhatsApp Business API messaging, promotional broadcasts, AI automation, and customer opt-in requirements.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Owner: Kheerendra Nayak</p>
      </main>
    `
  }
];

// Helper to replace or insert meta tags in HTML
function generatePageHtml(page) {
  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(/<meta name="description"[\s\S]*?>/i, `<meta name="description" content="${page.description}">`);

  // 3. Replace/Ensure Canonical
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${page.canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${page.canonical}" />\n</head>`);
  }

  // 4. Update OpenGraph URL and Twitter URL
  html = html.replace(/<meta property="og:url" content=".*?"/i, `<meta property="og:url" content="${page.canonical}"`);
  html = html.replace(/<meta name="twitter:url" content=".*?"/i, `<meta name="twitter:url" content="${page.canonical}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/i, `<meta property="og:title" content="${page.title}"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/i, `<meta name="twitter:title" content="${page.title}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/i, `<meta property="og:description" content="${page.description}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/i, `<meta name="twitter:description" content="${page.description}"`);

  if (page.ogImage) {
    html = html.replace(/<meta property="og:image" content=".*?"/i, `<meta property="og:image" content="${page.ogImage}"`);
    html = html.replace(/<meta name="twitter:image" content=".*?"/i, `<meta name="twitter:image" content="${page.ogImage}"`);
  }

  // 5. Inject Structured Data
  if (page.schema) {
    const schemaJson = JSON.stringify(page.schema, null, 2);
    // Replace existing schema or inject
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">\n${schemaJson}\n  </script>`);
  }

  // 6. Inject Pre-rendered Semantic HTML Body inside <noscript> for SEO crawlers without JS
  if (page.bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n  <noscript>\n    <div class="seo-prerender-fallback">\n${page.bodyHtml}\n    </div>\n  </noscript>`);
  }

  return html;
}

console.log('--- PRE-RENDERING STATIC HTML ROUTES ---');
let count = 0;

for (const page of ROUTES) {
  const pageHtml = generatePageHtml(page);
  let targetFile;

  if (page.route === '/') {
    targetFile = path.join(DIST_DIR, 'index.html');
  } else {
    const routeDir = path.join(DIST_DIR, page.route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    targetFile = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  console.log(`✓ Pre-rendered: ${page.route} -> ${path.relative(DIST_DIR, targetFile)}`);
  count++;
}

console.log(`\n🎉 Successfully pre-rendered ${count} static HTML routes with complete metadata & semantic content!`);
