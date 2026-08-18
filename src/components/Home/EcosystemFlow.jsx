import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, UserCheck, Bot, MessageSquare, Database, 
  CheckCircle2, ArrowRight, Zap, ShieldCheck, Sparkles, Activity, Layers
} from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './EcosystemFlow.module.css';

const ECOSYSTEM_STAGES = [
  {
    id: 'stage-01',
    stepNumber: '01',
    name: 'High-Speed Web Traffic',
    tagline: 'Sub-1.2s React 18 & 95+ Core Web Vitals',
    icon: Globe,
    badgeColor: 'blue',
    description: 'High-speed web platforms engineered to capture visitors from Google search, Meta Ads, and direct referrals with zero bounce lag.',
    telemetry: 'TTFB: 38ms · 0% Layout Shift · 99.8% Uptime',
    metrics: ['Sub-1.2s LCP Load', '95+ Google Web Vitals', 'Mobile-First Responsive']
  },
  {
    id: 'stage-02',
    stepNumber: '02',
    name: 'Contextual Smart Capture',
    tagline: 'Zero-Friction Inbound Touchpoints',
    icon: UserCheck,
    badgeColor: 'cyan',
    description: 'Context-aware lead capture funnels and 1-tap WhatsApp deep links that convert passive browsing into active inquiries.',
    telemetry: '4.2x Higher Conversion than Generic Static Contact Forms',
    metrics: ['1-Tap WhatsApp CTAs', '2-Step Smart Audit Forms', 'UTM Parameter Tracking']
  },
  {
    id: 'stage-03',
    stepNumber: '03',
    name: '24/7 AI Qualification Engine',
    tagline: 'Sub-30s Intent Scoring & FAQ Resolution',
    icon: Bot,
    badgeColor: 'purple',
    description: 'Bilingual (Hindi + English) AI agents qualify budget, company size, and product requirement in under 30 seconds without human intervention.',
    telemetry: 'Sub-30s SLA · 98.8% Intent Classification Accuracy',
    metrics: ['GPT-4o Conversational Core', 'Budget & Intent Scoring', 'Bilingual Natural Dialogue']
  },
  {
    id: 'stage-04',
    stepNumber: '04',
    name: 'Official WhatsApp Action (WABA)',
    tagline: 'Instant Dispatch & Meeting Scheduling',
    icon: MessageSquare,
    badgeColor: 'green',
    description: 'Official Meta WhatsApp Business API automatically delivers PDF product catalogs, schedules Google Meet calls, and verifies COD orders.',
    telemetry: 'Instant WhatsApp SLA · 98% Message Open Rate',
    metrics: ['Meta Verified WABA API', 'Automated PDF Dispatch', '1-Click Calendly Sync']
  },
  {
    id: 'stage-05',
    stepNumber: '05',
    name: 'Supabase Atomic CRM Sync',
    tagline: 'Zero Data Loss & Live Founder Alerts',
    icon: Database,
    badgeColor: 'blue',
    description: 'Every qualified conversation is written atomically to Supabase PostgreSQL with automated deduplication and instant founder escalation.',
    telemetry: 'Atomic Transaction #TX-9842 · Zero Lost Leads',
    metrics: ['Atomic Deduplication', 'Instant Slack/SMS Alerts', 'Live Deal Pipeline Sync']
  },
  {
    id: 'stage-06',
    stepNumber: '06',
    name: 'Automated Conversion & Close',
    tagline: 'High-Ticket B2B & D2C Revenue Closed',
    icon: CheckCircle2,
    badgeColor: 'green',
    description: 'Automated 7–14 day nurture sequences re-engage warm prospects until purchase or appointment confirmation is secured.',
    telemetry: '₹5.9L+ Avg Annual Sales Team Overhead Saved',
    metrics: ['Automated 14-Day Nurture', '1-Click Cart Recovery', 'Confirmed Showroom Bookings']
  }
];

const EcosystemFlow = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = ECOSYSTEM_STAGES[activeStageIdx];

  return (
    <section id="ecosystem" className={styles.ecosystemSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <FloemaReveal variant="slide-up" delay={0}>
          <div className={styles.sectionHeader}>
            <span className={styles.watermarkNumber}>02</span>
            <span className="section-badge font-mono">
              <Sparkles size={13} /> CONNECTED REVENUE ENGINE
            </span>
            <h2 className="section-title">
              The 6-stage connected business engine.
            </h2>
            <p className="section-subtitle">
              How high-speed web platforms, intelligent AI qualification, and official Meta WhatsApp infrastructure connect into one unified revenue pipeline.
            </p>
          </div>
        </FloemaReveal>

        {/* 6-Stage Pipeline Grid */}
        <div className={styles.pipelineGrid}>
          {/* Left Column: 6 Interactive Step Connectors */}
          <div className={styles.stagesList} role="tablist">
            {ECOSYSTEM_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStageIdx === idx;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.stageCard} ${isActive ? styles.stageCardActive : ''}`}
                  onClick={() => setActiveStageIdx(idx)}
                >
                  <div className={styles.stageLeft}>
                    <span className={styles.stageNumber}>{stage.stepNumber}</span>
                    <div className={`${styles.iconContainer} ${styles[`icon${stage.badgeColor}`]}`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className={styles.stageContent}>
                    <div className={styles.stageTitleRow}>
                      <h3 className={styles.stageName}>{stage.name}</h3>
                      {isActive && (
                        <span className={styles.activePill}>ACTIVE STAGE</span>
                      )}
                    </div>
                    <p className={styles.stageTagline}>{stage.tagline}</p>
                  </div>

                  <ArrowRight size={16} className={`${styles.stageArrow} ${isActive ? styles.stageArrowActive : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Stage Deep-Dive */}
          <div className={styles.detailCard}>
            <div className={styles.detailCardHeader}>
              <div className={styles.detailMeta}>
                <span className={styles.detailStepTag}>STAGE {activeStage.stepNumber} OF 06</span>
                <h3 className={styles.detailTitle}>{activeStage.name}</h3>
                <p className={styles.detailTagline}>{activeStage.tagline}</p>
              </div>
              <div className={`${styles.detailIconBox} ${styles[`icon${activeStage.badgeColor}`]}`}>
                <activeStage.icon size={24} />
              </div>
            </div>

            <div className={styles.detailBody}>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>HOW IT OPERATES</span>
                <p className={styles.detailDesc}>{activeStage.description}</p>
              </div>

              {/* Telemetry Chip */}
              <div className={styles.telemetryBox}>
                <Activity size={14} className={styles.telemetryIcon} />
                <span className={styles.telemetryText}>{activeStage.telemetry}</span>
              </div>

              {/* Core Capabilities */}
              <div className={styles.capabilitiesBlock}>
                <span className={styles.detailLabel}>ENGINEERED CAPABILITIES</span>
                <div className={styles.metricsList}>
                  {activeStage.metrics.map((metric, i) => (
                    <div key={i} className={styles.metricItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className={styles.detailFooter}>
                <div className={styles.assuranceLeft}>
                  <ShieldCheck size={16} className={styles.shieldIcon} />
                  <span>Meta Verified API · Atomic Supabase · Zero Lead Loss</span>
                </div>
                <a href="#audit" className={styles.auditCtaLink}>
                  <span>Connect This Engine</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemFlow;
