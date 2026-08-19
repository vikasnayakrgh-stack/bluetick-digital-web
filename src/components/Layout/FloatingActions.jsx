import React from 'react';
import BackToTop from './BackToTop';
import WhatsAppBtn from './WhatsAppBtn';
import styles from './FloatingActions.module.css';

const FloatingActions = () => {
    return (
        <aside className={styles.floatingContainer} aria-label="Quick Actions">
            <BackToTop />
            <WhatsAppBtn />
        </aside>
    );
};

export default FloatingActions;
