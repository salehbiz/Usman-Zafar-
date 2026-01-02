import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 border-t border-brand/5 border-b mb-12 bg-[#F6F5EF]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <p className="text-brand/50 font-medium mb-8 text-sm uppercase tracking-widest">
          Trusted by leaders, institutions, and organizations globally
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder logos using text for simplicity but styled as logos */}
           <h3 className="text-2xl font-semibold text-brand tracking-tight">TechCorp</h3>
           <h3 className="text-2xl font-serif italic text-brand">GlobalGov</h3>
           <h3 className="text-2xl font-semibold text-brand tracking-tighter">VENTURE+</h3>
           <h3 className="text-2xl font-medium text-brand">FutureCities</h3>
           <h3 className="text-2xl font-bold text-brand">APEX</h3>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;