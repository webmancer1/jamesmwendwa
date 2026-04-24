import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="home" className="hero-section container flex items-center">
      <div className="hero-content" ref={scrollRef}>
        <div className="fade-in">
          <span className="hero-greeting">Hi, I am</span>
          <h1 className="hero-name">James Mwendwa<span className="brand-dot">.</span></h1>
          <h2 className="hero-title text-muted">
            Computer Science Student | Android Developer | Network Engineer
          </h2>
          <p className="hero-tagline text-muted">
            Building efficient, scalable, and user-focused digital solutions.
          </p>
          <div className="hero-cta flex gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
