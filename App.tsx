import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GenericPage from './pages/GenericPage';
import ServicesListing from './pages/ServicesListing';
import ServiceDetail from './pages/ServiceDetail';
import BookDetail from './pages/BookDetail';
import BooksListing from './pages/BooksListing';
import InsightsListing from './pages/InsightsListing';
import InsightDetail from './pages/InsightDetail';
import KeynotesListing from './pages/KeynotesListing';
import MediaListing from './pages/MediaListing';
import AwardsListing from './pages/AwardsListing';
import AcademicExperience from './pages/AcademicExperience';
import Contact from './pages/Contact';
import EssentialMarketEntry from './pages/EssentialMarketEntry';
import GrowthAcceleration from './pages/GrowthAcceleration';
import PremiumStrategicAdvisory from './pages/PremiumStrategicAdvisory';
import EnterpriseAdvisory from './pages/EnterpriseAdvisory';
import Solutions from './pages/Solutions';
import Aria from './pages/Aria';
import { SERVICE_CONTENT } from './constants';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-brand bg-cream min-h-screen flex flex-col selection:bg-accent selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services Main Page */}
            <Route path="/services" element={<ServicesListing />} />

            {/* Keynotes */}
            <Route path="/keynotes" element={<KeynotesListing />} />

            {/* Advisory Package Routes */}
            <Route path="/services/essential-market-entry" element={<EssentialMarketEntry />} />
            <Route path="/services/growth-acceleration" element={<GrowthAcceleration />} />
            <Route path="/services/premium-strategic-advisory" element={<PremiumStrategicAdvisory />} />
            <Route path="/services/enterprise-advisory" element={<EnterpriseAdvisory />} />

            {/* Advisory Package Direct Aliases (as requested) */}
            <Route path="/essential-market-entry" element={<EssentialMarketEntry />} />
            <Route path="/growth-acceleration" element={<GrowthAcceleration />} />
            <Route path="/premium-strategic" element={<PremiumStrategicAdvisory />} />
            <Route path="/enterprise-advisory" element={<EnterpriseAdvisory />} />

            {/* Individual Service Routes - Legacy */}
            <Route path="/services/board-advisory" element={<ServiceDetail content={SERVICE_CONTENT['board-advisory']} />} />
            <Route path="/services/market-acceleration" element={<ServiceDetail content={SERVICE_CONTENT['market-acceleration']} />} />
            <Route path="/services/government-enterprise" element={<ServiceDetail content={SERVICE_CONTENT['government-enterprise']} />} />
            <Route path="/services/smart-cities" element={<ServiceDetail content={SERVICE_CONTENT['smart-cities']} />} />
            <Route path="/services/ai-advisory" element={<ServiceDetail content={SERVICE_CONTENT['ai-advisory']} />} />
            <Route path="/services/digital-transformation" element={<ServiceDetail content={SERVICE_CONTENT['digital-transformation']} />} />
            <Route path="/services/global-keynotes" element={<ServiceDetail content={SERVICE_CONTENT['global-keynotes']} />} />
            <Route path="/services/fundraising" element={<ServiceDetail content={SERVICE_CONTENT['fundraising']} />} />

            {/* NEW ROUTES Mapped to /pages/ format as requested */}
            <Route path="/pages/board-advisory-market-acceleration" element={<ServiceDetail content={SERVICE_CONTENT['board-advisory-market-acceleration']} />} />
            <Route path="/pages/smart-cities-strategic-advisory" element={<ServiceDetail content={SERVICE_CONTENT['smart-cities-strategic-advisory']} />} />
            <Route path="/pages/artificial-intelligence-advisory" element={<ServiceDetail content={SERVICE_CONTENT['artificial-intelligence-advisory']} />} />
            <Route path="/pages/keynotes-public-speaking" element={<ServiceDetail content={SERVICE_CONTENT['keynotes-public-speaking']} />} />
            <Route path="/pages/academic-advisory-accreditation" element={<ServiceDetail content={SERVICE_CONTENT['academic-advisory-accreditation']} />} />
            <Route path="/pages/fund-raising-services" element={<ServiceDetail content={SERVICE_CONTENT['fund-raising-services']} />} />
            <Route path="/pages/executive-training-coaching" element={<ServiceDetail content={SERVICE_CONTENT['executive-training-coaching']} />} />


            {/* Books Routes */}
            <Route path="/books" element={<BooksListing />} />
            <Route path="/books/:slug" element={<BookDetail />} />

            {/* Insights Routes */}
            <Route path="/insights" element={<InsightsListing />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />

            {/* Media Route */}
            <Route path="/media" element={<MediaListing />} />

            {/* Awards Route */}
            <Route path="/awards" element={<AwardsListing />} />

            {/* New Dedicated About Page */}
            <Route path="/about" element={<About />} />

            <Route path="/solutions" element={<Solutions />} />

            {/* New Academic & Education Pages */}
            <Route path="/academic-experience" element={<AcademicExperience />} />
            
            <Route path="/education" element={
              <GenericPage 
                title="Education & Qualifications" 
                subtitle="Doctoral research, executive certifications, and continuous learning."
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
              />
            } />

            <Route path="/contact" element={<Contact />} />
            <Route path="/aria" element={<Aria />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;