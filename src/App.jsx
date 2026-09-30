import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import FeaturedCollection from './components/FeaturedCollection';
import Collection from './components/Collection';
import WhyChooseUs from './components/WhyChooseUs';
import OurLegacy from './components/OurLegacy';
import StoreSection from './components/StoreSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductModal from './components/ProductModal';
import Checkout from './components/Checkout';
import { brand } from './data/brand';

export default function App() {
  // Modal & Checkout State
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState(null);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // General WhatsApp click handler
  const handleGeneralWhatsApp = () => {
    const generalMessage = "Hello, I would like to know more about your jewellery collection.";
    const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(generalMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Scroll to collection
  const handleExploreCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // View Details Click
  const handleViewDetails = (product) => {
    setSelectedProductForModal(product);
  };

  // Order Now Click (From Card or from Modal)
  const handleOrderNow = (product, quantity = 1) => {
    setSelectedProductForModal(null); // close product modal if open
    setSelectedProductForCheckout(product);
    setCheckoutQuantity(quantity);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-slate-800 flex flex-col font-sans selection:bg-gold-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenGeneralWhatsApp={handleGeneralWhatsApp} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Real Model Photograph */}
        <Hero 
          onExploreClick={handleExploreCollection}
          onWhatsAppClick={handleGeneralWhatsApp}
        />

        {/* 2. Brand Introduction */}
        <BrandIntro />

        {/* 3. Featured Collection Showcase */}
        <FeaturedCollection 
          onViewDetails={handleViewDetails}
          onOrderNow={handleOrderNow}
          onExploreAll={handleExploreCollection}
        />

        {/* 4. Complete Product Collection with Category Tabs */}
        <Collection 
          onViewDetails={handleViewDetails}
          onOrderNow={handleOrderNow}
        />

        {/* 5. Why Choose Us (4 verified pillars) */}
        <WhyChooseUs onWhatsAppClick={handleGeneralWhatsApp} />

        {/* 6. A Legacy Since 1951 (Split layout with Real Storefront) */}
        <OurLegacy />

        {/* 7. Discover Online. Experience In Store & Visit Our Store */}
        <StoreSection onWhatsAppClick={handleGeneralWhatsApp} />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Final Call to Action */}
        <FinalCTA 
          onExploreClick={handleExploreCollection}
          onWhatsAppClick={handleGeneralWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer onWhatsAppClick={handleGeneralWhatsApp} />

      {/* Floating Bottom-Right WhatsApp Button */}
      <WhatsAppButton onClick={handleGeneralWhatsApp} />

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProductForModal}
        isOpen={!!selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onOrderNow={handleOrderNow}
      />

      {/* Express Checkout Modal / Flow */}
      <Checkout 
        product={selectedProductForCheckout}
        initialQuantity={checkoutQuantity}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onContinueShopping={() => setIsCheckoutOpen(false)}
        onExploreCollection={() => {
          setIsCheckoutOpen(false);
          handleExploreCollection();
        }}
      />
    </div>
  );
}
