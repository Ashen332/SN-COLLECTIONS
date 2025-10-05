import React from "react";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-black-50 px-5 py-3">
        <a className="navbar-brand fw-bold fs-3 text-black" href="#">
          SN COLLECTIONS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link text-black-50" href="#">
                DRESSES
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-black-50" href="#">
                CROP TOPS
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-black-50" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Fullscreen Hero */}
      <section className="hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="display-2 fw-bold">SN COLLECTIONS</h1>
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
