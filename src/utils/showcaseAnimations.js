import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initShowcaseAnimations({ section, header, watermark, cards, styles }) {
  const ctx = gsap.context(() => {
    // 1. Watermark Parallax Drift
    if (watermark && section) {
      gsap.to(watermark, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }

    // 2. Section Header Staggered Reveal
    if (header) {
      gsap.from(header.children, {
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // 3. Project Cards ScrollTrigger Cascade
    cards.forEach((cardEl) => {
      if (!cardEl) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardEl,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Main card box entrance
      tl.from(cardEl, {
        y: 45,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
      });

      // Story blocks stagger
      const storyBlocks = cardEl.querySelectorAll(`.${styles.storyBlock}`);
      if (storyBlocks.length) {
        tl.from(storyBlocks, {
          y: 18,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power2.out',
        }, '-=0.4');
      }

      // Capability tags pop-in
      const capTags = cardEl.querySelectorAll(`.${styles.capTag}`);
      if (capTags.length) {
        tl.from(capTags, {
          scale: 0.88,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: 'back.out(1.5)',
        }, '-=0.3');
      }

      // CTA button entrance
      const ctaBtn = cardEl.querySelector(`.${styles.liveDemoBtn}`);
      if (ctaBtn) {
        tl.from(ctaBtn, {
          y: 12,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.2');
      }
    });
  }, section);

  return () => ctx.revert();
}

export function animateBtnMouseMove(btn, x, y) {
  if (!btn) return;
  gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
}

export function animateBtnMouseLeave(btn) {
  if (!btn) return;
  gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
}

export function initBrowserPreviewAnimations({ frame, viewport, img }) {
  const ctx = gsap.context(() => {
    // QuickTo setters for ultra-smooth 60fps GPU mouse tracking
    const rotateYTo = gsap.quickTo(frame, "rotationY", { duration: 0.5, ease: "power2.out" });
    const rotateXTo = gsap.quickTo(frame, "rotationX", { duration: 0.5, ease: "power2.out" });
    const yTo = gsap.quickTo(frame, "y", { duration: 0.5, ease: "power2.out" });

    // Store references on frame DOM node for event handlers
    frame._gsapTilt = { rotateYTo, rotateXTo, yTo };

    // Cinematic Curtain Clip-Path Reveal on Scroll Entry
    if (img) {
      gsap.fromTo(viewport, 
        { clipPath: 'inset(18% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: frame,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(img,
        { scale: 1.08 },
        {
          scale: 1.0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: frame,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  }, frame);

  return () => {
    ctx.revert();
    if (frame) delete frame._gsapTilt;
  };
}
