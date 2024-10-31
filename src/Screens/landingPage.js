import React from 'react';
import Header from '../landingpagecomponents/Header.js';
import HeroSection from '../landingpagecomponents/HeroSection.js';
import FeaturesSection from '../landingpagecomponents/FeaturesSection.js';
import CallToAction from '../landingpagecomponents/CallToAction.js';
import Footer from '../landingpagecomponents/Footer.js';
import NavBar from '../landingpagecomponents/Navbar.js';

const LandingPage = () => (
    <div className="landing-page">
    <NavBar />

      <Header />
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
  
  export default LandingPage;
  
