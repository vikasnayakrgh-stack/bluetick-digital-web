import { useEffect } from 'react';
import './MagneticCursor.css';

const MagneticCursor = () => {
    useEffect(() => {
        const ring = document.getElementById('cursor-ring');
        const dot = document.getElementById('cursor-dot');
        const lag = document.getElementById('cursor-lag');

        if (!ring || !dot || !lag) return;

        // Mouse position tracking
        let mouseX = 0, mouseY = 0;   // actual mouse
        let lagX = 0, lagY = 0;       // lagging trail position
        let ringX = 0, ringY = 0;     // ring position (smooth)
        let visible = false;
        let animationFrameId;

        // Show cursor on first move
        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!visible) {
                ring.style.opacity = '1';
                dot.style.opacity = '1';
                lag.style.opacity = '1';
                visible = true;
            }

            // Dot follows instantly
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        // Hide when cursor leaves window
        const onMouseLeave = () => {
            ring.style.opacity = '0';
            dot.style.opacity = '0';
            lag.style.opacity = '0';
            visible = false;
        };

        const onMouseEnter = () => {
            if (visible) {
                ring.style.opacity = '1';
                dot.style.opacity = '1';
                lag.style.opacity = '1';
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        // Smooth animation loop
        const animate = () => {
            // Ring follows with smooth lerp
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';

            // Lag ring follows even slower
            lagX += (mouseX - lagX) * 0.08;
            lagY += (mouseY - lagY) * 0.08;
            lag.style.left = lagX + 'px';
            lag.style.top = lagY + 'px';

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Hover state on interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], input, textarea, select, label');
            if (isClickable) {
                document.body.classList.add('cursor-hover');
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], input, textarea, select, label');
            if (isClickable) {
                document.body.classList.remove('cursor-hover');
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Click state
        const onMouseDown = () => document.body.classList.add('cursor-click');
        const onMouseUp = () => document.body.classList.remove('cursor-click');

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            // Cleanup event listeners
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div id="cursor-ring"></div>
            <div id="cursor-dot"></div>
            <div id="cursor-lag"></div>
        </>
    );
};

export default MagneticCursor;
