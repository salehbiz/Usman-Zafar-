import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_CONTENT } from '../constants';

const ThoughtLeadership: React.FC = () => {
  const navigate = useNavigate();
  // Updated key to match constants.tsx and fixed property access
  const content = SERVICE_CONTENT['keynotes-public-speaking'];

  if (!content) return null;

  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Typography */}
        <div className="relative z-10 order-2 lg:order-1">
          <span className="text-[#C8F16B] font-medium tracking-widest text-xs uppercase mb-8 block">
             Thought Leadership
          </span>
          <h2 className="text-4xl lg:text-6xl font-medium text-white mb-8 tracking-[-0.02em] leading-[1.1]">
            Shaping leaders, markets, and future systems.
          </h2>
          <p className="text-[#F3F6F4]/60 text-lg leading-relaxed mb-12 max-w-lg font-light">
            {content.sections[0]?.content}
          </p>
          
          <button 
             onClick={() => navigate('/pages/keynotes-public-speaking')}
             className="group flex items-center gap-3 text-white font-medium text-lg"
          >
             <span className="border-b border-white/30 pb-1 group-hover:border-[#C8F16B] group-hover:text-[#C8F16B] transition-all">
                View Keynotes
             </span>
             <ArrowRight size={20} className="text-[#C8F16B] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Cinematic Visual */}
        <div className="relative order-1 lg:order-2 group">
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-2xl border border-white/5">
             <img 
               src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop" 
               alt="Keynote Speaking"
               className="w-full h-full object-cover opacity-80 transition-transform duration-[20s] ease-linear group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C] via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-[#C8F16B]/5 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

      </div>
    </section>
  );
};

export default ThoughtLeadership;