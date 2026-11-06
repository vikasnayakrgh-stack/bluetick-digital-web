/**
 * BLUETICK DIGITAL — ANALYTICS & CONVERSION EVENT DISPATCHER
 * Centralized utility for dispatching structured GA4 events and Meta Pixel conversions.
 */

/**
 * Dispatch a generic GA4 event safely
 * @param {Object} params
 * @param {string} params.action - Event name / action (e.g., 'generate_lead', 'click', 'select_content')
 * @param {string} [params.category] - Event category
 * @param {string} [params.label] - Event label / description
 * @param {number} [params.value] - Numeric value associated with the event
 */
export const trackGAEvent = ({ action, category, label, value, ...rest }) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  } catch (err) {
    console.debug('[GA4] Event dispatch error:', err);
  }
};

/**
 * Dispatch a Meta Pixel event safely
 * @param {string} eventName - Standard or custom event name (e.g. 'PageView', 'Contact', 'Lead')
 * @param {Object} [params] - Event parameters
 * @param {boolean} [isCustom] - Whether to use fbq('trackCustom') instead of fbq('track')
 */
export const trackMetaEvent = (eventName, params = {}, isCustom = false) => {
  if (typeof window === 'undefined' || !window.fbq) return;

  try {
    if (isCustom) {
      window.fbq('trackCustom', eventName, params);
    } else {
      window.fbq('track', eventName, params);
    }
  } catch (err) {
    console.debug('[MetaPixel] Event dispatch error:', err);
  }
};

/**
 * Track WhatsApp click-to-chat engagement across GA4 and Meta Pixel.
 * CRITICAL RULE: A WhatsApp click is categorized as 'engagement' / 'Contact',
 * and is NEVER tracked as a confirmed 'Lead' or 'Purchase'.
 * @param {string} context - Where the click occurred (e.g. 'hero_secondary', 'pricing_card_9999', 'final_cta')
 */
export const trackWhatsAppClick = (context = 'general') => {
  // 1. Google Analytics 4
  trackGAEvent({
    action: 'contact_whatsapp',
    category: 'engagement',
    label: `whatsapp_${context}`,
  });

  // 2. Meta Pixel — Standard Contact event (DO NOT count as Lead or Purchase)
  trackMetaEvent('Contact', {
    content_name: `whatsapp_${context}`,
    content_category: 'whatsapp_enquiry',
  });
};

/**
 * Track Lead & Audit Form Submissions (Confirmed Lead conversion)
 * @param {string} formName - Form identifier (e.g., 'free_audit_form')
 * @param {Object} [metadata] - Additional details (e.g., { requirement: 'new_website' })
 */
export const trackFormSubmission = (formName = 'free_audit_form', metadata = {}) => {
  // 1. Google Analytics 4
  trackGAEvent({
    action: 'generate_lead',
    category: 'conversion',
    label: formName,
    ...metadata,
  });

  // 2. Meta Pixel — Standard Lead conversion event
  trackMetaEvent('Lead', {
    content_name: formName,
    ...metadata,
  });
};

/**
 * Track key CTA button clicks
 * @param {string} buttonName - Name of the CTA button
 * @param {string} [destination] - Target link / section
 */
export const trackCtaClick = (buttonName, destination = '') => {
  trackGAEvent({
    action: 'click_cta',
    category: 'engagement',
    label: `${buttonName}${destination ? ` -> ${destination}` : ''}`,
  });
};

/**
 * Track Interactive Tools & Calculator usage
 * @param {string} toolName - Name of the tool (e.g., 'whatsapp_pricing_calculator', 'green_tick_checker')
 * @param {Object} [details] - Usage metadata
 */
export const trackToolUsage = (toolName, details = {}) => {
  trackGAEvent({
    action: 'use_tool',
    category: 'interactive_tools',
    label: toolName,
    ...details,
  });
};
