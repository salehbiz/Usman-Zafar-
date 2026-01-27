import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Globe, ShieldCheck, Cpu, Building2, 
  Briefcase, Award, Mic, CheckCircle2, ChevronDown, ChevronUp, Linkedin, LayoutGrid,
  GraduationCap, BookOpen, Users
} from 'lucide-react';

const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "CEO",
    company: "World Business Hub (WBH)",
    period: "2021 – Present",
    logo: "https://i.postimg.cc/qvN55XHt/image.png",
    impact: [
      "Drive 30+ PPP/BOT projects across MENA & Africa.",
      "Market entry strategies & strategic partnerships.",
      "Multi-million-dollar contracts for smart infrastructure."
    ],
    skills: ["Smart Cities Strategy", "Global Market Expansion", "Investment & Fundraising", "PPP", "BOT", "C-Level Advisory", "Digital Transformation", "Strategic Partnerships", "Executive Leadership"]
  },
  {
    id: 2,
    role: "Board Advisor",
    company: "Bizmoni — All In One Super App",
    period: "2024 – Present",
    logo: "https://i.postimg.cc/qv25rBgJ/image.png",
    impact: [
      "Drive global expansion & attract investors.",
      "AI platform integrating social + marketplace + CRM.",
      "AI personalization & operations management."
    ],
    skills: ["International Business Development", "Director level", "Fundraising", "Non-Executive Director", "Digital Strategy", "Working with Investors", "Global Market Expansion", "Board of Directors", "Blockchain Consulting"]
  },
  {
    id: 3,
    role: "Senior Board Advisor",
    company: "SRIVEN",
    period: "2024 – Present",
    logo: "https://i.postimg.cc/1RTCNVN7/image.png",
    impact: [
      "Expansion across MENA/Africa regions.",
      "Digital strategy, cloud, cybersecurity & analytics.",
      "Investment growth & executive management."
    ],
    skills: ["International Business Development", "Investments", "Executive Management", "Board Development", "Business Strategy", "Channel Partners"]
  },
  {
    id: 4,
    role: "Board Advisor",
    company: "X0PA AI",
    period: "2024 – Present",
    logo: "https://i.postimg.cc/SRjPbWY5/image.png",
    impact: [
      "Expand operations in MENA region.",
      "AI recruitment platform & bias-free hiring strategy.",
      "Faster talent matching & strategic partnerships."
    ],
    skills: ["Artificial Intelligence (AI)", "Board Advisory Services", "Global Market Expansion", "International Business Development", "SaaS Development", "Director level", "Strategic Planning", "Channel Partners"]
  },
  {
    id: 5,
    role: "Business Partner & Senior Board Member",
    company: "Let’s Fame",
    period: "2025 – Present",
    logo: "https://i.postimg.cc/zGYxxmpZ/image.png",
    impact: [
      "Global expansion & funding strategy.",
      "Partnerships democratizing talent opportunities.",
      "Managing Director & Board Development."
    ],
    skills: ["Director level", "International Business Development", "Working with Investors", "Fund Raising", "Managing Director", "Board Development", "Strategic Partnerships"]
  },
  {
    id: 6,
    role: "Smart City Advisor",
    company: "EMEA Region TR1ton Group",
    period: "2023 – Present",
    logo: "https://i.postimg.cc/fLPKX1kp/image.png",
    impact: [
      "Smart city strategies connecting tech to climate/congestion challenges.",
      "Sustainable communities & blockchain integration.",
      "International Business Development."
    ],
    skills: ["Blockchain", "International Business Development", "Smart Cities", "Cryptocurrency", "Business Strategy", "Marketing Strategy"]
  },
  {
    id: 7,
    role: "Board Advisor",
    company: "Prime Event",
    period: "2022 – Present",
    logo: "https://i.postimg.cc/pLvgp5wt/image.png",
    impact: [
      "Guide awards strategy + global expansion.",
      "Secure C-level participation & jury credibility.",
      "Guest of honor & non-executive director roles."
    ],
    skills: ["Digital Strategy", "Director level", "International Business Development", "Non-Executive Director", "Corporate Events", "Awards", "Market Research", "Sponsorship"]
  },
  {
    id: 8,
    role: "Board Advisor & Smart Cities Expert",
    company: "ExpertSkillz Middle East FZ",
    period: "2017 – Present",
    logo: "https://i.postimg.cc/05J3nCxM/image.png",
    impact: [
      "Digital media/marketing strategy for smart city innovation.",
      "Engagements in gov, education & creative industries.",
      "Change Management & AI transformation."
    ],
    skills: ["Blockchain", "Channel Partners", "International Business Development", "Smart Cities", "Business Strategy", "Change Management", "Social Media", "Executive Management"]
  },
  {
    id: 9,
    role: "Strategic Business Advisor",
    company: "Cinch Technologies Ltd",
    period: "2019 – Present",
    logo: "https://i.postimg.cc/9Q1N08PJ/image.png",
    impact: [
      "Global expansion & public sector engagement.",
      "Partnerships across MENA, Africa & APAC.",
      "ROI insights & IT management."
    ],
    skills: ["Channel Partners", "International Business Development", "Business Analysis", "Smart Cities", "Change Management", "Executive Management", "IT Management"]
  },
  {
    id: 10,
    role: "Council Member",
    company: "GLG",
    period: "2018 – Present",
    logo: "https://i.postimg.cc/wvRWW6Kg/image.png",
    impact: [
      "Consulting projects worldwide.",
      "Compliance framework & connecting global expertise.",
      "Channel Partners & Executive Management."
    ],
    skills: ["Channel Partners", "Executive Management"]
  },
  {
    id: 11,
    role: "Chief Strategy Officer",
    company: "AFIK Group",
    period: "2023 – 2024",
    logo: "https://i.postimg.cc/1R6Cw5cr/image.png",
    impact: [
      "Strategic guidance for construction growth.",
      "Operations in Turkey, Cyprus, Germany & Greece.",
      "Marketing Strategy & Smart Cities."
    ],
    skills: ["International Business Development", "Smart Cities", "Business Strategy", "Consultancy", "Marketing Strategy", "Leadership"]
  },
  {
    id: 12,
    role: "Senior Business Advisor",
    company: "HyGear",
    period: "2022 – 2024",
    logo: "https://i.postimg.cc/13WJsgsh/image.png",
    impact: [
      "Distribution partners in GCC + India.",
      "Expand premium fitness tech & new market growth.",
      "Operations Management & IT Strategy."
    ],
    skills: ["Channel Partners", "International Business Development", "Management Consulting", "Team Management", "Operations Management", "IT Strategy", "Executive Management"]
  },
  {
    id: 13,
    role: "Business Head Development",
    company: "KSI Malta",
    period: "2020 – 2023",
    logo: "https://i.postimg.cc/C5V4mkHY/image.png",
    impact: [
      "MENA business development & taxation/legal services.",
      "Leveraging Morison KSi global network.",
      "Customer Relations & Strategic Planning."
    ],
    skills: ["Channel Partners", "International Business Development", "Customer Relations", "Strategic Planning", "Business Management", "Consultancy", "Executive Management"]
  },
  {
    id: 14,
    role: "Analyst Advisor",
    company: "TNC Group",
    period: "2019 – 2022",
    logo: "https://i.postimg.cc/fRbf2wXJ/image.png",
    impact: [
      "Blockchain advisory, funding & M&A.",
      "Board composition & governance.",
      "Represent at industry events & marketing."
    ],
    skills: ["Channel Partners", "Investment & Fundraising", "M&A", "Cryptocurrency", "Network Management", "Strategic Advisory", "Board Composition"]
  },
  {
    id: 15,
    role: "CEO & Founder",
    company: "DUC CONSULTING INT",
    period: "2003 – Present",
    logo: "https://i.postimg.cc/K84t70Sq/image.png",
    impact: [
      "80+ companies supported; 100+ projects worth $100M+.",
      "Raised $500M+ & provided C-level advisory.",
      "Smart Cities, BOT & PPP models."
    ],
    skills: ["Channel Partners", "International Business Development", "Smart Cities", "Cryptocurrency", "Business Strategy", "Entrepreneurship", "IT Strategy", "Board Development", "BOT", "PPP"]
  },
  {
    id: 16,
    role: "Senior Advisor",
    company: "Locus Chain MENA",
    period: "2018 – 2019",
    logo: "https://i.postimg.cc/pr2FmZJz/image.png",
    impact: [
      "Channel partners, investor relations & public sector accounts.",
      "Localization, branding & global representation.",
      "Blockchain & Business Planning."
    ],
    skills: ["Blockchain", "Channel Partners", "International Business Development", "Business Planning", "Customer Relations", "Management Consulting", "Business Strategy"]
  },
  {
    id: 17,
    role: "Regional Adviser",
    company: "TAKEAWAY",
    period: "2015 – Present",
    logo: "https://i.postimg.cc/JzyBHtZK/image.png",
    impact: [
      "Expansion Middle East/Africa/APAC.",
      "Partnerships, investments & operations setup.",
      "Board Development & Marketing Strategy."
    ],
    skills: ["Channel Partners", "International Business Development", "Business Planning", "Investments", "Operations Management", "Executive Management", "Board Development"]
  },
  {
    id: 18,
    role: "Business Development Manager",
    company: "IMEX System Ltd.",
    period: "2015 – 2017",
    logo: "https://i.postimg.cc/Y2srGRR2/image.png",
    impact: [
      "Smart city + eGovernment solutions.",
      "Multi-million public sector engagements.",
      "i-Gov platform growth."
    ],
    skills: ["International Business Development", "Business Analysis", "Customer Relations", "Smart Cities", "IT Governance", "Enterprise Software"]
  },
  {
    id: 19,
    role: "Advisory Board Member",
    company: "CloudBuy",
    period: "2014 – 2017",
    logo: "https://i.postimg.cc/R0d9MLhX/image.png",
    impact: [
      "Transactional eCommerce platform & government contracts.",
      "Regional plans & UK board insights.",
      "Competitive Analysis & Cloud Computing."
    ],
    skills: ["Channel Partners", "International Business Development", "Business Analysis", "Enterprise Software", "Consulting", "Competitive Analysis", "Marketing Strategy", "Cloud Computing"]
  },
  {
    id: 20,
    role: "Managing Partner",
    company: "ICONMA",
    period: "2014 – 2016",
    logo: "https://i.postimg.cc/DZYTGfqt/image.png",
    impact: [
      "Public sector projects & partnerships.",
      "Revenue growth & gov solutions delivery.",
      "Team Leadership & Software Project Management."
    ],
    skills: ["Team Leadership", "Software Project Management", "Team Management", "Enterprise Software", "IT Management"]
  },
  {
    id: 21,
    role: "Country Manager",
    company: "Init",
    period: "2012 – 2014",
    logo: "https://i.postimg.cc/4xTTVS9C/image.png",
    impact: [
      "Secured AED50M+ public sector deals (Abu Dhabi + Bahrain).",
      "eGov/eBusiness & full sales cycle leadership.",
      "Business Analysis & Smart Cities."
    ],
    skills: ["International Business Development", "Business Analysis", "Smart Cities", "Software Project Management", "Board Development"]
  },
  {
    id: 22,
    role: "Managing Director",
    company: "AL TAQNYAH Business Solutions Dubai",
    period: "2006 – 2011",
    logo: "https://i.postimg.cc/2Sw86DXx/image.png",
    impact: [
      "Scaled startup to multi-million revenue.",
      "Led major public sector projects & IT innovation.",
      "Client Relations & Enterprise Software."
    ],
    skills: ["Customer Relations", "Team Management", "Enterprise Software", "Consulting", "Business Management", "IT Strategy", "Executive Management"]
  },
  {
    id: 23,
    role: "Director of Information Technology",
    company: "Ajman Government",
    period: "2004 – 2006",
    logo: "https://i.postimg.cc/Qxgj4Ds8/image.png",
    impact: [
      "Chaired IT steering; ERP/GIS/DMS deployments.",
      "Saved AED90M; 5-year eGov roadmap.",
      "Business Analysis & Smart Cities."
    ],
    skills: ["Business Analysis", "ERP", "Smart Cities", "Project Planning", "Management Consulting", "IT Governance", "Operations Management", "Change Management"]
  }
];

