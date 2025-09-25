// Modern Skills Component
import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [showContent, setShowContent] = useState(false);
  
  const skillCategories = [
    {
      category: "Testing Expertise",
      color: "var(--primary-color)",
      skills: [
        {
          icon: "📱",
          title: "Mobile Testing",
          description: "Expert in testing Android & iOS apps using Appium, ensuring seamless user experiences across devices.",
          level: 90,
          tools: ["Appium", "Android Studio", "Xcode"]
        },
        {
          icon: "💻",
          title: "Web Testing",
          description: "Cross-browser testing wizard who ensures your web apps work perfectly everywhere!",
          level: 85,
          tools: ["Selenium", "Cypress", "TestCafe"]
        },
        {
          icon: "🤖",
          title: "Test Automation",
          description: "Building smart automation frameworks that work while you sleep and make testing fun!",
          level: 80,
          tools: ["Selenium", "Robot Framework", "Jest"]
        }
      ]
    },
    {
      category: "Quality Assurance",
      color: "var(--accent-yellow)",
      skills: [
        {
          icon: "🐛",
          title: "Bug Hunting",
          description: "Professional bug detective who finds issues before they find users. No bug escapes!",
          level: 95,
          tools: ["Jira", "Bugzilla", "TestRail"]
        },
        {
          icon: "🔌",
          title: "API Testing",
          description: "API whisperer who speaks fluent REST and GraphQL, ensuring perfect data communication.",
          level: 88,
          tools: ["Postman", "Newman", "REST Assured"]
        },
        {
          icon: "👥",
          title: "Team Collaboration",
          description: "Master of bringing teams together to create amazing, bug-free products everyone loves!",
          level: 92,
          tools: ["Agile", "Scrum", "DevOps"]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
          <div className="skills-content">
            <div className="skills-header">
              <h2 className='skills-title'>What I Bring to the Table</h2>
              <p className="skills-subtitle">Tools, techniques, and a whole lot of passion for quality!</p>
            </div>
            
            <div className="skills-categories">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="skill-category">
                  <div className="category-header">
                    <h3 className="category-title" style={{ color: category.color }}>
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="skills-grid">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="skill-card" 
                        style={{ 
                          animationDelay: `${(catIndex * 3 + index) * 0.1}s`,
                          '--category-color': category.color
                        }}
                      >
                        <div className="skill-icon">{skill.icon}</div>
                        <h4 className="skill-title">{skill.title}</h4>
                        <p className="skill-description">{skill.description}</p>
                        
                        <div className="skill-level">
                          <div className="level-label">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="level-bar">
                            <div 
                              className="level-progress" 
                              style={{ 
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="skill-tools">
                          {skill.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="tool-tag">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default Skills;