import React from 'react';
import { testimonials } from '../data/testimonials';
import '../styles/components/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Hear from our happy couples who found love</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">{testimonial.image}</div>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-location">📍 {testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;