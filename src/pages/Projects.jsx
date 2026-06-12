import { Code } from 'lucide-react';
import erpImg from '../assets/erp-project.png';
import electionImg from '../assets/election-project.png';
import eventImg from '../assets/event-management.png';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Election Project',
      description: ' The Election Project is a web-based application developed to manage election-related activities such as voter registration, candidate management, and result handling. This project helped me gain practical experience in database management and web application development using PHP, MySQL, HTML, and CSS. It also improved my understanding of user-friendly interface design and system functionality',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/Sahansamuditha/Election_Project',
      demo: '#',
      image: electionImg
    },
    {
      id: 2,
      title: 'ERP Project Management Module',
      description: 'The ERP Project Management Module was developed as part of an Enterprise Resource Planning system to support project planning and management activities. The system allows users to organize project information, monitor progress, and manage tasks efficiently. Through this project, I gained experience in teamwork, system analysis, and web development technologies such as JavaScript, Node.js, HTML, and CSS.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
      github: 'https://github.com/sadiya0001/ERP-Project-Management-Module',
      demo: '#',
      image: erpImg
    },
    {
      id: 3,
      title: 'Event Management Platform',
      description: 'The Event Management Platform is a web application designed to help users discover and manage events in an organized manner. The platform provides event information through a simple and easy-to-use interface, making event management more convenient for both organizers and participants. This project enhanced my skills in React, JavaScript, responsive design, and frontend development.',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/CTMJayasooriya/Event-Management-Plan',
      demo: '#',
      image: eventImg
    }
  ];

  return (
    <section className="projects-section container animate-fade-in">
      <div className="section-header text-center animate-slide-up">
        <h2>My <span className="gradient-text">Projects</span></h2>
        <p className="subtitle">Showcasing my work in frontend development and UX design.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card glass animate-slide-up delay-${(index + 1) * 100}`}
          >
            <div className="project-image-container">
              {project.image !== 'placeholder' ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <span>Project Screenshot</span>
                </div>
              )}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="btn-icon primary" aria-label={`View ${project.title} on GitHub`}>
                  <Code size={20} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
