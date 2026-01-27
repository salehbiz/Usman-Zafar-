import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortfolioImpact: React.FC = () => {
   const navigate = useNavigate();

   return (
      <section className="py-24 px-6 md:px-12 bg-[#F6F5EF] overflow-hidden">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-10">
               <span className="text-[#124442]/50 font-medium tracking-widest text-xs uppercase mb-6 block">Our Impact</span>
               <h2 className="text-4xl lg:text-6xl font-semibold text-[#124442] mb-8 tracking-[-0.02em] leading-[1.1]">
                  Shaping leaders, <br /> markets, and <br /> future systems.
               </h2>
               <p className="text-[#124442]/70 text-lg leading-relaxed mb-10 max-w-md font-light">
                  From advising government ministries on policy reform to guiding multinational boards through digital transformation, our footprint is global and enduring.
               </p>

               <button
                  onClick={() => navigate('/services/market-acceleration')}
                  className="group inline-flex items-center gap-3 text-[#124442] font-medium text-lg border-b border-[#124442]/20 pb-1 hover:border-[#124442] transition-all"
               >
                  Explore Case Studies <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="space-y-4 md:space-y-6 translate-y-8">
                  <div className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-lg">
                     <img src="https://images.unsplash.com/photo-1541818767794-2b9626da71b1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Global Forum" loading="lazy" />
                  </div>
                  <div className="rounded-[32px] overflow-hidden aspect-square shadow-lg">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Boardroom" loading="lazy" />
                  </div>
               </div>
               <div className="space-y-4 md:space-y-6 -translate-y-8">
                  <div className="rounded-[32px] overflow-hidden aspect-square shadow-lg">
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Architecture" loading="lazy" />
                  </div>
                  <div className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-lg">
                     <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Conference" loading="lazy" />
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default PortfolioImpact;