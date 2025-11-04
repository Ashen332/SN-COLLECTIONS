import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="brand-title">SN Collections</h2>
          <p className="brand-text">
            Timeless elegance crafted for every occasion. Discover the collection that defines style.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div>
            <h6>Shop</h6>
            <ul>
              <li><Link to="/dresses/mini">Mini Dresses</Link></li>
              <li><Link to="/dresses/midi">Midi Dresses</Link></li>
              <li><Link to="/dresses/maxi">Maxi Dresses</Link></li>
              <li><Link to="/tops/all">Tops</Link></li>
            </ul>
          </div>
          <div>
            <h6>Info</h6>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SN Collections. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
