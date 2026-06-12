import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Link as LinkIcon } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) { 
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setStatus('submitting');
      
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  return (
    <section className="contact-section container animate-fade-in">
      <div className="section-header text-center animate-slide-up">
        <h2>Get in <span className="gradient-text">Touch</span></h2>
        <p className="subtitle">Thinking about a project or opportunity?  Let’s connect and talk about it.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info glass animate-slide-up delay-100">
          <div className="info-header">
            <h3>Contact Information</h3>
            <p>Fill out the form or reach out directly via email or social media.</p>
          </div>
          
          <div className="info-list">
            <div className="info-item">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:chathupama@example.com">chathupama@example.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box">
                <Phone size={20} />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+94701234567">+94 70 123 4567</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <h4>Location</h4>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box">
                <LinkIcon size={20} />
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/CTMJayasooriya" target="_blank" rel="noopener noreferrer">github.com/CTMJayasooriya</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box">
                <LinkIcon size={20} />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/chathupama-thathsarani/" target="_blank" rel="noopener noreferrer">linkedin.com/in/chathupama-thathsarani</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass animate-slide-up delay-200">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Your email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Your message"
                rows={5}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${status === 'success' ? 'success' : ''}`}
              disabled={status === 'submitting'}
            >
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'submitting' && 'Sending...'}
              {status === 'success' && <><CheckCircle size={18} /> Sent Successfully</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}