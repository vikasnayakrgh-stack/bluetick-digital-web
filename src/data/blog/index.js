import { websiteDevelopmentCostArticle } from './websiteDevelopmentCost';
import { whatsappChatbotAutomationArticle } from './whatsappChatbotAutomation';
import { automateLeadQualificationArticle } from './automateLeadQualification';

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
