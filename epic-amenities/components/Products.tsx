'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const VendingMachine3D = dynamic(() => import('./VendingMachine3D'), {
  ssr: false,
});

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'healthy', label: 'Healthy Options' },
    { id: 'combo', label: 'Combo Machines' },
  ];

  const products = [
    {
      id: 1,
      name: 'Epic Refresh Pro',
      category: 'beverages',
      capacity: '400 units',
      features: ['32 selections', 'Dual temperature zones', 'Smart cooling'],
      price: 'From $8,999',
      image: '🥤',
    },
    {
      id: 2,
      name: 'Snack Master Elite',
      category: 'snacks',
      capacity: '500 units',
      features: ['40 selections', 'Anti-theft system', 'LED lighting'],
      price: 'From $7,499',
      image: '🍿',
    },
    {
      id: 3,
      name: 'Wellness Station',
      category: 'healthy',
      capacity: '300 units',
      features: ['Nutritional display', 'Fresh food capable', 'Temperature monitoring'],
      price: 'From $9,999',
      image: '🥗',
    },
    {
      id: 4,
      name: 'Mega Combo XL',
      category: 'combo',
      capacity: '600 units',
      features: ['48 selections', 'Dual zones', 'Touchscreen interface'],
      price: 'From $12,999',
      image: '🍱',
    },
    {
      id: 5,
      name: 'Coffee Express',
      category: 'beverages',
      capacity: '200 units',
      features: ['Fresh brew system', 'Multiple flavors', 'Milk frother'],
      price: 'From $11,499',
      image: '☕',
    },
    {
      id: 6,
      name: 'Smart Snack Pro',
      category: 'snacks',
      capacity: '450 units',
      features: ['Cashless only', 'Mobile app sync', 'Real-time inventory'],
      price: 'From $8,299',
      image: '🍫',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Premium </span>
            <span className="text-gradient-orange">Product Line</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class vending machines engineered for performance and
            reliability
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-hover ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white glow-blue'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-hover"
                onClick={() => setSelectedProduct(product.id)}
              >
                <div className="text-8xl text-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gradient transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-4">{product.capacity}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient-orange">
                    {product.price}
                  </span>
                  <button className="glass-effect px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>

                <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gradient">
                  3D Product View
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white text-3xl"
                >
                  ×
                </button>
              </div>

              <div className="h-[500px] rounded-xl overflow-hidden mb-6">
                <VendingMachine3D autoRotate={false} enableControls={true} />
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Use your mouse to rotate and zoom the 3D model
                </p>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
