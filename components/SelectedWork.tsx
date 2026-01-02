import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../constants';

const SelectedWork: React.FC = () => {
  const navigate = useNavigate();
  // We only show the first 3 items on the home page
  const featuredWorks = PORTFOLIO_ITEMS.slice(0, 3);

  const handleCardClick = (slug: string) => {
    navigate('/work-experience');
    // In a real implementation with scrolling, we might pass state or use a hash
    // navigate('/work-experience', { state: { scrollTo: slug } });
    setTimeout(() => {
        const element = document.getElementById(slug);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F5EF] relative overflow-hidden">
      
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F5EF] via-[#124442]/[0.02] to-[#F6F5EF] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          
          {/* Left: Heading */}
          <div className="max-w-2xl">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                <span className="text-[#124442]/60 font-bold text-xs uppercase tracking-[0.2em]">Our Expertise</span>
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#124442] tracking-tight leading-[1.1]">
                Discover Our <br/> <span className="text-[#C8F16B]">Selected</span> Work
             </h2>
          </div>

          {/* Right: Description & CTA */}
          <div className="max-w-md flex flex-col items-start lg:items-end text-left lg:text-right">
             <p className="text-[#124442]/70 text-lg leading-relaxed font-light mb-8">
                Real-world advisory outcomes across government, enterprise, and emerging technologies. Explore selected engagements, initiatives, and strategic programs.
             </p>
             <button 
                onClick={() => navigate('/work-experience')}
                className="group flex items-center gap-2 text-[#124442] font-semibold text-sm uppercase tracking-widest border-b border-[#124442]/20 pb-1 hover:border-[#124442] transition-all"
             >
                View Work Experience
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, idx) => (
             <div 
               key={idx}
               onClick={() => handleCardClick(work.slug)}
               className="group cursor-pointer flex flex-col gap-5 relative"
             >
                {/* Image Card */}
                <div className="relative h-[360px] w-full rounded-[24px] overflow-hidden shadow-[0_10px_30px_-10px_rgba(18,68,66,0.1)] border border-[#124442]/5 bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-15px_rgba(18,68,66,0.15)] group-hover:border-[#C8F16B]/50">
                   <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B2625]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                   {/* Floating Arrow Icon (appears on hover) */}
                   <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                      <ArrowUpRight size={20} />
                   </div>
                   
                   {/* Category Tag on Image */}
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                      <span className="text-[#124442] text-[10px] font-bold uppercase tracking-widest">{work.category}</span>
                   </div>
                </div>

                {/* Text Content */}
                <div className="px-2">
                   <h3 className="text-2xl font-semibold text-[#124442] leading-tight mb-2 group-hover:text-[#1A5A59] transition-colors">
                      {work.title}
                   </h3>
                   <p className="text-[#124442]/60 text-base leading-relaxed line-clamp-2">
                      {work.summary}
                   </p>
                </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;