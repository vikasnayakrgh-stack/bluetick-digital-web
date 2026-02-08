import React from 'react';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
    return (
        <a href="https://www.bluetickdigital.in/#demo" className={styles.bar}>
            <div className={styles.container}>
                <span className={styles.rocket}>🚀</span>
                <span className={styles.text}>WhatsApp AI is here - The Conversational Intelligence Layer for Modern Businesses</span>
                <span className={styles.cta}>Book a Demo <span className={styles.arrow}>→</span></span>
            </div>
        </a>
    );
};

export default AnnouncementBar;
