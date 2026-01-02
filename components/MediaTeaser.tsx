import React from 'react';

const MediaTeaser: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <h2 className="text-3xl font-semibold text-brand tracking-tight">Featured In</h2>
           <a href="/media" className="text-brand/60 hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">View All Media</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {["Forbes", "Bloomberg", "TechCrunch", "HBR", "Wired", "CNBC", "Reuters", "The Economist", "Fast Company", "Inc."].map((name, i) => (
              <div key={i} className="aspect-video glass-card rounded-[16px] flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group hover:bg-white/80">
                 <span className="text-xl font-bold text-brand">{name}</span>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default MediaTeaser;