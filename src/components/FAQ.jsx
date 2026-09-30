import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How can I place an order?",
      a: "Select a product, click Order Now, enter your details and confirm through WhatsApp."
    },
    {
      q: "Do I need to create an account?",
      a: "No. The website does not require registration or login."
    },
    {
      q: "How can I check product availability?",
      a: "The jewellery team will confirm availability through WhatsApp."
    },
    {
      q: "Can I visit the store?",
      a: "Yes. The store is located near Sudama Talkies, Dharampeth, Nagpur, 440010."
    },
    {
      q: "Can I ask about a product before ordering?",
      a: "Yes. Customers can contact the jewellery team through WhatsApp."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-50 text-slate-900 border-t border-cream-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-super-wide text-peacock-700">
            <HelpCircle className="w-3.5 h-3.5 text-gold-500" />
            <span>Common Queries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-peacock-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 font-sans">
            Clear, transparent answers regarding our collections, showroom visits, and ordering process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-cream-300 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-peacock-950 font-normal">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-peacock-900 text-gold-300' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans border-t border-cream-200 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
