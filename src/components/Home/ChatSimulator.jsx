import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatSimulator.module.css';

const CONVERSATION = [
    { sender: 'user', text: 'Hi, I want to book a demo for my business.' },
    { sender: 'ai', text: 'Welcome! I am Priya, your AI assistant. I can help with that. What kind of business do you run?' },
    { sender: 'user', text: 'I have an e-commerce store with about 2000 leads monthly.' },
    { sender: 'ai', text: `Great! For 2000 leads, our Power Combo (₹2,999) would be perfect. Would you like to schedule a demo for tomorrow at 3 PM?` },
    { sender: 'user', text: 'Yes, that works.' },
    { sender: 'ai', text: `Perfect! Demo booked for tomorrow at 3 PM. I've tagged you as a "Hot Lead" 🚀. See you then!` }
];

const ChatSimulator = () => {
    const [messages, setMessages] = useState([]);
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (index < CONVERSATION.length) {
            const currentMsg = CONVERSATION[index];
            const delay = currentMsg.sender === 'ai' ? 1500 : 1000;

            const timer = setTimeout(() => {
                if (currentMsg.sender === 'ai') {
                    setIsTyping(true);
                    setTimeout(() => {
                        setIsTyping(false);
                        setMessages(prev => [...prev, currentMsg]);
                        setIndex(prev => prev + 1);
                    }, 1000);
                } else {
                    setMessages(prev => [...prev, currentMsg]);
                    setIndex(prev => prev + 1);
                }
            }, delay);

            return () => clearTimeout(timer);
        } else {
            // Reset after a long pause
            const resetTimer = setTimeout(() => {
                setMessages([]);
                setIndex(0);
            }, 6000);
            return () => clearTimeout(resetTimer);
        }
    }, [index]);

    return (
        <div className={styles.simulator}>
            <div className={styles.phoneFrame}>
                <div className={styles.header}>
                    <div className={styles.avatar} />
                    <div className={styles.info}>
                        <span className={styles.name}>AI Priya</span>
                        <span className={styles.status}>Online</span>
                    </div>
                </div>

                <div className={styles.chatArea}>
                    <AnimatePresence initial={false}>
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={`${idx}-${msg.sender}`}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`${styles.message} ${msg.sender === 'ai' ? styles.ai : styles.user}`}
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`${styles.message} ${styles.ai} ${styles.typing}`}
                        >
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                        </motion.div>
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.inputBar} />
                </div>
            </div>

            <AnimatePresence>
                {index > 3 && index < 6 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className={styles.contextOverlay}
                    >
                        <div className={styles.tag}>Intent: <span>Buy/Booking</span></div>
                        <div className={styles.tag}>Score: <span>95/100</span></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatSimulator;
