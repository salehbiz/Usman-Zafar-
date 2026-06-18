import React, { useState, useEffect } from 'react';
import { YOUTUBE_VIDEOS_DATA } from '../constants';
import { YouTubeVideo } from '../types';
import { Search, Play, Calendar, ExternalLink, X, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  "All",
  "Innovation & Future Trends",
  "Smart Cities",
  "Technology & Digital Transformation",
  "AI & Emerging Technologies",
  "Leadership, Education & Insights"
];

const YoutubeVideos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // SEO Update
  useEffect(() => {
    document.title = "Dr. Usman YouTube Videos | Innovation, Technology & Smart Cities";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Watch Dr. Usman’s latest videos on innovation, technology trends, smart cities, digital transformation, AI, and future-ready ideas.');

    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const filteredVideos = YOUTUBE_VIDEOS_DATA.filter((video) => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured video is the one marked isFeatured, or the first one in the list
  const featuredVideo = YOUTUBE_VIDEOS_DATA.find(v => v.isFeatured) || YOUTUBE_VIDEOS_DATA[0];

  return (
    <div className="bg-[#F6F5EF] min-h-screen font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-start overflow-hidden bg-[#0B1F1C]">
        {/* Background Image with blur effect */}
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-25 blur-[2px] scale-105"></div>
        
        {/* Gradient and overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F1C] via-[#0B1F1C]/80 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05]"></div>
        
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8F16B]/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1400px] mx-auto mb-16 animate-fade-in">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-6 text-sm font-medium tracking-wide">
             <span className="text-white/60">Home</span>
             <ArrowRight size={12} className="text-[#C8F16B]" />
             <span className="text-[#C8F16B]">Videos</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-tighter mb-4 leading-[1.05] drop-shadow-2xl">
            Watch Dr. Usman’s Latest Videos
          </h1>
          <p className="text-xl text-[#F3F6F4]/80 font-light max-w-2xl leading-relaxed mb-8">
            Explore insights on innovation, technology, smart cities, digital transformation, and future-ready ideas.
          </p>

          <a 
            href="https://www.youtube.com/@drusmansofficial" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8F16B] text-[#0B1F1C] rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#C8F16B]/20"
          >
            Visit YouTube Channel <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* 2. FEATURED VIDEO SECTION */}
      {featuredVideo && (
        <section className="px-6 md:px-12 pt-24 pb-12 bg-[#F6F5EF]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-[#124442]"></div>
              <h2 className="text-[#124442] font-semibold text-2xl tracking-tight">Featured Episode</h2>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden border border-[#124442]/5 shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-8 hover:shadow-[0_30px_60px_-15px_rgba(18,68,66,0.12)] transition-all duration-300">
              
              {/* Thumbnail Play Container */}
              <div 
                className="relative lg:w-3/5 aspect-[16/9] rounded-[24px] overflow-hidden group cursor-pointer bg-[#0B1F1C]"
                onClick={() => setActiveVideoId(featuredVideo.youtubeId)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`} 
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-[#0B1F1C]/20 group-hover:bg-[#0B1F1C]/40 transition-colors duration-300"></div>
                
                {/* Play Button Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#124442] shadow-2xl group-hover:scale-110 group-hover:bg-[#C8F16B] transition-all duration-300">
                  <Play size={32} className="ml-1 fill-current" />
                </div>

                <div className="absolute bottom-6 left-6 bg-[#124442] text-[#C8F16B] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  Featured
                </div>
              </div>

              {/* Text Information */}
              <div className="lg:w-2/5 flex flex-col justify-center py-4">
                <span className="text-[#124442]/60 text-xs font-bold uppercase tracking-widest mb-4">
                  {featuredVideo.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-[#124442] mb-6 hover:text-[#1A5A59] transition-colors">
                  {featuredVideo.title}
                </h3>
                
                <p className="text-[#124442]/70 text-lg leading-relaxed mb-8 font-light">
                  {featuredVideo.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-[#124442]/50 font-medium mb-8">
                  <Calendar size={14} /> Published on {featuredVideo.publishDate}
                </div>

                <div>
                  <button 
                    onClick={() => setActiveVideoId(featuredVideo.youtubeId)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#124442] text-white hover:bg-[#C8F16B] hover:text-[#0B1F1C] rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
                  >
                    Watch Now <Play size={14} className="fill-current" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. FILTER & SEARCH CONTROLS */}
      <section className="px-6 md:px-12 py-12 bg-[#F6F5EF] sticky top-[100px] z-30 backdrop-blur-md bg-[#F6F5EF]/90 border-y border-[#124442]/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-2 scrollbar-none mask-image-right">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#124442] text-[#C8F16B]'
                    : 'bg-white text-[#124442] border border-[#124442]/10 hover:bg-[#124442]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-[320px]">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-11 pr-5 py-3 rounded-full text-sm font-medium border border-[#124442]/10 focus:outline-none focus:border-[#124442] focus:ring-2 focus:ring-[#124442]/5 shadow-sm transition-all duration-300"
            />
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#124442]/40" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#124442]/40 hover:text-[#124442]"
              >
                <X size={16} />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 4. VIDEO GRID */}
      <section className="px-6 md:px-12 pb-32 bg-[#F6F5EF]">
        <div className="max-w-[1400px] mx-auto">
          
          {filteredVideos.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[32px] border border-[#124442]/5 shadow-sm">
              <p className="text-xl font-medium text-[#124442]/60 mb-2">No videos found</p>
              <p className="text-sm text-[#124442]/40">Try resetting your search query or selecting another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => setActiveVideoId(video.youtubeId)}
                  className="group cursor-pointer flex flex-col gap-6 bg-white p-6 rounded-[32px] border border-[#124442]/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(18,68,66,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-[#0B1F1C] flex justify-center items-center">
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B1F1C]/15 group-hover:bg-[#0B1F1C]/40 transition-colors duration-300"></div>

                    {/* Small Play Button */}
                    <div className="absolute w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#124442] shadow-lg group-hover:bg-[#C8F16B] group-hover:scale-105 transition-all duration-300">
                      <Play size={18} className="ml-0.5 fill-current" />
                    </div>

                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[#124442] text-[10px] font-bold uppercase tracking-widest">{video.category}</span>
                    </div>
                  </div>

                  {/* Description Details */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-[#124442]/40 text-xs font-medium mb-3">
                      <Calendar size={12} /> {video.publishDate}
                    </div>

                    <h3 className="text-xl font-semibold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-[#124442]/60 text-sm leading-relaxed line-clamp-3 mb-6">
                      {video.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[#124442]/5 flex items-center justify-between text-[#124442] font-semibold text-xs uppercase tracking-wider">
                      <span className="group-hover:text-[#1A5A59] transition-colors">Watch Video</span>
                      <div className="w-8 h-8 rounded-full bg-[#124442]/5 flex items-center justify-center group-hover:bg-[#124442] group-hover:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 5. VIDEO MODAL / LIGHTBOX IFRAME PLAYER */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F1C]/90 backdrop-blur-sm animate-fade-in">
          
          {/* Close Area */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideoId(null)}></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-[16/9]">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:scale-105 transition-all"
            >
              <X size={20} />
            </button>

            {/* Embedded YouTube Player */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default YoutubeVideos;
