import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import FloemaReveal from '../Common/FloemaReveal';
import { blogPosts } from '../../data/blogPosts';
import styles from './BlogSection.module.css';

const BlogSection = () => {
    // Show the first 2 featured guides
    const featuredPosts = blogPosts.slice(0, 2);

    return (
        <section id="insights" className={styles.section}>
            <div className="container">
                {/* Section Header */}
                <FloemaReveal variant="slide-up" delay={0}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.watermarkNumber}>06</span>
                        <span className="section-badge">
                            <BookOpen size={14} /> Knowledge Hub & Guides
                        </span>
                        <h2 className="section-title">
                            Engineering Insights & Pricing Benchmarks.
                        </h2>
                        <p className="section-subtitle">
                            In-depth technical blueprints, cost breakdowns, and conversion playbooks for founders, business owners, and marketing leaders.
                        </p>
                    </div>
                </FloemaReveal>

                {/* Articles List / Grid */}
                <div className={styles.articlesList}>
                    {featuredPosts.map((post, idx) => (
                        <FloemaReveal key={post.id} variant="slide-up" delay={0.1 * (idx + 1)}>
                            <article className={styles.articleCard}>
                                <div className={styles.metaRow}>
                                    <span className={styles.categoryBadge}>{post.category}</span>
                                    <div className={styles.readingInfo}>
                                        <span className={styles.metaItem}>
                                            <Calendar size={13} /> {post.date}
                                        </span>
                                        <span className={styles.metaDivider}>•</span>
                                        <span className={styles.metaItem}>
                                            <Clock size={13} /> {post.content?.meta?.readTime || 10} min read
                                        </span>
                                    </div>
                                </div>

                                <h3 className={styles.articleTitle}>
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className={styles.articleExcerpt}>
                                    {post.description}
                                </p>

                                <div className={styles.cardFooter}>
                                    <Link to={`/blog/${post.slug}`} className={styles.readBtn}>
                                        <span>Read Full Guide</span>
                                        <ArrowUpRight size={15} className={styles.readIcon} />
                                    </Link>
                                </div>
                            </article>
                        </FloemaReveal>
                    ))}
                </div>

                {/* Bottom CTA to view all blog posts */}
                <FloemaReveal variant="slide-up" delay={0.3}>
                    <div className={styles.allArticlesBanner}>
                        <div className={styles.bannerText}>
                            <h4>Explore the Complete Knowledge Hub</h4>
                            <p>Browse our full collection of guides on website development, WhatsApp API, and AI automation.</p>
                        </div>
                        <Link to="/blog" className={styles.viewAllBtn}>
                            <span>View All Articles</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </FloemaReveal>
            </div>
        </section>
    );
};

export default BlogSection;
