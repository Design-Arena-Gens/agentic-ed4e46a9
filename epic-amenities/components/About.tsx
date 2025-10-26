'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const VendingMachine3D = dynamic(() => import('./VendingMachine3D'), {
  ssr: false,
});

export default function About() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Pioneering smart vending technology since 2015',
    },
    {
      icon: '🤝',
      title: 'Partnership Driven',
      description: 'Building lasting relationships with every client',
    },
    {
      icon: '🌟',
      title: 'Excellence Always',
      description: 'Committed to 99.8% uptime and premium service',
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Eco-friendly machines with 40% energy reduction',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Founded with vision to revolutionize vending' },
    { year: '2017', event: 'Launched AI-powered inventory management' },
    { year: '2019', event: 'Reached 100 locations milestone' },
    { year: '2021', event: 'Introduced cashless-only smart machines' },
    { year: '2023', event: 'Expanded to 500+ locations nationwide' },
    { year: '2025', event: 'Leading the industry with 5M+ annual transactions' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
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
            <span className="text-white">About </span>
            <span className="text-gradient">Epic Amenities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming the vending industry with cutting-edge technology and
            unwavering commitment to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient-orange">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Founded in 2015 by a team of tech entrepreneurs and vending
                industry veterans, Epic Amenities was born from a simple
                observation: traditional vending was stuck in the past.
              </p>
              <p>
                We envisioned a future where vending machines weren't just
                dispensers, but intelligent retail platforms powered by AI,
                IoT, and cloud technology. Today, we're proud to be the
                fastest-growing premium vending provider in North America.
              </p>
              <p>
                Our machines serve over 500 locations, processing 5 million
                transactions annually with industry-leading 99.8% uptime. But
                numbers don't tell the whole story - it's about the employee who
                gets their favorite snack at 3 AM, the student who pays with
                their campus card, and the gym member who tracks their protein
                intake seamlessly.
              </p>
              <p className="font-semibold text-white">
                We're not just selling vending machines. We're building the
                future of automated retail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative h-full glass-effect rounded-3xl overflow-hidden">
              <VendingMachine3D autoRotate={true} enableControls={false} />
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-hover"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient-orange">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="glass-effect rounded-xl p-6 bg-white/5 inline-block">
                      <div className="text-2xl font-bold text-gradient-orange mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Epic Amenities can transform your vending
            experience
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
