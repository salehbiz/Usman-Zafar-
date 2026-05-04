import React from 'react';
import Hero from '../components/Hero';
import AriaIntro from '../components/AriaIntro';
import AboutSection from '../components/AboutSection';
import ServicesInteractive from '../components/ServicesInteractive';
import PublicationsSection from '../components/PublicationsSection';
import AdvisoryPackages from '../components/AdvisoryPackages';
import TestimonialsGrid from '../components/TestimonialsGrid';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import Insights from '../components/Insights';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="bg-[#F6F5EF] min-h-screen">
      <Hero />
      <AboutSection />
      
      {/* Shared Dark Background for Services & Aria Intro */}
      <div className="relative w-full bg-[#0B1F1C] overflow-hidden mb-24 md:mb-32">
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2F2E] via-[#124442] to-[#091A19]"></div>
          
          {/* Subtle Lime Glow */}
          <div className="absolute top-[0%] left-[-10%] w-[60%] h-[50%] bg-[#C8F16B]/[0.05] rounded-full blur-[150px]"></div>
          
          {/* Deep Teal Haze */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1A5A59]/20 rounded-full blur-[120px]"></div>
          
          {/* Subtle Noise (Overlay) */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>
        
        <ServicesInteractive />
        <AriaIntro />
      </div>

      <PublicationsSection />
      <AdvisoryPackages />
      <TestimonialsGrid />
      <WhyWorkWithUs />
      <Insights />
      <FinalCTA />
    </div>
  );
};

export default Home;