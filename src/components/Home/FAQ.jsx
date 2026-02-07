import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../constants/pricing_faq';
import styles from './FAQ.module.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`${styles.item} glass-morphism`}>
            <button className={styles.questionBtn} onClick={onClick}>
                <span className={styles.question}>{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className={styles.icon}
                >+</motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.answerWrapper}
                    >
                        <p className={styles.answer}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                </div>

                <div className={styles.accordionList}>
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem
                            key={index}
                            {...item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
