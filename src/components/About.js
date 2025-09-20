// components/About.js
import React, { useEffect, useState } from 'react';
import '../about/about.css';

const About = () => {
  const [floatActive, setFloatActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Aktifkan efek float jika scroll lebih dari 300px (setelah hero)
      setFloatActive(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className={floatActive ? 'float-active' : ''}>Tentang Saya</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hai! Saya seorang QA Engineer yang mencintai proses memastikan aplikasi bekerja dengan sempurna. Saya telah melakukan testing untuk aplikasi mobile dan web di perusahaan seperti BRI, BNI, dan Alfadigital—melakukan baik testing manual maupun automation.</p>
            <p>Saya menggunakan berbagai tools seperti Postman, Appium, Jira, Discover, dan lainnya untuk menemukan bug dan memastikan segala sesuatu berjalan lancar.</p>
            <p>Dengan pengalaman yang saya miliki, saya memahami pentingnya kualitas software dan dampaknya terhadap pengalaman pengguna.</p>
          </div>
          <div className="about-image">
            <img src="https://placehold.co/400x500/3498db/white?text=Yudi's+Photo" alt="Yudi - QA Engineer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;