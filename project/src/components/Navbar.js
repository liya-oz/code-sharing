import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from '../images/logo.png'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <Link to="/" className="logo-link">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <li className="navbar-item">Sign Up</li>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <li className="navbar-item">Log In</li>
        </Link>
        <Link to="/pricing" style={{ textDecoration: "none" }}>
          <li className="navbar-item">Pricing</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
