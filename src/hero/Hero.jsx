// Modern Hero Component with New Design
import "./hero.css";
import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Port<span className="highlight">folio</span>
                        <p>2025 - Yudd's Portfolio</p>  </h1>

                </div>
            </div>
        </section>
    );
};

export default Hero;