import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll and route-based state
  useEffect(() => {
    // Inner pages: ALWAYS Solid Nav State immediately
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    // Home page: Scroll detection
    const handleScroll = () => {
      // Transition to solid slightly before leaving hero to prevent white-on-white text issues
      setIsScrolled(window.scrollY > 80);
    };

    // Initial check for Home
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Styles Definition
  // Solid: Brand color, pill shape, soft shadow
  const solidStateClass = 'bg-[#134443] shadow-lg border border-white/10 py-3';
  
  // Transparent: No background, larger padding for hero
  const transparentStateClass = 'bg-transparent py-5 border-transparent shadow-none';
  
  // Determine active class based on logic
  const activeNavClass = (!isHomePage || isScrolled) ? solidStateClass : transparentStateClass;

  // Helper to get active link class
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
      isActive 
        ? 'text-[#C8F16B] bg-white/5' 
        : `text-[#F6F5EF] hover:bg-white/10 hover:text-white ${isHomePage && !isScrolled ? 'drop-shadow-sm' : ''}`
    }`;

  return (
    <nav 
      className={`
        fixed top-6 left-0 right-0 mx-auto w-[92%] lg:w-[96%] max-w-[1450px] z-50 flex justify-center transition-all duration-300 ease-in-out rounded-full
        ${activeNavClass}
      `}
    >
      <div className="w-full px-6 md:px-8 flex items-center justify-between">
        
        {/* LEFT NAV GROUP */}
        <div className="hidden lg:flex items-center space-x-1 w-5/12 justify-start">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
          <NavLink to="/services" className={getNavLinkClass}>Services</NavLink>
          <NavLink to="/books" className={getNavLinkClass}>Books</NavLink>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center w-full lg:w-2/12 cursor-pointer group" onClick={() => navigate('/')}>
           <span className={`text-xl md:text-2xl font-semibold tracking-tight text-[#F6F5EF] ${isHomePage && !isScrolled ? 'drop-shadow-lg' : ''}`}>
             usmanzafar
             <span className="text-[#C8F16B] opacity-80 group-hover:opacity-100 transition-opacity">.com</span>
           </span>
        </div>

        {/* RIGHT NAV GROUP */}
        <div className="hidden lg:flex items-center space-x-2 w-5/12 justify-end">
          <NavLink to="/media" className={getNavLinkClass}>Media</NavLink>
          <NavLink to="/awards" className={getNavLinkClass}>Awards</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
          
          <button 
            onClick={() => navigate('/contact')} 
            className="ml-4 px-6 py-2.5 text-sm font-semibold bg-[#C8F16B] text-[#134443] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(200,241,107,0.2)]"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden absolute right-6">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#F6F5EF] p-2 hover:text-[#C8F16B] transition-colors drop-shadow-md">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-[#134443] border border-white/10 lg:hidden flex flex-col p-6 space-y-4 shadow-2xl animate-fade-in z-40 rounded-[24px]">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `text-lg font-medium py-2 ${isActive ? 'text-[#C8F16B]' : 'text-[#F6F5EF]'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <button onClick={() => { navigate('/contact'); setIsOpen(false); }} className="w-full py-3 bg-[#C8F16B] text-[#134443] font-bold rounded-xl mt-2">
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;