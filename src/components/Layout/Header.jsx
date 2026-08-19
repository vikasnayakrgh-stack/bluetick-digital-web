import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ArrowRight, Sparkles, Globe, Bot, 
  ShoppingBag, Factory, Rocket, Building2, MessageSquare, 
  CheckCircle2, Calculator, ShieldCheck, Zap, Layers, BookOpen, FileText 
} from 'lucide-react';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutRef = useRef(null);
    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Lock body scroll and handle Escape when mobile menu is open
    useEffect(() => {
        if (!isMenuOpen) {
            document.body.style.overflow = '';
            return;
        }
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    // Close on route change
    useEffect(() => {
        setActiveDropdown(null);
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    }, [location.pathname]);

    const handleMouseEnter = (menuName) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(menuName);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 220); // 220ms grace period so cursor movement never flickers
    };

    const handleToggleDropdown = (e, menuName) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdown(prev => prev === menuName ? null : menuName);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeAll = () => {
        setActiveDropdown(null);
        setIsMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link to="/" className={styles.logo} onClick={closeAll}>
                    <img src="/assets/logo-icon.png" alt="Bluetick Digital" className={styles.logoImage} />
                    <span className={styles.logoText}>
                        Bluetick<span className={styles.logoAccent}>Digital</span>
                    </span>
                </Link>

                {/* Center Floating Pill Nav - Desktop */}
                <nav className={styles.pillNav} ref={navRef}>
                    {/* WhatsApp API Dropdown */}
                    <div 
                        className={`${styles.dropdown} ${activeDropdown === 'whatsapp' ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => handleMouseEnter('whatsapp')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${activeDropdown === 'whatsapp' ? styles.navLinkActive : ''}`}
                            onClick={(e) => handleToggleDropdown(e, 'whatsapp')}
                            aria-expanded={activeDropdown === 'whatsapp'}
                        >
                            WhatsApp API <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'whatsapp' ? styles.chevronRotated : ''}`} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link to="/solutions/whatsapp-automation" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                                    <MessageSquare size={18} className={styles.iconGreen} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Official Meta WhatsApp API</div>
                                    <div className={styles.itemDesc}>WABA onboarding, team inbox & broadcasts</div>
                                </div>
                            </Link>
                            <Link to="/whatsapp-green-tick-checker" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <ShieldCheck size={18} className={styles.iconBlue} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Green Tick Verification</div>
                                    <div className={styles.itemDesc}>Official Meta verified badge assistance</div>
                                </div>
                            </Link>
                            <Link to="/whatsapp-api-pricing-india" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxCyan}`}>
                                    <Calculator size={18} className={styles.iconCyan} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>WhatsApp Cost Calculator</div>
                                    <div className={styles.itemDesc}>Instant Meta per-conversation pricing tool</div>
                                </div>
                            </Link>
                            <Link to="/blog/whatsapp-chatbot-automation" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <BookOpen size={18} className={styles.iconPurple} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Chatbot Automation Guide</div>
                                    <div className={styles.itemDesc}>24/7 lead qualification & sales blueprint</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* AI Agents Dropdown */}
                    <div 
                        className={`${styles.dropdown} ${activeDropdown === 'ai' ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => handleMouseEnter('ai')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${activeDropdown === 'ai' ? styles.navLinkActive : ''}`}
                            onClick={(e) => handleToggleDropdown(e, 'ai')}
                            aria-expanded={activeDropdown === 'ai'}
                        >
                            AI Agents <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'ai' ? styles.chevronRotated : ''}`} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link to="/solutions/ai-automation" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <Bot size={18} className={styles.iconPurple} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Custom AI Sales Agents</div>
                                    <div className={styles.itemDesc}>Autonomous lead qualification & CRM sync</div>
                                </div>
                            </Link>
                            <a href="/#business-system" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxAmber}`}>
                                    <Zap size={18} className={styles.iconAmber} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Autonomous Lead Engine</div>
                                    <div className={styles.itemDesc}>Sub-30s qualification & calendar booking</div>
                                </div>
                            </a>
                            <a href="/#demo" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <Sparkles size={18} className={styles.iconBlue} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Interactive AI Simulator</div>
                                    <div className={styles.itemDesc}>Test live sales flows in real-time</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Websites & Systems Dropdown */}
                    <div 
                        className={`${styles.dropdown} ${activeDropdown === 'websites' ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => handleMouseEnter('websites')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${activeDropdown === 'websites' ? styles.navLinkActive : ''}`}
                            onClick={(e) => handleToggleDropdown(e, 'websites')}
                            aria-expanded={activeDropdown === 'websites'}
                        >
                            Websites <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'websites' ? styles.chevronRotated : ''}`} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link to="/solutions/websites" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <Globe size={18} className={styles.iconBlue} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>High-Converting Websites</div>
                                    <div className={styles.itemDesc}>Sub-second React platforms with lead pipelines</div>
                                </div>
                            </Link>
                            <Link to="/solutions/ecommerce" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxEmerald}`}>
                                    <ShoppingBag size={18} className={styles.iconEmerald} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>E-Commerce Platforms</div>
                                    <div className={styles.itemDesc}>D2C stores with COD verification & cart recovery</div>
                                </div>
                            </Link>
                            <Link to="/blog/website-development-cost-in-india-2026" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxCyan}`}>
                                    <FileText size={18} className={styles.iconCyan} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Website Cost Guide 2026</div>
                                    <div className={styles.itemDesc}>Transparent pricing guide & breakdown for India</div>
                                </div>
                            </Link>
                            <a href="/#ecosystem" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <Layers size={18} className={styles.iconPurple} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Connected Ecosystem</div>
                                    <div className={styles.itemDesc}>Website + WhatsApp + CRM unified architecture</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div 
                        className={`${styles.dropdown} ${activeDropdown === 'industries' ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => handleMouseEnter('industries')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${activeDropdown === 'industries' ? styles.navLinkActive : ''}`}
                            onClick={(e) => handleToggleDropdown(e, 'industries')}
                            aria-expanded={activeDropdown === 'industries'}
                        >
                            Industries <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'industries' ? styles.chevronRotated : ''}`} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link to="/industries/ecommerce" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxEmerald}`}>
                                    <ShoppingBag size={18} className={styles.iconEmerald} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>E-Commerce Brands</div>
                                    <div className={styles.itemDesc}>COD verification, cart recovery & 24/7 support</div>
                                </div>
                            </Link>
                            <Link to="/industries/manufacturing" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxAmber}`}>
                                    <Factory size={18} className={styles.iconAmber} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Manufacturing & B2B</div>
                                    <div className={styles.itemDesc}>RFQ automation & instant catalog routing</div>
                                </div>
                            </Link>
                            <Link to="/industries/startups" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <Rocket size={18} className={styles.iconPurple} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Startups & Tech</div>
                                    <div className={styles.itemDesc}>Rapid sprint deployments & automated onboarding</div>
                                </div>
                            </Link>
                            <Link to="/industries/local-business" className={styles.dropdownItem} onClick={closeAll}>
                                <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                                    <Building2 size={18} className={styles.iconGreen} />
                                </div>
                                <div className={styles.itemTextWrap}>
                                    <div className={styles.itemTitle}>Local & Real Estate</div>
                                    <div className={styles.itemDesc}>24/7 site visit appointment booking</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <a href="/#pricing" className={styles.navLink} onClick={closeAll}>Pricing</a>
                    <a href="/#showcase" className={styles.navLink} onClick={closeAll}>Case Studies</a>
                    <Link to="/blog" className={styles.navLink} onClick={closeAll}>Blog</Link>
                </nav>

                {/* Right Primary CTA - Desktop */}
                <div className={styles.actions}>
                    <motion.a
                      href="/#audit"
                      className={styles.auditBtn}
                      onClick={closeAll}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                        <span>Get Free Audit</span>
                        <ArrowRight size={15} className={styles.auditArrow} />
                    </motion.a>

                    <button 
                        className={styles.hamburger} 
                        onClick={toggleMenu} 
                        aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Drawer & Backdrop */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div 
                                className={styles.backdrop} 
                                onClick={closeAll}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                aria-hidden="true"
                            />
                            <motion.div
                              id="mobile-navigation"
                              role="dialog"
                              aria-modal="true"
                              aria-label="Mobile Navigation Menu"
                              className={styles.mobileMenu}
                              initial={{ opacity: 0, y: -16 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -16 }}
                              transition={{ duration: 0.2, ease: MOTION_TOKENS.ease.outExpo }}
                            >
                                <div className={styles.mobileGroupTitle}>Websites & E-Commerce (Primary Service)</div>
                                <Link to="/solutions/websites" className={styles.mobileLink} onClick={closeAll}>
                                    <Globe size={16} className={styles.mobileLinkIcon} />
                                    <span>High-Speed Business Websites</span>
                                </Link>
                                <Link to="/solutions/ecommerce" className={styles.mobileLink} onClick={closeAll}>
                                    <ShoppingBag size={16} className={styles.mobileLinkIcon} />
                                    <span>E-Commerce & D2C Stores</span>
                                </Link>

                                <div className={styles.mobileGroupTitle}>AI Automation & Agents</div>
                                <Link to="/solutions/ai-automation" className={styles.mobileLink} onClick={closeAll}>
                                    <Bot size={16} className={styles.mobileLinkIcon} />
                                    <span>24/7 Custom AI Sales & Support Bots</span>
                                </Link>
                                <a href="/#demo" className={styles.mobileLink} onClick={closeAll}>
                                    <Zap size={16} className={styles.mobileLinkIcon} />
                                    <span>Interactive WhatsApp Simulator Demo</span>
                                </a>

                                <div className={styles.mobileGroupTitle}>WhatsApp Business API</div>
                                <Link to="/solutions/whatsapp-automation" className={styles.mobileLink} onClick={closeAll}>
                                    <MessageSquare size={16} className={styles.mobileLinkIcon} />
                                    <span>Official Meta WhatsApp API Setup</span>
                                </Link>
                                <Link to="/whatsapp-api-pricing-india" className={styles.mobileLink} onClick={closeAll}>
                                    <Calculator size={16} className={styles.mobileLinkIcon} />
                                    <span>WhatsApp Message Cost Calculator</span>
                                </Link>
                                <Link to="/whatsapp-green-tick-checker" className={styles.mobileLink} onClick={closeAll}>
                                    <CheckCircle2 size={16} className={styles.mobileLinkIcon} />
                                    <span>Green Tick Verification Checker</span>
                                </Link>

                                <div className={styles.mobileGroupTitle}>Case Studies & Company</div>
                                <a href="/#showcase" className={styles.mobileLink} onClick={closeAll}>
                                    <Layers size={16} className={styles.mobileLinkIcon} />
                                    <span>Client Proof & Demo Systems</span>
                                </a>
                                <Link to="/about" className={styles.mobileLink} onClick={closeAll}>
                                    <Building2 size={16} className={styles.mobileLinkIcon} />
                                    <span>About Bluetick Digital</span>
                                </Link>

                                <div className={styles.mobileGroupTitle}>Knowledge Hub & Pricing</div>
                                <Link to="/blog" className={styles.mobileLink} onClick={closeAll}>
                                    <BookOpen size={16} className={styles.mobileLinkIcon} />
                                    <span>Knowledge Hub & Insights</span>
                                </Link>
                                <Link to="/blog/website-development-cost-in-india-2026" className={styles.mobileLink} onClick={closeAll}>
                                    <FileText size={16} className={styles.mobileLinkIcon} />
                                    <span>Website Cost Guide (2026)</span>
                                </Link>
                                <a href="/#pricing" className={styles.mobileLink} onClick={closeAll}>
                                    <ShieldCheck size={16} className={styles.mobileLinkIcon} />
                                    <span>Transparent Pricing Packages</span>
                                </a>

                                <a href="/#audit" className={styles.mobileCta} onClick={closeAll}>
                                    <span>Start a Project / Free Audit</span>
                                    <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
