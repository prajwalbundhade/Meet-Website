import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-custom-content">
        <p className="footer-copyright">© CreatorsForge.com | All rights reserved.</p>
        <p className="footer-disclaimer">
          CreatorsForge.com is not affiliated with Mojang Studios, Minecraft, Innersloth, Among US or any official game developers.<br/>
          All mods are custom-made and sold exclusively to content creators to enhance gameplay.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 