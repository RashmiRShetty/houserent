import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <div style={styles.container}>
      <div className="reg-overlay"></div>
      <header className="reg-header">
        <Link to="/home" className="brand-link-inline">
          <h1 className="brand-name">Elite Nest</h1>
        </Link>
        <div className="reg-links">
          <Link to="/home" className="reg-link">Home</Link>
          <Link to="/home#contact" className="reg-link">Contact</Link>
          <Link to="/home#about" className="reg-link">About Us</Link>
        </div>
      </header>

      <div style={styles.box}>
        <h2 style={styles.title}>Registration</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>Register</button>

          <p style={styles.p}>
            If you already have an account, please {" "}
            <Link to="/login" style={{ color: "#60a5fa" }}>login here</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    // keep the same background image (no change to image URL)
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    
  },
  brandLink: {
    position: "absolute",
    top: 20,
    left: 24,
    textDecoration: "none",
    zIndex: 3,
  },

  p: {
    color: "#fff",
  },

  box: {
    width: "100%",
    maxWidth: "450px",
    background: "#4742428f",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(247, 240, 240, 0.97)",
    backdropFilter: "blur(4px)",
    zIndex: 2,
  },

  title: {
    textAlign: "center",
    color: "#dee6ddff",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #f8f0f0ff",
    fontSize: "16px",
  },

  button: {
    marginTop: "15px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};