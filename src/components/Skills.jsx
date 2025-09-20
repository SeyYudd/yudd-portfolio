// components/Skills.js
import React, { useState } from 'react';

const Skills = () => {
  const [showContent, setShowContent] = useState(false);
  const skills = [
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Testing",
      description: "Pengalaman testing aplikasi mobile Android dan iOS menggunakan tools seperti Appium."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Web Testing",
      description: "Testing aplikasi web dengan berbagai browser dan perangkat berbeda."
    },
    {
      icon: "fas fa-cogs",
      title: "Automation",
      description: "Membangun framework automation testing untuk meningkatkan efisiensi testing."
    },
    {
      icon: "fas fa-bug",
      title: "Bug Tracking",
      description: "Melaporkan dan melacak bug menggunakan tools seperti Jira untuk memastikan resolusi yang tepat."
    },
    {
      icon: "fas fa-plug",
      title: "API Testing",
      description: "Testing API menggunakan Postman untuk memastikan integrasi yang tepat antara sistem."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "Bekerja sama dengan tim developer, designer, dan stakeholder untuk mencapai kualitas terbaik."
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="about-container">
        <button className="about-pill" onClick={() => setShowContent(!showContent)}>
          Skills
        </button>
        {showContent && (
          <div className="about-content">
            <div className="about-column">
              <div className="about-details">
                <h2 className='about-h2'>Skills & Keahlian</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <i className={skill.icon}></i>
                      <h3>{skill.title}</h3>
                      <p>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;