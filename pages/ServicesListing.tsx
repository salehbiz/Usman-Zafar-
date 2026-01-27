import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Globe, Layers, Zap, ArrowUpRight } from 'lucide-react';

const ServicesListing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // UPDATED SERVICES LIST (7 Items) - Exact matches from request
  const SERVICES_GRID = [
    {
      title: "Board Advisory & Market Acceleration",
      desc: "Strategic guidance for board decisions and accelerated market entry with proven methodologies.",
      image: "https://i.postimg.cc/tJQsKHT7/image.png",
      path: "/pages/board-advisory-market-acceleration"
    },
    {
      title: "Smart Cities Strategic Advisory",
      desc: "Comprehensive urban planning and smart infrastructure development consulting.",
      image: "https://i.postimg.cc/xCHCyFR2/image.png",
      path: "/pages/smart-cities-strategic-advisory"
    },
    {
      title: "Artificial Intelligence Advisory",
      desc: "Expert AI strategy development and implementation guidance for transformation.",
      image: "https://i.postimg.cc/QdydLrYC/image.png",
      path: "/pages/artificial-intelligence-advisory"
    },
    {
      title: "Keynotes & Public Speaking",
      desc: "Inspiring presentations and thought leadership on emerging technologies and trends.",
      image: "https://i.postimg.cc/28HzvDDx/image.png",
      path: "/pages/keynotes-public-speaking"
    },
    {
      title: "Academic Advisory & Accreditation",
      desc: "Educational program development and institutional accreditation support services.",
      image: "https://i.postimg.cc/4xDRb4F7/image.png",
      path: "/pages/academic-advisory-accreditation"
    },
    {
      title: "Fund Raising Services",
      desc: "Strategic fundraising support and investor relations for growth-stage companies.",
      image: "https://i.postimg.cc/YS6Z66WX/image.png",
      path: "/pages/fund-raising-services"
    },
    {
      title: "Executive Training & Coaching",
      desc: "Leadership development and executive coaching programs for senior management teams.",
      image: "https://i.postimg.cc/C5QQhJ3Z/image.png",
      path: "/pages/executive-training-coaching"
    }
  ];

  const FOCUS_AREAS = [
    "Government & Policy Advisory",
    "Smart Cities & Digital Infrastructure",
    "AI Strategy & Digital Transformation",
    "Market Entry & Scale-Up Advisory",
    "Board & Executive Advisory"
  ];

  const WHY_US_FEATURES = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Policy-Aligned Execution",
      desc: "Strategies that withstand regulatory scrutiny and political shifts."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Market Access",
      desc: "Deep networks spanning the Middle East, Asia Pacific, and Africa."
    },
    {
      icon: <Layers size={28} />,
      title: "Board-Level Perspective",
      desc: "Governance structures that ensure long-term resilience."
    },
    {
      icon: <Zap size={28} />,
      title: "Beyond Strategy",
      desc: "We don't just advise on the roadmap; we oversee the execution."
    }
  ];

  return (
    <div className="bg-[#F6F5EF] min-h-screen font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION - Full Bleed / Dark */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
            src="https://i.postimg.cc/Xq8D5sS6/image.png" 
            alt="Advisory Services" 
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at center, rgba(18,68,66,0.85) 0%, rgba(14,58,54,0.95) 100%)' }}></div>
        <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 md:px-12 max-w-[1000px] mt-16 animate-fade-in">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-10 shadow-lg">
                <span className="text-white/70 text-sm font-medium cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/')}>Home</span>
                <ArrowRight size={14} className="text-[#C8F16B]" />
                <span className="text-[#C8F16B] text-sm font-medium">Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-semibold text-white tracking-tighter mb-8 leading-[1.05] drop-shadow-2xl">
                Services
            </h1>
            <p className="text-xl md:text-2xl text-[#F3F6F4]/80 font-light max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions for leaders navigating complexity, scale, and digital disruption.
            </p>
        </div>
      </section>

      {/* 2. INTRO SECTION - Light */}
      <section className="px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
           
           {/* Left: Executive Summary */}
           <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                 <span className="text-[#124442] font-bold text-xs uppercase tracking-[0.2em]">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#124442] mb-8 leading-[1.15] tracking-tight">
                 Strategic Advisory & Execution for Governments, Boards, and Founders
              </h2>
              <p className="text-[#124442]/70 text-lg leading-relaxed font-light">
                 Dr. Usman Zafar operates where policy meets practice. Our advisory approach is globally informed but locally grounded, helping organizations bridge the gap between high-level ambition and on-the-ground reality. Whether entering new markets or implementing national AI frameworks, we provide the structural clarity needed to succeed.
              </p>
           </div>

           {/* Right: Key Areas List */}
           <div className="bg-white rounded-[32px] p-8 lg:p-12 border border-[#124442]/5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#124442] mb-8">Key Areas We Focus On</h3>
              <ul className="space-y-6">
                 {FOCUS_AREAS.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                       <div className="w-8 h-8 rounded-full bg-[#C8F16B]/20 flex items-center justify-center text-[#124442] shrink-0 group-hover:bg-[#C8F16B] transition-colors">
                          <Check size={14} strokeWidth={3} />
                       </div>
                       <span className="text-[#124442]/80 text-lg font-medium group-hover:text-[#124442] transition-colors">
                          {area}
                       </span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US - Dark */}
      <section className="bg-[#0B1F1C] py-24 px-6 md:px-12 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#124442]/20 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Left: Image Card */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl border border-white/10 group">
               <img 
                  src="https://i.postimg.cc/cJSwq08q/image.png" 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                     <p className="text-[#C8F16B] font-bold text-xs uppercase tracking-widest mb-2">Our Philosophy</p>
                     <p className="text-white text-lg font-medium leading-snug">"Clarity is the ultimate competitive advantage in a complex world."</p>
                  </div>
               </div>
            </div>

            {/* Right: Features */}
            <div>
               <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight">Why Leaders Partner With Us</h2>
               <div className="space-y-4">
                  {WHY_US_FEATURES.map((feature, idx) => (
                     <div 
                        key={idx} 
                        className="group flex items-center gap-6 p-6 rounded-[24px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-[#C8F16B]/20 hover:translate-x-2 transition-all duration-300 cursor-default"
                     >
                        <div className="w-14 h-14 rounded-xl bg-[#C8F16B]/10 flex items-center justify-center text-[#C8F16B] shrink-0 group-hover:bg-[#C8F16B] group-hover:text-[#0B1F1C] transition-colors shadow-[0_0_15px_rgba(200,241,107,0.1)]">
                           {feature.icon}
                        </div>
                        <div>
                           <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-[#C8F16B] transition-colors">{feature.title}</h4>
                           <p className="text-white/60 text-sm leading-relaxed font-light">{feature.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. SERVICES GRID - Light */}
      <section className="py-24 px-6 md:px-12 bg-[#F6F5EF]">
         <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center mb-16">
               <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
               <h2 className="text-4xl lg:text-5xl font-semibold text-[#124442] tracking-tight leading-tight max-w-3xl mx-auto">
                  Tailored Advisory Services <br/> to Build, Scale & Govern Systems
               </h2>
            </div>

            {/* GRID LAYOUT: Desktop 4 columns (flows 4 then 3 for 7 items), Tablet 2, Mobile 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {SERVICES_GRID.map((service, idx) => (
                  <div 
                     key={idx}
                     onClick={() => navigate(service.path)}
                     className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-[#124442]/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(18,68,66,0.1)] hover:-translate-y-2 hover:border-[#C8F16B]/30 transition-all duration-300 cursor-pointer h-full"
                  >
                     {/* Card Image */}
                     <div className="relative h-48 overflow-hidden">
                        <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#124442]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                     </div>

                     {/* Card Content */}
                     <div className="p-6 flex flex-col flex-grow relative">
                        {/* Hover Top Border Glow */}
                        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C8F16B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h3 className="text-lg font-bold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors min-h-[54px]">
                           {service.title}
                        </h3>
                        <p className="text-[#124442]/60 text-sm leading-relaxed mb-6 line-clamp-3">
                           {service.desc}
                        </p>

                        <div className="mt-auto flex justify-between items-center border-t border-[#124442]/5 pt-4">
                           <span className="text-[#124442] text-xs font-bold uppercase tracking-widest group-hover:text-[#1A5A59]">View Service</span>
                           <div className="w-8 h-8 rounded-full bg-[#F6F5EF] flex items-center justify-center text-[#124442] group-hover:bg-[#C8F16B] transition-colors">
                              <ArrowUpRight size={16} />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CUSTOM CTA SECTION - Dark */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
         <div className="relative rounded-[48px] p-12 md:p-20 text-center overflow-hidden shadow-2xl bg-[#0B1F1C] group border border-white/5">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#124442] via-[#0B1F1C] to-[#082220]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
            
            {/* Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F16B]/5 rounded-full blur-[120px] group-hover:bg-[#C8F16B]/10 transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.05]">
                  Let’s Build Systems <br/> That Endure
               </h2>
               <p className="text-[#F3F6F4]/60 text-lg md:text-xl mb-12 font-light max-w-2xl">
                  Policy. AI. Markets. Execution — delivered with global credibility.
               </p>
               
               <button 
                  onClick={() => navigate('/contact')}
                  className="relative group/btn px-10 py-5 bg-[#C8F16B] text-[#0B1F1C] rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(200,241,107,0.3)] flex items-center gap-3 overflow-hidden"
               >
                  <span className="relative z-10 flex items-center gap-3">
                     Book a Strategic Call <ArrowRight size={20} />
                  </span>
                  {/* Sheen Effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover/btn:animate-[shimmer_1s_infinite]"></div>
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServicesListing;