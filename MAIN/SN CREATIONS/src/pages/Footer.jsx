import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-start">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-brand mb-3">SN Collections</h3>
            <p className="footer-desc">
              Effortless elegance, crafted to perfection. Discover the
              collection that defines your style — designed for every occasion.
            </p>
          </div>

          {/* Shop Links */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="footer-heading">Shop</h6>
            <ul className="list-unstyled">
              <li><Link to="/dresses/mini">Mini Dresses</Link></li>
              <li><Link to="/dresses/midi">Midi Dresses</Link></li>
              <li><Link to="/dresses/maxi">Maxi Dresses</Link></li>
              <li><Link to="/tops/all">Tops</Link></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <h6 className="footer-heading">Info</h6>
            <ul className="list-unstyled">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-lg-3 col-md-12">
            <h6 className="footer-heading">Follow Us</h6>
            <div className="social-icons mt-2">
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Tiktok"><i className="bi bi-tiktok"></i></a>
              <a href="#" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="footer-divider my-4" />
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} SN Collections. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
