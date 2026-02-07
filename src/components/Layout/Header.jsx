import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.container} container`}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="Bluetick Digital Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Bluetick</span>
                </Link>

                <nav className={styles.nav}>
                    <div className={styles.navLinks}>
                        <a href="/#features" className={styles.navLink}>Solutions</a>
                        <a href="/#pricing" className={styles.navLink}>Pricing</a>
                        <Link to="/blog" className={styles.navLink}>Resources</Link>
                    </div>
                    <div className={styles.actions}>
                        <a href="/dashboard" className={styles.loginBtn}>Dashboard</a>
                        <a href="#contact" className={styles.signupBtn}>Book My Demo</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
