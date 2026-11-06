/**
 * BLUETICK DIGITAL — UTM PARAMETER CAPTURE & ATTRIBUTION UTILITY
 * Preserves marketing campaign parameters across page sessions for Meta Ads & Google Ads.
 */

const UTM_STORAGE_KEY = 'bluetick_campaign_attribution';

/**
 * Capture UTM query parameters from URL and store in sessionStorage.
 * @returns {Object} Extracted or stored UTM parameters
 */
export const captureUtmParams = () => {
  if (typeof window === 'undefined') return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'fbclid',
      'gclid'
    ];

    const currentUtms = {};
    let foundAny = false;

    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        currentUtms[key] = value;
        foundAny = true;
      }
    });

    if (foundAny) {
      currentUtms.captured_at = new Date().toISOString();
      currentUtms.landing_page = window.location.pathname;
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUtms));
      return currentUtms;
    }

    // Fall back to previously stored attribution within this session
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (err) {
    console.debug('[UTM] Error capturing parameters:', err);
    return {};
  }
};

/**
 * Retrieve currently stored campaign attribution data
 * @returns {Object} Stored attribution parameters
 */
export const getStoredUtmParams = () => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (err) {
    return {};
  }
};

