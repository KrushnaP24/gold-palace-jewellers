import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { brand } from '../data/brand';

export default function WhatsAppButton({ onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      <div 
        className={`hidden md:block transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-peacock-950 text-cream-100 text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-gold-500/30 whitespace-nowrap font-medium">
          Chat with our jewellery team
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Order or inquire on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10 stroke-[2.2]" />
      </button>
    </div>
  );
}
