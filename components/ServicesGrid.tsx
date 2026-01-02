import React from 'react';
import { ArrowUpRight, Layers, TrendingUp, Building2, Globe, Cpu, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SERVICES_DATA = [
  {
    title: 'Board-Level Advisory',
    outcome: 'Strategic clarity and governance at the highest level.',
    icon: <Layers />,
    path: '/services/board-advisory'
  },
  {
    title: 'Market Acceleration',
    outcome: 'Structured growth across new and emerging markets.',
    icon: <TrendingUp />,
    path: '/services/market-acceleration'
  },
  {
    title: 'Government & Enterprise',
    outcome: 'Policy-aligned strategy with execution focus.',
    icon: <Building2 />,
    path: '/services/government-enterprise'
  },
  {
    title: 'Smart Cities Advisory',
    outcome: 'Designing future-ready urban systems.',
    icon: <Globe />,
    path: '/services/smart-cities'
  },
  {
    title: 'AI & Digital Transformation',
    outcome: 'From AI ambition to real-world deployment.',
    icon: <Cpu />,
    path: '/services/ai-advisory'
  },
  {
    title: 'Global Keynotes',
    outcome: 'Insight-driven perspectives on leadership.',
    icon: <Mic />,
    path: '/services/global-keynotes'
  }
];

const ServicesGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F5EF]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:text-center">
            <span className="text-[#124442]/60 font-medium tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#124442] tracking-tight">Strategic Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index}
              onClick={() => navigate(service.path)}
              className="group relative bg-white/40 backdrop-blur-md border border-white/50 rounded-[32px] p-8 lg:p-10 cursor-pointer transition-all duration-500 hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(18,68,66,0.05)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8F16B]/0 to-[#C8F16B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center text-[#124442] mb-8 border border-white/40 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 22, strokeWidth: 1.5 })}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#124442] mb-3 group-hover:text-[#0B2625]">
                    {service.title}
                  </h3>
                  <p className="text-[#124442]/60 leading-relaxed font-light text-sm">
                    {service.outcome}
                  </p>
                </div>

                <div className="flex justify-end mt-6">
                  <div className="w-10 h-10 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442]/40 group-hover:text-[#124442] group-hover:border-[#124442] transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;