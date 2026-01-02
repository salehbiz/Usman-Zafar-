import React from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F6F2] to-[#ECEAE4] py-20 lg:py-24">
      
      {/* Background Texture - Subtle Noise */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03]"></div>
      </div>

      {/* Main Container - Full Width Layout */}
      <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             
             {/* LEFT COLUMN: Text Content */}
             <div className="flex flex-col items-start relative z-10 order-2 lg:order-1">
                
                {/* Eyebrow Label */}
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                   <span className="text-[#124442] font-bold text-xs uppercase tracking-[0.25em]">About</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#124442] mb-4 tracking-tight leading-[1.05]">
                   Meet Dr. Usman Zafar
                </h2>

                {/* Role Highlight */}
                <h3 className="text-xl text-[#1A5A59] font-medium mb-8 tracking-wide">
                   Global Strategic Advisor
                </h3>

                {/* Paragraph */}
                <p className="text-[#124442]/80 text-lg leading-[1.7] mb-10 max-w-xl font-light">
                   Dr. Usman Zafar is a global business strategist and advisor with over two decades of experience leading market expansion, investment strategy, and digital transformation across the Middle East, Asia Pacific, and Africa. His work bridges policy, capital, and execution to help governments and founders build scalable systems.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 mb-12 w-full">
                   <div className="flex items-center gap-4 group/item">
                      <CheckCircle2 className="text-[#C8F16B] shrink-0 fill-[#124442]" size={20} />
                      <p className="text-[#124442] text-base font-medium">Global market expansion & investment strategy</p>
                   </div>
                   <div className="flex items-center gap-4 group/item">
                      <CheckCircle2 className="text-[#C8F16B] shrink-0 fill-[#124442]" size={20} />
                      <p className="text-[#124442] text-base font-medium">Policy, AI, and execution-led advisory</p>
                   </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                   <button 
                      onClick={() => navigate('/about')}
                      className="group/btn px-8 py-4 bg-[#C8F16B] text-[#0B1F1C] rounded-full font-bold text-sm hover:bg-[#124442] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#C8F16B]/20 hover:-translate-y-1"
                   >
                      View Full Profile
                      <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                   </button>
                   
                   <button 
                      onClick={() => navigate('/contact')}
                      className="group/btn-sec px-8 py-4 bg-transparent border border-[#124442]/20 text-[#124442] rounded-full font-medium text-sm hover:bg-[#124442] hover:text-white hover:border-[#124442] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                   >
                      Request Consultation
                      <ArrowUpRight size={18} />
                   </button>
                </div>

             </div>

             {/* RIGHT COLUMN: Image - Natural, No Overlay */}
             <div 
               className="relative h-[400px] lg:h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl group/image order-1 lg:order-2"
             >
                <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                   alt="Dr. Usman Zafar" 
                   className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover/image:scale-[1.03]"
                />
                
                {/* Inner Border for Polish */}
                <div className="absolute inset-0 border border-[#124442]/5 rounded-[40px] pointer-events-none"></div>

                {/* Badge - Light Mode Glass */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md border border-white/40 px-5 py-2.5 rounded-full hidden md:flex items-center gap-3 shadow-xl transition-transform duration-500 hover:scale-105 group-hover/image:translate-y-[-5px]">
                   <div className="w-2 h-2 rounded-full bg-[#C8F16B] shadow-[0_0_10px_#C8F16B] animate-pulse"></div>
                   <span className="text-[#124442] text-xs font-bold uppercase tracking-widest">Available for Advisory</span>
                </div>
             </div>

           </div>

      </div>
    </section>
  );
};

export default AboutSection;