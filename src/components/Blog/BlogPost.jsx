import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import SEO from '../Common/SEO';
import styles from './UltimateGuide.module.css'; // Reusing styles for consistency

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (post) {
            window.scrollTo(0, 0);
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className={styles.guide}>
            <SEO
                title={post.title}
                description={post.description}
                ogImage={post.image}
                canonical={`https://bluetick.digital/blog/${post.slug}`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.description,
                    "image": post.image,
                    "author": {
                        "@type": "Organization",
                        "name": "Bluetick Digital"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Bluetick Digital",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://bluetick.digital/logo.svg"
                        }
                    },
                    "datePublished": post.date
                }}
            />
            <div className={styles.guideContainer}>
                <header className={styles.guideHero}>
                    <motion.span className={styles.guideBadge} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {post.category} • {post.date}
                    </motion.span>
                    <motion.h1 className={styles.guideTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {post.title}
                    </motion.h1>
                    <motion.p className={styles.guideSubtitle}>
                        {post.description}
                    </motion.p>
                </header>

                <div className={styles.postBody}>
                    {post.content.sections.map((section, idx) => (
                        <section key={idx} className={styles.guideSection}>
                            {section.title && <h2>{section.title}</h2>}

                            {section.type === 'text' && <p>{section.body}</p>}

                            {section.type === 'features' && (
                                <div className={styles.featureGrid}>
                                    {section.items.map((item, i) => (
                                        <div key={i} className={styles.featureCard}>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}

                    {post.content.faqs && (
                        <section className={styles.faqSection}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faqList}>
                                {post.content.faqs.map((faq, i) => (
                                    <div key={i} className={styles.faqItem}>
                                        <h3>{faq.q}</h3>
                                        <p>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <section className={styles.ctaBanner}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to automate your business?</h3>
                        <p>Talk to our experts today and transform your customer engagement.</p>
                        <Link to="/" className={styles.guidePrimaryBtn}>Get Started Now</Link>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default BlogPost;
