import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Zap, Layers, BarChart } from 'lucide-react';

const Banners = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: "Smart Scheduling",
      description: "Organize tasks with intelligent due dates and reminders that adapt to your work style."
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared tasks, comments, and real-time updates."
    },
    {
      icon: <Zap size={24} />,
      title: "Automation",
      description: "Save time with automated workflows and recurring tasks that handle repetitive work."
    },
    {
      icon: <Layers size={24} />,
      title: "Custom Templates",
      description: "Create and save templates for projects and tasks you frequently use."
    },
    {
      icon: <Clock size={24} />,
      title: "Time Tracking",
      description: "Monitor how long tasks take and improve your productivity and estimation skills."
    },
    {
      icon: <BarChart size={24} />,
      title: "Progress Analytics",
      description: "Get insights into your productivity patterns with visual reports and statistics."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Productive Teams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to stay organized, focused, and accomplish more in less time.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-indigo-600 rounded-2xl p-8 shadow-xl text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to boost your productivity?</h3>
              <p className="text-indigo-100">Start managing your tasks more efficiently today.</p>
            </div>
            <motion.button 
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try for Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banners;