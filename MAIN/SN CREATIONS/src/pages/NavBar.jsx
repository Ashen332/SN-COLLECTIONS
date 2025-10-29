import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light px-5 py-3 shadow-sm">
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
              <li><Link className="dropdown-item" to="/tops/all">All Tops</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/tops/long-sleeve">Long Sleeve Tops</Link></li>
              <li><Link className="dropdown-item" to="/tops/short-sleeve">Short Sleeve Tops</Link></li>
              <li><Link className="dropdown-item" to="/tops/crop">Crop Tops</Link></li>
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
              <li><Link className="dropdown-item" to="/dresses/all">All Dresses</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/dresses/mini">Mini Dresses</Link></li>
              <li><Link className="dropdown-item" to="/dresses/midi">Midi Dresses</Link></li>
              <li><Link className="dropdown-item" to="/dresses/maxi">Maxi Dresses</Link></li>
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
  );
};

export default Navbar;
