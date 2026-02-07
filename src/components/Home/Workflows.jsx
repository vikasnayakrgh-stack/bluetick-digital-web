import React from 'react';
import { motion } from 'framer-motion';
import WorkflowCard from '../Common/WorkflowCard';
import { WORKFLOWS } from '../../constants/workflows';
import styles from './Workflows.module.css';

const Workflows = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Powering Your Growth</h2>
                    <p className={styles.subtitle}>Deterministic workflows designed to automate every customer touchpoint.</p>
                </motion.div>

                <div className={styles.grid}>
                    {WORKFLOWS.map((workflow, index) => (
                        <motion.div
                            key={workflow.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <WorkflowCard {...workflow} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflows;
