import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { INSIGHTS_DATA } from '../constants';

const Insights: React.FC = () => {
  const navigate = useNavigate();
  
  // Display only the first 3 insights
  const featuredInsights = INSIGHTS_DATA.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1F1C]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#124442] rounded-full blur-[120px] opacity-40"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0F3A39] rounded-full blur-[100px] opacity-60"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.04]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                <span className="text-[#C8F16B] font-bold text-xs uppercase tracking-[0.2em]">Thought Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
              Latest Insights
            </h2>
          </div>
          
          <button 
             onClick={() => navigate('/insights')}
             className="group flex items-center gap-2 text-white/60 hover:text-[#C8F16B] transition-colors text-sm font-medium uppercase tracking-widest border-b border-transparent hover:border-[#C8F16B] pb-1"
          >
             Show all articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid / Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0 no-scrollbar">
          {featuredInsights.map((article) => (
            <div 
              key={article.id} 
              onClick={() => navigate(`/insights/${article.slug}`)}
              className="
                group cursor-pointer snap-center shrink-0 w-[85vw] md:w-auto
                flex flex-col
                bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden
                hover:border-[#C8F16B]/30 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2
                transition-all duration-500 ease-out
              "
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B1F1C]/20 group-hover:bg-[#0B1F1C]/0 transition-colors duration-500"></div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B1F1C]/60 backdrop-blur-md border border-white/10 text-[#C8F16B] text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      <Tag size={10} /> {article.category}
                   </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                
                {/* Meta Row */}
                <div className="flex items-center gap-3 text-white/40 text-xs font-medium mb-4">
                   <span>{article.date}</span>
                   <span className="w-1 h-1 rounded-full bg-white/20"></span>
                   <div className="flex items-center gap-1.5">
                      <Clock size={12} /> {article.readTime}
                   </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight mb-4 group-hover:text-[#C8F16B] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                   {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white font-medium text-sm border-t border-white/5 pt-6 mt-auto">
                   <span className="group-hover:text-[#C8F16B] transition-colors">Read Article</span>
                   <ArrowRight size={14} className="text-[#C8F16B] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;