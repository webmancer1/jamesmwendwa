import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="contact" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Get In <span>Touch</span>
      </h2>
      <div className="contact-content grid fade-in">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's connect</h3>
          <p className="text-muted mb-6">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-methods flex flex-col gap-4">
            <a href="mailto:jamesmwendwa@example.com" className="contact-method flex items-center gap-4 glass">
              <div className="icon-box flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="font-semibold">jamesmwendwa@example.com</span>
            </a>
            <div className="social-links flex gap-4 mt-4">
              <a href="#" className="social-link glass flex items-center justify-center" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="social-link glass flex items-center justify-center" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="social-link glass flex items-center justify-center" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <form className="contact-form glass flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-input" rows="5" placeholder="How can I help you?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
