import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const AboutUs = () => {
  const handleSearch = (filters) => {
    console.log('Searching with filters:', filters);
    alert(`Searching for: ${filters.keyword || 'all profiles'} with filters applied!`);
  };

  return (
    <div className="homepage">
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutUs;