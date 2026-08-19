import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './CookieConsentBanner.module.css';

const CookieConsentBanner = () => {
    const {
        consent,
        hasChosen,
        isPreferencesOpen,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openPreferences,
        closePreferences
    } = useCookieConsent();

    const [analyticsToggle, setAnalyticsToggle] = useState(consent.analytics);
    const [marketingToggle, setMarketingToggle] = useState(consent.marketing);

    // Sync modal state whenever preferences modal opens
    useEffect(() => {
        if (isPreferencesOpen) {
            setAnalyticsToggle(consent.analytics);
            setMarketingToggle(consent.marketing);
        }
    }, [isPreferencesOpen, consent]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isPreferencesOpen) {
                closePreferences();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPreferencesOpen, closePreferences]);

    const handleSavePreferences = () => {
        savePreferences({
            analytics: analyticsToggle,
            marketing: marketingToggle
        });
    };

    return (
        <>
            {/* 1. Floating Banner on First Visit */}
            <AnimatePresence>
                {!hasChosen && (
                    <motion.aside
                        role="region"
                        aria-label="Cookie consent banner"
                        className={styles.banner}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.content}>
                            <Cookie size={22} className={styles.icon} aria-hidden="true" />
                            <p className={styles.text}>
                                We use essential cookies to ensure our website functions properly, and optional analytics &amp; marketing cookies to understand usage and improve performance. Learn more in our{' '}
                                <Link to="/cookies" className={styles.policyLink}>
                                    Cookie Policy
                                </Link>.
                            </p>
                        </div>
                        <div className={styles.actions}>
                            <button
                                type="button"
                                onClick={acceptAll}
                                className={styles.acceptBtn}
                            >
                                Accept All
                            </button>
                            <button
                                type="button"
                                onClick={rejectNonEssential}
                                className={styles.rejectBtn}
                            >
                                Reject Non-Essential
                            </button>
                            <button
                                type="button"
                                onClick={openPreferences}
                                className={styles.prefBtn}
                            >
                                Manage Preferences
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* 2. Preferences Modal (Opened from Banner or Footer "Cookie Preferences") */}
            <AnimatePresence>
                {isPreferencesOpen && (
                    <div
                        className={styles.modalBackdrop}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) closePreferences();
                        }}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="cookie-modal-title"
                            className={styles.modalDialog}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.modalHeader}>
                                <h3 id="cookie-modal-title" className={styles.modalTitle}>
                                    Cookie &amp; Privacy Preferences
                                </h3>
                                <button
                                    type="button"
                                    onClick={closePreferences}
                                    className={styles.closeBtn}
                                    aria-label="Close cookie preferences"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className={styles.modalDescription}>
                                Choose which cookie categories you allow. Essential cookies are required for basic site navigation and security. Review our{' '}
                                <Link to="/cookies" onClick={closePreferences} className={styles.policyLink}>
                                    Cookie Policy
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy" onClick={closePreferences} className={styles.policyLink}>
                                    Privacy Policy
                                </Link>{' '}
                                for full details.
                            </p>

                            <div className={styles.categoriesList}>
                                {/* Essential */}
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryTop}>
                                        <h4 className={styles.categoryName}>1. Strictly Essential Cookies</h4>
                                        <span className={styles.lockedBadge}>Always Active</span>
                                    </div>
                                    <p className={styles.categoryDesc}>
                                        Necessary for core security, session state, navigation, and system stability. These cannot be disabled.
                                    </p>
                                </div>

                                {/* Analytics */}
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryTop}>
                                        <label htmlFor="analytics-toggle" className={styles.categoryName} style={{ cursor: 'pointer' }}>
                                            2. Performance &amp; Analytics Cookies
                                        </label>
                                        <label className={styles.switchLabel}>
                                            <input
                                                id="analytics-toggle"
                                                type="checkbox"
                                                className={styles.switchInput}
                                                checked={analyticsToggle}
                                                onChange={(e) => setAnalyticsToggle(e.target.checked)}
                                                aria-label="Enable Performance and Analytics cookies"
                                            />
                                            <span className={styles.switchSlider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.categoryDesc}>
                                        Includes Google Analytics (GA4). Helps us analyze aggregated visitor metrics and page performance without identifying individuals.
                                    </p>
                                </div>

                                {/* Marketing */}
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryTop}>
                                        <label htmlFor="marketing-toggle" className={styles.categoryName} style={{ cursor: 'pointer' }}>
                                            3. Advertising &amp; Marketing Cookies
                                        </label>
                                        <label className={styles.switchLabel}>
                                            <input
                                                id="marketing-toggle"
                                                type="checkbox"
                                                className={styles.switchInput}
                                                checked={marketingToggle}
                                                onChange={(e) => setMarketingToggle(e.target.checked)}
                                                aria-label="Enable Advertising and Marketing cookies"
                                            />
                                            <span className={styles.switchSlider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.categoryDesc}>
                                        Includes Meta Pixel and conversion tracking. Helps us measure campaign performance and display relevant business solutions.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.modalActions}>
                                <button
                                    type="button"
                                    onClick={rejectNonEssential}
                                    className={styles.rejectBtn}
                                >
                                    Reject Non-Essential
                                </button>
                                <button
                                    type="button"
                                    onClick={acceptAll}
                                    className={styles.acceptBtn}
                                >
                                    Accept All
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSavePreferences}
                                    className="btn btn-outline"
                                    style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem' }}
                                >
                                    Save Choices
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CookieConsentBanner;
