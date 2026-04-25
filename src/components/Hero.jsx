import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Bug, Github, Linkedin, Mail, ScanSearch } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ImageWithLoader from './ImageWithLoader';

const Hero = ({ clock }) => {
  const { language } = useApp();

  const highlights = ['Playwright Specialist', 'Appium Master', 'Bug Hunter'];

  const notes = language === 'id'
    ? [
        { icon: Bug, text: 'Memburu bug sebelum sempat lolos ke production.' },
        { icon: ScanSearch, text: 'Menyisir UI, API, log, dan data dengan mode investigasi penuh.' },
        { icon: BadgeCheck, text: 'Mendorong automation yang rapi, bouncy, dan repeatable.' },
      ]
    : [
        { icon: Bug, text: 'Hunting bugs before they ever make it to production.' },
        { icon: ScanSearch, text: 'Sweeping UI, APIs, logs, and data in full investigation mode.' },
        { icon: BadgeCheck, text: 'Building automation that feels clean, bouncy, and repeatable.' },
      ];

  const socials = [
    { label: 'GitHub', value: '@SeyYudd', href: 'https://github.com/SeyYudd', icon: Github },
    { label: 'LinkedIn', value: 'muhamad-syifa-wahyudi', href: 'https://linkedin.com/in/muhamad-syifa-wahyudi', icon: Linkedin },
    { label: 'Email', value: 'muhammadsyifaw98@gmail.com', href: 'mailto:muhammadsyifaw98@gmail.com', icon: Mail },
  ];

  return (
    <div className="grid gap-4 pt-8 lg:grid-cols-2 lg:auto-rows-[minmax(260px,auto)]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, type: 'spring', stiffness: 140 }}
        className="bento-card neon-frame row-span-2 min-h-[34rem]"
      >
        <div className="relative z-10 flex h-full flex-col justify-between gap-6">
          <div>
            <p className="eyebrow-label">Avatar Cell</p>
            <p className="kanji-label mt-2 text-xs">品質忍者</p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute inset-0 rounded-[1rem] bg-[var(--accent-pink)]/12 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1rem] border border-[var(--border-soft)] bg-black/80 p-4">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(transparent_0,rgba(255,255,255,0.08)_50%,transparent_100%)] [background-size:100%_6px]" />
              <div className="absolute inset-y-0 left-[18%] w-[2px] bg-[var(--accent)]/60 blur-[1px]" />
              <div className="absolute inset-y-0 right-[16%] w-[2px] bg-[var(--accent-pink)]/50 blur-[1px]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(0,255,240,0.12),rgba(255,0,122,0.1))]">
                <ImageWithLoader
                  src={`${process.env.PUBLIC_URL}/assets/svg/my-photo.svg`}
                  alt="Yudi cyber avatar"
                  className="h-full w-full object-cover mix-blend-screen"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.5))]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">QA Automation Shinobi</p>
                  <p className="mt-2 text-xl font-semibold text-white">Yudi.exe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {notes.map((note) => (
              <div key={note.text} className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/30 p-3">
                <note.icon size={17} className="text-[var(--accent-lime)]" />
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.45, type: 'spring', stiffness: 140 }}
        className="bento-card neon-frame min-h-[16.5rem]"
      >
        <div className="relative z-10">
          <p className="eyebrow-label">Title Cell</p>
          <p className="kanji-label mt-2 text-xs">サイバー品質</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="chip-button">
                {item}
              </span>
            ))}
          </div>
          <h1 className="headline-display glitch-text mt-6 text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.05] text-[var(--text-primary)]" data-text="QA SHINOBI">
            QA Engineer
          </h1>
          <h2 className="mt-3 font-script text-3xl tracking-[0.22em] text-[var(--accent-pink)] sm:text-4xl">
            MUHAMAD SYIFA WAHYUDI
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            {language === 'id'
              ? 'Playwright specialist, Appium master, dan bug hunter yang membangun quality signal dari UI sampai API.'
              : 'Playwright specialist, Appium master, and bug hunter building quality signal from UI to API.'}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45, type: 'spring', stiffness: 140 }}
        className="bento-card neon-frame min-h-[16.5rem]"
      >
        <div className="relative z-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow-label">Social Cell</p>
            <p className="kanji-label mt-2 text-xs">リンク通信</p>
            <div className="mt-5 space-y-3">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-3 rounded-[0.8rem] border border-[var(--border-soft)] bg-black/30 px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                  <item.icon size={16} className="text-[var(--accent)]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[0.8rem] border border-[var(--border-soft)] bg-black/40 p-4">
            <p className="eyebrow-label">Status Cell</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--accent-lime)] shadow-[0_0_16px_rgba(173,255,0,0.8)]" />
              <span className="text-sm font-semibold tracking-[0.18em] text-[var(--text-primary)]">STATUS: ONLINE</span>
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-[0.14em] text-[var(--accent)]">{clock}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Asia/Jakarta</p>
            <div className="mt-8 rounded-[0.8rem] border border-dashed border-[var(--border-strong)] p-4 text-sm leading-7 text-[var(--text-secondary)]">
              {language === 'id'
                ? 'Boot sequence aktif. Monitoring test execution, UI fidelity, dan API contract.'
                : 'Boot sequence active. Monitoring test execution, UI fidelity, and API contract.'}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;