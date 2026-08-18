import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import SEO from '../Common/SEO';
import styles from './BlogPost.module.css';

const BlogPost = () => {
    const { slug } = useParams();
    const rawSlug = slug || '';
    const decodedSlug = decodeURIComponent(rawSlug).trim().toLowerCase();
    const normalizedSlug = decodedSlug.replace(/[\s_]+/g, '-');
    const post = blogPosts.find(p => p.slug === rawSlug || p.slug === decodedSlug || p.slug === normalizedSlug || p.id === rawSlug);

    useEffect(() => {
        if (post) {
            window.scrollTo(0, 0);
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const renderSection = (section, idx) => {
        switch (section.type) {
            case 'text':
                return <p key={idx}>{section.body}</p>;

            case 'html':
                return <div key={idx} dangerouslySetInnerHTML={{ __html: section.body }} />;

            case 'features':
                return (
                    <div key={idx} className={styles.featureGrid}>
                        {section.items.map((item, i) => (
                            <div key={i} className={styles.featureCard}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                );

            case 'list':
                return (
                    <ul key={idx} className={styles.postList}>
                        {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );

            case 'steps':
                return (
                    <div key={idx} className={styles.stepsContainer}>
                        {section.items.map((step, i) => (
                            <div key={i} className={styles.stepCard}>
                                <span className={styles.stepNumber}>{step.step}</span>
                                <div>
                                    <h3 style={{ marginTop: 0 }}>{step.title}</h3>
                                    <p>{step.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'table':
                return (
                    <div key={idx} className={styles.tableWrapper}>
                        <table className={styles.guideTable}>
                            <thead>
                                <tr>
                                    {section.headers.map((h, i) => (
                                        <th key={h}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => (
                                            <td key={j}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );

            case 'metrics':
                return (
                    <div key={idx} className={styles.metricsGrid}>
                        {section.items.map((item, i) => (
                            <div key={i} className={styles.metricCard}>
                                <span className={styles.metricValue}>{item.value}</span>
                                <span className={styles.metricLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <article className={styles.guide}>
            <SEO
                title={post.title}
                description={post.description}
                ogImage={post.image}
                ogType="article"
                canonical={`https://bluetickdigital.in/blog/${post.slug}`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.description,
                    "image": post.image,
                    "author": {
                        "@type": "Person",
                        "name": post.author || "Vikas Nayak",
                        "url": "https://bluetickdigital.in/about"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Bluetick Digital",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://bluetickdigital.in/assets/logo.png"
                        }
                    },
                    "datePublished": post.isoDate || "2026-02-07T00:00:00+05:30",
                    "dateModified": post.isoDate || "2026-02-07T00:00:00+05:30",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://bluetickdigital.in/blog/${post.slug}`
                    }
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
                    {post.content.meta && (
                        <div className={styles.guideMeta}>
                            <span>{post.content.meta.readTime} min read</span>
                        </div>
                    )}
                </header>

                <div className={styles.postBody}>
                    {post.content.sections.map((section, idx) => (
                        <section key={idx} className={styles.guideSection}>
                            {section.title && <h2>{section.title}</h2>}
                            {section.subtitle && <p className={styles.sectionIntro}>{section.subtitle}</p>}
                            {renderSection(section, idx)}
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

                    {post.content.cta && (
                        <section className={styles.ctaBanner}>
                            <div className={styles.ctaContent}>
                                <h3>{post.content.cta.title}</h3>
                                <p>{post.content.cta.body}</p>
                                {post.content.cta.buttonText && (
                                    <a
                                        href={post.content.cta.buttonLink || "https://wa.me/916261003050?text=Hi,%20I%20want%20a%20demo"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.guidePrimaryBtn}
                                    >
                                        {post.content.cta.buttonText}
                                    </a>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;