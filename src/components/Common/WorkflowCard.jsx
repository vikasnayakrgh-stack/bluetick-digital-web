import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import styles from './WorkflowCard.module.css';

const WorkflowCard = ({ title, description, impact, icon, badge }) => {
    const IconComponent = Icons[icon];

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`${styles.card} glass-card`}
        >
            <div className={styles.topRow}>
                <div className={styles.iconContainer}>
                    <IconComponent size={24} className={styles.icon} />
                </div>
                {badge && <span className={styles.cardBadge}>{badge}</span>}
                <div className={styles.impactBadge}>
                    {impact}
                </div>
            </div>

            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>

            <div className={styles.cardFooter}>
                <span className={styles.learnMore}>Explore Workflow <Icons.ChevronRight size={14} /></span>
            </div>
        </motion.div>
    );
};

export default WorkflowCard;
