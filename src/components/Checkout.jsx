import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, ArrowRight, CheckCircle2, MessageCircle, Shield, Edit3, AlertCircle } from 'lucide-react';
import { brand } from '../data/brand';

export default function Checkout({ 
  product, 
  initialQuantity = 1, 
  isOpen, 
  onClose, 
  onContinueShopping,
  onExploreCollection 
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [step, setStep] = useState('details'); // 'details' | 'review' | 'prepared'
  const [orderRef, setOrderRef] = useState('');
  
  // Customer Details Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
    note: ''
  });

  // Validation Errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setQuantity(initialQuantity || 1);
      setStep('details');
      setErrors({});
      // Generate standard reference e.g., JW-2026-482
      const randomNum = Math.floor(100 + Math.random() * 900);
      setOrderRef(`JW-2026-${randomNum}`);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialQuantity, product]);

  if (!isOpen || !product) return null;

  const priceLabel = product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Price on Request';
  const totalLabel = product.price 
    ? `₹${(product.price * quantity).toLocaleString('en-IN')}`
    : 'Price on Request';

  // Validation
  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errs.mobile = 'Please enter a valid mobile number.';
    }
    if (!formData.address.trim()) {
      errs.address = 'Please enter your delivery address.';
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextToReview = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('review');
    }
  };

  const handleConfirmOrder = () => {
    // Generate WhatsApp text matching specification:
    let message = `Hello, I would like to place an order.\n\n`;
    message += `Order Reference: ${orderRef}\n\n`;
    message += `Product: ${product.name}\n`;
    message += `Category: ${product.category.toUpperCase()}\n`;
    message += `Quantity: ${quantity}\n`;
    message += `Price: ${priceLabel}\n`;
    message += `Total: ${totalLabel}\n\n`;
    message += `Customer Details:\n\n`;
    message += `Name: ${formData.name.trim()}\n`;
    message += `Mobile: ${formData.mobile.trim()}\n`;
    message += `Address: ${formData.address.trim()}\n`;

    if (formData.email.trim()) {
      message += `\nEmail: ${formData.email.trim()}\n`;
    }

    if (formData.note.trim()) {
      message += `\nSpecial Note:\n${formData.note.trim()}\n`;
    }

    message += `\nPlease confirm availability and order details.\n\nThank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodedMessage}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Transition directly to the "Order Request Prepared" screen
    setStep('prepared');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-peacock-950/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          if (step !== 'prepared') onClose();
        }}
      />

      {/* Checkout Window: Full-screen on mobile, elegant modal on desktop */}
      <div className="relative bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gold-500/40 z-10 flex flex-col min-h-screen sm:min-h-0 sm:max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-peacock-950 px-6 py-4 border-b border-peacock-800 flex items-center justify-between text-cream-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif text-lg tracking-wide">
              {step === 'prepared' ? 'Order Request Status' : 'Express WhatsApp Checkout'}
            </h3>
          </div>
          {step !== 'prepared' && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-cream-200 hover:text-white hover:bg-peacock-900 transition"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">

          {/* STEP 1: CUSTOMER DETAILS & ORDER SUMMARY */}
          {step === 'details' && (
            <div>
              {/* Product mini summary card */}
              <div className="bg-cream-100 rounded-xl p-4 border border-cream-300 flex items-center gap-4 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-cream-300 flex-shrink-0"
                />
                <div className="flex-grow">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-peacock-700 bg-peacock-50 px-2 py-0.5 rounded border border-peacock-200">
                    {product.category}
                  </span>
                  <h4 className="font-serif text-base text-slate-900 font-medium line-clamp-1 mt-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-slate-600">Unit: <strong className="text-peacock-900 font-semibold">{priceLabel}</strong></span>
                    {/* Quantity controls right inside checkout */}
                    <div className="flex items-center border border-slate-300 rounded bg-white">
                      <button 
                        type="button" 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="px-2 py-0.5 hover:bg-slate-100 text-slate-700"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-semibold text-slate-800">{quantity}</span>
                      <button 
                        type="button" 
                        onClick={() => setQuantity(q => q + 1)}
                        className="px-2 py-0.5 hover:bg-slate-100 text-slate-700"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Details Form */}
              <form onSubmit={handleNextToReview} className="space-y-4">
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="font-serif text-lg text-peacock-950 font-medium">Customer Information</h4>
                  <p className="text-xs text-slate-500 font-sans">
                    No account needed. Just your basic delivery information for order preparation.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="e.g. 9823073797"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                      errors.mobile ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Delivery Address <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Flat No, Landmark, Area, City & Pincode"
                    className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                      errors.address ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Special Note (Optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Special Note / Customization Request <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Ring size, gold purity preference (18K/22K), gift packaging, etc."
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-peacock-900 hover:bg-peacock-800 text-gold-300 hover:text-white font-semibold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Review Order Summary</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: ORDER SUMMARY & CUSTOMER SUMMARY REVIEW */}
          {step === 'review' && (
            <div className="space-y-6">
              
              {/* Order Reference Badge */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-peacock-50 border border-peacock-200">
                <span className="text-xs font-sans text-peacock-800">Generated Reference:</span>
                <span className="font-mono font-bold text-sm text-peacock-950 bg-white px-2.5 py-0.5 rounded border border-peacock-300">
                  {orderRef}
                </span>
              </div>

              {/* Order Summary Box */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <h4 className="font-serif text-lg text-peacock-950 font-semibold border-b border-slate-200 pb-2">
                  Your Order
                </h4>

                <div className="flex items-center gap-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                  />
                  <div className="flex-grow">
                    <p className="font-serif font-medium text-slate-900 text-base">{product.name}</p>
                    <p className="text-xs text-slate-500">Category: <span className="uppercase">{product.category}</span></p>
                    <p className="text-xs text-slate-500">Quantity: <span className="font-semibold text-slate-800">{quantity}</span></p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Unit Price:</span>
                    <span>{priceLabel}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Quantity:</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between font-serif text-base font-bold text-peacock-950 pt-2 border-t border-slate-200">
                    <span>Estimated Total:</span>
                    <span className="text-peacock-900">{totalLabel}</span>
                  </div>
                  {priceLabel === 'Price on Request' && (
                    <p className="text-[11px] text-slate-500 italic">
                      * Final purity, weight verification & billing provided upon WhatsApp consultation.
                    </p>
                  )}
                </div>
              </div>

              {/* Customer Details Summary Box */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="font-serif text-lg text-peacock-950 font-semibold">
                    Customer Details
                  </h4>
                  <button
                    onClick={() => setStep('details')}
                    className="text-xs text-peacock-700 hover:text-peacock-900 font-semibold flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="text-xs space-y-1.5 text-slate-700">
                  <p><strong className="text-slate-900">Name:</strong> {formData.name}</p>
                  <p><strong className="text-slate-900">Mobile:</strong> {formData.mobile}</p>
                  <p><strong className="text-slate-900">Address:</strong> {formData.address}</p>
                  {formData.email && <p><strong className="text-slate-900">Email:</strong> {formData.email}</p>}
                  {formData.note && <p><strong className="text-slate-900">Special Note:</strong> {formData.note}</p>}
                </div>
              </div>

              {/* Confirm Order Button & Disclaimer */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleConfirmOrder}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-base tracking-wider uppercase shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-400/30"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200" />
                  <span>Confirm Order</span>
                </button>

                <p className="text-xs text-center text-slate-500 leading-relaxed px-4">
                  Your order details will be shared with our jewellery team on WhatsApp for confirmation.
                </p>
              </div>

            </div>
          )}

          {/* STEP 3: ORDER REQUEST PREPARED SCREEN */}
          {step === 'prepared' && (
            <div className="text-center py-6 px-2 space-y-6">
              
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif text-3xl text-peacock-950 font-normal">
                  Order Request Prepared
                </h3>
                <div className="inline-block mt-2 px-3 py-1 bg-peacock-900 text-gold-300 text-xs font-mono font-bold rounded border border-gold-500/30">
                  Order Reference: {orderRef}
                </div>
              </div>

              <div className="bg-cream-100 rounded-xl p-5 border border-cream-300 max-w-lg mx-auto text-left">
                <p className="text-slate-700 text-sm font-sans leading-relaxed">
                  Thank you! Your order request has been prepared and shared with our jewellery team on WhatsApp. Our team will contact you to confirm availability, delivery details and final payment information.
                </p>
                <div className="mt-3 pt-3 border-t border-cream-300 text-xs text-peacock-800 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Verified Store Heritage • Near Sudama Talkies, Dharampeth, Nagpur</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-4">
                <button
                  onClick={() => {
                    onClose();
                    onContinueShopping();
                  }}
                  className="py-3 px-5 rounded-xl border border-peacock-800 text-peacock-900 hover:bg-peacock-50 font-semibold text-xs tracking-wider uppercase transition"
                >
                  Continue Shopping
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onExploreCollection();
                  }}
                  className="py-3 px-5 rounded-xl bg-peacock-900 hover:bg-peacock-800 text-gold-300 font-semibold text-xs tracking-wider uppercase transition shadow-md"
                >
                  Explore Collection
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
