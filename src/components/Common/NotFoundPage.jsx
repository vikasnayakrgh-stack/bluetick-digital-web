import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import SEO from './SEO';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved. Explore Bluetick Digital or return to the homepage."
        robots="noindex, follow"
      />
      <section className={styles.notFoundSection}>
        <div className={styles.container}>
          <span className={styles.errorCode}>404 ERROR</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The URL you requested does not exist, has been removed, or is temporarily unavailable. Return to the homepage or explore our knowledge hub.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.homeBtn}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/blog" className={styles.blogLink}>
              <BookOpen size={16} /> Explore Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
