import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bug, RotateCcw } from 'lucide-react';

const funnyMessages = {
  id: [
    'Severity: medium. Rendering pipeline terputus sebelum halaman selesai dimuat.',
    'Severity: low. UI tampaknya meminta retry untuk memulihkan state awal.',
    'Severity: high. Ada anomali pada proses loading yang perlu divalidasi ulang.',
  ],
  en: [
    'Severity: medium. The rendering pipeline stalled before the page finished loading.',
    'Severity: low. The UI likely needs a retry to restore its initial state.',
    'Severity: high. A loading anomaly interrupted the normal startup sequence.',
  ],
};

const LoadingError = () => {
  const lang = localStorage.getItem('portfolio-language') || 'id';
  
  const getRandomMessage = () => {
    const messages = funnyMessages[lang] || funnyMessages.id;
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const texts = {
    id: {
      title: 'Bug Report 404',
      subtitle: 'Halaman gagal memenuhi acceptance criteria saat proses loading.',
      refresh: 'Retest Build',
      tip: 'Checklist cepat: refresh halaman, cek koneksi, lalu jalankan ulang validasi.',
      summary: 'Observed behavior',
    },
    en: {
      title: 'Bug Report 404',
      subtitle: 'The page did not meet its acceptance criteria during startup.',
      refresh: 'Retest Build',
      tip: 'Quick checklist: refresh the page, verify connectivity, then rerun validation.',
      summary: 'Observed behavior',
    },
  };

  const t = texts[lang] || texts.id;
  const funnyMessage = getRandomMessage();

  return (
    <div className="min-h-screen flex items-center justify-center p-5 text-[var(--text-primary)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel w-full max-w-3xl rounded-[2.5rem] p-6 md:p-8"
      >
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6">
            <div className="flex items-center gap-3 text-[var(--accent)]">
              <AlertTriangle size={18} />
              <span className="text-xs uppercase tracking-[0.35em]">QA Incident</span>
            </div>
            <h1 className="headline-display mt-6 text-5xl text-[var(--text-primary)]">{t.title}</h1>
            <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">{t.subtitle}</p>
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{t.summary}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{funnyMessage}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-[var(--border-soft)] p-6">
            <div>
              <div className="flex items-center gap-3 text-[var(--text-tertiary)]">
                <Bug size={18} className="text-[var(--accent)]" />
                <span className="text-xs uppercase tracking-[0.35em]">Reproduction Notes</span>
              </div>
              <div className="mt-6 space-y-3">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="rounded-[1.25rem] border border-[var(--border-soft)] px-4 py-4 text-sm text-[var(--text-secondary)]">
                    {step}. {step === 1 ? 'Open portfolio shell' : step === 2 ? 'Observe interrupted loading sequence' : 'Retry after restoring initial conditions'}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRefresh}
                className="chip-button active"
              >
                <RotateCcw size={16} />
                {t.refresh}
              </motion.button>
              <p className="mt-5 text-sm leading-7 text-[var(--text-tertiary)]">{t.tip}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingError;
