import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, ShieldCheck, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { brand } from '../data/brand';

export default function ProductModal({ product, isOpen, onClose, onOrderNow }) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when modal opens for a new product
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen, product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const displayPrice = product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Price on Request';

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleProceedToOrder = () => {
    onClose();
    onOrderNow(product, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-peacock-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-gold-500/30 flex flex-col md:flex-row max-h-[92vh] z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-peacock-950/70 hover:bg-peacock-950 text-cream-100 hover:text-gold-400 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="md:w-1/2 bg-peacock-950/5 relative flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-cream-200">
          <div className="relative w-full h-full flex items-center justify-center max-h-[380px] md:max-h-[480px]">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-h-[360px] md:max-h-[460px] w-auto max-w-full object-contain rounded-xl shadow-md"
            />
            {product.tag && (
              <span className="absolute top-2 left-2 px-3 py-1 rounded-full bg-gold-500 text-peacock-950 text-xs font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {product.tag}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Product Details & Order Configuration */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-4">
            
            {/* Category & Material Badges */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-peacock-700 font-semibold bg-peacock-50 px-2.5 py-1 rounded border border-peacock-200">
                {product.category}
              </span>
              {product.material && (
                <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold bg-gold-50 px-2.5 py-1 rounded border border-gold-200">
                  {product.material}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h2 className="font-serif text-2xl sm:text-3xl text-peacock-950 leading-tight">
              {product.name}
            </h2>

            {/* Price Display */}
            <div className="py-2 border-y border-cream-300 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block">Pricing</span>
                <span className="font-serif text-2xl font-bold text-peacock-900">
                  {displayPrice}
                </span>
              </div>
              <span className="text-xs text-peacock-700 bg-peacock-50 px-3 py-1.5 rounded-full border border-peacock-200">
                Verified Authentic
              </span>
            </div>

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Craftsmanship Description
              </h4>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="pt-2">
              <label className="text-xs uppercase tracking-wider text-slate-600 font-semibold block mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    onClick={handleDecrement}
                    className="p-2 hover:bg-slate-200 text-slate-700 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-2 hover:bg-slate-200 text-slate-700 transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  {quantity > 1 ? `${quantity} pieces` : '1 piece'}
                </span>
              </div>
            </div>

            {/* Trust Assurance highlights */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Serving since 1951</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-peacock-600 flex-shrink-0" />
                <span>Dharampeth, Nagpur</span>
              </div>
            </div>

          </div>

          {/* Action CTA Button */}
          <div className="pt-6 mt-4 border-t border-cream-200">
            <button
              onClick={handleProceedToOrder}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-peacock-900 via-peacock-850 to-peacock-900 hover:from-peacock-800 hover:to-peacock-850 text-gold-300 hover:text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-peacock-950/20 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 border border-gold-500/30"
            >
              <ShoppingBag className="w-4 h-4 text-gold-400" />
              <span>Order Now ({quantity})</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Opens our quick checkout, then connects directly to our WhatsApp team.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
