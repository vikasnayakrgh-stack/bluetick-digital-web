import React from 'react';
import BackToTop from './BackToTop';
import WhatsAppBtn from './WhatsAppBtn';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './FloatingActions.module.css';

const FloatingActions = () => {
    const { hasChosen } = useCookieConsent();

    return (
        <aside 
            className={`${styles.floatingContainer} ${!hasChosen ? styles.hasCookieBanner : ''}`} 
            aria-label="Quick Actions"
        >
            <BackToTop />
            <WhatsAppBtn />
        </aside>
    );
};

export default FloatingActions;
