import React, { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, Play, Calendar, Users, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServicePageContent } from '../types';
import { SERVICES } from '../constants';

interface ServiceDetailProps {
  content: ServicePageContent;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ content }) => {
  const navigate = useNavigate();
  const relatedServices = SERVICES.filter(s => !s.path.includes(content.id)).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);

  return (
    <div className="min-h-screen bg-[#F6F5EF] font-sans text-brand selection:bg-accent selection:text-brand-dark pt-20">
      
      {/* 1. COMPACT HERO (Split Layout) */}
      <section className="px-6 md:px-12 pt-12 pb-16 max-w-[1600px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="animate-slide-up-fade">
               <button onClick={() => navigate('/services')} className="text-sm font-semibold uppercase tracking-widest text-brand/50 mb-8 hover:text-brand transition-colors">
                  ← Services
               </button>
               <h1 className="text-5xl lg:text-7xl font-semibold text-brand tracking-tighter leading-[1.05] mb-6">
                  {content.title}
               </h1>
               <p className="text-xl lg:text-2xl text-brand/70 leading-relaxed max-w-lg">
                  {content.subtitle}
               </p>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
               <img 
                  src={`https://picsum.photos/seed/${content.id}/1200/800`} 
                  alt={content.title}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-brand/10"></div>
               
               {/* Floating Chips */}
               <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg text-sm font-semibold text-brand animate-float">
                  Strategic Clarity
               </div>
               <div className="absolute top-8 right-8 bg-accent/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg text-sm font-bold text-brand-dark animate-float" style={{ animationDelay: '1s' }}>
                  High Impact
               </div>
            </div>

         </div>
      </section>

      {/* 2. OVERVIEW + STICKY SIDEBAR */}
      <section className="px-6 md:px-12 py-12 lg:py-24 border-t border-brand/5">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
               <div>
                  <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                  <p className="text-lg lg:text-xl text-brand/80 leading-[1.7]">
                     {content.strategicOverview}
                  </p>
               </div>

               {/* Core Features Cluster */}
               <div className="bg-white p-8 rounded-[32px] border border-brand/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
                  <h3 className="text-2xl font-semibold mb-8 relative z-10">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                     {content.capabilities.map((cap, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand shrink-0 mt-1">
                              <Check size={18} />
                           </div>
                           <div>
                              <h4 className="font-semibold text-lg mb-1">{cap.title}</h4>
                              <p className="text-brand/60 text-sm leading-relaxed">{cap.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Process Timeline */}
               <div>
                  <h2 className="text-3xl font-semibold mb-8">Engagement Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                     {content.process.map((step, i) => (
                        <div key={i} className="glass-card p-6 rounded-[24px] relative group hover:-translate-y-1 transition-transform">
                           <span className="text-xs font-bold text-brand/40 uppercase tracking-widest mb-2 block">Step 0{i+1}</span>
                           <h4 className="font-semibold text-brand mb-2">{step.title}</h4>
                           <p className="text-xs text-brand/60 leading-relaxed">{step.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 relative">
               <div className="sticky top-32 space-y-6">
                  <div className="bg-brand text-cream p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                     <div className="relative z-10">
                        <h3 className="text-2xl font-semibold mb-2">Ready to scale?</h3>
                        <p className="text-cream/70 text-sm mb-6">Schedule a strategic consultation to discuss your specific requirements.</p>
                        <button onClick={() => navigate('/contact')} className="w-full py-4 bg-accent text-brand-dark rounded-xl font-bold hover:bg-white transition-colors">
                           Book a Call
                        </button>
                     </div>
                  </div>

                  <div className="glass-panel p-8 rounded-[32px]">
                     <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-brand/50">Related Services</h4>
                     <ul className="space-y-4">
                        {relatedServices.map((s, i) => (
                           <li key={i}>
                              <button onClick={() => navigate(s.path)} className="flex items-center justify-between w-full text-left group">
                                 <span className="text-brand/80 font-medium group-hover:text-brand transition-colors">{s.title}</span>
                                 <ArrowUpRight size={16} className="text-brand/30 group-hover:text-accent transition-colors" />
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* 3. KEY OUTCOMES */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-brand/5">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Measurable Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {content.outcomes.slice(0,3).map((outcome, i) => (
                  <div key={i} className="glass-card p-10 rounded-[32px] text-center hover:shadow-xl transition-all duration-300">
                     <div className="w-16 h-16 mx-auto bg-brand/5 rounded-full flex items-center justify-center text-brand mb-6">
                        <BarChart size={28} />
                     </div>
                     <h3 className="text-xl font-semibold text-brand mb-2">{outcome}</h3>
                     <p className="text-brand/50 text-sm">Consistent delivery across 50+ engagements.</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 px-6 md:px-12">
         <div className="max-w-[1200px] mx-auto bg-brand-dark rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-8 tracking-tight">
                  Let's build clarity.
               </h2>
               <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-accent transition-colors">
                  Start Conversation
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceDetail;