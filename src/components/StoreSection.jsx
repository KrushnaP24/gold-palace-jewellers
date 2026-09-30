import React from 'react';
import { brand } from '../data/brand';
import { MapPin, Navigation, Phone, MessageCircle, Store, CheckCircle, Clock } from 'lucide-react';

export default function StoreSection({ onWhatsAppClick }) {
  const experiences = [
    {
      title: "Explore Online",
      desc: "Browse our signature creations across gold, diamond, platinum, and gemstones in high resolution."
    },
    {
      title: "Check Availability",
      desc: "Connect directly with our staff on WhatsApp for instant piece availability and custom size requests."
    },
    {
      title: "Experience In-Store",
      desc: "Visit our showroom in Dharampeth, Nagpur to touch, try on, and personalize your chosen jewellery."
    },
    {
      title: "Physical Trust Since 1951",
      desc: "Enjoy complete peace of mind with our 70+ years physical presence and enduring family reputation."
    }
  ];

  return (
    <section id="visit-us" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Discover Online. Experience In Store */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-super-wide text-peacock-700">
            Seamless Retail Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-peacock-950">
            Discover Online. Experience In Store.
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            We bridge digital discovery with the timeless warmth of personal in-store hospitality. Browse your preferred ornaments from home, then step into our landmark Nagpur showroom.
          </p>
        </div>

        {/* 4 Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {experiences.map((item, idx) => (
            <div key={idx} className="bg-cream-100 rounded-xl p-6 border border-cream-300 hover:border-gold-400 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-peacock-900 text-gold-300 flex items-center justify-center font-bold text-xs mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg text-peacock-950 font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Part 2: Visit Our Store Landmark Section */}
        <div className="bg-peacock-950 text-cream-100 rounded-3xl overflow-hidden shadow-2xl border border-peacock-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Storefront Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
              <img 
                src="/images/storefront.jpg" 
                alt="Gold Palace Jewellers Dharampeth Showroom" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peacock-950/80 via-transparent to-transparent lg:hidden"></div>
            </div>

            {/* Store Information & Action Buttons */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peacock-900 border border-gold-500/30 text-gold-300 text-xs font-serif tracking-widest-luxury uppercase mb-4">
                  <Store className="w-3.5 h-3.5 text-gold-400" />
                  <span>Flagship Showroom</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-light text-cream-50 leading-tight">
                  Visit Our Store
                </h3>

                <p className="text-cream-200/80 text-sm font-sans mt-3 leading-relaxed">
                  Located in the heart of Dharampeth, Nagpur. Experience personal consultation for bridal sets, auspicious gold purchases, certified diamonds, and customized astrology rashi stones.
                </p>

                {/* Location details */}
                <div className="mt-6 space-y-3 border-t border-peacock-800/80 pt-6">
                  <div className="flex items-start gap-3 text-cream-100">
                    <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-sm">Showroom Address:</span>
                      <span className="text-xs text-cream-200/90 leading-relaxed">
                        {brand.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-cream-100">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div className="text-xs text-cream-200">
                      <span className="font-semibold text-cream-100">Telephone / Enquiries: </span>
                      <a href={`tel:${brand.displayPhone}`} className="hover:text-gold-300 underline">
                        {brand.displayPhone}
                      </a>
                      <span className="mx-2">•</span>
                      <a href={`tel:${brand.secondaryPhone}`} className="hover:text-gold-300 underline">
                        {brand.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-peacock-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onWhatsAppClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                <a
                  href={`tel:${brand.whatsapp}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-peacock-900 hover:bg-peacock-850 text-cream-100 font-semibold text-xs uppercase tracking-wider border border-peacock-700 transition"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Store</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
