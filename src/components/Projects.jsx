import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
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
    >
      {/* Table Header */}
      <motion.div 
        variants={itemVariants}
        className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b border-white/10 text-sm text-gray-500 font-medium uppercase tracking-wider"
      >
        <span>Application</span>
        <span>Tools / Language</span>
        <span>Platform</span>
        <span>Link</span>
      </motion.div>

      {/* Table Rows */}
      <div className="divide-y divide-white/5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 md:py-5 group"
          >
            <div className="md:hidden text-xs text-gray-500 uppercase">Application</div>
            <h3 className="text-white font-medium group-hover:text-accent transition-colors duration-200">
              {project.name}
            </h3>
            
            <div className="md:hidden text-xs text-gray-500 uppercase mt-3">Tools / Language</div>
            <span className="text-gray-400">{project.tools}</span>
            
            <div className="md:hidden text-xs text-gray-500 uppercase mt-3">Platform</div>
            <span className="text-gray-400">{project.platform}</span>
            
            <div className="md:hidden text-xs text-gray-500 uppercase mt-3">Link</div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-200"
            >
              <span>View App</span>
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;