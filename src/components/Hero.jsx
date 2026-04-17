import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your <span className="highlight">Perfect</span> Life Partner
          </h1>
          <p className="hero-description">
            Join thousands of happy couples who found their soulmate through MatchMate. 
            Start your journey to finding true love today.
          </p>
          <button className="btn-primary btn-large">Get Started →</button>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <div className="floating-heart heart-1">❤️</div>
            <div className="floating-heart heart-2">💕</div>
            <div className="floating-heart heart-3">💖</div>
            <div className="couple-illustration">👩‍❤️‍👨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;