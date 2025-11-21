import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const chartData = [
    { name: 'Calories', value: product.nutrition.calories },
    { name: 'Sugar (g)', value: product.nutrition.sugar },
    { name: 'Vit C (%)', value: product.nutrition.vitamins },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen pt-28 pb-12 px-4 container mx-auto flex items-center justify-center z-20 relative"
    >
      <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl p-8 md:p-12 max-w-6xl w-full border border-white/50">
        <button 
          onClick={onBack} 
          className="flex items-center text-gray-800 hover:text-black font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image/Can */}
          <div className="flex justify-center relative">
            <div className="relative z-10">
                <div className={`w-64 h-[32rem] rounded-3xl shadow-2xl overflow-hidden relative border border-gray-200/20 bg-white flex flex-col items-center transform rotate-3 transition-transform hover:rotate-0 duration-500`}>
                    {/* Can Top Rim */}
                    <div className="w-full h-6 bg-gray-300 border-b border-gray-400"></div>
                    {/* Label Area */}
                    <div className={`w-full h-full ${product.imageColor} flex flex-col items-center justify-center p-4 relative`}>
                        <div className="absolute top-0 left-4 w-6 h-full bg-white/20 blur-md"></div>
                        <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
                            <span className="text-4xl">🍇</span>
                        </div>
                        <h3 className="font-serif text-4xl font-bold text-white text-center leading-tight drop-shadow-md">
                            {product.shortName}
                        </h3>
                        <div className="mt-8 text-white text-xl font-bold border-2 border-white px-4 py-2 rounded-full">
                            100% Pure
                        </div>
                         {/* Splash effect simulation */}
                         <div className="absolute bottom-10 right-[-20px] text-6xl opacity-80">💦</div>
                         <div className="absolute top-20 left-[-10px] text-5xl opacity-80">🍃</div>
                    </div>
                    {/* Can Bottom Rim */}
                    <div className="w-full h-8 bg-gray-300 border-t border-gray-400 rounded-b-2xl"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-xl rounded-[100%]"></div>
            </div>
            
            {/* Background Decoration */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full ${product.imageColor} opacity-20 blur-3xl z-0`}></div>
          </div>

          {/* Right Side: Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                {product.name} - 250ml
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-xl">Nutritional Value</h3>
               <div className="h-48 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={chartData}>
                     <XAxis dataKey="name" stroke="#000" fontSize={12} tickLine={false} axisLine={false} />
                     <YAxis hide />
                     <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                     <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#ef4444' : index === 1 ? '#f59e0b' : '#22c55e'} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="flex items-center justify-between border-t border-b border-black/10 py-6">
              <div className="text-3xl font-bold font-serif">
                Rs. {product.price.toFixed(2)}
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-inner border border-gray-200">
                <button onClick={handleDecrement} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Minus size={20} />
                </button>
                <span className="mx-4 text-xl font-bold w-8 text-center">{quantity}</span>
                <button onClick={handleIncrement} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                 Buy Now
               </button>
               <button className="flex-1 bg-white border-2 border-black text-black text-xl font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all flex items-center justify-center">
                 <ShoppingCart className="mr-2" /> Add to Cart
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
