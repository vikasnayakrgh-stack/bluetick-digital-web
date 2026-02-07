import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="Bluetick Digital" />
                            <span>Bluetick Digital</span>
                        </Link>
                        <p className={styles.tagline}>
                            Leading WhatsApp Automation Agency for Indian SMBs. Official Meta Business Partner & AI-first solution provider.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Linkedin"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="/#api">WhatsApp API</a></li>
                            <li><a href="/#automation">AI Chatbots</a></li>
                            <li><a href="/#broadcast">Broadcast Services</a></li>
                            <li><a href="/#forms">Smart Forms</a></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="/#pricing">Pricing</a></li>
                            <li><a href="/#cases">Case Studies</a></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Bluetick Digital. All rights reserved. Built with AI Priya.</p>
                    <div className={styles.legal}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
