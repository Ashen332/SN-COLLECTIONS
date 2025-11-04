import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="sn-footer">
      <div className="sn-footer-container">
        {/* Brand */}
        <div className="sn-footer-brand">
          <h2 className="sn-footer-logo">SN COLLECTIONS</h2>
          <p>
            Timeless elegance crafted for every occasion.<br />
            Discover the collection that defines style.
          </p>
        </div>

        {/* Links */}
        <div className="sn-footer-links">
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

        {/* Social */}
        <div className="sn-footer-social">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="sn-footer-bottom">
        <p>© {new Date().getFullYear()} SN Collections — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
