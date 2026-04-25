import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Bug, Compass, FolderKanban, GraduationCap, House, Mail, Sparkles } from 'lucide-react';
import { useApp } from './context/AppContext';
import Hero from './components/Hero';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import LanguageToggle from './components/LanguageToggle';
import LoadingError from './components/LoadingError';

const SectionShell = ({ id, index, title, subtitle, icon: Icon, summary, children, spanClass = 'lg:col-span-1' }) => (
  <section id={id} className={`section-shell scroll-mt-28 ${spanClass}`}>
    <div className="bento-card h-full">
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow-label">Node {index}</p>
            <p className="kanji-label mt-2 text-xs">{subtitle}</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-black/50 text-[var(--accent)]">
            <Icon size={18} />
          </div>
        </div>
        <h2 className="glitch-text headline-display text-2xl sm:text-3xl text-[var(--text-primary)]" data-text={title}>
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-tertiary)]">
          {summary}
        </p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  </section>
);

function App() {
  const [showContent, setShowContent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false, enabled: false });
  const [clock, setClock] = useState('00:00:00');
  const { t, language } = useApp();

  const sections = useMemo(() => ([
    {
      id: 'about',
      title: t('aboutMe'),
      subtitle: 'ソフトウェア QA',
      icon: Compass,
      summary: language === 'id'
        ? 'Mode terminal untuk menjelaskan pola pikir QA, observasi, dan cara saya memburu bug pada flow kritikal.'
        : 'A terminal-style node for how I think about QA, observation, and bug-hunting across critical flows.',
      component: <About />,
      spanClass: 'lg:col-span-2',
    },
    {
      id: 'expertise',
      title: t('expertise'),
      subtitle: '技能デッキ',
      icon: Sparkles,
      summary: language === 'id'
        ? 'Badge dan toolkit dengan fokus utama pada Playwright, Appium, API validation, serta automation support.'
        : 'Badges and toolkit with emphasis on Playwright, Appium, API validation, and automation support.',
      component: <Expertise />,
      spanClass: 'lg:col-span-3',
    },
    {
      id: 'projects',
      title: t('myProjects'),
      subtitle: '任務ログ',
      icon: FolderKanban,
      summary: language === 'id'
        ? 'Project cards dengan aura glitch untuk produk dan aplikasi yang pernah saya uji dan validasi.'
        : 'Glitch-styled mission cards for the products and applications I have tested and validated.',
      component: <Projects />,
      spanClass: 'lg:col-span-3',
    },
    {
      id: 'journey',
      title: t('careerJourney'),
      subtitle: '経歴ライン',
      icon: BriefcaseBusiness,
      summary: language === 'id'
        ? 'Timeline vertikal dengan circuit-line untuk milestone QA di retail, banking, dan operations platform.'
        : 'A vertical circuit-line timeline for QA milestones across retail, banking, and operations platforms.',
      component: <CareerJourney />,
      spanClass: 'lg:col-span-2',
    },
    {
      id: 'education',
      title: t('academicBackground'),
      subtitle: '学習ログ',
      icon: GraduationCap,
      summary: language === 'id'
        ? 'Support node untuk fondasi akademik dan learning path yang membentuk quality mindset saya.'
        : 'Support node for the academic grounding and learning path behind my quality mindset.',
      component: <Education />,
      spanClass: 'lg:col-span-1',
    },
    {
      id: 'contact',
      title: t('getInTouch'),
      subtitle: '通信リンク',
      icon: Mail,
      summary: language === 'id'
        ? 'Portal kontak untuk role QA automation, kolaborasi testing, dan quality engineering discussion.'
        : 'A contact portal for QA automation roles, testing collaboration, and quality engineering discussion.',
      component: <Contact />,
      spanClass: 'lg:col-span-2',
    },
  ]), [language, t]);

  const dockItems = useMemo(() => ([
    { id: 'hero', label: language === 'id' ? 'Base' : 'Base', icon: House },
    ...sections.map(({ id, title, icon }) => ({ id, label: title, icon })),
  ]), [language, sections]);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const handleLoadingError = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (!showContent) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-32% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.5],
      }
    );

    const nodes = ['hero', ...sections.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, [sections, showContent]);

  useEffect(() => {
    if (!showContent || !window.matchMedia('(pointer:fine)').matches) {
      setCursor((previous) => ({ ...previous, enabled: false }));
      return undefined;
    }

    const handleMove = (event) => {
      const isInteractive = Boolean(event.target.closest('a, button'));
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: isInteractive,
        enabled: true,
      });
    };

    const handleLeave = () => {
      setCursor((previous) => ({ ...previous, enabled: false }));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseout', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
    };
  }, [showContent]);

  useEffect(() => {
    if (!showContent) {
      return undefined;
    }

    const updateClock = () => {
      const formatter = new Intl.DateTimeFormat(language === 'id' ? 'id-ID' : 'en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      });

      setClock(formatter.format(new Date()));
    };

    updateClock();
    const intervalId = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(intervalId);
  }, [language, showContent]);

  if (hasError) {
    return <LoadingError />;
  }

  if (!showContent) {
    return <LoadingScreen onComplete={handleLoadingComplete} onError={handleLoadingError} />;
  }

  return (
    <div className="min-h-screen overflow-x-clip text-[var(--text-primary)] transition-colors duration-300">
      {cursor.enabled && (
        <>
          <motion.div
            animate={{
              x: cursor.x - 18,
              y: cursor.y - 18,
              scale: cursor.active ? 1.9 : 1,
              opacity: 1,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.28 }}
            className="pointer-events-none fixed left-0 top-0 z-[70] h-9 w-9 rounded-full border border-[var(--accent)]/65 bg-[var(--accent)]/10"
          />
          <motion.div
            animate={{ x: cursor.x - 4, y: cursor.y - 4, scale: cursor.active ? 0.6 : 1 }}
            transition={{ type: 'spring', stiffness: 520, damping: 28, mass: 0.2 }}
            className="pointer-events-none fixed left-0 top-0 z-[71] h-2 w-2 rounded-full bg-[var(--accent-pink)]"
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 right-0 top-0 z-40"
      >
        <div className="container-custom flex items-center justify-between py-5">
          <div className="glass-panel rounded-2xl px-4 py-3">
            <p className="eyebrow-label">Cyber-Anime QA</p>
            <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-[var(--text-primary)]">Muhamad Syifa Wahyudi</p>
          </div>
          <div className="glass-panel flex items-center gap-2 rounded-2xl px-2 py-2">
            <LanguageToggle />
          </div>
        </div>
      </motion.div>

      <main>
        <section id="hero" className="relative isolate min-h-screen scroll-mt-28 pt-28">
          <div className="pointer-events-none absolute left-[2%] top-[8rem] -z-10 h-52 w-52 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[6%] top-[10rem] -z-10 h-64 w-64 rounded-full bg-[var(--accent-pink)]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[18%] left-[32%] -z-10 h-48 w-48 rounded-full bg-[var(--accent-lime)]/10 blur-3xl" />
          <div className="container-custom pb-28">
            <Hero clock={clock} />
          </div>
        </section>

        <section className="container-custom pb-28 md:pb-36">
          <div className="grid gap-4 lg:grid-cols-5 lg:auto-rows-[minmax(220px,auto)]">
            {sections.map((section, index) => (
              <SectionShell
                key={section.id}
                id={section.id}
                index={`0${index + 1}`}
                title={section.title}
                subtitle={section.subtitle}
                icon={section.icon}
                summary={section.summary}
                spanClass={section.spanClass}
              >
                {section.component}
              </SectionShell>
            ))}
          </div>
        </section>
      </main>

      <section className="fixed inset-x-0 bottom-5 z-50 px-4">
        <div className="mx-auto max-w-fit">
          <div className="glass-panel overflow-x-auto rounded-[1.1rem] px-3 py-3 shadow-[0_0_20px_rgba(0,255,240,0.14)]">
            <nav className="flex min-w-max items-center gap-2">
              {dockItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`chip-button whitespace-nowrap ${activeSection === item.id ? 'active' : ''}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <item.icon size={15} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <footer className="pb-32">
        <div className="container-custom">
          <div className="bento-card rounded-[1rem] px-6 py-5">
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow-label">System Footer</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                  {language === 'id'
                    ? 'Interface ini dibuat seperti cyber-dock untuk menonjolkan skill Playwright, Appium, dan bug-hunting secara terstruktur.'
                    : 'This interface is built like a cyber-dock to highlight Playwright, Appium, and bug-hunting in a structured way.'}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-tertiary)]">
                <Bug size={16} className="text-[var(--accent-pink)]" />
                <span>{t('footerText')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
