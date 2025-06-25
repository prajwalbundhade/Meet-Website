import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About <span className="gradient-text">Us</span></h1>
            <p className="hero-subtitle">
              CreatorsForge is the business-focused hub behind top-tier modding services for creators.

From Among Us in Unreal Engine to future expansions into Minecraft and GTA V, we help YouTubers bring their wildest gameplay ideas to life — with zero technical hassle.

Built by a team that understands both creatorsand code
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="about-values-team-grid">
            <h2 className="about-section-title"><span role="img" aria-label="values">🧱</span> Our Core Values – CreatorsForge</h2>
            <div className="values-card-grid">
              <div className="value-card-ui">
                <div className="value-icon-ui" style={{background:'#2d1a3a'}}><span role="img" aria-label="Creators First">🧑‍🎨</span></div>
                <h3>Creators First</h3>
                <p>Every feature, tool, and mod we build is designed with creators in mind — we scale <i>your</i> ideas.</p>
              </div>
              <div className="value-card-ui">
                <div className="value-icon-ui" style={{background:'#1a233a'}}><span role="img" aria-label="Innovation">🚀</span></div>
                <h3>Innovation</h3>
                <p>We experiment boldly and turn trending YouTube concepts into interactive, playable content.</p>
              </div>
              <div className="value-card-ui">
                <div className="value-icon-ui" style={{background:'#1a3a2d'}}><span role="img" aria-label="Collaboration">🤝</span></div>
                <h3>Collaboration</h3>
                <p>We work closely with creators and devs to build mods that spark viral videos and lasting impact.</p>
              </div>
              <div className="value-card-ui">
                <div className="value-icon-ui" style={{background:'#3a1a1a'}}><span role="img" aria-label="Trust & Transparency">🔍</span></div>
                <h3>Trust & Transparency</h3>
                <p>We commit to clear pricing, timely deliveries, and open communication — every step of the way.</p>
              </div>
            </div>

            <h2 className="about-section-title" style={{marginTop:48}}><span role="img" aria-label="team">🧑‍💻</span> Meet the Team Behind CreatorsForge</h2>
            <div className="team-card-grid">
              <div className="team-card-ui">
                <div className="team-avatar-ui" style={{background:'#2d1a3a'}}>
                  <span role="img" aria-label="Thunderz Lucky">🦸‍♂️</span>
                </div>
                <div className="team-info-ui">
                  <h3>Thunderz Lucky</h3>
                  <p className="team-role-ui">CEO & Founder</p>
                  <p className="team-desc-ui">Visionary creator and builder of viral modding experiences. The mastermind behind CreatorsForge.</p>
                </div>
              </div>
              <div className="team-card-ui">
                <div className="team-avatar-ui" style={{background:'#1a233a'}}>
                  <span role="img" aria-label="Gatodev">🐱</span>
                </div>
                <div className="team-info-ui">
                  <h3>Gatodev</h3>
                  <p className="team-role-ui">Lead Developer</p>
                  <p className="team-desc-ui">Code wizard bringing Unreal Engine mods and YouTuber concepts to life with speed and polish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>Be part of our mission to transform how teams work together</p>
            <Link to="/contact">
            <button className="cta-button">Get Started Free</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About; 