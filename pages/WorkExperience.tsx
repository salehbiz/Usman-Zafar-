import React, { useEffect } from 'react';
import { ArrowUpRight, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import FinalCTA from '../components/FinalCTA';

const WorkExperience: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24">
      
      {/* Header */}
      <div className="px-6 md:px-12 py-16 max-w-[1400px] mx-auto text-center mb-12">
         <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Proven Track Record</span>
         <h1 className="text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tight mb-6">
            Global Work <br/> Experience
         </h1>
         <p className="text-xl text-[#124442]/70 max-w-2xl mx-auto leading-relaxed font-light">
            A comprehensive timeline of high-stakes advisory, digital transformation, and strategic market entry initiatives.
         </p>
      </div>

      {/* Main Content: Vertical Timeline Layout */}
      <div className="px-6 md:px-12 pb-24 max-w-[1200px] mx-auto">
         <div className="flex flex-col gap-16 lg:gap-24 relative">
            
            {/* Vertical Line */}
            <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-[#124442]/10 hidden lg:block"></div>

            {PORTFOLIO_ITEMS.map((item, index) => (
               <div 
                  id={item.slug}
                  key={item.id} 
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-start relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
               >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#124442] border-[3px] border-[#F6F5EF] shadow-md z-10 mt-8"></div>

                  {/* Visual Side */}
                  <div className="w-full lg:w-1/2">
                      <div className="group relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-lg border border-[#124442]/5">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-[#124442]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                          
                          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                             <span className="bg-white/90 backdrop-blur-md text-[#124442] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                {item.category}
                             </span>
                          </div>
                      </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                      
                      {/* Meta Data */}
                      <div className="flex flex-wrap items-center gap-4 text-[#124442]/60 text-sm font-medium mb-4">
                          <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <span>{item.year}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              <span>{item.location}</span>
                          </div>
                      </div>

                      <h2 className="text-3xl font-semibold text-[#124442] leading-tight mb-6">
                         {item.title}
                      </h2>
                      
                      <div className="space-y-6">
                         <div>
                            <h4 className="text-sm font-bold text-[#124442] uppercase tracking-widest mb-2 opacity-70">The Challenge</h4>
                            <p className="text-[#124442]/80 leading-relaxed font-light">
                               {item.challenge}
                            </p>
                         </div>
                         
                         <div>
                            <h4 className="text-sm font-bold text-[#124442] uppercase tracking-widest mb-2 opacity-70">Strategic Solution</h4>
                            <p className="text-[#124442]/80 leading-relaxed font-light">
                               {item.solution}
                            </p>
                         </div>

                         <div className="bg-white p-6 rounded-2xl border border-[#124442]/5 shadow-sm">
                            <h4 className="text-sm font-bold text-[#124442] uppercase tracking-widest mb-3 opacity-70">Key Impact</h4>
                            <ul className="space-y-2">
                               {item.impact.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-[#124442] text-sm font-medium">
                                     <CheckCircle2 size={16} className="text-[#C8F16B] fill-[#124442] shrink-0 mt-0.5" />
                                     {point}
                                  </li>
                               ))}
                            </ul>
                         </div>
                      </div>

                  </div>
               </div>
            ))}
         </div>
      </div>

      <FinalCTA />
    </div>
  );
};

export default WorkExperience;