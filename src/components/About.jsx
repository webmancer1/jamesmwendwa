import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Download } from "lucide-react";
import "./About.css";

const About = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="about" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        About <span>Me</span>
      </h2>
      <div className="about-content grid fade-in">
        <div className="about-text glass">
          <p className="text-lg text-muted">
            Hello! I'm James M. Wambua, a passionate Computer Science student
            with a strong foundation in both software development and network
            engineering. My journey in tech is driven by a curiosity to
            understand how systems work from the ground up, whether it's
            configuring a router or building a scalable mobile application.
          </p>
          <p className="text-lg text-muted mt-4">
            Currently, my focus is primarily on Network engineering and Android
            development. I thrive on solving complex problems and transforming
            ideas into efficient, user-focused digital solutions. I believe in
            writing clean, modular code and continuously expanding my skill set.
          </p>
          <div className="mt-8">
            <a
              href="/cv.pdf"
              download="James_M_Wambua_CV.pdf"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
        <div className="about-stats grid">
          <div className="stat-card glass flex flex-col items-center justify-center">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Coding</span>
          </div>
          <div className="stat-card glass flex flex-col items-center justify-center">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card glass flex flex-col items-center justify-center">
            <span className="stat-number">CCNA</span>
            <span className="stat-label">Network Certified</span>
          </div>
          <div className="stat-card glass flex flex-col items-center justify-center">
            <span className="stat-number">CS</span>
            <span className="stat-label">Degree Student</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
