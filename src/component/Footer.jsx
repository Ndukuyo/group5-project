import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Login from "../Pages/Login";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Column 1: About */}
        <div className="footer-section">
          <h3>M&S IT SOLUTIONS</h3>
          <p>Your one-stop shop for the latest gadgets and electronics. Quality guaranteed.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li> <NavLink to="/login" > Login  </NavLink> </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaPhone /> +254 700 000 000</p>
          <p><FaEnvelope /> info@group5.com</p>
          <p><FaMapMarkerAlt /> Nairobi, Kenya</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Group 5 Project.</p>
        <p>All rights reserved.</p>
        
        <p>#Ndukuyo</p>
         <p>#EUGENE</p>
        <p>#Hashtings</p>
        <p>#Rono</p>
      </div>
    </footer>
  );
}

export default Footer;