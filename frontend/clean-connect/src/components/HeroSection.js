import React from "react";
import "../styles/heroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Dirty Wash Cleaning & Laundry Services</h1>
          <p className="hero-description">
            Get up to <span className="highlight-text">25% off</span> on your
            first order. Let us take care of your laundry while you focus on
            what really matters.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
