'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span
              className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Real-time Collaboration Platform
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              Code Together,
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-gray-300 bg-clip-text text-transparent">
                Build Faster
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of collaborative development. Write, edit, and debug code 
              together in real-time with your team, anywhere in the world.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-400 text-black font-semibold rounded-xl text-lg shadow-2xl"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Coding Now
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-xl text-lg hover:border-teal-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Code editor mockup */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal header */}
              <div className="flex items-center px-6 py-4 bg-gray-950/80 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-medium">CollabCode Editor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-teal-500 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">A</div>
                    <div className="w-6 h-6 bg-teal-400 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">B</div>
                    <div className="w-6 h-6 bg-teal-300 rounded-full border-2 border-gray-950 flex items-center justify-center text-xs text-black font-medium">C</div>
                  </div>
                  <span className="text-teal-400 text-sm">● Live</span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="p-6 text-left">
                <pre className="text-sm text-gray-300 leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
                
                {/* Typing indicator */}
                <motion.div
                  className="flex items-center mt-4 space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-teal-400 text-sm">Alex is typing...</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: "10k+", label: "Active Users" },
              { number: "500+", label: "Projects Created" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;