import React from 'react';
import { features } from '../data/features';
import '../styles/components/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>What makes MatchMate your trusted partner in finding love</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;