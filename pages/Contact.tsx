import React, { useEffect } from 'react';
import { Clock, Zap, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCalendly = () => {
    window.open('https://calendly.com/usman_zafar/30min', '_blank');
  };

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-32 pb-24 px-6 md:px-12 font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Hero Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8F16B] text-[#124442] text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-md">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#124442] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#124442]"></span>
            </span>
           Limited Spots Available
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] animate-slide-up-fade">
           Ready to Transform <br/> Your Business?
        </h1>
        <p className="text-xl text-[#124442]/70 max-w-2xl mx-auto mb-16 font-light animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
           Schedule a strategy call to discuss how we can help you achieve your goals and unlock your full potential.
        </p>

        {/* Feature Cards - Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
           
           {/* Card 1 */}
           <div className="bg-[#124442] rounded-[24px] p-8 text-left shadow-xl border border-[#C8F16B]/10 hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#C8F16B] flex items-center justify-center text-[#124442] mb-6 shadow-lg shadow-[#C8F16B]/20 shrink-0">
                 <Clock size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">15-Minute Session</h3>
              <p className="text-[#F6F5EF]/70 leading-relaxed text-sm">
                 Focused consultation tailored to your specific needs and challenges.
              </p>
           </div>

           {/* Card 2 */}
           <div className="bg-[#124442] rounded-[24px] p-8 text-left shadow-xl border border-[#C8F16B]/10 hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#C8F16B] flex items-center justify-center text-[#124442] mb-6 shadow-lg shadow-[#C8F16B]/20 shrink-0">
                 <ShieldCheck size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Expert Guidance</h3>
              <p className="text-[#F6F5EF]/70 leading-relaxed text-sm">
                 Get actionable insights from industry professionals with proven results.
              </p>
           </div>

           {/* Card 3 */}
           <div className="bg-[#124442] rounded-[24px] p-8 text-left shadow-xl border border-[#C8F16B]/10 hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#C8F16B] flex items-center justify-center text-[#124442] mb-6 shadow-lg shadow-[#C8F16B]/20 shrink-0">
                 <Zap size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Instant Results</h3>
              <p className="text-[#F6F5EF]/70 leading-relaxed text-sm">
                 Walk away with a clear roadmap and next steps for immediate implementation.
              </p>
           </div>

        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-6 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
           <button 
              onClick={openCalendly}
              className="px-10 py-5 bg-[#C8F16B] text-[#124442] rounded-full font-bold text-xl hover:bg-[#b0d655] hover:scale-105 hover:shadow-[0_0_30px_rgba(200,241,107,0.4)] transition-all duration-300 flex items-center gap-3 transform"
           >
              Book Your Call Now <ArrowRight size={24} />
           </button>

           {/* Trust Notes */}
           <div className="flex flex-wrap justify-center gap-6 text-[#124442]/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                 <Lock size={14} /> 100% Secure
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 size={14} /> No Commitment Required
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;