// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Alfadigital",
      position: "QA Engineer",
      description: "Melakukan testing manual dan automation untuk aplikasi web dan mobile. Bertanggung jawab atas pembuatan test case, eksekusi testing, dan pelaporan bug."
    },
    {
      company: "BNI",
      position: "QA Tester",
      description: "Berpartisipasi dalam testing aplikasi perbankan. Fokus pada functional testing, regression testing, dan user acceptance testing."
    },
    {
      company: "BRI",
      position: "QA Specialist",
      description: "Memastikan kualitas aplikasi mobile banking. Menggunakan tools seperti Appium untuk automation testing dan Postman untuk API testing."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Pengalaman Kerja</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.position} - {exp.company}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;