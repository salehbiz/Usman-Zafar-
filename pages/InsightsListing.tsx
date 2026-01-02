import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { INSIGHTS_DATA } from '../constants';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const InsightsListing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24">
      
      {/* Header */}
      <div className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto text-center mb-8">
         <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Journal & Perspectives</span>
         <h1 className="text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tight mb-6">
            Insights
         </h1>
         <p className="text-xl text-[#124442]/70 max-w-2xl mx-auto leading-relaxed font-light">
            Analysis and commentary on the forces shaping global markets, technology policy, and leadership.
         </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_DATA.map((article) => (
               <div 
                  key={article.id}
                  onClick={() => navigate(`/insights/${article.slug}`)}
                  className="group cursor-pointer flex flex-col gap-6 bg-white p-6 rounded-[32px] border border-[#124442]/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(18,68,66,0.1)] hover:-translate-y-1 transition-all duration-300"
               >
                  <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden">
                     <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                        <span className="text-[#124442] text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                     </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                     <div className="flex items-center gap-4 text-[#124442]/40 text-xs font-medium mb-3">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
                     </div>

                     <h3 className="text-2xl font-semibold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors line-clamp-2">
                        {article.title}
                     </h3>
                     
                     <p className="text-[#124442]/60 text-base leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                     </p>

                     <div className="mt-auto pt-6 border-t border-[#124442]/5 flex items-center justify-between text-[#124442] font-medium text-sm">
                        <span className="group-hover:text-[#1A5A59] transition-colors">Read Article</span>
                        <div className="w-8 h-8 rounded-full bg-[#124442]/5 flex items-center justify-center group-hover:bg-[#124442] group-hover:text-white transition-all">
                           <ArrowUpRight size={16} />
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

export default InsightsListing;