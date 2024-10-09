import React from "react";
import "../styles/aboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid"
            alt="DaynDry Logo"
          />{" "}
          <h1>Clean Connect</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/pickup">Laundry Pickup</a>
          </li>
        </ul>
        <a href="/register" className="schedule-button">
          Schedule a Service
        </a>
        <div className="mobile-menu-icon">
          <i className="fas fa-bars"></i>{" "}
        </div>
      </nav>
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Your trusted partner in keeping your clothes fresh and clean!</p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional laundry services that save you time and keep
            your wardrobe looking its best.
          </p>
        </div>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            To be the leading laundry service provider in the community,
            recognized for our quality, efficiency, and sustainability.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Laundry Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
