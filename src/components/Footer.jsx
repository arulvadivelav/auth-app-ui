import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">Vasantham Nadar Matrimony</span>
            </div>
            <p>Finding your perfect life partner made simple, secure, and special.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">🔗</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📧 support@matchmate.com</p>
            <p>📞 +1 (800) 123-4567</p>
            <p>📍 123 Love Lane, NY 10001</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MatchMate. All rights reserved. Made with ❤️ for finding love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;