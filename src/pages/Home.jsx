import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';
import './Home.css';

export default function Home() {
  return (
    <section className="home-section container animate-fade-in">
      <div className="home-content">
        <h2 className="greeting animate-slide-up">Hello, I'm</h2>
        <h1 className="name animate-slide-up delay-100">
          <span className="gradient-text">Chathu,</span>
        </h1>
        <h3 className="role animate-slide-up delay-200">
          UX/UI Designer & Frontend Developer
        </h3>
        <p className="bio animate-slide-up delay-300">
          I am an Information Technology student at the Institute of Technology, University of Moratuwa. I am interested in web development, user interface design, and creating responsive websites. I enjoy learning new technologies and improving my skills through academic and personal projects.
        </p>
        
        <div className="cta-group animate-slide-up delay-300">
          <Link to="/projects" className="btn btn-primary" aria-label="View my projects">
            View My Work 
          </Link>
        </div>
      </div>
      
      <div className="home-image-container animate-fade-in delay-200">
        <img src={profileImg} alt="Chathu" className="profile-photo" />
      </div>
    </section>
  );
}
