import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "WhatsApp Business API & AI Chatbots India | ₹1,200/mo | Bluetick Digital",
    description = "WhatsApp Business API & AI Automation for Indian businesses. Lead qualification, booking, broadcasting from ₹1,200/mo. Official Meta Partner. Book free demo →",
    keywords = "WhatsApp Business API, AI Chatbot, WhatsApp Automation, Sales AI, Lead Generation, WhatsApp Marketing, Business Automation, AI Priya, Bluetick Digital, WhatsApp API India",
    canonical = "https://www.bluetickdigital.in/",
    ogTitle = title,
    ogDescription = description,
    ogImage = "https://www.bluetickdigital.in/og-image.jpg",
    twitterTitle = ogTitle,
    twitterDescription = ogDescription,
    twitterImage = "https://www.bluetickdigital.in/twitter-image.jpg",
    structuredData
}) => {

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description || defaultDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
            <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
            {twitterImage && <meta name="twitter:image" content={twitterImage} />}

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
