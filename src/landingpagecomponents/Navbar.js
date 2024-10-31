import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
      <nav className="header-nav">
        <ul className="nav-list">
        <li><Link className="header-nav-item" to="/">Home</Link></li>
      <li><Link className="header-nav-item" to="/case">Featured Case</Link></li>
          <li><a className="header-nav-item" href="#">Donation Page</a></li>
        </ul>
      </nav>
  );
};

export default NavBar;