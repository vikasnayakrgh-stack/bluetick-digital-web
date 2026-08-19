import React from 'react';
import SEO from '../Common/SEO';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './LegalPages.module.css';

export const PrivacyPage = () => (
  <>
    <SEO
      title="Privacy Policy | Bluetick Digital"
      description="Bluetick Digital's Privacy Policy explains what information we collect, how we use it, how we protect personal data, and your rights."
    />
    <section className={styles.legalSection}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className={styles.pageHeader}>
          <ShieldCheck size={32} className={styles.headerIcon} />
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
        </div>
        
        <div className={styles.metaInfo}>
          <span><strong>Effective Date:</strong> 19 August 2026</span> &nbsp;|&nbsp; 
          <span><strong>Last Updated:</strong> 19 August 2026</span>
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.introParagraph}>
            Bluetick Digital (“Bluetick Digital”, “Bluetick”, “we”, “us” or “our”) respects your privacy and is committed to protecting personal data handled through our website, products, services and business communications.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, when we share it, how we protect it, and the choices and rights available to you.
          </p>
          <p>
            By using <strong>https://bluetickdigital.in</strong>, contacting us, requesting a demo, purchasing our services, or using our WhatsApp/API/AI automation services, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>1. Who We Are</h2>
            <p>
              Bluetick Digital provides technology and business automation services, including WhatsApp Business API solutions, AI-powered automation, AI agents, chatbots, workflow automation, CRM integrations, lead management, broadcasts, smart forms and related digital services.
            </p>
            <div className={styles.contactCard}>
              <p><strong>Legal/Business Name:</strong> Bluetick digital</p>
              <p><strong>Registered/Business Address:</strong> Chandrakar complex, Raipura chawk, raipur</p>
              <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
            </div>
            <p>For privacy-related requests, you may contact us using the details above.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>2. Scope of This Privacy Policy</h2>
            <p>This Privacy Policy applies to information collected through:</p>
            <ul className={styles.bulletList}>
              <li>Our website and web pages;</li>
              <li>Contact and demo forms;</li>
              <li>WhatsApp conversations with Bluetick;</li>
              <li>Sales and customer-support communications;</li>
              <li>Our software, dashboards and automation services;</li>
              <li>AI-powered services and agents;</li>
              <li>Customer onboarding;</li>
              <li>Business integrations and connected applications;</li>
              <li>Other services that expressly link to this Privacy Policy.</li>
            </ul>
            <p>This Policy does not automatically apply to third-party websites, platforms or services that we do not control.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>3. Information We Collect</h2>
            <p>Depending on how you interact with us, we may collect the following categories of information.</p>
            <h3 className={styles.subHeading}>3.1 Information You Provide</h3>
            <p>This may include:</p>
            <ul className={styles.bulletList}>
              <li>Name;</li>
              <li>Business name;</li>
              <li>Email address;</li>
              <li>Phone or WhatsApp number;</li>
              <li>Business type or industry;</li>
              <li>Company information;</li>
              <li>Information submitted through demo or enquiry forms;</li>
              <li>Information provided during onboarding;</li>
              <li>Support requests;</li>
              <li>Communications with our team;</li>
              <li>Information required to provide requested services;</li>
              <li>Billing and transaction-related information.</li>
            </ul>
            <p>Please do not submit information that is unnecessary for the requested service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>4. Information Processed Through Customer Services</h2>
            <p>
              When a business customer uses Bluetick's automation services, the customer may choose to connect or process information relating to its own customers, leads, employees, prospects or other individuals.
            </p>
            <p>This may include:</p>
            <ul className={styles.bulletList}>
              <li>Names;</li>
              <li>Phone numbers;</li>
              <li>WhatsApp identifiers;</li>
              <li>Customer messages;</li>
              <li>Enquiry details;</li>
              <li>Lead information;</li>
              <li>Appointment information;</li>
              <li>Purchase or order information;</li>
              <li>CRM records;</li>
              <li>Conversation history;</li>
              <li>Information provided by the customer to configure an AI agent or workflow.</li>
            </ul>
            <p>
              Where Bluetick processes such information on behalf of a business customer, the business customer is generally responsible for determining the purposes for which that information is collected and used and for ensuring that it has the necessary permissions, notices, consents or other lawful basis required by applicable law.
            </p>
            <p>
              Bluetick processes such information primarily to provide, maintain, secure and improve the services requested by the customer and in accordance with the applicable customer agreement.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>5. Information Collected Automatically</h2>
            <p>When you visit our website, certain technical information may be collected automatically, depending on the technologies enabled on the website.</p>
            <p>This may include:</p>
            <ul className={styles.bulletList}>
              <li>IP address;</li>
              <li>Browser type;</li>
              <li>Device type;</li>
              <li>Operating system;</li>
              <li>Pages visited;</li>
              <li>Approximate location derived from technical information;</li>
              <li>Referring pages;</li>
              <li>Date and time of access;</li>
              <li>Website interaction information;</li>
              <li>Performance and diagnostic information.</li>
            </ul>
            <p>We may use this information for security, analytics, troubleshooting, performance improvement and website optimisation.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>6. Cookies and Similar Technologies</h2>
            <p>We may use cookies and similar technologies to:</p>
            <ul className={styles.bulletList}>
              <li>Keep the website functioning;</li>
              <li>Remember preferences;</li>
              <li>Understand website usage;</li>
              <li>Measure marketing and website performance;</li>
              <li>Improve user experience;</li>
              <li>Detect security issues;</li>
              <li>Support analytics and advertising activities where enabled.</li>
            </ul>
            <p>
              Third-party technologies, including analytics, advertising or embedded services, may independently collect information according to their own privacy policies.
            </p>
            <p>Where applicable law requires consent for particular cookies or tracking technologies, we will seek the appropriate consent.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>7. How We Use Information</h2>
            <p>We may use information for purposes including:</p>
            <ol className={styles.orderedList}>
              <li>Responding to enquiries;</li>
              <li>Scheduling and conducting demonstrations;</li>
              <li>Providing requested services;</li>
              <li>Creating and managing customer accounts;</li>
              <li>Configuring WhatsApp/API and automation services;</li>
              <li>Operating AI agents, chatbots and workflows;</li>
              <li>Providing customer support;</li>
              <li>Processing payments and subscriptions;</li>
              <li>Sending service-related communications;</li>
              <li>Sending marketing communications where permitted;</li>
              <li>Improving products and services;</li>
              <li>Monitoring service performance;</li>
              <li>Detecting fraud, abuse and security threats;</li>
              <li>Maintaining system security;</li>
              <li>Complying with applicable laws and lawful requests;</li>
              <li>Enforcing our agreements; and</li>
              <li>Protecting our rights, users and systems.</li>
            </ol>
            <p><strong>We do not sell your personal information as a commercial data product.</strong></p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>8. AI-Powered Services</h2>
            <p>Bluetick may use artificial intelligence and machine-learning technologies to provide features such as:</p>
            <ul className={styles.bulletList}>
              <li>AI-powered WhatsApp replies;</li>
              <li>Lead qualification;</li>
              <li>Intent detection;</li>
              <li>Automated follow-ups;</li>
              <li>Customer support;</li>
              <li>Information retrieval;</li>
              <li>Business workflow automation;</li>
              <li>AI-assisted content or responses.</li>
            </ul>
            <p>AI-generated responses may not always be accurate, complete, current or appropriate for every situation.</p>
            <p>Customers are responsible for reviewing and configuring AI workflows appropriately for their business.</p>
            <p>Bluetick does not represent that AI-generated content will always be error-free or suitable for making legal, financial, medical or other high-impact decisions.</p>
            <p>Unless expressly agreed otherwise in writing, customer data is not intentionally used by Bluetick to train general-purpose AI models.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>9. WhatsApp, Meta and Other Third-Party Platforms</h2>
            <p>
              Our services may integrate with third-party platforms including WhatsApp, Meta services, CRM systems, payment providers, Google services, calendar platforms and other software selected by the customer.
            </p>
            <p>These third-party platforms may independently collect, process, store or otherwise handle information under their own terms and privacy policies.</p>
            <p>For example, use of Meta or WhatsApp services remains subject to the applicable Meta/WhatsApp terms and policies.</p>
            <p>Customers are responsible for complying with applicable third-party platform policies when using our services.</p>
            <p>Bluetick does not control the availability, policy decisions, account restrictions, template approvals, messaging limits or enforcement actions of third-party platforms.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>10. Sharing of Information</h2>
            <p>We may share information with:</p>
            <ul className={styles.bulletList}>
              <li>Technology and hosting providers;</li>
              <li>Cloud infrastructure providers;</li>
              <li>AI/model providers;</li>
              <li>WhatsApp/Meta and applicable messaging providers;</li>
              <li>CRM and business software providers;</li>
              <li>Payment processors;</li>
              <li>Analytics and security providers;</li>
              <li>Professional advisers;</li>
              <li>Government authorities or law-enforcement agencies where legally required;</li>
              <li>Service providers acting on our instructions.</li>
            </ul>
            <p>We require appropriate service providers to handle information only for legitimate business purposes and, where applicable, under contractual confidentiality and security obligations.</p>
            <p>We do not sell customer business data as a standalone commercial product.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>11. Business Customer Data</h2>
            <p>If you use Bluetick to process information belonging to your customers or leads:</p>
            <ul className={styles.bulletList}>
              <li>You remain responsible for the information you provide or connect to our services;</li>
              <li>You must have the necessary rights, permissions, notices and lawful basis to collect and process such information;</li>
              <li>You must comply with applicable privacy, marketing, messaging and consumer-protection laws;</li>
              <li>You must not use Bluetick to send unlawful, deceptive, abusive or unsolicited communications;</li>
              <li>You must respect opt-out and preference requests;</li>
              <li>You must ensure that your use of WhatsApp and other third-party platforms complies with their policies.</li>
            </ul>
            <p>Bluetick may suspend or restrict workflows that present material legal, security, abuse or platform-policy risks.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>12. Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for the purposes described in this Privacy Policy, to provide services, comply with legal obligations, resolve disputes, enforce agreements and protect our legitimate interests.
            </p>
            <p>Retention periods may differ depending on:</p>
            <ul className={styles.bulletList}>
              <li>The type of information;</li>
              <li>The purpose for which it was collected;</li>
              <li>The customer's contractual requirements;</li>
              <li>Legal or regulatory requirements;</li>
              <li>Security and fraud-prevention requirements.</li>
            </ul>
            <p>When information is no longer required, we may delete, anonymise or securely dispose of it, subject to applicable legal and contractual requirements.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>13. Data Security</h2>
            <p>We take reasonable technical and organisational measures designed to protect information against unauthorised access, alteration, disclosure, loss, misuse or destruction.</p>
            <p>Security measures may include:</p>
            <ul className={styles.bulletList}>
              <li>Access controls;</li>
              <li>Authentication mechanisms;</li>
              <li>Encryption where appropriate;</li>
              <li>Secure hosting practices;</li>
              <li>Monitoring and logging;</li>
              <li>Backup and recovery controls;</li>
              <li>Restricted employee/service-provider access;</li>
              <li>Security reviews and maintenance.</li>
            </ul>
            <p>However, no internet-based system can be guaranteed to be completely secure.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>14. International Processing</h2>
            <p>Some technology and service providers used by Bluetick may process information outside India.</p>
            <p>Where personal data is transferred or processed across jurisdictions, we seek to do so in accordance with applicable law and appropriate contractual, technical and organisational safeguards.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>15. Your Privacy Rights</h2>
            <p>Subject to applicable law and its commencement/implementation, you may have rights regarding your personal data, which may include:</p>
            <ul className={styles.bulletList}>
              <li>Requesting access to information;</li>
              <li>Requesting correction of inaccurate information;</li>
              <li>Requesting deletion where applicable;</li>
              <li>Withdrawing consent where processing is based on consent;</li>
              <li>Requesting information about processing;</li>
              <li>Raising a grievance;</li>
              <li>Exercising other rights available under applicable law.</li>
            </ul>
            <p>Requests may be submitted using the contact details provided in this Privacy Policy. We may need to verify your identity before processing certain requests.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>16. Marketing Communications</h2>
            <p>We may send service-related communications that are necessary for providing our services.</p>
            <p>Where permitted and where you have provided the required permission or other lawful basis, we may also send promotional communications.</p>
            <p>You may request to stop receiving promotional communications by using the available unsubscribe mechanism or contacting us. Service and transactional communications may continue where necessary.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>17. Children's Privacy</h2>
            <p>Our services are intended primarily for businesses and adults.</p>
            <p>We do not knowingly request or intentionally collect personal information directly from children for independent use of our services.</p>
            <p>If you believe that a child has provided personal information to us inappropriately, please contact us so that we can investigate and take appropriate action.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>18. Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites or services.</p>
            <p>We are not responsible for the privacy practices, security, content or policies of third-party websites. You should review the applicable third-party privacy policy before providing personal information.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>19. Data Breaches and Security Incidents</h2>
            <p>If we become aware of a security incident involving personal data, we will assess the incident and take reasonable steps required under applicable law, including notification or cooperation with relevant parties where legally required.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>20. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect:</p>
            <ul className={styles.bulletList}>
              <li>Changes to our services;</li>
              <li>Changes to technology;</li>
              <li>Changes to legal or regulatory requirements;</li>
              <li>Changes to our data practices;</li>
              <li>Security or operational improvements.</li>
            </ul>
            <p>The updated version will be published on this page with a revised “Last Updated” date.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>21. Contact and Privacy Requests</h2>
            <p>For privacy questions, data-related requests or grievances, contact:</p>
            <div className={styles.contactCard}>
              <p><strong>Bluetick Digital</strong></p>
              <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              <p><strong>Address:</strong> Chandrakar complex, Raipura chawk, raipur</p>
              <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
            </div>
            <p>Please include enough information for us to understand and respond to your request.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>22. Governing Framework</h2>
            <p>
              This Privacy Policy is intended to operate in accordance with applicable laws of India, including applicable data-protection, information-technology and consumer-protection requirements.
            </p>
            <p>Nothing in this Policy limits any rights or protections that cannot lawfully be excluded under applicable law.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export const TermsPage = () => (
  <>
    <SEO
      title="Terms of Service | Bluetick Digital"
      description="Terms of Service governing access to and use of Bluetick Digital's website, platforms, software, AI chatbots, and WhatsApp automation services."
    />
    <section className={styles.legalSection}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className={styles.pageHeader}>
          <FileText size={32} className={styles.headerIcon} />
          <h1 className={styles.pageTitle}>Terms of Service</h1>
        </div>
        
        <div className={styles.metaInfo}>
          <span><strong>Effective Date:</strong> 19 August 2026</span> &nbsp;|&nbsp; 
          <span><strong>Last Updated:</strong> 19 August 2026</span>
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.introParagraph}>
            These Terms of Service (“Terms”) govern your access to and use of the website, software, platforms, automation services and related services provided by Bluetick Digital (“Bluetick”, “we”, “us” or “our”).
          </p>
          <p>
            By accessing our website, requesting our services, creating an account, purchasing a plan, connecting a WhatsApp number, or using any Bluetick service, you agree to these Terms.
          </p>
          <p>
            If you are using the services on behalf of a company or organisation, you represent that you have authority to bind that organisation to these Terms.
          </p>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>1. About Bluetick Digital</h2>
            <p>Bluetick Digital provides technology and business automation services including:</p>
            <ul className={styles.bulletList}>
              <li>WhatsApp Business API solutions;</li>
              <li>WhatsApp automation;</li>
              <li>AI-powered chatbots and agents;</li>
              <li>AI lead qualification;</li>
              <li>Automated follow-ups;</li>
              <li>Broadcast and messaging workflows;</li>
              <li>Smart forms;</li>
              <li>CRM integrations;</li>
              <li>Google Sheets/Calendar and other integrations;</li>
              <li>Custom automation workflows;</li>
              <li>Website and digital technology services;</li>
              <li>Related consulting, implementation and support.</li>
            </ul>
            <p>Specific features depend on the plan, order, proposal or service agreement applicable to the customer.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>2. Eligibility</h2>
            <p>You must have the legal capacity to enter into a binding agreement.</p>
            <p>If you use Bluetick on behalf of a business, you confirm that you are authorised to do so.</p>
            <p>You may not use Bluetick services for unlawful, fraudulent or abusive activities.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>3. Accounts and Onboarding</h2>
            <p>You may be required to provide accurate information during onboarding.</p>
            <p>You are responsible for:</p>
            <ul className={styles.bulletList}>
              <li>Maintaining accurate account information;</li>
              <li>Protecting login credentials;</li>
              <li>Restricting unauthorised account access;</li>
              <li>Notifying us of suspected unauthorised access;</li>
              <li>Ensuring authorised team members comply with these Terms.</li>
            </ul>
            <p>Bluetick is not responsible for losses caused by credentials or access being improperly shared or compromised due to customer-side failures.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>4. WhatsApp Business API Services</h2>
            <p>WhatsApp-related services depend on third-party infrastructure, including Meta/WhatsApp and applicable business solution providers.</p>
            <p>Your use of WhatsApp services is subject to:</p>
            <ul className={styles.bulletList}>
              <li>WhatsApp/Meta policies;</li>
              <li>Applicable messaging rules;</li>
              <li>Business and commerce policies;</li>
              <li>Template requirements;</li>
              <li>Messaging limits;</li>
              <li>Quality and spam controls;</li>
              <li>Other applicable third-party policies.</li>
            </ul>
            <p>Bluetick cannot guarantee that Meta or another third-party provider will approve a business, template, message, account, phone number or particular use case.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>5. Customer Responsibilities for Messaging</h2>
            <p>You are responsible for ensuring that your messaging activities are lawful and authorised.</p>
            <p>You must not use Bluetick to:</p>
            <ul className={styles.bulletList}>
              <li>Send spam;</li>
              <li>Send deceptive messages;</li>
              <li>Impersonate another person or business;</li>
              <li>Send unlawful or fraudulent communications;</li>
              <li>Harass recipients;</li>
              <li>Circumvent platform restrictions;</li>
              <li>Use purchased, scraped or unlawfully obtained contact lists;</li>
              <li>Continue messaging recipients who have opted out where prohibited;</li>
              <li>Promote prohibited or restricted products or services;</li>
              <li>Violate WhatsApp, Meta or other platform policies.</li>
            </ul>
            <p>You are responsible for obtaining and maintaining any required customer opt-ins, permissions and notices.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>6. WhatsApp Account Restrictions and Suspension</h2>
            <p>WhatsApp/Meta may restrict, suspend, limit or disable accounts, phone numbers, templates or messaging capabilities.</p>
            <p>Such decisions may occur independently of Bluetick.</p>
            <p>Bluetick is not responsible for losses arising from third-party platform enforcement, policy changes, messaging limits, quality ratings, template rejection, account restrictions or number bans where those events are outside Bluetick's reasonable control.</p>
            <p>We may assist with troubleshooting or appeals where such support is available, but we do not guarantee restoration.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>7. AI Services</h2>
            <p>Bluetick may provide AI-powered features that generate responses, classify leads, analyse conversations or automate business processes.</p>
            <p>AI outputs may be:</p>
            <ul className={styles.bulletList}>
              <li>Inaccurate;</li>
              <li>Incomplete;</li>
              <li>Outdated;</li>
              <li>Misinterpreted;</li>
              <li>Inappropriate for a particular situation.</li>
            </ul>
            <p>You are responsible for configuring appropriate safeguards, escalation rules and human review where necessary.</p>
            <p>AI services should not be relied upon as a substitute for qualified legal, medical, financial, compliance or other professional advice.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>8. No Guaranteed Business Results</h2>
            <p>Bluetick provides technology and automation infrastructure.</p>
            <p>Unless expressly stated in a signed written agreement, we do not guarantee:</p>
            <ul className={styles.bulletList}>
              <li>A specific number of leads;</li>
              <li>A specific conversion rate;</li>
              <li>A specific revenue amount;</li>
              <li>A specific ROI;</li>
              <li>A specific response rate;</li>
              <li>A specific number of sales;</li>
              <li>A specific reduction in RTO;</li>
              <li>A specific campaign performance;</li>
              <li>Continuous availability of third-party platforms.</li>
            </ul>
            <p>Business results depend on numerous factors outside Bluetick's control, including offer quality, audience, pricing, sales process, customer behaviour, platform policies and implementation.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>9. Plans, Features and Pricing</h2>
            <p>Plans, features and prices are described on our website or in the applicable order, proposal or agreement.</p>
            <p>Current website pricing may include annual plans such as:</p>
            <ul className={styles.bulletList}>
              <li>Growth;</li>
              <li>AI Growth Engine;</li>
              <li>Power Combo.</li>
            </ul>
            <p>Features may vary by plan and may change over time.</p>
            <p>Additional usage, AI credits, WhatsApp numbers, third-party charges or custom services may be billed separately where applicable.</p>
            <p>If there is a conflict between website pricing and a specific written quotation or signed order, the applicable written commercial agreement will control.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>10. Third-Party Charges</h2>
            <p>Certain services may involve charges from third-party providers, including WhatsApp/Meta, payment gateways, cloud providers, AI providers, CRM platforms or other integrations.</p>
            <p>Unless explicitly included in your plan, such charges are your responsibility.</p>
            <p>Third-party pricing, limits and policies may change without notice.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>11. Payments</h2>
            <p>Customers agree to pay applicable fees according to the selected plan or commercial agreement.</p>
            <p>Unless otherwise stated:</p>
            <ul className={styles.bulletList}>
              <li>Fees must be paid before the applicable service period begins;</li>
              <li>Taxes may be charged as required by law;</li>
              <li>Payment gateway charges or applicable taxes may apply;</li>
              <li>Failure to pay may result in suspension of services.</li>
            </ul>
            <p>Bluetick may change pricing for future billing periods by providing reasonable notice.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>12. Refunds and Cancellation</h2>
            <p>Refund eligibility depends on the applicable plan, order, proposal or written agreement.</p>
            <p>Unless expressly stated otherwise in writing, payment for a subscription or service does not automatically create a right to a refund merely because the customer does not use the service.</p>
            <p>Where a refund policy applies, the specific refund conditions communicated at the time of purchase will govern.</p>
            <p>Any non-refundable third-party charges, setup charges or completed custom implementation work may not be refundable where legally permitted.</p>
            <div className={styles.alertNote}>
              Please review your specific commercial order or agreement for applicable plan refund and cancellation terms.
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>13. Service Availability</h2>
            <p>We aim to provide reliable services but do not guarantee uninterrupted or error-free operation.</p>
            <p>Services may be temporarily unavailable due to:</p>
            <ul className={styles.bulletList}>
              <li>Maintenance;</li>
              <li>Updates;</li>
              <li>Security incidents;</li>
              <li>Infrastructure failures;</li>
              <li>Internet/network problems;</li>
              <li>Third-party outages;</li>
              <li>WhatsApp/Meta outages;</li>
              <li>Cloud provider failures;</li>
              <li>Force majeure events.</li>
            </ul>
            <p>Where commercially reasonable, we may communicate material planned maintenance.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>14. Integrations</h2>
            <p>Bluetick may integrate with third-party services including CRM platforms, Google services, payment gateways, calendars, messaging platforms, AI providers and automation tools.</p>
            <p>You acknowledge that:</p>
            <ul className={styles.bulletList}>
              <li>Third-party services may change or become unavailable;</li>
              <li>Third-party APIs may impose limits;</li>
              <li>Third-party providers may suspend access;</li>
              <li>Integration functionality may depend on API availability;</li>
              <li>Third-party terms may separately apply.</li>
            </ul>
            <p>Bluetick is not responsible for failures caused exclusively by third-party systems.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>15. Customer Data</h2>
            <p>You retain ownership of business data and customer information that you lawfully provide to Bluetick for processing.</p>
            <p>You grant Bluetick the limited rights necessary to host, process, transmit, store and otherwise use such data solely to provide the contracted services, maintain security, troubleshoot issues, comply with law and perform other legitimate service-related functions.</p>
            <p>You are responsible for ensuring that you have the legal rights and permissions required to provide such information to Bluetick.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>16. Intellectual Property</h2>
            <p>Bluetick and its licensors retain all rights in:</p>
            <ul className={styles.bulletList}>
              <li>Software;</li>
              <li>Platforms;</li>
              <li>Source code;</li>
              <li>Automation frameworks;</li>
              <li>Pre-existing workflows;</li>
              <li>Templates;</li>
              <li>Interfaces;</li>
              <li>Documentation;</li>
              <li>Branding;</li>
              <li>Logos;</li>
              <li>Proprietary processes;</li>
              <li>General know-how;</li>
              <li>Reusable components.</li>
            </ul>
            <p>Unless expressly agreed otherwise in writing, purchasing a service does not transfer ownership of Bluetick's underlying technology or intellectual property.</p>
            <p>Customer-specific deliverables may be governed by a separate agreement.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>17. Customer Content</h2>
            <p>You retain ownership of content, business information, product information, documents and other materials you provide to Bluetick.</p>
            <p>You grant Bluetick a limited licence to use such materials only as reasonably necessary to provide the requested services.</p>
            <p>You represent that you have the necessary rights to provide such content.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>18. Confidentiality</h2>
            <p>Each party may receive confidential information belonging to the other party.</p>
            <p>The receiving party will use reasonable care to protect confidential information and will not disclose it except:</p>
            <ul className={styles.bulletList}>
              <li>To authorised personnel and service providers who need it for legitimate purposes;</li>
              <li>Where required by law;</li>
              <li>Where necessary to enforce contractual rights;</li>
              <li>With the other party's permission.</li>
            </ul>
            <p>Confidentiality obligations do not apply to information that is publicly available, independently developed, lawfully received from another source or already known without confidentiality obligations.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>19. Acceptable Use</h2>
            <p>You agree to use Bluetick only for lawful and legitimate business purposes.</p>
            <p>You must not use the service to:</p>
            <ul className={styles.bulletList}>
              <li>Commit fraud;</li>
              <li>Conduct phishing or scams;</li>
              <li>Distribute malware;</li>
              <li>Circumvent security controls;</li>
              <li>Violate privacy rights;</li>
              <li>Infringe intellectual-property rights;</li>
              <li>Harass or threaten individuals;</li>
              <li>Send unlawful spam;</li>
              <li>Impersonate individuals or organisations;</li>
              <li>Promote illegal products or services;</li>
              <li>Conduct activities prohibited by WhatsApp/Meta or applicable third-party platforms;</li>
              <li>Attempt to reverse engineer or compromise Bluetick systems;</li>
              <li>Resell or redistribute Bluetick services except where expressly authorised.</li>
            </ul>
            <p>We may suspend access where we reasonably believe the service is being used in violation of these requirements.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>20. Prohibited and Restricted Use Cases</h2>
            <p>Bluetick may refuse or restrict services involving businesses, content or activities that are illegal, highly regulated, fraudulent, deceptive or prohibited by applicable platform policies.</p>
            <p>This may include activities involving:</p>
            <ul className={styles.bulletList}>
              <li>Illegal goods or services;</li>
              <li>Fraudulent financial schemes;</li>
              <li>Malware or cyber abuse;</li>
              <li>Unlawful gambling;</li>
              <li>Weapons or prohibited goods;</li>
              <li>Child exploitation;</li>
              <li>Illegal drugs;</li>
              <li>Unauthorised financial or identity data;</li>
              <li>Other prohibited categories under applicable law or third-party platform policies.</li>
            </ul>
            <p>Additional restrictions may apply depending on WhatsApp/Meta or other service-provider policies.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>21. Account Suspension and Termination</h2>
            <p>Bluetick may suspend or terminate access where:</p>
            <ul className={styles.bulletList}>
              <li>Fees remain unpaid;</li>
              <li>The customer materially breaches these Terms;</li>
              <li>The service is used unlawfully;</li>
              <li>The customer violates third-party platform policies;</li>
              <li>The account creates significant security or abuse risks;</li>
              <li>Suspension is required by law;</li>
              <li>Continued service creates material risk to Bluetick or third parties.</li>
            </ul>
            <p>Where reasonably possible, we may provide notice and an opportunity to remedy the breach. Certain serious violations may result in immediate suspension.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>22. Effect of Termination</h2>
            <p>After termination:</p>
            <ul className={styles.bulletList}>
              <li>Access to services may stop;</li>
              <li>Automations may stop executing;</li>
              <li>Connected integrations may be disconnected;</li>
              <li>WhatsApp workflows may stop;</li>
              <li>Customer data may be retained or deleted according to applicable agreements, law and our Privacy Policy;</li>
              <li>Outstanding payment obligations remain payable.</li>
            </ul>
            <p>Customers should export any information they are entitled to retain before terminating a service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>23. Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, Bluetick services are provided on an “as available” and “as is” basis.</p>
            <p>We do not warrant that:</p>
            <ul className={styles.bulletList}>
              <li>The service will always be uninterrupted;</li>
              <li>Every AI response will be accurate;</li>
              <li>Every integration will always work;</li>
              <li>Every WhatsApp message will be delivered;</li>
              <li>Every template will be approved;</li>
              <li>Every account will remain active;</li>
              <li>The service will achieve a particular business result.</li>
            </ul>
            <p>Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>24. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Bluetick will not be liable for indirect, incidental, special, consequential or punitive losses, or loss of profits, revenue, goodwill, business opportunities or anticipated savings arising from use of the services.
            </p>
            <p>
              Where legally permitted, Bluetick's aggregate liability relating to a particular service will not exceed the fees actually paid by the customer to Bluetick for that service during the twelve (12) months immediately preceding the event giving rise to the claim.
            </p>
            <p>This limitation does not apply where liability cannot legally be limited.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>25. Indemnification</h2>
            <p>To the extent permitted by law, you agree to indemnify and hold Bluetick Digital, its personnel and service providers harmless from claims, losses, damages and reasonable expenses arising from:</p>
            <ul className={styles.bulletList}>
              <li>Your unlawful use of the services;</li>
              <li>Your violation of these Terms;</li>
              <li>Your violation of third-party platform policies;</li>
              <li>Your failure to obtain required permissions or consents;</li>
              <li>Content or data supplied by you;</li>
              <li>Your infringement of another party's rights;</li>
              <li>Your messaging or marketing activities.</li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>26. Force Majeure</h2>
            <p>Bluetick will not be responsible for delays or failures caused by circumstances beyond reasonable control, including natural disasters, war, government actions, internet failures, cyber incidents, infrastructure failures, cloud-provider failures, telecommunications failures, strikes, or major third-party platform outages.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>27. Changes to Services</h2>
            <p>We may modify, improve, replace or discontinue features from time to time.</p>
            <p>Where a material change substantially reduces a paid service's core functionality, we will make commercially reasonable efforts to provide appropriate notice.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>28. Changes to These Terms</h2>
            <p>We may update these Terms from time to time.</p>
            <p>The updated version will be published on this page with a revised “Last Updated” date.</p>
            <p>Your continued use of the services after the effective date of updated Terms constitutes acceptance of the updated Terms, subject to applicable law.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>29. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
            <p>Subject to any mandatory dispute-resolution rights available under applicable law, courts located in <strong>Raipur, Chhattisgarh, India</strong> shall have jurisdiction over disputes arising from these Terms.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>30. Dispute Resolution</h2>
            <p>Before initiating formal legal proceedings, the parties should attempt to resolve disputes through good-faith communication.</p>
            <p>A customer may first contact Bluetick at the contact details below and provide:</p>
            <ul className={styles.bulletList}>
              <li>Account/customer details;</li>
              <li>Description of the dispute;</li>
              <li>Relevant transaction/service information;</li>
              <li>Supporting documents.</li>
            </ul>
            <p>Nothing in this section prevents a party from seeking urgent legal relief where necessary.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>31. Severability</h2>
            <p>If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified or limited to the minimum extent necessary, and the remaining provisions shall continue to apply.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>32. No Waiver</h2>
            <p>Failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce that provision later.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>33. Entire Agreement</h2>
            <p>These Terms, together with any applicable order, proposal, service agreement, pricing terms and policies incorporated by reference, constitute the agreement governing your use of the applicable Bluetick services.</p>
            <p>Where a signed written agreement conflicts with these Terms, the signed agreement will control for the specific subject matter of that conflict.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>34. Contact Us</h2>
            <div className={styles.contactCard}>
              <p><strong>Bluetick Digital</strong></p>
              <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              <p><strong>Address:</strong> Chandrakar complex, Raipura chawk, raipur</p>
              <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
            </div>
            <p>For service, billing or legal notices, please use the contact information specified in your applicable agreement or the contact information published on our website.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
