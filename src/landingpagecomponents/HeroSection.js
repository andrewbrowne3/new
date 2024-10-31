import React from 'react';
import '../css/herosection.css';

const HeroSection = () => (
  <section className="hero-section">
    <h1 className="hero-title">Justice for [Case Name]</h1>
    <p className="hero-subtitle">
      Help bring attention to [individual’s or group’s name] and their fight for justice. Access case details, discover supporting documents, and find out how you can contribute.
    </p>
    <button className="hero-button">Learn More</button>
  </section>
);

export default HeroSection;