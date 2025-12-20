import React, { Component } from 'react';
import { motion } from 'framer-motion';

// Fun error messages
const funnyMessages = {
  id: [
    "Waduh! Kayaknya web ini lagi pengen liburan ke bulan 🌙",
    "Hmm... servernya lagi ngopi dulu kayaknya ☕",
    "Oops! Ada kucing lewat di keyboard programmer 🐱",
    "Web-nya lagi main petak umpet nih 🙈",
    "Tenang, ini bukan salah kamu... mungkin salah WiFi-nya 📶",
    "Error detected! Tapi tetep semangat ya! 💪",
    "Kayaknya web-nya lagi healing dulu sebentar 🧘",
  ],
  en: [
    "Oops! Looks like this website wants to visit the moon 🌙",
    "Hmm... the server is having a coffee break ☕",
    "Oops! A cat walked across the programmer's keyboard 🐱",
    "The website is playing hide and seek 🙈",
    "Don't worry, it's not your fault... maybe blame the WiFi 📶",
    "Error detected! But stay positive! 💪",
    "The website is taking a mental health break 🧘",
  ],
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
      funnyMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    
    // Log error for debugging
    console.error('Portfolio Error:', error, errorInfo);
  }

  getRandomMessage = (lang = 'id') => {
    const messages = funnyMessages[lang] || funnyMessages.id;
    return messages[Math.floor(Math.random() * messages.length)];
  };

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const lang = localStorage.getItem('portfolio-language') || 'id';
      const funnyMessage = this.getRandomMessage(lang);
      
      const texts = {
        id: {
          title: "Waduh! Ada yang salah nih...",
          refresh: "Coba Lagi",
          goHome: "Ke Beranda",
          techDetails: "Detail Teknis (untuk yang penasaran):",
        },
        en: {
          title: "Oops! Something went wrong...",
          refresh: "Try Again",
          goHome: "Go Home",
          techDetails: "Technical Details (for the curious):",
        },
      };

      const t = texts[lang] || texts.id;

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
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
              className="text-8xl mb-6"
            >
              🙃
            </motion.div>

            {/* Error Title */}
            <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {t.title}
            </h1>

            {/* Funny Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-accent mb-6"
            >
              {funnyMessage}
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRefresh}
                className="px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent-light transition-colors"
              >
                {t.refresh}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                {t.goHome}
              </motion.button>
            </div>

            {/* Technical Details (collapsible) */}
            {this.state.error && (
              <details className="text-left bg-white/5 rounded-lg p-4">
                <summary className="text-gray-400 text-sm cursor-pointer hover:text-accent transition-colors">
                  {t.techDetails}
                </summary>
                <pre className="mt-3 text-xs text-red-400 overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            {/* Fun footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-gray-600 text-sm"
            >
              {lang === 'id' 
                ? "PS: Kalau error-nya terus muncul, kabarin Yudi ya! 😄"
                : "PS: If this keeps happening, let Yudi know! 😄"
              }
            </motion.p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
