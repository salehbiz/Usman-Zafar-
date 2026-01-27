import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    id: 1,
    title: "Board Advisory & Market Acceleration",
    description: "Strategic guidance for board decisions and accelerated market entry with proven methodologies.",
    image: "https://i.postimg.cc/zvW2Sh8H/image.png",
    path: "/pages/board-advisory-market-acceleration"
  },
  {
    id: 2,
    title: "Smart Cities Strategic Advisory",
    description: "Comprehensive urban planning and smart infrastructure development consulting.",
    image: "https://i.postimg.cc/0QKVPSMg/image.png",
    path: "/pages/smart-cities-strategic-advisory"
  },
  {
    id: 3,
    title: "Artificial Intelligence Advisory",
    description: "Expert AI strategy development and implementation guidance for transformation.",
    image: "https://i.postimg.cc/SKJrf9fP/image.png",
    path: "/pages/artificial-intelligence-advisory"
  },
  {
    id: 4,
    title: "Keynotes & Public Speaking",
    description: "Inspiring presentations and thought leadership on emerging technologies and trends.",
    image: "https://i.postimg.cc/MGM7QSWK/image.png",
    path: "/pages/keynotes-public-speaking"
  },
  {
    id: 5,
    title: "Fund Raising Services",
    description: "Strategic fundraising support and investor relations for growth-stage companies.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop",
    path: "/pages/fund-raising-services"
  }
];

const ServicesInteractive: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0B1F1C] overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS (Dark Premium Theme) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2F2E] via-[#124442] to-[#091A19]"></div>
        
        {/* Subtle Lime Glow (Low Opacity) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#C8F16B]/[0.05] rounded-full blur-[150px]"></div>
        
        {/* Deep Teal Haze */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1A5A59]/20 rounded-full blur-[120px]"></div>
        
        {/* Subtle Noise (Overlay) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: Typography & Dynamic Description --- */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-4">
            <div className="mb-2 flex items-center gap-3">
               <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
               <span className="text-[#C8F16B] font-bold text-xs uppercase tracking-[0.2em]">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-[#F6F5EF] mb-6 tracking-tight leading-[1.1]">
              What Services <br/> We’re Offering
            </h2>
            
            <p className="text-[#F6F5EF]/70 text-base leading-relaxed font-light mb-12 max-w-sm">
              Dr. Usman Zafar and his team at World Business Hub (WBH) provide premier Board Advisory and Market Acceleration Services, eliminating the need to recruit sales, marketing, or business development teams.
            </p>

            {/* Dynamic Description Box */}
            <div className="relative min-h-[120px]">
               {SERVICES.map((s) => (
                  <div 
                    key={s.id}
                    className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${activeId === s.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                     <div className="flex items-start gap-4">
                        <div className="w-1 h-12 bg-[#C8F16B] rounded-full shadow-[0_0_15px_rgba(200,241,107,0.3)]"></div>
                        <div>
                           <h4 className="text-white font-semibold text-lg mb-2">{s.title}</h4>
                           <p className="text-[#F6F5EF]/60 text-sm leading-relaxed max-w-xs">
                              {s.description}
                           </p>
                           <button 
                             onClick={() => navigate(s.path)}
                             className="mt-4 text-[#C8F16B] text-xs font-bold uppercase tracking-widest border-b border-[#C8F16B]/20 hover:border-[#C8F16B] pb-1 transition-colors"
                           >
                             Learn More
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          {/* --- MIDDLE COLUMN: Featured Image --- */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[450px] lg:h-[550px]">
             
             {/* Images Stack */}
             <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                {SERVICES.map((s) => (
                   <img 
                      key={s.id}
                      src={s.image}
                      alt={s.title}
                      className={`
                        absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                        ${activeId === s.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                      `}
                   />
                ))}
                
                {/* Dark Gradient Overlay for Blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/20 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                
                {/* Inner Border */}
                <div className="absolute inset-0 border-[1px] border-white/10 rounded-[32px] pointer-events-none"></div>

                {/* Floating Glass Highlight */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: Service List --- */}
          <div className="lg:col-span-4 pl-0 lg:pl-8 flex flex-col justify-center h-full">
             <div className="flex flex-col gap-3">
                {SERVICES.map((s) => (
                   <div 
                      key={s.id}
                      onMouseEnter={() => setActiveId(s.id)}
                      onClick={() => navigate(s.path)}
                      className={`
                        group relative flex items-center justify-between p-6 rounded-[20px] cursor-pointer
                        transition-all duration-500 border backdrop-blur-sm
                        ${activeId === s.id 
                           ? 'bg-[#C8F16B]/[0.05] border-[#C8F16B]/40 shadow-[0_10px_40px_-10px_rgba(200,241,107,0.15)] scale-[1.02] -translate-y-1' 
                           : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/10'
                        }
                      `}
                   >
                      <h3 className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${activeId === s.id ? 'text-white' : 'text-[#F6F5EF]/60 group-hover:text-white'}`}>
                         {s.title}
                      </h3>

                      {/* Arrow Button */}
                      <div className={`
                         w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                         ${activeId === s.id 
                            ? 'bg-[#C8F16B] text-[#0B2625] border-[#C8F16B] rotate-[-45deg]' 
                            : 'bg-white/5 text-white/40 border-white/10 group-hover:border-white/30 group-hover:text-white group-hover:rotate-[-15deg]'
                         }
                      `}>
                         <ArrowRight size={18} />
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesInteractive;