import { useEffect } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';

const PIXEL_ID = '1411505880771110';

/**
 * FacebookPixel: Loads Meta Pixel only if the user has explicitly consented to Marketing / Advertising cookies.
 */
const FacebookPixel = () => {
    const { consent } = useCookieConsent();

    useEffect(() => {
        // Only load if user granted Marketing consent
        if (!consent?.marketing) return;

        // Prevent duplicate initialization
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

        // Initialize and track PageView
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');
    }, [consent?.marketing]);

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
