// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banners from './components/Banner';
import Footer from './components/Footer';


// Placeholder components for other routes
const Tasks = () => <div className="max-w-7xl mx-auto px-4 py-12">Tasks Page</div>;
const About = () => <div className="max-w-7xl mx-auto px-4 py-12">About Page</div>;

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banners />
              </>
            }
          />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;