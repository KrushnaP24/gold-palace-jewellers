import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { brand } from '../data/brand';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';

export default function Navbar({ onOpenGeneralWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'Our Legacy', href: '#legacy' },
    { name: 'Visit Us', href: '#visit-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-peacock-950/95 backdrop-blur-md py-3 shadow-luxury border-b border-peacock-800/40' 
          : 'bg-gradient-to-b from-peacock-950/90 via-peacock-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="group focus:outline-none focus:ring-1 focus:ring-gold-500 rounded">
            <BrandLogo light={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-cream-100 hover:text-gold-400 font-sans text-sm tracking-wider uppercase transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenGeneralWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-luxury-gold transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-400/30"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenGeneralWhatsApp}
              className="sm:hidden p-2 rounded-full bg-emerald-700/80 text-white hover:bg-emerald-600 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream-100 hover:text-gold-400 hover:bg-peacock-900/50 transition focus:outline-none focus:ring-1 focus:ring-gold-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[450px] opacity-100 border-b border-peacock-800/80 bg-peacock-950/98 backdrop-blur-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <div className="grid gap-3 border-b border-peacock-800/60 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-cream-100 hover:text-gold-400 font-serif text-lg tracking-wide transition-colors py-1 block"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGeneralWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-emerald-950/50"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Order on WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-xs text-peacock-300 pt-2 px-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" /> Dharampeth, Nagpur
              </span>
              <span className="font-serif italic text-gold-400">Since 1951</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
