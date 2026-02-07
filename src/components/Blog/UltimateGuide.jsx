import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart3, Users, MessageSquare, ShoppingCart, ShieldCheck } from 'lucide-react';
import styles from './UltimateGuide.module.css';

const UltimateGuide = () => {
    // SEO & Scroll
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Ultimate Guide to WhatsApp Chatbot Automation | Bluetick Digital";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Learn how to build no-code WhatsApp chatbots and automate your business. Complete guide to Official WhatsApp Business API, marketing, and commerce.");
        }
    }, []);

    const metrics = [
        { value: "45%+", label: "Conversion Rate Increase", icon: <BarChart3 /> },
        { value: "70%", label: "Average CTR on Broadcasts", icon: <Zap /> },
        { value: "2X", label: "Increase in Lead Capture", icon: <Users /> },
        { value: "<1s", label: "Response Time with AI", icon: <Zap /> }
    ];

    const bots = [
        { type: "Welcome Bot", function: "Greet visitors instantly and share product info.", bestFor: "All Industries" },
        { type: "Lead Qualification", function: "Collect customer details and segment automatically.", bestFor: "Real Estate, B2B" },
        { type: "Event Registration", function: "Drive registrations and increase attendance.", bestFor: "Education, Webinars" },
        { type: "Checkout Flow", function: "Browse products, select items, and pay.", bestFor: "E-commerce / Retail" },
        { type: "Appointment Booking", function: "Schedule meetings and send reminders.", bestFor: "Healthcare, Salons" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <article className={styles.guide}>
            <div className={styles.guideContainer}>
                {/* Section 1: Hero */}
                <header className={styles.guideHero}>
                    <motion.span
                        className={styles.guideBadge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Ultimate Guide 2024
                    </motion.span>
                    <motion.h1
                        className={styles.guideTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Build No-Code WhatsApp Chatbots Fast & Automate Your Business
                    </motion.h1>
                    <motion.p
                        className={styles.guideSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Transform your customer engagement with the Official WhatsApp Business API.
                        Automate up to 80% of customer queries, drive 3x more sales, and stay active 24/7.
                    </motion.p>
                </header>

                {/* Section 2: Metrics */}
                <motion.section
                    className={styles.guideSection}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className={styles.guideGrid}>
                        {metrics.map((m, i) => (
                            <motion.div key={i} className={styles.metricCard} variants={itemVariants}>
                                <span className={styles.metricValue}>{m.value}</span>
                                <span className={styles.metricLabel}>{m.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className={styles.divider} />

                {/* Section 3: Core Features */}
                <section className={styles.guideSection}>
                    <h2>Core Features of WhatsApp Automation</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3>1. Drag & Drop Builder</h3>
                            <p>Build dynamic flows easily with a visual interface. No coding expertise required.</p>
                            <ul>
                                <li>Use Quick Replies & Lists</li>
                                <li>Connect to Ads instantly</li>
                                <li>API & Webhook Triggers</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>2. Marketing & Broadcasting</h3>
                            <p>Send targeted broadcasts to thousands of users at once for events or launches.</p>
                            <ul>
                                <li>Smart Retargeting flows</li>
                                <li>Click-to-WhatsApp Ads</li>
                                <li>Segmented Audience lists</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>3. Commerce & Payments</h3>
                            <p>Connect your inventory and showcase products directly within WhatsApp.</p>
                            <ul>
                                <li>Native Product Catalog</li>
                                <li>Seamless UPI/Card Payments</li>
                                <li>Abandoned Cart Recovery</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>4. Smart AI Agents</h3>
                            <p>AI Agents use Natural Language Processing to understand intent and sentiment.</p>
                            <ul>
                                <li>24/7 Routine Query Handling</li>
                                <li>Multilingual Support</li>
                                <li>Smooth Human Handover</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: Bot Templates */}
                <section className={styles.guideSection}>
                    <h2>Choose a Bot for Your Business Needs</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.guideTable}>
                            <thead>
                                <tr>
                                    <th>Bot Type</th>
                                    <th>Function</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bots.map((bot, i) => (
                                    <tr key={i}>
                                        <td><strong>{bot.type}</strong></td>
                                        <td>{bot.function}</td>
                                        <td>{bot.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 5: Integration Ecosystem */}
                <section className={styles.guideSection}>
                    <h2>Connect with Your Favorite Tools</h2>
                    <p>Seamlessly integrate with 60+ plug & play integrations to supercharge your marketing.</p>
                    <div className={styles.integrationGrid}>
                        {['Shopify', 'WooCommerce', 'Woo', 'Salesforce', 'HubSpot', 'Zoho CRM', 'Zapier', 'Razorpay', 'PayU'].map((tool, i) => (
                            <div key={i} className={styles.integrationItem}>{tool}</div>
                        ))}
                    </div>
                </section>

                {/* Section 6: Success Stories */}
                <section className={styles.guideSection}>
                    <h2>Real-World Success Stories</h2>
                    <div className={styles.storiesGrid}>
                        <blockquote className={styles.storyCard}>
                            <p className={styles.storyQuote}>"Our customer engagement increased from 35% to 90% with Smart Retargeting. It's been a game changer for our business."</p>
                            <cite className={styles.storyAuthor}>— Akash Jain, EdTech Entrepreneur</cite>
                        </blockquote>
                        <blockquote className={styles.storyCard}>
                            <p className={styles.storyQuote}>"Reduced Customer Acquisition Cost (CAC) by 52% and increased conversion rates by 66% in just three months."</p>
                            <cite className={styles.storyAuthor}>— Retail Client Case Study</cite>
                        </blockquote>
                    </div>
                </section>

                {/* Section 7: FAQ */}
                <section className={styles.faqSection}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <h3>Do I need coding skills to create a chatbot?</h3>
                            <p>No. You can design conversations visually using a drag-and-drop builder. Simply choose triggers, add messages, and set actions.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Is this built on the Official WhatsApp API?</h3>
                            <p>Yes, the platform is powered by the Official WhatsApp Business API, ensuring high deliverability, security, and compliance.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can the chatbot handle payments?</h3>
                            <p>Absolutely. Your chatbot can collect payments through supported gateways and share live order tracking updates.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I combine AI with human support?</h3>
                            <p>Yes. You can use a hybrid model where AI handles routine tasks and seamlessly hands over complex queries to a live human agent.</p>
                        </div>
                    </div>
                </section>

                {/* Conclusion Call to Action */}
                <section className={styles.ctaBanner}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to automate your business?</h3>
                        <p>Start your 14-day free trial today and build your first chatbot.</p>
                        <button className={styles.guidePrimaryBtn}>Start Free Trial</button>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default UltimateGuide;
