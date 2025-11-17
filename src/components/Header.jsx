import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="navbar-brand">
          <h1 className="brand-name">Elite Nest</h1>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home</Link>
          <a href="#properties" className="nav-link">Properties</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#about" className="nav-link">About Us</a>
        </div>
      </div>

      <div className="nav-right">
        <button className="btn-sell-property" onClick={() => navigate('/sell')}>+ Sell Property</button>
        <Link to="/login" className="btn-login-nav">Login</Link>
        <Link to="/register" className="btn-register">Sign Up</Link>
      </div>
    </nav>
  );
}
