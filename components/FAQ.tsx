import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="h-screen min-h-[700px] flex items-center justify-center py-12 px-8 lg:px-12 bg-brand-dark text-cream overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <div className="lg:col-span-5">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-6 text-accent tracking-[-0.02em]">Frequently Asked Questions</h2>
          <p className="text-cream/70 text-lg lg:text-xl max-w-md leading-[1.6]">
            Clear answers regarding advisory engagement structures, eligibility for board roles, and strategic consulting processes.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/10 pb-4 cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center py-3">
                <h3 className={`text-xl lg:text-2xl font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                  {faq.question}
                </h3>
                <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-accent text-brand-dark border-accent' : 'text-white group-hover:border-white/30'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-cream/60 leading-[1.6] text-base lg:text-lg pr-12 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;