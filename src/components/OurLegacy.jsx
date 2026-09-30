import React from 'react';
import { brand } from '../data/brand';
import { MapPin, Sparkles, Building2 } from 'lucide-react';

export default function OurLegacy() {
  return (
    <section id="legacy" className="py-20 lg:py-28 bg-cream-50 text-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-super-wide text-gold-600">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Brand Heritage</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-peacock-950">
            A Legacy Since 1951
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Uploaded Shop Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 group">
              <img 
                src="/images/storefront.jpg" 
                alt="Gold Palace Jewellers Physical Storefront Dharampeth Nagpur" 
                className="w-full h-auto object-cover max-h-[500px] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peacock-950/70 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-peacock-950/90 backdrop-blur-sm p-4 rounded-xl border border-peacock-700/50 flex items-center justify-between text-cream-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-serif text-sm text-gold-300">Gold Palace Jewellers Storefront</p>
                    <p className="text-[11px] text-peacock-200">Dharampeth, Nagpur Landmark</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-peacock-800 px-2.5 py-1 rounded">
                  Est. 1951
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent 1951 Typography & Brand Heritage Details */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Monumental 1951 Typography */}
            <div className="relative inline-block">
              <span className="font-serif text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-gold-gradient select-none block leading-none">
                1951
              </span>
              <p className="font-serif text-xl sm:text-2xl text-peacock-900 font-medium tracking-wide mt-2">
                Serving Since 1951
              </p>
            </div>

            {/* Brand Story Statement */}
            <div className="space-y-4 text-slate-700 font-sans text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                For over seven decades, our destination in Nagpur has stood as a beacon of uncompromising purity, artistic craftsmanship, and genuine client relationships.
              </p>
              <p>
                From timeless bridal sets to contemporary everyday fine jewellery, our collections celebrate memorable milestones across generations.
              </p>
            </div>

            {/* Verified Precious Categories Highlight */}
            <div className="p-5 rounded-2xl bg-cream-100 border border-cream-300 space-y-2">
              <span className="text-xs uppercase tracking-super-wide text-peacock-700 font-semibold block">
                Precious Materials
              </span>
              <p className="font-serif text-lg sm:text-xl text-peacock-950 font-medium tracking-wide">
                Diamond • Gold • Silver • Platinum • Gemstones
              </p>
            </div>

            {/* Verified Location */}
            <div className="flex items-start gap-3 justify-center lg:justify-start text-slate-700 text-sm">
              <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">Store Location</strong>
                <span>Near Sudama Talkies, Dharampeth, Nagpur, 440010</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
