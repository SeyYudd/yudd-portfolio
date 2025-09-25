// Modern About Component
import React, { useState } from 'react';
import '../about/about.css';

const About = () => {

  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-content">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/assets/svg/my-photo.svg`} alt="Yudi - QA Engineer" />
          </div>
          <div className="about-column">
            <div className="about-details">
              <h1 className="text-3xl font-bold underline">
                Hello world!
              </h1>                <h2 className='about-h2'>Hi, I'm Yudd!</h2>
              <span className="about-text">
                I'm a <span className="highlight-keyword">QA Engineer</span> who loves making sure apps work perfectly.
                I've tested mobile and web applications at <span className="highlight-keyword">BRI</span>,
                <span className="highlight-keyword">BNI</span>, and <span className="highlight-keyword">Alfadigital</span> —
                specializing in both <span className="highlight-keyword">manual</span> and
                <span className="highlight-keyword">automation testing</span>.
                <br /><br />
                My mission is simple: find bugs before users do and ensure every feature works smoothly!
                I believe quality software makes people's lives better.
              </span>

              <div className="skills-highlight">
                <span className="skill-badge">Postman</span>
                <span className="skill-badge">Appium</span>
                <span className="skill-badge">Jira</span>
                <span className="skill-badge">DBeaver</span>
                <span className="skill-badge">API Testing</span>
                <span className="skill-badge">Mobile Testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;