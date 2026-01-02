import React, { useRef } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesSlider: React.FC = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 300;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F6F5EF] overflow-hidden">
      <div className="max-w-[1450px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8 md:mb-10">
           <div>
             <h3 className="text-3xl font-semibold text-brand tracking-tight">Expertise</h3>
           </div>
           
           {/* Controls - Minimal Glass Style */}
           <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 rounded-full border border-[#124442]/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-[#124442] hover:bg-[#C8F16B] hover:text-[#0B2625] hover:border-[#C8F16B] transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 rounded-full border border-[#124442]/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-[#124442] hover:bg-[#C8F16B] hover:text-[#0B2625] hover:border-[#C8F16B] transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
           </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-16 no-scrollbar px-1 -mx-1"
        >
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              onClick={() => navigate(service.path)}
              className="
                snap-start flex-shrink-0 w-[270px] md:w-[300px] h-[240px]
                rounded-[24px] p-6
                flex flex-col justify-between
                relative overflow-hidden group cursor-pointer
                transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                border border-[#C8F16B]/15
                bg-[linear-gradient(135deg,#1C4B45_0%,#0F2F2C_55%,#0A2321_100%)]
                shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]
                hover:border-[#C8F16B]/40
              "
            >
               {/* Hover Brightening Overlay */}
               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500 pointer-events-none"></div>

               <div className="relative z-10">
                 {/* Icon in Pill */}
                 <div className="w-10 h-10 rounded-[12px] bg-[#C8F16B]/20 flex items-center justify-center text-[#C8F16B] mb-5 border border-[#C8F16B]/10 group-hover:scale-105 transition-transform duration-300">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 18, strokeWidth: 2 })}
                 </div>
                 
                 {/* Title - High Contrast White */}
                 <h3 className="text-[18px] font-semibold text-white mb-2 leading-tight tracking-tight">
                    {service.title}
                 </h3>
                 
                 {/* Description - 75% White */}
                 <p className="text-white/75 text-[13px] leading-[1.6] line-clamp-2">
                    {service.description}
                 </p>
               </div>

               {/* Arrow Button Interaction */}
               <div className="absolute bottom-6 right-6">
                  <div className="
                    w-8 h-8 rounded-full 
                    flex items-center justify-center
                    bg-[#C8F16B]/10 border border-[#C8F16B]/20
                    text-[#C8F16B]
                    translate-y-2 opacity-0 scale-90
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                    group-hover:bg-[#C8F16B] group-hover:text-[#0B2625]
                    transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                  ">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
               </div>
            </div>
          ))}
          {/* Right Padding Spacer */}
          <div className="w-4 flex-shrink-0" />
        </div>

      </div>
    </section>
  );
};

export default ServicesSlider;