import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Powerful Features for Modern Teams</h2>
          <p className="section-subtitle">
            Everything you need to build, collaborate, and scale your business
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Powerful Features for YouTube Creators</h3>
            <p>Everything you need to build viral Among Us content with zero limits.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Optimized for YouTube</h3>
            <p>Get custom roles, mods, and game mechanics built to generate reactions and boost retention.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3> Secure & Exclusive</h3>
            <p>Your modded builds are private and custom — never reused, never resold.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Live Update Support</h3>
            <p>Need fast changes before a recording? We offer real-time update options during development windows.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3> YT-Focused Insights</h3>
            <p>We help track what mods viewers love most and suggest remakes of trending ideas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>PC-Only, High Performance</h3>
            <p>Built for desktop, fully optimized for stable, lag-free gameplay and fast launching.</p>
          </div>
        </div>

        <div className="features-cta">
          <h3>🎮 Ready to Get Your Own Among Us Mod?</h3>
          <p>Join 100+ YouTubers already using our custom-built Unreal Engine version to create viral content.</p>
          <button className="cta-button">Request a Custom Build</button>
        </div>
      </div>
    </section>
  );
};

export default Features; 