import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Package {
  title: string;
  price: string;
  description: string;
  bullets: string[];
  path: string;
}

const ADVISORY_PACKAGES: Package[] = [
  {
    title: "Essential Market Entry",
    price: "$2,500 / month",
    description: "Light-touch support for new MENA entrants",
    bullets: [
      "12-month basic market entry plan",
      "5 key account introductions/month",
      "Basic investor mapping",
      "Monthly progress report"
    ],
    path: "/services/essential-market-entry"
  },
  {
    title: "Growth Acceleration",
    price: "$5,000 / month",
    description: "Structured scaling with deeper network access",
    bullets: [
      "Full 12-month plan with KPIs",
      "8–10 introductions/month",
      "Active funding facilitation",
      "Bi-monthly board reports"
    ],
    path: "/services/growth-acceleration"
  },
  {
    title: "Premium Strategic Advisory",
    price: "$7,000 / month",
    description: "High-impact C-level penetration & project oversight",
    bullets: [
      "Quarterly strategic reviews",
      "12–15 introductions/month",
      "PPP/BOT advisory support",
      "Bi-weekly reporting"
    ],
    path: "/services/premium-strategic-advisory"
  },
  {
    title: "Enterprise Board Advisory",
    price: "$10,000 / month",
    description: "Full-spectrum MENA acceleration & ecosystem building",
    bullets: [
      "Full 12-month strategic plan",
      "5–7 meetings per week",
      "End-to-end funding & project execution",
      "Executive + Board reporting"
    ],
    path: "/services/enterprise-advisory"
  }
];

const AdvisoryPackages: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

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
        // if we are at the end, jump back to start
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
    <section id="solutions" className="relative py-16 bg-[#0B1E1C] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#124442]/20 to-transparent opacity-30"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#124442]/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#C8F16B]/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="px-6 md:px-12 mb-8 flex flex-col gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
              <span className="text-[#C8F16B] font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">Advisory Packages</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-4">
              Market Acceleration & Board Advisory in MENA
            </h2>
            <p className="text-[#E6ECEA] text-lg font-light tracking-wide max-w-2xl opacity-90">
              Unlock rapid, high-impact growth across the Middle East & North Africa with structured advisory packages.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar px-6 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {ADVISORY_PACKAGES.map((pkg, idx) => (
            <Link
              to={pkg.path}
              key={idx}
              className="
                cursor-pointer block text-left
                snap-start flex-shrink-0
                w-[85vw] md:w-[320px] lg:w-[350px] xl:w-[calc((100vw-6rem-3*1.5rem)/4)] max-w-[380px]
                bg-[#124442]/35 backdrop-blur-[16px] border border-white/[0.08]
                rounded-[24px] p-6 lg:p-8
                flex flex-col justify-start min-h-[440px] h-auto
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:bg-[#124442]/50 hover:border-[#C8F16B]/30
                transition-all duration-500 group relative
              "
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#C8F16B]/0 to-[#C8F16B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C8F16B] transition-colors">{pkg.title}</h3>
                <div className="text-2xl lg:text-3xl font-bold text-[#E6ECEA] mb-4">
                  {pkg.price}
                </div>
                <p className="text-[#8DA399] text-sm mb-6 min-h-[40px]">
                  {pkg.description}
                </p>

                <div className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 text-[#C8F16B] shrink-0">
                          <Check size={16} strokeWidth={3} />
                        </span>
                        <span className="text-[#E6ECEA] text-[14px] leading-relaxed opacity-90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA at Bottom */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-white group-hover:text-[#C8F16B] transition-colors">
                    Explore Package
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C8F16B] group-hover:border-[#C8F16B] text-white group-hover:text-[#0B1E1C] transition-all duration-300">
                    <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Spacer to allow full scroll to the end seamlessly */}
          <div className="w-2 shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryPackages;
