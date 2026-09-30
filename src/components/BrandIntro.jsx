import React from 'react';
import { brand } from '../data/brand';
import { Gem, Crown, MapPin } from 'lucide-react';

export default function BrandIntro() {
  return (
    <section className="py-20 lg:py-24 bg-cream-100 text-slate-900 relative overflow-hidden border-b border-cream-300">
      {/* Subtle decorative background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500/5 font-serif text-[18vw] font-bold pointer-events-none select-none tracking-widest whitespace-nowrap">
        1951
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Verified Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-super-wide text-peacock-700">
            <span className="w-6 h-px bg-peacock-600"></span>
            <span>Heritage & Craft</span>
            <span className="w-6 h-px bg-peacock-600"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-peacock-950 tracking-tight">
            Jewellery With a Legacy
          </h2>

          <p className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed pt-2">
            Serving jewellery enthusiasts since 1951, the brand offers a diverse collection across{' '}
            <strong className="text-peacock-900 font-semibold">Diamond</strong>,{' '}
            <strong className="text-peacock-900 font-semibold">Gold</strong>,{' '}
            <strong className="text-peacock-900 font-semibold">Silver</strong>,{' '}
            <strong className="text-peacock-900 font-semibold">Platinum</strong> and{' '}
            <strong className="text-peacock-900 font-semibold">Gemstones</strong>.
          </p>
        </div>

        {/* 3 Verified Elegant Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          
          {/* Highlight 1: Since 1951 */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-luxury transition-all duration-300 text-center group">
            <div className="w-14 h-14 mx-auto rounded-full bg-peacock-50 border border-peacock-200 flex items-center justify-center text-peacock-700 group-hover:scale-110 group-hover:bg-peacock-700 group-hover:text-gold-300 transition-all duration-300 mb-5">
              <Gem className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-peacock-950 mb-2 font-normal">
              💎 Since 1951
            </h3>
            <p className="text-sm font-sans text-slate-600 font-medium">
              Serving since 1951
            </p>
          </div>

          {/* Highlight 2: Precious Collections */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-luxury transition-all duration-300 text-center group">
            <div className="w-14 h-14 mx-auto rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 mb-5">
              <Crown className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-peacock-950 mb-2 font-normal">
              👑 Precious Collections
            </h3>
            <p className="text-sm font-sans text-slate-600 font-medium tracking-wide">
              Diamond • Gold • Silver • Platinum • Gemstones
            </p>
          </div>

          {/* Highlight 3: Nagpur Landmark */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-luxury transition-all duration-300 text-center group">
            <div className="w-14 h-14 mx-auto rounded-full bg-peacock-50 border border-peacock-200 flex items-center justify-center text-peacock-700 group-hover:scale-110 group-hover:bg-peacock-700 group-hover:text-gold-300 transition-all duration-300 mb-5">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-peacock-950 mb-2 font-normal">
              📍 Nagpur
            </h3>
            <p className="text-sm font-sans text-slate-600 leading-snug">
              {brand.address}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
