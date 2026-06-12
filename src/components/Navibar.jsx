import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navibar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navibar">
      <div className="navibar-container container">
        <Link to="/" className="navibar-logo">
          Portfolio<span className="logo-accent">.</span>
        </Link>

        <div className="navi-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="navi-link" 
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

       
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="mobile-navi-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      
    </nav>
  );
}