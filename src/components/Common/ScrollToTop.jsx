import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component ensures that navigating to any route (e.g. from footer links)
 * always scrolls the window back to the top (0, 0), while properly handling hash anchors.
 */
const HEADER_OFFSET = 84; // 72px fixed header + 12px visual breathing room

/**
 * Scroll safely to a DOM element accounting for the fixed navbar height.
 */
export const scrollToElementWithOffset = (element, offset = HEADER_OFFSET) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset - offset;
    window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
    });
    return true;
};

/**
 * Safely resolve a target element from a hash string that may include query parameters
 * (e.g., #audit?req=new_website -> ID "audit")
 */
export const resolveTargetElement = (rawHash) => {
    if (!rawHash) return null;
    const cleanId = (rawHash.replace(/^#/, '').split('?')[0] || '').trim();
    if (!cleanId) return null;
    return document.getElementById(cleanId);
};

/**
 * ScrollToTop component ensures that navigating to any route
 * scrolls back to top (0, 0) for standard page routes, while properly handling
 * hash anchors with queries, fixed header offset, and retry intervals for lazy routes.
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const attemptScroll = () => {
                const el = resolveTargetElement(hash);
                if (el) {
                    scrollToElementWithOffset(el);
                    return true;
                }
                return false;
            };

            if (!attemptScroll()) {
                const timer1 = setTimeout(attemptScroll, 60);
                const timer2 = setTimeout(attemptScroll, 180);
                const timer3 = setTimeout(attemptScroll, 400);
                return () => {
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                    clearTimeout(timer3);
                };
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

    // Handle in-page hashchange events (e.g. clicking an anchor while already on the page)
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash) {
                const el = resolveTargetElement(window.location.hash);
                if (el) {
                    scrollToElementWithOffset(el);
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return null;
};

export default ScrollToTop;
