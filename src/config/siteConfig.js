/**
 * BLUETICK DIGITAL — SINGLE AUTHORITATIVE SITE CONFIGURATION
 * Single source of truth for metadata, canonicals, contact endpoints, and structured data entities.
 */

export const SITE_CONFIG = {
  // Authoritative Production Domain
  domain: 'bluetickdigital.in',
  siteUrl: 'https://bluetickdigital.in',
  canonicalBase: 'https://bluetickdigital.in',

  // Brand Identity
  brandName: 'Bluetick Digital',
  legalName: 'Bluetick Digital',
  tagline: 'AI-Powered Digital Transformation Partner',
  defaultDescription: 'Build a high-performance website, automate repetitive business processes, and turn your digital presence into an autonomous growth engine.',
  defaultKeywords: 'AI Business Automation, Custom AI Agents, WhatsApp Business API, High-Performance Websites, React 18, n8n Workflows, Supabase CRM, Digital Transformation Partner',

  // Contact Endpoints (Business Truth)
  contact: {
    primaryPhone: '+91 6261003050',         // Primary WhatsApp & Sales
    secondaryPhone: '+91 8770440636',       // Secondary & Support Desk
    whatsappRaw: '916261003050',
    whatsappLink: 'https://wa.me/916261003050',
    email: 'contact@bluetickdigital.in',
  },

  // E-E-A-T & Leadership
  founder: {
    name: 'Vikas Nayak',
    role: 'Founder & Principal Systems Architect',
    linkedin: 'https://www.linkedin.com/in/vikasnayak/',
  },

  // Verified Assets (Absolute & Relative)
  assets: {
    logo: 'https://bluetickdigital.in/assets/logo.png',
    logoIcon: 'https://bluetickdigital.in/assets/logo-icon.png',
    favicon: 'https://bluetickdigital.in/assets/favicon.png',
    ogImage: 'https://bluetickdigital.in/assets/logo.png',
  },

  // Social & External Profiles
  social: {
    whatsapp: 'https://wa.me/916261003050',
    linkedin: 'https://www.linkedin.com/company/bluetick-digital/',
  },

  // Geographic Service Areas
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City', name: 'Raipur' },
    { '@type': 'City', name: 'Bhilai' },
    { '@type': 'City', name: 'Bilaspur' },
  ],
};

export default SITE_CONFIG;
