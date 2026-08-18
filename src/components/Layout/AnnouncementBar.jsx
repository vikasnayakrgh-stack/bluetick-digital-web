import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.content}>
                <span className={styles.badge}>
                    <Sparkles size={12} /> New
                </span>
                <span className={styles.sep}>·</span>
                <span className={styles.text}>
                    Build your website. Automate your business. Scale faster.
                </span>
                <span className={styles.sep}>·</span>
                <a href="#audit" className={styles.link}>
                    Get Free Audit <ArrowRight size={12} />
                </a>
            </div>
        </div>
    );
};

export default AnnouncementBar;
