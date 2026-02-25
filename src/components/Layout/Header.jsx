import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={`${styles.container} container`}>
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <img src="/assets/favicon.png" alt="Bluetick Digital Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Bluetick</span>
                </Link>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <div className={styles.navLinks}>
                        <div className={styles.dropdown}>
                            <span className={`${styles.navLink} ${styles.dropdownTrigger}`} style={{ cursor: 'pointer' }}>Free Tools</span>
                            <div className={styles.dropdownContent}>
                                <Link to="/whatsapp-api-cost-calculator" className={styles.dropdownItem} onClick={closeMenu}>WhatsApp Cost Calculator</Link>
                                <Link to="/whatsapp-green-tick-checker" className={styles.dropdownItem} onClick={closeMenu}>Green Tick Checker</Link>
                            </div>
                        </div>
                        <Link to="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
                        <a href="/#pricing" className={styles.navLink} onClick={closeMenu}>Pricing</a>
                    </div>
                    <div className={styles.actions}>
                        <a
                            href="https://wa.me/916261003050?text=Hi,%20I%20want%20to%20book%20a%20demo%20for%20AI%20Priya."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.loginBtn}
                            onClick={closeMenu}
                        >
                            Book a Demo
                        </a>
                        <a href="#signup" className={styles.signupBtn} onClick={closeMenu}>Try for Free</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
