import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Projects.css";

const projectsData = [
  {
    title: "Servora",
    description:
      "A real-time server monitoring dashboard Android app with Jetpack Compose, Kotlin Flow, and Hilt for dependency injection.",
    image: "/Servora.jpeg",
    tags: ["Kotlin", "Android", "Jetpack Compose"],
    github: "https://github.com/webmancer1/Servora",
    live: "#",
  },
  {
    title: "MoneyMap",
    description:
      "A comprehensive personal finance management mobile application built with Kotlin and Jetpack Compose that enables users to track expenses, manage budgets, monitor debts, set savings goals, and gain financial insights through analytics and reports.",
    image: "/Moneymap.jpeg",
    tags: ["Android", "Room", "Firebase"],
    github: "https://github.com/webmancer1/MoneyMap",
    live: "https://github.com/webmancer1/MoneyMap/releases/tag/v1.0.1",
  },
  {
    title: "LifePing",
    description:
      "LifePing is a mobile app that helps users track their daily habits and routines, providing insights and reminders to promote a healthier lifestyle.",
    image: "/lifeping.jpeg",
    tags: ["Android", "Room", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Nueropause",
    description:
      "Neuropause runs quietly in your system tray, tracks your work time, and after your set work period (default: 50 min), displays a calming full-screen break overlay with wellness reminders like resting your eyes, stretching, or drinking water.",
    image: "/neuropause.png",
    tags: ["Python", "Shell", "Linux"],
    github: "#",
    live: "#",
  },
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
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description text-muted">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub size={20} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
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
