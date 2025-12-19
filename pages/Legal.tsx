
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms' | 'cookies';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookies: 'Cookie Policy'
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 md:p-20 rounded-[3rem] shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">{titles[type]}</h1>
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Overview</h2>
                <p>
                   At Apex Structural Engineering & Construction, we take your legal rights seriously. This {titles[type].toLowerCase()} outlines how we manage and protect the information and engagement with our global portal.
                </p>
             </section>
             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data Usage</h2>
                <p>
                   We collect only the necessary information required to provide you with expert engineering consultation and construction services. This includes contact details and project specifications provided via our inquiry forms.
                </p>
             </section>
             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. International Compliance</h2>
                <p>
                   Our operations comply with GDPR, CCPA, and international data protection standards across the 24 countries where we maintain offices.
                </p>
             </section>
             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Updates</h2>
                <p>
                   Apex reserves the right to update these terms at any time. Significant changes will be announced on our news portal.
                </p>
             </section>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-400 font-medium">
             Last Updated: October 2024
          </div>
       </div>
    </div>
  );
};

export default Legal;
