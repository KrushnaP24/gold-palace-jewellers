import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { Sparkles } from 'lucide-react';

export default function Collection({ onViewDetails, onOrderNow }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const currentCategoryObj = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="collection" className="py-20 lg:py-28 bg-cream-100 text-slate-900 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-super-wide text-peacock-700">
            <span className="w-6 h-px bg-peacock-600"></span>
            <span>Handcrafted Excellence</span>
            <span className="w-6 h-px bg-peacock-600"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-peacock-950">
            Our Collection
          </h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base">
            Explore authentic designs crafted in precious gold, diamond, platinum, and gemstones.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {/* Dynamic Category Highlight Title */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl text-peacock-900 font-normal italic inline-flex items-center gap-2">
            <span>{currentCategoryObj.heading}</span>
          </h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Creation' : 'Creations'}
          </p>
        </div>

        {/* Filtered Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {/* Note on static authentic catalogue */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-lg mx-auto bg-white/60 p-4 rounded-xl border border-cream-300">
          <p>
            Looking for customized weights or bespoke bridal orders? Contact our team on WhatsApp for dedicated guidance.
          </p>
        </div>

      </div>
    </section>
  );
}
