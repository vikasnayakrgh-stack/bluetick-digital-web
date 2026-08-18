import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { FAQ_DATA } from '../../constants/pricing_faq';
import styles from './FAQ.module.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={styles.item}>
            <button className={styles.questionBtn} onClick={onClick} aria-expanded={isOpen}>
                <span className={styles.question}>{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.iconBox}
                >
                    <ChevronDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
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
        <section id="faq" className="section">
            <div className="container">
                {/* Section Header with Floema Watermark Number */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.watermarkNumber}>06</span>
                        <span className="section-badge">
                            <HelpCircle size={14} /> Clear Answers
                        </span>
                        <h2 className="section-title">
                            Frequently Asked Questions.
                        </h2>
                        <p className="section-subtitle">
                            Everything you need to know about our website development, AI automation solutions, pricing, and onboarding process.
                        </p>
                    </div>
                </FloemaReveal>

                <FloemaReveal variant="slide-up" delay={0.15}>
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
                </FloemaReveal>
            </div>
        </section>
    );
};

export default FAQ;
