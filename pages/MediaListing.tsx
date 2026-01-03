import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, Play } from 'lucide-react';

// Placeholder array for the 27 media images.
// In a production environment, these src URLs would be replaced with the exact file paths 
// from the source website. Using high-quality Unsplash images to simulate the layout.
const MEDIA_IMAGES = Array.from({ length: 27 }).map((_, i) => ({
  id: i,
  src: `https://images.unsplash.com/photo-${[
    '1556761175-5973dc0f32e7', '1544531586-fde5298cdd40', '1507003211169-0a1dd7228f2d',
    '1475721027767-p05a6db14ba0', '1511578314322-379afb476865', '1505373877841-8d43a716664d',
    '1582213782179-e0d53f98f2ca', '1628108920110-63ce73456743', '1541746972996-4e0b0f43e02a',
    '1591115765373-5207764f72e7', '1517245386807-bb43f82c33c4', '1556761175-5973dc0f32e7',
    '1507679799987-c73779587ccf', '1576085898323-218337e3e43c', '1523580494863-6f3031224c94',
    '1460925895917-afdab827c52f', '1560520653-9e0e4c89eb11', '1517048676732-d65bc937f952',
    '1486406146926-c627a92ad1ab', '1621504450168-38f647319c43', '1551818255-e6e10975bc17',
    '1477281765962-ef9f231b9489', '1497366216548-37526070297c', '1577962917302-cd874c4e31d2',
    '1531297461136-82lw9z1p7q3', '1552664730-d307ca884978', '1535303311164-664fc9ec6532'
  ][i % 27]}?q=80&w=800&auto=format&fit=crop`,
  alt: `Media Appearance ${i + 1}`
}));

const MediaListing: React.FC = () => {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lightbox Navigation Logic
  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % MEDIA_IMAGES.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + MEDIA_IMAGES.length) % MEDIA_IMAGES.length);
    }
  }, [lightboxIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard support for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  return (
    <div className="bg-[#F6F5EF] min-h-screen font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-start overflow-hidden bg-[#0B1F1C]">
        {/* Background Image with Blur */}
        <img 
          src={MEDIA_IMAGES[0].src} 
          alt="Media Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-105"
        />
        
        {/* Dark Gradient Overlay & Texture */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05]"></div>
        
        {/* Lime Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F16B]/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        {/* Content */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1400px] mx-auto mb-16 animate-fade-in">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-6 text-sm font-medium tracking-wide">
             <span className="text-white/60 cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/')}>Home</span>
             <ArrowRight size={12} className="text-[#C8F16B]" />
             <span className="text-[#C8F16B]">Media</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold text-white tracking-tighter mb-4 leading-[1.05] drop-shadow-2xl">
            Media
          </h1>
          <p className="text-xl text-[#F3F6F4]/80 font-light max-w-2xl leading-relaxed">
            Press features, appearances, and highlights.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SECTION */}
      <section className="px-6 md:px-12 py-24 bg-[#F6F5EF]">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex items-center gap-3 mb-12">
             <div className="w-8 h-[2px] bg-[#124442]"></div>
             <h2 className="text-[#124442] font-semibold text-2xl tracking-tight">Press & Features</h2>
          </div>

          {/* Grid Layout: 4 cols desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_IMAGES.map((img, idx) => (
              <div 
                key={img.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-[20px] overflow-hidden bg-white shadow-sm border border-[#124442]/5 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#124442]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#124442] shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                   <ZoomIn size={18} />
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-[20px] border-2 border-[#C8F16B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. COMPACT DARK CTA BAND */}
      <section className="bg-[#0B1F1C] border-t border-white/5 py-12 px-6 md:px-12 relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8F16B]/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-xl md:text-2xl font-medium text-white tracking-tight">
               For media inquiries, reach out anytime.
            </p>
            <button 
               onClick={() => navigate('/contact')}
               className="px-8 py-3 bg-[#C8F16B] text-[#0B1F1C] rounded-full font-bold text-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#C8F16B]/20 flex items-center gap-2"
            >
               Contact Team <ArrowRight size={16} />
            </button>
         </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
           
           {/* Close Button */}
           <button 
             onClick={closeLightbox}
             className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
           >
             <X size={32} />
           </button>

           {/* Main Image */}
           <div className="relative max-w-[90vw] max-h-[90vh]">
              <img 
                src={MEDIA_IMAGES[lightboxIndex].src} 
                alt={MEDIA_IMAGES[lightboxIndex].alt} 
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-white/60 text-center mt-4 text-sm font-medium tracking-wide">
                 {lightboxIndex + 1} / {MEDIA_IMAGES.length}
              </p>
           </div>

           {/* Nav Controls */}
           <button 
             onClick={(e) => { e.stopPropagation(); prevImage(); }}
             className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C8F16B] hover:scale-110 transition-all p-4"
           >
             <ChevronLeft size={48} strokeWidth={1} />
           </button>

           <button 
             onClick={(e) => { e.stopPropagation(); nextImage(); }}
             className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C8F16B] hover:scale-110 transition-all p-4"
           >
             <ChevronRight size={48} strokeWidth={1} />
           </button>
        </div>
      )}

    </div>
  );
};

export default MediaListing;