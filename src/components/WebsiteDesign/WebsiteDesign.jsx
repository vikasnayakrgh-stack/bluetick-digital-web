import React from 'react';
import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import Packages from './Packages';
import CaseStudy from './CaseStudy';
import CTA from './CTA';
import SEO from '../Common/SEO';
import Marquee from '../Common/Marquee';

const WebsiteDesign = () => {
    return (
        <>
            <SEO
                title="Website Design + WhatsApp Automation | Bluetick Digital"
                description="Stop losing leads. We build high-converting websites integrated with WhatsApp automation. Turn visitors into customers 24/7."
                keywords="Website Design Raipur, WhatsApp Automation, Turnkey Websites, Lead Generation Website, Real Estate Website"
            />
            <div className="website-design-page">
                <Hero />
                <Marquee />
                <ProblemSolution />
                <Packages />
                <CaseStudy />
                <CTA />
            </div>
        </>
    );
};

export default WebsiteDesign;
