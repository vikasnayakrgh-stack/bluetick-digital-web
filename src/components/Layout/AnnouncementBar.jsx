import React from 'react';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
    return (
        <a href="https://wa.me/916261003050?text=Hi,%20I%20want%20to%20book%20a%20demo%20for%20AI%20Priya." target="_blank" rel="noopener noreferrer" className={styles.bar}>
            <div className={styles.container}>
                <span className={styles.rocket}>🚀</span>
                <span className={styles.text}>WhatsApp AI is here - The Conversational Intelligence Layer for Modern Businesses</span>
                <span className={styles.cta}>Book a Demo <span className={styles.arrow}>→</span></span>
            </div>
        </a>
    );
};

export default AnnouncementBar;
