
import React from 'react';
import './About.css'; 
import { FaLaptopCode, FaLightbulb, FaHandshake } from 'react-icons/fa'; // Example icons
import { Link } from 'react-router-dom';


import mission from '../components/Image/mission.png'; 

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <section className="about-hero">
        <div className="container" style={{ marginTop: '40px' }}>
          <h1>We are <span className="highlight-yellow">MoodSpark</span>.</h1>
          <p className="subtitle">
            A creative force of developers and designers dedicated to building exceptional digital experiences that ignite growth and inspire users.
          </p>
        </div>
      </section>

   
      <section className="our-mission">
        <div className="container mission-content">
          <div className="mission-text">
            <h2>Our Mission & Story</h2>
            <p>
              Founded on the belief that technology should be beautiful and intuitive, MoodSpark started as a passion project. We saw a gap between powerful functionality and user-centric design. Our mission is to bridge that gap, delivering solutions that are not only robust and scalable but also a delight to use.
            </p>
            <p>
              We are more than just coders; we are architects of the digital world. Every project is a partnership, and we are committed to turning your vision into a tangible, successful reality.
            </p>
          </div>
          <div className="mission-image">
           
            <img src={mission} alt="Our team collaborating" />
          </div>
        </div>
      </section>

    
      <section className="our-values">
        <div className="container">
          <h2>Our Core Principles</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h3>Innovation</h3>
              <p>We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Collaboration</h3>
              <p>Your vision is our blueprint. We work closely with you at every step to ensure we build exactly what you need.</p>
            </div>
            <div className="value-card">
              <FaLaptopCode className="value-icon" />
              <h3>Quality Craftsmanship</h3>
              <p>From pixel-perfect designs to clean, efficient code, we are obsessed with quality and performance.</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="meet-the-team">
        <div className="container">
          <h2>Meet The Spark</h2>
          <div className="team-grid">
          
            <div className="team-member">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Team Member 1" />
              <h4>Alex Doe</h4>
              <p>Founder & Lead Developer</p>
            </div>
       
            <div className="team-member">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026705d" alt="Team Member 2" />
              <h4>Lisa Crawford</h4>
              <p>UI/UX & Graphic Designer</p>
            </div>
       
          </div>
        </div>
      </section>

  
      <section className="about-cta">
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>Let's turn your idea into a reality. We'd love to hear from you.</p>
          <Link to="/Contact"><button className="cta-button">Get In Touch</button></Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;