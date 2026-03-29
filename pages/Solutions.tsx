import React, { useEffect } from 'react';
import AdvisoryPackages from '../components/AdvisoryPackages';

const Solutions: React.FC = () => {
  useEffect(() => {
    document.title = "Solutions | Strategic Advisory | Dr. Usman Zafar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen selection:bg-accent selection:text-brand-dark">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand/[0.02] -skew-x-12 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand/60 leading-none">Strategic Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[88px] font-semibold text-brand tracking-tighter leading-[0.95] mb-8 max-w-5xl">
            Accelerating Growth <br /> 
            <span className="text-brand/30">Across the Middle East</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand/70 font-light max-w-2xl leading-relaxed mb-10">
            High-impact advisory for organizations looking to scale at speed. We bridge the gap between global strategy and MENA market reality.
          </p>

          <div className="flex flex-wrap gap-4">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand/50">
                <span className="text-accent">●</span> Market Entry
             </div>
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand/50">
                <span className="text-accent">●</span> Board Advisory
             </div>
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand/50">
                <span className="text-accent">●</span> Digital Policy
             </div>
          </div>
        </div>
      </div>
      
      {/* Methodology Section */}
      <section className="py-20 bg-white border-y border-brand/5 overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand/40 mb-4 italic">Our Approach</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-brand tracking-tight">The Strategic Framework</h3>
        </div>

        <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              step: "01", 
              title: "Analyze", 
              desc: "Deep-dive diagnostic of your current market position and regulatory environment." 
            },
            { 
              step: "02", 
              title: "Strategize", 
              desc: "Engineering a bespoke entry or growth plan aligned with local policy frameworks." 
            },
            { 
              step: "03", 
              title: "Execute", 
              desc: "On-the-ground activation through our deep networks and ministerial connections." 
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-cream/30 border border-brand/5 hover:bg-brand hover:text-white transition-all duration-500">
              <span className="text-4xl font-bold text-accent mb-6 block group-hover:text-white/20">{item.step}</span>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-brand/60 font-light group-hover:text-white/70 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Packages (The Core Section) */}
      <div className="py-12 bg-[#F6F5EF]">
         <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="inline-block px-4 py-1 rounded-full bg-brand text-accent text-[10px] font-bold uppercase tracking-widest mb-10">
               Engagement Models
            </div>
         </div>
         <AdvisoryPackages />
      </div>
      
      {/* Bottom CTA */}
      <section className="py-24 lg:py-40 bg-[#0B1E1C] relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-brand/50 to-transparent opacity-50"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8 italic">Ready to scale across the MENA region?</h2>
            <button 
              onClick={() => window.location.href = '#/contact'}
              className="px-12 py-5 bg-accent text-brand font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl"
            >
               Book a Consultation
            </button>
         </div>
      </section>
    </div>
  );
};

export default Solutions;
