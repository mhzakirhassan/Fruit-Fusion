import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'HOME' as ViewState },
    { label: 'Shop Us', view: 'SHOP' as ViewState },
    { label: 'About Us', view: 'HOME' as ViewState }, // Placeholder for now
    { label: 'Contact', view: 'CONTACT' as ViewState },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => setView('HOME')}
        >
           <div className="w-12 h-12 bg-yellow-400 border-2 border-black rounded-lg flex items-center justify-center mr-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1">
             <span className="text-2xl">🍇</span>
           </div>
           <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold leading-none text-black">Fruit</span>
              <span className="font-serif text-3xl font-bold leading-none text-black">Fusion</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setView(link.view)}
              className={`font-medium text-lg transition-colors relative group ${currentView === link.view ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200 py-4 px-4 flex flex-col space-y-4">
           {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                setView(link.view);
                setIsMenuOpen(false);
              }}
              className="text-left font-medium text-xl text-black py-2 border-b border-gray-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
