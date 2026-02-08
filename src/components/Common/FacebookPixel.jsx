import { useEffect } from 'react';

const PIXEL_ID = '1411505880771110';

const FacebookPixel = () => {
    useEffect(() => {
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
    }, []);

    // Render noscript fallback for users with JS disabled
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
