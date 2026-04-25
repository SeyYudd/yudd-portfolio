import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from './context/AppContext';
import AccordionItem from './components/AccordionItem';
import Hero from './components/Hero';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import LoadingError from './components/LoadingError';

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t, theme } = useApp();

  const accordionSections = [
    { title: t('portfolio'), component: <Hero /> },
    { title: t('aboutMe'), component: <About /> },
    { title: t('careerJourney'), component: <CareerJourney /> },
    { title: t('myProjects'), component: <Projects /> },
    { title: t('expertise'), component: <Expertise /> },
    { title: t('academicBackground'), component: <Education /> },
    { title: t('getInTouch'), component: <Contact /> },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const handleLoadingError = () => {
    setHasError(true);
  };

  // Theme-based styles
  const themeStyles = {
    bg: theme === 'dark' ? 'bg-black' : 'bg-gray-50',
    headerBg: theme === 'dark' ? 'bg-black/80' : 'bg-white/80',
    borderColor: theme === 'dark' ? 'border-white/5' : 'border-gray-200',
    textMuted: theme === 'dark' ? 'text-gray-500' : 'text-gray-600',
    textFooter: theme === 'dark' ? 'text-gray-600' : 'text-gray-500',
  };

  if (hasError) {
    return <LoadingError />;
  }

  if (!showContent) {
    return <LoadingScreen onComplete={handleLoadingComplete} onError={handleLoadingError} />;
  }

  return (
    <div className={`min-h-screen ${themeStyles.bg} transition-colors duration-300`}>
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 ${themeStyles.headerBg} backdrop-blur-md border-b ${themeStyles.borderColor}`}
      >
        <div className="container-custom py-4 flex items-center justify-between">
          <span className="text-accent font-display font-bold text-lg">Yudd</span>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <span className={`${themeStyles.textMuted} text-sm font-mono hidden sm:block`}>{t('role')}</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container-custom pt-20 pb-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}
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
      <footer className={`border-t ${themeStyles.borderColor} py-8`}>
        <div className="container-custom text-center">
          <p className={`${themeStyles.textFooter} text-sm`}>
            {t('footerText')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;