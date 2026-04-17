import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/components/Header.css';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">💕</span>
          <span className="logo-text">MatchMate</span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <Link to="#">Home</Link>
            <Link to="#">Profiles</Link>
            <Link to="#">About</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="#">Contact</Link>
          </ul>
          <div className="nav-buttons">
            <button className="btn-outline" onClick={() => navigate("/login")}>Login</button>
            <button className="btn-primary" onClick={() => navigate("/register")}>Register</button>
          </div>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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