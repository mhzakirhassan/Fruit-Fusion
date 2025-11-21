import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { FloatingBackground } from './components/FloatingBackground';
import { Product, ViewState } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setView('PRODUCT_DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
      case 'SHOP':
        return (
          <Hero 
            onShopClick={() => {
                const shopSection = document.getElementById('shop-section');
                if(shopSection) shopSection.scrollIntoView({behavior: 'smooth'});
            }} 
            onProductSelect={handleProductSelect} 
          />
        );
      case 'PRODUCT_DETAIL':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setView('HOME')} 
          />
        ) : null;
      case 'CONTACT':
        return <Contact />;
      default:
        return (
           <Hero 
            onShopClick={() => setView('SHOP')} 
            onProductSelect={handleProductSelect} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-slate-900 relative selection:bg-black selection:text-white font-sans">
      <FloatingBackground />
      
      <Navbar setView={setView} currentView={currentView === 'PRODUCT_DETAIL' ? 'SHOP' : currentView} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {renderView()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 bg-white/50 backdrop-blur-sm py-6 text-center border-t border-gray-200/50 mt-12">
        <p className="text-gray-600 font-medium">© 2023 Fruit Fusion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
