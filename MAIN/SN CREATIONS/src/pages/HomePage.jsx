import React, { useState, useEffect } from "react";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png"; // ✅ new image
import img4 from "../assets/4.png"; // ✅ new image

// ✅ add them here
const images = [img1, img2, img3, img4];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg fixed-top bg-light px-5 py-3 shadow-sm">
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
          SN COLLECTIONS
        </a>

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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
              <ul
                className="dropdown-menu border-0 shadow-sm p-3"
                aria-labelledby="topsDropdown"
              >
                <h6 className="dropdown-header fw-bold text-uppercase text-muted">
                  Tops
                </h6>
                <li>
                  <a className="dropdown-item" href="#">
                    All Tops
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Long Sleeve Tops
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Short Sleeve Tops
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Crop Tops
                  </a>
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
              <ul
                className="dropdown-menu border-0 shadow-sm p-3"
                aria-labelledby="dressesDropdown"
              >
                <h6 className="dropdown-header fw-bold text-uppercase text-muted">
                  Dresses
                </h6>
                <li>
                  <a className="dropdown-item" href="#">
                    All Dresses
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mini Dresses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Midi Dresses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Maxi Dresses
                  </a>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item mx-3">
              <a className="nav-link text-dark fw-semibold" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== Fullscreen Hero Section ===== */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <p className="lead mt-3 mb-4 text-white-50">
            DRESSES • CROP TOPS • STYLE REDEFINED
          </p>
          <button className="btn btn-outline-light btn-lg px-5 rounded-0">
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
