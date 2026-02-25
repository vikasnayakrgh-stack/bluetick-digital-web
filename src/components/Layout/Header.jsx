import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isHome = location.pathname === '/' && location.hash !== '#pricing';
    const isTools = location.pathname.includes('/whatsapp-api-cost-calculator') || location.pathname.includes('/whatsapp-green-tick-checker');
    const isBlog = location.pathname === '/blog';
    const isPricing = location.hash === '#pricing';

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <img src="/assets/favicon.png" alt="Bluetick Digital Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Bluetick<span className={styles.logoAccent}>Digital</span></span>
                </Link>
            </div>

            {/* Center Pill Nav - desktop only */}
            <nav className={styles.pillNav}>
                <Link to="/" className={`${styles.navLink} ${isHome ? styles.navLinkActive : ''}`} onClick={closeMenu}>Home</Link>

                <div className={styles.dropdown}>
                    <span className={`${styles.navLink} ${isTools ? styles.navLinkActive : ''} ${styles.dropdownTrigger}`}>Free Tools</span>
                    <div className={styles.dropdownContent}>
                        <Link to="/whatsapp-api-cost-calculator" className={styles.dropdownItem} onClick={closeMenu}>WhatsApp Cost Calculator</Link>
                        <Link to="/whatsapp-green-tick-checker" className={styles.dropdownItem} onClick={closeMenu}>Green Tick Checker</Link>
                    </div>
                </div>

                <Link to="/blog" className={`${styles.navLink} ${isBlog ? styles.navLinkActive : ''}`} onClick={closeMenu}>Blog</Link>

                <a href="/#pricing" className={`${styles.navLink} ${isPricing ? styles.navLinkActive : ''}`} onClick={closeMenu}>Pricing</a>
            </nav>

            {/* Right actions - desktop */}
            <div className={styles.actions}>
                <a
                    href="https://wa.me/916261003050?text=Hi,%20I%20want%20to%20book%20a%20demo%20for%20AI%20Priya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                    onClick={closeMenu}
                >
                    Contact Us
                    <span className={styles.contactDot} title="AI Online"></span>
                </a>

                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
                    <Link to="/whatsapp-api-cost-calculator" className={styles.mobileLink} onClick={closeMenu}>Cost Calculator</Link>
                    <Link to="/whatsapp-green-tick-checker" className={styles.mobileLink} onClick={closeMenu}>Green Tick Checker</Link>
                    <Link to="/blog" className={styles.mobileLink} onClick={closeMenu}>Blog</Link>
                    <a href="/#pricing" className={styles.mobileLink} onClick={closeMenu}>Pricing</a>

                    <a
                        href="https://wa.me/916261003050?text=Hi,%20I%20want%20to%20book%20a%20demo%20for%20AI%20Priya."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileCta}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
