import React, { useRef, useState, useEffect } from 'react';
import { Quote, ArrowRight, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  company?: string;
  image: string;
  linkedinUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Dr. Usman brings rare clarity to complex challenges. His strategic insight reshaped how we approach growth and governance. It is rare to find an advisor who can seamlessly bridge the gap between high-level policy and on-the-ground execution.",
    name: "H.E. Sarah Al-Mansouri",
    role: "Ministry of Future Economy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  },
  {
    text: "An exceptional advisor who understands both policy and execution. The roadmap provided was not just theoretical, but immediately actionable. Within 6 months, we restructured our governance and secured critical funding.",
    name: "James Sterling",
    role: "CEO, Global Logistics Corp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  },
  {
    text: "Strategic thinking at a global level — grounded, actionable, and impactful. He helped our board navigate digital disruption with confidence. The clarity he provided allowed us to make bold decisions in a volatile market.",
    name: "Elena Rossi",
    role: "Board Member, FinTech Holdings",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  },
  {
    text: "Navigating the complexities of smart city infrastructure requires a unique blend of technical knowledge and diplomatic foresight. Dr. Usman provided the blueprint that aligned our stakeholders and accelerated deployment by 18 months.",
    name: "Dr. Ahmed Al-Khatib",
    role: "Director, Urban Innovation Bureau",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  },
  {
    text: "In the high-stakes world of venture capital, trust and foresight are currency. Dr. Zafar’s due diligence and market analysis gave us the confidence to back three of our highest-performing unicorns in the MENA region.",
    name: "Jonathan Reed",
    role: "Managing Partner, Horizon Ventures",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    // No LinkedIn URL provided, icon will be omitted
  },
  {
    text: "A master of cross-cultural negotiation and strategy. He helped us enter the Southeast Asian market with a partnership model that respected local nuances while delivering global standards of operational efficiency.",
    name: "Wei Zhang",
    role: "VP of Expansion, Asian Tech Group",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  },
  {
    text: "The transition from a legacy enterprise to a digital-first organization is perilous. Dr. Usman acted as the steady hand on the tiller, guiding our executive team through the cultural and structural shifts required to survive.",
    name: "Michael O'Connell",
    role: "Chief Strategy Officer, Energy Systems Ltd",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/in/drusmanzafar"
  }
];

const TestimonialsGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Card width (340px on lg) + Gap (16px) = 356px scroll step
  const SCROLL_AMOUNT = 356;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Loop back to start if near end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
        }
      }
    }, 4000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative py-24 bg-[#0B1E1C] overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#124442]/20 to-transparent opacity-30"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#124442]/40 rounded-full blur-[120px]"></div>
         <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
                 <span className="text-[#C8F16B] font-bold text-xs uppercase tracking-[0.2em]">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
                 What People Say About Working With <br/> <span className="text-[#C8F16B]">Dr. Usman Zafar</span>
              </h2>
           </div>

           <div className="flex flex-col items-end gap-6">
              <a 
                 href="https://www.linkedin.com/in/drusmanzafar/details/recommendations" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white/60 hover:text-[#C8F16B] transition-colors text-sm font-medium border-b border-white/10 hover:border-[#C8F16B] pb-1"
              >
                 View all LinkedIn recommendations <ArrowRight size={16} />
              </a>

              {/* Navigation Controls */}
              <div className="flex gap-3">
                 <button 
                   onClick={() => scroll('left')}
                   className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C8F16B] hover:text-[#0B1E1C] hover:border-[#C8F16B] transition-all duration-300"
                 >
                    <ChevronLeft size={20} />
                 </button>
                 <button 
                   onClick={() => scroll('right')}
                   className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C8F16B] hover:text-[#0B1E1C] hover:border-[#C8F16B] transition-all duration-300"
                 >
                    <ChevronRight size={20} />
                 </button>
              </div>
           </div>
        </div>

        {/* Slider - Continuous horizontal track with minimal gaps */}
        <div 
           ref={scrollRef}
           className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar px-6 md:px-12"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
        >
           {TESTIMONIALS.map((t, idx) => (
             <div 
               key={idx}
               className="
                 snap-start flex-shrink-0 
                 w-[85vw] md:w-[300px] lg:w-[340px]
                 bg-[#124442]/35 backdrop-blur-[16px] border border-white/[0.08]
                 rounded-[24px] p-6 lg:p-8
                 flex flex-col justify-between h-[380px]
                 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:bg-[#124442]/50
                 transition-all duration-500 group
               "
             >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#C8F16B]/0 to-[#C8F16B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 h-full flex flex-col">
                   <Quote size={28} className="text-[#C8F16B]/20 mb-5 group-hover:text-[#C8F16B] transition-colors duration-500" />
                   
                   <div className="flex-grow">
                     <p className="text-[#E6ECEA] text-[15px] leading-[1.6] font-light tracking-wide line-clamp-[7]">
                        "{t.text}"
                     </p>
                   </div>

                   <div className="flex items-center gap-4 pt-5 border-t border-white/5 mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#C8F16B]/50 transition-colors shrink-0">
                         <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-grow min-w-0">
                         <div className="flex items-center justify-between gap-2">
                            <h4 className="text-white font-semibold text-sm truncate pr-2">{t.name}</h4>
                            
                            {/* LinkedIn Icon */}
                            {t.linkedinUrl && (
                               <a 
                                 href={t.linkedinUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-5 h-5 flex items-center justify-center rounded bg-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 shrink-0"
                                 title="View LinkedIn Profile"
                               >
                                  <Linkedin size={12} fill="currentColor" strokeWidth={0} />
                               </a>
                            )}
                         </div>
                         <p className="text-[#8DA399] text-[10px] uppercase tracking-widest font-medium mt-0.5 truncate">{t.role}</p>
                      </div>
                   </div>
                </div>
             </div>
           ))}
           {/* Minimal Spacer for smooth end-scrolling */}
           <div className="w-2 shrink-0"></div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsGrid;