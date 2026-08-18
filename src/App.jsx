import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { initScrollReveal } from './utils/scrollReveal'
import { SITE_CONFIG } from './config/siteConfig'

// Layout
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import WhatsAppBtn from './components/Layout/WhatsAppBtn'
import BackToTop from './components/Layout/BackToTop'
import SEO from './components/Common/SEO'

// Home Sections
import Hero from './components/Home/Hero'
import TrustBar from './components/Home/TrustBar'
import CoreSolutions from './components/Home/CoreSolutions'
import BusinessSystem from './components/Home/BusinessSystem'
import AutomationDemo from './components/Home/AutomationDemo'
import ProjectsShowcase from './components/Home/ProjectsShowcase'
import IndustrySolutions from './components/Home/IndustrySolutions'
import HowItWorks from './components/Home/HowItWorks'
import WhyBluetick from './components/Home/WhyBluetick'
import FAQ from './components/Home/FAQ'
import AuditForm from './components/Home/AuditForm'

// Sub-Pages
import WebsitesPage from './components/Solutions/WebsitesPage'
import EcommercePage from './components/Solutions/EcommercePage'
import AIAutomationPage from './components/Solutions/AIAutomationPage'
import WhatsAppAutomationPage from './components/Solutions/WhatsAppAutomationPage'
import IndustryPage from './components/Industries/IndustryPage'
import AboutPage from './components/About/AboutPage'
import BlogListing from './components/Blog/BlogListing'
import BlogPost from './components/Blog/BlogPost'
import WhatsAppCalculator from './components/Tools/WhatsAppCalculator'
import GreenTickChecker from './components/Tools/GreenTickChecker'

import { FAQ_DATA } from './constants/pricing_faq'

import './App.css'

const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.siteUrl,
      "logo": SITE_CONFIG.assets.logo,
      "description": SITE_CONFIG.defaultDescription,
      "priceRange": "₹10,000 - ₹1,00,000+",
      "founder": {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#founder`,
        "name": SITE_CONFIG.founder.name,
        "jobTitle": SITE_CONFIG.founder.role,
        "sameAs": [
          SITE_CONFIG.founder.linkedin
        ]
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": SITE_CONFIG.contact.primaryPhone,
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": SITE_CONFIG.contact.secondaryPhone,
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "sameAs": [
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.whatsapp
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      "url": SITE_CONFIG.siteUrl,
      "name": SITE_CONFIG.brandName,
      "publisher": {
        "@id": `${SITE_CONFIG.siteUrl}/#organization`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.siteUrl}/#faq`,
      "mainEntity": FAQ_DATA.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ]
};

const Home = () => (
  <>
    <SEO
      title="Websites + AI | Digital Transformation Partner"
      description="Build a high-performance website, automate repetitive business processes, and turn your digital presence into an autonomous growth engine with Bluetick Digital."
      keywords="AI Business Automation, Custom AI Agents, WhatsApp Workflows, React Website Development, Bluetick Digital"
      structuredData={HOME_STRUCTURED_DATA}
    />
    <Hero />
    <TrustBar />
    <CoreSolutions />
    <BusinessSystem />
    <AutomationDemo />
    <ProjectsShowcase />
    <IndustrySolutions />
    <HowItWorks />
    <WhyBluetick />
    <FAQ />
    <AuditForm />
  </>
);


function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    const scrollReveal = initScrollReveal({
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
      animateOnce: true,
    });

    return () => {
      if (scrollReveal) {
        scrollReveal.disconnect();
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="App">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            {/* <AnnouncementBar /> */}
            <Header />

            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions/websites" element={<WebsitesPage />} />
                <Route path="/solutions/ecommerce" element={<EcommercePage />} />
                <Route path="/solutions/ai-automation" element={<AIAutomationPage />} />
                <Route path="/solutions/whatsapp-automation" element={<WhatsAppAutomationPage />} />
                <Route path="/industries/:slug" element={<IndustryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogListing />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/whatsapp-api-pricing-india" element={<WhatsAppCalculator />} />
                <Route path="/whatsapp-api-cost-calculator" element={<Navigate to="/whatsapp-api-pricing-india" replace />} />
                <Route path="/whatsapp-green-tick-checker" element={<GreenTickChecker />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            <Footer />
            <WhatsAppBtn />
            <BackToTop />
          </div>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  )
}

export default App
