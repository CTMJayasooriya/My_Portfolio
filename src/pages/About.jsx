import React from 'react';
import './About.css';

export default function About() {
  // P
  const skills = [
    { name: 'React.js', level: '60%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'HTML & CSS', level: '70%' },
    { name: 'UI/UX Design', level: '78%' },
  ];

  return (
    <section className="about-section container animate-fade-in">
      <div className="section-header text-center animate-slide-up">
        <h2>About <span className="gradient-text">Me</span></h2>
        <p className="subtitle">Discover my background, skills, and aspirations.</p>
      </div>

      <div className="about-content">
        <div className="about-text glass animate-slide-up delay-100">
          <div className="card-header">
        
            <span className="icon-accent" style={{ fontSize: '24px' }}></span>
            <h3>My Journey</h3>
          </div>
          <p>
            I am an Information Technology undergraduate at the Institute of Technology, University of Moratuwa. I have a strong interest in web development and enjoy creating simple, user-friendly, and responsive websites.
          </p>
          <p>
             During my academic studies, I have worked on several projects that helped me develop my knowledge of HTML, CSS, JavaScript, and React.js. These experiences improved my technical skills, problem-solving ability, and teamwork.
          </p>
          <p>
            I am currently seeking an internship opportunity where I can gain practical industry experience, learn from professionals, and contribute to real-world projects while continuing to improve my skills.
          </p>
          
          <div className="education-block">
            <h4>Education</h4>
            <div className="edu-item">
              <strong>Information Technology</strong>
              <span>Institute of Technology, University of Moratuwa</span>
            </div>
          </div>

          <div className="education-block" style={{ marginTop: '1.5rem', paddingTop: '1.5rem' }}>
            <h4>Work Experience</h4>
            <div className="edu-item">
              <strong>Intern</strong>
              <span>HNB Bank (11 Months)</span>
            </div>
          </div>
        </div>

        <div className="about-skills animate-slide-up delay-200">
          <div className="skills-card glass">
            <div className="card-header">
              
              
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg" aria-hidden="true">
                    
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}