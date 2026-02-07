export const PRICING_PLANS = [
    {
        id: 'api',
        name: 'WhatsApp API',
        tagline: 'Base Plan',
        price: '₹1,199',
        priceAnnual: '₹11,999',
        upfront: '₹3,597',
        period: '/month',
        features: [
            'WABA Setup & Panel Access',
            'Unlimited Broadcasts',
            'Template Approvals',
            'Multi-Agent Login',
            'Basic Chatbot Builder',
            'Green Tick Assistance',
            'Customer Support'
        ],
        cta: 'Get Started',
        featured: false
    },
    {
        id: 'automation',
        name: 'AI Automation',
        tagline: 'Add-On Only (Req. API)',
        price: '₹1,999',
        priceAnnual: '₹14,999',
        upfront: '₹5,997',
        period: '/month',
        features: [
            'AI WhatsApp Reply Bot',
            'Lead Qualification',
            'Auto Follow-ups & Memory',
            'Supabase / CRM Integration',
            '10,000 AI Replies / Month',
            'Add-on: 10k extra replies (₹499)'
        ],
        cta: 'Add to Plan',
        featured: false
    },
    {
        id: 'combo',
        name: 'Power Combo',
        tagline: 'Ultimate Sales Engine',
        price: '₹2,999',
        priceAnnual: '₹25,000',
        upfront: '₹8,997',
        period: '/month',
        features: [
            'Full WhatsApp API Access',
            'Complete AI Automation',
            'Lead Qual. & Follow-ups',
            'Supabase / CRM Sync',
            '15,000 AI Replies / Month',
            'Extra 10k replies (₹499)',
            'Extra No. (₹6,999 / year)'
        ],
        cta: 'Go Pro Now',
        featured: true,
        featuredLabel: 'Most Recommended'
    }
];

export const DURATION_FEATURES = {
    monthly: [
        { name: 'Chat', available: true },
        { name: 'Contacts', available: true },
        { name: 'Broadcast', available: true },
        { name: 'Media', available: true },
        { name: 'Users', available: true },
        { name: 'Calls', available: false },
        { name: 'Sync App', available: false },
        { name: 'CRM / Bots / Orders', available: false },
        { name: 'Shopify / WooCommerce', available: false }
    ],
    annual: [
        { name: 'Chat', available: true },
        { name: 'Contacts', available: true },
        { name: 'Broadcast', available: true },
        { name: 'Media', available: true },
        { name: 'Users', available: true },
        { name: 'Calls', available: true },
        { name: 'Sync App', available: true },
        { name: 'CRM / Bots / Orders', available: true },
        { name: 'Shopify / WooCommerce', available: true }
    ]
};

export const FAQ_DATA = [
    {
        question: 'How does the WhatsApp API work?',
        answer: 'We integrate with official WhatsApp Business APIs to ensure your account remains safe and verified while sending mass communications.'
    },
    {
        question: 'Is there a setup fee?',
        answer: 'No, we believe in transparent pricing. You only pay for the annual subscription and any additional meta message charges.'
    },
    {
        question: 'Can I use my existing WhatsApp number?',
        answer: 'Yes, but we recommend using a fresh number to build a dedicated business presence without interruptions.'
    },
    {
        question: 'Do you offer a free trial?',
        answer: 'Absolutely! You can explore all features for 14 days before committing to a plan.'
    }
];
