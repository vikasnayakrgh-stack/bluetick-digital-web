import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component ensures that navigating to any route (e.g. from footer links)
 * always scrolls the window back to the top (0, 0), while properly handling hash anchors.
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Anchor navigation (e.g., /#showcase or /pricing/ai-automation#whatsapp)
            const scrollToHash = () => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    return true;
                }
                return false;
            };

            if (!scrollToHash()) {
                const timer = setTimeout(scrollToHash, 120);
                return () => clearTimeout(timer);
            }
            return;
        }

        // Standard page navigation: instantly reset scroll position to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
