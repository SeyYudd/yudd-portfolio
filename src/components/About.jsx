import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const About = () => {
  const { t, theme } = useApp();
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.p 
        variants={itemVariants}
        className={`${textColor} text-base md:text-lg leading-relaxed`}
      >
        {t('aboutText').split(/(Jira|Postman|Kibana|DBeaver|UAT|SIT)/).map((part, index) => {
          if (['Jira', 'Postman', 'Kibana', 'DBeaver'].includes(part)) {
            return <span key={index} className="text-accent font-medium">{part}</span>;
          }
          if (['UAT', 'SIT'].includes(part)) {
            return <span key={index} className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>{part}</span>;
          }
          return part;
        })}
      </motion.p>
    </motion.div>
  );
};

export default About;