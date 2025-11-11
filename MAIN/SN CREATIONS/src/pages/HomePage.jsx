import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./NavBar";

// Hero images
import img1 from "../optimized/1.webp";
import img2 from "../optimized/2.webp";
import img3 from "../optimized/3.webp";
import img4 from "../optimized/4.webp";

// Category images
import mini1 from "../optimized/DSC00660.webp";
import midi1 from "../optimized/DSC00399.webp";
import maxi1 from "../optimized/DSC00823.webp";
import top1 from "../optimized/DSC00123.webp";

// Featured product images
import feat1 from "../optimized/DSC00727.webp";
import feat2 from "../optimized/DSC00652.webp";
import feat3 from "../optimized/DSC00535.webp";
import feat4 from "../optimized/DSC00206.webp";

const images = [img1, img2, img3, img4];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Mini Dresses", image: mini1, link: "/dresses/mini" },
    { name: "Midi Dresses", image: midi1, link: "/dresses/midi" },
    { name: "Maxi Dresses", image: maxi1, link: "/dresses/maxi" },
    { name: "Tops", image: top1, link: "/tops/all" },
  ];

  const featuredProducts = [
    { name: "Cami Tiered Mini Dress", image: feat1, link: "/dresses/mini" },
    { name: "Ocean Rhythm Midi Dress", image: feat2, link: "/dresses/midi" },
    { name: "Graceful Grow Maxi Dress", image: feat3, link: "/dresses/maxi" },
    { name: "Summer Belly Sleeve Top", image: feat4, link: "/tops/all" },
  ];

  return (
    <div className="homepage-wrapper">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top px-5 py-3 ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <NavBar />
      </nav>

      {/* Hero Section */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content text-white">
          <h1 className="display-4 fw-bold text-uppercase">Style Redefined</h1>
          <p className="lead mb-4 text-white-50">
            Discover timeless elegance — dresses, crop tops, and more.
          </p>
          <Link to="/tops/all" className="btn btn-outline-light btn-lg">
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">
            Shop by Category
          </h2>
          <p className="text-muted">Find your style in our curated collections</p>
        </div>
        <div className="row g-4 justify-content-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <Link to={cat.link} className="text-decoration-none w-100">
                <div className="card product-card border-0 shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="card-img-top category-img"
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-semibold text-dark text-uppercase mb-0">
                      {cat.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">
            Featured Products
          </h2>
          <p className="text-muted">Handpicked items for you</p>
        </div>
        <div className="row g-4 justify-content-center">
          {featuredProducts.map((prod, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <Link to={prod.link} className="text-decoration-none w-100">
                <div className="card product-card border-0 shadow-sm">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="card-img-top category-img"
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-semibold text-dark text-uppercase mb-0">
                      {prod.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
