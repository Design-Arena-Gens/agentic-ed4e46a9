'use client';

import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      industry: 'Corporate Offices',
      icon: '🏢',
      description:
        'Boost employee satisfaction and productivity with convenient access to snacks and beverages throughout the workday.',
      features: [
        'Customizable product selection',
        'Healthy options program',
        'Corporate account billing',
        'Employee wellness integration',
      ],
      stats: '85% employee satisfaction increase',
    },
    {
      industry: 'Healthcare Facilities',
      icon: '🏥',
      description:
        'Provide 24/7 access to nutritious meals and beverages for staff, patients, and visitors in hospital environments.',
      features: [
        'Nutritional information displays',
        'Fresh food vending',
        'Hygienic touchless options',
        'Dietary restriction filters',
      ],
      stats: '40% reduction in cafeteria lines',
    },
    {
      industry: 'Educational Institutions',
      icon: '🎓',
      description:
        'Keep students and faculty fueled with healthy snacks and beverages across campus locations.',
      features: [
        'Student ID integration',
        'Meal plan compatibility',
        'Nutritional education displays',
        'Age-appropriate selections',
      ],
      stats: '92% student approval rating',
    },
    {
      industry: 'Fitness Centers',
      icon: '💪',
      description:
        'Support fitness goals with protein shakes, healthy snacks, and hydration options for gym members.',
      features: [
        'High-protein options',
        'Sports nutrition focus',
        'Member rewards program',
        'Macro tracking integration',
      ],
      stats: '60% increase in member retention',
    },
    {
      industry: 'Transportation Hubs',
      icon: '✈️',
      description:
        'Serve travelers with quick, convenient refreshments at airports, train stations, and bus terminals.',
      features: [
        'Multilingual interface',
        'Currency conversion',
        'Express checkout',
        'Grab-and-go packaging',
      ],
      stats: '1M+ monthly transactions',
    },
    {
      industry: 'Hotels & Resorts',
      icon: '🏨',
      description:
        'Enhance guest experience with 24/7 access to snacks, beverages, and convenience items.',
      features: [
        'Room charge integration',
        'Concierge recommendations',
        'Local product showcases',
        'Minibar replacement',
      ],
      stats: '95% guest satisfaction score',
    },
  ];

  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
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
            <span className="text-gradient">Industry-Specific</span> Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored vending solutions designed for your unique business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-hover"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                {solution.industry}
              </h3>

              <p className="text-gray-300 mb-6">{solution.description}</p>

              <div className="space-y-3 mb-6">
                {solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="glass-effect rounded-lg p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <p className="text-sm text-gray-400 mb-1">Impact</p>
                <p className="font-semibold text-gradient-orange">
                  {solution.stats}
                </p>
              </div>

              <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
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
            <h3 className="text-3xl font-bold mb-4 text-gradient">
              Custom Solutions Available
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Don't see your industry? We create custom vending solutions for
              any business environment. Our team works with you to design the
              perfect setup.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Discuss Your Needs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
