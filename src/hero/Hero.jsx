// components/Hero.js
import "./hero.css";
import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [floatActive, setFloatActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Aktifkan efek float jika scroll lebih dari 100px
            setFloatActive(scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // const scrollToSection = (sectionId) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <section id="home" className="hero">
            <div className="container">
                {/* untuk hero section ada di tengah layar*/}
                <div className="hero-content">
                    <div className="hero-title-wrapper">
                        <span className={`hero-img-behind${floatActive ? ' float-active' : ''}`}>
                            <img src={`${process.env.PUBLIC_URL}/assets/svg/smile_icon.svg`} alt="Smile Icon" />                        </span>
                        <span className="hero-img-forward">
                            <img src={`${process.env.PUBLIC_URL}/assets/svg/smile_icon.svg`} alt="Smile Icon" />                        </span>
                        <h1 className="hero-title">Portfolio</h1>
                        {/* buat garis dan tahun jadi row dan tahun ada di sebelah kanan */}
                        <div className="hero-underline"></div>
                        <p>2025 - Yudi's Portfolio</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;