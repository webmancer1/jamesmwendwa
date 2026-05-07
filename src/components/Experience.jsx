import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'Kenyatta University',
    date: '2023 - Present',
    description: 'Focusing on software engineering, distributed systems, and network architecture.',
    icon: <GraduationCap size={24} />
  },
  {
    type: 'education',
    title: 'Kenya Certificate of Secondary Education (KCSE)',
    institution: 'Alliance High School',
    date: '2019 - 2022',
    description: 'Completed secondary education with a strong foundation in mathematics and sciences.',
    icon: <GraduationCap size={24} />
  },
  {
    type: 'certification',
    title: 'Cisco Certifications',
    institution: 'Cisco',
    date: '2025',
    description: 'Validated skills in network fundamentals, IP connectivity, and security fundamentals.',
    links: [
      { text: 'Introduction to Networks', url: 'https://www.credly.com/badges/fba2e13d-b4ed-4818-86ff-9923069ffb68/public_url' },
      { text: 'CCNA Switching, Routing and Wireless Essentials', url: 'https://www.credly.com/badges/6a24ba30-d039-440a-b0cc-63273988e44a/public_url' }
    ],
    icon: <Award size={24} />
  },
  {
    type: 'experience',
    title: 'Freelance Android Developer',
    institution: 'Self-Employed',
    date: '2025 - Present',
    description: 'Developing high-performance, user-centric Android applications using Kotlin and Jetpack Compose.',
    icon: <Briefcase size={24} />
  }
];

const Experience = () => {
  const scrollRef = useScrollAnimation();

  const educationItems = experienceData.filter(item => item.type === 'education' || item.type === 'certification');
  const experienceItems = experienceData.filter(item => item.type === 'experience');

  const renderTimelineItem = (item, idx) => (
    <div key={idx} className="timeline-item">
      <div className="timeline-icon flex items-center justify-center">
        {item.icon}
      </div>
      <div className="timeline-content glass">
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <h4 className="timeline-institution text-muted">{item.institution}</h4>
        <p className="timeline-description text-muted mt-4">{item.description}</p>
        {item.links && (
          <div className="timeline-links flex flex-col gap-2 mt-4">
            {item.links.map((link, lIdx) => (
              <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="timeline-link flex items-center gap-2">
                <ExternalLink size={16} /> {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Experience & <span>Education</span>
      </h2>
      <div className="experience-grid fade-in">
        <div className="experience-column">
          <h3 className="column-title">Education & Certifications</h3>
          <div className="timeline-container">
            {educationItems.map(renderTimelineItem)}
          </div>
        </div>
        
        <div className="experience-column">
          <h3 className="column-title">Work Experience</h3>
          <div className="timeline-container">
            {experienceItems.map(renderTimelineItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
