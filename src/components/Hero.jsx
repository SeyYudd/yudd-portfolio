import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import ImageWithLoader from './ImageWithLoader';

const Hero = () => {
  const { t, theme } = useApp();
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1 
          variants={itemVariants}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold ${textColor} mb-4 leading-tight`}
        >
          {t('heroTitle')} <span className="text-accent">Yudd</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-accent font-medium mb-4"
        >
          {t('heroRole')}
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className={`${textMuted} text-base md:text-lg leading-relaxed`}
        >
          {t('heroQuote')}
        </motion.p>
      </div>

      {/* Profile Image */}
      <motion.div 
        variants={itemVariants}
        className="flex-shrink-0"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-accent/30 bg-dark-700">
          <ImageWithLoader 
            src={`${process.env.PUBLIC_URL}/assets/svg/my-photo.svg`}
            alt="Yudd - QA Engineer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;