import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoreValue: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Heading */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand tracking-tight leading-[1.1]">
            Building systems that <br/>
            scale leadership, <br/>
            markets, and <br/>
            <span className="text-brand/50">innovation.</span>
          </h2>
        </div>

        {/* Right: Editorial Text & Seal */}
        <div className="relative flex flex-col items-start gap-8">
          <div className="absolute -top-24 -right-12 hidden lg:block opacity-20 pointer-events-none">
             {/* Rotating text seal simulation */}
             <div className="w-40 h-40 rounded-full border border-brand border-dashed animate-spin-slow flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-brand/50"></div>
             </div>
          </div>

          <p className="text-lg md:text-xl text-brand/80 leading-relaxed max-w-lg">
            Organizations today face unprecedented complexity. We provide the structural clarity needed to navigate volatility, ensuring that high-level strategy translates into on-the-ground execution.
          </p>
          
          <button 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-3 text-brand font-semibold text-lg border-b border-brand/20 pb-1 hover:border-brand transition-all"
          >
            Explore Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoreValue;