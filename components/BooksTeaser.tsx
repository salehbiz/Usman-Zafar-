import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BOOKS = [
  {
    title: "The Future of Leadership",
    promise: "Navigating uncertainty with clarity.",
    coverColor: "bg-[#1A5A59]"
  },
  {
    title: "Smart Cities & Systems",
    promise: "Designing for the human experience.",
    coverColor: "bg-[#0B2625]"
  },
  {
    title: "Global Market Entry",
    promise: "Playbooks for rapid expansion.",
    coverColor: "bg-[#124442]"
  }
];

const BooksTeaser: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F5EF] border-t border-[#124442]/5">
      <div className="max-w-[1400px] mx-auto">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-semibold text-[#124442] tracking-tight">Latest Publications</h2>
            <button onClick={() => navigate('/books')} className="hidden md:flex items-center gap-2 text-[#124442] font-medium border-b border-[#124442]/20 pb-1 hover:border-[#124442] transition-all">
                View Library <ArrowRight size={16} />
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOOKS.map((book, i) => (
               <div 
                 key={i} 
                 onClick={() => navigate('/books')}
                 className="group cursor-pointer"
               >
                  <div className={`relative h-[420px] rounded-[24px] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 ${book.coverColor} flex items-center justify-center p-8 border border-white/10`}>
                     {/* Editorial Mockup Styling */}
                     <div className="w-[70%] h-[80%] border border-white/20 flex flex-col justify-between p-6 bg-white/5 backdrop-blur-sm relative transition-transform duration-700 group-hover:scale-105">
                        <div className="w-8 h-8 rounded-full bg-[#C8F16B] mb-4"></div>
                        <div>
                            <p className="text-[#C8F16B] text-xs uppercase tracking-widest mb-2">Usman Zafar</p>
                            <h3 className="text-white text-3xl font-serif italic leading-tight">{book.title}</h3>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center px-2">
                     <div>
                        <h4 className="text-lg font-medium text-[#124442]">{book.title}</h4>
                        <p className="text-[#124442]/50 text-sm">{book.promise}</p>
                     </div>
                     <span className="text-[#124442] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight size={18} />
                     </span>
                  </div>
               </div>
            ))}
         </div>
         
         <div className="mt-8 text-center md:hidden">
            <button onClick={() => navigate('/books')} className="inline-flex items-center gap-2 text-[#124442] font-medium border-b border-[#124442]/20 pb-1">
                View Library <ArrowRight size={16} />
            </button>
         </div>
      </div>
    </section>
  );
};

export default BooksTeaser;