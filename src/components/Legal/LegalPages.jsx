import React from 'react';
import SEO from '../Common/SEO';
import { ArrowLeft, ShieldCheck, FileText, RefreshCw, Cookie, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './LegalPages.module.css';

// Reusable Breadcrumb Component
const Breadcrumb = ({ currentPage }) => (
  <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
    <Link to="/" className={styles.breadcrumbLink}>
      <ArrowLeft size={14} /> Home
    </Link>
    <span className={styles.breadcrumbDot}>/</span>
    <span className={styles.breadcrumbCurrent}>{currentPage}</span>
  </nav>
);

// Reusable Desktop Sticky TOC Sidebar
const TableOfContents = ({ sections }) => (
  <aside className={styles.tocSidebar} aria-label="Table of Contents">
    <p className={styles.tocTitle}>On this page</p>
    <ul className={styles.tocList}>
      {sections.map((s, idx) => (
        <li key={idx}>
          <a href={`#${s.id}`} className={styles.tocLink}>
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

// ==========================================
// 1. REFUND & CANCELLATION POLICY
// ==========================================
export const RefundPage = () => {
  const sections = [
    { id: 'section-1', title: '1. Our Subscription Model' },
    { id: 'section-2', title: '2. No Automatic Renewal' },
    { id: 'section-3', title: '3. Cancellation' },
    { id: 'section-4', title: '4. General Refund Policy' },
    { id: 'section-5', title: '5. Change of Mind' },
    { id: 'section-6', title: '6. WhatsApp Setup & Approval' },
    { id: 'section-7', title: '7. Customer-Supplied Info' },
    { id: 'section-8', title: '8. Policy Violations' },
    { id: 'section-9', title: '9. Technical Issues' },
    { id: 'section-10', title: '10. Third-Party Failures' },
    { id: 'section-11', title: '11. Unused Subscription' },
    { id: 'section-12', title: '12. Duplicate / Incorrect' },
    { id: 'section-13', title: '13. Refund Request Process' },
    { id: 'section-14', title: '14. Refund Processing' },
    { id: 'section-15', title: '15. Consumer Rights' },
    { id: 'section-16', title: '16. Policy Changes' },
    { id: 'section-17', title: '17. Contact' }
  ];

  return (
    <>
      <SEO
        title="Refund & Cancellation Policy | Bluetick Digital"
        description="Read Bluetick Digital's refund, cancellation, subscription and service policy."
      />
      <main className={styles.legalSection}>
        <div className={styles.container}>
          <Breadcrumb currentPage="Refund &amp; Cancellation Policy" />

          <header className={styles.pageHeader}>
            <div className={styles.titleRow}>
              <RefreshCw size={32} className={styles.headerIcon} />
              <h1 className={styles.pageTitle}>Refund &amp; Cancellation Policy</h1>
            </div>
            <div className={styles.metaInfo}>
              <span><strong>Effective Date:</strong> 19 August 2026</span>
              <span><strong>Last Updated:</strong> 19 August 2026</span>
            </div>
          </header>

          <div className={styles.twoColumnLayout}>
            <TableOfContents sections={sections} />

            <article className={styles.contentWrapper}>
              <section id="section-1" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>1. Our Subscription Model</h2>
                <p>Bluetick currently offers annual subscription plans and related implementation/services.</p>
                <p>Our plans may include:</p>
                <ul className={styles.bulletList}>
                  <li><strong>Growth</strong> — ₹11,999/year</li>
                  <li><strong>AI Growth Engine</strong> — ₹14,999/year</li>
                  <li><strong>Power Combo</strong> — ₹25,000/year</li>
                </ul>
                <p>Plan features, limits and pricing are subject to the applicable plan or commercial agreement.</p>
                <p>Applicable taxes, where required by law, may be charged separately.</p>
              </section>

              <section id="section-2" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>2. No Automatic Renewal</h2>
                <p>Bluetick subscriptions do not automatically renew.</p>
                <p>When your subscription period expires, the service will stop unless you purchase or renew the applicable plan.</p>
              </section>

              <section id="section-3" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>3. Cancellation</h2>
                <p>Customers may request cancellation of their subscription or service.</p>
                <p>Unless otherwise agreed in writing, cancellation will result in immediate termination of access to the applicable Bluetick service.</p>
                <p>Cancellation does not create an automatic entitlement to a refund.</p>
              </section>

              <section id="section-4" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>4. General Refund Policy</h2>
                <p><strong>Payments are generally non-refundable once payment has been made or service activation has started.</strong></p>
                <p>This includes, where applicable:</p>
                <ul className={styles.bulletList}>
                  <li>Subscription fees</li>
                  <li>Setup fees</li>
                  <li>Activation fees</li>
                  <li>Configuration fees</li>
                  <li>Implementation fees</li>
                  <li>Customisation charges</li>
                  <li>Third-party service charges</li>
                </ul>
                <p>A refund may be provided only where:</p>
                <ol className={styles.orderedList}>
                  <li>Bluetick expressly agrees to provide one; or</li>
                  <li>Bluetick is legally required to provide one.</li>
                </ol>
              </section>

              <section id="section-5" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>5. Change of Mind</h2>
                <p>No refund will generally be provided because a customer:</p>
                <ul className={styles.bulletList}>
                  <li>Changes their mind</li>
                  <li>Decides not to use the service</li>
                  <li>Does not use all available features</li>
                  <li>Does not generate the expected number of leads</li>
                  <li>Does not achieve expected business results</li>
                  <li>Does not like the service after activation</li>
                </ul>
              </section>

              <section id="section-6" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>6. WhatsApp Setup and Approval</h2>
                <p>Bluetick may provide WhatsApp Business API onboarding and configuration.</p>
                <p>Once setup, activation or onboarding work has commenced, the related fees are generally non-refundable.</p>
                <p>No refund is guaranteed if:</p>
                <ul className={styles.bulletList}>
                  <li>Meta/WhatsApp does not approve the business</li>
                  <li>A WhatsApp number is rejected</li>
                  <li>A template is rejected</li>
                  <li>A WhatsApp account is restricted</li>
                  <li>A number is suspended or banned</li>
                  <li>Messaging limits are imposed</li>
                </ul>
                <p>Where the issue is caused by Bluetick's technical implementation, Bluetick will provide reasonable technical support to investigate and resolve the issue.</p>
              </section>

              <section id="section-7" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>7. Customer-Supplied Information</h2>
                <p>Customers are responsible for providing accurate and complete information and documents required for service activation.</p>
                <p>No refund will generally be provided where service failure, delay or rejection results from:</p>
                <ul className={styles.bulletList}>
                  <li>Incorrect information</li>
                  <li>Incomplete information</li>
                  <li>Incorrect business documents</li>
                  <li>Invalid WhatsApp details</li>
                  <li>Customer-side configuration</li>
                  <li>Customer-side policy violations</li>
                  <li>Failure to provide required access or permissions</li>
                </ul>
              </section>

              <section id="section-8" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>8. WhatsApp/Meta Policy Violations</h2>
                <p>If a customer's WhatsApp account, number or messaging capability is restricted because of:</p>
                <ul className={styles.bulletList}>
                  <li>Spam</li>
                  <li>Unauthorised messaging</li>
                  <li>Poor-quality messaging</li>
                  <li>Policy violations</li>
                  <li>Recipient complaints</li>
                  <li>Purchased/scraped contact lists</li>
                  <li>Customer-generated content</li>
                  <li>Other customer-side activity</li>
                </ul>
                <p>the customer will not automatically be entitled to a refund.</p>
                <p>Bluetick may provide reasonable support where possible but cannot guarantee restoration of third-party services.</p>
              </section>

              <section id="section-9" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>9. Technical Issues Caused by Bluetick</h2>
                <p>If a customer experiences a material technical issue directly caused by Bluetick, the customer should contact support.</p>
                <p>Bluetick will first attempt to:</p>
                <ol className={styles.orderedList}>
                  <li>Identify the issue</li>
                  <li>Restore functionality</li>
                  <li>Provide technical assistance</li>
                  <li>Offer an appropriate service remedy where commercially reasonable</li>
                </ol>
                <p>The default remedy is technical support and resolution rather than an automatic refund.</p>
              </section>

              <section id="section-10" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>10. Third-Party Service Failures</h2>
                <p>Bluetick may depend on third-party services such as:</p>
                <ul className={styles.bulletList}>
                  <li>WhatsApp/Meta</li>
                  <li>WhatsApp Business Solution Providers</li>
                  <li>Cloud infrastructure</li>
                  <li>AI providers</li>
                  <li>CRM providers</li>
                  <li>Google services</li>
                  <li>Other APIs or integrations</li>
                </ul>
                <p>Refunds are not automatically available for outages, restrictions, pricing changes, policy changes or service failures caused by third-party providers.</p>
              </section>

              <section id="section-11" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>11. Unused Subscription Period</h2>
                <p>Unless otherwise agreed in writing, unused time remaining in an annual subscription is not refundable after activation.</p>
                <p>For example, cancelling an annual plan after three months does not automatically entitle the customer to a refund for the remaining nine months.</p>
              </section>

              <section id="section-12" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>12. Duplicate or Incorrect Payments</h2>
                <p>If you believe that you have been charged incorrectly or have made a duplicate payment, contact us as soon as reasonably possible.</p>
                <p>We will review the transaction and, where appropriate, correct the payment issue.</p>
              </section>

              <section id="section-13" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>13. Refund Request Process</h2>
                <p>To request a refund or report a billing issue, contact: <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                <p>Please include:</p>
                <ul className={styles.bulletList}>
                  <li>Customer/business name</li>
                  <li>Registered email/phone number</li>
                  <li>Plan purchased</li>
                  <li>Transaction/payment details</li>
                  <li>Date of payment</li>
                  <li>Reason for the request</li>
                  <li>Relevant supporting information</li>
                </ul>
                <p>We may request additional information to verify the transaction.</p>
              </section>

              <section id="section-14" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>14. Refund Processing</h2>
                <p>Where a refund is approved, the refund will generally be processed using the original payment method or another legally permitted method.</p>
                <p>Processing time may depend on the applicable payment provider or financial institution.</p>
              </section>

              <section id="section-15" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>15. Consumer Rights</h2>
                <p>Nothing in this Policy is intended to remove or restrict any consumer rights or legal protections that cannot lawfully be excluded.</p>
                <p>Where applicable law provides a mandatory refund, cancellation or remedy, those legal requirements will apply.</p>
              </section>

              <section id="section-16" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>16. Policy Changes</h2>
                <p>We may update this Refund &amp; Cancellation Policy from time to time.</p>
                <p>The latest version will be published on this page with an updated "Last Updated" date.</p>
              </section>

              <section id="section-17" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>17. Contact</h2>
                <div className={styles.contactCard}>
                  <p><strong>Bluetick Digital</strong></p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
                </div>
              </section>

              <div className={styles.relatedLinks}>
                <p className={styles.relatedLinksTitle}>Related Policies &amp; Agreements</p>
                <div className={styles.relatedLinksList}>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/acceptable-use">Acceptable Use Policy</Link>
                  <Link to="/cookies">Cookie Policy</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

// ==========================================
// 2. COOKIE POLICY
// ==========================================
export const CookiePolicyPage = () => {
  const sections = [
    { id: 'section-1', title: '1. What Are Cookies?' },
    { id: 'section-2', title: '2. Cookies We May Use' },
    { id: 'section-3', title: '3. Third-Party Cookies' },
    { id: 'section-4', title: '4. Why We Use Cookies' },
    { id: 'section-5', title: '5. Cookie Consent' },
    { id: 'section-6', title: '6. Managing Through Browser' },
    { id: 'section-7', title: '7. Do Not Track' },
    { id: 'section-8', title: '8. Changes to Cookies' },
    { id: 'section-9', title: '9. Relationship With Privacy' },
    { id: 'section-10', title: '10. Contact' }
  ];

  return (
    <>
      <SEO
        title="Cookie Policy | Bluetick Digital"
        description="Learn how Bluetick Digital uses cookies, analytics and similar technologies on its website."
      />
      <main className={styles.legalSection}>
        <div className={styles.container}>
          <Breadcrumb currentPage="Cookie Policy" />

          <header className={styles.pageHeader}>
            <div className={styles.titleRow}>
              <Cookie size={32} className={styles.headerIcon} />
              <h1 className={styles.pageTitle}>Cookie Policy</h1>
            </div>
            <div className={styles.metaInfo}>
              <span><strong>Effective Date:</strong> 19 August 2026</span>
              <span><strong>Last Updated:</strong> 19 August 2026</span>
            </div>
          </header>

          <div className={styles.twoColumnLayout}>
            <TableOfContents sections={sections} />

            <article className={styles.contentWrapper}>
              <section id="section-1" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>1. What Are Cookies?</h2>
                <p>Cookies are small text files that may be stored on your device when you visit a website.</p>
                <p>They help websites:</p>
                <ul className={styles.bulletList}>
                  <li>Function properly</li>
                  <li>Remember preferences</li>
                  <li>Understand visitor behaviour</li>
                  <li>Measure performance</li>
                  <li>Improve user experience</li>
                  <li>Measure marketing effectiveness</li>
                </ul>
                <p>Similar technologies, such as pixels, tags and scripts, may also be used for these purposes.</p>
              </section>

              <section id="section-2" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>2. Cookies We May Use</h2>
                <p>Depending on the website configuration, Bluetick may use the following categories.</p>

                <h3 className={styles.subHeading}>A. Essential Cookies</h3>
                <p>These cookies may be necessary for:</p>
                <ul className={styles.bulletList}>
                  <li>Website functionality</li>
                  <li>Security</li>
                  <li>Session management</li>
                  <li>Basic technical operations</li>
                </ul>
                <p>These cookies generally cannot be disabled through the website without affecting functionality.</p>

                <h3 className={styles.subHeading}>B. Analytics Cookies</h3>
                <p>We may use analytics technologies such as Google Analytics to understand:</p>
                <ul className={styles.bulletList}>
                  <li>Number of visitors</li>
                  <li>Traffic sources</li>
                  <li>Pages visited</li>
                  <li>User interactions</li>
                  <li>Website performance</li>
                  <li>General usage patterns</li>
                </ul>
                <p>Analytics information is primarily used in aggregated or statistical form to improve our website and services.</p>

                <h3 className={styles.subHeading}>C. Advertising and Marketing Cookies</h3>
                <p>We may use technologies such as:</p>
                <ul className={styles.bulletList}>
                  <li>Meta Pixel</li>
                  <li>Google Ads conversion tracking</li>
                  <li>Other advertising or remarketing technologies</li>
                </ul>
                <p>These technologies may help us:</p>
                <ul className={styles.bulletList}>
                  <li>Measure advertising performance</li>
                  <li>Understand conversions</li>
                  <li>Build relevant audiences</li>
                  <li>Improve advertising campaigns</li>
                  <li>Show relevant advertising where applicable</li>
                </ul>
                <p>Third-party platforms may independently process information collected through these technologies.</p>

                <h3 className={styles.subHeading}>D. Google Tag Manager</h3>
                <p>We may use Google Tag Manager to manage website tags and tracking technologies.</p>
                <p>Google Tag Manager itself may facilitate the loading of other tags configured on our website.</p>
                <p>The information collected by those tags is governed by the applicable technology and provider.</p>
              </section>

              <section id="section-3" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>3. Third-Party Cookies</h2>
                <p>Some cookies or similar technologies may be placed or controlled by third-party providers.</p>
                <p>These may include providers associated with:</p>
                <ul className={styles.bulletList}>
                  <li>Google</li>
                  <li>Meta</li>
                  <li>Analytics</li>
                  <li>Advertising</li>
                  <li>Embedded website functionality</li>
                  <li>Other technology services</li>
                </ul>
                <p>Third parties may process information according to their own privacy policies.</p>
                <p>Bluetick does not control the privacy practices of independent third-party providers.</p>
              </section>

              <section id="section-4" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>4. Why We Use Cookies</h2>
                <p>We may use cookies and similar technologies to:</p>
                <ol className={styles.orderedList}>
                  <li>Keep our website functional</li>
                  <li>Improve website performance</li>
                  <li>Understand visitor behaviour</li>
                  <li>Measure marketing campaigns</li>
                  <li>Measure advertising conversions</li>
                  <li>Improve website content</li>
                  <li>Detect security problems</li>
                  <li>Understand how visitors reach our website</li>
                  <li>Improve user experience</li>
                </ol>
              </section>

              <section id="section-5" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>5. Cookie Consent</h2>
                <p>Where applicable law requires consent for non-essential cookies or tracking technologies, we intend to provide a cookie consent mechanism.</p>
                <p>Users may be able to:</p>
                <ul className={styles.bulletList}>
                  <li>Accept cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Manage cookie preferences</li>
                </ul>
                <p>Their choices may be stored so that we can respect their preferences.</p>
              </section>

              <section id="section-6" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>6. Managing Cookies Through Your Browser</h2>
                <p>Most modern browsers allow users to:</p>
                <ul className={styles.bulletList}>
                  <li>View stored cookies</li>
                  <li>Delete cookies</li>
                  <li>Block cookies</li>
                  <li>Restrict third-party cookies</li>
                  <li>Receive notifications before cookies are stored</li>
                </ul>
                <p>Disabling certain cookies may affect website functionality or user experience.</p>
              </section>

              <section id="section-7" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>7. Do Not Track</h2>
                <p>Some browsers provide "Do Not Track" functionality.</p>
                <p>Because there is no universally accepted technical standard for responding to all Do Not Track signals, our website may not respond to every such signal.</p>
              </section>

              <section id="section-8" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>8. Changes to Cookies</h2>
                <p>We may add, remove or modify analytics, advertising or other technologies used on our website.</p>
                <p>When material changes are made, we may update this Cookie Policy.</p>
              </section>

              <section id="section-9" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>9. Relationship With Our Privacy Policy</h2>
                <p>Cookies may collect or process information that can constitute personal information under applicable law.</p>
                <p>Our use of such information is also governed by our <Link to="/privacy" className={styles.contactLink}>Privacy Policy</Link>.</p>
              </section>

              <section id="section-10" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>10. Contact</h2>
                <div className={styles.contactCard}>
                  <p><strong>Bluetick Digital</strong></p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
                </div>
              </section>

              <div className={styles.relatedLinks}>
                <p className={styles.relatedLinksTitle}>Related Policies &amp; Agreements</p>
                <div className={styles.relatedLinksList}>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/refund">Refund Policy</Link>
                  <Link to="/acceptable-use">Acceptable Use Policy</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

// ==========================================
// 3. ACCEPTABLE USE & WHATSAPP MESSAGING POLICY
// ==========================================
export const AcceptableUsePage = () => {
  const sections = [
    { id: 'section-1', title: '1. Purpose' },
    { id: 'section-2', title: '2. Customer Responsibility' },
    { id: 'section-3', title: '3. WhatsApp Opt-In' },
    { id: 'section-4', title: '4. Purchased / Scraped Lists' },
    { id: 'section-5', title: '5. Promotional & Broadcast' },
    { id: 'section-6', title: '6. Opt-Out & Preferences' },
    { id: 'section-7', title: '7. Message Quality' },
    { id: 'section-8', title: '8. Prohibited Messaging' },
    { id: 'section-9', title: '9. Restricted / High-Risk' },
    { id: 'section-10', title: '10. Sensitive Personal Info' },
    { id: 'section-11', title: '11. AI-Powered Messaging' },
    { id: 'section-12', title: '12. Human Handoff' },
    { id: 'section-13', title: '13. Business Identity' },
    { id: 'section-14', title: '14. Links & Landing Pages' },
    { id: 'section-15', title: '15. Customer Data' },
    { id: 'section-16', title: '16. WhatsApp / Meta Policies' },
    { id: 'section-17', title: '17. Third-Party Restrictions' },
    { id: 'section-18', title: '18. Monitoring & Enforcement' },
    { id: 'section-19', title: '19. Account Suspension' },
    { id: 'section-20', title: '20. WhatsApp Ban / Restriction' },
    { id: 'section-21', title: '21. Reporting Abuse' },
    { id: 'section-22', title: '22. Policy Changes' },
    { id: 'section-23', title: '23. Terms Relationship' },
    { id: 'section-24', title: '24. Contact' }
  ];

  return (
    <>
      <SEO
        title="Acceptable Use & WhatsApp Messaging Policy | Bluetick Digital"
        description="Learn the rules for responsible WhatsApp messaging, automation, AI and acceptable use of Bluetick Digital services."
      />
      <main className={styles.legalSection}>
        <div className={styles.container}>
          <Breadcrumb currentPage="Acceptable Use &amp; WhatsApp Policy" />

          <header className={styles.pageHeader}>
            <div className={styles.titleRow}>
              <AlertCircle size={32} className={styles.headerIcon} />
              <h1 className={styles.pageTitle}>Acceptable Use &amp; WhatsApp Messaging Policy</h1>
            </div>
            <div className={styles.metaInfo}>
              <span><strong>Effective Date:</strong> 19 August 2026</span>
              <span><strong>Last Updated:</strong> 19 August 2026</span>
            </div>
          </header>

          <div className={styles.twoColumnLayout}>
            <TableOfContents sections={sections} />

            <article className={styles.contentWrapper}>
              <section id="section-1" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>1. Purpose</h2>
                <p>Bluetick provides technology that enables businesses to automate customer communication and business workflows.</p>
                <p>Our services may enable:</p>
                <ul className={styles.bulletList}>
                  <li>WhatsApp messaging</li>
                  <li>Broadcasts</li>
                  <li>Automated replies</li>
                  <li>AI agents</li>
                  <li>Lead qualification</li>
                  <li>Follow-ups</li>
                  <li>Appointment booking</li>
                  <li>CRM integrations</li>
                  <li>Customer support automation</li>
                  <li>Business workflow automation</li>
                </ul>
                <p>The technology must be used responsibly and lawfully.</p>
              </section>

              <section id="section-2" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>2. Customer Responsibility</h2>
                <p>The customer is responsible for:</p>
                <ul className={styles.bulletList}>
                  <li>Its message content</li>
                  <li>Its recipient lists</li>
                  <li>Obtaining required permissions</li>
                  <li>Managing customer relationships</li>
                  <li>Complying with applicable laws</li>
                  <li>Complying with WhatsApp/Meta policies</li>
                  <li>Responding to opt-out requests</li>
                  <li>Maintaining accurate business information</li>
                </ul>
                <p>Bluetick provides technology and does not become responsible for the customer's underlying marketing practices.</p>
              </section>

              <section id="section-3" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>3. WhatsApp Opt-In</h2>
                <p>Customers must obtain appropriate permission or opt-in before sending WhatsApp communications where required by applicable law or WhatsApp/Meta policies.</p>
                <p>Customers should clearly communicate:</p>
                <ul className={styles.bulletList}>
                  <li>Who is sending the message</li>
                  <li>Why the recipient is being contacted</li>
                  <li>What type of communication may be received</li>
                  <li>How the recipient can stop receiving communications where applicable</li>
                </ul>
                <p>Customers must not represent that a recipient has consented when the customer has no reasonable basis to make that representation.</p>
              </section>

              <section id="section-4" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>4. Purchased and Scraped Lists</h2>
                <p>Purchased, scraped or unauthorised contact lists are prohibited.</p>
                <p>Customers must not upload or use contact lists obtained through:</p>
                <ul className={styles.bulletList}>
                  <li>Web scraping</li>
                  <li>Unauthorised data extraction</li>
                  <li>Purchased databases</li>
                  <li>Third-party lead lists without appropriate permissions</li>
                  <li>Data obtained through deceptive means</li>
                  <li>Other sources where the customer does not have the required right or permission</li>
                </ul>
                <p>Bluetick may suspend or terminate messaging activity involving such lists.</p>
              </section>

              <section id="section-5" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>5. Promotional and Broadcast Messaging</h2>
                <p>Customers may use Bluetick for promotional or broadcast messaging where permitted.</p>
                <p>Customers must ensure:</p>
                <ul className={styles.bulletList}>
                  <li>Recipients are appropriately authorised</li>
                  <li>Messages comply with WhatsApp/Meta requirements</li>
                  <li>Content is accurate and not misleading</li>
                  <li>Frequency is reasonable</li>
                  <li>Applicable opt-out requests are respected</li>
                  <li>Messaging does not create spam complaints</li>
                </ul>
              </section>

              <section id="section-6" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>6. Opt-Out and User Preferences</h2>
                <p>Customers must respect applicable requests from recipients to stop receiving marketing or other communications.</p>
                <p>Depending on the use case, customers should provide a reasonable mechanism for recipients to:</p>
                <ul className={styles.bulletList}>
                  <li>Stop promotional communications</li>
                  <li>Change communication preferences</li>
                  <li>Request human assistance where appropriate</li>
                </ul>
                <p>Failure to appropriately handle opt-out requests may result in restriction of messaging services.</p>
              </section>

              <section id="section-7" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>7. Message Quality</h2>
                <p>Customers should send messages that are:</p>
                <ul className={styles.bulletList}>
                  <li>Relevant</li>
                  <li>Expected</li>
                  <li>Accurate</li>
                  <li>Useful</li>
                  <li>Clearly associated with the business</li>
                  <li>Appropriate for the recipient</li>
                </ul>
                <p>Customers should avoid excessive messaging, repetitive messaging and communications likely to result in spam complaints.</p>
              </section>

              <section id="section-8" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>8. Prohibited Messaging</h2>
                <p>Bluetick must not be used to send:</p>
                <ul className={styles.bulletList}>
                  <li>Fraudulent messages</li>
                  <li>Phishing messages</li>
                  <li>Scam communications</li>
                  <li>Fake offers</li>
                  <li>Impersonation messages</li>
                  <li>Misleading advertisements</li>
                  <li>Harassment</li>
                  <li>Threats</li>
                  <li>Malicious links</li>
                  <li>Malware</li>
                  <li>Unauthorised financial solicitations</li>
                  <li>Messages intended to deceive recipients</li>
                  <li>Any other unlawful communication</li>
                </ul>
              </section>

              <section id="section-9" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>9. Restricted or High-Risk Content</h2>
                <p>Bluetick may restrict use cases involving products, services or activities that are:</p>
                <ul className={styles.bulletList}>
                  <li>Illegal</li>
                  <li>Highly regulated</li>
                  <li>Fraudulent</li>
                  <li>Deceptive</li>
                  <li>Prohibited by WhatsApp/Meta</li>
                  <li>Prohibited by applicable law</li>
                  <li>Likely to create significant security or consumer-protection risk</li>
                </ul>
                <p>Third-party platform policies may impose additional restrictions.</p>
              </section>

              <section id="section-10" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>10. Sensitive Personal Information</h2>
                <p>Customers must not unnecessarily use Bluetick to collect or transmit:</p>
                <ul className={styles.bulletList}>
                  <li>Passwords</li>
                  <li>OTPs</li>
                  <li>Payment-card credentials</li>
                  <li>Authentication credentials</li>
                  <li>Aadhaar information</li>
                  <li>PAN information</li>
                  <li>Health information</li>
                  <li>Other highly sensitive personal information</li>
                </ul>
              </section>

              <section id="section-11" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>11. AI-Powered Messaging</h2>
                <p>Customers may use AI-powered automation to respond to WhatsApp users.</p>
                <p>Customers acknowledge that AI-generated responses may:</p>
                <ul className={styles.bulletList}>
                  <li>Contain errors</li>
                  <li>Misunderstand user intent</li>
                  <li>Provide incomplete information</li>
                  <li>Produce inappropriate responses</li>
                </ul>
                <p>Customers are responsible for configuring AI instructions, knowledge sources, escalation rules, human handoff, approval settings, and business-specific safeguards.</p>
                <p>Where AI messages are automatically sent, the customer remains responsible for the resulting communication.</p>
              </section>

              <section id="section-12" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>12. Human Handoff</h2>
                <p>For use cases where AI may not be appropriate, customers should provide appropriate escalation or human handoff mechanisms. This is particularly important where conversations involve:</p>
                <ul className={styles.bulletList}>
                  <li>Complaints</li>
                  <li>Sensitive matters</li>
                  <li>Financial decisions</li>
                  <li>Legal issues</li>
                  <li>Medical matters</li>
                  <li>High-value transactions</li>
                  <li>Customer disputes</li>
                </ul>
              </section>

              <section id="section-13" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>13. Business Identity</h2>
                <p>Customers must not use Bluetick to impersonate another company, person, government organisation, financial institution, professional organisation, or any other entity without authorisation. Business identity and sender information should be accurate.</p>
              </section>

              <section id="section-14" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>14. Links and Landing Pages</h2>
                <p>Customers must ensure that links sent through WhatsApp lead to legitimate destinations, do not intentionally distribute malware, do not impersonate another business, do not mislead recipients, and do not facilitate illegal activities.</p>
              </section>

              <section id="section-15" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>15. Customer Data</h2>
                <p>Customers are responsible for ensuring that contact data used in their messaging campaigns was obtained lawfully. Customers must not use Bluetick as a tool to circumvent privacy requirements or collect personal data through deceptive methods.</p>
              </section>

              <section id="section-16" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>16. WhatsApp/Meta Policies</h2>
                <p>Customers must comply with all applicable WhatsApp/Meta policies and requirements, including business accounts, messaging, templates, quality ratings, opt-ins, commerce, prohibited content, business verification, and user feedback.</p>
              </section>

              <section id="section-17" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>17. Third-Party Provider Restrictions</h2>
                <p>Bluetick's WhatsApp services may depend on third-party Business Solution Provider infrastructure. Third-party providers may restrict accounts, reject templates, change technical requirements, pricing, or APIs, suspend services, or introduce new compliance rules. Bluetick cannot guarantee that third-party services will remain available or unchanged.</p>
              </section>

              <section id="section-18" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>18. Monitoring and Enforcement</h2>
                <p>Bluetick may investigate suspected misuse of its services. Where appropriate, we may warn the customer, restrict a workflow, pause messaging, suspend an account, terminate access, or require corrective action.</p>
              </section>

              <section id="section-19" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>19. Account Suspension</h2>
                <p>An account may be suspended for spam, unauthorised messaging, purchased/scraped lists, policy violations, fraud, security threats, repeated complaints, misleading communications, or material breach of Terms. Suspension does not automatically create a refund entitlement.</p>
              </section>

              <section id="section-20" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>20. WhatsApp Account Ban or Restriction</h2>
                <p>WhatsApp/Meta may independently restrict, suspend or terminate an account or number. Bluetick does not control such decisions. Where restriction results from customer-side activity, Bluetick does not guarantee restoration, replacement, refund, or number recovery.</p>
              </section>

              <section id="section-21" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>21. Reporting Abuse</h2>
                <p>If you believe a Bluetick-powered communication is abusive, fraudulent or otherwise inappropriate, you may contact: <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              </section>

              <section id="section-22" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>22. Changes to This Policy</h2>
                <p>We may update this Policy when WhatsApp/Meta policies change, laws change, our services change, or security requirements evolve. The latest version will be published on this page.</p>
              </section>

              <section id="section-23" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>23. Relationship With Terms of Service</h2>
                <p>This Policy forms part of Bluetick Digital's <Link to="/terms" className={styles.contactLink}>Terms of Service</Link>. If there is a conflict between this Policy and a specific written customer agreement, the written agreement will control to the extent of the conflict.</p>
              </section>

              <section id="section-24" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>24. Contact</h2>
                <div className={styles.contactCard}>
                  <p><strong>Bluetick Digital</strong></p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
                </div>
              </section>

              <div className={styles.relatedLinks}>
                <p className={styles.relatedLinksTitle}>Related Policies &amp; Agreements</p>
                <div className={styles.relatedLinksList}>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/refund">Refund Policy</Link>
                  <Link to="/cookies">Cookie Policy</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

// ==========================================
// 4. PRIVACY POLICY
// ==========================================
export const PrivacyPage = () => {
  const sections = [
    { id: 'section-1', title: '1. About Bluetick Digital' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. Website Forms' },
    { id: 'section-4', title: '4. Automatically Collected' },
    { id: 'section-5', title: '5. Cookies' },
    { id: 'section-6', title: '6. How We Use Information' },
    { id: 'section-7', title: '7. Customer Business Data' },
    { id: 'section-8', title: '8. WhatsApp Data' },
    { id: 'section-9', title: '9. AI-Powered Services' },
    { id: 'section-10', title: '10. AI Model Training' },
    { id: 'section-11', title: '11. Third-Party Integrations' },
    { id: 'section-12', title: '12. CRM Integrations' },
    { id: 'section-13', title: '13. Sharing Information' },
    { id: 'section-14', title: '14. Payment Information' },
    { id: 'section-15', title: '15. Data Security' },
    { id: 'section-16', title: '16. Data Retention' },
    { id: 'section-17', title: '17. Data Deletion' },
    { id: 'section-18', title: '18. Privacy Rights' },
    { id: 'section-19', title: '19. Marketing Comms' },
    { id: 'section-20', title: '20. WhatsApp Marketing' },
    { id: 'section-21', title: '21. Children' },
    { id: 'section-22', title: '22. Sensitive Information' },
    { id: 'section-23', title: '23. Third-Party Sites' },
    { id: 'section-24', title: '24. Security Incidents' },
    { id: 'section-25', title: '25. International Processing' },
    { id: 'section-26', title: '26. Changes to Policy' },
    { id: 'section-27', title: '27. Contact Us' }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Bluetick Digital"
        description="Bluetick Digital Privacy Policy. Learn how we collect, process, and protect your personal and business data across our website and automation services."
      />
      <main className={styles.legalSection}>
        <div className={styles.container}>
          <Breadcrumb currentPage="Privacy Policy" />

          <header className={styles.pageHeader}>
            <div className={styles.titleRow}>
              <ShieldCheck size={32} className={styles.headerIcon} />
              <h1 className={styles.pageTitle}>Privacy Policy</h1>
            </div>
            <div className={styles.metaInfo}>
              <span><strong>Effective Date:</strong> 19 August 2026</span>
              <span><strong>Last Updated:</strong> 19 August 2026</span>
            </div>
          </header>

          <div className={styles.twoColumnLayout}>
            <TableOfContents sections={sections} />

            <article className={styles.contentWrapper}>
              <p className={styles.introParagraph}>
                Bluetick Digital (“Bluetick Digital”, “Bluetick”, “we”, “us” or “our”) is a proprietorship/business owned by <strong>Kheerendra Nayak</strong> and provides business technology, WhatsApp automation, AI automation and related digital services.
              </p>
              <p>
                We respect your privacy and are committed to handling personal information responsibly.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, process, disclose and protect information when you visit <strong>bluetickdigital.in</strong>, contact us, request a demo, purchase our services, or use our products and services.
              </p>
              <p>
                By using our website or services, you acknowledge this Privacy Policy.
              </p>

              <section id="section-1" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>1. About Bluetick Digital</h2>
                <p>Bluetick Digital provides technology and business automation solutions, which may include:</p>
                <ul className={styles.bulletList}>
                  <li>WhatsApp Business API services;</li>
                  <li>WhatsApp automation;</li>
                  <li>AI-powered agents and chatbots;</li>
                  <li>Automated replies;</li>
                  <li>Lead qualification;</li>
                  <li>Automated follow-ups;</li>
                  <li>Appointment booking;</li>
                  <li>CRM integrations;</li>
                  <li>Business workflow automation;</li>
                  <li>Broadcast and messaging functionality;</li>
                  <li>Website and digital services;</li>
                  <li>Related consulting, implementation and support.</li>
                </ul>
                <div className={styles.contactCard}>
                  <p><strong>Business:</strong> Bluetick Digital</p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Address:</strong> Our business address as registered under the applicable MSME/Udyam registration.</p>
                </div>
              </section>

              <section id="section-2" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>2. Information We Collect</h2>
                <p>Depending on how you interact with Bluetick, we may collect information including:</p>
                <h3 className={styles.subHeading}>Information you provide directly</h3>
                <ul className={styles.bulletList}>
                  <li>Name;</li>
                  <li>Phone number;</li>
                  <li>WhatsApp number;</li>
                  <li>Email address;</li>
                  <li>Company/business name;</li>
                  <li>Website address;</li>
                  <li>Business type or industry;</li>
                  <li>Business requirements;</li>
                  <li>Monthly lead information;</li>
                  <li>Budget or service requirements;</li>
                  <li>Messages and enquiries;</li>
                  <li>Information submitted through contact, demo, pricing or audit forms;</li>
                  <li>Information provided during customer onboarding;</li>
                  <li>Information required to configure our services.</li>
                </ul>
                <p>You should only provide information that is reasonably necessary for the service or enquiry.</p>
              </section>

              <section id="section-3" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>3. Website Forms</h2>
                <p>Our website may provide forms or contact mechanisms including:</p>
                <ul className={styles.bulletList}>
                  <li>Contact Us;</li>
                  <li>Book a Demo;</li>
                  <li>Pricing enquiries;</li>
                  <li>Free website audit requests;</li>
                  <li>WhatsApp enquiries;</li>
                  <li>Other business enquiries.</li>
                </ul>
                <p>
                  Information submitted through these mechanisms may be processed and stored in our business systems, including our database infrastructure, for purposes such as responding to enquiries, managing leads, providing services and maintaining business records.
                </p>
              </section>

              <section id="section-4" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>4. Information Collected Automatically</h2>
                <p>When you visit our website, certain information may be collected automatically through cookies, analytics and similar technologies.</p>
                <p>Depending on the tools enabled on our website, this may include:</p>
                <ul className={styles.bulletList}>
                  <li>IP address;</li>
                  <li>Browser type;</li>
                  <li>Device type;</li>
                  <li>Operating system;</li>
                  <li>Pages viewed;</li>
                  <li>Referring website;</li>
                  <li>Approximate geographic information;</li>
                  <li>Date and time of visits;</li>
                  <li>Website interaction information;</li>
                  <li>Marketing attribution information;</li>
                  <li>Performance and diagnostic information.</li>
                </ul>
                <p>We may use analytics and marketing technologies such as:</p>
                <ul className={styles.bulletList}>
                  <li>Google Analytics;</li>
                  <li>Google Tag Manager;</li>
                  <li>Meta Pixel;</li>
                  <li>Google Ads conversion tracking;</li>
                  <li>Other analytics or advertising technologies that may be enabled from time to time.</li>
                </ul>
              </section>

              <section id="section-5" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>5. Cookies</h2>
                <p>We may use cookies and similar technologies to:</p>
                <ul className={styles.bulletList}>
                  <li>Operate the website;</li>
                  <li>Remember preferences;</li>
                  <li>Measure website performance;</li>
                  <li>Understand visitor behaviour;</li>
                  <li>Improve user experience;</li>
                  <li>Analyse marketing performance;</li>
                  <li>Support advertising and remarketing;</li>
                  <li>Detect security or technical issues.</li>
                </ul>
                <p>We intend to provide a cookie consent mechanism where required by applicable law.</p>
                <p>You may also be able to control cookies through your browser settings. Some website functionality may not operate properly if certain cookies are disabled. Learn more in our <Link to="/cookies" className={styles.contactLink}>Cookie Policy</Link>.</p>
              </section>

              <section id="section-6" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>6. How We Use Information</h2>
                <p>We may use information for legitimate business and service-related purposes, including:</p>
                <ol className={styles.orderedList}>
                  <li>Responding to enquiries;</li>
                  <li>Contacting prospective customers;</li>
                  <li>Scheduling demonstrations;</li>
                  <li>Providing quotations and proposals;</li>
                  <li>Onboarding customers;</li>
                  <li>Configuring services;</li>
                  <li>Providing customer support;</li>
                  <li>Operating WhatsApp/API services;</li>
                  <li>Managing subscriptions and accounts;</li>
                  <li>Improving website performance;</li>
                  <li>Measuring marketing campaigns;</li>
                  <li>Preventing fraud, abuse and security incidents;</li>
                  <li>Maintaining business records;</li>
                  <li>Complying with applicable laws;</li>
                  <li>Enforcing contractual rights;</li>
                  <li>Protecting our business, customers and systems.</li>
                </ol>
              </section>

              <section id="section-7" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>7. Customer Business Data</h2>
                <p>
                  When a business customer uses Bluetick services, the customer may provide or connect information relating to its own customers, leads, prospects or business operations.
                </p>
                <p>The customer generally remains responsible for its business/customer data.</p>
                <p>
                  Bluetick processes such information only to the extent reasonably necessary to provide the services requested by the customer and to perform legitimate service, security and operational functions.
                </p>
              </section>

              <section id="section-8" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>8. WhatsApp Data</h2>
                <p>
                  Bluetick provides WhatsApp Business API and automation services through third-party WhatsApp/BSP infrastructure.
                </p>
                <p>
                  <strong>Bluetick does not permanently store WhatsApp conversation history on its own servers/database as part of the standard service</strong>, unless a particular service or written agreement expressly states otherwise.
                </p>
              </section>

              <section id="section-9" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>9. AI-Powered Services</h2>
                <p>Bluetick may provide AI-powered features (automated replies, lead qualification, follow-ups, appointment booking). Customers remain responsible for reviewing and configuring AI workflows appropriately for their business requirements.</p>
              </section>

              <section id="section-10" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>10. AI Model Training</h2>
                <p><strong>Bluetick does not intentionally use customer business data to train general-purpose AI models.</strong> We do not sell customer business data as a commercial data product.</p>
              </section>

              <section id="section-11" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>11. Third-Party Services and Integrations</h2>
                <p>Our services may interact with third-party platforms (WhatsApp/Meta, BSPs, cloud databases, AI providers, CRMs, Google services). Third-party providers independently process information under their own privacy policies.</p>
              </section>

              <section id="section-12" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>12. CRM Integrations</h2>
                <p>Customers may connect third-party CRM systems or business tools to Bluetick where supported, and remain responsible for authorising the connection and complying with CRM provider terms.</p>
              </section>

              <section id="section-13" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>13. Sharing of Information</h2>
                <p>We may share information with hosting, infrastructure, WhatsApp BSP, AI, CRM, payment, security and professional service providers solely to provide requested services. <strong>We do not sell personal data.</strong></p>
              </section>

              <section id="section-14" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>14. Payment Information</h2>
                <p>Bluetick does not intentionally store customers' card or payment credentials on its own servers. Payment information is processed directly by applicable third-party payment providers.</p>
              </section>

              <section id="section-15" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>15. Data Security</h2>
                <p>We take reasonable technical and organisational measures designed to protect information against unauthorised access, disclosure, loss, misuse, alteration, or destruction.</p>
              </section>

              <section id="section-16" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>16. Data Retention</h2>
                <p>We retain information only for as long as reasonably necessary for the purposes for which it was collected, to provide services, maintain business records, comply with legal obligations, and resolve disputes.</p>
              </section>

              <section id="section-17" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>17. Data Deletion</h2>
                <p>Where applicable, you may request deletion of personal information by contacting us at <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a>.</p>
              </section>

              <section id="section-18" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>18. Privacy Rights</h2>
                <p>Subject to applicable law, individuals may have rights to request information about processing, correction, deletion, consent withdrawal, or grievance redressal by emailing <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a>.</p>
              </section>

              <section id="section-19" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>19. Marketing Communications</h2>
                <p>We may communicate regarding enquiries, services, and transactions. You may request to stop promotional communications at any time.</p>
              </section>

              <section id="section-20" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>20. WhatsApp Marketing and Customer Responsibility</h2>
                <p>Customers using Bluetick for WhatsApp marketing are responsible for obtaining required opt-ins, respecting opt-outs, and complying with WhatsApp/Meta messaging policies.</p>
              </section>

              <section id="section-21" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>21. Children</h2>
                <p>Bluetick primarily provides business-oriented services and does not intentionally collect personal information from children.</p>
              </section>

              <section id="section-22" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>22. Sensitive Personal Information</h2>
                <p>Customers should not submit unnecessary sensitive personal information (passwords, OTPs, card credentials, Aadhaar, PAN, health records) through Bluetick systems.</p>
              </section>

              <section id="section-23" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>23. Third-Party Websites</h2>
                <p>Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or content.</p>
              </section>

              <section id="section-24" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>24. Security Incidents</h2>
                <p>If we become aware of a security incident involving personal information, we will assess the incident and take reasonable steps required under applicable law.</p>
              </section>

              <section id="section-25" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>25. International Processing</h2>
                <p>Some third-party technology providers may process information outside India subject to applicable law and appropriate safeguards.</p>
              </section>

              <section id="section-26" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>26. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. The latest version will be published on this page with the updated date.</p>
              </section>

              <section id="section-27" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>27. Contact Us</h2>
                <div className={styles.contactCard}>
                  <p><strong>Bluetick Digital</strong></p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
                  <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
                </div>
              </section>

              <div className={styles.relatedLinks}>
                <p className={styles.relatedLinksTitle}>Related Policies &amp; Agreements</p>
                <div className={styles.relatedLinksList}>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/refund">Refund Policy</Link>
                  <Link to="/cookies">Cookie Policy</Link>
                  <Link to="/acceptable-use">Acceptable Use Policy</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

// ==========================================
// 5. TERMS OF SERVICE
// ==========================================
export const TermsPage = () => {
  const sections = [
    { id: 'section-1', title: '1. Our Services' },
    { id: 'section-2', title: '2. Eligibility' },
    { id: 'section-3', title: '3. Customer Account' },
    { id: 'section-4', title: '4. WhatsApp API' },
    { id: 'section-5', title: '5. Account Ownership' },
    { id: 'section-6', title: '6. Messaging Responsibilities' },
    { id: 'section-7', title: '7. Prohibited Contact Lists' },
    { id: 'section-8', title: '8. Broadcast & Promotional' },
    { id: 'section-9', title: '9. AI Services' },
    { id: 'section-10', title: '10. AI Disclaimer' },
    { id: 'section-11', title: '11. Customer Data' },
    { id: 'section-12', title: '12. Data Compliance' },
    { id: 'section-13', title: '13. Sensitive Information' },
    { id: 'section-14', title: '14. CRM Integrations' },
    { id: 'section-15', title: '15. Third-Party Services' },
    { id: 'section-16', title: '16. Pricing and Plans' },
    { id: 'section-17', title: '17. Annual Subscription' },
    { id: 'section-18', title: '18. Cancellation' },
    { id: 'section-19', title: '19. Refund Policy' },
    { id: 'section-20', title: '20. Third-Party Charges' },
    { id: 'section-21', title: '21. Support' },
    { id: 'section-22', title: '22. Service Availability' },
    { id: 'section-23', title: '23. No Guaranteed Results' },
    { id: 'section-24', title: '24. Intellectual Property' },
    { id: 'section-25', title: '25. Customer Content' },
    { id: 'section-26', title: '26. Custom Work' },
    { id: 'section-27', title: '27. Marketing & Case Studies' },
    { id: 'section-28', title: '28. Acceptable Use' },
    { id: 'section-29', title: '29. Restricted Industries' },
    { id: 'section-30', title: '30. Suspension' },
    { id: 'section-31', title: '31. WhatsApp Ban / Restriction' },
    { id: 'section-32', title: '32. Termination' },
    { id: 'section-33', title: '33. Data After Termination' },
    { id: 'section-34', title: '34. Confidentiality' },
    { id: 'section-35', title: '35. Security' },
    { id: 'section-36', title: '36. Warranty Disclaimer' },
    { id: 'section-37', title: '37. Limitation of Liability' },
    { id: 'section-38', title: '38. Indemnification' },
    { id: 'section-39', title: '39. Force Majeure' },
    { id: 'section-40', title: '40. Changes to Services' },
    { id: 'section-41', title: '41. Changes to Terms' },
    { id: 'section-42', title: '42. Governing Law' },
    { id: 'section-43', title: '43. Dispute Resolution' },
    { id: 'section-44', title: '44. Severability' },
    { id: 'section-45', title: '45. No Waiver' },
    { id: 'section-46', title: '46. Entire Agreement' },
    { id: 'section-47', title: '47. Contact' }
  ];

  return (
    <>
      <SEO
        title="Terms of Service | Bluetick Digital"
        description="Terms of Service governing access to and use of Bluetick Digital's website, software, WhatsApp Business API services, AI automation, and digital platforms."
      />
      <main className={styles.legalSection}>
        <div className={styles.container}>
          <Breadcrumb currentPage="Terms of Service" />

          <header className={styles.pageHeader}>
            <div className={styles.titleRow}>
              <FileText size={32} className={styles.headerIcon} />
              <h1 className={styles.pageTitle}>Terms of Service</h1>
            </div>
            <div className={styles.metaInfo}>
              <span><strong>Effective Date:</strong> 19 August 2026</span>
              <span><strong>Last Updated:</strong> 19 August 2026</span>
            </div>
          </header>

          <div className={styles.twoColumnLayout}>
            <TableOfContents sections={sections} />

            <article className={styles.contentWrapper}>
              <p className={styles.introParagraph}>
                These Terms of Service (“Terms”) govern your access to and use of the website, software, WhatsApp/API services, AI automation services and other services provided by <strong>Bluetick Digital</strong>, a proprietorship/business owned by <strong>Kheerendra Nayak</strong> (“Bluetick”, “we”, “us” or “our”).
              </p>
              <p>
                By accessing our website, requesting a demo, purchasing a service, creating an account, connecting a WhatsApp number, or using any Bluetick service, you agree to these Terms.
              </p>
              <p>
                If you are using Bluetick on behalf of a business or organisation, you confirm that you have authority to bind that organisation to these Terms.
              </p>

              <section id="section-1" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>1. Our Services</h2>
                <p>Bluetick Digital provides business technology and automation services that may include:</p>
                <ul className={styles.bulletList}>
                  <li>WhatsApp Business API;</li>
                  <li>WhatsApp automation;</li>
                  <li>AI-powered agents;</li>
                  <li>AI chatbots;</li>
                  <li>Automated WhatsApp replies;</li>
                  <li>Lead qualification;</li>
                  <li>Automated follow-ups;</li>
                  <li>Appointment booking;</li>
                  <li>CRM integrations;</li>
                  <li>Business workflow automation;</li>
                  <li>Broadcast messaging;</li>
                  <li>Smart forms;</li>
                  <li>Website and digital services;</li>
                  <li>Related implementation and support.</li>
                </ul>
              </section>

              <section id="section-2" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>2. Eligibility</h2>
                <p>You must have the legal capacity to enter into a binding agreement. You must not use our services for unlawful, fraudulent, abusive or prohibited purposes.</p>
              </section>

              <section id="section-3" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>3. Customer Account</h2>
                <p>Where an account is required, you are responsible for providing accurate info, protecting credentials, and notifying us if compromised.</p>
              </section>

              <section id="section-4" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>4. WhatsApp Business API</h2>
                <p>WhatsApp-related services depend on WhatsApp/Meta and applicable BSP infrastructure, subject to Meta policies, template rules, and messaging limits.</p>
              </section>

              <section id="section-5" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>5. WhatsApp Account Ownership and Infrastructure</h2>
                <p>Customers authorise Bluetick to perform the technical configuration necessary to provide the purchased service.</p>
              </section>

              <section id="section-6" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>6. WhatsApp Messaging Responsibilities</h2>
                <p>Customers must obtain required opt-ins, respect opt-outs, follow marketing laws, and avoid deceptive messaging.</p>
              </section>

              <section id="section-7" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>7. Prohibited Contact Lists</h2>
                <p>Purchased, scraped or unauthorised contact lists are strictly prohibited.</p>
              </section>

              <section id="section-8" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>8. Broadcast and Promotional Messaging</h2>
                <p>Customers are responsible for message content, recipient selection, frequency, consent, and regulatory compliance.</p>
              </section>

              <section id="section-9" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>9. AI Services</h2>
                <p>Bluetick may provide AI-powered automated replies, qualification, and follow-ups. Customers are responsible for configuring AI appropriately.</p>
              </section>

              <section id="section-10" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>10. AI Disclaimer</h2>
                <p>AI output may be inaccurate or incomplete. Customers must not rely exclusively on AI output for professional judgement.</p>
              </section>

              <section id="section-11" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>11. Customer Data</h2>
                <p>Customers retain ownership of their business data. <strong>Bluetick does not sell customer data nor train general AI models on customer data.</strong></p>
              </section>

              <section id="section-12" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>12. Customer Data Compliance</h2>
                <p>Customers are responsible for ensuring that information supplied to Bluetick has been collected and provided lawfully.</p>
              </section>

              <section id="section-13" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>13. Sensitive Information</h2>
                <p>Customers should not use Bluetick to unnecessarily process passwords, OTPs, card credentials, Aadhaar, PAN, or health records.</p>
              </section>

              <section id="section-14" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>14. CRM and Third-Party Integrations</h2>
                <p>Customers authorise Bluetick to interact with connected third-party CRM systems as requested.</p>
              </section>

              <section id="section-15" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>15. Third-Party Services</h2>
                <p>Bluetick is not responsible for failures caused solely by external third-party service providers.</p>
              </section>

              <section id="section-16" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>16. Pricing and Plans</h2>
                <p>Our current annual plans may include:</p>
                <ul className={styles.bulletList}>
                  <li><strong>Growth:</strong> ₹11,999/year</li>
                  <li><strong>AI Growth Engine:</strong> ₹14,999/year</li>
                  <li><strong>Power Combo:</strong> ₹25,000/year</li>
                </ul>
              </section>

              <section id="section-17" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>17. Annual Subscription</h2>
                <p>Subscriptions are annual and do not automatically renew.</p>
              </section>

              <section id="section-18" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>18. Cancellation</h2>
                <p>Cancellation results in immediate cessation of service access and does not automatically create a right to a refund.</p>
              </section>

              <section id="section-19" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>19. Refund Policy</h2>
                <p>All subscription, setup and activation fees are non-refundable once payment or activation has occurred. Review our full <Link to="/refund" className={styles.contactLink}>Refund &amp; Cancellation Policy</Link>.</p>
              </section>

              <section id="section-20" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>20. Third-Party Charges</h2>
                <p>Third-party fees (Meta messaging charges, CRM APIs) are separate unless explicitly included.</p>
              </section>

              <section id="section-21" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>21. Support</h2>
                <p>Standard support hours: <strong>10:00 AM to 6:00 PM on working days</strong> via WhatsApp and ticket channels.</p>
              </section>

              <section id="section-22" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>22. Service Availability</h2>
                <p>Services may be temporarily unavailable due to maintenance, network, or platform outages.</p>
              </section>

              <section id="section-23" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>23. No Guaranteed Business Results</h2>
                <p>We provide automation infrastructure; business results depend on customer offers, market factors, and execution.</p>
              </section>

              <section id="section-24" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>24. Intellectual Property</h2>
                <p>Bluetick retains all rights in its underlying platforms, code, frameworks, templates, and proprietary know-how.</p>
              </section>

              <section id="section-25" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>25. Customer Content</h2>
                <p>Customers retain ownership of their business branding, content, and customer data.</p>
              </section>

              <section id="section-26" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>26. Custom Work</h2>
                <p>Customer data remains customer property; reusable components remain Bluetick property.</p>
              </section>

              <section id="section-27" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>27. Customer Marketing and Case Studies</h2>
                <p>Bluetick will not publicly use a customer logo or case study without explicit permission.</p>
              </section>

              <section id="section-28" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>28. Acceptable Use</h2>
                <p>You must use services lawfully. Review our full <Link to="/acceptable-use" className={styles.contactLink}>Acceptable Use Policy</Link>.</p>
              </section>

              <section id="section-29" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>29. Restricted Industries and Activities</h2>
                <p>Bluetick may restrict or refuse service for illegal, highly regulated, or prohibited use cases.</p>
              </section>

              <section id="section-30" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>30. Suspension</h2>
                <p>Accounts may be suspended for non-payment, spam, policy violations, or security risks.</p>
              </section>

              <section id="section-31" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>31. WhatsApp Suspension or Ban</h2>
                <p>WhatsApp/Meta decisions are outside our control; customer violations do not entitle refunds.</p>
              </section>

              <section id="section-32" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>32. Termination</h2>
                <p>Either party may terminate subject to commercial terms.</p>
              </section>

              <section id="section-33" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>33. Data After Termination</h2>
                <p>WhatsApp conversation history is not permanently stored on Bluetick servers as standard service.</p>
              </section>

              <section id="section-34" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>34. Confidentiality</h2>
                <p>Both parties agree to protect confidential information with reasonable care.</p>
              </section>

              <section id="section-35" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>35. Security</h2>
                <p>Bluetick employs reasonable security measures; customers are responsible for securing their account credentials.</p>
              </section>

              <section id="section-36" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>36. Disclaimer of Warranties</h2>
                <p>Services are provided on an "as available" basis without express or implied warranties beyond mandatory law.</p>
              </section>

              <section id="section-37" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>37. Limitation of Liability</h2>
                <p>Aggregate liability is capped at fees paid by the customer during the <strong>12 months preceding the claim</strong>.</p>
              </section>

              <section id="section-38" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>38. Indemnification</h2>
                <p>Customers indemnify Bluetick against claims arising from customer messaging activities, data, or Terms breaches.</p>
              </section>

              <section id="section-39" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>39. Force Majeure</h2>
                <p>Bluetick is not liable for failures caused by circumstances beyond reasonable control.</p>
              </section>

              <section id="section-40" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>40. Changes to Services</h2>
                <p>Features may be improved, modified, or discontinued with commercially reasonable notice.</p>
              </section>

              <section id="section-41" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>41. Changes to These Terms</h2>
                <p>Updated terms will be posted with revised "Last Updated" dates.</p>
              </section>

              <section id="section-42" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>42. Governing Law</h2>
                <p>Governed by the laws of India; jurisdiction in <strong>Raipur, Chhattisgarh, India</strong>.</p>
              </section>

              <section id="section-43" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>43. Dispute Resolution</h2>
                <p>Good-faith negotiation with a <strong>30-day resolution period</strong> prior to legal proceedings.</p>
              </section>

              <section id="section-44" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>44. Severability</h2>
                <p>Invalid provisions will be severed without affecting remaining terms.</p>
              </section>

              <section id="section-45" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>45. No Waiver</h2>
                <p>Failure to enforce a provision does not waive future enforcement rights.</p>
              </section>

              <section id="section-46" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>46. Entire Agreement</h2>
                <p>These Terms and applicable order agreements constitute the entire agreement.</p>
              </section>

              <section id="section-47" className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>47. Contact</h2>
                <div className={styles.contactCard}>
                  <p><strong>Bluetick Digital</strong></p>
                  <p><strong>Owner:</strong> Kheerendra Nayak</p>
                  <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
                  <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
                  <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
                </div>
              </section>

              <div className={styles.relatedLinks}>
                <p className={styles.relatedLinksTitle}>Related Policies &amp; Agreements</p>
                <div className={styles.relatedLinksList}>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/refund">Refund Policy</Link>
                  <Link to="/acceptable-use">Acceptable Use Policy</Link>
                  <Link to="/cookies">Cookie Policy</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};
