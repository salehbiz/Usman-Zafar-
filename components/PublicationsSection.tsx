import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PublicationsSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const books = [
    {
      title: "Artificial Intelligence for SME Leaders",
      teaser: "A step-by-step guide for founders and managers to adopt AI and drive growth.",
      amazonLink: "https://www.amazon.com/SME-Leaders-Artificial-Intelligence-Customers-ebook/dp/B0FV1LXS1Z",
      image: "/images/ai-sme-leaders.jpg",
      tag: "Ebook"
    },
    {
      title: "Digital Sovereignty",
      teaser: "A strategic guide to the global data wars and reclaiming control in an AI-driven world.",
      amazonLink: "https://www.amazon.com/Digital-Sovereignty-Silent-Control-Borderless-ebook/dp/B0G168HTCZ",
      image: "/images/digital-sovereignty.jpg",
      tag: "Featured"
    },
    {
      title: "Sentient Cities",
      teaser: "The Digital Twin Revolution: How virtual replicas are transforming urban planning, infrastructure, and the future of human settlement.",
      amazonLink: "https://www.amazon.com/dp/B0H8F8RG4B",
      image: "/images/sentient-cities.jpg",
      tag: "New Release"
    }
  ];

  const handleBookClick = (book: typeof books[0]) => {
    // Rule 2: On Books Page, open Amazon
    if (location.pathname === '/books') {
        window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    } else {
        // Rule 1: On other pages, navigate to Books page
        navigate('/books');
    }
  };

  const isBooksPage = location.pathname === '/books';

  return (
    <section id="books-section" className="pt-32 pb-24 px-6 md:px-12 bg-[#F6F5EF] relative overflow-hidden scroll-mt-28">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER ROW (Only shown if NOT on Books Listing page) --- */}
        {!isBooksPage && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
            <div className="flex flex-col items-start max-w-2xl">
              {/* Top: Premium Feature Badge */}
              <div className="mb-6 w-fit">
                  <div className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 border border-[#124442]/10 backdrop-blur-sm shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(200,241,107,0.2)] hover:border-[#C8F16B]/40 hover:bg-white hover:-translate-y-1 transition-all duration-500 cursor-default">
                      <span className="flex h-2.5 w-2.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8F16B] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#124442]"></span>
                      </span>
                      <span className="text-[#124442] font-semibold text-xs uppercase tracking-widest group-hover:text-[#124442] transition-colors">
                          Author & Global Advisor
                      </span>
                  </div>
              </div>
              
              <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-3 block">
                / Publications
              </span>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#124442] mb-4 leading-tight tracking-tight">
                Books by Dr. Usman Zafar
              </h2>
              
              <p className="text-[#124442]/75 text-lg leading-relaxed font-light">
                Strategic insights on AI adoption for SMEs and the global shift toward digital sovereignty.
              </p>
            </div>

            <div className="shrink-0">
               <button 
                  onClick={() => navigate('/books')}
                  className="px-8 py-4 bg-[#124442] text-[#F6F5EF] rounded-full font-semibold text-sm hover:bg-[#0F3A39] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#124442]/10 hover:shadow-xl"
               >
                  View All Books
                  <ArrowRight size={16} />
               </button>
            </div>
          </div>
        )}

        {/* --- CARDS ROW: 3 side-by-side --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {books.map((book, idx) => (
              <div 
                key={idx}
                onClick={() => handleBookClick(book)}
                className="group relative aspect-[4/5] w-full rounded-[32px] overflow-hidden border border-[#124442]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                {/* Background Image - Aspect ratio matched to 4:5 covers */}
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2625] via-[#0B2625]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95 pointer-events-none"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full z-20">
                   <span className="text-white text-[10px] font-bold uppercase tracking-wider">{book.tag}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start z-20">
                   <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#C8F16B] transition-colors">
                      {book.title}
                   </h3>
                   <p className="text-[#F6F5EF]/70 text-sm leading-relaxed mb-6 line-clamp-2">
                      {book.teaser}
                   </p>
                   
                   <button className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold transition-all duration-300 group-hover:bg-[#C8F16B] group-hover:text-[#0B2625] group-hover:border-[#C8F16B] group-hover:-translate-y-1">
                      {location.pathname === '/books' ? 'Buy on Amazon' : 'Learn More'}
                      <ArrowUpRight size={14} />
                   </button>
                </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default PublicationsSection;