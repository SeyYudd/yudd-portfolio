// components/About.js
import React, { useState } from 'react';
import '../about/about.css';
const About = () => {

  const [showContent, setShowContent] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <button className="about-pill" onClick={() => setShowContent(!showContent)}>
          About Me
        </button>
        {showContent && (
          <div className="about-content">
            <div className="about-image">
              <img src={'/assets/svg/my-photo.svg'} alt="Yudi - QA Engineer" />
            </div>
            <div className="about-column">
              <div className="about-details">
                <h2 className='about-h2'>Hi, I'm Yudd</h2>
                <span className="about-text">
                  Hi! I'm a QA Engineer who loves making sure apps work perfectly. I've tested mobile and web apps at BRI, BNI, and Alfadigital—doing both manual and automation testing.
                  I use tools like Postman, Appium, Jira, DBeaver, and more to find bugs and keep things running smoothly.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;