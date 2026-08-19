import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import logo from '../../assets/logo-icon.png';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './Footer.module.css';

const Footer = () => {
    const { openPreferences } = useCookieConsent();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topGrid}>
                    <div className={styles.brandCol}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="Bluetick Digital" className={styles.logoImg} />
                            <span className={styles.logoText}>Bluetick<span>Digital</span></span>
                        </Link>
                        <p className={styles.tagline}>
                            AI-powered Digital Transformation Partner. We build high-performance websites and connected AI automation systems that scale your business.
                        </p>
                        <div className={styles.trustBadge}>
                            <ShieldCheck size={18} className={styles.shieldIcon} />
                            <span>Enterprise Security &amp; Data Isolation</span>
                        </div>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Solutions</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/solutions/websites">Business Websites</Link></li>
                            <li><Link to="/solutions/ecommerce">E-commerce Stores</Link></li>
                            <li><Link to="/solutions/ai-automation">AI Automation Systems</Link></li>
                            <li><Link to="/solutions/whatsapp-automation">WhatsApp API Workflows</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Industries</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/industries/ecommerce">E-commerce Brands</Link></li>
                            <li><Link to="/industries/manufacturing">Manufacturers</Link></li>
                            <li><Link to="/industries/startups">Startups &amp; Tech</Link></li>
                            <li><Link to="/industries/local-business">Real Estate &amp; Services</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Knowledge Hub</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/blog">All Guides &amp; Insights</Link></li>
                            <li><Link to="/blog/website-development-cost-in-india-2026">Website Cost Guide 2026</Link></li>
                            <li><Link to="/blog/whatsapp-chatbot-automation">WhatsApp Chatbot Guide</Link></li>
                            <li><Link to="/whatsapp-api-pricing-india">WhatsApp Calculator</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/about">About Bluetick</Link></li>
                            <li><a href="/#showcase">Projects &amp; Showcase</a></li>
                            <li><a href="/#how-it-works">How It Works</a></li>
                            <li><a href="/#audit">Get Free Audit</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.middleBar}>
                    <div className={styles.hqBox}>
                        <span className={styles.hqLabel}>Headquarters:</span>
                        <span className={styles.hqAddress}>Raipur, Chhattisgarh | Serving Pan-India &amp; Remote Clients</span>
                    </div>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="#" aria-label="Linkedin"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} Bluetick Digital. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className={styles.dot}>•</span>
                        <Link to="/terms">Terms of Service</Link>
                        <span className={styles.dot}>•</span>
                        <Link to="/refund">Refund Policy</Link>
                        <span className={styles.dot}>•</span>
                        <Link to="/cookies">Cookie Policy</Link>
                        <span className={styles.dot}>•</span>
                        <Link to="/acceptable-use">Acceptable Use</Link>
                        <span className={styles.dot}>•</span>
                        <button
                            type="button"
                            onClick={openPreferences}
                            className={styles.cookiePrefBtn}
                            aria-label="Manage cookie preferences"
                        >
                            Cookie Preferences
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
