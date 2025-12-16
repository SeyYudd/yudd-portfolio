import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    >
      <motion.p 
        variants={itemVariants}
        className="text-gray-300 text-base md:text-lg leading-relaxed"
      >
        Seorang profesional Pengujian Perangkat Lunak (QA) yang berorientasi pada pengujian manual dan automation (Appium) di berbagai platform (Android, iOS, Web). Berpengalaman menggunakan{' '}
        <span className="text-accent font-medium">Jira</span>,{' '}
        <span className="text-accent font-medium">Postman</span>,{' '}
        <span className="text-accent font-medium">Kibana</span>, dan{' '}
        <span className="text-accent font-medium">DBeaver</span>{' '}
        untuk memastikan kualitas dan stabilitas perangkat lunak. Terbiasa bekerja dengan metode{' '}
        <span className="text-white font-medium">UAT</span>,{' '}
        <span className="text-white font-medium">SIT</span>, serta berkolaborasi dengan Developer, Scrum Master, Product Owner, dan Architecture Design untuk memastikan kesesuaian produk dengan kebutuhan bisnis.
      </motion.p>
    </motion.div>
  );
};

export default About;