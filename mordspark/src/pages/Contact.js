import React, { useState } from 'react';
import './Contact.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      <section className="contact-hero">
        <div className="container" style={{ marginTop: '40px' }}> 
          <h1>Get In <span className="highlight-yellow">Touch</span>.</h1>
          <p className="subtitle">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>
    
      <section className="contact-content-section">
        <div className="container contact-grid">
          <div className="contact-form-container">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-details-container">
            <h2>Contact Information</h2>
            <p>Feel free to reach out via email or phone, or drop by our office for a coffee.</p>
            <ul className="contact-details-list">
              <li>
                <MdEmail className="contact-icon" /> contact@moodspark.com
              </li>
              <li>
                <MdPhone className="contact-icon" /> +91 12345 67890
              </li>
              <li>
                <MdLocationOn className="contact-icon" /> Pune, Maharashtra, India
              </li>
            </ul>
            <div className="contact-illustration">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;