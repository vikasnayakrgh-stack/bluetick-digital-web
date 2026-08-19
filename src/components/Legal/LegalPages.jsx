import React from 'react';
import SEO from '../Common/SEO';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './LegalPages.module.css';

export const PrivacyPage = () => (
  <>
    <SEO
      title="Privacy Policy | Bluetick Digital"
      description="Bluetick Digital Privacy Policy. Learn how we collect, process, and protect your personal and business data across our website and automation services."
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

          <div className={styles.sectionBlock}>
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
          </div>

          <div className={styles.sectionBlock}>
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
          </div>

          <div className={styles.sectionBlock}>
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
          </div>

          <div className={styles.sectionBlock}>
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
          </div>

          <div className={styles.sectionBlock}>
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
            <p>You may also be able to control cookies through your browser settings. Some website functionality may not operate properly if certain cookies are disabled.</p>
          </div>

          <div className={styles.sectionBlock}>
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
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>7. Customer Business Data</h2>
            <p>
              When a business customer uses Bluetick services, the customer may provide or connect information relating to its own customers, leads, prospects or business operations.
            </p>
            <p>The customer generally remains responsible for its business/customer data.</p>
            <p>
              Bluetick processes such information only to the extent reasonably necessary to provide the services requested by the customer and to perform legitimate service, security and operational functions.
            </p>
            <p>
              Customers are responsible for ensuring that they have the necessary rights, permissions, notices and lawful basis to collect and provide such information to Bluetick.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>8. WhatsApp Data</h2>
            <p>
              Bluetick provides WhatsApp Business API and automation services through third-party WhatsApp/BSP infrastructure.
            </p>
            <p>
              <strong>Bluetick does not permanently store WhatsApp conversation history on its own servers/database as part of the standard service</strong>, unless a particular service or written agreement expressly states otherwise.
            </p>
            <p>However, information required to configure and operate WhatsApp services may be processed, such as:</p>
            <ul className={styles.bulletList}>
              <li>Business information;</li>
              <li>WhatsApp configuration information;</li>
              <li>Account/service identifiers;</li>
              <li>API-related configuration;</li>
              <li>Workflow configuration;</li>
              <li>Service and technical information.</li>
            </ul>
            <p>
              WhatsApp/Meta and the applicable WhatsApp Business Solution Provider may independently process information under their own terms and privacy policies.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>9. AI-Powered Services</h2>
            <p>Bluetick may provide AI-powered features, including:</p>
            <ul className={styles.bulletList}>
              <li>Automated replies;</li>
              <li>Lead qualification;</li>
              <li>Follow-ups;</li>
              <li>Appointment-related automation;</li>
              <li>Customer interaction;</li>
              <li>Business workflow automation;</li>
              <li>Human handoff;</li>
              <li>Other AI-assisted functionality.</li>
            </ul>
            <p>AI-generated responses may be automatically sent to users where the customer has configured an automated workflow to do so.</p>
            <p>AI-generated information may not always be accurate, complete, current or appropriate.</p>
            <p>Customers are responsible for reviewing and configuring AI workflows appropriately for their business requirements.</p>
            <p>AI systems should not be relied upon as a substitute for professional legal, medical, financial or other specialised advice.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>10. AI Model Training</h2>
            <p><strong>Bluetick does not intentionally use customer business data to train general-purpose AI models.</strong></p>
            <p>We do not sell customer business data as a commercial data product.</p>
            <p>Customer data is processed for providing the contracted services and related operational purposes.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>11. Third-Party Services and Integrations</h2>
            <p>Our services may interact with third-party platforms and technology providers. Depending on the service, these may include:</p>
            <ul className={styles.bulletList}>
              <li>WhatsApp/Meta;</li>
              <li>WhatsApp Business Solution Providers;</li>
              <li>Cloud/database infrastructure;</li>
              <li>AI service providers;</li>
              <li>CRM platforms;</li>
              <li>Google services;</li>
              <li>Analytics and advertising providers;</li>
              <li>Other third-party technology providers.</li>
            </ul>
            <p>Third-party providers may independently process information under their own privacy policies and terms.</p>
            <p>Bluetick does not control the privacy practices, security practices, availability or policies of third-party services.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>12. CRM Integrations</h2>
            <p>Customers may connect third-party CRM systems or business tools to Bluetick where supported. The customer is responsible for:</p>
            <ul className={styles.bulletList}>
              <li>Authorising the connection;</li>
              <li>Ensuring that the connected data may lawfully be processed;</li>
              <li>Maintaining appropriate permissions;</li>
              <li>Complying with the CRM provider's terms;</li>
              <li>Managing access to its third-party accounts.</li>
            </ul>
            <p>Third-party CRM providers may independently process information according to their own policies.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>13. Sharing of Information</h2>
            <p>We may share information with service providers and third parties where reasonably necessary to operate our business or provide requested services. These may include:</p>
            <ul className={styles.bulletList}>
              <li>Hosting and infrastructure providers;</li>
              <li>Database providers;</li>
              <li>WhatsApp/BSP providers;</li>
              <li>AI providers;</li>
              <li>CRM providers;</li>
              <li>Analytics providers;</li>
              <li>Advertising platforms;</li>
              <li>Professional advisers;</li>
              <li>Security providers;</li>
              <li>Government authorities where legally required.</li>
            </ul>
            <p><strong>We do not sell personal information as a standalone commercial product.</strong></p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>14. Payment Information</h2>
            <p>Bluetick does not intentionally store customers' card or payment credentials on its own servers.</p>
            <p>Where payment services are introduced or used through a third-party payment provider, payment information may be processed directly by the applicable payment provider according to its own privacy policy and terms.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>15. Data Security</h2>
            <p>We take reasonable technical and organisational measures designed to protect information against unauthorised access, disclosure, loss, misuse, alteration, or destruction.</p>
            <p>Security measures may include appropriate access controls, authentication, secure infrastructure, restricted access and monitoring.</p>
            <p>However, no internet-based system can be guaranteed to be completely secure.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>16. Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for the purposes for which it was collected, to provide services, maintain business records, comply with legal obligations, resolve disputes, prevent fraud and enforce agreements.
            </p>
            <p>WhatsApp conversation history is not permanently stored on Bluetick's servers as part of the standard service.</p>
            <p>Business records, enquiry information, account information and transaction-related information may be retained for appropriate operational, legal, accounting or security purposes.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>17. Data Deletion</h2>
            <p>Where applicable, you may request deletion of personal information by contacting us.</p>
            <p>We may delete or anonymise information when it is no longer required, subject to legal obligations, accounting requirements, fraud prevention, security requirements, dispute resolution, or enforcement of contractual rights.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>18. Privacy Rights</h2>
            <p>Subject to applicable law, individuals may have rights relating to their personal information, including rights to:</p>
            <ul className={styles.bulletList}>
              <li>Request information about processing;</li>
              <li>Request correction of inaccurate information;</li>
              <li>Request deletion where applicable;</li>
              <li>Withdraw consent where applicable;</li>
              <li>Raise a grievance;</li>
              <li>Exercise other rights available under applicable data-protection law.</li>
            </ul>
            <p>Requests may be sent to: <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
            <p>We may request reasonable information to verify your identity before processing certain requests.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>19. Marketing Communications</h2>
            <p>We may communicate with you regarding enquiries, demos, services, account-related matters, support, transactions, and important service notices.</p>
            <p>Where permitted by applicable law, we may also send promotional communications. You may request to stop promotional communications using the available unsubscribe mechanism or by contacting us.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>20. WhatsApp Marketing and Customer Responsibility</h2>
            <p>Customers using Bluetick for WhatsApp marketing are responsible for complying with applicable messaging and marketing laws and WhatsApp/Meta policies. Customers must:</p>
            <ul className={styles.bulletList}>
              <li>Obtain required permissions/opt-ins;</li>
              <li>Use legitimate contact information;</li>
              <li>Respect applicable opt-out requirements;</li>
              <li>Avoid deceptive or misleading communications;</li>
              <li>Follow WhatsApp/Meta messaging policies;</li>
              <li>Maintain appropriate records where required.</li>
            </ul>
            <p>Bluetick may restrict or suspend activity that presents material legal, security, abuse or platform-policy risks.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>21. Children</h2>
            <p>Bluetick primarily provides business-oriented services. We do not intentionally design our services to collect personal information from children for independent use.</p>
            <p>If you believe that information relating to a child has been improperly submitted to us, please contact us.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>22. Sensitive Personal Information</h2>
            <p>Customers should not submit unnecessary sensitive personal information through Bluetick systems, including passwords, OTPs, payment-card credentials, Aadhaar information, PAN information, health information, or authentication credentials.</p>
            <p>Customers remain responsible for information they choose to submit through the service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>23. Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites or services. We are not responsible for their privacy practices, security, content, availability, or terms.</p>
            <p>You should review the applicable third-party policies before providing information to them.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>24. Security Incidents</h2>
            <p>If we become aware of a security incident involving personal information, we will assess the incident and take reasonable steps required under applicable law, including notification or cooperation with relevant authorities where legally required.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>25. International Processing</h2>
            <p>Some third-party technology providers used by Bluetick may process information outside India. Where applicable, such processing will be conducted subject to applicable law and appropriate safeguards.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>26. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time due to changes in our services, technology, data practices, legal/regulatory developments, or security improvements.</p>
            <p>The latest version will be published on this page with the updated date.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>27. Contact Us</h2>
            <p>For privacy questions, data requests or grievances:</p>
            <div className={styles.contactCard}>
              <p><strong>Bluetick Digital</strong></p>
              <p><strong>Owner:</strong> Kheerendra Nayak</p>
              <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
              <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
            </div>
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
      description="Terms of Service governing access to and use of Bluetick Digital's website, software, WhatsApp Business API services, AI automation, and digital platforms."
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
            These Terms of Service (“Terms”) govern your access to and use of the website, software, WhatsApp/API services, AI automation services and other services provided by <strong>Bluetick Digital</strong>, a proprietorship/business owned by <strong>Kheerendra Nayak</strong> (“Bluetick”, “we”, “us” or “our”).
          </p>
          <p>
            By accessing our website, requesting a demo, purchasing a service, creating an account, connecting a WhatsApp number, or using any Bluetick service, you agree to these Terms.
          </p>
          <p>
            If you are using Bluetick on behalf of a business or organisation, you confirm that you have authority to bind that organisation to these Terms.
          </p>

          <div className={styles.sectionBlock}>
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
            <p>Specific features depend on the plan, service package, proposal or agreement applicable to the customer.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>2. Eligibility</h2>
            <p>You must have the legal capacity to enter into a binding agreement.</p>
            <p>If you use our services on behalf of a business, you confirm that you are authorised to do so.</p>
            <p>You must not use our services for unlawful, fraudulent, abusive or prohibited purposes.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>3. Customer Account</h2>
            <p>Where an account is required, you are responsible for:</p>
            <ul className={styles.bulletList}>
              <li>Providing accurate information;</li>
              <li>Keeping account information updated;</li>
              <li>Protecting login credentials;</li>
              <li>Controlling access to your account;</li>
              <li>Ensuring authorised users comply with these Terms.</li>
            </ul>
            <p>You must notify us if you believe your account has been compromised.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>4. WhatsApp Business API</h2>
            <p>WhatsApp-related services depend on WhatsApp/Meta and applicable Business Solution Provider infrastructure.</p>
            <p>Your use of WhatsApp services is also subject to applicable:</p>
            <ul className={styles.bulletList}>
              <li>WhatsApp policies;</li>
              <li>Meta policies;</li>
              <li>Messaging rules;</li>
              <li>Business policies;</li>
              <li>Template requirements;</li>
              <li>Quality requirements;</li>
              <li>Messaging limitations.</li>
            </ul>
            <p>Bluetick cannot guarantee approval of WhatsApp accounts, business accounts, phone numbers, templates, campaigns, or particular message content.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>5. WhatsApp Account Ownership and Infrastructure</h2>
            <p>Depending on the service arrangement, WhatsApp Business API infrastructure may be provisioned or managed through Bluetick's applicable provider/infrastructure.</p>
            <p>Customers authorise Bluetick to perform the technical configuration necessary to provide the purchased service.</p>
            <p>Third-party provider policies and decisions may affect the availability of the WhatsApp service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>6. WhatsApp Messaging Responsibilities</h2>
            <p>Customers are responsible for ensuring that their messaging activities are lawful and authorised. Customers must:</p>
            <ul className={styles.bulletList}>
              <li>Obtain required WhatsApp/user opt-ins;</li>
              <li>Use accurate and legitimate contact information;</li>
              <li>Respect applicable opt-out requests;</li>
              <li>Follow applicable marketing laws;</li>
              <li>Follow WhatsApp/Meta policies;</li>
              <li>Use appropriate message templates where required;</li>
              <li>Avoid deceptive messaging.</li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>7. Prohibited Contact Lists</h2>
            <p>Customers must not use Bluetick to send messages to:</p>
            <ul className={styles.bulletList}>
              <li>Purchased contact lists;</li>
              <li>Scraped contact lists;</li>
              <li>Unauthorised contact databases;</li>
              <li>Lists obtained without appropriate permission;</li>
              <li>Contacts where applicable consent/permission requirements have not been satisfied.</li>
            </ul>
            <p>Bluetick may suspend campaigns or accounts where we reasonably believe such activity is occurring.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>8. Broadcast and Promotional Messaging</h2>
            <p>Customers may use supported broadcast and promotional messaging functionality subject to applicable laws, WhatsApp/Meta policies and the customer's responsibility to obtain required permissions.</p>
            <p>Customers are responsible for:</p>
            <ul className={styles.bulletList}>
              <li>Message content;</li>
              <li>Recipient selection;</li>
              <li>Frequency;</li>
              <li>Consent;</li>
              <li>Opt-out handling;</li>
              <li>Regulatory compliance.</li>
            </ul>
            <p>Bluetick does not guarantee delivery, open rates, responses or conversions.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>9. AI Services</h2>
            <p>Bluetick may provide AI-powered services capable of:</p>
            <ul className={styles.bulletList}>
              <li>Replying to customers;</li>
              <li>Qualifying leads;</li>
              <li>Conducting follow-ups;</li>
              <li>Assisting with appointment booking;</li>
              <li>Supporting customer interactions;</li>
              <li>Performing workflow actions;</li>
              <li>Escalating conversations to humans;</li>
              <li>Other automated business functions.</li>
            </ul>
            <p>AI-generated responses may be automatically sent without human approval where the customer enables such functionality. Customers are responsible for configuring the AI appropriately.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>10. AI Disclaimer</h2>
            <p>AI output may be inaccurate, incomplete, misleading, outdated or inappropriate. Customers must not rely exclusively on AI output for decisions requiring professional judgement.</p>
            <p>Bluetick does not guarantee AI accuracy, availability, particular responses, specific lead qualification results, conversion rates, or sales outcomes.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>11. Customer Data</h2>
            <p>Customers retain ownership of their business information, customer data, leads and content supplied to Bluetick.</p>
            <p>The customer grants Bluetick the limited rights necessary to process information, operate the service, configure workflows, provide support, maintain security, troubleshoot technical issues, and comply with law.</p>
            <p><strong>Bluetick does not sell customer business data as a commercial data product.</strong></p>
            <p><strong>Bluetick does not intentionally use customer business data to train general-purpose AI models.</strong></p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>12. Customer Data Compliance</h2>
            <p>Customers are responsible for ensuring that information supplied to Bluetick has been collected and provided lawfully with appropriate permissions, consents, notices, and authorisations.</p>
            <p>Customers are also responsible for complying with applicable privacy and marketing laws.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>13. Sensitive Information</h2>
            <p>Customers should not use Bluetick to unnecessarily process highly sensitive information, including passwords, OTPs, payment-card credentials, Aadhaar information, PAN information, health information, or authentication credentials.</p>
            <p>Where such information is unnecessarily provided, Bluetick may restrict or remove access to the relevant workflow or service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>14. CRM and Third-Party Integrations</h2>
            <p>Bluetick may support connections to third-party CRM and business applications. Customers authorise Bluetick to interact with such services as necessary to provide the requested integration.</p>
            <p>Customers remain responsible for their third-party accounts, permissions, data entered into third-party systems, fees, and compliance with third-party terms.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>15. Third-Party Services</h2>
            <p>Bluetick may depend on third-party infrastructure (messaging platforms, AI providers, hosting, CRM systems, analytics, etc.).</p>
            <p>Third-party services may change policies, pricing, APIs, limit usage, suspend accounts, or experience downtime. Bluetick is not responsible for failures caused solely by third-party providers.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>16. Pricing and Plans</h2>
            <p>Our current annual plans may include:</p>
            <ul className={styles.bulletList}>
              <li><strong>Growth:</strong> ₹11,999/year</li>
              <li><strong>AI Growth Engine:</strong> ₹14,999/year</li>
              <li><strong>Power Combo:</strong> ₹25,000/year</li>
            </ul>
            <p>Features and limits may vary by plan. Pricing displayed on the website may be updated from time to time. Applicable taxes, where required by law, may be charged separately.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>17. Annual Subscription</h2>
            <p>Bluetick plans are currently offered on an annual subscription basis unless otherwise specified. Subscriptions do not automatically renew. Customers must purchase a new subscription when the existing subscription expires if they wish to continue using the service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>18. Cancellation</h2>
            <p>Customers may request cancellation of their subscription. Unless otherwise agreed in writing, cancellation results in <strong>immediate cessation of service access</strong>.</p>
            <p>Cancellation does not automatically create a right to a refund.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>19. Refund Policy</h2>
            <p>
              <strong>All subscription, setup and activation fees are non-refundable once payment or service activation has occurred</strong>, except where Bluetick is legally required to provide a refund or expressly agrees otherwise in writing.
            </p>
            <p>No refund will generally be provided because:</p>
            <ul className={styles.bulletList}>
              <li>The customer changes their mind;</li>
              <li>The customer does not use the service;</li>
              <li>The customer does not like the service;</li>
              <li>WhatsApp/Meta does not approve an account or template;</li>
              <li>The customer supplies incorrect or incomplete information;</li>
              <li>The customer violates third-party policies;</li>
              <li>The customer's WhatsApp number/account is restricted due to customer-side activity.</li>
            </ul>
            <p>Where a technical issue is caused by Bluetick, the primary remedy will generally be reasonable technical support and efforts to resolve the issue.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>20. Third-Party Charges</h2>
            <p>Third-party charges may apply depending on the service (messaging providers, AI providers, cloud providers, CRM platforms). Such charges may be separate from Bluetick subscription fees unless explicitly included in the applicable plan.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>21. Support</h2>
            <p>Customer support is included where specified by the applicable plan.</p>
            <ul className={styles.bulletList}>
              <li><strong>Support Channels:</strong> WhatsApp and support/ticket channels.</li>
              <li><strong>Standard Support Hours:</strong> 10:00 AM to 6:00 PM on working days.</li>
            </ul>
            <p>Bluetick does not provide guaranteed emergency support unless expressly agreed in writing.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>22. Service Availability</h2>
            <p>Bluetick does not provide a guaranteed uptime commitment unless expressly stated in a separate written SLA.</p>
            <p>Services may be temporarily unavailable due to maintenance, updates, infrastructure issues, security incidents, internet failures, third-party outages, WhatsApp/Meta outages, or other circumstances beyond our reasonable control.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>23. No Guaranteed Business Results</h2>
            <p>Bluetick provides technology and automation infrastructure. We do not guarantee a particular number of leads, sales, revenue, ROI, conversion rate, open rate, response rate, appointment volume, customer acquisition, or specific business growth.</p>
            <p>Results depend on factors including offer quality, audience, pricing, sales process, market, implementation and customer behaviour.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>24. Intellectual Property</h2>
            <p>Bluetick retains all rights in its software, platforms, source code, automation frameworks, templates, reusable workflows, libraries, interfaces, documentation, proprietary processes, and know-how.</p>
            <p>Customers do not acquire ownership of Bluetick's underlying technology merely by purchasing a service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>25. Customer Content</h2>
            <p>Customers retain ownership of their business information, branding, product information, customer data, marketing content, and other materials supplied to Bluetick.</p>
            <p>Customers grant Bluetick a limited licence to use such materials solely as necessary to provide the purchased services.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>26. Custom Work</h2>
            <p>Where Bluetick creates custom workflows, integrations or implementations, customer-specific business data and content remain customer property, while Bluetick retains ownership of reusable technology, frameworks, components, templates and know-how.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>27. Customer Marketing and Case Studies</h2>
            <p>Bluetick will not publicly use a customer's name, logo or case study for marketing purposes without appropriate permission.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>28. Acceptable Use</h2>
            <p>You must not use Bluetick services to commit fraud, conduct scams, send unlawful spam, phish users, distribute malware, harass users, impersonate another person/organisation, violate privacy rights, infringe intellectual property, circumvent platform restrictions, violate WhatsApp/Meta policies, or compromise Bluetick's security.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>29. Restricted Industries and Activities</h2>
            <p>Bluetick may restrict or refuse service where a use case creates significant legal, regulatory, security, fraud or platform-policy risk under applicable law or third-party platform policies.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>30. Suspension</h2>
            <p>Bluetick may suspend or restrict an account or workflow where fees remain unpaid, terms are materially breached, service is used unlawfully, WhatsApp/Meta policies are violated, spam/abuse is detected, security risks arise, or as required by law.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>31. WhatsApp Suspension or Ban</h2>
            <p>WhatsApp/Meta may restrict, suspend or terminate a business account, number, template or messaging capability. Bluetick does not control such decisions.</p>
            <p>If an account is suspended or banned due to customer activity, policy violations, poor messaging quality, or recipient complaints, Bluetick does not guarantee restoration or refund.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>32. Termination</h2>
            <p>Either party may terminate the applicable service relationship subject to the applicable commercial terms. Upon termination, access to relevant services may immediately cease.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>33. Data After Termination</h2>
            <p>Following termination, access to Bluetick services may be disabled. Information may be deleted, anonymised or retained as reasonably necessary for legal compliance, accounting, security, fraud prevention, dispute resolution, or enforcement of contractual obligations.</p>
            <p>WhatsApp conversation history is not permanently stored on Bluetick's servers as part of the standard service.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>34. Confidentiality</h2>
            <p>Each party agrees to take reasonable steps to protect confidential information and not disclose it except where necessary for providing services, authorised personnel, service providers, legal obligations, or enforcement of rights.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>35. Security</h2>
            <p>Bluetick takes reasonable measures to protect its systems and information. However, no online service can guarantee absolute security. Customers are responsible for maintaining appropriate security for their own accounts, credentials, integrations and connected third-party systems.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>36. Disclaimer of Warranties</h2>
            <p>To the maximum extent permitted by applicable law, Bluetick services are provided on an “as available” basis. We do not guarantee uninterrupted service, 100% AI accuracy, guaranteed message delivery, template approval, or particular business outcomes.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>37. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Bluetick will not be liable for indirect, incidental, consequential, special or punitive losses.</p>
            <p>Subject to applicable law, Bluetick's aggregate liability arising from a service will not exceed the total fees actually paid by the customer to Bluetick for that service during the <strong>12 months preceding the event giving rise to the claim</strong>.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>38. Indemnification</h2>
            <p>To the extent permitted by law, you agree to indemnify Bluetick Digital and its personnel against claims, losses and reasonable expenses arising from your unlawful use of the service, breach of Terms, WhatsApp/Meta policy violations, messaging activities, data supplied, or infringement of third-party rights.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>39. Force Majeure</h2>
            <p>Bluetick will not be responsible for delays or failures caused by circumstances beyond reasonable control, including natural disasters, war, government actions, internet/telecom failures, cyber incidents, cloud provider failures, or platform outages.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>40. Changes to Services</h2>
            <p>Bluetick may modify, improve, add or discontinue features from time to time with reasonable notice where commercially practical.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>41. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. The latest version will be published on this page with an updated “Last Updated” date.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>42. Governing Law</h2>
            <p>These Terms are governed by the laws of <strong>India</strong>. Subject to applicable mandatory legal requirements, courts located in <strong>Raipur, Chhattisgarh, India</strong> shall have jurisdiction over disputes arising from these Terms.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>43. Dispute Resolution</h2>
            <p>Before initiating formal legal proceedings, the parties agree to make reasonable efforts to resolve disputes through good-faith communication with a <strong>30-day good-faith resolution period</strong>.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>44. Severability</h2>
            <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue to apply to the maximum extent permitted by law.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>45. No Waiver</h2>
            <p>Failure to enforce any provision of these Terms does not waive the right to enforce that provision in the future.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>46. Entire Agreement</h2>
            <p>These Terms, together with applicable pricing, order forms, proposals, service agreements and referenced policies, constitute the agreement governing use of Bluetick services.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>47. Contact</h2>
            <div className={styles.contactCard}>
              <p><strong>Bluetick Digital</strong></p>
              <p><strong>Owner:</strong> Kheerendra Nayak</p>
              <p><strong>Email:</strong> <a href="mailto:bluetickdigitalraipur@gmail.com" className={styles.contactLink}>bluetickdigitalraipur@gmail.com</a></p>
              <p><strong>Address:</strong> Business address registered under our applicable MSME/Udyam registration.</p>
              <p><strong>Website:</strong> <a href="https://bluetickdigital.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>https://bluetickdigital.in</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
