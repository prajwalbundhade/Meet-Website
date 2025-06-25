import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Trusted by <span className="gradient-text">Content Creators</span></h2>
          <p className="section-subtitle">Hear what top YouTubers are saying about AmongCreators</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I've never had this much freedom in Among Us. They made me a full God Role system with animations and boss fights"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="John Doe" />
              <div className="author-info">
                <h4>Silvio Gamere</h4>
                {/* <p>CEO, TechCorp</p> */}
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"My mod idea went from concept to a playable version in under a week. My viewers loved it!"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Jane Smith" />
              <div className="author-info">
                <h4>Talcado</h4>
                {/* <p>CTO, InnovateX</p> */}
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"They recreated a YouTuber’s Among Us video perfectly for me — even the map details were accurate."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Mike Johnson" />
              <div className="author-info">
                <h4>Awita</h4>
                {/* <p>Operations Director, GrowthCo</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="stats-container">
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials; 