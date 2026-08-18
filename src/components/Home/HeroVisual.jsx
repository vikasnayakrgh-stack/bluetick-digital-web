import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Bot, Database, MessageSquare, ShieldCheck, Activity, Terminal } from 'lucide-react';
import styles from './HeroVisual.module.css';

const SCENARIOS = [
  {
    id: 'b2b',
    name: 'B2B Manufacturing',
    inboundSource: 'Google Search / LinkedIn Inbound',
    inboundVolume: '1,840 B2B Visits/mo',
    aiIntentTag: 'BULK_ORDER_INQUIRY',
    aiConfidence: '98.8%',
    leadScore: '96 / 100 · HOT LEAD',
    leadName: 'Vikram Mehta (Apex Corp)',
    leadQuote: 'Need MOQ & technical specs for 500 units by next week.',
    whatsAppAction: 'Auto-Dispatched Catalog & Direct Calendly Link',
    whatsAppLatency: '3.4s SLA',
    crmSyncStatus: 'Synced to Supabase #TX-9842 · Auto-Assigned to Founder',
    monthlySavings: '₹64,500/mo manual overhead saved'
  },
  {
    id: 'ecommerce',
    name: 'D2C E-Commerce',
    inboundSource: 'Meta Ads & Instagram Shop',
    inboundVolume: '42,500 Store Visitors/mo',
    aiIntentTag: 'ABANDONED_CHECKOUT_RECOVERY',
    aiConfidence: '99.2%',
    leadScore: '92 / 100 · HIGH INTENT',
    leadName: 'Ananya Sharma',
    leadQuote: 'Is the 100-night trial valid on the King Size mattress?',
    whatsAppAction: 'Priya AI answered trial policy + 1-click discount link',
    whatsAppLatency: '2.1s SLA',
    crmSyncStatus: 'Cart Recovered (₹18,499) · Customer Tagged [VIP]',
    monthlySavings: '₹1,12,000/mo recovered sales'
  },
  {
    id: 'services',
    name: 'Real Estate & Services',
    inboundSource: 'Google Ads & Portal Leads',
    inboundVolume: '3,200 High-Intent Clicks/mo',
    aiIntentTag: 'SITE_VISIT_BOOKING',
    aiConfidence: '97.5%',
    leadScore: '94 / 100 · QUALIFIED',
    leadName: 'Rahul Verma',
    leadQuote: 'Looking for 3BHK in South Delhi, budget 3.5 Cr. Available Sunday?',
    whatsAppAction: 'Confirmed Sunday 11:30 AM Site Visit with Relationship Mgr',
    whatsAppLatency: '4.8s SLA',
    crmSyncStatus: 'Scheduled to CRM Calendar + Google Meet Invite Sent',
    monthlySavings: '₹55,000/mo broker coordination saved'
  }
];

const HeroVisual = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const current = SCENARIOS[activeScenarioIdx];

  return (
    <div className={styles.visualContainer}>
      {/* Top Console Bar */}
      <div className={styles.consoleHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.statusLivePill}>
            <Terminal size={13} className={styles.terminalIcon} />
            <span>SYSTEM BLUEPRINT TELEMETRY</span>
          </div>
          <span className={styles.latencyBadge}>
            <Activity size={12} className={styles.latencyIcon} /> 38ms TTFB · Sub-5s SLA
          </span>
        </div>

        {/* Interactive Scenario Tabs */}
        <div className={styles.scenarioTabs} role="tablist">
          {SCENARIOS.map((scenario, idx) => (
            <button
              key={scenario.id}
              role="tab"
              aria-selected={activeScenarioIdx === idx}
              className={`${styles.scenarioTab} ${activeScenarioIdx === idx ? styles.scenarioTabActive : ''}`}
              onClick={() => setActiveScenarioIdx(idx)}
            >
              {scenario.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Stage Pipeline Architecture */}
      <div className={styles.pipelineMatrix}>
        {/* Stage 1: Inbound Capture */}
        <div className={styles.pipelineCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconBox} ${styles.iconBoxBlue}`}>
              <Globe size={16} />
            </div>
            <div className={styles.cardHeaderMeta}>
              <span className={styles.cardStepNumber}>STAGE 01</span>
              <h4 className={styles.cardTitle}>Inbound Traffic</h4>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.metricRow}>
              <span className={styles.metricLabel}>Source:</span>
              <span className={styles.metricValue}>{current.inboundSource}</span>
            </div>
            <div className={styles.metricRow}>
              <span className={styles.metricLabel}>Traffic Vol:</span>
              <span className={styles.metricValueBold}>{current.inboundVolume}</span>
            </div>
            <div className={styles.incomingQuoteBox}>
              <span className={styles.incomingQuoteUser}>{current.leadName}:</span>
              <p className={styles.incomingQuoteText}>"{current.leadQuote}"</p>
            </div>
          </div>
        </div>

        {/* Stage 2: AI Qualification */}
        <div className={styles.pipelineCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconBox} ${styles.iconBoxCyan}`}>
              <Bot size={16} />
            </div>
            <div className={styles.cardHeaderMeta}>
              <span className={styles.cardStepNumber}>STAGE 02</span>
              <h4 className={styles.cardTitle}>AI Qualification</h4>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.intentTagBox}>
              <span className={styles.intentLabel}>DETECTED INTENT</span>
              <span className={styles.intentTag}>{current.aiIntentTag}</span>
            </div>
            <div className={styles.metricRow}>
              <span className={styles.metricLabel}>Confidence:</span>
              <span className={styles.metricValueHighlight}>{current.aiConfidence}</span>
            </div>
            <div className={styles.leadScorePill}>
              <span>{current.leadScore}</span>
            </div>
          </div>
        </div>

        {/* Stage 3: WhatsApp Action & Supabase CRM */}
        <div className={styles.pipelineCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconBox} ${styles.iconBoxGreen}`}>
              <MessageSquare size={16} />
            </div>
            <div className={styles.cardHeaderMeta}>
              <span className={styles.cardStepNumber}>STAGE 03</span>
              <h4 className={styles.cardTitle}>WhatsApp & CRM</h4>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.metricRow}>
              <span className={styles.metricLabel}>Response:</span>
              <span className={styles.metricValueSuccess}>{current.whatsAppLatency}</span>
            </div>
            <div className={styles.actionTextBox}>
              <p className={styles.actionText}>{current.whatsAppAction}</p>
            </div>
            <div className={styles.dbSyncBox}>
              <Database size={13} className={styles.dbIcon} />
              <span className={styles.dbSyncText}>{current.crmSyncStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className={styles.summaryBar}>
        <div className={styles.summaryLeft}>
          <ShieldCheck size={15} className={styles.shieldIcon} />
          <span>Atomic Supabase Transaction · Zero Data Loss · Sub-5s Response</span>
        </div>
        <div className={styles.summaryRight}>
          <span className={styles.savingsPill}>{current.monthlySavings}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
