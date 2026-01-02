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
import WorkExperience from './pages/WorkExperience';
import InsightsListing from './pages/InsightsListing';
import InsightDetail from './pages/InsightDetail';
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

            {/* Individual Service Routes */}
            <Route path="/services/board-advisory" element={<ServiceDetail content={SERVICE_CONTENT['board-advisory']} />} />
            <Route path="/services/market-acceleration" element={<ServiceDetail content={SERVICE_CONTENT['market-acceleration']} />} />
            <Route path="/services/government-enterprise" element={<ServiceDetail content={SERVICE_CONTENT['government-enterprise']} />} />
            <Route path="/services/smart-cities" element={<ServiceDetail content={SERVICE_CONTENT['smart-cities']} />} />
            <Route path="/services/ai-advisory" element={<ServiceDetail content={SERVICE_CONTENT['ai-advisory']} />} />
            <Route path="/services/digital-transformation" element={<ServiceDetail content={SERVICE_CONTENT['digital-transformation']} />} />
            <Route path="/services/global-keynotes" element={<ServiceDetail content={SERVICE_CONTENT['global-keynotes']} />} />
            <Route path="/services/fundraising" element={<ServiceDetail content={SERVICE_CONTENT['fundraising']} />} />

            {/* Books Routes */}
            <Route path="/books" element={<BooksListing />} />
            <Route path="/books/:slug" element={<BookDetail />} />

            {/* Work Experience Route */}
            <Route path="/work-experience" element={<WorkExperience />} />

            {/* Insights Routes */}
            <Route path="/insights" element={<InsightsListing />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />

            {/* New Dedicated About Page */}
            <Route path="/about" element={<About />} />

            {/* New Academic & Education Pages (Using GenericPage as placeholder for now) */}
            <Route path="/academic-experience" element={
              <GenericPage 
                title="Academic Experience" 
                subtitle="Research, teaching, and academic contributions to global policy."
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
              />
            } />
            
            <Route path="/education" element={
              <GenericPage 
                title="Education & Qualifications" 
                subtitle="Doctoral research, executive certifications, and continuous learning."
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
              />
            } />

            {/* Other Generic Pages */}
            <Route path="/media" element={
              <GenericPage 
                title="Media & Press" 
                subtitle="Interviews, podcasts, and featured articles across global media outlets."
                image="https://picsum.photos/seed/media/600/600"
              />
            } />

            <Route path="/awards" element={
              <GenericPage 
                title="Awards & Recognition" 
                subtitle="Celebrating excellence in leadership and global impact."
                image="https://picsum.photos/seed/awards/600/600"
              />
            } />

            <Route path="/contact" element={
              <GenericPage 
                title="Contact" 
                subtitle="Reach out to discuss advisory engagements, speaking opportunities, or press inquiries."
                image="https://picsum.photos/seed/contact/600/600"
              />
            } />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;