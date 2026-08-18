import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Factory, Rocket, Building2, ArrowRight, Zap, CheckCircle2, Bot, MessageSquare, Clock, ShieldCheck, Sparkles, Send } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './AutomationDemo.module.css';

const DEMOS = {
  ecommerce: {
    id: "ecommerce",
    title: "D2C E-Commerce",
    icon: ShoppingBag,
    badge: "CART & ORDER AUTOMATION",
    metric: "+184% Lead Conversion",
    metricSub: "3.2x Faster Checkout Completion",
    problem: "High web traffic but heavy checkout drop-offs due to delayed product answers and abandoned inquiries.",
    solution: "Connected WhatsApp AI agent that delivers instant size/trial answers, automated COD verification, and personalized 1-click checkout recovery links.",
    outcome: "Zero missed customer inquiries, 3.2x faster checkout recovery, and 24/7 automated order status tracking.",
    chat: {
      customerName: "Rohan Verma",
      customerPhone: "+91 98765 43210",
      customerMessage: "Hi, I added the King Size Ortho Mattress to my cart. Is the 100-night trial valid in Pune?",
      customerTime: "10:14 AM",
      aiReply: "Hi Rohan! Yes, the 100-night risk-free trial is 100% valid with free delivery & setup in Pune! 🚚✨",
      aiExtra: "I noticed your cart is saved. Here is a direct link to complete your order with an exclusive ₹500 prepaid discount:",
      aiButton: "Complete Purchase (₹18,499) →",
      aiTime: "10:14 AM (1.8s SLA)",
      actionPill: "⚡ Synced to Supabase CRM #CART-8921 · Follow-up Scheduled"
    }
  },
  manufacturing: {
    id: "manufacturing",
    title: "Manufacturers & B2B",
    icon: Factory,
    badge: "B2B INQUIRY QUALIFICATION",
    metric: "-75% Manual Work",
    metricSub: "100% High-Intent Leads Qualified",
    problem: "Sales reps spend 70% of their workday fielding unqualified inquiries, checking MOQ requirements, and manually emailing brochures.",
    solution: "Interactive qualification workflow that captures required quantity, technical specifications, and location before instantly alerting the regional sales manager.",
    outcome: "Sales team talks ONLY to high-intent bulk buyers. Technical catalog PDFs delivered automatically within 3 seconds.",
    chat: {
      customerName: "Sanjay Singhal (Apex Steels)",
      customerPhone: "+91 98110 99882",
      customerMessage: "Need technical specifications & MOQ for 500 industrial valve units for a Gujarat project.",
      customerTime: "02:30 PM",
      aiReply: "Hello Sanjay ji! Our MOQ for industrial valves is 200 units. For 500 units, tiered wholesale pricing applies.",
      aiExtra: "I've sent the complete 2026 Technical Catalog PDF to your WhatsApp. Would you like a direct callback from our Senior Engineering Lead today at 4 PM?",
      aiButton: "Download Technical Specs PDF (4.2 MB)",
      aiTime: "02:30 PM (2.4s SLA)",
      actionPill: "🔒 Lead Tagged [Wholesale / Tier-1] · Alert Sent to Regional Head"
    }
  },
  startup: {
    id: "startup",
    title: "Startups & Tech",
    icon: Rocket,
    badge: "DEMO BOOKING ENGINE",
    metric: "<30s Response SLA",
    metricSub: "3x Higher Demo Show-up Rate",
    problem: "Prospects request a product demo but drop off during slow email back-and-forths, causing calendar leakage.",
    solution: "Automated instant qualification agent with direct interactive calendar slot selection inside WhatsApp and Web Chat.",
    outcome: "3x faster demo scheduling with automated 24h & 1h WhatsApp calendar reminders, cutting no-shows to near zero.",
    chat: {
      customerName: "Kavita Rao (Fintech Labs)",
      customerPhone: "+91 99201 12345",
      customerMessage: "We're looking to automate our customer KYC pipeline. Can we schedule a quick demo?",
      customerTime: "11:45 AM",
      aiReply: "Hi Kavita! We'd love to show you how our AI KYC agent cuts verification time to under 30 seconds.",
      aiExtra: "Please pick your preferred 20-minute product walkthrough slot directly:",
      aiButton: "Select Demo Slot (Today 4:30 PM / Tomorrow 11 AM) 📅",
      aiTime: "11:45 AM (1.9s SLA)",
      actionPill: "📅 Google Calendar Invite Dispatched · WhatsApp Reminder Queued"
    }
  },
  local: {
    id: "local",
    title: "Real Estate & Services",
    icon: Building2,
    badge: "SITE VISIT AUTOMATION",
    metric: "100% Lead Capture",
    metricSub: "Automated Brochure & Visit Booking",
    problem: "High ad spend on Meta & Google, but manual site visit bookings lead to slow follow-ups and lost property buyers.",
    solution: "AI brochure delivery bot that shares floor plans, amenities, and pricing instantly, then schedules verified site visits.",
    outcome: "Instant brochure delivery & auto-scheduled site visits directly to local sales team calendars without human delay.",
    chat: {
      customerName: "Vikram Malhotra",
      customerPhone: "+91 97654 32190",
      customerMessage: "Interested in the 3BHK South Delhi project. What are the possession dates and floor plans?",
      customerTime: "06:15 PM",
      aiReply: "Hello Vikram ji! Possession starts Q4 2026. The 3BHK units feature 2,400 sq.ft with private elevator access.",
      aiExtra: "I've sent the complete Floor Plan & Price Breakdown brochure below. Would you like to schedule a private site visit this Saturday at 11:30 AM?",
      aiButton: "Confirm Saturday 11:30 AM Site Visit →",
      aiTime: "06:15 PM (2.1s SLA)",
      actionPill: "📍 Site Visit Slot Reserved · Relationship Manager Assigned"
    }
  }
};

