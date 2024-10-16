// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Find a Job</a></li>
        <li><a href="#">Recruiters</a></li>
        <li><a href="#">Candidates</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="#" className="register-link">Register</a>
        <a href="#" className="signin-btn">Sign in</a>
      </div>
    </nav>
  );
};

export default Navbar;
