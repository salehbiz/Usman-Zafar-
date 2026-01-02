import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Cpu, Building2, BookOpen, GraduationCap, Mic, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24 font-sans text-[#124442] overflow-x-hidden selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* Global Ambient Gradients (Fixed Background) */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[#124442]/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#C8F16B]/[0.05] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-10">

        {/* 1. HERO / INTRO SECTION (Full Width Background) */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-20">
           <div className="relative w-full h-[480px] lg:h-[620px] rounded-[40px] overflow-hidden shadow-2xl animate-fade-in group">
              
              {/* Background Image */}
              <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                  alt="Dr. Usman Zafar" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-[3s] ease-out group-hover:scale-105"
              />

              {/* Overlays for Readability */}
              {/* 1. Multiply blend for depth */}
              <div className="absolute inset-0 bg-[#124442]/40 mix-blend-multiply"></div>
              
              {/* 2. Vertical Gradient: Dark Top -> Transparent Bottom */}
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(180deg, rgba(18,68,66,0.85) 0%, rgba(18,68,66,0.55) 50%, rgba(18,68,66,0.25) 100%)' }}
              ></div>

              {/* 3. Horizontal Gradient: Left Dark -> Right Transparent (Ensures text contrast) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F1C]/90 via-[#0B1F1C]/40 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-start z-10">
                  
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-3 text-xs md:text-sm font-bold mb-8 uppercase tracking-widest">
                      <span className="text-white/60 cursor-pointer hover:text-[#C8F16B] transition-colors" onClick={() => navigate('/')}>Home</span>
                      <span className="text-[#C8F16B]">/</span>
                      <span className="text-white">About</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-white tracking-tighter mb-6 leading-[1.05] drop-shadow-lg max-w-4xl">
                     About Dr. Usman Zafar
                  </h1>
                  
                  {/* Subtitle & Line */}
                  <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                      <div className="w-12 h-1.5 bg-[#C8F16B] rounded-full hidden md:block shadow-[0_0_10px_#C8F16B]"></div>
                      <h2 className="text-xl md:text-2xl text-[#F3F6F4] font-medium tracking-wide max-w-3xl">
                         Global Strategic Advisor | Market Accelerator | Policy & AI Specialist
                      </h2>
                  </div>

                  {/* Punchy Intro */}
                  <p className="text-lg md:text-xl text-[#F3F6F4]/80 font-light max-w-2xl leading-relaxed">
                     Advising governments and boards on navigating the complexities of the digital economy, regulatory frameworks, and global market expansion.
                  </p>
              </div>

              {/* Right Side Pill (Floating) */}
              <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all cursor-pointer" onClick={() => navigate('/')}>
                   <span className="text-white text-sm font-medium">Home</span>
                   <ArrowRight size={14} className="text-[#C8F16B]" />
                   <span className="text-[#C8F16B] text-sm font-medium">About</span>
              </div>
           </div>
        </section>

        {/* 2. MAIN BIO & IMAGE */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Image Column (Secondary/Action Shot) */}
              <div className="lg:col-span-5 lg:order-2">
                 <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group">
                    <img 
                       src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                       alt="Strategic Consultation" 
                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                    
                    {/* Executive Image Treatment */}
                    <div className="absolute inset-0 border-[6px] border-white/10 rounded-[32px] pointer-events-none z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#124442]/30 to-transparent opacity-60 mix-blend-multiply z-10"></div>
                 </div>
                 {/* Floating Accent Blob behind image */}
                 <div className="absolute top-10 right-10 -z-10 w-full h-full bg-[#124442]/5 rounded-[32px] transform rotate-3"></div>
              </div>

              {/* Text Content Column */}
              <div className="lg:col-span-7 lg:order-1 space-y-8 text-lg text-[#124442]/80 leading-[1.8] font-light">
                 {/* 1. Lead Paragraph (Authority) */}
                 <p className="first-letter:text-5xl first-letter:font-semibold first-letter:text-[#124442] first-letter:mr-3 first-letter:float-left">
                    Dr. Usman Zafar advises governments, boards, and high-growth enterprises on navigating policy, capital, and technology at scale. He operates at the intersection of regulatory frameworks and market reality, providing the strategic architecture for sustainable expansion.
                 </p>
                 
                 {/* 2. Expansion Paragraph (Scope) */}
                 <p>
                    With a strategic footprint across the Middle East, Asia Pacific, and Africa, his work bridges the critical gap between high-level vision and on-the-ground execution. Whether structuring national AI frameworks, guiding cross-border investment, or advising on digital sovereignty, Dr. Zafar partners with ministries and regulators to ensure that ambition translates into measurable economic impact.
                 </p>
                 
                 {/* 3. Strategic Differentiation (Quote) */}
                 <div className="relative pl-6 border-l-2 border-[#C8F16B] py-2 my-2">
                    <p className="italic text-[#124442] font-medium text-xl">
                       "Advisory that translates policy intent into executable systems—across borders, sectors, and emerging technologies."
                    </p>
                 </div>
                 
                 {/* 4. Closing Paragraph (Outcome) */}
                 <p>
                    In an era defined by rapid disruption and geopolitical flux, he provides the structural clarity leaders need to build resilient, future-ready institutions—making long-term decisions that secure sovereignty and growth.
                 </p>
              </div>
           </div>
        </section>

        {/* 3. IMPACT & EXPERIENCE HIGHLIGHTS (Floating Glass) */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-28">
           <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 md:p-14 border border-white/50 shadow-[0_20px_40px_-15px_rgba(18,68,66,0.08)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(18,68,66,0.12)] transition-shadow duration-500">
              
              {/* Subtle Gradient Wash */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-[#C8F16B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                 {[
                    { icon: Globe, text: "Global Market Expansion & Investment Strategy" },
                    { icon: ShieldCheck, text: "Policy-Aligned Execution & Governance" },
                    { icon: Cpu, text: "AI & Digital Transformation Leadership" },
                    { icon: Building2, text: "Board-Level & Government Advisory" }
                 ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-5 group/item">
                       <div className="w-14 h-14 rounded-2xl bg-[#124442]/5 flex items-center justify-center text-[#124442] group-hover/item:bg-[#124442] group-hover/item:text-[#C8F16B] transition-all duration-300 shadow-sm">
                          <item.icon size={26} strokeWidth={1.5} />
                       </div>
                       <p className="text-[#124442] font-medium leading-snug pr-4 text-[17px]">{item.text}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. NAVIGATION CARDS (Professional Focus) */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24 lg:mb-32">
           <div className="flex items-end gap-6 mb-12 border-b border-[#124442]/10 pb-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#124442]">Professional Focus</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-[#124442]/20 to-transparent mb-2 hidden md:block"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {[
                  { 
                      title: "Work & Portfolio", 
                      icon: Briefcase, 
                      path: '/work-experience', 
                      desc: "Strategic outcomes.", 
                      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                  },
                  { 
                      title: "Global Keynotes", 
                      icon: Mic, 
                      path: '/services/global-keynotes', 
                      desc: "Speaking engagements.", 
                      img: "https://images.unsplash.com/photo-1475721027767-p05a6db14ba0?q=80&w=2669&auto=format&fit=crop" 
                  },
                  { 
                      title: "Academic Experience", 
                      icon: BookOpen, 
                      path: '/academic-experience', 
                      desc: "Research & policy.", 
                      img: "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?q=80&w=2670&auto=format&fit=crop" 
                  },
                  { 
                      title: "Education", 
                      icon: GraduationCap, 
                      path: '/education', 
                      desc: "Qualifications.", 
                      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop" 
                  }
              ].map((card, i) => (
                  <div 
                    key={i}
                    onClick={() => navigate(card.path)} 
                    className="group relative h-[320px] rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#0B1F1C]"
                  >
                     {/* Background Image */}
                     <img 
                        src={card.img} 
                        alt={card.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 grayscale mix-blend-luminosity" 
                     />
                     
                     {/* Dark Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                     <div className="absolute inset-0 bg-[#124442]/20 mix-blend-overlay"></div>

                     {/* Content */}
                     <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C8F16B] border border-white/10 group-hover:bg-[#C8F16B] group-hover:text-[#0B1F1C] transition-colors duration-300">
                           <card.icon size={22} />
                        </div>

                        <div>
                           <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{card.title}</h3>
                           <p className="text-white/60 text-sm mb-6">{card.desc}</p>
                           
                           <div className="flex items-center gap-2 text-white font-medium text-sm border-t border-white/10 pt-4 group-hover:text-[#C8F16B] transition-colors">
                              View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                           </div>
                        </div>
                     </div>
                  </div>
              ))}

           </div>
        </section>

        {/* 5. HERO-STYLE CTA */}
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
                    Partner with an advisor who bridges the gap between high-level policy and on-the-ground execution.
                 </p>
                 
                 <button 
                    onClick={() => navigate('/contact')}
                    className="px-10 py-5 bg-gradient-to-r from-[#C8F16B] to-[#B5DC5A] text-[#0B1F1C] rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(200,241,107,0.4)] hover:scale-105 transition-all duration-300 transform"
                 >
                    Book a Strategic Call
                 </button>
               </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default About;