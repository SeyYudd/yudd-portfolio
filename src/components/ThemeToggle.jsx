import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="chip-button h-11 w-11 justify-center p-0"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon size={18} className="text-[var(--accent)]" />
        ) : (
          <Sun size={18} className="text-[var(--accent)]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
