'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const features = sectionRef.current.querySelectorAll('.feature-card');

      features.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Inventory',
      description:
        'Smart predictive analytics automatically track stock levels and predict restocking needs before items run out.',
    },
    {
      icon: '💳',
      title: 'Cashless Payments',
      description:
        'Accept credit cards, mobile payments, Apple Pay, Google Pay, and cryptocurrency for ultimate convenience.',
    },
    {
      icon: '🌡️',
      title: 'Temperature Control',
      description:
        'Advanced climate control systems keep beverages ice-cold and food items at perfect temperatures.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description:
        'Comprehensive dashboards provide instant insights into sales, inventory, and customer preferences.',
    },
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description:
        'Bank-level encryption and PCI compliance ensure every transaction is safe and protected.',
    },
    {
      icon: '🌐',
      title: 'Remote Management',
      description:
        'Control and monitor your vending machines from anywhere using our cloud-based platform.',
    },
    {
      icon: '♿',
      title: 'ADA Compliant',
      description:
        'Accessible design with voice guidance, Braille labels, and adjustable height interfaces.',
    },
    {
      icon: '⚡',
      title: 'Energy Efficient',
      description:
        'LED lighting and smart power management reduce energy consumption by up to 40%.',
    },
    {
      icon: '📱',
      title: 'Mobile App Integration',
      description:
        'Customers can browse products, place orders, and earn rewards through our mobile app.',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Cutting-Edge</span> Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of vending with technology that sets new
            industry standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-hover"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>

              <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gradient-orange">
              Industry-Leading Technology
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Our vending machines are equipped with the latest IoT sensors,
              machine learning algorithms, and cloud connectivity to deliver
              unmatched performance and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="glass-effect px-6 py-2 rounded-full text-sm">
                IoT Enabled
              </span>
              <span className="glass-effect px-6 py-2 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="glass-effect px-6 py-2 rounded-full text-sm">
                Cloud Connected
              </span>
              <span className="glass-effect px-6 py-2 rounded-full text-sm">
                5G Ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