const RoleCard: React.FC<{ data: typeof WORK_EXPERIENCE[0]; isDark: boolean }> = ({ data, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`
        rounded-[24px] overflow-hidden transition-all duration-300 border
        ${isDark 
          ? 'bg-[#124442] border-[#C8F16B]/10 text-white shadow-lg' 
          : 'bg-white border-[#124442]/10 text-[#124442] shadow-sm hover:shadow-md'
        }
      `}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           
           <div className="flex items-center gap-5 w-full">
              {/* Logo Placeholder - Replaces Letter Avatar */}
              <div 
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden p-1.5
                  ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#124442]/5 border-[#124442]/10'}
                `}
              >
                <img 
                  src={data.logo || "https://placehold.co/100x100/e2e8f0/124442?text=Logo"} 
                  alt={`${data.company} Logo`}
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              
              <div className="flex-grow">
                 <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                    <div>
                        <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-white' : 'text-[#124442]'}`}>
                            {data.role}
                        </h3>
                        <p className={`text-sm font-medium mt-1 ${isDark ? 'text-white/60' : 'text-[#124442]/60'}`}>
                            {data.company}
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-[#C8F16B]' : 'bg-[#124442]/5 text-[#124442]'}`}>
                            {data.period}
                        </span>
                        
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-[#124442]/5 text-[#124442]'}`}
                        >
                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Collapsible Content */}
        <div 
           className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
        >
           <div className="overflow-hidden">
              <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-[#124442]/10'}`}>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Impact */}
                    <div>
                       <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-[#C8F16B]' : 'text-[#124442]/50'}`}>Impact & Achievements</h4>
                       <ul className="space-y-3">
                          {data.impact.map((point, i) => (
                             <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-[#C8F16B]' : 'text-[#124442]'}`} />
                                <span className={isDark ? 'text-white/80' : 'text-[#124442]/80'}>{point}</span>
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Skills */}
                    <div>
                       <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-[#C8F16B]' : 'text-[#124442]/50'}`}>Core Skills</h4>
                       <div className="flex flex-wrap gap-2">
                          {data.skills.map((skill, i) => (
                             <span 
                               key={i} 
                               className={`
                                 text-[11px] font-medium px-2.5 py-1 rounded-md
                                 ${isDark ? 'bg-white/5 text-white/70 border border-white/5' : 'bg-[#124442]/5 text-[#124442]/70 border border-[#124442]/5'}
                               `}
                             >
                                {skill}
                             </span>
                          ))}
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24 font-sans text-[#124442] overflow-x-hidden selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* Global Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[#124442]/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#C8F16B]/[0.05] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-10">

        {/* 1. HERO / INTRO SECTION */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-20">
           <div className="relative w-full h-[480px] lg:h-[620px] rounded-[40px] overflow-hidden shadow-2xl animate-fade-in group">
              <img 
                  src="https://i.postimg.cc/15P7y1xH/GLY7904-(1).webp" 
                  alt="Dr. Usman Zafar" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-[3s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#124442]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(18,68,66,0.85) 0%, rgba(18,68,66,0.55) 50%, rgba(18,68,66,0.25) 100%)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F1C]/90 via-[#0B1F1C]/40 to-transparent"></div>

              <div className="absolute inset-0 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-start z-10">
                  <div className="flex items-center gap-3 text-xs md:text-sm font-bold mb-8 uppercase tracking-widest">
                      <span className="text-white/60 cursor-pointer hover:text-[#C8F16B] transition-colors" onClick={() => navigate('/')}>Home</span>
                      <span className="text-[#C8F16B]">/</span>
                      <span className="text-white">About</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-white tracking-tighter mb-6 leading-[1.05] drop-shadow-lg max-w-4xl">
                     About Dr. Usman Zafar
                  </h1>
                  <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                      <div className="w-12 h-1.5 bg-[#C8F16B] rounded-full hidden md:block shadow-[0_0_10px_#C8F16B]"></div>
                      <h2 className="text-xl md:text-2xl text-[#F3F6F4] font-medium tracking-wide max-w-3xl">
                         Global Strategic Advisor | Market Accelerator | Policy & AI Specialist
                      </h2>
                  </div>
                  <p className="text-lg md:text-xl text-[#F3F6F4]/80 font-light max-w-2xl leading-relaxed">
                     Advising governments and boards on navigating the complexities of the digital economy, regulatory frameworks, and global market expansion.
                  </p>
              </div>
           </div>
        </section>

        {/* 2. MAIN BIO */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 lg:order-2">
                 <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group">
                    <img 
                       src="https://i.postimg.cc/zGTfKh2C/image.png" 
                       alt="Strategic Consultation" 
                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 border-[6px] border-white/10 rounded-[32px] pointer-events-none z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#124442]/30 to-transparent opacity-60 mix-blend-multiply z-10"></div>
                 </div>
                 <div className="absolute top-10 right-10 -z-10 w-full h-full bg-[#124442]/5 rounded-[32px] transform rotate-3"></div>
              </div>
              <div className="lg:col-span-7 lg:order-1 space-y-8 text-lg text-[#124442]/80 leading-[1.8] font-light">
                 <p className="first-letter:text-5xl first-letter:font-semibold first-letter:text-[#124442] first-letter:mr-3 first-letter:float-left">
                    Dr. Usman Zafar advises governments, boards, and high-growth enterprises on navigating policy, capital, and technology at scale. He operates at the intersection of regulatory frameworks and market reality, providing the strategic architecture for sustainable expansion.
                 </p>
                 <p>
                    With a strategic footprint across the Middle East, Asia Pacific, and Africa, his work bridges the critical gap between high-level vision and on-the-ground execution. Whether structuring national AI frameworks, guiding cross-border investment, or advising on digital sovereignty, Dr. Zafar partners with ministries and regulators to ensure that ambition translates into measurable economic impact.
                 </p>
                 <div className="relative pl-6 border-l-2 border-[#C8F16B] py-2 my-2">
                    <p className="italic text-[#124442] font-medium text-xl">
                       "Advisory that translates policy intent into executable systems—across borders, sectors, and emerging technologies."
                    </p>
                 </div>
                 <p>
                    In an era defined by rapid disruption and geopolitical flux, he provides the structural clarity leaders need to build resilient, future-ready institutions—making long-term decisions that secure sovereignty and growth.
                 </p>
              </div>
           </div>
        </section>

        {/* 3. IMPACT HIGHLIGHTS */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-28">
           <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 md:p-14 border border-white/50 shadow-[0_20px_40px_-15px_rgba(18,68,66,0.08)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(18,68,66,0.12)] transition-shadow duration-500">
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

        {/* 4. GLOBAL WORK EXPERIENCE SECTION */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24 lg:mb-32">
           
           {/* A) HEADER ROW */}
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#124442]/10 pb-8">
              <div>
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                    <span className="text-[#124442] font-bold text-xs uppercase tracking-[0.2em]">PROVEN TRACK RECORD</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-semibold text-[#124442] tracking-tight">Global Work Experience</h2>
                 <p className="text-[#124442]/60 mt-4 text-lg font-light max-w-2xl">
                    20+ years across academia, industry, smart cities, and market expansion.
                 </p>
              </div>
              
              {/* Logo Strip Placeholder */}
              <div className="flex items-center gap-3 opacity-60 grayscale hidden lg:flex">
                 <div className="px-4 py-1.5 rounded-full border border-[#124442]/20 text-xs font-bold text-[#124442]">WBH</div>
                 <div className="px-4 py-1.5 rounded-full border border-[#124442]/20 text-xs font-bold text-[#124442]">SRIVEN</div>
                 <div className="px-4 py-1.5 rounded-full border border-[#124442]/20 text-xs font-bold text-[#124442]">BIZMONI</div>
                 <div className="px-4 py-1.5 rounded-full border border-[#124442]/20 text-xs font-bold text-[#124442]">X0PA</div>
              </div>
           </div>

           {/* B) QUICK STATS ROW */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                 { val: "430", label: "Conference Speaking Engagements" },
                 { val: "350", label: "Global Companies" },
                 { val: "350", label: "Satisfied Clients Globally" },
                 { val: "350", label: "Smart Government Engagements" }
              ].map((stat, i) => (
                 <div key={i} className="bg-white rounded-2xl p-6 border border-[#124442]/5 shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#124442] mb-1">{stat.val}</p>
                    <p className="text-xs text-[#124442]/60 uppercase tracking-wider font-medium leading-snug">{stat.label}</p>
                 </div>
              ))}
           </div>

           {/* C) EXECUTIVE SUMMARY (Dark Panel) */}
           <div className="bg-[#124442] rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8F16B]/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#124442] to-[#0B2625]"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                 <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-semibold text-[#C8F16B]">Executive Summary</h3>
                    <p className="text-[#F3F6F4]/80 text-lg leading-relaxed font-light">
                       Dr. Usman Zafar is a forward-thinking leader with over 20 years of expertise in academia, industry, and innovation. As Executive Chairman of World Business Hub and a PhD holder, he excels in building strategic partnerships and optimizing organizational efficiency. He has driven over 100 tech projects, secured multi-million-dollar investments, and accelerated growth in Smart Cities, PPP, and BOT initiatives across MENA, APAC, and Africa.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                       {["Smart Cities Strategy", "Capital Fundraising", "Digital Transformation"].map((tag, i) => (
                          <span key={i} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-[#C8F16B] rounded-full"></div> {tag}
                          </span>
                       ))}
                    </div>
                 </div>
                 <div className="lg:col-span-1 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                    <div className="space-y-6">
                       <div className="flex items-start gap-3">
                          <Award className="text-[#C8F16B] shrink-0 mt-0.5" size={24} />
                          <div>
                             <p className="text-base font-bold text-white leading-tight mb-1">Top 51 Global Smart Cities Leader</p>
                             <p className="text-xs text-white/50 uppercase tracking-widest">2019 • World Congress</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <Award className="text-[#C8F16B] shrink-0 mt-0.5" size={24} />
                          <div>
                             <p className="text-base font-bold text-white leading-tight mb-1">Leading Global Advisor of the Year</p>
                             <p className="text-xs text-white/50 uppercase tracking-widest">2024 • Prime Awards</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* D) EXPERIENCE TIMELINE (Alternating Cards) */}
           <div className="space-y-4 mb-12">
              {WORK_EXPERIENCE.map((role, index) => (
                 <RoleCard key={role.id} data={role} isDark={index % 2 !== 0} />
              ))}
           </div>

           {/* E) TESTIMONIAL CALLOUT (Dark Small) */}
           <div className="bg-[#0B1F1C] rounded-[24px] p-8 border border-white/5 flex flex-col items-center text-center gap-6 relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05]"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                   <div className="w-12 h-12 rounded-full bg-[#124442] border border-white/10 flex items-center justify-center text-[#C8F16B]">
                      <Mic size={24} />
                   </div>
                </div>
                
                <p className="text-white/90 text-xl italic font-light leading-relaxed mb-8">
                   "Dr.Usman Zafar is an oustanding person and expert. I have the privilige to work with him under my leadership. He never stops surprising me in every positive way with his knowledge and drive. He is a must to have in every team."
                </p>
                
                <div className="flex flex-col items-center">
                   <p className="text-white font-bold text-lg">Jose Graca</p>
                   <p className="text-[#C8F16B] text-xs uppercase tracking-widest mt-1 max-w-lg">
                      Next Gen Decentralized AI Super APP Earn, Learn, Grow | AI & AGI Strategist | CPA | Advisory Board | M&A
                   </p>
                   <button 
                      onClick={() => window.open('https://www.linkedin.com/in/drusmanzafar', '_blank')}
                      className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-[#0B1F1C] transition-all flex items-center gap-2"
                   >
                      <Linkedin size={16} /> View LinkedIn
                   </button>
                </div>
              </div>
           </div>

           {/* F) ADDITIONAL EXPERTISE CARDS (NEW) */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Academic Experience */}
              <div className="bg-white rounded-[24px] p-8 border border-[#124442]/10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                 <div>
                    <div className="w-12 h-12 rounded-xl bg-[#124442]/5 text-[#124442] flex items-center justify-center mb-6">
                       <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#124442] mb-4">Academic Experience</h3>
                    <p className="text-[#124442]/70 leading-relaxed font-light mb-8 text-sm">
                       Dr. Usman Zafar is a senior academic advisor and educator with PhDs in Information Technology and International Trade and Business. He has taught and advised across leading universities in the UAE, Asia, and Europe, contributing to curriculum development, accreditation, and industry-aligned education.
                    </p>
                 </div>
                 <button 
                    onClick={() => navigate('/academic-experience')}
                    className="flex items-center gap-2 text-[#124442] font-semibold text-sm hover:text-[#1A5A59] transition-colors mt-auto"
                 >
                    View Academic Experience <ArrowRight size={16} />
                 </button>
              </div>

              {/* Card 2: Keynotes & Conferences */}
              <div className="bg-[#124442] rounded-[24px] p-8 border border-white/10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8F16B]/10 rounded-full blur-[40px] pointer-events-none"></div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#C8F16B] flex items-center justify-center mb-6">
                       <Mic size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Keynotes & Conferences</h3>
                    <p className="text-white/70 leading-relaxed font-light mb-8 text-sm">
                       Global keynote speaker and panelist across smart cities, AI, digital policy, governance, and emerging technologies, with hundreds of engagements worldwide.
                    </p>
                 </div>
                 <button 
                    onClick={() => navigate('/keynotes')}
                    className="flex items-center gap-2 text-[#C8F16B] font-semibold text-sm hover:text-white transition-colors mt-auto relative z-10"
                 >
                    View Keynotes <ArrowRight size={16} />
                 </button>
              </div>

              {/* Card 3: Advisory */}
              <div className="bg-white rounded-[24px] p-8 border border-[#124442]/10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                 <div>
                    <div className="w-12 h-12 rounded-xl bg-[#124442]/5 text-[#124442] flex items-center justify-center mb-6">
                       <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#124442] mb-4">Academic & Industry Advisory</h3>
                    <p className="text-[#124442]/70 leading-relaxed font-light mb-8 text-sm">
                       Bridging academia and industry through advisory roles, curriculum alignment, accreditation support, and executive guidance for institutions and innovation ecosystems.
                    </p>
                 </div>
                 <button 
                    onClick={() => navigate('/academic-experience')}
                    className="flex items-center gap-2 text-[#124442] font-semibold text-sm hover:text-[#1A5A59] transition-colors mt-auto"
                 >
                    Learn More <ArrowRight size={16} />
                 </button>
              </div>

           </div>

        </section>

        {/* 5. HERO-STYLE CTA */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
           <div className="relative rounded-[48px] p-12 md:p-20 text-center overflow-hidden shadow-2xl bg-[#0B1F1C] group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#124442] via-[#0B1F1C] to-[#082220]"></div>
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
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