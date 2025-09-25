// components/Experience.js
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [showContent, setShowContent] = useState(false);
  const experiences = [
    {
      company: "BRI",
      position: "QA Specialist",
      description: "Kept mobile banking apps bug-free and happy! Automated tests with Appium, poked APIs with Postman, and made sure users could sleep well at night.",
      period: "2023 - Present",
      icon: "🏦",
      skills: ["Appium", "Postman", "Mobile Testing", "API Testing"]
    }, {
      company: "BNI",
      position: "QA Tester",
      description: "Tested banking apps like a detective—hunting for bugs, running wild regression tests, and making sure every feature was ready for the spotlight!",
      period: "2022 - 2023",
      icon: "🕵️",
      skills: ["Functional Testing", "Regression Testing", "UAT"]
    }, {
      company: "Alfadigital",
      position: "Product Operation",
      description: "Manual testing for mobile apps. Wrote test cases, squashed bugs, and made sure every release was a party for users!",
      period: "2021 - 2022",
      icon: "📱",
      skills: ["Manual Testing", "Test Cases", "Bug Tracking"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-content">
            <div className="experience-header">
              <h2 className='experience-title'>Work Journey</h2>
              <p className="experience-subtitle">Where I've made apps better, one bug at a time!</p>
            </div>
            
            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="experience-card">
                    <div className="job-content">
                      <div className="card-header">
                        <h3 className="position">{exp.position}</h3>
                        <h4 className="company">{exp.company}</h4>
                        <span className="period">{exp.period}</span>
                      </div>
                      
                      <p className="description">{exp.description}</p>
                      
                      <div className="skills-tags">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Experience;