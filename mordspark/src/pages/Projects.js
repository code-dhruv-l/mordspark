
import React from 'react';
import './Projects.css'; 
import { FaExternalLinkAlt, FaReact, FaPenNib } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


const projects = [
  {
    image: 'https://picsum.photos/seed/project1/1280/720',
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with a modern tech stack, focused on a seamless user experience and performance.',
    tags: ['React', 'Node.js', 'UI/UX Design'],
    liveLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/project2/1280/720',
    title: 'Corporate Landing Page',
    description: 'A sleek and professional landing page designed to increase brand visibility and generate leads for a tech startup.',
    tags: ['HTML5/CSS3', 'JavaScript', 'Marketing'],
    liveLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/project3/1280/720',
    title: 'Mobile App Concept',
    description: 'A design and prototype for a mobile application aimed at helping users track their fitness goals, with a focus on intuitive navigation.',
    tags: ['Figma', 'Prototyping', 'UI/UX Design'],
    liveLink: '#',
  },
   {
    image: 'https://picsum.photos/seed/project4/1280/720',
    title: 'Data Visualization Dashboard',
    description: 'A complex dashboard for a data analytics company, providing users with interactive charts and real-time insights.',
    tags: ['React', 'D3.js', 'Data Analytics'],
    liveLink: '#',
  },
];


const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
 
      <section className="projects-hero">
        <div className="container" style={{ marginTop: '40px' }}>
          <h1>Our <span className="highlight-yellow">Work</span>.</h1>
          <p className="subtitle">
            We take pride in our craft. Here are some of the projects we've poured our passion into.
          </p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        <section className="projects-cta">
            <div className="container">
                <h2>Ready to Start Your Project?</h2>
                <p>Let's create something amazing together. We're here to help.</p>
                <Link to="/Contact"><button className="cta-button">Let's Talk</button></Link>
            </div>
        </section>

    </div>
  );
};

export default ProjectsPage;