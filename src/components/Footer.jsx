import React from 'react';
import { Link } from 'react-router-dom'; // Practical 06 වල උගන්නපු සරල Link එක
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          <span>&copy; {currentYear} Chathu. All right reserved</span>
        </p>
      </div>
    </footer>
  );
}