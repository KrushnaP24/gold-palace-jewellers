import React from 'react';
import { Gem, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

export default function WhyChooseUs({ onWhatsAppClick }) {
  const pillars = [
    {
      icon: Gem,
      title: "Premium Jewellery",
      description: "Beautiful jewellery collections across precious materials including Diamond, Gold, Silver, Platinum and Gemstones.",
    },
    {
      icon: Clock,
      title: "Timeless Designs",
      description: "Elegant jewellery designed for special moments, blending classical craftsmanship with contemporary grace.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Heritage",
      description: "Serving since 1951 with an unbroken tradition of integrity and client trust in Dharampeth, Nagpur.",
    },
    {
      icon: MessageCircle,
      title: "Personal Assistance",
      description: "Connect with the jewellery team through WhatsApp for personalized advice, size guidance, and custom requests.",
      actionText: "Chat on WhatsApp",
      action: onWhatsAppClick
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-peacock-950 text-cream-100 relative overflow-hidden">
      {/* Subtle lighting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(43,156,174,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-super-wide">
            Our Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream-50">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-cream-200/80 font-sans">
            Centred upon unmatched trust, enduring purity, and personal customer care.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-peacock-900/60 border border-peacock-800/80 hover:border-gold-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-luxury-glow flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-peacock-800/80 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:border-gold-400 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-cream-100 font-medium mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/70 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {pillar.actionText && (
                  <div className="pt-6 mt-4 border-t border-peacock-800/50">
                    <button
                      onClick={pillar.action}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition"
                    >
                      <span>{pillar.actionText}</span>
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
