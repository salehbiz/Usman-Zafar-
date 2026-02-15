import React, { useState, useEffect } from 'react';
import { ArrowRight, Box, TrendingUp, Mic, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      title: "Global Keynotes",
      desc: "Leadership, innovation, and future economies.",
      icon: <Mic size={20} className="text-[#C8F16B]" />
    },
    {
      title: "Government & Enterprise",
      desc: "Advisory for ministries and large enterprises.",
      icon: <Building2 size={20} className="text-[#C8F16B]" />
    },
    {
      title: "Market Acceleration",
      desc: "Scaling ventures from strategy to execution.",
      icon: <TrendingUp size={20} className="text-[#C8F16B]" />
    },
    {
      title: "Board Advisory",
      desc: "Governance, structure, and growth clarity.",
      icon: <Box size={20} className="text-[#C8F16B]" />
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  const activeCard = cards[activeIndex];

  return (
    <section className="relative w-full min-h-[100dvh] sm:h-screen sm:min-h-[700px] flex items-stretch sm:items-end overflow-hidden bg-[#F6F5EF]">

      {/* 1. BACKGROUND IMAGE (z-0) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img
          src="https://i.postimg.cc/Dz6yD5bz/image.png"
          alt="Dr. Usman Zafar"
          className="w-full h-full object-cover object-[50%_12%] sm:hidden"
        />
        {/* Desktop/Tablet Image */}
        <img
          src="https://i.postimg.cc/Dz6yD5bz/image.png"
          alt="Dr. Usman Zafar"
          className="w-full h-full object-cover object-center hidden sm:block"
        />
      </div>

      {/* 2. OVERLAYS */}

      {/* Text Contrast Gradient (z-0) - Subtle darken for readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0) 100%)'
        }}
      ></div>

      {/* 3. CONTENT CONTAINER */}
      {/* Mobile: 420px top safe zone via spacer. justify-end anchors content to bottom. */}
      {/* Desktop (lg): Reverts to original spacing/layout. */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-end justify-end lg:justify-between gap-6 lg:gap-12 flex-grow sm:flex-grow-0 lg:pb-20 pb-8">

        {/* MOBILE ONLY SPACER: Guaranteed 420px image-only area at top */}
        <div className="w-full h-[420px] shrink-0 sm:hidden" aria-hidden="true" />

        {/* LEFT SIDE: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end animate-slide-up-fade pb-0 lg:pb-6 mb-8 lg:mb-0">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-[-0.02em] text-white mb-6 leading-[1.1] drop-shadow-sm">
            Hi, I am <br />
            Dr. Usman Zafar
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 font-normal text-[13px] uppercase tracking-[0.08em] mb-10 max-w-xl flex items-center gap-3 drop-shadow-sm">
            STRATEGIST <span className="text-white/60">•</span> MARKET ACCELERATOR <span className="text-white/60">•</span> ADVISOR
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-[#C8F16B] text-[#134443] rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white hover:scale-105 shadow-lg shadow-[#C8F16B]/10 text-sm tracking-wide"
            >
              Book a Strategic Call
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => navigate('/services')}
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-[2px] text-sm tracking-wide"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Auto-Rotating Glass Card */}
        <div
          className="w-full lg:w-5/12 flex items-end justify-start lg:justify-end lg:h-full pb-0 pointer-events-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative flex items-center gap-6 lg:mr-4 mb-6 lg:mb-0">

            {/* The Card */}
            <div className="w-full max-w-[340px] lg:w-[380px]">
              <div
                key={activeIndex}
                className="p-8 rounded-[24px] bg-white/[0.1] backdrop-blur-[16px] border border-white/[0.12] shadow-xl animate-slide-up-fade hover:bg-white/[0.14] transition-colors duration-500 ease-in-out"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                    {activeCard.icon}
                  </div>
                  <h3 className="text-white font-medium text-lg tracking-wide">{activeCard.title}</h3>
                </div>

                <p className="text-white/70 text-sm md:text-[15px] leading-relaxed font-normal">
                  {activeCard.desc}
                </p>
              </div>
            </div>

            {/* Vertical Progress Indicator */}
            <div className="hidden lg:flex flex-col items-center justify-center h-[180px] w-[2px] bg-white/10 relative ml-4 rounded-full">
              <div
                className="absolute w-1.5 h-1.5 bg-[#C8F16B] rounded-full shadow-[0_0_8px_rgba(200,241,107,0.8)] transition-all duration-700 ease-in-out"
                style={{
                  top: `${(activeIndex / (cards.length - 1)) * 100}%`,
                  transform: 'translateY(-50%)'
                }}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;