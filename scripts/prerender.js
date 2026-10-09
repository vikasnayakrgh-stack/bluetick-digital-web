import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from '../src/data/blogPosts.js';
import { fullBlogArticles } from '../src/data/blog/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Read built index.html template
const templatePath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf-8');

/**
 * Escapes characters for safe HTML attributes and text
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return str == null ? '' : String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generates JSON-LD structured data graph for blog articles (BlogPosting + optional FAQPage)
 */
function generateBlogSchema(post) {
  const schemaGraph = [
    {
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author || "Vikas Nayak",
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
      "datePublished": post.isoDate || "2026-08-18T00:00:00+05:30",
      "dateModified": post.isoDate || "2026-08-18T00:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://bluetickdigital.in/blog/${post.slug}`
      }
    }
  ];

  if (post.content && post.content.faqs && post.content.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `https://bluetickdigital.in/blog/${post.slug}#faq`,
      "mainEntity": post.content.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };
}

/**
 * Renders complete semantic HTML for an article from structured blog data
 */
function renderArticleToHtml(post) {
  if (!post || !post.content) return '';
  const { title, description, category, date, author, content } = post;
  const sections = content.sections || [];
  const faqs = content.faqs || [];
  const cta = content.cta || null;
  const hero = content.hero || null;
  const readTime = content.meta?.readTime || 10;

  let heroHtml = '';
  if (hero) {
    heroHtml = `
      <header class="article-hero-extended">
        <h2>${escapeHtml(hero.title)}</h2>
        ${hero.subtitle ? `<p>${escapeHtml(hero.subtitle)}</p>` : ''}
        ${hero.stats ? `<div class="hero-stats">${hero.stats.map(s => `<div><strong>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></div>`).join('')}</div>` : ''}
      </header>
    `;
  }

  let sectionsHtml = '';
  for (const section of sections) {
    let body = '';
    switch (section.type) {
      case 'text':
        body = (section.body || '').split('\n\n').filter(Boolean).map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`).join('\n');
        break;
      case 'html':
        body = section.body || '';
        break;
      case 'features':
        body = `<div class="features-grid">${(section.items || []).map(i => `<div class="feature-card"><h3>${escapeHtml(i.title)}</h3><p>${escapeHtml(i.desc)}</p></div>`).join('')}</div>`;
        break;
      case 'list':
        body = `<ul class="article-list">${(section.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
        break;
      case 'steps':
        body = `<div class="steps-list">${(section.items || []).map(s => `<div class="step-card"><span class="step-badge">Step ${escapeHtml(s.step)}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.body)}</p></div>`).join('')}</div>`;
        break;
      case 'table':
        body = `<div class="table-wrapper"><table><thead><tr>${(section.headers || []).map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${(section.rows || []).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
        break;
      case 'metrics':
        body = `<div class="metrics-grid">${(section.items || []).map(m => `<div class="metric-card"><strong>${escapeHtml(m.value)}</strong><span>${escapeHtml(m.label)}</span></div>`).join('')}</div>`;
        break;
    }
    sectionsHtml += `
      <section class="article-section">
        ${section.title ? `<h2>${escapeHtml(section.title)}</h2>` : ''}
        ${section.subtitle ? `<p class="section-subtitle">${escapeHtml(section.subtitle)}</p>` : ''}
        ${body}
      </section>
    `;
  }

  let faqsHtml = '';
  if (faqs.length > 0) {
    faqsHtml = `
      <section class="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faqs-list">
          ${faqs.map(f => `<div class="faq-item"><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`).join('')}
        </div>
      </section>
    `;
  }

  let ctaHtml = '';
  if (cta) {
    ctaHtml = `
      <section class="cta-section">
        <h3>${escapeHtml(cta.title)}</h3>
        <p>${escapeHtml(cta.body)}</p>
        <p><a href="${escapeHtml(cta.buttonLink || '/#audit')}" class="cta-btn">${escapeHtml(cta.buttonText || 'Request Architecture Proposal →')}</a></p>
      </section>
    `;
  }

  return `
    <main id="main-content">
      <article class="blog-article">
        <header class="article-header">
          <div class="article-meta">
            <span>${escapeHtml(category || 'Guide')}</span> • <time datetime="${post.isoDate || ''}">${escapeHtml(date || '')}</time> • <span>${readTime} min read</span>
          </div>
          <h1>${escapeHtml(title)}</h1>
          <p class="article-lead">${escapeHtml(description)}</p>
          <div class="article-author">
            <span>By ${escapeHtml(author || 'Vikas Nayak')}</span>
          </div>
        </header>
        ${heroHtml}
        <div class="article-body">
          ${sectionsHtml}
          ${faqsHtml}
          ${ctaHtml}
        </div>
      </article>
    </main>
  `;
}

// 1. Static Public Routes with Semantic Initial HTML
const STATIC_ROUTES = [
  {
    route: '/',
    title: 'Bluetick Digital | Websites + AI Automation Partner',
    description: 'Build a high-performance website, automate repetitive business processes, and turn your digital presence into an autonomous growth engine with Bluetick Digital.',
    keywords: 'AI Business Automation, Custom AI Agents, WhatsApp Business API, React Web Development, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '1.0',
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
      <section>
        <h2>Engineering Insights & Pricing Benchmarks</h2>
        <p>In-depth technical blueprints, cost breakdowns, and conversion playbooks for founders, business owners, and marketing leaders.</p>
        <ul>
          ${blogPosts.slice(0, 2).map(post => `
            <li>
              <article>
                <h3><a href="/blog/${post.slug}">${post.title}</a></h3>
                <p>${post.description}</p>
                <a href="/blog/${post.slug}">Read Full Guide →</a>
              </article>
            </li>
          `).join('\n')}
        </ul>
        <p><a href="/blog">Explore the Complete Knowledge Hub →</a></p>
      </section>
    `
  },
  {
    route: '/about',
    title: 'About Us | AI Digital Transformation Partner | Bluetick Digital',
    description: 'Learn about Bluetick Digital — an AI-powered Digital Transformation Partner headquartered in Raipur, serving Pan-India clients with high-performance websites and AI business automation.',
    keywords: 'About Bluetick Digital, Digital Transformation Partner, AI Business Systems, Vikas Nayak',
    canonical: 'https://bluetickdigital.in/about',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.8',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.9',
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
    keywords: 'WhatsApp Business API, Official Meta WhatsApp Business API, WhatsApp Automation, Green Tick Verification, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/whatsapp-automation',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.9',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.8',
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
      <section>
        <h2>Transparent Website Packages</h2>
        <p>Starter business websites starting from ₹10,000, growth corporate platforms from ₹20,000, and bespoke enterprise systems.</p>
        <p>Planning your budget? See our comprehensive <a href="/blog/website-development-cost-in-india-2026">2026 website development cost guide</a> for pricing benchmarks across freelancers, boutique agencies, and modern tech stacks.</p>
      </section>
    `
  },
  {
    route: '/solutions/ecommerce',
    title: 'E-commerce Website Development & Automation | Bluetick Digital',
    description: 'High-converting online stores built with seamless WhatsApp automation, COD verification, and cart recovery workflows. Engineered for scale.',
    keywords: 'E-commerce Website Development, D2C Commerce, COD Verification, Cart Recovery, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/solutions/ecommerce',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.8',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.7',
    bodyHtml: `<h1>Digital Transformation & Automation for E-Commerce Brands</h1><p>Turn store visitors into high-LTV repeat buyers with sub-second storefronts, automated WhatsApp COD verification, and 1-click cart recovery.</p>`
  },
  {
    route: '/industries/manufacturing',
    title: 'Manufacturing Inbound & RFQ Automation | Bluetick Digital',
    description: 'Automated RFQ intake, instant spec sheet delivery, and CRM routing for industrial manufacturers and distributors.',
    canonical: 'https://bluetickdigital.in/industries/manufacturing',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.7',
    bodyHtml: `<h1>Digital Systems & Lead Engines for Manufacturers</h1><p>Accelerate B2B sales cycles with automated RFQ pipelines, instant PDF catalog delivery, and distributor routing.</p>`
  },
  {
    route: '/industries/startups',
    title: 'Fast-Moving Digital Infrastructure for Startups | Bluetick Digital',
    description: 'Sprint-based web platforms, automated onboarding flows, and scalable tech infrastructure for high-growth startups.',
    canonical: 'https://bluetickdigital.in/industries/startups',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.7',
    bodyHtml: `<h1>High-Velocity Systems & Automation for Startups</h1><p>Launch scalable web platforms with integrated automated qualification and CRM pipelines in 2-week sprints.</p>`
  },
  {
    route: '/industries/local-business',
    title: 'Local Business Growth & WhatsApp Booking Systems | Bluetick Digital',
    description: 'High-converting local business websites, Google Maps optimization, and automated WhatsApp appointment booking.',
    canonical: 'https://bluetickdigital.in/industries/local-business',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.7',
    bodyHtml: `<h1>Local Business Growth & Automated WhatsApp Booking</h1><p>Dominate local search and convert showroom inquiries into paying customers automatically.</p>`
  },
  {
    route: '/whatsapp-api-pricing-india',
    title: 'WhatsApp API Pricing India (2026) | Calculator & Rates | Bluetick Digital',
    description: 'Check latest Meta WhatsApp API conversation rates for India (2026). Calculate Marketing, Utility, Authentication, and Service message costs instantly.',
    keywords: 'WhatsApp API Pricing India, Meta Conversation Rates, WhatsApp Marketing Cost, WhatsApp Business API Rates 2026',
    canonical: 'https://bluetickdigital.in/whatsapp-api-pricing-india',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.8',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'monthly',
    priority: '0.7',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'daily',
    priority: '0.8',
    bodyHtml: `
      <main id="main-content">
        <header>
          <h1>Resources &amp; Insights</h1>
          <p>Learn how to scale your business with WhatsApp automation, web development, and AI.</p>
        </header>
        <section>
          <h2>All Articles &amp; Engineering Guides</h2>
          <div class="blog-articles-grid">
            ${blogPosts.map(post => `
              <article class="blog-card">
                <h3><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a></h3>
                <p>${escapeHtml(post.description)}</p>
                <div>
                  <span>${escapeHtml(post.date)}</span> • <span>${escapeHtml(post.category)}</span>
                  <a href="/blog/${post.slug}">Read Article →</a>
                </div>
              </article>
            `).join('\n')}
          </div>
        </section>
      </main>
    `
  },
  {
    route: '/privacy',
    title: 'Privacy Policy | Bluetick Digital',
    description: 'Privacy Policy for Bluetick Digital (owned by Kheerendra Nayak) governing data protection, WhatsApp Business API services, AI-powered automation, customer data processing, and user rights.',
    keywords: 'Privacy Policy, Bluetick Digital Privacy, Data Protection, WhatsApp API Privacy, AI Data Security',
    canonical: 'https://bluetickdigital.in/privacy',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-08-24',
    changefreq: 'monthly',
    priority: '0.5',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-08-24',
    changefreq: 'monthly',
    priority: '0.5',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-08-24',
    changefreq: 'monthly',
    priority: '0.5',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-08-24',
    changefreq: 'monthly',
    priority: '0.5',
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
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-08-24',
    changefreq: 'monthly',
    priority: '0.5',
    bodyHtml: `
      <main>
        <h1>Acceptable Use &amp; WhatsApp Messaging Policy</h1>
        <p>Rules and compliance guidelines for WhatsApp Business API messaging, promotional broadcasts, AI automation, and customer opt-in requirements.</p>
        <p>Email: bluetickdigitalraipur@gmail.com | Owner: Kheerendra Nayak</p>
      </main>
    `
  },
  {
    route: '/pricing',
    title: 'Pricing Hub | Website & AI Automation Investment | Bluetick Digital',
    description: 'Select your solution: Project-based website & e-commerce pricing from ₹10K, or setup + monthly AI automation & WhatsApp workflows from ₹5K.',
    keywords: 'Bluetick Digital Pricing, Website Development Cost India, AI Automation Pricing, WhatsApp Bot Pricing',
    canonical: 'https://bluetickdigital.in/pricing',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.9',
    bodyHtml: `
      <main id="main-content">
        <header>
          <h1>Which solution are you looking for?</h1>
          <p>Bluetick Digital operates with two distinct, transparent pricing models. Select your area of interest to view full scope tiers, delivery timelines, and starting investments.</p>
        </header>
        <section>
          <h2>Websites &amp; E-Commerce</h2>
          <p>Project-based investment starting from ₹10,000. Custom React platforms, sub-second speed, and D2C stores.</p>
          <a href="/pricing/websites">View Website Pricing →</a>
        </section>
        <section>
          <h2>AI Automation &amp; Workflows</h2>
          <p>Setup + monthly operations starting from ₹5,000 setup + ₹1,000/month. 24/7 AI sales agents, WhatsApp bots, and CRM sync.</p>
          <a href="/pricing/ai-automation">View Automation Pricing →</a>
        </section>
      </main>
    `
  },
  {
    route: '/pricing/websites',
    title: 'Website & E-commerce Pricing | Transparent Investment Starting ₹10K | Bluetick Digital',
    description: 'Transparent project-based pricing for high-performance React business websites and custom D2C e-commerce stores in India. Starting from ₹10,000.',
    keywords: 'Website Development Cost India 2026, E-commerce Website Pricing India, React Website Cost, Bluetick Digital Website Pricing',
    canonical: 'https://bluetickdigital.in/pricing/websites',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.85',
    bodyHtml: `
      <main id="main-content">
        <header>
          <h1>Website &amp; E-commerce Pricing</h1>
          <p>Milestone-based, fixed-scope engineering for high-speed React websites and custom D2C stores. All tiers include clean code, SEO metadata, and mobile optimization.</p>
        </header>
        <div>
          <p><strong>Starting Points, Not Fixed Packages:</strong> All prices shown below are starting estimates based on standard feature scopes. Final pricing depends on scope, features, integrations, design requirements, and project complexity.</p>
        </div>
        <section>
          <h2>Business Website</h2>
          <p>From ₹10,000 (Project-Based). Custom responsive design, sub-second page speeds, essential SEO, and 1-click WhatsApp inquiry integration.</p>
        </section>
        <section>
          <h2>Premium Profile Website</h2>
          <p>From ₹20,000 (Project-Based). Bespoke Swiss design, multi-page corporate structure, interactive motion, full Schema, and Google Maps local SEO.</p>
        </section>
        <section>
          <h2>Small E-commerce</h2>
          <p>From ₹30,000 (Project-Based). Custom D2C storefront, variant matrix, Razorpay/UPI checkout, automated WhatsApp COD verification, and cart recovery.</p>
        </section>
        <section>
          <h2>Large Catalog E-commerce</h2>
          <p>From ₹50,000 (Project-Based). 1,000+ SKUs, faceted search, Supabase order ledger, multi-agent dashboard, and automated shipping tracking.</p>
        </section>
        <section>
          <h2>Custom Website</h2>
          <p>Custom Pricing. Bespoke web applications, client portals, complex database systems, and custom API integrations.</p>
        </section>
      </main>
    `
  },
  {
    route: '/pricing/ai-automation',
    title: 'AI Automation Pricing | Setup + Monthly Operations Starting ₹5K | Bluetick Digital',
    description: 'Transparent setup and monthly pricing for AI sales agents, WhatsApp business automation, and CRM integrations in India. Starting from ₹5,000 setup + ₹1,000/month.',
    keywords: 'AI Automation Pricing, WhatsApp Bot Cost India, AI Sales Agent Pricing, n8n Automation Pricing, Bluetick Digital',
    canonical: 'https://bluetickdigital.in/pricing/ai-automation',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    lastmod: '2026-02-18',
    changefreq: 'weekly',
    priority: '0.85',
    bodyHtml: `
      <main id="main-content">
        <header>
          <h1>AI Automation Pricing</h1>
          <p>Predictable setup investment plus transparent monthly operational upkeep for autonomous AI sales agents, WhatsApp bots, and CRM sync pipelines.</p>
        </header>
        <div>
          <p><strong>Customizable Workflow Pricing:</strong> All tiers represent starting estimates. Final pricing depends on the specific workflow requirements, integration depth, AI token consumption, and business complexity.</p>
        </div>
        <section>
          <h2>Starter Automation</h2>
          <p>From ₹5,000 setup + ₹1,000/month. 1 core automated workflow, webhook listener, instant email/WhatsApp alerts, cloud execution monitoring.</p>
        </section>
        <section>
          <h2>Business Automation</h2>
          <p>From ₹10,000 setup + ₹2,000/month. AI Sales/Support Agent, WhatsApp API integration, sub-30s qualification, Supabase CRM sync, monthly prompt tuning.</p>
        </section>
        <section>
          <h2>Advanced Automation</h2>
          <p>From ₹20,000 setup + ₹5,000/month. Multi-agent orchestration, dynamic catalog lookup, self-hosted n8n workflows, follow-up cadences, weekly audits.</p>
        </section>
        <section>
          <h2>Custom AI Systems</h2>
          <p>Custom Pricing. Custom fine-tuned LLMs, proprietary ERP/database integrations, dedicated SLA, and VPC on-premise deployments.</p>
        </section>
        <section>
          <h2>WhatsApp Business API (Official Meta Pass-Through)</h2>
          <p>Meta conversation charges passed through at exact actuals: Marketing (~₹0.863), Utility (~₹0.115), Authentication (~₹0.115), Service (24h free window).</p>
          <a href="/whatsapp-api-pricing-india">Open WhatsApp Cost Calculator →</a>
          <a href="/whatsapp-green-tick-checker">Check Green Tick Eligibility →</a>
        </section>
      </main>
    `
  },
  {
    route: '/404',
    title: 'Page Not Found | Bluetick Digital',
    description: 'The page you requested could not be found. Return to Bluetick Digital homepage or explore our latest resources.',
    robots: 'noindex, follow',
    canonical: 'https://bluetickdigital.in/404',
    ogImage: 'https://bluetickdigital.in/images/og-default.jpg',
    bodyHtml: `
      <main>
        <h1>Page Not Found</h1>
        <p>The page you requested could not be found. <a href="/">Return to Home</a></p>
      </main>
    `
  }
];

// 2. Dynamically Generate Blog Article Routes from Single Source of Truth
const blogRoutes = fullBlogArticles.map(post => ({
  route: `/blog/${post.slug}`,
  title: `${post.title} | Bluetick Digital`,
  description: post.description,
  keywords: `${post.category || 'Websites'}, AI Automation, Web Development India, Bluetick Digital`,
  canonical: `https://bluetickdigital.in/blog/${post.slug}`,
  ogImage: post.image || 'https://bluetickdigital.in/images/og-default.jpg',
  lastmod: post.isoDate ? post.isoDate.split('T')[0] : '2026-08-18',
  changefreq: 'monthly',
  priority: '0.8',
  schema: generateBlogSchema(post),
  bodyHtml: renderArticleToHtml(post)
}));

