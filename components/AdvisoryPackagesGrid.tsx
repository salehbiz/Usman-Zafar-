import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ADVISORY_PACKAGES = [
  {
    title: "Essential Market Entry Advisory",
    desc: "Light-touch entry strategy for companies entering MENA/GCC with structured support and initial network access.",
    image: "https://i.postimg.cc/ZR8ZnKK5/image.png",
    path: "/essential-market-entry"
  },
  {
    title: "Growth Acceleration Advisory",
    desc: "Scaling-focused advisory with deeper business development, partnerships, and execution support.",
    image: "https://i.postimg.cc/QCLMHy3J/image.png",
    path: "/growth-acceleration"
  },
  {
    title: "Premium Strategic Advisory",
    desc: "High-impact advisory with C-level access, project execution, and regional expansion strategy.",
    image: "https://i.postimg.cc/wxhqwFzV/image.png",
    path: "/premium-strategic"
  },
  {
    title: "Enterprise Full-Spectrum Board Advisory",
    desc: "Full-scale advisory for large enterprises including policy, PPP ecosystems, and global expansion.",
    image: "https://i.postimg.cc/xjRrkZYh/image.png",
    path: "/enterprise-advisory"
  }
];

const AdvisoryPackagesGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B1F1C] border-t border-white/5 relative overflow-hidden">
      {/* Premium Ambient Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#124442]/20 to-transparent pointer-events-none opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
            <span className="text-[#C8F16B] font-bold text-xs uppercase tracking-[0.2em]">Advisory Packages</span>
            <div className="w-8 h-[2px] bg-[#C8F16B]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Structured Strategic Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ADVISORY_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => navigate(pkg.path)}
              className="group flex flex-col bg-[#124442]/35 backdrop-blur-[16px] rounded-[24px] overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:border-[#C8F16B]/30 transition-all duration-300 cursor-pointer h-full"
            >
              <div className="relative h-56 xl:h-48 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0B1F1C]/40 group-hover:bg-[#0B1F1C]/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                {/* Bright Top Glowing Border */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C8F16B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-[#C8F16B] transition-colors min-h-[54px]">
                  {pkg.title}
                </h3>
                <p className="text-[#E6ECEA]/80 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {pkg.desc}
                </p>

                <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-5">
                  <span className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-[#C8F16B] transition-colors">Explore Detail</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C8F16B] group-hover:text-[#0B1F1C] group-hover:border-[#C8F16B] transition-all duration-300">
                    <ArrowUpRight size={16} />
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

export default AdvisoryPackagesGrid;
