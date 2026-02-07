import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUCCESS_STORIES } from '../../constants/success_data';
import styles from './ClientSuccess.module.css';

const ClientSuccess = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredStories = activeTab === 'all'
        ? SUCCESS_STORIES
        : SUCCESS_STORIES.filter(s => s.id === activeTab);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Client Success Stories</h2>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'all' ? styles.active : ''}`}
                        onClick={() => setActiveTab('all')}
                    >All Industries</button>
                    {SUCCESS_STORIES.map(story => (
                        <button
                            key={story.id}
                            className={`${styles.tabBtn} ${activeTab === story.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(story.id)}
                        >{story.industry}</button>
                    ))}
                </div>

                <div className={styles.grid}>
                    <AnimatePresence mode="wait">
                        {filteredStories.map((story) => (
                            <motion.div
                                key={story.id}
                                className={styles.card}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.clientName}>{story.client}</h3>
                                    <p className={styles.challenge}><strong>Challenge:</strong> {story.challenge}</p>
                                </div>
                                <div className={styles.metricsTable}>
                                    {story.metrics.map((metric, mIndex) => (
                                        <div key={mIndex} className={styles.metricRow}>
                                            <span className={styles.metricLabel}>{metric.label}</span>
                                            {metric.before && (
                                                <span className={styles.metricValue}>
                                                    <span className={styles.before}>{metric.before}</span>
                                                    <span className={styles.arrow}>→</span>
                                                    <span className={styles.after}>{metric.after}</span>
                                                </span>
                                            )}
                                            {metric.value && <span className={styles.metricFinal}>{metric.value}</span>}
                                            {!metric.before && metric.after && (
                                                <span className={styles.metricAfterOnly}>{metric.after}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ClientSuccess;
