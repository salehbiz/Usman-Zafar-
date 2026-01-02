import React from 'react';
import { Check } from 'lucide-react';

const ValueMetrics: React.FC = () => {
  return (
    <section className="pt-7 pb-12 px-6 md:px-12 mb-[60px] md:mb-[80px] lg:mb-[120px]">
      <div className="max-w-[1200px] mx-auto relative">
        
        {/* Main Container */}
        <div className="relative rounded-[40px] overflow-hidden bg-brand p-12 md:p-20 text-center shadow-2xl">
          
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand via-brand-dark to-[#051818]"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Global Reach", "Cross-Sector Advisory", "50+ Countries"].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-accent text-sm font-medium uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight max-w-2xl leading-tight">
              Strategy that withstands <br/> real-world volatility.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left md:text-center w-full max-w-3xl">
               {[
                 "Actionable frameworks, not theory.",
                 "Direct access to global networks.",
                 "Execution support beyond the roadmap."
               ].map((item, idx) => (
                 <div key={idx} className="flex md:flex-col items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-white/80 font-medium text-lg">{item}</span>
                 </div>
               ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueMetrics;