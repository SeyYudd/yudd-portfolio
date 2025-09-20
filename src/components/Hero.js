// components/Hero.js
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
                        <div className="hero-underline"></div>
                        <span className={`hero-img-behind${floatActive ? ' float-active' : ''}`}>
                            <img src={require('../assets/svg/smile_icon.svg').default} alt="Smile Icon" />
                        </span>
                        <span className="hero-img-forward">
                            <img src={require('../assets/svg/smile_icon.svg').default} alt="Smile Icon" />
                        </span>
                        <h1 className="hero-title">Hello !!</h1>
                    </div>
                    {/* ada di pojok kanan bawah di layar*/}
                    <p>Yudi's Portfolio</p>
                    {/* <button className="btn" onClick={() => scrollToSection('projects')}>Lihat Projek Saya</button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;