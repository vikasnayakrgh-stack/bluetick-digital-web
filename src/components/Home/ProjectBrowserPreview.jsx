import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Lock, ArrowUpRight } from 'lucide-react';
import { getMotionCapabilities } from '../../utils/motionCapabilities';
import styles from './ProjectBrowserPreview.module.css';

const TILT_MAX = 3.0; // Restrained max degrees (±3°)
const TILT_SPRING = { stiffness: 280, damping: 26 };

const ProjectBrowserPreview = ({ url, title, imageSrc, altText }) => {
    const capabilities = getMotionCapabilities();
    const frameRef = useRef(null);
    const formattedUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const normX = useMotionValue(0.5);
    const normY = useMotionValue(0.5);

    const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
    const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);
    const rawTranslateY = useTransform(normY, [0, 1], [-3, -1]);

    const rotateX = useSpring(rawRotateX, TILT_SPRING);
    const rotateY = useSpring(rawRotateY, TILT_SPRING);
    const translateY = useSpring(rawTranslateY, TILT_SPRING);

    const handleMouseMove = (e) => {
        if (!capabilities.allow3dTilt) return;
        const el = frameRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        normX.set((e.clientX - rect.left) / rect.width);
        normY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        normX.set(0.5);
        normY.set(0.5);
    };

    return (
        <motion.div
            ref={frameRef}
            className={styles.browserFrame}
            onMouseMove={capabilities.allow3dTilt ? handleMouseMove : undefined}
            onMouseLeave={capabilities.allow3dTilt ? handleMouseLeave : undefined}
            style={capabilities.allow3dTilt ? {
                rotateX,
                rotateY,
                y: translateY,
                transformPerspective: 1200,
                transformStyle: 'preserve-3d'
            } : undefined}
            whileHover={!capabilities.allow3dTilt && capabilities.allowComplexMotion ? { y: -3 } : {}}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
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

            {/* Brikken Idea #1: Editorial Curtain Clip-Path Reveal Viewport */}
            <motion.div 
                className={styles.previewViewport}
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText || `${title} Demo Preview`}
                    className={styles.previewImage}
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1.0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            </motion.div>
        </motion.div>
    );
};

export default ProjectBrowserPreview;

