// Header.js
// Bhuvaneshwari Sivasangaran - 8882803
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // Header Component
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/timer" className="nav-link" activeclassname="active">Timer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
