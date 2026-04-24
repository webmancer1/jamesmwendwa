import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    date: '2022 - Present',
    description: 'Focusing on software engineering, distributed systems, and network architecture.',
    icon: <GraduationCap size={24} />
  },
  {
    type: 'certification',
    title: 'Cisco Certified Network Associate (CCNA)',
    institution: 'Cisco',
    date: '2024',
    description: 'Validated skills in network fundamentals, IP connectivity, and security fundamentals.',
    icon: <Award size={24} />
  },
  {
    type: 'experience',
    title: 'Freelance Android Developer',
    institution: 'Self-Employed',
    date: '2023 - Present',
    description: 'Developing high-performance, user-centric Android applications using Kotlin and Jetpack Compose.',
    icon: <Briefcase size={24} />
  }
];

const Experience = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="experience" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Experience & <span>Education</span>
      </h2>
      <div className="timeline-container fade-in">
        {experienceData.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-icon flex items-center justify-center">
              {item.icon}
            </div>
            <div className="timeline-content glass">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-institution text-muted">{item.institution}</h4>
              <p className="timeline-description text-muted mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