const AutomationDemo = () => {
  const [selectedTab, setSelectedTab] = useState("ecommerce");
  const [isTyping, setIsTyping] = useState(false);
  const current = DEMOS[selectedTab];

  // Trigger typing simulation on tab change
  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedTab]);

  return (
    <section id="automation-demo" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <FloemaReveal variant="slide-up" delay={0}>
          <div className="section-header">
            <span className="section-number">03 /</span>
            <span className="section-badge">
              <Sparkles size={14} /> Interactive Live Simulation
            </span>
            <h2 className="section-title">
              Real business challenges. Automated solutions.
            </h2>
            <p className="section-subtitle">
              Select an industry below to test how Bluetick builds custom AI automation workflows to eliminate manual bottlenecks and accelerate revenue.
            </p>
          </div>
        </FloemaReveal>

        {/* Tab Selector */}
        <div className={styles.tabGrid}>
          {Object.values(DEMOS).map((demo) => {
            const Icon = demo.icon;
            const isSelected = selectedTab === demo.id;
            return (
              <button
                key={demo.id}
                className={`${styles.tabBtn} ${isSelected ? styles.tabSelected : ''}`}
                onClick={() => setSelectedTab(demo.id)}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeDemoTabGlider"
                    className={styles.tabGlider}
                    transition={MOTION_TOKENS.spring.snappy}
                  />
                )}
                <span className={styles.tabContent}>
                  <Icon size={16} className={styles.tabIcon} />
                  <span>{demo.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase: Strategy Breakdown + Live WhatsApp Simulator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: MOTION_TOKENS.ease.outExpo }}
            className={styles.demoShowcaseGrid}
          >
            {/* Left Column: 3-Stage Strategic Architecture */}
            <div className={styles.strategyCol}>
              <div className={styles.strategyHeader}>
                <span className={styles.industryTag}>{current.badge}</span>
                <div className={styles.metricCallout}>
                  <Zap size={14} className={styles.metricIcon} />
                  <span className={styles.metricMain}>{current.metric}</span>
                </div>
              </div>

              {/* 3 Step Cards */}
              <div className={styles.stepCardsStack}>
                {/* 01: Bottleneck */}
                <div className={`${styles.stepCard} ${styles.cardProblem}`}>
                  <div className={styles.stepCardTop}>
                    <span className={styles.tagProblem}>01 · THE BOTTLENECK</span>
                  </div>
                  <h4 className={styles.stepHeading}>Operational Challenge</h4>
                  <p className={styles.stepBody}>{current.problem}</p>
                </div>

                {/* 02: Bluetick Solution */}
                <div className={`${styles.stepCard} ${styles.cardSolution}`}>
                  <div className={styles.stepCardTop}>
                    <span className={styles.tagSolution}>02 · WHAT BLUETICK BUILDS</span>
                  </div>
                  <h4 className={styles.stepHeading}>Connected Automation Engine</h4>
                  <p className={styles.stepBody}>{current.solution}</p>
                </div>

                {/* 03: Measurable Growth Outcome */}
                <div className={`${styles.stepCard} ${styles.cardOutcome}`}>
                  <div className={styles.stepCardTop}>
                    <span className={styles.tagOutcome}>03 · BUSINESS OUTCOME</span>
                    <span className={styles.outcomeSubBadge}>{current.metricSub}</span>
                  </div>
                  <h4 className={styles.stepHeading}>Measurable Growth Impact</h4>
                  <p className={styles.stepBody}>{current.outcome}</p>
                </div>
              </div>

              <div className={styles.strategyFooter}>
                <a href="#audit" className="btn btn-primary btn-md">
                  <span>Build This System For Your Business</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Live WhatsApp AI Smartphone Simulator */}
            <div className={styles.simulatorCol}>
              <div className={styles.phoneDevice}>
                {/* Device Speaker & Camera Notch */}
                <div className={styles.phoneNotch}>
                  <div className={styles.speakerPill} />
                  <div className={styles.cameraLens} />
                </div>

                {/* WhatsApp App Header */}
                <div className={styles.waHeader}>
                  <div className={styles.waAvatar}>
                    <Bot size={20} className={styles.waAvatarIcon} />
                    <span className={styles.waOnlineDot} />
                  </div>
                  <div className={styles.waHeaderInfo}>
                    <div className={styles.waNameRow}>
                      <span className={styles.waAgentName}>Priya AI</span>
                      <span className={styles.waVerifiedBadge}>✓</span>
                    </div>
                    <span className={styles.waStatusText}>Bluetick Automation · Online</span>
                  </div>
                  <span className={styles.waSlaTag}>
                    <Clock size={11} /> 24/7 SLA
                  </span>
                </div>

                {/* WhatsApp Chat Conversation Body */}
                <div className={styles.waChatBody}>
                  <div className={styles.dateDivider}>
                    <span>TODAY</span>
                  </div>

                  {/* Customer Inbound Message */}
                  <motion.div
                    className={styles.msgInbound}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={styles.msgText}>{current.chat.customerMessage}</p>
                    <div className={styles.msgMeta}>
                      <span className={styles.msgTime}>{current.chat.customerTime}</span>
                    </div>
                  </motion.div>

                  {/* AI Assistant Typing Indicator or Message */}
                  {isTyping ? (
                    <div className={styles.msgOutboundTyping}>
                      <div className={styles.typingDot} />
                      <div className={styles.typingDot} style={{ animationDelay: '0.15s' }} />
                      <div className={styles.typingDot} style={{ animationDelay: '0.3s' }} />
                    </div>
                  ) : (
                    <motion.div
                      className={styles.msgOutbound}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <p className={styles.msgText}>{current.chat.aiReply}</p>
                      <p className={styles.msgTextSecondary}>{current.chat.aiExtra}</p>
                      
                      {/* Interactive WhatsApp Quick Action CTA */}
                      <div className={styles.waActionBtn}>
                        <span>{current.chat.aiButton}</span>
                      </div>

                      <div className={styles.msgMeta}>
                        <span className={styles.msgTimeAi}>{current.chat.aiTime}</span>
                        <span className={styles.msgCheckDouble}>✓✓</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Simulated Backend Action Event Pill */}
                  <motion.div
                    className={styles.backendEventPill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <ShieldCheck size={13} className={styles.backendEventIcon} />
                    <span>{current.chat.actionPill}</span>
                  </motion.div>
                </div>

                {/* WhatsApp Chat Input Bar */}
                <div className={styles.waInputBar}>
                  <span className={styles.waInputPlaceholder}>Type a message...</span>
                  <div className={styles.waSendBtn}>
                    <Send size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AutomationDemo;
