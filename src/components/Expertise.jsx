import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Expertise = () => {
  const { t, theme } = useApp();

  const skillCategories = [
    {
      title: t('testingMethodologies'),
      skills: [
        "UAT",
        "SIT",
        "TVT / BVT",
        "Sanity Testing",
        "Smoke Testing",
        "Regression Testing",
        "Test Case Management (TCM)"
      ]
    },
    {
      title: t('qaTestingTools'),
      skills: [
        "AS400",
        "Redis",
        "Postman",
        "Jira",
        "DBeaver",
        "Kibana",
        "Mobax",
        "Appium",
        "Android Studio / Android Emulator",
        "Real Device Testing",
        "Figma"
      ]
    },
    {
      title: t('technicalSkills'),
      skills: [
        "API Testing",
        "End-to-End (E2E) Testing",
        "UI Testing",
        "Functional Testing",
        "Manual Testing",
        "Automation Testing",
        "Log Tracing & Analysis",
        "Debugging",
        "Data Validation",
        "CI/CD Basics",
        "Basic Scripting (Bash, Python)",
        "Dart (Flutter)",
        "Database Testing (MySQL, PostgreSQL)",
        "Data Visualization (Tableau, Power BI)"
      ]
    },
    {
      title: t('workflow'),
      skills: [
        "Agile / Scrum",
        "SDLC",
        "Waterfall",
        "Bug Reporting & Tracking",
        "Production Support",
        "Cross-team Collaboration"
      ]
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
                className={`px-4 py-2 border ${theme === 'dark' ? 'border-white/10 text-gray-300' : 'border-gray-200 text-gray-700'} rounded-full text-sm hover:border-accent hover:text-accent transition-colors duration-200 cursor-default`}
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
