import React, { useEffect } from 'react';
import BackToTop from './BackToTop';
import WhatsAppBtn from './WhatsAppBtn';
import { useCookieConsent } from '../../context/CookieConsentContext';
import styles from './FloatingActions.module.css';

const FloatingActions = () => {
    const { hasChosen } = useCookieConsent();

    useEffect(() => {
        if (!hasChosen) {
            document.body.classList.add('hasCookieBanner');
        } else {
            document.body.classList.remove('hasCookieBanner');
        }
        return () => {
            document.body.classList.remove('hasCookieBanner');
        };
    }, [hasChosen]);

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
