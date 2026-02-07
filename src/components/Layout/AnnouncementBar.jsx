import React from 'react';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.container}>
                <span>🚀 WhatsApp AI is here - The Conversational Intelligence Layer for Modern Businesses</span>
                <a href="#demo" className={styles.link}>Book a Demo →</a>
            </div>
        </div>
    );
};

export default AnnouncementBar;
