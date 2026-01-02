import React from 'react';
import { ArrowRight, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTA: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section className="py-12 px-6 md:px-12 bg-[#F6F5EF]">
      <div className="max-w-[1400px] mx-auto relative group cursor-default">
        
        {/* Main Card Container */}
        <div className="
          relative rounded-[48px] p-12 md:p-20 lg:p-28 
          overflow-hidden 
          bg-gradient-to-br from-[#051412] via-[#0B1F1C] to-[#082220]
          border border-white/5 shadow-2xl
          transition-all duration-700 ease-out
          hover:shadow-[0_40px_80px_-20px_rgba(11,31,28,0.5)]
          hover:scale-[1.005]
        ">
          
          {/* --- Background Effects --- */}
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>
          
          {/* Radial Glow (Static + Hover intensity) */}
          <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[600px] h-[600px] bg-[#C8F16B]/5 rounded-full blur-[120px] 
            pointer-events-none 
            transition-all duration-1000 ease-in-out
            group-hover:bg-[#C8F16B]/10 group-hover:w-[700px] group-hover:h-[700px]
          "></div>

          {/* Glass Border Highlight */}
          <div className="absolute inset-0 rounded-[48px] border border-white/5 pointer-events-none"></div>


          {/* --- Content --- */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Headline */}
            <h2 className="
              text-4xl md:text-5xl lg:text-7xl font-semibold text-white 
              mb-6 tracking-tight leading-[1.05]
              drop-shadow-sm
            ">
              Let’s build systems <br/> that endure.
            </h2>
            
            {/* Subtext */}
            <p className="text-[#F3F6F4]/70 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
               Strategic advisory for governments, enterprises, and high-growth founders.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 md:gap-x-10 mb-14 text-[#F3F6F4]/50 text-xs md:text-sm font-medium uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#C8F16B]" />
                    <span>20+ Years Experience</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-[#C8F16B]/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <Globe size={16} className="text-[#C8F16B]" />
                    <span>MENA • APAC • Europe</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-[#C8F16B]/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#C8F16B]" />
                    <span>Policy • AI • Market Entry</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
               
               {/* Primary Button */}
               <button 
                 onClick={() => navigate('/contact')} 
                 className="
                   group/btn relative w-full md:w-auto
                   px-10 py-5 rounded-full 
                   bg-[#C8F16B] text-[#0B1F1C] 
                   font-bold text-lg tracking-wide
                   transition-all duration-300 ease-out
                   hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(200,241,107,0.3)]
                   flex items-center justify-center gap-3
                 "
               >
                 Book a Strategic Call
                 <ArrowRight size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
               </button>

               {/* Secondary Link */}
               <button 
                  onClick={() => navigate('/services')}
                  className="text-white/60 hover:text-white font-medium text-sm md:text-base border-b border-transparent hover:border-[#C8F16B] pb-0.5 transition-all"
               >
                  Or explore how we work →
               </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;