'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: 'TechCorp Global',
      industry: 'Corporate Office',
      partnershipDuration: '3 years',
      rating: 5,
      quote:
        "Since installing Epic Amenities vending machines across our 4 office locations, we've seen a remarkable 42% reduction in coffee break times and a 35% increase in employee satisfaction scores. The AI-powered inventory system predicted our snack preferences with 94% accuracy within just 6 weeks. The real-time analytics dashboard has been invaluable for our facilities team - we haven't had a single stockout in 8 months. The transition from our old provider was seamless, completed over a weekend with zero disruption.",
      author: 'Michael Chen',
      position: 'VP of Operations',
      photo: '👨‍💼',
      metrics: ['42% faster breaks', '35% satisfaction boost', '8 months no stockouts'],
    },
    {
      company: 'FitLife Gym & Wellness',
      industry: 'Fitness Center',
      partnershipDuration: '18 months',
      rating: 4,
      quote:
        "Our members absolutely love the protein shake and healthy snack selection. We installed 3 machines in January 2024, and by March we were seeing 850+ transactions weekly. The nutritional information display is fantastic for our health-conscious clientele. One small hiccup during the first month when the cooling system needed calibration, but Epic's 24/7 support team had a technician on-site within 4 hours. The mobile app integration with our membership system was more complex than anticipated - took about 3 weeks instead of the promised 2 - but now it works flawlessly.",
      author: 'Sarah Martinez',
      position: 'Owner & General Manager',
      photo: '👩‍💼',
      metrics: ['850+ weekly transactions', '4-hour service response', '3 locations'],
    },
    {
      company: 'State University Campus Services',
      industry: 'Educational Institution',
      partnershipDuration: '2 years',
      rating: 5,
      quote:
        "Managing vending for 15,000 students across a 200-acre campus was a logistical nightmare until we partnered with Epic Amenities. We deployed 28 machines strategically around campus in August 2023. The student ID integration was brilliant - now students can use their meal plans or campus cards. We've processed over 2.4 million transactions with a 99.7% success rate. The variety of healthy options has helped us meet our campus wellness initiatives. Revenue is up 67% compared to our previous vendor, and we've reduced our operational overhead by 30% thanks to their remote monitoring.",
      author: 'Dr. Robert Williams',
      position: 'Director of Campus Services',
      photo: '👨‍🏫',
      metrics: ['2.4M transactions', '67% revenue increase', '28 machines'],
    },
    {
      company: 'Grand Plaza Hotel',
      industry: 'Hospitality',
      partnershipDuration: '14 months',
      rating: 4,
      quote:
        "We replaced our traditional minibars with Epic's smart vending solution on floors 2-15, and it's transformed our guest experience. The machines operate whisper-quiet (essential for a hotel!), and the automatic room charge feature integrates perfectly with our Opera PMS system. Guest feedback has been overwhelmingly positive - 4.6/5 stars on average. We're seeing $18,000 monthly revenue from what used to be a break-even minibar operation. The only drawback is the machines are slightly larger than ideal for our hallway alcoves, but the performance makes up for it. Planning to add 6 more units in our conference center next quarter.",
      author: 'Jennifer Park',
      position: 'Hotel General Manager',
      photo: '👩‍💼',
      metrics: ['$18k monthly revenue', '4.6/5 guest rating', '15 floors coverage'],
    },
    {
      company: 'Metropolitan Transit Authority',
      industry: 'Transportation Hub',
      partnershipDuration: '4 years',
      rating: 5,
      quote:
        "Epic Amenities has been servicing our main terminal and 3 satellite stations since 2021. These machines handle an incredible volume - over 45,000 transactions monthly across all locations. The vandal-resistant design has proven itself; we've had zero major security incidents. The multilingual interface supports 8 languages, crucial for our international travelers. During our busiest holiday season last December, uptime was 99.4% even with triple normal traffic. The cashless payment processing is lightning fast - average transaction time under 20 seconds. They've truly set a new standard for transit vending.",
      author: 'James Patterson',
      position: 'Facilities Director',
      photo: '👨‍✈️',
      metrics: ['45k monthly transactions', '99.4% uptime', '4 locations'],
    },
    {
      company: 'Valley Medical Center',
      industry: 'Healthcare',
      partnershipDuration: '2.5 years',
      rating: 4,
      quote:
        "Healthcare environments demand the highest standards, and Epic delivers. We have 12 machines distributed across our main hospital, outpatient center, and staff areas. The touchless payment options became essential during the pandemic and remain popular now. The fresh food vending capability lets us offer salads and sandwiches that actually stay fresh - the temperature monitoring sends alerts if anything goes outside safe ranges. Installation in our sterile environment required extra coordination and took 3 days longer than planned, but their team worked closely with our infection control staff. Staff satisfaction surveys show 89% approval rating.",
      author: 'Dr. Lisa Anderson',
      position: 'Chief Administrative Officer',
      photo: '👩‍⚕️',
      metrics: ['12 machines', '89% staff approval', 'Touchless payments'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-2xl ${i < rating ? 'text-orange-500' : 'text-gray-600'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
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
            <span className="text-white">Real </span>
            <span className="text-gradient-orange">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our partners about their experiences and measurable results
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{testimonials[activeIndex].photo}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {testimonials[activeIndex].company}
                        </h3>
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      <p className="text-blue-400 font-semibold">
                        {testimonials[activeIndex].industry}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Partnership: {testimonials[activeIndex].partnershipDuration}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-bold text-white">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[activeIndex].position}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-4 bg-blue-500/10">
                    <p className="text-sm text-gray-400 mb-2">Key Metrics</p>
                    {testimonials[activeIndex].metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 mb-2 last:mb-0"
                      >
                        <span className="text-orange-500">▸</span>
                        <span className="text-white font-semibold text-sm">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="glass-effect rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-2">Industry</p>
                    <p className="text-white font-semibold">
                      {testimonials[activeIndex].industry}
                    </p>
                  </div>

                  <div className="glass-effect rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-2">Since</p>
                    <p className="text-white font-semibold">
                      {testimonials[activeIndex].partnershipDuration}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 cursor-hover ${
                  index === activeIndex
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-3 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gradient-orange mb-2">
                500+
              </div>
              <p className="text-gray-400">Active Locations</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                99.8%
              </div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gradient-orange mb-2">
                5M+
              </div>
              <p className="text-gray-400">Annual Transactions</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                4.8/5
              </div>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
