import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingBag, BookOpen, Star } from 'lucide-react';
import { BOOKS_CONTENT } from '../constants';

const BookDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const book = BOOKS_CONTENT[slug || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F5EF] text-[#124442]">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Book Not Found</h2>
            <button onClick={() => navigate('/books')} className="text-sm underline hover:text-[#C8F16B]">Back to Books</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5EF] font-sans text-[#124442] pt-24 pb-20">
      
      {/* 1. Breadcrumbs */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-8">
         <div className="flex items-center gap-2 text-sm text-[#124442]/40 font-medium">
            <span className="cursor-pointer hover:text-[#124442]" onClick={() => navigate('/')}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-[#124442]" onClick={() => navigate('/books')}>Books</span>
            <span>/</span>
            <span className="text-[#124442]">{book.title}</span>
         </div>
         <button onClick={() => navigate('/books')} className="flex items-center gap-2 text-[#124442] font-semibold mt-4 hover:-translate-x-1 transition-transform">
            <ArrowLeft size={16} /> Back to Books
         </button>
      </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
         
         {/* LEFT COLUMN: Main Content */}
         <div className="lg:col-span-8">
            
            {/* Hero Section */}
            <div className="mb-12">
               <div className="inline-block px-3 py-1 rounded-full bg-[#124442]/5 text-[#124442] text-xs font-bold uppercase tracking-widest mb-4">
                  {book.type}
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#124442] leading-[1.1] tracking-tight mb-6">
                  {book.title}
               </h1>
               <p className="text-xl md:text-2xl text-[#124442]/70 leading-relaxed font-light mb-8">
                  {book.subtitle}
               </p>
            </div>

            {/* Mobile Cover Image (Visible only on mobile) */}
            <div className="lg:hidden mb-12 rounded-[24px] overflow-hidden shadow-xl aspect-[3/4]">
               <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
            </div>

            {/* Description / Problem Statement */}
            <div className="prose prose-lg text-[#124442]/80 max-w-none mb-16">
               <h3 className="text-2xl font-semibold text-[#124442] mb-4">About this Book</h3>
               <p className="leading-relaxed whitespace-pre-line">
                  {book.description}
               </p>
            </div>

            {/* What You Will Learn */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#124442]/5 shadow-sm mb-16">
               <h3 className="text-2xl font-semibold text-[#124442] mb-8">What You'll Learn</h3>
               <div className="space-y-4">
                  {book.highlights.map((highlight, idx) => (
                     <div key={idx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-[#C8F16B]/20 flex items-center justify-center text-[#124442] shrink-0 mt-1">
                           <Check size={14} strokeWidth={3} />
                        </div>
                        <p className="text-lg text-[#124442]/80">{highlight}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Features / Chapters */}
            <div className="mb-16">
               <h3 className="text-2xl font-semibold text-[#124442] mb-8">Key Features</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {book.features.map((feature, idx) => (
                     <div key={idx} className="p-6 rounded-[24px] bg-white/40 border border-[#124442]/5 hover:bg-white hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-xl bg-[#124442] text-[#C8F16B] flex items-center justify-center mb-4">
                           <BookOpen size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-[#124442] mb-2">{feature.title}</h4>
                        <p className="text-sm text-[#124442]/60">{feature.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Audience */}
            <div className="mb-16">
               <h3 className="text-2xl font-semibold text-[#124442] mb-6">Who This Is For</h3>
               <div className="flex flex-wrap gap-3">
                  {book.audience.map((person, idx) => (
                     <span key={idx} className="px-5 py-2 rounded-full bg-[#124442]/5 text-[#124442] font-medium text-sm">
                        {person}
                     </span>
                  ))}
               </div>
            </div>

         </div>

         {/* RIGHT COLUMN: Sticky Purchase Card */}
         <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
               
               {/* Glass Card */}
               <div className="bg-[#124442] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(18,68,66,0.3)] relative group">
                  
                  {/* Image Cover (Desktop) */}
                  <div className="h-[300px] w-full relative overflow-hidden hidden lg:block">
                     <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#124442] to-transparent"></div>
                  </div>

                  <div className="p-8 relative z-10">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <p className="text-[#C8F16B] text-xs font-bold uppercase tracking-widest mb-1">Standard Edition</p>
                           <h2 className="text-3xl font-bold text-white">{book.price}</h2>
                        </div>
                        <div className="flex gap-1">
                           {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-[#C8F16B] text-[#C8F16B]" />
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                           <Check size={16} className="text-[#C8F16B]" /> Instant Digital Download
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                           <Check size={16} className="text-[#C8F16B]" /> Full PDF + ePub Formats
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                           <Check size={16} className="text-[#C8F16B]" /> Bonus Strategy Worksheet
                        </div>
                     </div>

                     <button className="w-full py-4 bg-[#C8F16B] text-[#0B1F1C] rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg shadow-[#C8F16B]/20 flex items-center justify-center gap-2 group/btn">
                        <ShoppingBag size={20} />
                        Buy Now
                     </button>
                     
                     <p className="text-center text-white/40 text-xs mt-4">Secure payment via Stripe. 30-day guarantee.</p>
                  </div>
               </div>

               {/* Author Blurb Mini */}
               <div className="mt-8 p-6 rounded-[24px] bg-white border border-[#124442]/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#124442] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <p className="text-xs text-[#124442]/50 uppercase tracking-widest font-bold">Written By</p>
                     <p className="text-[#124442] font-semibold">Dr. Usman Zafar</p>
                  </div>
               </div>

            </div>
         </div>

      </div>
    </div>
  );
};

export default BookDetail;