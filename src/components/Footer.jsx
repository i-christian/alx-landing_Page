import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide the button based on scroll position
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
          <h2>About Our Project</h2>
          <p>Our project aims to revolutionize...</p>
          <p>Developed as part of the Portfolio Project at Holberton School.</p>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" className="fade-in-up">LinkedIn</a>
            <a href="#" className="fade-in-up">GitHub</a>
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
