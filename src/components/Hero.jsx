import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight"
        >
          Portfolio — <span className="text-accent">Yudi</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-accent font-medium mb-4"
        >
          Software Quality Assurance Engineer
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          "Ensuring quality, stability, and reliability across digital platforms."
        </motion.p>
      </div>

      {/* Profile Image */}
      <motion.div 
        variants={itemVariants}
        className="flex-shrink-0"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-accent/30 bg-dark-700">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/svg/my-photo.svg`}
            alt="Yudi - QA Engineer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;