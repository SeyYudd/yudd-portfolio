import React from 'react';
import { motion } from 'framer-motion';
import { AppWindowMac, Bot, SmartphoneCharging, Swords } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Expertise = () => {
  const { t } = useApp();

  const focusBadges = [
    { label: 'Playwright', icon: AppWindowMac, color: 'text-[var(--accent)]' },
    { label: 'Appium', icon: SmartphoneCharging, color: 'text-[var(--accent-pink)]' },
    { label: 'Bug Hunter', icon: Swords, color: 'text-[var(--accent-lime)]' },
    { label: 'Automation', icon: Bot, color: 'text-[var(--accent)]' },
  ];

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
      "Postman",
      "Jira",
      "DBeaver",
      "Kibana",
      "Redis",
      "Mobax",
      "Appium",
      "Android Studio",
      "AS400",
      "Figma",
      "Marvelapp"
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
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr_1fr]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {focusBadges.map((badge) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/40 p-4"
          >
            <badge.icon size={18} className={badge.color} />
            <p className="mt-3 font-display text-lg text-[var(--text-primary)]">{badge.label}</p>
            <p className="mt-2 text-sm text-[var(--text-tertiary)]">Skill-badge.</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
        {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <h3 className="eyebrow-label mb-5 glitch-text" data-text={category.title}>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                className="rounded-[999px] border border-[var(--border-soft)] bg-black/35 px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
