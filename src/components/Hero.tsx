import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Manage tasks with <span className="text-indigo-600 dark:text-indigo-400">ease</span> and <span className="text-indigo-600 dark:text-indigo-400">efficiency</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay organized, meet deadlines, and achieve your goals with our intuitive task management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <ArrowRight className="ml-2" size={18} />
              </motion.button>
              <motion.button 
                className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-50 transition-colors dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Easy to use</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Collaborative</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Custom workflows</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 bg-indigo-500 w-16 h-16 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0] 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-purple-500 w-24 h-24 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0] 
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img 
                src="/api/placeholder/800/600" 
                alt="Task Management Dashboard" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;