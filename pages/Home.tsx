import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesInteractive from '../components/ServicesInteractive';
import PublicationsSection from '../components/PublicationsSection';
import TestimonialsGrid from '../components/TestimonialsGrid';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import SelectedWork from '../components/SelectedWork';
import Insights from '../components/Insights';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="bg-[#F6F5EF] min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesInteractive />
      <PublicationsSection />
      <TestimonialsGrid />
      <WhyWorkWithUs />
      <SelectedWork />
      <Insights />
      <FinalCTA />
    </div>
  );
};

export default Home;