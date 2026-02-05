import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, EVENT_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
            <div className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-brand-pink text-white group-hover:bg-brand-pinkDark' : 'bg-white text-brand-pink group-hover:bg-brand-light'}`}>
              <Heart size={20} fill="currentColor" />
            </div>
            <span className={`font-bold text-xl tracking-tight uppercase transition-colors ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
              {EVENT_DETAILS.name}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  link.highlight 
                    ? 'bg-brand-pink hover:bg-brand-pinkDark text-white px-5 py-2 rounded-full font-semibold transition-colors shadow-lg'
                    : `font-medium hover:text-brand-pink transition-colors ${scrolled ? 'text-slate-700' : 'text-white/90'}`
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'} hover:text-brand-pink focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium text-center ${
                  link.highlight
                    ? 'bg-brand-pink text-white mt-4'
                    : 'text-slate-700 hover:text-brand-pink hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;