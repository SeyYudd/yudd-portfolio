import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const CareerJourney = () => {
  const { theme } = useApp();

  const experiences = [
    {
      "company": "PT PKSS (Project: Bank BRI)",
      "position": "Software Quality Assurance Engineer",
      "period": "Mei 2026 – Present",
      "responsibilities": [
        "Implementing web automation testing using Playwright to enhance regression efficiency for Ops Console.",
        "Executing comprehensive E2E, API, and UI testing to ensure system scalability and reliability.",
        "Managing SIT & UAT validation for complex banking workflows (Maker–Checker–Signer).",
        "Optimizing log monitoring and job scheduling to maintain high availability of banking services."
      ]
    },
    {
      "company": "PT Steradian Data Optima (Project: Bank BRI)",
      "position": "Software Quality Assurance Engineer",
      "period": "Mei 2025 – Mei 2026",
      "responsibilities": [
        "Performed end-to-end functional testing for Ops Console integrated with core banking systems.",
        "Validated critical banking workflows, ensuring data mapping accuracy and compliance.",
        "Collaborated with developers for SIT and coordinated UAT with business stakeholders.",
        "Monitored server logs and job schedulers to identify and troubleshoot production issues."
      ]
    },
    {
      company: "PT NTT Indonesia Technology (Project: Bank BNI)",
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
    },
    {
      company: "Freelance",
      position: "Mobile App Developer & Logo Designer",
      period: "",
      responsibilities: [
        "Developed mobile applications using Flutter",
        "Designed logos and UI/UX for various clients"
      ]
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="space-y-6"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-200"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[7px]" />

          <div className="pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {exp.position}
                </h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-500 bg-white/5' : 'text-gray-600 bg-gray-100'} font-mono px-3 py-1 rounded-full w-fit`}>
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>
                  <span className="text-accent mt-1.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CareerJourney;
