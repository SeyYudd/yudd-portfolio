// components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Ngobrolin App",
      description: "Aplikasi mobile yang tersedia di Play Store untuk membantu komunikasi yang lebih baik.",
      link: "#"
    },
    {
      name: "Custom Automation Framework",
      description: "Framework automation testing yang dibangun untuk meningkatkan efisiensi testing.",
      link: "#"
    },
    {
      name: "Testing Documentation",
      description: "Dokumentasi comprehensive test case untuk berbagai jenis aplikasi.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Proyek Saya</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.name}
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn">Lihat Detail</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;