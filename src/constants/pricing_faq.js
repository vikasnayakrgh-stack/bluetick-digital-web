export const PRICING_PLANS = [
    {
        id: 'api',
        name: 'WhatsApp API',
        tagline: 'Base Plan',
        price: '₹1,199',
        priceAnnual: '₹11,999',
        upfront: '₹3,597',
        savings: 'Save ~20% with Annual',
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
        savings: 'Save ~37% with Annual',
        cta: 'Add to Plan',
        featured: false
    },
    {
        id: 'combo',
        name: 'Power Combo',
        tagline: 'WhatsApp API + AI Automation',
        price: '₹2,999',
        priceAnnual: '₹25,000',
        upfront: '₹8,997',
        savings: 'Save ~40% with Annual',
        cta: 'Go Pro Now',
        featured: true,
        featuredLabel: 'Most Recommended'
    }
];

export const DURATION_FEATURES = {
    shortTerm: {
        title: 'Short-Term Plans',
        duration: '3–6–9 Months',
        subtext: 'Best for basic chat & broadcast usage',
        included: ['Chat', 'Contacts', 'Broadcast', 'Media', 'Users'],
        notIncluded: ['Calls', 'Sync App', 'CRM / Bots / Orders', 'Shopify / WooCommerce']
    },
    annual: {
        title: 'Annual Plan',
        duration: '12 Months',
        subtext: 'Best for automation-first & scaling businesses',
        included: ['Chat', 'Calls', 'Contacts', 'Broadcast', 'Media', 'Users', 'Sync App', 'CRM', 'Bots', 'Orders', 'Shopify / WooCommerce'],
        notIncluded: []
    }
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
        answer: 'Absolutely! You can explore all features for 7 days before committing to a plan.'
    }
];
