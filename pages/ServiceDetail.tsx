import React, { useEffect } from 'react';
import { ArrowRight, Check, ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F6F5EF] font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C] pt-20">
      
      {/* 1. COMPACT HERO (Split Layout) */}
      <section className="px-6 md:px-12 pt-12 pb-16 max-w-[1600px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="animate-slide-up-fade">
               <button onClick={() => navigate('/services')} className="text-sm font-semibold uppercase tracking-widest text-brand/50 mb-8 hover:text-brand transition-colors">
                  ← Services
               </button>
               <h1 className="text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tighter leading-[1.05] mb-6">
                  {content.title}
               </h1>
               <p className="text-xl lg:text-2xl text-[#124442]/70 leading-relaxed max-w-lg">
                  {content.subtitle}
               </p>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
               <img 
                  src={`https://picsum.photos/seed/${content.id}/1200/800`} 
                  alt={content.title}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#124442]/10"></div>
               
               {/* Floating Chips */}
               <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg text-sm font-semibold text-[#124442] animate-float">
                  Strategic Clarity
               </div>
               <div className="absolute top-8 right-8 bg-[#C8F16B]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg text-sm font-bold text-[#0B1F1C] animate-float" style={{ animationDelay: '1s' }}>
                  High Impact
               </div>
            </div>

         </div>
      </section>

      {/* 2. DYNAMIC SECTIONS */}
      <section className="border-t border-[#124442]/5">
         <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-12 py-12 lg:py-24">
               
               {/* Main Content Area */}
               <div className="lg:col-span-8 space-y-16">
                  {content.sections.map((section, index) => (
                     <div 
                        key={index} 
                        className={`
                           rounded-[32px] overflow-hidden
                           ${section.isDark ? 'bg-[#124442] text-white p-8 md:p-12 shadow-xl' : ''}
                        `}
                     >
                        {section.title && (
                           <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${section.isDark ? 'text-white' : 'text-[#124442]'}`}>
                              {section.title}
                           </h3>
                        )}
                        
                        {/* Text Content */}
                        {section.content && (
                           <p className={`text-lg leading-relaxed ${section.isDark ? 'text-[#F3F6F4]/80' : 'text-[#124442]/80 font-light'}`}>
                              {section.content}
                           </p>
                        )}

                        {/* Bullets */}
                        {section.bullets && (
                           <ul className={`space-y-4 ${section.content ? 'mt-8' : ''}`}>
                              {section.bullets.map((bullet, idx) => (
                                 <li key={idx} className="flex gap-4 items-start">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${section.isDark ? 'bg-[#C8F16B]/20 text-[#C8F16B]' : 'bg-[#124442]/5 text-[#124442]'}`}>
                                       <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className={`text-lg leading-relaxed ${section.isDark ? 'text-[#F3F6F4]/90' : 'text-[#124442]/80'}`}>
                                       {bullet}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  ))}
               </div>

               {/* Sticky Sidebar */}
               <div className="lg:col-span-4 relative">
                  <div className="sticky top-32 space-y-6">
                     
                     {/* CTA Card */}
                     <div className="bg-[#124442] text-[#F3F6F4] p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8F16B]/10 rounded-full blur-[40px]"></div>
                        <div className="relative z-10">
                           <h3 className="text-2xl font-semibold mb-2">Ready to scale?</h3>
                           <p className="text-[#F3F6F4]/70 text-sm mb-6">Schedule a strategic consultation to discuss your specific requirements.</p>
                           <button onClick={() => navigate('/contact')} className="w-full py-4 bg-[#C8F16B] text-[#0B1F1C] rounded-xl font-bold hover:bg-white transition-colors">
                              Book a Call
                           </button>
                        </div>
                     </div>

                     {/* Related Links */}
                     <div className="bg-white/50 backdrop-blur-xl border border-[#124442]/5 p-8 rounded-[32px]">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-[#124442]/50">Related Services</h4>
                        <ul className="space-y-4">
                           {relatedServices.map((s, i) => (
                              <li key={i}>
                                 <button onClick={() => navigate(s.path)} className="flex items-center justify-between w-full text-left group">
                                    <span className="text-[#124442]/80 font-medium group-hover:text-[#124442] transition-colors">{s.title}</span>
                                    <ArrowUpRight size={16} className="text-[#124442]/30 group-hover:text-[#C8F16B] transition-colors" />
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 px-6 md:px-12">
         <div className="max-w-[1200px] mx-auto bg-[#0B2625] rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-8 tracking-tight">
                  Let's build clarity.
               </h2>
               <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white text-[#0B2625] rounded-full font-bold text-lg hover:bg-[#C8F16B] transition-colors">
                  Start Conversation
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceDetail;