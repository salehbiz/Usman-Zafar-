import React, { useEffect } from 'react';
import PublicationsSection from '../components/PublicationsSection';
import FinalCTA from '../components/FinalCTA';

const BooksListing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-20">
      <div className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto text-center">
         <span className="text-[#124442]/60 font-semibold tracking-widest text-xs uppercase mb-4 block">Library</span>
         <h1 className="text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tight mb-6">Publications</h1>
         <p className="text-xl text-[#124442]/70 max-w-2xl mx-auto leading-relaxed">
            Thought leadership and strategic frameworks for the modern era. Explore the latest books and guides by Dr. Usman Zafar.
         </p>
      </div>
      
      {/* Reusing the section component which already has the layout we want */}
      <div className="-mt-12">
        <PublicationsSection />
      </div>
      
      <FinalCTA />
    </div>
  );
};

export default BooksListing;