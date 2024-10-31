import React from 'react';
import '../css/simpleheader.css';

const SimpleHeader = () => (
  <header className="simple-header">
    <div className="simple-header-content">
      <h1 className="header-title">Featured Case: [Case Name]</h1>
      <p className="header-description">Detailed information and resources for [Case Name]</p>
    </div>
  </header>
);

export default SimpleHeader;
