import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../../utils/analytics';
import styles from './Header.module.css';

/**
 * Solutions Mega-Menu Data
 * Grouped into WEBSITES, AI AUTOMATION, and WHATSAPP
 */
const SOLUTIONS_DATA = [
  {
    category: 'WEBSITES',
    items: [
      {
        title: 'Business Websites',
        desc: 'Sub-second React platforms built for high conversion',
        to: '/solutions/websites',
      },
      {
        title: 'E-commerce',
        desc: 'Custom storefronts, automated COD verification & cart recovery',
        to: '/solutions/ecommerce',
      },
    ],
  },
  {
    category: 'AI AUTOMATION',
    items: [
      {
        title: 'AI Automation',
        desc: 'Autonomous multi-step agents, workflows & CRM sync',
        to: '/solutions/ai-automation',
      },
      {
        title: 'AI Sales Agent',
        desc: 'Interactive 24/7 sales consultant demo (Try Priya)',
        to: '/solutions/ai-automation',
        action: 'open_ai_chat',
      },
      {
        title: 'AI Customer Support',
        desc: '24/7 autonomous support, ticket resolution & smart triage',
        to: '/solutions/ai-automation',
      },
      {
        title: 'Lead Qualification',
        desc: 'Sub-30 second intent scoring & calendar routing',
        to: '/blog/automate-lead-qualification-whatsapp-ai-chatbot',
      },
      {
        title: 'Automated Follow-ups',
        desc: 'Multi-touch WhatsApp & email reminder cadences',
        to: '/solutions/whatsapp-automation',
      },
    ],
  },
  {
    category: 'WHATSAPP',
    items: [
      {
        title: 'WhatsApp API',
        desc: 'Official Meta WABA onboarding, team inbox & broadcasts',
        to: '/solutions/whatsapp-automation',
      },
      {
        title: 'WhatsApp Automation',
        desc: '24/7 conversational chatbots & trigger automation',
        to: '/solutions/whatsapp-automation',
      },
    ],
  },
];

/**
 * Industries Dropdown Data
 */
const INDUSTRIES_DATA = [
  {
    title: 'E-commerce',
    desc: 'COD verification, cart recovery & 24/7 shopper support',
    to: '/industries/ecommerce',
  },
  {
    title: 'Manufacturing',
    desc: 'Automated RFQ intake, instant spec sheets & distributor routing',
    to: '/industries/manufacturing',
  },
  {
    title: 'Startups',
    desc: 'Fast sprint deployments, automated onboarding & scalable tech',
    to: '/industries/startups',
  },
  {
    title: 'Local Businesses',
    desc: 'Local search growth & automated WhatsApp appointment booking',
    to: '/industries/local-business',
  },
];

/**
 * Flattened lists for Mobile Accordions
 */
const MOBILE_SOLUTIONS = [
  { title: 'Websites', to: '/solutions/websites' },
  { title: 'E-commerce', to: '/solutions/ecommerce' },
  { title: 'AI Automation', to: '/solutions/ai-automation' },
  { title: 'AI Sales Agent', to: '/solutions/ai-automation', action: 'open_ai_chat' },
  { title: 'AI Customer Support', to: '/solutions/ai-automation' },
  { title: 'Lead Qualification', to: '/blog/automate-lead-qualification-whatsapp-ai-chatbot' },
  { title: 'Automated Follow-ups', to: '/solutions/whatsapp-automation' },
  { title: 'WhatsApp API', to: '/solutions/whatsapp-automation' },
  { title: 'WhatsApp Automation', to: '/solutions/whatsapp-automation' },
];

const MOBILE_INDUSTRIES = [
  { title: 'E-commerce', to: '/industries/ecommerce' },
  { title: 'Manufacturing', to: '/industries/manufacturing' },
  { title: 'Startups', to: '/industries/startups' },
  { title: 'Local Businesses', to: '/industries/local-business' },
];

/**
 * Pricing Dropdown Data
 * Grouped into WEBSITES & E-COMMERCE and AI AUTOMATION
 */
const PRICING_DROPDOWN_DATA = [
  {
    category: 'WEBSITES & E-COMMERCE',
    items: [
      {
        title: 'Website & E-commerce Pricing',
        desc: 'Clear pricing for business websites, premium websites and e-commerce.',
        to: '/pricing/websites',
      },
    ],
  },
  {
    category: 'AI AUTOMATION',
    items: [
      {
        title: 'AI Automation Pricing',
        desc: 'Automation systems, AI agents and business workflows.',
        to: '/pricing/ai-automation',
      },
      {
        title: 'WhatsApp Automation Pricing',
        desc: 'WhatsApp API and automation pricing.',
        to: '/pricing/ai-automation#whatsapp',
        isSubItem: true,
      },
    ],
  },
];

