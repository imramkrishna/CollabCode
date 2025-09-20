'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';

const LandingPage = () => {
  return (
    <motion.main 
      className="min-h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Additional Sections */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Whether you're a startup moving fast or an enterprise scaling up, 
              CollabCode adapts to your team's unique workflow and requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Startups",
                  description: "Move fast and iterate quickly with real-time collaboration features.",
                  stats: "2-10 developers",
                },
                {
                  title: "Scale-ups",
                  description: "Grow your team seamlessly with advanced project management tools.",
                  stats: "10-100 developers",
                },
                {
                  title: "Enterprise",
                  description: "Enterprise-grade security and compliance for large organizations.",
                  stats: "100+ developers",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="text-sm text-purple-400 font-medium">{item.stats}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  description: "Perfect for individuals and small projects",
                  features: ["Up to 3 collaborators", "5 projects", "Basic support"],
                  cta: "Start Free",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$12",
                  period: "per user/month",
                  description: "For growing teams and serious projects",
                  features: ["Unlimited collaborators", "Unlimited projects", "Priority support", "Advanced features"],
                  cta: "Start Trial",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "contact us",
                  description: "For large organizations with specific needs",
                  features: ["Custom integrations", "SSO & compliance", "Dedicated support", "SLA guarantee"],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-gray-700/50'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border-2 border-gray-600 text-white hover:border-gray-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to get{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of developers who are already building better software together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl text-lg shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Today
              </motion.button>
              <motion.button
                className="px-10 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl text-lg hover:border-gray-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Sales
              </motion.button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
};

export default LandingPage;
