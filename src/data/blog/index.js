import { websiteDevelopmentCostArticle } from './websiteDevelopmentCost.js';
import { whatsappChatbotAutomationArticle } from './whatsappChatbotAutomation.js';
import { automateLeadQualificationArticle } from './automateLeadQualification.js';

export const fullBlogArticles = [
    websiteDevelopmentCostArticle,
    whatsappChatbotAutomationArticle,
    automateLeadQualificationArticle
];

export function getFullBlogPostBySlug(slug) {
    if (!slug) return null;
    const raw = slug.trim().toLowerCase();
    const normalized = raw.replace(/[\s_]+/g, '-');
    return fullBlogArticles.find(
        (p) => p.slug === slug || p.slug === raw || p.slug === normalized || p.id === slug
    ) || null;
}
