import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useApp();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full border border-white/20 hover:border-accent transition-colors duration-200 flex items-center gap-2"
      aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <span className="text-sm font-medium">
        {language === 'id' ? '🇮🇩' : '🇬🇧'}
      </span>
      <span className="text-xs font-mono text-gray-400 hover:text-accent transition-colors">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
