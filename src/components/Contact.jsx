import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, ArrowRight, Github } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { t, theme } = useApp();
  
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: t('email'),
      value: "muhammadsyifaw98@gmail.com",
      href: "mailto:muhammadsyifaw98@gmail.com"
    },
    {
      icon: <Linkedin size={18} />,
      label: t('linkedin'),
      value: "linkedin.com/in/muhamad-syifa-wahyudi",
      href: "https://linkedin.com/in/muhamad-syifa-wahyudi"
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/SeyYudd",
      href: "https://github.com/SeyYudd"
    },
    {
      icon: <ExternalLink size={18} />,
      label: t('Behance Portfolio'),
      value: "https://www.behance.net/gallery",
      href: "https://www.behance.net/gallery/222698041/Yudd-Portfolio/modules/1271366297"
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
      className="space-y-6"
    >
      {/* Contact Links */}
      <div className="space-y-3">
        {contactInfo.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className={`flex items-center gap-4 p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} rounded-lg hover:border-accent/30 ${theme === 'dark' ? 'hover:bg-white/[0.02]' : 'hover:bg-accent/5'} transition-all duration-200 group`}
          >
            <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-200">
              {contact.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{contact.label}</p>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate group-hover:text-accent transition-colors duration-200`}>
                {contact.value}
              </p>
            </div>
            <ArrowRight size={16} className={`${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-accent transition-colors duration-200`} />
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div variants={itemVariants} className="pt-4">
        <motion.a
          href="mailto:muhammadsyifaw98@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-accent text-black font-semibold rounded-full hover:bg-accent-light transition-colors duration-200"
        >
          {t('letsConnect')}
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
