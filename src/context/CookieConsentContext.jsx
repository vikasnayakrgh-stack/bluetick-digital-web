import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'bt_cookie_consent_v1';

const DEFAULT_CONSENT = {
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: null
};

const CookieConsentContext = createContext({
    consent: DEFAULT_CONSENT,
    hasChosen: true,
    isPreferencesOpen: false,
    acceptAll: () => {},
    rejectNonEssential: () => {},
    savePreferences: () => {},
    openPreferences: () => {},
    closePreferences: () => {},
    resetConsent: () => {}
});

export const CookieConsentProvider = ({ children }) => {
    const [consent, setConsent] = useState(DEFAULT_CONSENT);
    const [hasChosen, setHasChosen] = useState(true); // Default true until mounted to avoid SSR flash
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                setConsent({
                    essential: true,
                    analytics: Boolean(parsed.analytics),
                    marketing: Boolean(parsed.marketing),
                    timestamp: parsed.timestamp || null
                });
                setHasChosen(true);
            } else {
                setHasChosen(false);
            }
        } catch (e) {
            console.warn('Unable to access localStorage for cookie consent', e);
            setHasChosen(false);
        }
    }, []);

    const persistConsent = (newConsent) => {
        const payload = {
            essential: true,
            analytics: Boolean(newConsent.analytics),
            marketing: Boolean(newConsent.marketing),
            timestamp: new Date().toISOString()
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            console.warn('Unable to save cookie consent to localStorage', e);
        }
        setConsent(payload);
        setHasChosen(true);
        setIsPreferencesOpen(false);
    };

    const acceptAll = () => {
        persistConsent({ analytics: true, marketing: true });
    };

    const rejectNonEssential = () => {
        persistConsent({ analytics: false, marketing: false });
    };

    const savePreferences = ({ analytics, marketing }) => {
        persistConsent({ analytics, marketing });
    };

    const openPreferences = () => {
        setIsPreferencesOpen(true);
    };

    const closePreferences = () => {
        setIsPreferencesOpen(false);
    };

    const resetConsent = () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        setConsent(DEFAULT_CONSENT);
        setHasChosen(false);
    };

    return (
        <CookieConsentContext.Provider
            value={{
                consent,
                hasChosen,
                isPreferencesOpen,
                acceptAll,
                rejectNonEssential,
                savePreferences,
                openPreferences,
                closePreferences,
                resetConsent
            }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
