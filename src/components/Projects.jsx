import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Projects = () => {
  const { t, theme } = useApp();

  const soloProjects = [
    {
      name: "Ngobrolin",
      tools: "Dart (Flutter)",
      platform: "Android",
      link: "https://play.google.com/store/apps/details?id=com.ngobrol_seru"
    },
    {
      name: "Make Everything OK",
      tools: "Dart (Flutter)",
      platform: "Android",
      link: "https://play.google.com/store/apps/details?id=com.makeok.apps"
    },
    {
      name: "Design Logo Freelance",
      tools: "Figma",
      platform: "N/A",
    }
  ];

  const companyProjects = [
    {
      name: "Ops Console by BRI",
      company: "PT Steradian Data Optima",
      tools: "E2E Testing, API Testing, UI Testing, Log Monitoring, Kibana, DBeaver, Postman, Jira, Automation Testing (Playwright)",
      platform: "Web",
      description: "Web Ops Console for maintain issue users banking system"
    },
    {
      name: "Wondr by BNI",
      company: "PT NTT Indonesia Technology",
      tools: "Manual Testing, API Testing, Log Monitoring, Kibana, DBeaver, Automation Testing (Appium)",
      platform: "Android, iOS, Web",
      description: "Super app digital banking BNI"
    },
    {
      name: "Alfa Mikro",
      company: "PT Sumber Trijaya Lestari",
      tools: "Manual Testing, Figma, Marvelapp",
      platform: "Android",
      description: "Aplikasi micro-retail untuk Alfamart"
    },
    {
      name: "Alfacart",
      company: "PT Sumber Trijaya Lestari",
      tools: "Manual Testing, Regression Testing",
      platform: "Android, iOS, Web",
      description: "E-commerce platform Alfamart"
    },
    {
      name: "Alfagift",
      company: "PT Sumber Trijaya Lestari",
      tools: "Manual Testing, Payment Flow Testing",
      platform: "Android, iOS",
      description: "Loyalty & rewards app Alfamart"
    },
  ];

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
  const textLight = theme === 'dark' ? 'text-gray-500' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-gray-200';
  const dividerColor = theme === 'dark' ? 'divide-white/5' : 'divide-gray-100';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="space-y-10"
    >
      {/* Solo Projects Section */}
      <div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-4"
        >
          <User size={18} className="text-accent" />
          <h3 className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('soloProject')}
          </h3>
        </motion.div>

        {/* Table Header */}
        <motion.div
          variants={itemVariants}
          className={`hidden md:grid grid-cols-4 gap-4 pb-4 border-b ${borderColor} text-sm ${textLight} font-medium uppercase tracking-wider`}
        >
          <span>{t('application')}</span>
          <span>{t('toolsLanguage')}</span>
          <span>{t('platform')}</span>
          <span>{t('link')}</span>
        </motion.div>

        {/* Table Rows */}
        <div className={`divide-y ${dividerColor}`}>
          {soloProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 md:py-5 group"
            >
              <div className={`md:hidden text-xs ${textLight} uppercase`}>{t('application')}</div>
              <h4 className={`${textColor} font-medium group-hover:text-accent transition-colors duration-200`}>
                {project.name}
              </h4>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('toolsLanguage')}</div>
              <span className={textMuted}>{project.tools}</span>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('platform')}</div>
              <span className={textMuted}>{project.platform}</span>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('link')}</div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-200"
              >
                <span>{t('viewApp')}</span>
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Projects Section */}
      <div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-4"
        >
          <Building2 size={18} className="text-accent" />
          <h3 className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('companyProject')}
          </h3>
        </motion.div>

        {/* Table Header */}
        <motion.div
          variants={itemVariants}
          className={`hidden md:grid grid-cols-4 gap-4 pb-4 border-b ${borderColor} text-sm ${textLight} font-medium uppercase tracking-wider`}
        >
          <span>{t('application')}</span>
          <span>{t('company')}</span>
          <span>{t('toolsLanguage')}</span>
          <span>{t('platform')}</span>
        </motion.div>

        {/* Table Rows */}
        <div className={`divide-y ${dividerColor}`}>
          {companyProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 md:py-5 group"
            >
              <div className={`md:hidden text-xs ${textLight} uppercase`}>{t('application')}</div>
              <div>
                <h4 className={`${textColor} font-medium group-hover:text-accent transition-colors duration-200`}>
                  {project.name}
                </h4>
                <p className={`text-xs ${textMuted} mt-1`}>{project.description}</p>
              </div>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('company')}</div>
              <span className={`${textMuted} text-sm`}>{project.company}</span>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('toolsLanguage')}</div>
              <span className={`${textMuted} text-sm`}>{project.tools}</span>

              <div className={`md:hidden text-xs ${textLight} uppercase mt-3`}>{t('platform')}</div>
              <span className={`${textMuted} text-sm`}>{project.platform}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;