import React from 'react';
import './Home.css';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Build Your Own Among Us Experience Powered by
 <span className="gradient-text"> Unreal Engine.</span> Built for Modding
            </h1>
            <p className="hero-subtitle">
              We've rebuilt Among Us from the ground up in Unreal Engine — giving creators like you full freedom to request custom mods, maps, roles, and more.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">💡Request a Custom Mod</button>
              <button className="secondary-btn">
                <i className="fas fa-play"></i>
                Watch Game Preview
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h5>🛠 100+ Custom Mods Delivered</h5>
                <p>Roles, mechanics, and maps tailored to your vision</p>
              </div>
              <div className="stat">
                <h5>🎮 Among Us Reimagined</h5>
                <p>Unreal Engine build for unlimited possibilities</p>
              </div>
              <div className="stat">
                <h5>💬 Fast Delivery & Direct Support</h5>
                <p>From concept to playable in days</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="floating-cards">
          <div className="floating-card">
            <i className="fas fa-bolt"></i>
            <p>Lightning Fast</p>
          </div>
          <div className="floating-card">
            <i className="fas fa-shield-alt"></i>
            <p>Secure</p>
          </div>
        </div> */}
      </section>

      <Features />
      <Testimonials />
      {/* <Pricing /> */}
    </main>
  );
};

export default Home; 