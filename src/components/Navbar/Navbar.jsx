import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContact = () => {
    window.location.href = 'mailto:rphan45321dol@gmail.com';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-medium">
                <span className="text-[#3B82F6]">System</span>
                <span className="text-[#8B5CF6]">Design</span>
              </span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/topics">Topics</NavLink>
              <NavLink to="/case-studies">Case Studies</NavLink>
              <NavLink to="/about">About</NavLink>
              <button 
                onClick={handleContact}
                className="px-4 py-2 bg-[#8B5CF6] text-white rounded-xl hover:bg-[#7C3AED] transition-all duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-4 pt-2 pb-4 space-y-3 bg-[#0A0A0A]/95 backdrop-blur-md rounded-b-2xl border-t border-white/10">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/topics" onClick={toggleMenu}>Topics</MobileNavLink>
              <MobileNavLink to="/case-studies" onClick={toggleMenu}>Case Studies</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    handleContact();
                    toggleMenu();
                  }}
                  className="w-full px-4 py-2 bg-[#8B5CF6] text-white rounded-xl hover:bg-[#7C3AED] transition-all duration-200 font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-all duration-200 text-[15px] py-1 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8B5CF6] group-hover:w-full transition-all duration-200"></span>
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="block text-gray-400 hover:text-white transition-all duration-200 text-[15px] py-2"
  >
    {children}
  </Link>
);

export default Navbar;