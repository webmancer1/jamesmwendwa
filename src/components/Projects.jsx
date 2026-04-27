import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const projectsData = [
  {
    title: 'Servora',
    description: 'A real-time server monitoring dashboard Android app with Jetpack Compose, Kotlin Flow, and Hilt for dependency injection.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Kotlin', 'Android', 'Jetpack Compose'],
    github: '#',
    live: '#'
  },
  {
    title: 'Memora Budget Manager',
    description: 'A robust budgeting application featuring MVVM architecture, Room database for local persistence, and Firebase for backup.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    tags: ['Android', 'Room', 'Firebase'],
    github: '#',
    live: '#'
  },
  {
    title: 'Network Simulation',
    description: 'Complex enterprise network topology designed and simulated in Cisco Packet Tracer, ensuring high availability and security.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    tags: ['Cisco', 'Packet Tracer', 'Networking'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="projects" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Featured <span>Projects</span>
      </h2>
      <div className="projects-grid fade-in">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card glass">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description text-muted">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub size={20} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={20} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
