import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Dr. Usman brings rare clarity to complex challenges. His strategic insight reshaped how we approach growth and governance.",
    author: "H.E. Sarah Al-Mansouri",
    role: "Ministry of Future Economy"
  },
  {
    quote: "An exceptional advisor who understands both policy and execution. The roadmap provided was not just theoretical, but immediately actionable.",
    author: "James Sterling",
    role: "CEO, Global Logistics Corp"
  },
  {
    quote: "Strategic thinking at a global level — grounded, actionable, and impactful. He helped our board navigate digital disruption with confidence.",
    author: "Elena Rossi",
    role: "Board Member, FinTech Holdings"
  }
];

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 7000); // Slower, more premium timing
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F5EF]">
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-[48px] bg-white/60 backdrop-blur-2xl border border-white/50 p-12 lg:p-24 shadow-sm relative overflow-hidden">
            
            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C8F16B]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <Quote className="text-[#124442] w-12 h-12 mb-10 opacity-20" />
                
                <div className="h-[200px] flex items-center justify-center mb-8">
                    <p className="text-2xl md:text-4xl text-[#124442] font-light leading-snug tracking-[-0.01em] max-w-4xl transition-all duration-700 animate-fade-in key={activeIndex}">
                        "{activeTestimonial.quote}"
                    </p>
                </div>
                
                <div className="animate-fade-in key={`meta-${activeIndex}`}">
                    <p className="font-semibold text-[#124442] text-lg">{activeTestimonial.author}</p>
                    <p className="text-[#124442]/50 uppercase tracking-widest text-xs mt-2">{activeTestimonial.role}</p>
                </div>

                {/* Minimal Controls */}
                <div className="flex gap-4 mt-12">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442] hover:bg-[#124442] hover:text-white transition-all duration-300">
                        <ArrowLeft size={18} />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442] hover:bg-[#124442] hover:text-white transition-all duration-300">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;