import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* 🔹 NAVBAR */}
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
          <Link to="/login" className="btn-login-nav">Login</Link>
          <Link to="/register" className="btn-register">Sign Up</Link>
        </div>
      </nav>

      {/* 🔹 HERO SECTION */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Find Your Perfect Home</h1>
          <p>Rent beautiful houses, apartments and rooms at the best prices.</p>

          {/* 🔹 SEARCH BAR */}
          <div className="search-box">
            <input type="text" placeholder="Location" />
            <select>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Independent House</option>
              <option>PG / Rooms</option>
            </select>
            <select>
              <option>Price Range</option>
              <option>₹5,000 - ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹30,000</option>
              <option>Above ₹30,000</option>
            </select>
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* 🔹 FEATURED PROPERTIES */}
      <section className="featured-section">
        <h2>Featured Properties</h2>

        <div className="property-grid">

          {/* CARD 1 */}
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
              alt="Property"
            />
            <h3>Modern Apartment</h3>
            <p>2 BHK • ₹18,000/month • Mumbai</p>
            <p className="contact-info">📞 +91-9876543210</p>
            <button>View Details</button>
          </div>

          {/* CARD 2 */}
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
              alt="Property"
            />
            <h3>Luxury Villa</h3>
            <p>4 BHK • ₹45,000/month • Bangalore</p>
            <p className="contact-info">📞 +91-9876543211</p>
            <button>View Details</button>
          </div>

          {/* CARD 3 */}
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Property"
            />
            <h3>Independent House</h3>
            <p>3 BHK • ₹28,000/month • Hyderabad</p>
            <p className="contact-info">📞 +91-9876543212</p>
            <button>View Details</button>
          </div>

        </div>
      </section>

      {/* 🔹 CONTACT SECTION */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info-box">
            <h3>📍 Address</h3>
            <p>Elite Nest Headquarters<br/>123 Property Street<br/>Mumbai, India - 400001</p>
          </div>
          <div className="contact-info-box">
            <h3>📞 Phone</h3>
            <p>+91-1234567890<br/>+91-9876543210<br/>Mon - Fri: 9AM - 6PM</p>
          </div>
          <div className="contact-info-box">
            <h3>📧 Email</h3>
            <p>support@elitenest.com<br/>info@elitenest.com<br/>sales@elitenest.com</p>
          </div>
          <div className="contact-info-box">
            <h3>⏰ Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
          </div>
        </div>
      </section>

    </div>
  );
}