import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { YOUTUBE_VIDEOS_DATA } from '../constants';
import { Play, Calendar, ArrowRight, X } from 'lucide-react';

const YoutubeTeaser: React.FC = () => {
  const navigate = useNavigate();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Take the latest 3 videos (excluding the main featured one or just the first 3)
  const teaserVideos = YOUTUBE_VIDEOS_DATA.slice(0, 3);

  return (
    <section className="px-6 md:px-12 py-24 bg-white border-t border-[#124442]/5 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8F16B]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-3 block">Digital Broadcast</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#124442] tracking-tight mb-4">
              Latest from YouTube
            </h2>
            <p className="text-lg text-[#124442]/70 font-light leading-relaxed">
              Watch the latest insights from Dr. Usman on technology, innovation, smart cities, and digital transformation.
            </p>
          </div>

          <div>
            <button 
              onClick={() => navigate('/youtube')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#124442] text-[#124442] hover:bg-[#124442] hover:text-white rounded-full font-semibold text-sm transition-all duration-300"
            >
              View All Videos <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaserVideos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideoId(video.youtubeId)}
              className="group cursor-pointer flex flex-col gap-6 bg-[#F6F5EF]/50 p-6 rounded-[32px] border border-[#124442]/5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(18,68,66,0.08)] hover:-translate-y-1 hover:bg-white transition-all duration-300"
            >
              {/* Thumbnail Container */}
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

              {/* Text Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-[#124442]/40 text-xs font-medium mb-3">
                  <Calendar size={12} /> {video.publishDate}
                </div>

                <h3 className="text-xl font-semibold text-[#124442] leading-tight mb-3 group-hover:text-[#1A5A59] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-[#124442]/60 text-sm leading-relaxed line-clamp-2 mb-6">
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

      </div>

      {/* Embedded Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F1C]/90 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideoId(null)}></div>
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-[16/9]">
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:scale-105 transition-all"
            >
              <X size={20} />
            </button>
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

    </section>
  );
};

export default YoutubeTeaser;
