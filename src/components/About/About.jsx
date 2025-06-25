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
          <div className="about-table-section">
            <h2 style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:'2rem',marginBottom:24}}>
              <span role="img" aria-label="values">🧱</span> Our Core Values – CreatorsForge
            </h2>
            <div className="about-table-wrapper">
              <table className="about-table">
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Creators First</b></td>
                    <td>Every feature, tool, and mod we build is designed with creators in mind — we scale <i>your</i> ideas.</td>
                  </tr>
                  <tr>
                    <td><b>Innovation</b></td>
                    <td>We experiment boldly and turn trending YouTube concepts into interactive, playable content.</td>
                  </tr>
                  <tr>
                    <td><b>Collaboration</b></td>
                    <td>We work closely with creators and devs to build mods that spark viral videos and lasting impact.</td>
                  </tr>
                  <tr>
                    <td><b>Trust & Transparency</b></td>
                    <td>We commit to clear pricing, timely deliveries, and open communication — every step of the way.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:'2rem',margin:'48px 0 24px'}}>
              <span role="img" aria-label="team">🧑‍💻</span> Meet the Team Behind CreatorsForge
            </h2>
            <div className="about-table-wrapper">
              <table className="about-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Thunderz Lucky</b></td>
                    <td>CEO & Founder</td>
                    <td>Visionary creator and builder of viral modding experiences. The mastermind behind CreatorsForge.</td>
                  </tr>
                  <tr>
                    <td><b>Gatodev</b></td>
                    <td>Lead Developer</td>
                    <td>Code wizard bringing Unreal Engine mods and YouTuber concepts to life with speed and polish.</td>
                  </tr>
                </tbody>
              </table>
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