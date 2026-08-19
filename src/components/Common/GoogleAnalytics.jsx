import { useEffect } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';

const GA_MEASUREMENT_ID = 'G-SE70377X8B';

/**
 * GoogleAnalytics: Loads Google Analytics GA4 only if the user has explicitly consented to Analytics cookies.
 */
const GoogleAnalytics = () => {
    const { consent } = useCookieConsent();

    useEffect(() => {
        // Only load if user granted Analytics consent
        if (!consent?.analytics) return;

        // Prevent duplicate initialization
        if (window.gtag) return;

        // Load gtag.js script asynchronously
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            anonymize_ip: true
        });
    }, [consent?.analytics]);

    return null;
};

export default GoogleAnalytics;
