import React from 'react';
import AdvisoryPackages from '../components/AdvisoryPackages';

const Solutions: React.FC = () => {
  return (
    <div className="bg-[#F6F5EF] min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand/60">Strategic Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-brand tracking-tight leading-[1.05] mb-8 max-w-4xl">
            Market Acceleration <br /> 
            <span className="text-brand/40">Through Advisory</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand/70 font-light max-w-2xl leading-relaxed">
            Specialized market entry and board-level advisory designed to scale your enterprise across the MENA region with precision and speed.
          </p>
        </div>
      </div>
      
      {/* The Section Copied from Home */}
      <AdvisoryPackages />
      
      {/* Bottom CTA or spacing */}
      <div className="py-20 lg:py-32"></div>
    </div>
  );
};

export default Solutions;
