import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.onscroll = function() { scrollFunction() };

  const scrollFunction = () => {
    const btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  return (
    <footer id="about" className="fade-in-up">
      <div className="max-container">
        <div className="footer-column">
          <h2>About</h2>
          <p>PixelEscape is a classic raycasting 3D gaming project that seeks to add nostalgia to the gaming experience. Our mission is to provide players with a captivating and immersive journey through innovative features and engaging gameplay.</p>
          <p>Developed as part of the Portfolio Project at Holberton School, PixelEscape represents our commitment to pushing the boundaries of creativity and technical excellence in the world of game development.</p>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/i-christian/" className="fade-in-up"><FaLinkedin /></a>
            <a href="https://github.com/i-christian/" className="fade-in-up"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mkajiwonele/" className="fade-in-up"><FaLinkedin /></a>
            <a href="https://github.com/honorifia/" className="fade-in-up"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} PixelEscape. All rights reserved.</p>
        <button id="back-to-top-btn" onClick={scrollToTop} className="fade-in-up">Back to Top</button>
      </div>
    </footer>
  );
}

export default Footer;
