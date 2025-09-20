'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <motion.main 
      className="relative min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Global background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Additional Sections */}
      <section 
        id="about" 
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900/20 to-black overflow-hidden"
        role="region"
        aria-labelledby="about-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 
                id="about-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                Built for{' '}
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                  Modern Teams
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Whether you're a startup moving fast or an enterprise scaling up, 
                CollabCode adapts to your team's unique workflow and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mt-16 lg:mt-20">
              {[
                {
                  title: "Startups",
                  description: "Move fast and iterate quickly with real-time collaboration features.",
                  stats: "2-10 developers",
                  icon: "🚀",
                },
                {
                  title: "Scale-ups",
                  description: "Grow your team seamlessly with advanced project management tools.",
                  stats: "10-100 developers",
                  icon: "📈",
                },
                {
                  title: "Enterprise",
                  description: "Enterprise-grade security and compliance for large organizations.",
                  stats: "100+ developers",
                  icon: "🏢",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)" 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl" />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl lg:text-3xl" role="img" aria-hidden="true">
                        {item.icon}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-teal-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
                      <span className="text-xs lg:text-sm text-teal-400 font-medium">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section 
        id="pricing" 
        className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
        role="region"
        aria-labelledby="pricing-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 
                id="pricing-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                Simple{' '}
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Start free and scale as you grow. No hidden fees, no surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mt-16 lg:mt-20">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  description: "Perfect for individuals and small projects",
                  features: ["Up to 3 collaborators", "5 projects", "Basic support"],
                  cta: "Start Free",
                  popular: false,
                  icon: "🆓",
                },
                {
                  name: "Pro",
                  price: "$12",
                  period: "per user/month",
                  description: "For growing teams and serious projects",
                  features: ["Unlimited collaborators", "Unlimited projects", "Priority support", "Advanced features"],
                  cta: "Start Trial",
                  popular: true,
                  icon: "⭐",
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "contact us",
                  description: "For large organizations with specific needs",
                  features: ["Custom integrations", "SSO & compliance", "Dedicated support", "SLA guarantee"],
                  cta: "Contact Sales",
                  popular: false,
                  icon: "🏢",
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border transition-all duration-500 ${
                    plan.popular 
                      ? 'border-teal-500/50 bg-gradient-to-br from-teal-500/10 to-gray-900/60 scale-105 lg:scale-110' 
                      : 'border-gray-700/50 hover:border-teal-500/50'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: plan.popular ? -4 : -8,
                    scale: plan.popular ? 1.02 : 1.05,
                    boxShadow: plan.popular 
                      ? "0 25px 50px rgba(20, 184, 166, 0.2)" 
                      : "0 20px 40px rgba(20, 184, 166, 0.1)"
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl" />
                  
                  <div className="relative">
                    <div className="text-center mb-8 space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-2xl lg:text-3xl" role="img" aria-hidden="true">
                          {plan.icon}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white">
                          {plan.name}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                            {plan.price}
                          </span>
                          <span className="text-gray-400 ml-2 text-sm lg:text-base">
                            /{plan.period}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xs mx-auto">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 lg:space-y-4 mb-8" role="list">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300">
                          <svg 
                            className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm lg:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      className={`w-full py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl font-medium text-base lg:text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black ${
                        plan.popular
                          ? 'bg-gradient-to-r from-teal-600 to-teal-400 text-black hover:from-teal-700 hover:to-teal-500 shadow-lg hover:shadow-2xl'
                          : 'border-2 border-gray-600 text-white hover:border-teal-500 hover:bg-teal-500/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Choose ${plan.name} plan`}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900/20 to-black overflow-hidden"
        role="region"
        aria-labelledby="contact-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h2 
                id="contact-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                Ready to get{' '}
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                  started?
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join thousands of developers who are already building better software together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch sm:items-center pt-8">
              <motion.button
                className="group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-teal-600 to-teal-400 text-black font-semibold rounded-xl lg:rounded-2xl text-base lg:text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 min-w-[200px]"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(20, 184, 166, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Start using CollabCode for free"
              >
                <span className="relative z-10">Start Free Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-500 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                className="group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-5 border-2 border-gray-600 text-white font-semibold rounded-xl lg:rounded-2xl text-base lg:text-lg hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact sales team"
              >
                <span className="relative z-10">Talk to Sales</span>
              </motion.button>
            </div>
            
            <div className="pt-12 lg:pt-16">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  { text: "No credit card required", icon: "💳" },
                  { text: "14-day free trial", icon: "🎯" },
                  { text: "Cancel anytime", icon: "✨" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-400 group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-200" role="img" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="text-sm lg:text-base font-medium text-center sm:text-left group-hover:text-teal-300 transition-colors duration-200">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
