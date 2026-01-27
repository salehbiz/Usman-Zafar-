import React from 'react';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STATIC_ARTICLES = [
  {
    id: 1,
    category: "Digital Sovereignty",
    date: "October 2, 2025",
    readTime: "6 min read",
    title: "The Silent Battle for Data Control in a Borderless World",
    excerpt: "In an interconnected world where data flows freely across borders, a quiet yet fierce struggle is unfolding.",
    image: "https://i.postimg.cc/1zWNT6GD/image.png",
    link: "https://www.linkedin.com/pulse/digital-sovereignty-silent-battle-data-control-borderless-zafar-agzdf/?trackingId=CnEqnwETQniW4mqwiaqXDA%3D%3D"
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    date: "September 4, 2025",
    readTime: "8 min read",
    title: "The Jobs Poised to Disappear by 2030",
    excerpt: "AAs we stand on the brink of a transformative era in technology, artificial intelligence (AI) is reshaping the global workforce at an unprecedented pace.",
    image: "https://i.postimg.cc/vZhzY47H/image.png",
    link: "https://www.linkedin.com/pulse/jobs-poised-disappear-2030-navigating-ai-revolution-dr-usman-zafar-xtijc/?trackingId=CnEqnwETQniW4mqwiaqXDA%3D%3D"
  },
  {
    id: 3,
    category: "Artificial Intelligence",
    date: "February 1, 2024",
    readTime: "5 min read",
    title: " Unveiling the Potential of Generative AI with Coursera's Specialization",
    excerpt: "Generative AI, the technology behind text-generating chatbots, artistic masterpieces conjured from words, and even realistic deepfakes, is rapidly transforming our world. ",
    image: "https://i.postimg.cc/jqhCkyR8/image.png",
    link: "hhttps://www.linkedin.com/pulse/demystifying-magic-unveiling-potential-generative-ai-courseras-zafar-5pezf/?trackingId=CnEqnwETQniW4mqwiaqXDA%3D%3D"
  }
];

const Insights: React.FC = () => {
  const navigate = useNavigate();

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
             onClick={() => navigate('/media')}
             className="group flex items-center gap-2 text-white/60 hover:text-[#C8F16B] transition-colors text-sm font-medium uppercase tracking-widest border-b border-transparent hover:border-[#C8F16B] pb-1"
          >
             Show All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATIC_ARTICLES.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col h-full cursor-pointer
                bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden
                hover:border-[#C8F16B]/30 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2
                transition-all duration-500 ease-out
              "
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden bg-[#0B1F1C]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B1F1C]/80 backdrop-blur-md border border-white/10 text-[#C8F16B] text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      <Tag size={10} /> {article.category}
                   </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                
                {/* Meta Row */}
                <div className="flex items-center gap-3 text-white/40 text-xs font-medium mb-4">
                   <span className="flex items-center gap-1.5">
                     <Calendar size={12} /> {article.date}
                   </span>
                   <span className="w-1 h-1 rounded-full bg-white/20"></span>
                   <span className="flex items-center gap-1.5">
                     <Clock size={12} /> {article.readTime}
                   </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight mb-4 group-hover:text-[#C8F16B] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-light">
                   {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white font-medium text-sm border-t border-white/5 pt-6 mt-auto">
                   <span className="group-hover:text-[#C8F16B] transition-colors uppercase tracking-wider text-xs font-bold">Read Article</span>
                   <ArrowRight size={14} className="text-[#C8F16B] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;