import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Globe, Layers, Zap, ArrowUpRight } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const ServicesListing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Specific Service Data for the Grid (8 Items as requested)
  const SERVICES_GRID = [
    {
      title: "Government & Public Sector Advisory",
      desc: "Policy alignment, digital sovereignty frameworks, and national-scale transformation strategies.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      path: "/services/government-enterprise"
    },
    {
      title: "Smart Cities Strategic Advisory",
      desc: "Designing future-ready urban ecosystems, digital twins, and sustainable infrastructure.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2669&auto=format&fit=crop",
      path: "/services/smart-cities"
    },
    {
      title: "AI Strategy & Digital Transformation",
      desc: "From algorithmic governance to enterprise-wide AI adoption and operational resilience.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      path: "/services/ai-advisory"
    },
    {
      title: "Market Acceleration & Entry Strategy",
      desc: "Navigating regulatory landscapes to scale ventures across MENA, APAC, and beyond.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      path: "/services/market-acceleration"
    },
    {
      title: "Board Advisory & Governance",
      desc: "Ensuring long-term stability, succession planning, and decision clarity for boards.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
      path: "/services/board-advisory"
    },
    {
      title: "Fundraising & Capital Strategy",
      desc: "Structuring capital raises, investor narratives, and public-private partnerships.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop",
      path: "/services/fundraising"
    },
    {
      title: "Digital Sovereignty & Data Policy",
      desc: "Protecting national and corporate data assets in an era of geopolitical fragmentation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      path: "/services/ai-advisory" // Mapping to AI/Policy
    },
    {
      title: "Keynote Speaking & Executive Briefings",
      desc: "High-impact insights on leadership, future economies, and technological disruption.",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop",
      path: "/services/global-keynotes"
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
      icon: <ShieldCheck size={24} />,
      title: "Policy-Aligned Execution",
      desc: "Strategies that withstand regulatory scrutiny and political shifts."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Market Access",
      desc: "Deep networks spanning the Middle East, Asia Pacific, and Africa."
    },
    {
      icon: <Layers size={24} />,
      title: "Board-Level Perspective",
      desc: "Governance structures that ensure long-term resilience."
    },
    {
      icon: <Zap size={24} />,
      title: "Beyond Strategy",
      desc: "We don't just advise on the roadmap; we oversee the execution."
    }
  ];

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24 font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-24">
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl group">
            
            {/* Background Image */}
            <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
               alt="Advisory Services" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F1C]/90 via-[#0B1F1C]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[#124442]/20 mix-blend-multiply"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-start z-10">
                <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-white tracking-tighter mb-6 leading-[1.05] drop-shadow-lg">
                   Services
                </h1>
                <p className="text-lg md:text-xl text-[#F3F6F4]/90 font-light max-w-xl leading-relaxed">
                   Comprehensive advisory solutions for leaders navigating complexity, scale, and digital disruption.
                </p>
            </div>

            {/* Breadcrumb Pill (Bottom Right) */}
            <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all cursor-pointer" onClick={() => navigate('/')}>
               <span className="text-white text-sm font-medium">Home</span>
               <ArrowRight size={14} className="text-[#C8F16B]" />
               <span className="text-[#C8F16B] text-sm font-medium">Services</span>
            </div>
        </div>
      </section>

      {/* 2. INTRO SECTION ("What We Do") */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-32">
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

      {/* 3. WHY CHOOSE US (Dark Section) */}
      <section className="bg-[#0B1F1C] py-24 px-6 md:px-12 relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Left: Image/Video Thumbnail Style */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl border border-white/10 group">
               <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
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

            {/* Right: Stacked Features */}
            <div>
               <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight">Why Leaders Partner With Us</h2>
               <div className="space-y-4">
                  {WHY_US_FEATURES.map((feature, idx) => (
                     <div 
                        key={idx} 
                        className="group flex items-start gap-6 p-6 rounded-[24px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300"
                     >
                        <div className="w-12 h-12 rounded-xl bg-[#C8F16B]/10 flex items-center justify-center text-[#C8F16B] shrink-0 group-hover:bg-[#C8F16B] group-hover:text-[#0B1F1C] transition-colors">
                           {feature.icon}
                        </div>
                        <div>
                           <h4 className="text-white text-lg font-semibold mb-2">{feature.title}</h4>
                           <p className="text-white/60 text-sm leading-relaxed font-light">{feature.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-24 px-6 md:px-12 bg-[#F6F5EF]">
         <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center mb-16">
               <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
               <h2 className="text-4xl lg:text-5xl font-semibold text-[#124442] tracking-tight leading-tight max-w-3xl mx-auto">
                  Tailored Advisory Services <br/> to Build, Scale & Govern Systems
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
               {SERVICES_GRID.map((service, idx) => (
                  <div 
                     key={idx}
                     onClick={() => navigate(service.path)}
                     className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-[#124442]/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(18,68,66,0.1)] hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
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
                     <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors min-h-[54px]">
                           {service.title}
                        </h3>
                        <p className="text-[#124442]/60 text-sm leading-relaxed mb-6 line-clamp-3">
                           {service.desc}
                        </p>

                        <div className="mt-auto flex justify-between items-center border-t border-[#124442]/5 pt-4">
                           <span className="text-[#124442] text-xs font-bold uppercase tracking-widest group-hover:text-[#1A5A59]">Explore</span>
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

      {/* 5. FINAL CTA (Dark Gradient) */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
         <div className="relative rounded-[48px] p-12 md:p-20 text-center overflow-hidden shadow-2xl bg-[#0B1F1C] group">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#124442] via-[#0B1F1C] to-[#082220]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
            
            {/* Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[100px] group-hover:bg-[#C8F16B]/10 transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                  Let’s build systems <br/> that endure.
               </h2>
               <p className="text-[#F3F6F4]/60 text-lg mb-10 font-light max-w-xl">
                  Strategic advisory for leaders navigating complexity, scale, and transformation.
               </p>
               
               <button 
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 bg-gradient-to-r from-[#C8F16B] to-[#B5DC5A] text-[#0B1F1C] rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(200,241,107,0.4)] hover:scale-105 transition-all duration-300 transform flex items-center gap-3"
               >
                  Book a Strategic Call
                  <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServicesListing;