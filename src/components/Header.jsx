import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../styles/components/Header.css';
import logo from "../assets/logo/new-logo.png";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header-container">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Vasantham Nadar Matrimony</span>
        </div>

        {/* Nav */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>

          <div className="nav-buttons">
            <button className="btn-outline" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn-primary" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Header;