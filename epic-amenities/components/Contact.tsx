'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  locations: string;
  message: string;
};

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    reset();

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
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
            <span className="text-white">Get </span>
            <span className="text-gradient-orange">Started Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your space with Epic Amenities. Fill out the form below
            and our team will contact you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-3xl p-8 md:p-10">
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">1-800-EPIC-VEND</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 8am-8pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">sales@epicamenities.com</p>
                    <p className="text-gray-400 text-sm">24-hour response time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                    <p className="text-gray-300">
                      500 Innovation Drive
                      <br />
                      Tech Valley, CA 94025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">24/7 Support</h4>
                    <p className="text-gray-300">Emergency hotline available</p>
                    <p className="text-gray-400 text-sm">support@epicamenities.com</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-semibold text-white mb-4">Why Choose Epic?</h4>
                <ul className="space-y-3">
                  {[
                    'Free consultation and site assessment',
                    'Custom solution design',
                    'Installation within 2 weeks',
                    'Comprehensive training included',
                    '24/7 technical support',
                    'Flexible financing options',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-effect rounded-3xl p-8 md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="form-input"
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="form-input"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      {...register('company')}
                      className="form-input"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-white font-semibold mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    {...register('industry', { required: 'Industry is required' })}
                    className="form-input"
                  >
                    <option value="">Select your industry</option>
                    <option value="corporate">Corporate Office</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="fitness">Fitness Center</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="transportation">Transportation</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && (
                    <p className="text-red-400 text-sm mt-1">{errors.industry.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="locations" className="block text-white font-semibold mb-2">
                    Number of Locations
                  </label>
                  <select
                    id="locations"
                    {...register('locations')}
                    className="form-input"
                  >
                    <option value="">Select number of locations</option>
                    <option value="1">1 location</option>
                    <option value="2-5">2-5 locations</option>
                    <option value="6-10">6-10 locations</option>
                    <option value="11-25">11-25 locations</option>
                    <option value="26+">26+ locations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="form-input min-h-[120px] resize-y"
                    placeholder="Tell us about your vending needs..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                  disabled={submitStatus === 'success'}
                >
                  {submitStatus === 'success' ? '✓ Sent Successfully!' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-effect bg-green-500/20 border-green-500/50 rounded-lg p-4 text-center"
                  >
                    <p className="text-green-400 font-semibold">
                      Thank you! We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Prefer to Schedule a Call?
            </h3>
            <p className="text-gray-300 mb-6">
              Book a 30-minute consultation with our vending solutions expert
            </p>
            <button className="glass-effect px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
