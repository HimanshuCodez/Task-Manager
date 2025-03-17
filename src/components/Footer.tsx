import React from 'react';
import { CheckSquare, Github, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                <CheckSquare className="mr-2" size={24} />
                TaskFlow
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Simplify your workflow, manage tasks effectively, and boost team productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;