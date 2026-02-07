import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
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
                    <img src={logo} alt="Bluetick Digital Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Bluetick</span>
                </Link>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <div className={styles.navLinks}>
                        <a href="/#features" className={styles.navLink} onClick={closeMenu}>Solutions</a>
                        <Link to="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
                        <a href="/#pricing" className={styles.navLink} onClick={closeMenu}>Pricing</a>
                    </div>
                    <div className={styles.actions}>
                        <a href="#login" className={styles.loginBtn} onClick={closeMenu}>Book a Demo</a>
                        <a href="#signup" className={styles.signupBtn} onClick={closeMenu}>Try for Free</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
