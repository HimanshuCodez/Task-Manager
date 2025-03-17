// src/pages/Dashboard.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Shadcn Input
import {
  CheckCircle2,
  Plus,
  Trash2,
  BarChart2,
  Clock,
  Zap,
} from 'lucide-react';

// Dummy task data (replace with real data later)
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Finish project proposal', completed: false },
    { id: 2, title: 'Review team feedback', completed: true },
    { id: 3, title: 'Plan sprint meeting', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Add task handler
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task handler
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Progress calculation
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 text-center">
              Your Productivity <span className="text-orange-400">Dashboard</span>
            </h1>
            <p className="mt-2 text-lg text-indigo-600 text-center">
              Stay on top of your tasks with ease.
            </p>
          </motion.div>

          {/* Quick Add Task */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow border-indigo-200 focus:ring-orange-400"
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <Button
              onClick={addTask}
              className="bg-orange-400 text-indigo-900 hover:bg-orange-300 rounded-full flex items-center gap-2 px-6"
            >
              <Plus size={20} />
              Add
            </Button>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Task List */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                <Clock size={24} className="text-orange-400" />
                Tasks
              </h2>
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {tasks.map((task) => (
                  <motion.li
                    key={task.id}
                    className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="focus:outline-none"
                      >
                        <CheckCircle2
                          size={20}
                          className={`${
                            task.completed
                              ? 'text-orange-400'
                              : 'text-gray-400'
                          } hover:text-orange-300 transition-colors`}
                        />
                      </button>
                      <span
                        className={`${
                          task.completed
                            ? 'line-through text-gray-500'
                            : 'text-indigo-900'
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-opacity"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </motion.li>
                ))}
                {tasks.length === 0 && (
                  <p className="text-gray-500 text-center">No tasks yet—add one!</p>
                )}
              </ul>
            </motion.div>

            {/* Progress Overview */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                <BarChart2 size={24} className="text-orange-400" />
                Progress
              </h2>
              <div className="space-y-6 text-center">
                <motion.div
                  className="relative w-32 h-32 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeDasharray={`${progress}, 100`}
                      initial={{ strokeDasharray: '0, 100' }}
                      animate={{ strokeDasharray: `${progress}, 100` }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-900">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </motion.div>
                <p className="text-indigo-600">
                  {completedTasks} of {tasks.length} tasks completed
                </p>
                <Button
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-100 rounded-full flex items-center gap-2"
                >
                  <Zap size={18} />
                  Boost Now
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;