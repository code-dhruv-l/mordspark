import React from 'react'
import './components.css'
import whitelogo from './Image/whitelogo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    <footer className="footer">
  <div className="footer-container">

    {/* Logo Section */}
    <div className="footer-section">
      <a href="/home">
        <img src={whitelogo} alt="Logo" className="footer-logo" />
      </a>
    </div>
  
  
    <div className="footer-section">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        Email: <a href="mailto:mordspark@gmail.com">mordspark@gmail.com</a>
      </p>
      <p>
        <i className="fa fa-phone" aria-hidden="true"></i>
        Phone: (+91) 00000 00000
      </p>
      <p>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        Location: Pune, India
      </p>
    </div>

    {/* Services */}
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Mobile App Development</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Software Solutions</a></li>
        <li><a href="#">Cloud & DevOps</a></li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-links">
        {/* Notice the 'fa-brands' class on each icon */}
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>© 2025 MordSpark. All rights reserved.</p>
  </div>
</footer>
    </div>

  )
}
