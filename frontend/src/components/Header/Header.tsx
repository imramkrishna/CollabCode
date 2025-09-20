'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top of the page, clear active section
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if a navigation item is active
  const isActive = (href: string) => {
    const sectionName = href.replace('#', '');
    return activeSection === sectionName;
  };

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-950"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm" aria-hidden="true">CC</span>
            </div>
            <span className="text-white font-bold text-xl">CollabCode</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1 relative ${
                  isActive(item.href) 
                    ? 'text-teal-400' 
                    : 'text-gray-400 hover:text-teal-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="text-gray-400 hover:text-teal-300 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-3 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-teal-600 to-teal-400 text-black px-6 py-2 rounded-lg font-medium hover:from-teal-500 hover:to-teal-300 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-gray-400 hover:text-teal-300 focus:outline-none focus:text-teal-300 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-950">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black relative ${
                isActive(item.href)
                  ? 'text-teal-400 bg-gray-900/50'
                  : 'text-gray-400 hover:text-teal-300 hover:bg-gray-900'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 to-teal-400 rounded-r"
                  layoutId="activeMobileTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
          <div className="px-3 py-2 space-y-2">
            <motion.button
              className="block w-full text-left text-gray-400 hover:text-teal-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.4 }}
            >
              Sign In
            </motion.button>
            <motion.button
              className="block w-full bg-gradient-to-r from-teal-600 to-teal-400 text-black px-4 py-2 rounded-lg font-medium hover:from-teal-500 hover:to-teal-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.5 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
