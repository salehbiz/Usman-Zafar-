import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, TrendingUp } from 'lucide-react';

const AriaIntro: React.FC = () => {
  return (
    <section className="w-full mt-32 md:mt-48 mb-12 md:mb-20 px-6 md:px-12">
      <div className="relative w-full pb-16 md:pb-24 overflow-visible bg-transparent z-10">

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 flex flex-col space-y-6 lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="text-[#C8F16B] font-bold text-[10px] uppercase tracking-[0.3em]">INTRODUCING ARIA</span>
            <div className="w-8 h-[1px] bg-[#C8F16B]/30"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-semibold text-[#F3F6F4] tracking-tighter leading-[1.05]">
            Meet <span className="text-[#C8F16B]">Aria.</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#F3F6F4] font-medium leading-tight max-w-lg">
            Usman’s AI assistant for strategy, websites, positioning, and growth.
          </p>

          <p className="text-[#F3F6F4]/70 text-lg font-light leading-[1.8] max-w-lg">
            Ask Aria what you’re working on, where you’re stuck, or what you’re trying to build. She’ll help you clarify the next step — and, if it makes sense, connect you with Usman.
          </p>

          <div className="pt-4">
            <Link 
              to="/aria"
              className="inline-flex items-center gap-3 bg-[#C8F16B] text-[#0B2625] rounded-full px-8 py-4 font-bold shadow-[0_10px_30px_rgba(200,241,107,0.2)] hover:shadow-[0_15px_40px_rgba(200,241,107,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              <span>Learn more</span>
              <ArrowRight size={18} />
            </Link>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-[#F3F6F4]/60 italic">
              <div className="w-4 h-[1px] bg-[#F3F6F4]/20"></div>
              <span>Use the voice assistant in the bottom-right to begin.</span>
            </div>
          </div>

          {/* Feature Mini-row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-8 border-t border-white/10 w-full mt-4">
            <div className="flex items-center gap-2">
               <Lightbulb size={16} className="text-[#C8F16B]" />
               <span className="text-white/80 text-sm font-medium">Get clarity on your ideas</span>
            </div>
            <div className="flex items-center gap-2">
               <Target size={16} className="text-[#C8F16B]" />
               <span className="text-white/80 text-sm font-medium">Improve your positioning</span>
            </div>
            <div className="flex items-center gap-2">
               <TrendingUp size={16} className="text-[#C8F16B]" />
               <span className="text-white/80 text-sm font-medium">Take the next step with confidence</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
           {/* Circular Line/Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-[#C8F16B]/20 rounded-full flex items-center justify-center">
             <div className="w-[80%] h-[80%] border border-[#C8F16B]/10 rounded-full"></div>
           </div>

           <div className="relative w-[300px] md:w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden z-10 shadow-2xl">
              <img 
                src="https://i.postimg.cc/d1n8ff2V/aria.png" 
                alt="Aria AI Assistant"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out hover:scale-105"
              />
           </div>
        </div>

        </div>
      </div>

      {/* Bottom Micro-copy */}
      <div className="text-center mt-10 space-y-2">
        <p className="text-[#124442] font-bold text-[11px] uppercase tracking-[0.25em]">
          BUILT FOR HELPFUL, HONEST CONVERSATIONS.
        </p>
        <p className="text-[#124442]/60 text-sm">
          Practical advice. Strategic direction. Real results.
        </p>
      </div>
    </section>
  );
};

export default AriaIntro;
