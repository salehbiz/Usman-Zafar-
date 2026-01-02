import React from 'react';
import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-6 bg-[#0E2A25]">
      <div className="bg-[#0B1F1C] border border-white/5 rounded-[40px] px-8 py-20 lg:px-20 lg:py-24 relative overflow-hidden">
        
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03]"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white">usmanzafar.com</h3>
            <p className="text-[#F3F6F4]/60 leading-relaxed max-w-xs font-light">
              Advising leaders and institutions to build scalable, resilient systems for the future economy.
            </p>
            <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C8F16B] hover:border-[#C8F16B] transition-all"><Linkedin size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C8F16B] hover:border-[#C8F16B] transition-all"><Twitter size={18}/></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium mb-6 text-[#C8F16B] uppercase tracking-widest">Capabilities</h4>
            <ul className="space-y-4 text-[#F3F6F4]/60 font-light">
              <li><button onClick={() => navigate('/services/board-advisory')} className="hover:text-white transition-colors">Board Advisory</button></li>
              <li><button onClick={() => navigate('/services/market-acceleration')} className="hover:text-white transition-colors">Market Acceleration</button></li>
              <li><button onClick={() => navigate('/services/government-enterprise')} className="hover:text-white transition-colors">Government & Enterprise</button></li>
              <li><button onClick={() => navigate('/services/smart-cities')} className="hover:text-white transition-colors">Smart Cities</button></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium mb-6 text-[#C8F16B] uppercase tracking-widest">Insights</h4>
            <ul className="space-y-4 text-[#F3F6F4]/60 font-light">
              <li><button onClick={() => navigate('/media')} className="hover:text-white transition-colors">Media & Press</button></li>
              <li><button onClick={() => navigate('/books')} className="hover:text-white transition-colors">Publications</button></li>
              <li><button onClick={() => navigate('/services/global-keynotes')} className="hover:text-white transition-colors">Keynotes</button></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
             <h4 className="text-sm font-medium mb-6 text-[#C8F16B] uppercase tracking-widest">Contact</h4>
             <ul className="space-y-4 text-[#F3F6F4]/60 font-light">
               <li>Dubai, UAE</li>
               <li>London, UK</li>
               <li>New York, USA</li>
               <li className="pt-4">
                 <button onClick={() => navigate('/contact')} className="text-white border-b border-white/20 pb-1 hover:border-[#C8F16B] transition-colors flex items-center gap-2">
                   Get in Touch <ArrowUpRight size={14} />
                 </button>
               </li>
             </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#F3F6F4]/30 mt-12 relative z-10 font-medium tracking-wide">
          <p>© {year} Dr. Usman Zafar. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;