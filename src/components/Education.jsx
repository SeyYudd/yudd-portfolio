import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Universitas Bina Nusantara",
      degree: "Computer Science S1",
      year: "2022"
    },
    {
      institution: "SMA Muhammadiyah 3 Tangerang",
      degree: "High School Diploma",
      year: "2017"
    }
  ];

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
      className="space-y-4"
    >
      {education.map((edu, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start gap-4 p-4 border border-white/10 rounded-lg hover:border-accent/30 transition-colors duration-200 group"
        >
          <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-200">
            <GraduationCap size={20} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-white font-medium">{edu.institution}</h3>
              <span className="text-sm text-gray-500 font-mono">{edu.year}</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">{edu.degree}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
