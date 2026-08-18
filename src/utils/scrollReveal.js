/**
 * Lightweight scroll reveal utility using Intersection Observer
 * No external dependencies — pure vanilla JS
 * 
 * Usage:
 * 1. Add .reveal-on-scroll class to elements you want to animate
 * 2. Optionally add .stagger-1, .stagger-2, etc. for delayed reveals
 * 3. Call initScrollReveal() in your App.jsx or main.jsx
 */

export function initScrollReveal(options = {}) {
  // Reveal elements immediately if user prefers reduced motion
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll(
      '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-scale-up, .reveal-fade'
    ).forEach((el) => el.classList.add('is-visible'));
    return { disconnect: () => {}, observe: () => {}, unobserve: () => {} };
  }

  const {
    rootMargin = '0px 0px -100px 0px', // Trigger when 100px from bottom
    threshold = 0.1, // 10% visible
    animateOnce = true, // Only animate once per element
  } = options;

  const revealElements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-scale-up, .reveal-fade'
  );

  if (!revealElements.length) {
    console.log('[ScrollReveal] No elements found to animate');
    return;
  }

  console.log(`[ScrollReveal] Initializing ${revealElements.length} elements`);

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          if (animateOnce) {
            revealObserver.unobserve(entry.target);
          }
        } else if (!animateOnce) {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      rootMargin,
      threshold,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Return observer for manual cleanup if needed
  return {
    disconnect: () => revealObserver.disconnect(),
    observe: (el) => revealObserver.observe(el),
    unobserve: (el) => revealObserver.unobserve(el),
  };
}

/**
 * Reveal specific element manually (for dynamic content)
 * @param {HTMLElement} element 
 */
export function revealElement(element) {
  if (!element) return;
  element.classList.add('is-visible');
}

/**
 * Hide specific element manually
 * @param {HTMLElement} element 
 */
export function hideElement(element) {
  if (!element) return;
  element.classList.remove('is-visible');
}
