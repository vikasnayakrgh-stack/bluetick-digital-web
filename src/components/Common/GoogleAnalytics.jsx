import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-SE70377X8B';

const GoogleAnalytics = () => {
    useEffect(() => {
        // Prevent duplicate initialization
        if (window.gtag) return;

        // Load gtag.js script
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
        gtag('config', GA_MEASUREMENT_ID);
    }, []);

    return null; // This component doesn't render anything
};

export default GoogleAnalytics;
