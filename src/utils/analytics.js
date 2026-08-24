/**
 * BLUETICK DIGITAL — GOOGLE ANALYTICS 4 (GA4) EVENT DISPATCHER
 * Centralized utility for dispatching structured GA4 events and conversions.
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
 * Track WhatsApp click-to-chat engagement
 * @param {string} context - Where the click occurred (e.g. 'floating_button', 'header', 'pricing_card')
 */
export const trackWhatsAppClick = (context = 'general') => {
  trackGAEvent({
    action: 'contact_whatsapp',
    category: 'engagement',
    label: `whatsapp_${context}`,
  });
};

/**
 * Track Lead & Audit Form Submissions
 * @param {string} formName - Form identifier (e.g., 'free_audit_form')
 * @param {Object} [metadata] - Additional details (e.g., { requirement: 'new_website' })
 */
export const trackFormSubmission = (formName = 'free_audit_form', metadata = {}) => {
  trackGAEvent({
    action: 'generate_lead',
    category: 'conversion',
    label: formName,
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
