import React from 'react';

export default function BrandLogo({ className = "", light = false, iconOnly = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Faceted Diamond Emblem matching Gold Palace Jewellers storefront */}
      <div className="relative flex items-center justify-center">
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-9 md:h-9 text-gold-500 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
        >
          {/* Outer Diamond Silhouette */}
          <polygon 
            points="20,36 4,14 10,4 30,4 36,14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="round" 
            fill="rgba(212,175,55,0.12)"
          />
          {/* Inner Facet Lines */}
          <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="4" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="4" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="16" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="4" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span className={`font-serif tracking-widest-luxury uppercase text-base sm:text-lg md:text-xl font-bold leading-tight ${light ? 'text-white' : 'text-peacock-950 dark:text-cream-100'}`}>
            Gold Palace
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-super-wide uppercase text-gold-500 font-semibold font-sans">
              Jewellers
            </span>
            <span className="text-[8px] text-peacock-400 font-serif italic">
              • 1951
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
