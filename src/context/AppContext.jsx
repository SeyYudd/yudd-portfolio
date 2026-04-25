import React, { createContext, useContext, useState, useEffect } from 'react';

// Translations
const translations = {
  id: {
    // Header
    role: "QA Engineer",
    
    // Section titles
    portfolio: "Portofolio",
    aboutMe: "Tentang Saya",
    careerJourney: "Perjalanan Karir",
    myProjects: "Proyek Saya",
    expertise: "Keahlian",
    academicBackground: "Latar Belakang Pendidikan",
    getInTouch: "Hubungi Saya",
    
    // Hero
    heroTitle: "Portofolio —",
    heroRole: "Software Quality Assurance Engineer",
    heroQuote: '"Memastikan kualitas, stabilitas, dan keandalan di seluruh platform digital."',
    
    // About
    aboutText: `Seorang profesional Pengujian Perangkat Lunak (QA) yang berorientasi pada pengujian manual dan automation (Appium) di berbagai platform (Android, iOS, Web). Berpengalaman menggunakan Jira, Postman, Kibana, dan DBeaver untuk memastikan kualitas dan stabilitas perangkat lunak. Terbiasa bekerja dengan metode UAT, SIT, serta berkolaborasi dengan Developer, Scrum Master, Product Owner, dan Architecture Design untuk memastikan kesesuaian produk dengan kebutuhan bisnis.`,
    
    // Projects
    application: "Aplikasi",
    toolsLanguage: "Tools / Bahasa",
    platform: "Platform",
    link: "Tautan",
    viewApp: "Lihat App",
    company: "Perusahaan",
    soloProject: "Proyek Pribadi",
    companyProject: "Proyek Perusahaan",
    
    // Expertise
    testingMethodologies: "Metodologi Pengujian",
    qaTestingTools: "Alat QA & Pengujian",
    technicalSkills: "Keahlian Teknis",
    workflow: "Alur Kerja",
    
    // Education
    computerScience: "S1 Ilmu Komputer",
    highSchoolDiploma: "Diploma SMA",
    
    // Contact
    email: "Email",
    linkedin: "LinkedIn",
    portfolioLink: "Behance Portofolio",
    letsConnect: "Mari Terhubung",
    
    // Footer
    footerText: "© 2026 Muhamad Syifa Wahyudi. Hak cipta dilindungi.",
    
    // Loading
    loadingText: "Memuat portofolio...",
    
    // Error
    errorTitle: "Waduh! Ada yang salah nih...",
    errorSubtitle: "Kayaknya web ini lagi pengen liburan ke bulan 🌙",
    errorMessage: "Tenang aja, bukan salah kamu kok. Coba refresh atau balik lagi nanti ya!",
    errorRefresh: "Coba Lagi",
    errorGoHome: "Ke Beranda",
  },
  en: {
    // Header
    role: "QA Engineer",
    
    // Section titles
    portfolio: "Portfolio",
    aboutMe: "About Me",
    careerJourney: "Career Journey",
    myProjects: "My Projects",
    expertise: "Expertise",
    academicBackground: "Academic Background",
    getInTouch: "Get in Touch",
    
    // Hero
    heroTitle: "Portfolio —",
    heroRole: "Software Quality Assurance Engineer",
    heroQuote: '"Ensuring quality, stability, and reliability across digital platforms."',
    
    // About
    aboutText: `A Software Testing (QA) professional focused on manual and automation testing (Appium) across multiple platforms (Android, iOS, Web). Experienced with Jira, Postman, Kibana, and DBeaver to ensure software quality and stability. Familiar with UAT, SIT methodologies, and collaborating with Developers, Scrum Masters, Product Owners, and Architecture Design to ensure product alignment with business requirements.`,
    
    // Projects
    application: "Application",
    toolsLanguage: "Tools / Language",
    platform: "Platform",
    link: "Link",
    viewApp: "View App",
    company: "Company",
    soloProject: "Solo Project",
    companyProject: "Company Project",
    
    // Expertise
    testingMethodologies: "Testing Methodologies",
    qaTestingTools: "QA & Testing Tools",
    technicalSkills: "Technical Skills",
    workflow: "Workflow",
    
    // Education
    computerScience: "Computer Science Bachelor",
    highSchoolDiploma: "High School Diploma",
    
    // Contact
    email: "Email",
    linkedin: "LinkedIn",
    portfolioLink: "Portfolio",
    letsConnect: "Let's Connect",
    
    // Footer
    footerText: "© 2026 Muhamad Syifa Wahyudi. All rights reserved.",
    
    // Loading
    loadingText: "Loading portfolio...",
    
    // Error
    errorTitle: "Oops! Something went wrong...",
    errorSubtitle: "Looks like this website wants to take a trip to the moon 🌙",
    errorMessage: "Don't worry, it's not your fault! Try refreshing or come back later.",
    errorRefresh: "Try Again",
    errorGoHome: "Go Home",
  },
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize from localStorage or defaults
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved || 'id';
  });
  
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    // Apply theme to document
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    theme,
    setTheme,
    toggleTheme,
    isLoading,
    setIsLoading,
    loadingProgress,
    setLoadingProgress,
    t,
    translations: translations[language],
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
