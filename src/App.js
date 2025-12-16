import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from './components/AccordionItem';
import Hero from './components/Hero';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionSections = [
    { title: "Portfolio", component: <Hero /> },
    { title: "About Me", component: <About /> },
    { title: "Career Journey", component: <CareerJourney /> },
    { title: "My Solo Projects", component: <Projects /> },
    { title: "Expertise", component: <Expertise /> },
    { title: "Academic Background", component: <Education /> },
    { title: "Get in Touch", component: <Contact /> },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container-custom py-4 flex items-center justify-between">
          <span className="text-accent font-display font-bold text-lg">Yudi.</span>
          <span className="text-gray-500 text-sm font-mono">QA Engineer</span>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container-custom pt-20 pb-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-white/10"
        >
          {accordionSections.map((section, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={section.title}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              {section.component}
            </AccordionItem>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container-custom text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Muhamad Syifa Wahyudi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;