import React, { useRef, useEffect } from 'react';
import { Lock, ArrowUpRight } from 'lucide-react';
import { getMotionCapabilities } from '../../utils/motionCapabilities';
import styles from './ProjectBrowserPreview.module.css';

const TILT_MAX = 3.5; // Restrained max degrees (±3.5°)

const ProjectBrowserPreview = ({ url, title, imageSrc, altText }) => {
    const capabilities = getMotionCapabilities();
    const frameRef = useRef(null);
    const viewportRef = useRef(null);
    const imageRef = useRef(null);
    const formattedUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    useEffect(() => {
        const frame = frameRef.current;
        const viewport = viewportRef.current;
        const img = imageRef.current;
        if (!frame || !viewport) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || !capabilities.allowComplexMotion) {
            return;
        }

        let cleanup;
        let isMounted = true;

        import('../../utils/showcaseAnimations').then((mod) => {
            if (!isMounted) return;
            cleanup = mod.initBrowserPreviewAnimations({ frame, viewport, img });
        });

        return () => {
            isMounted = false;
            if (cleanup) cleanup();
            if (frame) delete frame._gsapTilt;
        };
    }, [capabilities.allowComplexMotion]);

    const handleMouseMove = (e) => {
        const frame = frameRef.current;
        if (!frame || !frame._gsapTilt || !capabilities.allow3dTilt) return;
        const rect = frame.getBoundingClientRect();
        const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
        const yNorm = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1

        frame._gsapTilt.rotateYTo(xNorm * TILT_MAX);
        frame._gsapTilt.rotateXTo(-yNorm * TILT_MAX);
        frame._gsapTilt.yTo(yNorm * 2 - 3);
    };

    const handleMouseLeave = () => {
        const frame = frameRef.current;
        if (!frame || !frame._gsapTilt) return;
        frame._gsapTilt.rotateYTo(0);
        frame._gsapTilt.rotateXTo(0);
        frame._gsapTilt.yTo(0);
    };

    return (
        <div
            ref={frameRef}
            className={styles.browserFrame}
            onMouseMove={capabilities.allow3dTilt ? handleMouseMove : undefined}
            onMouseLeave={capabilities.allow3dTilt ? handleMouseLeave : undefined}
            style={capabilities.allow3dTilt ? {
                transformPerspective: 1200,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            } : undefined}
        >
            {/* Browser Chrome Header (Swiss Architectural Telemetry) */}
            <div className={styles.browserHeader}>
                <div className={styles.systemStatusTag}>
                    <span className={styles.statusDotLive} />
                    <span className={styles.statusLabel}>SYS_ONLINE</span>
                </div>

                <div className={styles.addressBar}>
                    <Lock size={12} className={styles.lockIcon} />
                    <span className={styles.urlText}>{formattedUrl}</span>
                </div>

                <div className={styles.chromeRight}>
                    <span className={styles.liveTag}>LIVE SYSTEM</span>
                </div>
            </div>

            {/* Editorial Curtain Clip-Path Reveal Viewport */}
            <div 
                ref={viewportRef}
                className={styles.previewViewport}
            >
                <img
                    ref={imageRef}
                    src={imageSrc}
                    alt={altText || `${title} Demo Preview`}
                    className={styles.previewImage}
                    loading="lazy"
                />
                
                {/* Subtle Hover Overlay with Direct Click Trigger */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imageOverlayLink}
                    aria-label={`Open ${title} live demo in a new tab`}
                >
                    <span className={styles.overlayPill}>
                        Explore Live System <ArrowUpRight size={16} className={styles.arrowIconShift} />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default ProjectBrowserPreview;

