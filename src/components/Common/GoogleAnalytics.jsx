import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieConsentContext';

const GA_MEASUREMENT_ID = 'G-SE70377X8B';

/**
 * GoogleAnalytics: Loads Google Analytics GA4 only if the user has consented to Analytics cookies,
 * and tracks virtual pageviews across client-side route transitions.
 */
const GoogleAnalytics = () => {
    const { consent } = useCookieConsent();
    const location = useLocation();

    // 1. Initialize GA4 script asynchronously upon cookie consent
    useEffect(() => {
        if (!consent?.analytics) return;
        if (window.gtag) return;

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            page_path: location.pathname + location.search,
            anonymize_ip: true,
        });
    }, [consent?.analytics]);

    // 2. Track virtual pageviews on React Router route changes
    useEffect(() => {
        if (!consent?.analytics || !window.gtag) return;

        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: location.pathname + location.search,
        });
    }, [location.pathname, location.search, consent?.analytics]);

    return null;
};

export default GoogleAnalytics;
