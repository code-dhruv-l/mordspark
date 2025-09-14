import React from 'react';
import './Services.css';
import { FaCode, FaPaintBrush, FaRocket, FaMobileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaCode />,
    title: 'Website Development',
    description: 'We build fast, responsive, and scalable websites from the ground up, ensuring a seamless experience across all devices. From single-page applications to complex web platforms.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Application Development',
    description: 'Our team develops intuitive and high-performing mobile and web applications tailored to your business needs, focusing on user engagement and robust functionality.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'We craft beautiful, user-centric designs that are not only visually appealing but also easy to navigate, enhancing user satisfaction and conversion rates.'
  },
  {
    icon: <FaRocket />,
    title: 'SEO & Performance',
    description: 'Boost your online visibility with our SEO optimization services. We ensure your website is fast, secure, and ranked high on search engines to attract more organic traffic.'
  },
  {
    icon: <FaChartLine />,
    title: 'Digital Strategy',
    description: 'We help you define a clear digital roadmap. From market research to feature planning, our strategic insights ensure your project is positioned for success.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Maintenance & Support',
    description: 'Our commitment doesn\'t end at launch. We offer ongoing maintenance and support packages to keep your website or application secure, updated, and running smoothly.'
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page-container">
     
      <section className="services-hero">
        <div className="container" style={{ marginTop: '40px' }}>
          <h1>What We <span className="highlight-yellow">Do</span>.</h1>
          <p className="subtitle">
            We provide a wide range of digital services to help your business grow and succeed in the online world.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section class="why-us hidden">
            <div class="container">
                <h2>Why Choose Us?</h2>
                <p class="subtitle">We are a team of experienced and passionate software engineers who love creating amazing products.</p>
                <div class="cards-container">
                    <div class="card">
                        <h3>Expert Team</h3>
                        <p>Skilled developers, designers, and managers are always available to help.</p>
                    </div>
                    <div class="card">
                        <h3>Custom Solutions</h3>
                        <p>We listen to your needs and deliver tailored solutions that fit your brand.</p>
                    </div>
                    <div class="card">
                        <h3>Quality & Reliability</h3>
                        <p>We deliver robust, scalable, and secure solutions every time.</p>
                    </div>
                    <div class="card">
                        <h3>Innovation-Driven</h3>
                        <p>We adopt the latest technologies to keep you ahead of the curve.</p>
                    </div>
                    <div class="card">
                        <h3>Transparent Process</h3>
                        <p>Clear communication and continuous updates at every step.</p>
                    </div>
                    <div class="card">
                        <h3>Long Term</h3>
                        <p>We focus on building lasting partnerships with our clients.</p>
                    </div>
                </div>
            </div>
        </section>
 
      <section className="services-cta">
        <div className="container">
          <h2>Have an Idea?</h2>
          <p>Let's discuss how our services can help bring your project to life.</p>
          <Link to="/Contact"><button className="cta-button">Request a Quote</button></Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;