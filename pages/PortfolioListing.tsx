import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import FinalCTA from '../components/FinalCTA';

const PortfolioListing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24">
      
      {/* Header */}
      <div className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto text-center mb-8">
         <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Our Work</span>
         <h1 className="text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tight mb-6">
            Strategic Impact <br/> Portfolio
         </h1>
         <p className="text-xl text-[#124442]/70 max-w-2xl mx-auto leading-relaxed font-light">
            A curated selection of advisory engagements, digital transformations, and policy initiatives across the globe.
         </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PORTFOLIO_ITEMS.map((work) => (
               <div 
                  key={work.id}
                  onClick={() => navigate(`/portfolio/${work.slug}`)}
                  className="group cursor-pointer flex flex-col gap-6"
               >
                  <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden shadow-sm border border-[#124442]/5 bg-white transition-all duration-500 group-hover:shadow-[0_20px_50px_-10px_rgba(18,68,66,0.15)] group-hover:-translate-y-1">
                     <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <span className="text-[#124442] text-[10px] font-bold uppercase tracking-widest">{work.category}</span>
                     </div>
                     <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#124442] shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={24} />
                     </div>
                  </div>

                  <div className="px-2">
                     <h3 className="text-3xl font-semibold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors">
                        {work.title}
                     </h3>
                     <p className="text-[#124442]/60 text-lg leading-relaxed">
                        {work.summary}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <FinalCTA />
    </div>
  );
};

export default PortfolioListing;