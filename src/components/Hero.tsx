// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Manage Tasks with{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Ease</span> &{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Efficiency</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              Stay organized, meet deadlines, and achieve your goals with our intuitive task management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Started <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700 shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Watch Demo
              </motion.button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              {[
                'Easy to use',
                'Collaborative',
                'Custom workflows',
              ].map((text, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative max-w-lg mx-auto md:mx-0">
              {/* Background Decorations */}
              <motion.div
                className="absolute -top-8 -left-8 bg-indigo-500 w-20 h-20 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 bg-purple-500 w-28 h-28 rounded-full opacity-20"
                animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              />
              {/* Image */}
              <img
                src="https://www.manageengine.com/products/service-desk/images/banner-main-object.png"
                alt="Task Management Dashboard"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;