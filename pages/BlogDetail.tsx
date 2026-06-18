import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Tag, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { BLOGS_DATA } from '../constants';
import FinalCTA from '../components/FinalCTA';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = BLOGS_DATA.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F5EF] text-[#124442] font-sans">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Blog Not Found</h2>
            <button onClick={() => navigate('/blogs')} className="text-sm underline hover:text-[#C8F16B]">Back to Blogs</button>
        </div>
      </div>
    );
  }

  const shareOnLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F6F5EF] pt-24 font-sans text-[#124442]">
       
       {/* Breadcrumb / Back */}
       <div className="px-6 md:px-12 max-w-[1000px] mx-auto mb-8">
          <button 
             onClick={() => navigate('/blogs')}
             className="flex items-center gap-2 text-[#124442]/60 hover:text-[#124442] font-medium transition-colors"
          >
             <ArrowLeft size={18} /> Back to Blogs
          </button>
       </div>

       {/* Article Header */}
       <div className="px-6 md:px-12 max-w-[1000px] mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
             <span className="px-3 py-1 rounded-full bg-[#124442]/5 text-[#124442] text-xs font-bold uppercase tracking-widest border border-[#124442]/10">
                {article.category}
             </span>
             <span className="flex items-center gap-2 text-[#124442]/50 text-xs font-medium uppercase tracking-widest">
                <Calendar size={12} /> {article.date}
             </span>
             <span className="flex items-center gap-2 text-[#124442]/50 text-xs font-medium uppercase tracking-widest">
                <Clock size={12} /> {article.readTime}
             </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#124442] leading-[1.1] tracking-tight mb-8">
             {article.title}
          </h1>

          <div className="flex items-center justify-between border-y border-[#124442]/10 py-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#124442] flex items-center justify-center text-white font-bold text-sm">
                   UZ
                </div>
                <div>
                   <p className="text-sm font-bold text-[#124442]">{article.author}</p>
                   <p className="text-xs text-[#124442]/50 uppercase tracking-widest">Global Advisor</p>
                </div>
             </div>
             
             <div className="flex gap-2">
                {article.link && (
                   <a 
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 px-4 rounded-full border border-[#124442]/10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#124442]/60 hover:text-[#0077b5] hover:border-[#0077b5] transition-all"
                   >
                      <ExternalLink size={14} /> Read on LinkedIn
                   </a>
                )}
                <button 
                   onClick={shareOnLinkedin} 
                   className="w-10 h-10 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442]/60 hover:text-[#0077b5] hover:border-[#0077b5] transition-all"
                   title="Share on LinkedIn"
                >
                   <Linkedin size={16} />
                </button>
                <button 
                   onClick={shareOnTwitter}
                   className="w-10 h-10 rounded-full border border-[#124442]/10 flex items-center justify-center text-[#124442]/60 hover:text-black hover:border-black transition-all"
                   title="Share on X"
                >
                   <Twitter size={16} />
                </button>
             </div>
          </div>
       </div>

       {/* Featured Image */}
       <div className="px-6 md:px-12 max-w-[1200px] mx-auto mb-16">
          <div className="relative w-full rounded-[32px] overflow-hidden shadow-xl bg-white flex justify-center items-center p-2 border border-[#124442]/10">
             <img src={article.image} alt={article.title} referrerPolicy="no-referrer" className="w-full h-auto max-h-[600px] object-contain rounded-[24px]" />
          </div>
       </div>

       {/* Article Content */}
       <article className="px-6 md:px-12 max-w-[800px] mx-auto mb-24">
          <div 
            className="prose prose-lg prose-headings:font-bold prose-headings:text-[#124442] prose-p:text-[#124442]/80 prose-p:leading-relaxed prose-a:text-[#124442] prose-a:underline hover:prose-a:text-[#C8F16B] prose-strong:text-[#124442] prose-li:text-[#124442]/80"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-[#124442]/10 flex flex-wrap gap-2">
             {article.tags.map((tag, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#124442]/5 text-[#124442]/70 text-sm font-medium hover:bg-[#124442]/10 transition-colors cursor-pointer">
                   <Tag size={12} /> {tag}
                </span>
             ))}
          </div>
       </article>

       <FinalCTA />
    </div>
  );
};

export default BlogDetail;
