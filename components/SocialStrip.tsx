import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const SocialStrip: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F5EF] text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-[#124442]/60 font-medium mb-6">Join the conversation on global policy, markets, and leadership.</p>
        <div className="flex justify-center gap-6">
           {[Linkedin, Twitter, Youtube].map((Icon, i) => (
             <a key={i} href="#" className="w-12 h-12 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442] hover:bg-[#124442] hover:text-[#C8F16B] transition-all duration-300">
               <Icon size={20} />
             </a>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SocialStrip;