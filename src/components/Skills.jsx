import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Kotlin", level: 90 },
      { name: "Python", level: 60 },
      { name: "Shell", level: 50 }
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "Android SDK", level: 90 },
      { name: "Jetpack Compose", level: 85 },
      { name: "Networking (Cisco)", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Linux", level: 80 },
    ],
  },
];

const Skills = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="skills" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Technical <span>Skills</span>
      </h2>
      <div className="skills-grid fade-in">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info flex justify-between">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
