import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
  const skillCategories = [
    {
      title: "Testing Methodologies",
      skills: ["UAT", "SIT", "TVT/BVT", "Sanity", "Smoke", "Regression", "TCM"]
    },
    {
      title: "QA & Testing Tools",
      skills: ["Postman", "Jira", "DBeaver", "Kibana", "Redis", "Mobax", "Appium", "Android Studio"]
    },
    {
      title: "Technical Skills",
      skills: ["API Testing", "Debugging", "Log Tracing", "Data Validation"]
    },
    {
      title: "Workflow",
      skills: ["Agile Scrum", "Production Support"]
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
      className="space-y-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          <h3 className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(247, 209, 222, 0.15)' }}
                className="px-4 py-2 border border-white/10 text-gray-300 rounded-full text-sm hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Expertise;
