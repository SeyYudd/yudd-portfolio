import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, ArrowRight, Github } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { language, t } = useApp();
  
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
      label: t('portfolioLink'),
      value: "https://www.behance.net/gallery/",
      href: "https://www.behance.net/gallery/222698041/Yudd-Portfolio/modules/1271366297"
    }
  ];

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-5"
      >
        <div>
          <p className="eyebrow-label">Open for collaboration</p>
          <h3 className="headline-display mt-5 text-4xl text-[var(--text-primary)] sm:text-5xl">
            {language === 'id' ? 'Mari bicara kualitas produk.' : 'Let’s talk product quality.'}
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
            {language === 'id'
              ? 'Saya terbuka untuk peran QA engineer, kolaborasi automation testing, atau diskusi tentang strategi quality assurance yang lebih rapi.'
              : 'I am open to QA engineer roles, automation testing collaboration, or discussions about cleaner quality assurance strategy.'}
          </p>
        </div>

        <motion.a
          href="mailto:muhammadsyifaw98@gmail.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="chip-button active mt-8 w-fit"
        >
          {t('letsConnect')}
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-3"
      >
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,122,0.12)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[0.8rem] bg-[var(--accent-soft)] text-[var(--accent)]">
              {contact.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--text-tertiary)]">{contact.label}</p>
              <p className="mt-2 truncate text-base font-semibold text-[var(--text-primary)]">
                {contact.value}
              </p>
            </div>
            <ArrowRight size={16} className="text-[var(--accent)]" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
