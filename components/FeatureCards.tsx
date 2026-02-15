import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 -mt-[24px] md:-mt-[40px] lg:-mt-[60px] relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image Collage */}
        <div className="relative h-[600px] w-full">
           {/* Back Image */}
           <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[32px] overflow-hidden shadow-lg transform translate-x-4 translate-y-4 bg-gray-200">
              <img src="https://picsum.photos/seed/case1/800/1000" className="w-full h-full object-cover opacity-80" alt="Strategy Session" />
           </div>
           
           {/* Front Image */}
           <div className="absolute bottom-0 left-0 w-[75%] h-[75%] rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-[#F6F5EF] group cursor-pointer">
              <img src="https://picsum.photos/seed/case2/800/1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Global Conference" />
              
              {/* Tooltip Microcard */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px] animate-float">
                 <p className="text-xs text-brand/50 font-bold uppercase tracking-wider mb-1">Impact</p>
                 <p className="text-brand font-semibold text-sm">Successfully entered 3 new APAC markets in 12 months.</p>
              </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-start">
           <span className="text-brand/60 font-medium tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-accent"></span>
             Selected Works
           </span>
           
           <h2 className="text-4xl md:text-5xl font-semibold text-brand mb-6 leading-[1.1] tracking-tight">
             Transforming ambition <br/> into market reality.
           </h2>
           
           <p className="text-xl text-brand/70 mb-10 leading-relaxed max-w-lg">
             From guiding government policy to accelerating enterprise growth, our portfolio reflects a commitment to high-stakes execution.
           </p>

           <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/services/market-acceleration')}
                className="px-8 py-4 bg-brand text-white rounded-full font-medium hover:shadow-lg hover:shadow-brand/20 transition-all flex items-center gap-2"
              >
                View Portfolio
                <ArrowRight size={18} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureCards;