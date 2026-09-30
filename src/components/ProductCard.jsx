import React from 'react';
import { Eye, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onOrderNow }) {
  const displayPrice = product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Price on Request';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-gold-400/80 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-peacock-950/5 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Category & Badge overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-peacock-950/80 backdrop-blur-sm text-gold-300 text-[11px] font-sans font-medium uppercase tracking-wider border border-gold-500/20">
            {product.category}
          </span>
          {product.tag && (
            <span className="px-2.5 py-1 rounded-full bg-gold-500 text-peacock-950 text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              {product.tag}
            </span>
          )}
        </div>

        {/* Quick action overlay on desktop hover */}
        <div className="absolute inset-0 bg-peacock-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button
            onClick={() => onViewDetails(product)}
            className="p-3 rounded-full bg-white text-peacock-950 hover:bg-gold-400 hover:text-peacock-950 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:outline-none"
            title="View Details"
            aria-label="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => onOrderNow(product)}
            className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:outline-none"
            title="Order Now on WhatsApp"
            aria-label="Order Now on WhatsApp"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Material info */}
          {product.material && (
            <p className="text-[11px] text-peacock-700 uppercase tracking-widest font-semibold mb-1">
              {product.material}
            </p>
          )}

          {/* Product Name */}
          <h3 className="font-serif text-lg text-slate-900 group-hover:text-peacock-800 transition-colors duration-200 line-clamp-1 font-medium">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 font-sans mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Primary Action Buttons */}
        <div className="pt-4 mt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Estimated Price</span>
            <span className="font-serif text-sm sm:text-base font-semibold text-peacock-900">
              {displayPrice}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 hover:border-peacock-700 text-slate-700 hover:text-peacock-800 text-xs font-semibold tracking-wider transition-colors duration-200 text-center flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-peacock-600" />
              <span>Details</span>
            </button>

            <button
              onClick={() => onOrderNow(product)}
              className="w-full py-2 px-3 rounded-lg bg-peacock-900 hover:bg-peacock-800 text-gold-300 hover:text-gold-200 text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
