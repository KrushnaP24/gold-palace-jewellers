import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedCollection({ onViewDetails, onOrderNow, onExploreAll }) {
  // Select featured products
  const featuredProducts = products.filter(p => p.featured);

  return (
    <section className="py-20 lg:py-28 bg-cream-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-super-wide text-gold-600">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Curated Masterpieces</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-peacock-950">
            Featured Collection
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            A hand-selected preview of our signature bridal, festive, and everyday fine jewellery creations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {/* CTA to Explore Full Collection */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-peacock-950 hover:bg-peacock-900 text-gold-300 hover:text-gold-200 border border-gold-500/40 text-xs font-semibold tracking-super-wide uppercase transition-all duration-300 shadow-luxury hover:shadow-luxury-gold transform hover:-translate-y-0.5"
          >
            <span>Explore Full Collection</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
