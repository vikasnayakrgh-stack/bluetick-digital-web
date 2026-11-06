import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieConsentContext';

const PIXEL_ID = '1411505880771110';

/**
 * FacebookPixel: Loads Meta Pixel only if the user has explicitly consented to Marketing / Advertising cookies,
 * and tracks virtual pageviews across client-side route transitions.
 */
const FacebookPixel = () => {
    const { consent } = useCookieConsent();
    const location = useLocation();
    const lastTrackedPathRef = useRef(null);

    // 1. Initialize Meta Pixel script upon marketing consent
    useEffect(() => {
        if (!consent?.marketing) return;
        if (window.fbq) return;

        // Initialize Facebook Pixel
        (function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = true;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        // Initialize Pixel ID and track first PageView
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');
        lastTrackedPathRef.current = location.pathname + location.search;
    }, [consent?.marketing, location.pathname, location.search]);

    // 2. Track virtual PageView on React Router route changes
    useEffect(() => {
        if (!consent?.marketing || !window.fbq) return;

        const currentPath = location.pathname + location.search;
        // Skip if this path has already been tracked (avoids duplicate initial PageView)
        if (lastTrackedPathRef.current === currentPath) {
            return;
        }

        lastTrackedPathRef.current = currentPath;
        window.fbq('track', 'PageView');
    }, [location.pathname, location.search, consent?.marketing]);

    if (!consent?.marketing) return null;

    // Render noscript fallback only when marketing consent is granted
    return (
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>
    );
};

export default FacebookPixel;
