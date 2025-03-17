import React, { useState } from 'react';
import { 
  BarChart, 
  CheckCircle, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Plus, 
  Users, 
  MoreVertical,
  ArrowUp,
  ArrowDown,
  Star,
  Filter,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sample data for charts
const productivityData = [
  { name: 'Mon', completed: 5, pending: 2 },
  { name: 'Tue', completed: 7, pending: 3 },
  { name: 'Wed', completed: 4, pending: 6 },
  { name: 'Thu', completed: 8, pending: 1 },
  { name: 'Fri', completed: 6, pending: 2 },
  { name: 'Sat', completed: 3, pending: 1 },
  { name: 'Sun', completed: 2, pending: 0 }
];

const projectData = [
  { name: 'Website Redesign', value: 35 },
  { name: 'App Development', value: 25 },
  { name: 'Marketing', value: 20 },
  { name: 'Research', value: 15 },
  { name: 'Other', value: 5 }
];

const COLORS = ['#4f46e5', '#7c3aed', '#2563eb', '#d946ef', '#8b5cf6'];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // For task filtering
  const [filter, setFilter] = useState('all');
  
  // Sample tasks
  const tasks = [
    { id: 1, title: 'Finalize dashboard design', status: 'in-progress', priority: 'high', dueDate: '2025-03-20', assignee: 'Alex Thompson' },
    { id: 2, title: 'Create user documentation', status: 'pending', priority: 'medium', dueDate: '2025-03-25', assignee: 'Morgan Lee' },
    { id: 3, title: 'Deploy new features', status: 'in-progress', priority: 'high', dueDate: '2025-03-19', assignee: 'Jamie Wilson' },
    { id: 4, title: 'QA testing', status: 'completed', priority: 'medium', dueDate: '2025-03-15', assignee: 'Sam Rodriguez' },
    { id: 5, title: 'Client meeting preparation', status: 'pending', priority: 'low', dueDate: '2025-03-22', assignee: 'Taylor Kim' }
  ];
  
  // Filter tasks based on selected filter
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === filter);
  
  // Task status count for KPIs
  const taskCounts = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <motion.button 
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center shadow-sm hover:shadow transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter size={16} className="mr-2" />
              View Reports
            </motion.button>
            <motion.button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center shadow-sm hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus size={16} className="mr-2" />
              New Task
            </motion.button>
          </div>
        </div>
        
        {/* Dashboard Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-t-lg border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8 px-4">
            {['overview', 'projects', 'tasks', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tasks</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{taskCounts.total}</h3>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                <BarChart className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 flex items-center">
                <ArrowUp size={14} className="mr-1" />
                12%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{taskCounts.completed}</h3>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 flex items-center">
                <ArrowUp size={14} className="mr-1" />
                8%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{taskCounts.inProgress}</h3>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Clock className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-yellow-500 flex items-center">
                <ArrowUp size={14} className="mr-1" />
                5%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{taskCounts.pending}</h3>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <Calendar className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-red-500 flex items-center">
                <ArrowDown size={14} className="mr-1" />
                3%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </motion.div>
        </div>
        
        {/* Charts and Tasks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Productivity Chart */}
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Weekly Productivity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productivityData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: '0.375rem',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="pending" stroke="#EC4899" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          
          {/* Project Distribution */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Project Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Allocation']}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: '0.375rem',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        
        {/* Tasks