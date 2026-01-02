import React from 'react';
import { ShieldCheck, Globe, Zap, Layers } from 'lucide-react';

const FEATURES = [
  {
    icon: <ShieldCheck />,
    title: "Policy-Aligned Execution",
    desc: "Strategies that withstand regulatory scrutiny."
  },
  {
    icon: <Layers />,
    title: "Cross-Sector Expertise",
    desc: "Bridging public mandate and private capital."
  },
  {
    icon: <Globe />,
    title: "Global Market Access",
    desc: "Networks spanning MENA, APAC, and the West."
  },
  {
    icon: <Zap />,
    title: "Beyond the Slide Deck",
    desc: "We don't just advise. We help you build."
  }
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F5EF]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#124442] mb-16 tracking-tight">Why Leaders Partner With Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {FEATURES.map((feature, i) => (
             <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-[20px] bg-white border border-[#124442]/5 flex items-center justify-center text-[#124442] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#124442] group-hover:text-[#C8F16B] transition-all duration-500">
                   {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-lg font-semibold text-[#124442] mb-2">{feature.title}</h3>
                <p className="text-[#124442]/60 text-sm leading-relaxed max-w-[200px] mx-auto">{feature.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;