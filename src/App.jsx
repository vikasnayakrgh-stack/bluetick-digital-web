import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AnnouncementBar from './components/Layout/AnnouncementBar'
import Header from './components/Layout/Header'
import Hero from './components/Home/Hero'
import WhyChoose from './components/Home/WhyChoose'
import TrustBar from './components/Home/TrustBar'
import Workflows from './components/Home/Workflows'
import CaseStudies from './components/Home/CaseStudies'
import IndustrySolutions from './components/Home/IndustrySolutions'
import ClientSuccess from './components/Home/ClientSuccess'
import Pricing from './components/Home/Pricing'
import ImportantDetails from './components/Home/ImportantDetails'
import FAQ from './components/Home/FAQ'
import LeadIntelligence from './components/Home/LeadIntelligence'
import Integrations from './components/Home/Integrations'
import BroadcastFeature from './components/Home/BroadcastFeature'
import AdIntelligence from './components/Home/AdIntelligence'
import NativeForms from './components/Home/NativeForms'
import Testimonials from './components/Home/Testimonials'
import ContactForm from './components/Home/ContactForm'
import Footer from './components/Layout/Footer'
import WhatsAppBtn from './components/Layout/WhatsAppBtn'
import BackToTop from './components/Layout/BackToTop'
import BlogListing from './components/Blog/BlogListing'
import BlogPost from './components/Blog/BlogPost'
import SEO from './components/Common/SEO'
import FacebookPixel from './components/Common/FacebookPixel'
import GoogleAnalytics from './components/Common/GoogleAnalytics'
import './App.css'

const Home = () => (
  <>
    <SEO
      title="Automate Sales with WhatsApp AI Agents"
      description="Elite WhatsApp Business API solutions. AI Priya automates your sales funnel, handles leads, and books demos 24/7."
      keywords="WhatsApp API, Sales Automation, AI Chatbot, WhatsApp CRM, AI Priya"
    />
    <Hero />
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
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
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
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* Compatibility for old link */}
              <Route path="/guide/whatsapp-chatbot-automation" element={<BlogPost />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </main>

          <FacebookPixel />
          <GoogleAnalytics />
          <WhatsAppBtn />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
