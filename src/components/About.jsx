import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSearch, FlaskConical, Terminal, Ticket } from 'lucide-react';
import { useApp } from '../context/AppContext';

const About = () => {
  const { language, t } = useApp();

  const toolkit = [
    { icon: Ticket, label: 'Jira' },
    { icon: FlaskConical, label: 'Postman' },
    { icon: Database, label: 'DBeaver' },
    { icon: FileSearch, label: 'Kibana' },
  ];

  const principles = language === 'id'
    ? [
        'Menilai risk lebih dulu sebelum menulis coverage.',
        'Menjaga traceability dari requirement, API, hingga database.',
        'Menyusun bug report yang ringkas, jelas, dan dapat ditindaklanjuti.',
      ]
    : [
        'Prioritizing risk before writing coverage.',
        'Maintaining traceability from requirement to API and database.',
        'Writing concise bug reports that are immediately actionable.',
      ];

  return (
    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
      >
        <div className="mb-4 flex items-center gap-3">
          <Terminal size={16} className="text-[var(--accent)]" />
          <p className="eyebrow-label">Profile Terminal</p>
        </div>
        <div className="rounded-[0.8rem] border border-dashed border-[var(--border-strong)] bg-black/55 p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)]">$ cat qa-profile.log</p>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
            {t('aboutText').split(/(Jira|Postman|Kibana|DBeaver|UAT|SIT)/).map((part, index) => {
              if (['Jira', 'Postman', 'Kibana', 'DBeaver'].includes(part)) {
                return <span key={index} className="font-semibold text-[var(--accent)]">{part}</span>;
              }

              if (['UAT', 'SIT'].includes(part)) {
                return <span key={index} className="font-semibold text-[var(--accent-lime)]">{part}</span>;
              }

              return part;
            })}
          </p>
        </div>
      </motion.div>

      <div className="grid gap-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <p className="eyebrow-label">Toolkit</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {toolkit.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-[0.8rem] border border-[var(--border-soft)] bg-black/35 px-4 py-4">
                <item.icon size={18} className="text-[var(--accent-pink)]" />
                <span className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <p className="eyebrow-label">Bug Hunter Rules</p>
          <div className="mt-5 space-y-4">
            {principles.map((item) => (
              <div key={item} className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/35 px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;