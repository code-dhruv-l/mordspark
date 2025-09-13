import React from 'react';
import './Homepage.css';
import about from '../components/Image/aboutus.png'; 
import service from '../components/Image/service.png';
import heroVideo from '../components/Image/mainvideo.mp4'; 
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon
} from 'mdb-react-ui-kit';
import contact from '../components/Image/contact.png';
import { Link } from "react-router-dom";



export default function HomePage() {
  const steps = [
    {
      title: "Requirements Analysis",
      color: "#0d3b66",
      icon: (
        <svg viewBox="0 0 24 24" width="44" height="44">
          <path
            fill="white"
            d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 
              2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 
              14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"
          />
        </svg>
      ),
    },
    {
      title: "Design",
      color: "#2f79b8",
      icon: (
        <svg viewBox="0 0 24 24" width="44" height="44">
          <path
            fill="white"
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 
              17.25zM20.71 7.04a1.003 1.003 0 
              000-1.42l-2.34-2.34a1.003 1.003 
              0 00-1.42 0l-1.83 1.83 3.75 
              3.75 1.84-1.82z"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      color: "#a6d8ee",
      icon: (
        <svg viewBox="0 0 24 24" width="44" height="44">
          <path fill="white" d="M4 6h16v12H4z" />
          <rect x="8" y="10" width="8" height="4" fill="#e6f7fb" />
        </svg>
      ),
    },
    {
      title: "Testing",
      color: "#146090",
      icon: (
        <svg viewBox="0 0 24 24" width="44" height="44">
          <path
            fill="white"
            d="M12 2a10 10 0 1010 10A10.011 10.011 
              0 0012 2zm-1 15l-5-5 
              1.41-1.41L11 14.17l7.59-7.59L20 8z"
          />
        </svg>
      ),
    },
    {
      title: "Deployment",
      color: "#0d3b66",
      icon: (
        <svg viewBox="0 0 24 24" width="44" height="44">
          <path
            fill="white"
            d="M12 2L1 7l11 5 9-4.09V17h2V7z"
          />
          <path
            fill="white"
            d="M11 12.84L3 9v2l8 3.84V22h2v-7.16L21 
              11V9z"
          />
        </svg>
      ),
    },
  ];

  const Arrow = () => (
    <svg className="arrow" viewBox="0 0 120 24" preserveAspectRatio="none">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" fill="#0d3b66" />
        </marker>
      </defs>
      <line
        x1="0"
        y1="12"
        x2="100"
        y2="12"
        stroke="#0d3b66"
        strokeWidth="2"
        strokeDasharray="4 6"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      
<section className="hero-section">
  {/* --- REPLACE THE IMG TAG WITH THIS VIDEO TAG --- */}
  <video 
    src={heroVideo} 
    alt="Background video of business and technology" 
    className="homepage-image" 
    autoPlay 
    loop 
    muted 
    playsInline 
  >
    Your browser does not support the video tag.
  </video>
  {/* --- END OF REPLACEMENT --- */}

  <div className="homepage-text">
    <h1 style={{fontFamily: "Krona One, sans-serif" }}>Grow Your Business With Us</h1>
    <h2 style={{fontFamily: "Krona One, sans-serif" }}>
      We{" "}
      <span className="highlight" style={{ borderRadius: "50px", fontFamily: "Krona One, sans-serif" }}>
        Design,
      </span>
    </h2>
    <div className="sub-text" style={{fontFamily: "Krona One, sans-serif" }}>
      <p>Develop,</p>
      <p>and Deliver</p>
      <p>Experiences that Matter.</p>
    </div>
  </div>
</section>




      {/* About Section */}
      <section className="about-section">
        <div className="about-title">
          <i className="fa fa-users" aria-hidden="true"></i> About Us
        </div>

        <div className="about-content">
          <div className="about-left">
            <img src={about} alt="Teamwork" height="300px" width="300rem" />
            <p>
              We are a passionate team of innovators, designers, and developers
              dedicated to building digital solutions that help businesses grow.
              Our mission is simple — to transform ideas into scalable,
              high-performing, and user-friendly software that makes a real
              impact.
            </p>
            <Link
              to="/about"
              className="know-more-btn"
              style={{ backgroundColor: "#fff", color: "#000", border: "1px solid" }}
            >
              Know more <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              <div className="stat-box">
                <h1>50</h1>
                <h3>Project complete</h3>
              </div>
              <div className="stat-box">
                <h1>5+</h1>
                <h3>Project running</h3>
              </div>
              <div className="stat-box">
                <h1>70+</h1>
                <h3>Happy Clients</h3>
              </div>
              <div className="stat-box">
                <h1>6+</h1>
                <h3>Team Members</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-container">
      <h2 className="services-main-title">
        🖥️ Our service
      </h2>
      <div className="services-content">
        
        
        <div className="image-placeholder">
         <img src={service} alt="Our Services" className="service-image" />
        </div>

        <div className="cards-wrapper">
         
          <div className="service-card">
            <h3>Website development</h3>
            <p>
              We create modern, fast, and user-friendly websites
              tailored to your business goals. Our websites are not
              just visually appealing — they are built with performance,
              security, and scalability in mind.
            </p>
          </div>

          {/* Card 2: Application Development */}
          <div className="service-card">
            <h3>Application development</h3>
            <p>
              We specialize in building powerful, scalable, and user-friendly
              applications that bring your ideas to life. From startups to
              enterprises, we create apps that deliver seamless performance
              and an exceptional user experience.
            </p>
          </div>

          
        </div>
      </div>
      

    </section>


      {/* Process Section */}
      <section className="process-container">
        <div className="title-wrapper">
          <h1 className="bigTitle">Process Of Work</h1>
          <h2 className="outlineTitle">Our Main Focus</h2>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="step">
                <div className="hexagon" style={{ backgroundColor: s.color }}>
                  <div className="iconWrap">{s.icon}</div>
                </div>
                <p className="stepTitle">{s.title}</p>
              </div>
              {i < steps.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </section>


          {/* Review Section */}

          <h2 className="client-title" style={{ marginTop: '50px' }}>💬 What our clients say</h2>
        

          <MDBContainer fluid className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>

          <MDBCard className="testimonial-card">
            {/* Added padding-bottom to create space for the indicators */}
            <MDBCardBody className="px-4 py-5" style={{ paddingBottom: '70px' }}>
              <MDBCarousel showIndicators showControls dark className="testimonial-carousel">
                
                {/* Slide 1 */}
                <MDBCarouselItem className='active' itemId={1}>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol lg="3" className="d-flex justify-content-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="7" xl="8" className="text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">Maria Smantha - Web Developer</h4>

                          {/* This content can remain if you want to show nationality as text */}
                          {/* <p className="text-muted fst-italic mb-4">Nationality: USA</p> */}
                          
                          <p className="mb-0 pb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi...
                          </p>
                          <p className="mb-0 pb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi...
                          </p>
                          <p className="mb-0 pb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi...
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>

                  {/* --- ADD THIS SECTION FOR THE FLAG --- */}
                  <div className="nationality-flag-corner">
                    <img
                      src="https://flagcdn.com/w40/us.png" // Increased size for visibility
                      alt="USA Flag"
                    />
                  </div>
                  {/* --- END OF ADDED SECTION --- */}
                </MDBCarouselItem>

                {/* Slide 2 (Added for navigation) */}
                <MDBCarouselItem itemId={2}>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol lg="4" className="d-flex justify-content-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="7" xl="8" className="text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                          <p className="mb-0 pb-3">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>

                {/* Slide 3 (Added for navigation) */}
                <MDBCarouselItem itemId={3}>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol lg="4" className="d-flex justify-content-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="man avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="7" xl="8" className="text-center text-lg-start mx-auto mx-lg-0">
                          <h4 className="mb-4">John Smith - Project Manager</h4>
                          <p className="mb-0 pb-3">
                            At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>

              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>

          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
          {/* End of Review Section */}

          {/* Contact us Section */}

          <section className="contact-section" id="contact">
              <div className="contact-container">
                  <div className="contact-form">
                      <h2><i className="fa fa-commenting-o"></i> Contact Us</h2>
                      <div className="form-box">
                          <form>
                              <label htmlFor="businessName">Business Name</label>
                              <input id="businessName" type="text" placeholder="🏢 e.g., Apex Solutions" required />
                              <label htmlFor="email">Email</label>
                              <input id="email" type="email" placeholder="✉️ you@example.com" required />
                              <label htmlFor="service">Which service are you interested in?</label>
                              <input id="service" type="text" placeholder="⚙️ e.g., Web Development" required />
                              <label htmlFor="message">Message</label>
                              <textarea id="message" rows="4" placeholder="💬 Tell us about your project..." required></textarea>
                              <button type="submit">
                                  Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
                              </button>
                          </form>
                      </div>
                  </div>

                 
                  <div className="contact-illustration">
                     
                      <img src={contact} alt="A person filling out a contact form" />
                  </div>
              </div>
          </section>

    </div>
  );
}
