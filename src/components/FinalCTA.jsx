import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA({ onExploreClick, onWhatsAppClick }) {
  return (
    <section className="py-20 lg:py-28 bg-peacock-900 text-cream-100 relative overflow-hidden text-center">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-peacock-gradient opacity-90"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-950/70 border border-gold-500/40 text-gold-300 text-xs font-serif tracking-widest-luxury uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Serving Since 1951 • Nagpur</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-cream-50 leading-tight">
          Find Something Made for You
        </h2>

        <p className="text-base sm:text-lg text-cream-200/90 font-sans max-w-2xl mx-auto leading-relaxed">
          Explore our jewellery collection or connect with our team directly.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-peacock-950 font-bold text-xs tracking-super-wide uppercase shadow-luxury-gold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
