import React from 'react';
import { motion } from 'framer-motion';

// Fun error messages
const funnyMessages = {
  id: [
    "Waduh! Kayaknya web ini lagi pengen liburan ke bulan 🌙",
    "Hmm... servernya lagi ngopi dulu kayaknya ☕",
    "Oops! Ada kucing lewat di keyboard programmer 🐱",
    "Web-nya lagi main petak umpet nih 🙈",
    "Tenang, ini bukan salah kamu... mungkin salah WiFi-nya 📶",
    "Kayaknya web-nya lagi healing dulu sebentar 🧘",
    "Sabar ya, web-nya lagi buffering ke awan ☁️",
  ],
  en: [
    "Oops! Looks like this website wants to visit the moon 🌙",
    "Hmm... the server is having a coffee break ☕",
    "Oops! A cat walked across the programmer's keyboard 🐱",
    "The website is playing hide and seek 🙈",
    "Don't worry, it's not your fault... maybe blame the WiFi 📶",
    "The website is taking a mental health break 🧘",
    "Hold on, the website is buffering to the clouds ☁️",
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
      title: "Waduh! Loadingnya kelamaan...",
      subtitle: "Kayaknya ada yang nggak beres nih 🤔",
      refresh: "Coba Lagi",
      tip: "Tips: Cek koneksi internet kamu ya!",
    },
    en: {
      title: "Oops! Loading took too long...",
      subtitle: "Something doesn't seem right 🤔",
      refresh: "Try Again",
      tip: "Tip: Check your internet connection!",
    },
  };

  const t = texts[lang] || texts.id;
  const funnyMessage = getRandomMessage();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        {/* Error Icon */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="text-8xl mb-6"
        >
          😵‍💫
        </motion.div>

        {/* Error Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-4">
          {t.subtitle}
        </p>

        {/* Funny Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-accent mb-8"
        >
          {funnyMessage}
        </motion.p>

        {/* Refresh Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="px-8 py-4 bg-accent text-black font-semibold rounded-full hover:bg-accent-light transition-colors"
        >
          {t.refresh}
        </motion.button>

        {/* Tip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-600 text-sm"
        >
          {t.tip}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingError;
