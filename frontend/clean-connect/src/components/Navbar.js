import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

import HeroSection from "./HeroSection";

import ServicesSection from "./ServicesSection";

import WorkingProcessSection from "./WorkingProcessSection";

import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
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
      <HeroSection />
      <ServicesSection />
      <WorkingProcessSection />
      <Footer />
    </>
  );
};

export default Navbar;
