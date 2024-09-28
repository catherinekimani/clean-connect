import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-logo">CleanConnect</h1>
        <p className="footer-tagline">Your Laundry Partner</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 CleanConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
