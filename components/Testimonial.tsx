import React from 'react';
import { Play } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="h-screen min-h-[700px] flex items-center justify-center py-12 px-8 lg:px-12 overflow-hidden bg-[#F6F5EF]">
      <div className="max-w-[1400px] w-full mx-auto relative rounded-[50px] overflow-hidden h-[80vh] max-h-[700px] group shadow-2xl">
        {/* Background Image */}
        <img 
          src="https://picsum.photos/seed/meeting/1600/900" 
          alt="Client Meeting" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-20">
          <div className="max-w-4xl">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 lg:mb-10 cursor-pointer hover:bg-accent hover:text-brand-dark transition-all duration-300 text-white border border-white/20">
                <Play size={28} fill="currentColor" className="ml-1" />
            </div>
            
            <p className="text-lg lg:text-xl text-accent font-medium mb-4 lg:mb-6 tracking-wide">Sarah Mitchell, CEO at BrightThreads</p>
            <h3 className="text-2xl lg:text-5xl font-semibold text-white leading-[1.3] mb-4 lg:mb-8 tracking-[-0.02em]">
              “The strategic clarity Dr. Usman provided was transformative. Within 6 months, we restructured our governance and secured Series B funding. It felt less like consulting and more like a true growth partnership.”
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;