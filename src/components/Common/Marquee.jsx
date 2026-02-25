import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
    const brands = [
        "Real Estate", "Clinics", "Coaching", "SaaS", "E-commerce",
        "Consultancy", "Solar", "Gyms", "Salons", "Startups"
    ];

    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {/* Double the list for seamless loop */}
                {[...brands, ...brands, ...brands].map((brand, index) => (
                    <div key={index} className={styles.marqueeItem}>
                        <span className={styles.dot}>•</span>
                        {brand}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
