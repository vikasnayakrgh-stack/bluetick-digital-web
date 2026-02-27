import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import React, { Suspense } from 'react'
import AnnouncementBar from './components/Layout/AnnouncementBar'
import Header from './components/Layout/Header'
import Hero from './components/Home/Hero'
import Footer from './components/Layout/Footer'
import WhatsAppBtn from './components/Layout/WhatsAppBtn'
import BackToTop from './components/Layout/BackToTop'
import SEO from './components/Common/SEO'
import Cursor from './components/Common/Cursor'
import FacebookPixel from './components/Common/FacebookPixel'
import GoogleAnalytics from './components/Common/GoogleAnalytics'
import MagneticCursor from './components/Common/MagneticCursor'
import './App.css'

// Lazy load below-fold components for faster mobile initial load
const WhyChoose = React.lazy(() => import('./components/Home/WhyChoose'))
const TrustBar = React.lazy(() => import('./components/Home/TrustBar'))
const BroadcastFeature = React.lazy(() => import('./components/Home/BroadcastFeature'))
const AdIntelligence = React.lazy(() => import('./components/Home/AdIntelligence'))
const NativeForms = React.lazy(() => import('./components/Home/NativeForms'))
const Workflows = React.lazy(() => import('./components/Home/Workflows'))
const LeadIntelligence = React.lazy(() => import('./components/Home/LeadIntelligence'))
const Integrations = React.lazy(() => import('./components/Home/Integrations'))
const IndustrySolutions = React.lazy(() => import('./components/Home/IndustrySolutions'))
const CaseStudies = React.lazy(() => import('./components/Home/CaseStudies'))
const Testimonials = React.lazy(() => import('./components/Home/Testimonials'))
const ClientSuccess = React.lazy(() => import('./components/Home/ClientSuccess'))
const Pricing = React.lazy(() => import('./components/Home/Pricing'))
const ImportantDetails = React.lazy(() => import('./components/Home/ImportantDetails'))
const ContactForm = React.lazy(() => import('./components/Home/ContactForm'))
const FAQ = React.lazy(() => import('./components/Home/FAQ'))
const ChatSimulator = React.lazy(() => import('./components/Home/ChatSimulator'))

// Lazy load route-level pages
const BlogListing = React.lazy(() => import('./components/Blog/BlogListing'))
const BlogPost = React.lazy(() => import('./components/Blog/BlogPost'))
const WhatsAppCalculator = React.lazy(() => import('./components/Tools/WhatsAppCalculator'))
const GreenTickChecker = React.lazy(() => import('./components/Tools/GreenTickChecker'))
const WebsiteDesign = React.lazy(() => import('./components/WebsiteDesign/WebsiteDesign'))

const Home = () => (
  <>
    <SEO
      title="Automate Sales with WhatsApp AI Agents"
      description="Elite WhatsApp Business API solutions. AI Priya automates your sales funnel, handles leads, and books demos 24/7."
      keywords="WhatsApp API, Sales Automation, AI Chatbot, WhatsApp CRM, AI Priya"
    />
    <Hero />
    <Suspense fallback={null}>
      <WhyChoose />
      <TrustBar />
      <BroadcastFeature />
      <AdIntelligence />
      <NativeForms />
      <Workflows />
      <LeadIntelligence />
      <Integrations />
      <IndustrySolutions />
      <CaseStudies />
      <Testimonials />
      <ClientSuccess />
      <Pricing />
      <ImportantDetails />
      <ContactForm />
      <FAQ />
    </Suspense>
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Cursor />
        <div className="App">
          {/* Skip to main content for keyboard users */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <AnnouncementBar />
          <Header />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Suspense fallback={null}><BlogListing /></Suspense>} />
              <Route path="/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
              <Route path="/whatsapp-api-pricing-india" element={<Suspense fallback={null}><WhatsAppCalculator /></Suspense>} />
              <Route path="/whatsapp-api-cost-calculator" element={<Suspense fallback={null}><WhatsAppCalculator /></Suspense>} />
              <Route path="/whatsapp-green-tick-checker" element={<Suspense fallback={null}><GreenTickChecker /></Suspense>} />
              <Route path="/website-design-automation" element={<Suspense fallback={null}><WebsiteDesign /></Suspense>} />
              {/* Compatibility for old link */}
              <Route path="/guide/whatsapp-chatbot-automation" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </main>

          <FacebookPixel />
          <GoogleAnalytics />
          <MagneticCursor />
          <WhatsAppBtn />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
