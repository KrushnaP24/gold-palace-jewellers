import React from 'react';
import BrandLogo from './BrandLogo';
import { brand } from '../data/brand';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ onWhatsAppClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-peacock-950 text-cream-200 border-t border-peacock-850 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-peacock-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo light={true} />
            
            <p className="text-sm text-cream-200/70 font-sans max-w-sm leading-relaxed pt-2">
              Serving jewellery connoisseurs since 1951. Offering masterfully crafted collections across Diamond, Gold, Silver, Platinum and precious Gemstones.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-super-wide text-gold-400 font-semibold block mb-1">
                Heritage Presence
              </span>
              <p className="font-serif text-sm text-cream-100">
                Serving since 1951 • Dharampeth, Nagpur
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-super-wide text-gold-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans text-cream-200/80">
              <li>
                <a href="#home" className="hover:text-gold-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#collection" className="hover:text-gold-300 transition-colors">Our Collection</a>
              </li>
              <li>
                <a href="#legacy" className="hover:text-gold-300 transition-colors">Our Legacy (Since 1951)</a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-gold-300 transition-colors">Visit Our Showroom</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-super-wide text-gold-400">
              Showroom & Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-cream-200/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{brand.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{brand.displayPhone} / {brand.secondaryPhone}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onWhatsAppClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold tracking-wider transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Connect on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Precious Categories Ribbon */}
        <div className="py-6 border-b border-peacock-850 text-center">
          <p className="text-xs font-serif tracking-widest-luxury text-gold-400 uppercase">
            Diamond • Gold • Silver • Platinum • Gemstones
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60 font-sans">
          <p>© 2026 {brand.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Serving since 1951</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-gold-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
