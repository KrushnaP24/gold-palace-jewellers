import React from 'react';
import { categories } from '../data/products';

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="w-full flex justify-center pb-8">
      {/* Horizontally scrollable wrapper on mobile with hidden scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 px-4 max-w-full no-scrollbar border-b sm:border-b-0 border-cream-200">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'bg-peacock-900 text-gold-300 shadow-md border border-gold-500/40 scale-105'
                  : 'bg-white hover:bg-cream-100 text-slate-600 hover:text-peacock-900 border border-cream-300'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
