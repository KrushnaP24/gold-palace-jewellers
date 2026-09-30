import React from 'react';
import { brand } from '../data/brand';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreClick, onWhatsAppClick }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-peacock-950 text-cream-100 flex items-center pt-24 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle Peacock Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-peacock-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#165d68_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story, Headline, Badge & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 text-center lg:text-left space-y-6">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-peacock-900/80 border border-gold-500/40 text-gold-300 text-xs font-serif tracking-widest-luxury uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{brand.heritage}</span>
              <span className="w-1 h-1 rounded-full bg-gold-400"></span>
              <span className="text-cream-200">Nagpur</span>
            </div>

            {/* Main Luxury Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light text-cream-50 leading-[1.15] tracking-tight">
              Timeless Elegance.{' '}
              <span className="block font-normal text-gold-gradient italic mt-1">
                Crafted to Shine.
              </span>
            </h1>

            {/* Short Subtitle */}
            <p className="text-base sm:text-lg text-cream-200/90 font-sans font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover exquisite jewellery in{' '}
              <span className="text-gold-300 font-medium">Diamond</span>,{' '}
              <span className="text-gold-300 font-medium">Gold</span>,{' '}
              <span className="text-gold-300 font-medium">Silver</span>,{' '}
              <span className="text-gold-300 font-medium">Platinum</span> and{' '}
              <span className="text-gold-300 font-medium">Gemstones</span>.
            </p>

            {/* Category pills preview */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-peacock-200 font-sans">
              {brand.categories.map((cat, idx) => (
                <span key={cat} className="inline-flex items-center">
                  <span className="hover:text-gold-300 transition-colors">{cat}</span>
                  {idx < brand.categories.length - 1 && (
                    <span className="mx-2 text-peacock-500">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-peacock-950 font-semibold text-xs tracking-super-wide uppercase shadow-lg shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-peacock-950" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-peacock-900/90 hover:bg-peacock-800 text-cream-100 hover:text-white border border-peacock-700/60 hover:border-gold-500/50 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Trust highlights bar */}
            <div className="pt-6 border-t border-peacock-800/40 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-gold-400 font-medium">1951</p>
                <p className="text-xs text-peacock-200">75+ Years Trusted Legacy</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-cream-100 font-medium">Dharampeth</p>
                <p className="text-xs text-peacock-200">Nagpur Landmark Store</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Preserving details and aspect ratio) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            
            {/* Luxury decorative frame around the hero photo */}
            <div className="relative w-full max-w-lg lg:max-w-xl group">
              
              {/* Gold & Peacock Glow backdrops */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-500/30 via-peacock-500/20 to-gold-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* The Hero Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 bg-peacock-900 shadow-2xl">
                <img 
                  src="/images/hero-model.jpg" 
                  alt="Gold Palace Jewellers MorPankhi Peacock Heritage Collection" 
                  className="w-full h-auto object-cover max-h-[580px] sm:max-h-[640px] transform hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle Inner Gradient Overlay on bottom for badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-peacock-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Heritage Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3.5 rounded-xl bg-peacock-950/85 backdrop-blur-md border border-gold-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-serif text-cream-100 tracking-wide">MorPankhi Sapphire & Diamond</p>
                      <p className="text-[10px] text-peacock-300 font-sans">Artisanal Masterpiece • 1951</p>
                    </div>
                  </div>
                  <button
                    onClick={onExploreClick}
                    className="text-xs font-sans text-gold-400 hover:text-gold-300 flex items-center gap-1 font-medium transition"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

              {/* Floating Ornamental Stamp */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-gradient-to-br from-gold-400 to-gold-600 text-peacock-950 p-3 rounded-full shadow-luxury-gold border-2 border-peacock-950">
                <div className="w-12 h-12 rounded-full border border-peacock-950/40 flex flex-col items-center justify-center text-center">
                  <span className="text-[9px] uppercase font-bold leading-none">Since</span>
                  <span className="text-sm font-serif font-black leading-none mt-0.5">1951</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
