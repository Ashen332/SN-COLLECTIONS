import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const images = [img1, img2, img3, img4];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* ===== Navbar ===== */}
      <nav
        className={`navbar navbar-expand-lg fixed-top px-5 py-3 ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">
          SN COLLECTIONS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Tops Dropdown */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle text-dark fw-semibold"
                href="#"
                id="topsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TOPS
              </a>
              <ul className="dropdown-menu border-0 shadow-sm p-3" aria-labelledby="topsDropdown">
                <h6 className="dropdown-header fw-bold text-uppercase text-muted">Tops</h6>
                <li>
                  <Link className="dropdown-item" to="/tops/all">
                    All Tops
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/tops/long-sleeve">
                    Long Sleeve Tops
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tops/short-sleeve">
                    Short Sleeve Tops
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tops/crop">
                    Crop Tops
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dresses Dropdown */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle text-dark fw-semibold"
                href="#"
                id="dressesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DRESSES
              </a>
              <ul className="dropdown-menu border-0 shadow-sm p-3" aria-labelledby="dressesDropdown">
                <h6 className="dropdown-header fw-bold text-uppercase text-muted">Dresses</h6>
                <li>
                  <Link className="dropdown-item" to="/dresses/all">
                    All Dresses
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/dresses/mini">
                    Mini Dresses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dresses/midi">
                    Midi Dresses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dresses/maxi">
                    Maxi Dresses
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item mx-3">
              <Link className="nav-link text-dark fw-semibold" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3 text-uppercase">Style Redefined</h1>
          <p className="lead text-white-50 mb-4">
            Discover timeless elegance — dresses, crop tops, and more.
          </p>
          <Link to="/tops/all" className="btn btn-outline-light btn-lg px-5 rounded-0">
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
