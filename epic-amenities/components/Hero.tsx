'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import Particles from './Particles';

const VendingMachine3D = dynamic(() => import('./VendingMachine3D'), {
  ssr: false,
});

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: 'power3.out' }
      );
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">Smart Vending</span>
              <br />
              <span className="text-white">Solutions for</span>
              <br />
              <span className="text-gradient-orange">Modern Business</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            >
              Transform your workplace with cutting-edge vending technology.
              AI-powered inventory management, cashless payments, and 24/7
              accessibility.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Started Today
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-orange">
                  500+
                </div>
                <div className="text-sm text-gray-400 mt-1">Locations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  99.8%
                </div>
                <div className="text-sm text-gray-400 mt-1">Uptime</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-orange">
                  24/7
                </div>
                <div className="text-sm text-gray-400 mt-1">Support</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative h-full">
              <VendingMachine3D autoRotate={true} enableControls={true} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-hover"
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
