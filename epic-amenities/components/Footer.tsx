'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      'Beverage Machines',
      'Snack Machines',
      'Combo Machines',
      'Healthy Options',
      'Coffee Stations',
      'Custom Solutions',
    ],
    Solutions: [
      'Corporate Offices',
      'Healthcare',
      'Education',
      'Fitness Centers',
      'Hotels',
      'Transportation',
    ],
    Company: [
      'About Us',
      'Careers',
      'Press',
      'Partners',
      'Blog',
      'Contact',
    ],
    Support: [
      'Help Center',
      'Installation',
      'Maintenance',
      'Technical Support',
      'Training',
      'FAQ',
    ],
  };

  return (
    <footer className="relative bg-black/50 border-t border-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gradient mb-4">
                EPIC AMENITIES
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming the vending industry with cutting-edge smart
                technology and exceptional service. Your partner in automated
                retail excellence.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-hover"
                  aria-label="Facebook"
                >
                  <span>f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-hover"
                  aria-label="Twitter"
                >
                  <span>𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-hover"
                  aria-label="LinkedIn"
                >
                  <span>in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-hover"
                  aria-label="Instagram"
                >
                  <span>📷</span>
                </a>
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-hover"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Epic Amenities. All rights reserved.</p>
              <p className="mt-2">
                Built with cutting-edge technology to deliver world-class vending
                solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-hover"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-hover"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-hover"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-hover"
              >
                Accessibility
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
              <span className="text-green-500 text-xl">●</span>
              <span className="text-gray-300 text-sm">
                All systems operational - 99.8% uptime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
