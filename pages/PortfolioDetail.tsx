import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import FinalCTA from '../components/FinalCTA';

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const work = PORTFOLIO_ITEMS.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F5EF] text-[#124442]">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Case Study Not Found</h2>
            <button onClick={() => navigate('/portfolio')} className="text-sm underline hover:text-[#C8F16B]">Back to Portfolio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5EF] pt-24 font-sans text-[#124442]">
       
       {/* Breadcrumb / Back */}
       <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-8">
          <button 
             onClick={() => navigate('/portfolio')}
             className="flex items-center gap-2 text-[#124442]/60 hover:text-[#124442] font-medium transition-colors"
          >
             <ArrowLeft size={18} /> Back to Portfolio
          </button>
       </div>

       {/* Hero Section */}
       <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
             <div className="animate-slide-up-fade">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#124442]/5 text-[#124442] text-xs font-bold uppercase tracking-widest mb-6 border border-[#124442]/10">
                   {work.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#124442] leading-[1.05] tracking-tight mb-8">
                   {work.title}
                </h1>
                <p className="text-xl md:text-2xl text-[#124442]/70 font-light leading-relaxed">
                   {work.summary}
                </p>
             </div>
             
             {/* Key Stats / Meta */}
             <div className="bg-white rounded-[32px] p-8 border border-[#124442]/5 shadow-sm lg:mb-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <p className="text-[#124442]/40 text-xs font-bold uppercase tracking-widest mb-1">Client Type</p>
                      <p className="text-[#124442] font-medium text-lg">{work.clientType || 'Confidential'}</p>
                   </div>
                   <div>
                      <p className="text-[#124442]/40 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                      <p className="text-[#124442] font-medium text-lg">{work.location}</p>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Main Image */}
       <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-24">
          <div className="relative w-full aspect-video lg:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl">
             <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#124442]/10 mix-blend-multiply"></div>
          </div>
       </div>

       {/* Case Study Content */}
       <div className="px-6 md:px-12 max-w-[1200px] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
             
             {/* Sticky Sidebar (Nav) */}
             <div className="lg:col-span-4">
                <div className="sticky top-32">
                   <h3 className="text-lg font-semibold mb-6">Key Outcomes</h3>
                   <div className="space-y-4">
                      {work.impact.map((item, idx) => (
                         <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-[#124442]/5 shadow-sm">
                            <CheckCircle2 className="text-[#C8F16B] shrink-0 fill-[#124442]" size={20} />
                            <p className="text-[#124442]/80 text-sm font-medium leading-relaxed">{item}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Main Text */}
             <div className="lg:col-span-8 space-y-16">
                
                {/* Challenge */}
                <div>
                   <h2 className="text-3xl font-semibold text-[#124442] mb-6 tracking-tight">The Challenge</h2>
                   <p className="text-lg text-[#124442]/70 leading-relaxed font-light">
                      {work.challenge}
                   </p>
                </div>

                {/* Solution */}
                <div>
                   <h2 className="text-3xl font-semibold text-[#124442] mb-6 tracking-tight">Our Strategic Approach</h2>
                   <p className="text-lg text-[#124442]/70 leading-relaxed font-light whitespace-pre-line">
                      {work.solution}
                   </p>
                </div>

                {/* Visual Break (Simulated Quote) */}
                <div className="relative py-12 border-y border-[#124442]/10">
                   <p className="text-2xl md:text-3xl font-serif italic text-[#124442] leading-relaxed text-center opacity-80">
                      "Delivering structure where there was complexity, and momentum where there was stagnation."
                   </p>
                </div>

             </div>
          </div>
       </div>

       <FinalCTA />
    </div>
  );
};

export default PortfolioDetail;