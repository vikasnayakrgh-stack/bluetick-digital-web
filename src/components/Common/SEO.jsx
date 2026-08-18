import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData
}) => {
    const location = useLocation();
    const currentPath = location.pathname || '';
    
    // Automatically derive canonical URL if not explicitly provided
    const resolvedCanonical = canonical || `${SITE_CONFIG.canonicalBase}${currentPath === '/' ? '' : currentPath}`;
    
    // De-duplicate brand suffix
    const siteTitle = SITE_CONFIG.brandName;
    let cleanTitle = title || '';
    cleanTitle = cleanTitle.replace(/\s*(\||\-)\s*Bluetick\s*Digital.*$/i, '').trim();
    const fullTitle = cleanTitle ? `${cleanTitle} | ${siteTitle}` : `${siteTitle} | Websites + AI Automation Partner`;

    const metaDescription = description || SITE_CONFIG.defaultDescription;
    const metaKeywords = keywords || SITE_CONFIG.defaultKeywords;
    const resolvedOgImage = ogImage || SITE_CONFIG.assets.ogImage;
    const resolvedTwitterImage = twitterImage || resolvedOgImage;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={resolvedCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || metaDescription} />
            <meta property="og:url" content={resolvedCanonical} />
            <meta property="og:image" content={resolvedOgImage} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={SITE_CONFIG.brandName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
            <meta name="twitter:description" content={twitterDescription || ogDescription || metaDescription} />
            <meta name="twitter:url" content={resolvedCanonical} />
            <meta name="twitter:image" content={resolvedTwitterImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
