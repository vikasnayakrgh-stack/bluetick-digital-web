import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import SEO from '../Common/SEO';
import styles from './BlogListing.module.css';

const BlogListing = () => {
    return (
        <div className={styles.blogListing}>
            <SEO
                title="Resources & Insights | AI Automation & WhatsApp API"
                description="Engineering guides, automation blueprints, and technical insights on AI agents, n8n workflows, and WhatsApp Business API."
                keywords="WhatsApp Marketing, AI Automation Blog, n8n Workflows, Business Transformation, Bluetick Digital"
                canonical="https://bluetickdigital.in/blog"
            />
            <div className={`${styles.container} container`}>
                <header className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Resources & <span className={styles.highlight}>Insights</span>
                    </motion.h1>
                    <p>Learn how to scale your business with WhatsApp automation and AI.</p>
                </header>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            className={styles.card}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} />
                                <span className={styles.category}>{post.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                                    Read Article →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogListing;
