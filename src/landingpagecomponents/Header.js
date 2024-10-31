import React from 'react';
import '../css/header.css';
import NavBar from './Navbar';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-content-left-column">
        <h1 className="header-title">Justice for [Case Name]</h1>
        <p className="header-description">
          This case needs your support. Together, we can bring attention to the injustice faced by [individual or group involved]. Access detailed case files, stay informed with the latest updates, and join us in making a difference.
        </p>
      </div>
      <div className="header-content-right-column">
        <iframe 
          className="header-video"
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/AjT4s-NH4ug?si=pBz7k5zeLtMZzFQB" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </header>
);

export default Header;
