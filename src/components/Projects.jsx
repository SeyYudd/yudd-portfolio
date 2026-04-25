import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Projects = () => {
  const { language, t } = useApp();
  
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
    }
  ];

  const companyProjects = [
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
    {
      name: "Wondr by BNI",
      company: "PT NTT Indonesia Technology",
      tools: "Appium, Manual Testing, API Testing",
      platform: "Android, iOS, Web",
      description: "Super app digital banking BNI"
    },
    {
      name: "Ops Console by BRI",
      company: "PT Steradian Data Optima",
      tools: "E2E Testing, API Testing, UI Testing",
      platform: "Web",
      description: "Web Ops Console for maintain issue users banking system"
    }
  ];

  return (
    <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
      >
        <div className="mb-6 flex items-center gap-3">
          <Building2 size={18} className="text-[var(--accent)]" />
          <h3 className="eyebrow-label">
            {t('companyProject')}
          </h3>
        </div>

        <div className="grid gap-4">
          {companyProjects.map((project, index) => (
            <div key={project.name} className="group rounded-[0.9rem] border border-[var(--border-soft)] bg-black/35 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,255,240,0.12)]">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--text-tertiary)]">0{index + 1}</p>
                  <h4 className="glitch-text mt-2 text-xl font-semibold text-[var(--text-primary)]" data-text={project.name}>{project.name}</h4>
                  <p className="mt-2 text-sm text-[var(--accent)] group-hover:text-[var(--accent-pink)]">{project.company}</p>
                </div>
                <span className="chip-button">{project.platform}</span>
              </div>

              <p className="text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.split(', ').map((tool) => (
                  <span key={tool} className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold tracking-[0.08em] text-[var(--accent)]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <div className="mb-6 flex items-center gap-3">
            <User size={18} className="text-[var(--accent)]" />
            <h3 className="eyebrow-label">
            {t('soloProject')}
            </h3>
          </div>

          <div className="space-y-4">
            {soloProjects.map((project) => (
              <div key={project.name} className="rounded-[0.9rem] border border-[var(--border-soft)] bg-black/35 p-5">
                <p className="text-lg font-semibold text-[var(--text-primary)]">{project.name}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{project.tools}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {project.platform}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {t('viewApp')}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <p className="eyebrow-label">QA Lens</p>
          <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
            {language === 'id'
              ? 'Saya biasanya masuk ke proyek dengan fokus pada payment flow, API validation, UI consistency, hingga data mapping dan troubleshooting produksi.'
              : 'I usually step into projects with focus on payment flows, API validation, UI consistency, data mapping, and production troubleshooting.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;