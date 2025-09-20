// components/Experience.js
import React, { useState } from 'react';

const Experience = () => {
  const [showContent, setShowContent] = useState(false);
  const experiences = [
    {
      company: "BRI",
      position: "QA Specialist",
      description: "Memastikan kualitas aplikasi mobile banking. Menggunakan tools seperti Appium untuk automation testing dan Postman untuk API testing."
    }, {
      company: "BNI",
      position: "QA Tester",
      description: "Berpartisipasi dalam testing aplikasi perbankan. Fokus pada functional testing, regression testing, dan user acceptance testing."
    }, {
      company: "Alfadigital",
      position: "QA Engineer",
      description: "Melakukan testing manual dan automation untuk aplikasi web dan mobile. Bertanggung jawab atas pembuatan test case, eksekusi testing, dan pelaporan bug."
    },


  ];

  return (
    <section id="experience" className="experience">
      <div className="about-container">
        <button className="about-pill" onClick={() => setShowContent(!showContent)}>
          Experience
        </button>
        {showContent && (
          <div className="about-content">
            <div className="about-column">
              <div className="about-details">
                <h2 className='about-h2'>Pengalaman Kerja</h2>
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;