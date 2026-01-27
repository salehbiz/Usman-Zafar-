import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, ImageOff } from 'lucide-react';

// NOTE: Use direct image links that end in .jpg/.png/.webp. 
// Avoid viewer page links (e.g. postimg.cc/gallery/...) - use the 'Direct Link' option.
const MEDIA_IMAGES = [
  { id: 1, src: "https://i.postimg.cc/ncjKrK2M/CX1-(1).png", title: "Media Feature 1" },
  { id: 2, src: "https://i.postimg.cc/3RfpJWDk/CX2-(1).png", title: "Media Feature 2" },
  { id: 3, src: "https://i.postimg.cc/RhjHK8dR/CX3_(1).png", title: "Media Feature 3" },
  { id: 4, src: "https://i.postimg.cc/TPC5ChQv/CX4-(1).png", title: "Media Feature 4" },
  { id: 5, src: "https://i.postimg.cc/fLgWD07H/image.png", title: "Media Feature 5" },
  { id: 6, src: "https://i.postimg.cc/Mp866wR2/image.png", title: "Media Feature 6" },
  { id: 7, src: "https://i.postimg.cc/FKTNVJBW/image.png", title: "Media Feature 7" },
  { id: 8, src: "https://i.postimg.cc/Kz4Fq8XQ/image.png", title: "Media Feature 8" },
  { id: 9, src: "https://i.postimg.cc/tRZn7X1Z/image.png", title: "Media Feature 9" },
  { id: 10, src: "https://i.postimg.cc/8PLFBtBX/image.png", title: "Media Feature 10" },
  { id: 11, src: "https://i.postimg.cc/QdbHvCzP/image.png", title: "Media Feature 11" },
  { id: 12, src: "https://i.postimg.cc/xdpqT7nH/image.png", title: "Media Feature 12" },
  { id: 13, src: "https://i.postimg.cc/kXPG4W3f/image.png", title: "Media Feature 13" },
  { id: 14, src: "https://i.postimg.cc/VkYN91NZ/image.png", title: "Media Feature 14" },
  { id: 15, src: "https://i.postimg.cc/yNxY5Pck/image.png", title: "Media Feature 15" },
  { id: 16, src: "https://i.postimg.cc/TwW223tS/image.png", title: "Media Feature 16" },
  { id: 17, src: "https://i.postimg.cc/8PLFBtBX/image.png", title: "Media Feature 17" },
  { id: 18, src: "https://i.postimg.cc/rpDMgp2g/image.png", title: "Media Feature 18" },
  { id: 19, src: "https://i.postimg.cc/QtLGbkbt/image.png", title: "Media Feature 19" },
  { id: 20, src: "https://i.postimg.cc/02VT3qf7/image.png", title: "Media Feature 20" },
  { id: 21, src: "https://i.postimg.cc/ZqdXCvhG/image.png", title: "Media Feature 21" },
  { id: 22, src: "https://i.postimg.cc/J01F6TBM/image.png", title: "Media Feature 22" },
  { id: 23, src: "https://i.postimg.cc/VLkTXV8g/image.png", title: "Media Feature 23" },
  { id: 24, src: "https://i.postimg.cc/Y0ndXtHh/image.png", title: "Media Feature 24" },
  { id: 25, src: "https://i.postimg.cc/TYskg20q/image.png", title: "Media Feature 25" },
  { id: 26, src: "https://i.postimg.cc/Mpj9Dkry/image.png", title: "Media Feature 26" },
  { id: 27, src: "https://i.postimg.cc/pXgSCtZ1/image.png", title: "Media Feature 27" },
  { id: 28, src: "https://i.postimg.cc/85pNDmYX/image.png", title: "Media Feature 28" },
  { id: 29, src: "https://i.postimg.cc/NfHh3nM5/image.png", title: "Media Feature 29" },
  { id: 30, src: "https://i.postimg.cc/QtLGbkbt/image.png", title: "Media Feature 30" },
  { id: 31, src: "https://i.postimg.cc/SRJsMGQZ/image.png", title: "Media Feature 31" },
];

interface MediaCardProps {
  item: typeof MEDIA_IMAGES[0];
  onClick: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, onClick }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full bg-gray-100 rounded-[24px] border border-[#124442]/10 flex flex-col items-center justify-center text-[#124442]/40 min-h-[300px] p-8 text-center mb-8">
        <ImageOff size={48} className="mb-4 opacity-50" />
        <span className="text-sm font-medium mb-1">Image unavailable</span>
        <span className="text-xs opacity-60 break-all">{item.title}</span>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="group relative w-full mb-8 break-inside-avoid bg-white rounded-[24px] overflow-hidden shadow-sm border border-[#124442]/5 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-full bg-[#F6F5EF] min-h-[200px] flex items-center justify-center">
        <img 
          src={item.src} 
          alt={item.title}
          className="w-full h-auto object-contain block max-h-[700px] transition-transform duration-700 group-hover:scale-[1.01]"
          onError={() => setHasError(true)}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#124442]/0 group-hover:bg-[#124442]/5 transition-colors duration-300 pointer-events-none"></div>
        
        {/* View Icon */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#124442] shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <ZoomIn size={20} />
        </div>
      </div>
      
      {/* Caption Bar */}
      <div className="px-6 py-4 border-t border-[#124442]/5 bg-white">
        <p className="text-[#124442] font-medium text-sm tracking-wide truncate">
            {item.title}
        </p>
      </div>
    </div>
  );
};

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
          src={MEDIA_IMAGES[26].src} 
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
        <div className="max-w-[1600px] mx-auto">
          
          <div className="flex items-center gap-3 mb-12">
             <div className="w-8 h-[2px] bg-[#124442]"></div>
             <h2 className="text-[#124442] font-semibold text-2xl tracking-tight">Press & Features</h2>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
            {MEDIA_IMAGES.map((img, idx) => (
              <MediaCard key={img.id} item={img} onClick={() => setLightboxIndex(idx)} />
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
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in p-4 md:p-12">
           
           {/* Close Button */}
           <button 
             onClick={closeLightbox}
             className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full"
           >
             <X size={32} />
           </button>

           {/* Main Image Wrapper */}
           <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={MEDIA_IMAGES[lightboxIndex].src} 
                alt={MEDIA_IMAGES[lightboxIndex].title} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm font-medium tracking-wide">
                 {MEDIA_IMAGES[lightboxIndex].title} <span className="opacity-40 mx-2">|</span> {lightboxIndex + 1} of {MEDIA_IMAGES.length}
              </div>
           </div>

           {/* Nav Controls */}
           <button 
             onClick={(e) => { e.stopPropagation(); prevImage(); }}
             className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C8F16B] hover:scale-110 transition-all p-4 bg-black/20 rounded-full"
           >
             <ChevronLeft size={48} strokeWidth={1} />
           </button>

           <button 
             onClick={(e) => { e.stopPropagation(); nextImage(); }}
             className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C8F16B] hover:scale-110 transition-all p-4 bg-black/20 rounded-full"
           >
             <ChevronRight size={48} strokeWidth={1} />
           </button>
        </div>
      )}

    </div>
  );
};

export default MediaListing;