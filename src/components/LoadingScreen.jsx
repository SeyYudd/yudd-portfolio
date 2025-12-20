import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

const LoadingScreen = ({ onComplete, onError }) => {
  const { t } = useApp();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const duration = 1000; // 1 second total
    const steps = 20;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps && !completedRef.current) {
        completedRef.current = true;
        clearInterval(progressInterval);
        
        // Small delay before hiding
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 300);
        }, 200);
      }
    }, stepDuration);

    // Timeout error after 3 seconds
    const errorTimeout = setTimeout(() => {
      if (!completedRef.current) {
        clearInterval(progressInterval);
        if (onError) {
          onError();
        }
      }
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(errorTimeout);
    };
  }, [onComplete, onError]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <span className="text-accent font-display font-bold text-4xl md:text-5xl">
              Yudi.
            </span>
          </motion.div>

          {/* Progress Container */}
          <div className="w-64 md:w-80">
            {/* Progress Bar */}
            <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>

            {/* Progress Text */}
            <div className="flex justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-sm"
              >
                {t('loadingText')}
              </motion.p>
              <span className="text-accent font-mono text-lg font-bold">
                {progress}%
              </span>
            </div>
          </div>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent/50 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
