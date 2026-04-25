import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Education = () => {
  const { language, t } = useApp();
  
  const education = [
    {
      institution: "Universitas Bina Nusantara",
      degree: t('computerScience'),
      year: "2022"
    },
    {
      institution: "SMA Muhammadiyah 3 Tangerang",
      degree: t('highSchoolDiploma'),
      year: "2017"
    }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: index * 0.08 }}
          className="bento-card"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <GraduationCap size={20} />
            </div>
            <span className="chip-button">{edu.year}</span>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">{edu.institution}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{edu.degree}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
            {language === 'id' ? 'Akademik' : 'Academic'}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
