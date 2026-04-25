import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const CareerJourney = () => {
  const { language } = useApp();
  
  const experiences = [
    {
      company: "PT Steradian Data Optima",
      position: "Software Quality Assurance Engineer",
      period: "Mei 2025 – Present",
      responsibilities: [
        "E2E, API, UI Testing (Ops Console)",
        "SIT & UAT validation",
        "Workflow Maker–Checker–Signer",
        "Log monitoring, job scheduler, data mapping"
      ]
    },
    {
      company: "PT NTT Indonesia Technology",
      position: "Software Quality Assurance",
      period: "Feb 2024 – Jan 2025",
      responsibilities: [
        "iOS, Android, Web functional testing",
        "Production Issue Coordinator",
        "Inspect Element automation project",
        "Full testing lifecycle"
      ]
    },
    {
      company: "PT Sumber Trijaya Lestari",
      position: "Product Operation",
      period: "Feb 2020 – Feb 2021",
      responsibilities: [
        "Manual & regression testing",
        "Payment flow migration (Midtrans → Dynamic QR)",
        "UI testing from Figma & Marvelapp"
      ]
    }
  ];

  return (
    <div className="relative space-y-4 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-[linear-gradient(180deg,var(--accent),var(--accent-pink),transparent)]">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.08 }}
          className="relative ml-7 rounded-[0.8rem] border border-[var(--border-soft)] bg-black/45 p-4"
        >
          <div className="absolute left-[-1.9rem] top-5 h-4 w-4 rounded-full border border-[var(--accent)] bg-black shadow-[0_0_16px_rgba(0,255,240,0.45)]" />
          <div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow-label mb-3">{language === 'id' ? 'Perjalanan karir' : 'Career milestone'}</p>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  {exp.position}
                </h3>
                <p className="mt-2 text-base font-medium text-[var(--accent)]">{exp.company}</p>
              </div>
              <span className="chip-button w-fit">
                {exp.period}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {exp.responsibilities.map((resp) => (
                <span key={resp} className="rounded-[999px] border border-[var(--border-soft)] bg-black/35 px-4 py-2 text-sm text-[var(--text-secondary)]">
                  {resp}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CareerJourney;
