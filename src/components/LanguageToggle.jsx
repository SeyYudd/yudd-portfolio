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
      className="chip-button min-w-[74px] justify-center"
      aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <span className="text-xs font-semibold tracking-[0.32em]">
        {language === 'id' ? 'ID' : 'EN'}
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
        {language === 'id' ? 'Bahasa' : 'English'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
