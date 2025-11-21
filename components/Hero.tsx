import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Product, ViewState } from '../types';

interface HeroProps {
  onShopClick: () => void;
  onProductSelect: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onProductSelect }) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden">
      
      {/* Huge Background Text */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/3 w-full text-center pointer-events-none z-0"
      >
        <h1 className="text-[12rem] sm:text-[20rem] font-black font-serif leading-none tracking-tighter text-black whitespace-nowrap select-none">
          FRESH
        </h1>
        <h1 className="text-[12rem] sm:text-[20rem] font-black font-serif leading-none tracking-tighter text-black whitespace-nowrap select-none">
          FRUITS
        </h1>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 drop-shadow-sm"
        >
          Experience a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">taste explosion</span>
        </motion.h2>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShopClick}
          className="bg-white text-black text-xl md:text-2xl font-bold py-4 px-12 rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0px_15px_25px_rgba(0,0,0,0.15)] transition-all mb-16 border-2 border-black"
        >
          Shop Now
        </motion.button>

        {/* Can Display */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1), type: "spring", stiffness: 100 }}
              whileHover={{ y: -20, scale: 1.1 }}
              className="relative group cursor-pointer"
              onClick={() => onProductSelect(product)}
            >
              {/* Fake Can CSS drawing */}
              <div className={`w-32 h-64 md:w-40 md:h-80 rounded-2xl shadow-2xl overflow-hidden relative border border-gray-200/20 bg-white flex flex-col items-center`}>
                {/* Can Top Rim */}
                <div className="w-full h-4 bg-gray-300 border-b border-gray-400"></div>
                
                {/* Label Area */}
                <div className={`w-full h-full ${product.imageColor} flex flex-col items-center justify-center p-2 relative`}>
                   {/* Sheen/Reflection */}
                   <div className="absolute top-0 left-2 w-3 h-full bg-white/20 blur-sm"></div>
                   <div className="absolute top-0 right-4 w-1 h-full bg-black/10 blur-sm"></div>

                   <div className="bg-white p-2 rounded-lg shadow-sm mb-4 transform -rotate-6">
                      <span className="text-2xl">🍇</span>
                   </div>
                   <h3 className="font-serif text-xl font-bold text-white text-center leading-tight drop-shadow-md transform rotate-0">
                     {product.shortName.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                   </h3>
                   <div className="mt-4 text-white/90 text-xs font-bold border border-white/50 px-2 py-1 rounded">
                     100% Pure
                   </div>
                </div>

                {/* Can Bottom Rim */}
                <div className="w-full h-6 bg-gray-300 border-t border-gray-400 rounded-b-xl"></div>
              </div>
              
              {/* Shadow underneath */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/30 blur-lg rounded-[100%] group-hover:w-20 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
