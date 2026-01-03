import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Star, Award, ShieldCheck, Eye } from 'lucide-react';

// --- AWARDS DATA ---
const AWARDS_DATA = [
  {
    id: 1,
    title: "51 Most Impactful Smart Cities Leaders – Global Listing",
    description: "Recognizing influential contributions to Smart City development and sustainable digital transformation.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Leading Global Advisor of the Year – PRIME Awards",
    description: "Recognizing excellence in global advisory leadership and transformative strategic impact.",
    image: "https://images.unsplash.com/photo-1628108920110-63ce73456743?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Abu Dhabi Chamber SME Excellence Recognition",
    description: "Honoring contributions to SME development and economic advancement.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Young Achiever Award – GCC Leadership Awards",
    description: "Celebrating outstanding leadership potential and early career achievements.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Outstanding Global Leadership Award",
    description: "Awarded for influential global leadership and contributions to international development.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Federal Authority for Identity & Citizenship Appreciation Award",
    description: "For supporting national digital transformation and leading public-sector innovation.",
    image: "https://images.unsplash.com/photo-1531297461136-82lw9z1p7q3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "HCT Dubai – Industry Contribution Recognition",
    description: "Acknowledging leadership in academic–industry innovation partnerships.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Professional Doctorate Award – European International University",
    description: "Conferred for academic excellence and global leadership in international trade and business.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "HYGEAR Corporate Recognition Award",
    description: "Awarded for strategic advisory support and contribution to fitness technology innovation.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2680&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Manipal University – Industry Expertise Award",
    description: "For expert contributions to innovation, collaboration, and technology leadership.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "PITB Government Recognition Award",
    description: "Awarded by the Punjab IT Board for contributions to national-level digital transformation.",
    image: "https://images.unsplash.com/photo-1541818767794-2b9626da71b1?q=80&w=1287&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Ajman International Export Development Recognition",
    description: "Honoring insights into economic development, export growth, and trade innovation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Future IT Summit – Moderator Appreciation Award",
    description: "Recognizing leadership in moderating major industry panels on technology and innovation.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "News Time HD TV Smart City Contribution Award",
    description: "For outstanding contributions to national Smart City initiatives.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "PRIME Awards Certificate of Achievement",
    description: "Certifying excellence in global advisory leadership.",
    image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "PRIME Awards Asia – Guest of Honour Recognition",
    description: "Celebrating distinguished presence and leadership contributions in Asia.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Global Achievers Award",
    description: "Recognizing Dr. Usman Zafar for outstanding global leadership, business excellence, and impact as Chairman of World Business Hub (WBH).",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Certificate of Appreciation – Federal Authority (UAE)",
    description: "Recognized by the Federal Authority for Identity, Citizenship, Customs, and Port Security for contributions toward improving government services through the Zero Government Bureaucracy initiative.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Appreciation Certificate – HCT Innovation Month",
    description: "Recognized by the Higher Colleges of Technology for delivering an expert talk on technology transformation and future smart cities.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Certificate of Nomination – Business Excellence Award",
    description: "Nominated for exceptional leadership impact and outstanding professional performance at an international platform.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 21,
    title: "Certificate of Appreciation – HCT Industry Advisory Committee",
    description: "Recognized for valuable contributions and expert guidance as a member of the Computer Information Sciences Industry Advisory Committee.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop"
  }
];

const AwardsListing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION - Dark Theme */}
      <section className="relative w-full py-32 lg:py-40 px-6 md:px-12 bg-[#0B1F1C] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#124442] rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
               <Trophy size={14} className="text-[#C8F16B]" />
               <span className="text-[#C8F16B] text-xs font-bold uppercase tracking-widest">Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold text-white tracking-tighter mb-6 leading-[1.05] drop-shadow-2xl">
                Awards & <br/> Recognitions
            </h1>
            
            <p className="text-xl text-[#F3F6F4]/80 font-light max-w-2xl mx-auto leading-relaxed">
                Global recognition for leadership, innovation, and impact across technology, governance, and business.
            </p>
        </div>
      </section>

      {/* 2. AWARDS GRID SECTION - Updated with Premium Dark Cards */}
      <section className="px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {AWARDS_DATA.map((award) => (
               <div 
                  key={award.id}
                  className="group relative flex flex-col rounded-[24px] overflow-hidden bg-gradient-to-br from-[#134443] to-[#0B1F1E] border border-[#C8F16B]/10 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(200,241,107,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-default"
               >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C8F16B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* 1. Image Thumbnail Area */}
                  <div className="relative h-[280px] w-full overflow-hidden">
                     <img 
                        src={award.image} 
                        alt={award.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                     />
                     
                     {/* Overlay Gradient for readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1E] via-[#0B1F1E]/20 to-transparent"></div>

                     {/* Optional: View Action Icon on Hover */}
                     <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Eye size={16} />
                     </div>
                  </div>

                  {/* 2. Content Area */}
                  <div className="p-8 pt-8 flex flex-col flex-grow relative z-10">
                     
                     {/* Optional Badge */}
                     <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C8F16B]/10 border border-[#C8F16B]/20 text-[#C8F16B] text-[11px] font-bold uppercase tracking-widest">
                           <Award size={12} strokeWidth={2.5} /> Recognition
                        </span>
                     </div>

                     <h3 className="text-2xl font-bold text-[#F6F5EF] mb-4 leading-tight group-hover:text-white transition-colors">
                        {award.title}
                     </h3>
                     
                     <p className="text-[#F6F5EF]/70 text-base leading-relaxed font-light">
                        {award.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 3. CTA SECTION - Dark Theme */}
      <section className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
         <div className="relative rounded-[48px] p-12 md:p-20 text-center overflow-hidden shadow-2xl bg-[#0B1F1C] border border-white/5 group">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#124442] via-[#0B1F1C] to-[#082220]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
            
            {/* Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F16B]/5 rounded-full blur-[120px] group-hover:bg-[#C8F16B]/10 transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
               <div className="mb-6 flex justify-center">
                  <ShieldCheck size={48} className="text-[#C8F16B] opacity-80" strokeWidth={1} />
               </div>

               <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.05]">
                  Recognized for Impact. <br/> Trusted for Leadership.
               </h2>
               
               <p className="text-[#F3F6F4]/60 text-lg md:text-xl mb-12 font-light leading-relaxed">
                  From governments to global institutions, Dr. Usman Zafar’s work continues to shape the future of smart economies.
               </p>
               
               <button 
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 bg-[#C8F16B] text-[#0B1F1C] rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#C8F16B]/20 flex items-center gap-3"
               >
                  Work With Dr. Usman <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default AwardsListing;