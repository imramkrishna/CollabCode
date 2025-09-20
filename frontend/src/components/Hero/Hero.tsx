'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Hero = () => {
  const codeExample = `// Real-time collaboration in action
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Your teammate is editing this function...
console.log(fibonacci(10));`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-300/10 rounded-full blur-3xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <motion.div
          className="text-center space-y-8 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.span
              className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <span role="img" aria-label="sparkles">✨</span> Real-time Collaboration Platform
            </motion.span>
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Code Together,
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-gray-300 bg-clip-text text-transparent">
                Build Faster
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Experience the future of collaborative development. Write, edit, and debug code 
              together in real-time with your team, anywhere in the world.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch sm:items-center px-4"
          >
            <motion.button
              className="px-8 py-4 lg:py-5 bg-gradient-to-r from-teal-600 to-teal-400 text-black font-semibold rounded-xl lg:rounded-2xl text-base lg:text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black min-w-[200px]"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Start coding with CollabCode now"
            ><Link href="/Editor">Start Coding Now</Link>
            </motion.button>
            <motion.button
              className="px-8 py-4 lg:py-5 border-2 border-gray-700 text-white font-semibold rounded-xl lg:rounded-2xl text-base lg:text-lg hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Watch CollabCode demo video"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Code editor mockup */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto px-4"
          >
            <motion.div
              className="bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              role="img"
              aria-label="Code editor interface showing collaborative coding in action"
            >
              {/* Terminal header */}
              <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-950/80 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" aria-hidden="true"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-medium">CollabCode Editor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="hidden sm:flex -space-x-1" aria-label="Active collaborators">
                    <div className="w-6 h-6 bg-teal-500 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">A</div>
                    <div className="w-6 h-6 bg-teal-400 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">B</div>
                    <div className="w-6 h-6 bg-teal-300 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">C</div>
                  </div>
                  <span className="text-teal-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-1 animate-pulse" aria-hidden="true"></span>
                    Live
                  </span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="p-4 sm:p-6 text-left">
                <pre className="text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
                
                {/* Typing indicator */}
                <motion.div
                  className="flex items-center mt-4 space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  aria-live="polite"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-teal-400 text-sm">Alex is typing...</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 px-4"
            role="region"
            aria-label="Platform statistics"
          >
            {[
              { number: "10k+", label: "Active Users", description: "Developers using our platform" },
              { number: "500+", label: "Projects Created", description: "Collaborative projects built" },
              { number: "99.9%", label: "Uptime", description: "Platform reliability" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                aria-label={`${stat.number} ${stat.description}`}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll down for more content"
        role="button"
        tabIndex={0}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center focus:outline-none focus:ring-2 focus:ring-teal-500">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;