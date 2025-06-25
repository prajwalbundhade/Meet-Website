import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-content">
          <h1>Contact <span className="gradient-text">Us</span></h1>
          <p className="contact-subtitle">Get in touch with our team for any questions or support</p>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>contact@creatorsforge.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fab fa-discord"></i>
              </div>
              <h3>Discord</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <DiscordCopy id="gatodev" />
                <DiscordCopy id="thunderzlucky" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

function DiscordCopy({ id }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <span
      onClick={handleCopy}
      style={{
        cursor: 'pointer',
        color: copied ? '#9c27b0' : '#fff',
        background: 'rgba(156,39,176,0.08)',
        borderRadius: '8px',
        padding: '6px 14px',
        fontWeight: 600,
        fontSize: '1.05rem',
        transition: 'all 0.2s',
        userSelect: 'all',
        border: copied ? '1px solid #9c27b0' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: copied ? '0 2px 8px rgba(156,39,176,0.15)' : 'none',
        marginBottom: '2px',
      }}
      title={copied ? 'Copied!' : 'Click to copy'}
    >
      {id} {copied && <span style={{fontSize:'0.95em',marginLeft:6}}>Copied!</span>}
    </span>
  );
}

export default Contact; 