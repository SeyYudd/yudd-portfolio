import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "muhammadsyifaw98@gmail.com",
      href: "mailto:muhammadsyifaw98@gmail.com"
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/muhamad-syifa-wahyudi",
      href: "https://linkedin.com/in/muhamad-syifa-wahyudi"
    },
    {
      icon: <ExternalLink size={18} />,
      label: "Portfolio",
      value: "tr.ee/1G9x0Pq35S",
      href: "https://tr.ee/1G9x0Pq35S"
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
            className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-200 group"
          >
            <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-200">
              {contact.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">{contact.label}</p>
              <p className="text-white truncate group-hover:text-accent transition-colors duration-200">
                {contact.value}
              </p>
            </div>
            <ArrowRight size={16} className="text-gray-600 group-hover:text-accent transition-colors duration-200" />
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
          Let's Connect
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