const MOBILE_PRICING = [
  { title: 'Website & E-commerce Pricing', to: '/pricing/websites' },
  { title: 'AI Automation Pricing', to: '/pricing/ai-automation' },
  { title: 'WhatsApp Automation Pricing', to: '/pricing/ai-automation#whatsapp' },
  { title: 'View All Pricing →', to: '/pricing' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | 'industries' | 'pricing' | null
  const [mobileAccordion, setMobileAccordion] = useState(null); // 'solutions' | 'industries' | 'pricing' | null

  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  const triggerRefs = {
    solutions: useRef(null),
    industries: useRef(null),
    pricing: useRef(null),
  };

  const menuRefs = {
    solutions: useRef(null),
    industries: useRef(null),
    pricing: useRef(null),
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Lock body scroll and handle Escape for mobile menu
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

  // Route change cleanup
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setMobileAccordion(null);
    document.body.style.overflow = '';
  }, [location.pathname, location.hash]);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleToggleDropdown = (e, menuName) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const handleTriggerKeyDown = (e, menuName) => {
    if (e.key === 'ArrowDown' || ((e.key === 'Enter' || e.key === ' ') && menuName !== 'pricing')) {
      e.preventDefault();
      setActiveDropdown(menuName);
      setTimeout(() => {
        const firstItem = menuRefs[menuName].current?.querySelector('a, button');
        firstItem?.focus();
      }, 50);
    } else if (e.key === 'Escape') {
      if (activeDropdown) {
        e.preventDefault();
        setActiveDropdown(null);
      }
    }
  };

  const handleMenuKeyDown = (e, menuName) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setActiveDropdown(null);
      triggerRefs[menuName].current?.focus();
      return;
    }

    const menuEl = menuRefs[menuName].current;
    if (!menuEl) return;
    const items = Array.from(menuEl.querySelectorAll('a, button'));
    if (!items.length) return;
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex]?.focus();
    }
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setMobileAccordion(null);
  };

  // Launch AI Priya Chat
  const handleTryAIClick = (e) => {
    e.preventDefault();
    trackCtaClick('navbar_try_ai_sales_agent', 'ai_chat_modal');
    if (typeof window !== 'undefined') {
      if (window.openAIPriyaChat) {
        window.openAIPriyaChat();
      } else {
        window.dispatchEvent(new CustomEvent('bluetick:open-ai-chat'));
      }
    }
    closeAll();
  };

  // Active state evaluation
  const isSolutionsActive = location.pathname.startsWith('/solutions');
  const isIndustriesActive = location.pathname.startsWith('/industries');
  const isWorkActive = location.hash === '#showcase';
  const isPricingActive = location.pathname.startsWith('/pricing') || location.hash === '#pricing';
  const isAboutActive = location.pathname === '/about';
  const isBlogActive = location.pathname.startsWith('/blog');

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeAll} aria-label="Bluetick Digital Home">
          <img src="/assets/logo-icon.png" alt="" className={styles.logoImage} />
          <span className={styles.logoText}>
            Bluetick<span className={styles.logoAccent}>Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation List (No floating pill container) */}
        <nav className={styles.desktopNav} ref={navRef} aria-label="Main Navigation">
          {/* Solutions Dropdown */}
          <div
            className={`${styles.navItem} ${activeDropdown === 'solutions' ? styles.dropdownOpen : ''}`}
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={triggerRefs.solutions}
              id="nav-trigger-solutions"
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                isSolutionsActive || activeDropdown === 'solutions' ? styles.navLinkActive : ''
              }`}
              onClick={(e) => handleToggleDropdown(e, 'solutions')}
              onKeyDown={(e) => handleTriggerKeyDown(e, 'solutions')}
              aria-expanded={activeDropdown === 'solutions'}
              aria-haspopup="true"
              aria-controls="nav-menu-solutions"
            >
              <span>Solutions</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === 'solutions' ? styles.chevronRotated : ''
                }`}
              />
            </button>

            {/* Solutions Mega-Menu Panel */}
            <div
              ref={menuRefs.solutions}
              id="nav-menu-solutions"
              role="menu"
              aria-labelledby="nav-trigger-solutions"
              onKeyDown={(e) => handleMenuKeyDown(e, 'solutions')}
              className={`${styles.dropdownContent} ${styles.solutionsMegaMenu}`}
            >
              <div className={styles.megaMenuGrid}>
                {SOLUTIONS_DATA.map((group, gIdx) => (
                  <div key={gIdx} className={styles.megaMenuColumn}>
                    <div className={styles.columnHeader}>{group.category}</div>
                    <div className={styles.columnItems}>
                      {group.items.map((item, iIdx) => {
                        if (item.action === 'open_ai_chat') {
                          return (
                            <button
                              key={iIdx}
                              type="button"
                              role="menuitem"
                              className={styles.megaMenuItemBtn}
                              onClick={handleTryAIClick}
                            >
                              <div className={styles.itemTitle}>{item.title}</div>
                              <div className={styles.itemDesc}>{item.desc}</div>
                            </button>
                          );
                        }

                        return (
                          <Link
                            key={iIdx}
                            to={item.to}
                            role="menuitem"
                            className={styles.megaMenuItem}
                            onClick={closeAll}
                          >
                            <div className={styles.itemTitle}>{item.title}</div>
                            <div className={styles.itemDesc}>{item.desc}</div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className={`${styles.navItem} ${activeDropdown === 'industries' ? styles.dropdownOpen : ''}`}
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={triggerRefs.industries}
              id="nav-trigger-industries"
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                isIndustriesActive || activeDropdown === 'industries' ? styles.navLinkActive : ''
              }`}
              onClick={(e) => handleToggleDropdown(e, 'industries')}
              onKeyDown={(e) => handleTriggerKeyDown(e, 'industries')}
              aria-expanded={activeDropdown === 'industries'}
              aria-haspopup="true"
              aria-controls="nav-menu-industries"
            >
              <span>Industries</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === 'industries' ? styles.chevronRotated : ''
                }`}
              />
            </button>

            {/* Industries Dropdown Panel */}
            <div
              ref={menuRefs.industries}
              id="nav-menu-industries"
              role="menu"
              aria-labelledby="nav-trigger-industries"
              onKeyDown={(e) => handleMenuKeyDown(e, 'industries')}
              className={`${styles.dropdownContent} ${styles.industriesMenu}`}
            >
              <div className={styles.industriesList}>
                {INDUSTRIES_DATA.map((ind, idx) => (
                  <Link
                    key={idx}
                    to={ind.to}
                    role="menuitem"
                    className={styles.industryItem}
                    onClick={closeAll}
                  >
                    <div className={styles.itemTitle}>{ind.title}</div>
                    <div className={styles.itemDesc}>{ind.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Work (Direct link to demo showcase) */}
          <a
            href="/#showcase"
            className={`${styles.navLink} ${isWorkActive ? styles.navLinkActive : ''}`}
            onClick={closeAll}
          >
            Work
          </a>

          {/* Pricing Dropdown */}
          <div
            className={`${styles.navItem} ${activeDropdown === 'pricing' ? styles.dropdownOpen : ''}`}
            onMouseEnter={() => handleMouseEnter('pricing')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              ref={triggerRefs.pricing}
              id="nav-trigger-pricing"
              to="/pricing"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                isPricingActive || activeDropdown === 'pricing' ? styles.navLinkActive : ''
              }`}
              onClick={closeAll}
              onKeyDown={(e) => handleTriggerKeyDown(e, 'pricing')}
              aria-expanded={activeDropdown === 'pricing'}
              aria-haspopup="true"
              aria-controls="nav-menu-pricing"
            >
              <span>Pricing</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === 'pricing' ? styles.chevronRotated : ''
                }`}
              />
            </Link>

            {/* Pricing Dropdown Panel */}
            <div
              ref={menuRefs.pricing}
              id="nav-menu-pricing"
              role="menu"
              aria-labelledby="nav-trigger-pricing"
              onKeyDown={(e) => handleMenuKeyDown(e, 'pricing')}
              className={`${styles.dropdownContent} ${styles.pricingMenu}`}
            >
              <div className={styles.pricingContent}>
                {PRICING_DROPDOWN_DATA.map((group, gIdx) => (
                  <div key={gIdx} className={styles.pricingSection}>
                    <div className={styles.pricingEyebrow}>{group.category}</div>
                    <div className={styles.pricingItems}>
                      {group.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          to={item.to}
                          role="menuitem"
                          className={`${styles.pricingItem} ${item.isSubItem ? styles.pricingSubItem : ''}`}
                          onClick={closeAll}
                        >
                          <div className={styles.pricingItemHeader}>
                            <span className={styles.pricingItemTitle}>{item.title}</span>
                            <ArrowRight size={13} className={styles.pricingArrow} />
                          </div>
                          <span className={styles.pricingItemDesc}>{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className={styles.pricingDivider} />

                <Link
                  to="/pricing"
                  role="menuitem"
                  className={styles.pricingViewAll}
                  onClick={closeAll}
                >
                  <span>View All Pricing</span>
                  <ArrowRight size={14} className={styles.pricingArrow} />
                </Link>
              </div>
            </div>
          </div>

          {/* About (Direct link) */}
          <Link
            to="/about"
            className={`${styles.navLink} ${isAboutActive ? styles.navLinkActive : ''}`}
            onClick={closeAll}
          >
            About
          </Link>

          {/* Blog (Direct link) */}
          <Link
            to="/blog"
            className={`${styles.navLink} ${isBlogActive ? styles.navLinkActive : ''}`}
            onClick={closeAll}
          >
            Blog
          </Link>
        </nav>

        {/* Right CTA - Desktop */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryCta}
            onClick={handleTryAIClick}
            aria-label="Try AI Sales Agent Demo"
          >
            <span>Try AI Sales Agent</span>
            <ArrowRight size={15} className={styles.ctaArrow} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className={styles.backdrop}
                onClick={closeAll}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-hidden="true"
              />

              {/* Mobile Drawer Menu */}
              <motion.div
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation Menu"
                className={styles.mobileDrawer}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <div className={styles.mobileNavList}>
                  {/* Solutions Accordion */}
                  <div className={styles.mobileAccordionGroup}>
                    <button
                      type="button"
                      className={`${styles.mobileAccordionBtn} ${
                        isSolutionsActive ? styles.mobileActiveText : ''
                      }`}
                      onClick={() =>
                        setMobileAccordion((prev) => (prev === 'solutions' ? null : 'solutions'))
                      }
                      aria-expanded={mobileAccordion === 'solutions'}
                      aria-controls="mobile-solutions-panel"
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          mobileAccordion === 'solutions' ? styles.chevronRotated : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileAccordion === 'solutions' && (
                        <motion.div
                          id="mobile-solutions-panel"
                          className={styles.mobileAccordionPanel}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {MOBILE_SOLUTIONS.map((item, idx) => {
                            if (item.action === 'open_ai_chat') {
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  className={styles.mobileSubLinkBtn}
                                  onClick={handleTryAIClick}
                                >
                                  {item.title}
                                </button>
                              );
                            }

                            return (
                              <Link
                                key={idx}
                                to={item.to}
                                className={styles.mobileSubLink}
                                onClick={closeAll}
                              >
                                {item.title}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Industries Accordion */}
                  <div className={styles.mobileAccordionGroup}>
                    <button
                      type="button"
                      className={`${styles.mobileAccordionBtn} ${
                        isIndustriesActive ? styles.mobileActiveText : ''
                      }`}
                      onClick={() =>
                        setMobileAccordion((prev) => (prev === 'industries' ? null : 'industries'))
                      }
                      aria-expanded={mobileAccordion === 'industries'}
                      aria-controls="mobile-industries-panel"
                    >
                      <span>Industries</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          mobileAccordion === 'industries' ? styles.chevronRotated : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileAccordion === 'industries' && (
                        <motion.div
                          id="mobile-industries-panel"
                          className={styles.mobileAccordionPanel}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {MOBILE_INDUSTRIES.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.to}
                              className={styles.mobileSubLink}
                              onClick={closeAll}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Direct Link: Work */}
                  <a
                    href="/#showcase"
                    className={`${styles.mobileDirectLink} ${
                      isWorkActive ? styles.mobileActiveText : ''
                    }`}
                    onClick={closeAll}
                  >
                    Work
                  </a>

                  {/* Pricing Accordion */}
                  <div className={styles.mobileAccordionGroup}>
                    <button
                      type="button"
                      className={`${styles.mobileAccordionBtn} ${
                        isPricingActive ? styles.mobileActiveText : ''
                      }`}
                      onClick={() =>
                        setMobileAccordion((prev) => (prev === 'pricing' ? null : 'pricing'))
                      }
                      aria-expanded={mobileAccordion === 'pricing'}
                      aria-controls="mobile-pricing-panel"
                    >
                      <span>Pricing</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          mobileAccordion === 'pricing' ? styles.chevronRotated : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileAccordion === 'pricing' && (
                        <motion.div
                          id="mobile-pricing-panel"
                          className={styles.mobileAccordionPanel}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {MOBILE_PRICING.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.to}
                              className={`${styles.mobileSubLink} ${
                                item.to === '/pricing' ? styles.mobileSubLinkHighlight : ''
                              }`}
                              onClick={closeAll}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Direct Link: About */}
                  <Link
                    to="/about"
                    className={`${styles.mobileDirectLink} ${
                      isAboutActive ? styles.mobileActiveText : ''
                    }`}
                    onClick={closeAll}
                  >
                    About
                  </Link>

                  {/* Direct Link: Blog */}
                  <Link
                    to="/blog"
                    className={`${styles.mobileDirectLink} ${
                      isBlogActive ? styles.mobileActiveText : ''
                    }`}
                    onClick={closeAll}
                  >
                    Blog
                  </Link>
                </div>

                {/* Primary CTA Button */}
                <div className={styles.mobileCtaWrapper}>
                  <button
                    type="button"
                    className={styles.mobilePrimaryCta}
                    onClick={handleTryAIClick}
                  >
                    <span>Try AI Sales Agent</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
