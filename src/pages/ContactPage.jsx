import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’re here to help. Reach out to us anytime.
      </p>

      <div className="contact-grid">

        {/* Call */}
        <a href="tel:+919876543210" className="contact-card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Chat with us instantly</p>
        </a>

        {/* Email */}
        <a href="mailto:support@vasantham.com" className="contact-card">
          <div className="icon">📧</div>
          <h3>Email</h3>
          <p>support@vasantham.com</p>
        </a>

        {/* Location */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon">📍</div>
          <h3>Location</h3>
          <p>Coimbatore, Tamil Nadu</p>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon">📘</div>
          <h3>Facebook</h3>
          <p>Follow us</p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon">📸</div>
          <h3>Instagram</h3>
          <p>@vasantham</p>
        </a>

      </div>
    </div>
  );
};

export default ContactPage;