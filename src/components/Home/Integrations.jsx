import React from 'react';
import { ArrowRight, Box, MessageCircle } from 'lucide-react';
import styles from './Integrations.module.css';

const Integrations = () => {
    const partnerLogos = [
        { name: 'Pipedrive', src: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' },
        { name: 'Razorpay', src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg' },
        { name: 'Shopify', src: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
        { name: 'HubSpot', src: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
        { name: 'Zapier', src: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
        { name: 'Zoho', src: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg' },
        { name: 'Salesforce', src: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
        { name: 'Facebook', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }
    ];

    // Duplicate logos for seamless infinite loop
    const marqueeLogos = [...partnerLogos, ...partnerLogos];

    // SVG Coordinates
    // Canvas: 500 x 350
    // Center Box Right Edge: (306, 175)
    // Output Icons Left Edge: X = 418 (assuming right: 10px, width 72px)
    // Top Icon Y Center: 71
    // Mid Icon Y Center: 175
    // Bot Icon Y Center: 279

    const pathTop = "M 306 175 C 362 175, 362 71, 418 71";
    const pathMid = "M 306 175 L 418 175";
    const pathBot = "M 306 175 C 362 175, 362 279, 418 279";

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Content */}
                    <div className={styles.content}>
                        <h2 className={styles.headline}>
                            Connect everything you <span>already use</span>
                        </h2>
                        <p className={styles.subheadline}>
                            Bluetick Digital integrates with Zoho CRM, Google Calendar, Razorpay, Google Sheets, Calendly, Zoom, and Zapier.
                            Make WhatsApp and Instagram automation work seamlessly with your existing tools, not add another system to manage.
                        </p>
                        <a href="#integrations" className={styles.link}>
                            View all Integrations <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Right Column: Visual Hub & Spoke */}
                    <div className={styles.visualContainer}>
                        <div className={styles.hubWrapper}>
                            {/* SVG Connectors Layer */}
                            <svg className={styles.connectorSvg} viewBox="0 0 500 350">
                                {/* Defs for gradients */}
                                <defs>
                                    <linearGradient id="gradInput" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#25D366" style={{ stopOpacity: 0.5 }} />
                                        <stop offset="100%" stopColor="#3b82f6" style={{ stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>

                                {/* Input Line (WhatsApp to Center) */}
                                <line
                                    x1="72" y1="175"
                                    x2="210" y2="175"
                                    stroke="url(#gradInput)"
                                    strokeWidth="3"
                                    strokeDasharray="4 4"
                                    className={styles.dashedLine}
                                />

                                {/* Output Lines (Center to Hubs) */}
                                {/* Top */}
                                <path
                                    d={pathTop}
                                    stroke="#93C5FD"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="4 4"
                                />
                                {/* Data Dot Top */}
                                <circle r="3" fill="#3b82f6">
                                    <animateMotion dur="3s" repeatCount="indefinite" path={pathTop} />
                                </circle>

                                {/* Middle */}
                                <path
                                    d={pathMid}
                                    stroke="#93C5FD"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="4 4"
                                />
                                {/* Data Dot Middle */}
                                <circle r="3" fill="#3b82f6">
                                    <animateMotion dur="3s" repeatCount="indefinite" path={pathMid} />
                                </circle>

                                {/* Bottom */}
                                <path
                                    d={pathBot}
                                    stroke="#93C5FD"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="4 4"
                                />
                                {/* Data Dot Bottom */}
                                <circle r="3" fill="#3b82f6">
                                    <animateMotion dur="3s" repeatCount="indefinite" path={pathBot} />
                                </circle>
                            </svg>

                            {/* Center Node: Bluetick Digital */}
                            <div className={styles.centerNode}>
                                <div className={styles.cubeIcon}>
                                    <Box size={48} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Input Node: WhatsApp */}
                            <div className={styles.inputNode}>
                                <div className={styles.iconCircle}>
                                    <MessageCircle size={36} color="#25D366" strokeWidth={2.5} />
                                </div>
                                <div className={styles.nodeLabel}>WhatsApp</div>
                            </div>

                            {/* Output Nodes - Stacked Vertically */}
                            <div className={styles.outputNodes}>
                                {/* HubSpot (Top) */}
                                <div className={`${styles.outputNode} ${styles.nodeHubspot}`}>
                                    <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" />
                                </div>

                                {/* Zoho (Middle) */}
                                <div className={`${styles.outputNode} ${styles.nodeZoho}`}>
                                    <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" />
                                </div>

                                {/* Calendly (Bottom) */}
                                <div className={`${styles.outputNode} ${styles.nodeCalendly}`}>
                                    <img src="https://cdn.worldvectorlogo.com/logos/calendly.svg" alt="Calendly" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infinite Scrolling Marquee */}
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeWrapper}>
                        {marqueeLogos.map((partner, index) => (
                            <div key={index} className={styles.partnerLogo}>
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    title={partner.name}
                                    style={partner.name === 'Pipedrive' ? { height: '80%' } : {}}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
