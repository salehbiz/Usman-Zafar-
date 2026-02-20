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
    text: "As the organizer of Crush the Chaos (Blu Pitt, Inc. monthly event), I genuinely enjoyed having Dr. Usman Zafar, as one of our featured speakers. What I appreciated most about Dr. Zafar wasn’t just his impressive background—it was the clarity and authenticity he brought to the conversation. His session, AI for Professional Services, wasn’t theoretical or abstract. It was grounded, strategic, and highly relevant. His perspective on the Middle East’s growth opportunities—and the importance of having a precise strategy to truly capitalize on them—really resonated with us. You could feel the impact of his presentation. We weren’t just listening, we were reflecting. I personally walked away with valuable insights. Dr. Zafar has a way of simplifying complex digital transformation and AI strategies into practical direction that leaders can actually act on. We’re truly grateful he shared his expertise with our community, and I would highly recommend him to any organization looking for strategic clarity in today’s fast-moving, AI-driven landscape.",
    name: "Phillip Brown",
    role: "Clarity PPM Expert | Founder of Blu Pitt",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHwkMr9oxRuMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583767843444?e=1773273600&v=beta&t=cZKgvzmc4bH16BLbwehFRO56ZoaIXkA7vqOnBJUX4H4",
    linkedinUrl: "https://www.linkedin.com/in/phillipjbrown/"
  },
  {
    text: "Transformative leaders who genuinely understand both technology and global markets are rare - Dr. Usman Zafar exemplifies this exceptional combination. As a fellow Board Member at Bizmoni, I've witnessed firsthand how his strategic vision consistently translates into actionable growth opportunities across international markets. What distinguishes Dr. Zafar is his unique talent for unlocking market potential through digital transformation. His expertise in guiding organizations through complex technological landscapes has proven invaluable for companies seeking to expand into Dubai and broader Middle East markets. His recent appointments to multiple advisory boards, including Bizmoni and XOPA AI, reflect the high demand for his strategic insights in AI-powered solutions and global expansion strategies. Throughout our collaboration, his deep understanding of international business development consistently delivers actionable pathways for growth. Dr. Zafar's approach combines technological innovation with practical market expertise, particularly in navigating the complexities of MENA operations. His leadership in fostering international partnerships and driving digital transformation initiatives sets him apart as a true catalyst for organizational growth. For organizations seeking to expand their global footprint while leveraging cutting-edge technology, Dr. Zafar stands out as an exceptional strategist and advisor. His proven track record in unlocking market potential makes him an invaluable asset to forward-thinking companies.",
    name: "Martin Moser",
    role: "Executive Leader & Board Advisor",
    company: "Bizmoni",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEwrgJmPqrETw/profile-displayphoto-scale_400_400/B4EZfkTk11GcAg-/0/1751882026926?e=1773273600&v=beta&t=-C0pmp_rmMp5Y4FVWNl6xcEpQ5Jq4ev9jaBSd8ugLEY",
    linkedinUrl: "https://www.linkedin.com/in/moserma/"
  },
  {
    text: "Dr. Usman Zafar is an outstanding person and expert. I have the privilege to work with him under my leadership. He never stops surprising me in every positive way with his knowledge and drive. He is a must to have in every team.",
    name: "Jose Graca",
    role: "CEO, Chairman, Founder",
    company: "Bizmoni",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQGy53qLlMkGsA/profile-framedphoto-shrink_400_400/B4EZx8bjHVKcAc-/0/1771614123019?e=1772229600&v=beta&t=4BQwwIStUc2X1pYEO8Tt1Mzgci3ibYo2XC3HjELaxtY",
    linkedinUrl: "https://www.linkedin.com/in/josegraca/"
  },
  {
    text: "Usman is a trailblazer in the technology market and a prominent speaker in such tech conferences. @bizmoni I'm proud to be in the same team as an advisory board member.",
    name: "Frando Sarmiento",
    role: "Executive Director",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGUirpKF9S-Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615719237004?e=1773273600&v=beta&t=tfq7j0AL7lNGOmsGhyEG_YkF8BmzDIZC1NE4L9VrwcM",
    linkedinUrl: "https://www.linkedin.com/in/frando-sarmiento-69916a7/"
  },
  {
    text: "I'm pleased to recommend Usman for his professional experience working with investors, entrepreneurs and global multidisciplinary technology teams. When I joined Bizmoni's board of directors, he was one of the first staff colleagues to support me with directions to meet our strategic objectives worldwide. He is a great business and technical leader.",
    name: "Rodrigo Rivera Vidal",
    role: "C-Level Executive | Industry Scientist",
    company: "Bizmoni",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHq3cjRhpXvoA/profile-displayphoto-scale_400_400/B4DZxAHMffI4Ag-/0/1770602158258?e=1773273600&v=beta&t=ay7c5JyM1QLu5rUvkvH501mmQc-6v3xYSg4tFLScamQ",
    linkedinUrl: "https://www.linkedin.com/in/rodrigoriveravidal/"
  },
  {
    text: "I highly recommend Dr. Usman for his exceptional guidance and support. As I am in the process of settling in Dubai, Dr. Usman provided invaluable advice that made the transition smooth and stress-free. His deep knowledge of the city and its intricacies, combined with his willingness to help, truly set him apart. Whether you're new to Dubai or looking to expand your network, Dr. Usman is a fantastic resource and an excellent mentor.",
    name: "Faisal H. Nathoka",
    role: "Real Estate Consultant | Board Member PAK-UK Business Council",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHwK9wVMF3vjA/profile-displayphoto-shrink_800_800/B4EZbKSrbLHoAc-/0/1747150617900?e=1773273600&v=beta&t=Bb5ysRYKuSmpbB_5meEZzrYivJ8KKVJ4HR4bEou7BvE",
    linkedinUrl: "https://www.linkedin.com/in/faisalnathoka/"
  },
  {
    text: "I'm delighted to recommend Dr. Usman Zafar, a distinguished figure in the field of technology and global infrastructure development. It has been my pleasure working with Dr. Zafar on various projects. Dr. Zafar's leadership as an entrepreneur, international speaker and C-level business leader has consistently driven transformative projects forward. His visionary approach and unwavering dedication make him an invaluable asset in any professional setting. We are still working on mega projects around PPP and BOT at WBH and I am certain that Dr. Zafar will uphold the standard of delivery like he already has for the past two decades.",
    name: "Owais Iqbal",
    role: "Real Estate, Tech & Business Value Creation",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHuwlxruOdWzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728340789893?e=1773273600&v=beta&t=GfaFSRncbl3dhBAlq6fciOmywPJiQM_ykGkyauVTbgA",
    linkedinUrl: "https://www.linkedin.com/in/owaisiqball/"
  },
  {
    text: "Dr Usman has been our advisor screening potential business partners in UAE region and facilitating relevant links to other clients throughout Europe via the DUC network and associates. Dr Usman has been very professional in all aspects and he has contributed several key connections from which we have benefited. Above all Dr Usman is friendly and competent which ensures the best atmosphere for business discussions and negotiations.",
    name: "Thomas Cort Hansen",
    role: "E-commerce & Logistics AI Specialist",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG4FwxjAKaHbQ/profile-displayphoto-shrink_400_400/B4DZQEgI__GgAg-/0/1735242322679?e=1773273600&v=beta&t=1BPXty7IW6tI_VM7Etf6h9w96FMV69rK7E9vvnQqbGA",
    linkedinUrl: "https://www.linkedin.com/in/thomascorthansen/"
  },
  {
    text: "It is a pleasure to work with Dr Usman, a world class professional in ecommerce. I have been working with him just for a few months and already we are meeting with C level officers in large Corporates and Governments and enjoying commercial contracts in Governments and commercial discussions in other countries which Dr Usman has instigated.",
    name: "Jonny Holden",
    role: "Vice President - Strategic Partnerships",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG4FwxjAKaHbQ/profile-displayphoto-shrink_400_400/B4DZQEgI__GgAg-/0/1735242322679?e=1773273600&v=beta&t=1BPXty7IW6tI_VM7Etf6h9w96FMV69rK7E9vvnQqbGA",
    linkedinUrl: "https://www.linkedin.com/in/thomascorthansen/"
  },
  {
    text: "I have known Dr. Usman for more than 2 years now and one of the ways to describe him would be very talented, practical and smart person who has lots of connections globally. Dr. Usman will never stop to surprise me with his ability to take complex project and problems and come up with easy and cost effective solutions. He is defiantly someone complex would like to know and become friends with. Very proud and fortunate that I met had the chance to work with him.",
    name: "Jaber AL Lamki",
    role: "Senior Strategic Communication Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEmnzhzXnXpnw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683828673231?e=1773273600&v=beta&t=n5BFNhI3qSNrDrz68co08JXncGjZBlnW97OxAxn1Iqw",
    linkedinUrl: "https://www.linkedin.com/in/jaber-al-lamki-40196622/"
  }
];

const TestimonialsGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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
              What People Say About Working With <br /> <span className="text-[#C8F16B]">Dr. Usman Zafar</span>
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

        {/* Slider */}
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
                    <p className="text-[#8DA399] text-[10px] uppercase tracking-widest font-medium mt-0.5 truncate">
                      {t.role}{t.company ? ` • ${t.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-2 shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;