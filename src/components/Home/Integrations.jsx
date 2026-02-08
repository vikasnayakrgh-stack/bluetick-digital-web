import React from 'react';
import { motion } from 'framer-motion';
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

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Content */}
                    <div className={styles.content}>
                        <h2 className={styles.headline}>
                            Connect everything you <span className="text-gradient">already use</span>
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
                            <svg className={styles.connectorSvg} viewBox="0 0 400 300">
                                {/* Defs for gradients */}
                                <defs>
                                    <linearGradient id="gradInput" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#25D366" style={{ stopOpacity: 0.5 }} />
                                        <stop offset="100%" stopColor="#3b82f6" style={{ stopOpacity: 1 }} />
                                    </linearGradient>
                                    <linearGradient id="gradOutput" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" style={{ stopOpacity: 1 }} />
                                        <stop offset="100%" stopColor="#94a3b8" style={{ stopOpacity: 0.5 }} />
                                    </linearGradient>
                                </defs>

                                {/* Input Line (WhatsApp to Center) */}
                                <line x1="80" y1="150" x2="160" y2="150" stroke="url(#gradInput)" strokeWidth="3" strokeDasharray="6 4" />

                                {/* Output Lines (Center to Hubs) */}
                                {/* Top */}
                                <line x1="240" y1="150" x2="320" y2="90" stroke="url(#gradOutput)" strokeWidth="2" />
                                {/* Middle */}
                                <line x1="240" y1="150" x2="330" y2="150" stroke="url(#gradOutput)" strokeWidth="2" />
                                {/* Bottom */}
                                <line x1="240" y1="150" x2="320" y2="210" stroke="url(#gradOutput)" strokeWidth="2" />
                            </svg>

                            {/* Center Node: Bluetick Digital */}
                            <motion.div
                                className={styles.centerNode}
                                animate={{ y: [0, -8, 0], borderRadius: ["16px", "20px", "16px"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className={styles.cubeIcon}>
                                    <Box size={48} strokeWidth={1.5} />
                                </div>
                                <div className={styles.glow} />
                            </motion.div>

                            {/* Input Node: WhatsApp */}
                            <motion.div
                                className={styles.inputNode}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className={styles.iconCircle} style={{ background: '#DCF8C6' }}>
                                    <MessageCircle size={32} color="#25D366" />
                                </div>
                                <div className={styles.nodeLabel}>WhatsApp</div>
                            </motion.div>

                            {/* Output Nodes */}
                            <div className={styles.outputNodes}>
                                {/* HubSpot */}
                                <motion.div
                                    className={`${styles.outputNode} ${styles.node1}`}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                                >
                                    <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" />
                                </motion.div>

                                {/* Zoho */}
                                <motion.div
                                    className={`${styles.outputNode} ${styles.node2}`}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 3.5, delay: 0.7, repeat: Infinity }}
                                >
                                    <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" />
                                </motion.div>

                                {/* Calendly */}
                                <motion.div
                                    className={`${styles.outputNode} ${styles.node3}`}
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 4, delay: 0.9, repeat: Infinity }}
                                >
                                    <img src="https://assets.calendly.com/assets/external/media.svg" alt="Calendly" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Trust Bar */}
                <div className={styles.partnerRow}>
                    {partnerLogos.map((partner, index) => (
                        <div key={index} className={styles.partnerLogo}>
                            <img src={partner.src} alt={partner.name} title={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