// Combine all routes
const ROUTES = [...STATIC_ROUTES, ...blogRoutes];

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

  if (page.robots) {
    if (html.includes('<meta name="robots"')) {
      html = html.replace(/<meta name="robots"[\s\S]*?>/i, `<meta name="robots" content="${page.robots}">`);
    } else {
      html = html.replace('</head>', `  <meta name="robots" content="${page.robots}" />\n</head>`);
    }
  }

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

  // 6. Inject Pre-rendered Semantic HTML Body directly into #root
  // This ensures search engine crawlers and users receive 100% full semantic content immediately,
  // without relying on client-side JS or thin <noscript> fallbacks.
  if (page.bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${page.bodyHtml}</div>`);
  }

  return html;
}

/**
 * Automatically generates a clean, valid XML sitemap based on route definitions
 */
function generateSitemapXml(routes) {
  const publicRoutes = routes.filter(r => r.route !== '/404');
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const r of publicRoutes) {
    xml += '  <url>\n';
    xml += `    <loc>${r.canonical}</loc>\n`;
    xml += `    <lastmod>${r.lastmod || '2026-02-18'}</lastmod>\n`;
    xml += `    <changefreq>${r.changefreq || 'monthly'}</changefreq>\n`;
    xml += `    <priority>${r.priority || '0.7'}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  return xml;
}

console.log('--- PRE-RENDERING STATIC HTML ROUTES ---');
let count = 0;

for (const page of ROUTES) {
  const pageHtml = generatePageHtml(page);
  let targetFile;

  if (page.route === '/') {
    targetFile = path.join(DIST_DIR, 'index.html');
  } else if (page.route === '/404') {
    targetFile = path.join(DIST_DIR, '404.html');
  } else {
    const routeDir = path.join(DIST_DIR, page.route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    targetFile = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  console.log(`✓ Pre-rendered: ${page.route} -> ${path.relative(DIST_DIR, targetFile)}`);
  count++;
}

// 7. Synchronize XML Sitemap
const sitemapXml = generateSitemapXml(ROUTES);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`✓ Synchronized XML Sitemap with ${ROUTES.filter(r => r.route !== '/404').length} public routes`);

console.log(`\n🎉 Successfully pre-rendered ${count} static HTML routes with complete metadata & semantic content!`);
