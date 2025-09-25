// Modern Projects Component
import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [showContent, setShowContent] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mobile Banking QA",
      company: "BRI",
      description: "Comprehensive testing of mobile banking application including API testing, automation with Appium, and user experience validation.",
      technologies: ["Functional Testing", "UAT", "API Testing", "SIT",],
      color: "var(--primary-color)"
    },
    {
      id: 2,
      title: "Wondr Banking App, and Back Office",
      company: "BNI",
      description: "Wondr Banking App Testing - Ensured seamless banking operations through rigorous testing.",
      technologies: ["Appium", "Postman", "Functional Testing", "UAT", "Regression Testing", "SIT", "TVT/BVT", "Smoke Testing", "Automation Testing", "Sanity"],
      color: "var(--accent-yellow)"
    },
    {
      id: 3,
      title: "Alfagift, AlfaMikro, Alfacart",
      company: "Alfadigital",
      description: "Manual testing of mobile applications, test case creation, and bug tracking to ensure quality delivery.",
      technologies: ["Manual Testing", "Test Cases", "Bug Tracking"],
      color: "var(--accent-red)"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <div className="projects-header">
            <h2 className="projects-title">My Testing Projects</h2>
            <p className="projects-subtitle">Quality assurance work that made a difference</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="project-company">{project.company}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;