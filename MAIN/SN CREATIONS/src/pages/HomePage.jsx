import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./NavBar";

// Hero images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

// Category images (representative)
import mini1 from "../assets/DSC00660.jpg";
import midi1 from "../assets/DSC00399.jpg";
import maxi1 from "../assets/DSC00823.jpg";
import top1 from "../assets/DSC00123.jpg";

// Featured product images (selected from dresses/tops)
import feat1 from "../assets/DSC00727.jpg"; // Mini Dress
import feat2 from "../assets/DSC00652.jpg"; // Midi Dress
import feat3 from "../assets/DSC00535.jpg"; // Maxi Dress
import feat4 from "../assets/DSC00206.jpg"; // Top


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
    <div style={{ backgroundColor: "#fff", fontFamily: "Poppins, sans-serif" }}>
      {/* ===== Navbar ===== */}
      <nav
        className={`navbar navbar-expand-lg fixed-top px-5 py-3 ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
       <NavBar/>
      </nav>

      {/* ===== Hero Section ===== */}
     {/* ===== Hero Section ===== */}
<section
  className="hero d-flex align-items-center justify-content-center text-center"
  style={{
    height: "90vh",
    minHeight: "650px",
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
    position: "relative",
  }}
>
  {/* Optional overlay for better text visibility */}
  <div
    className="overlay"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.35)",
    }}
  ></div>

  <div
    className="hero-content text-white"
    style={{
      position: "relative",
      zIndex: 2,
      padding: "0 20px",
      maxWidth: "900px",
    }}
  >
    <h1
      className="display-4 fw-bold mb-3 text-uppercase"
      style={{
        letterSpacing: "5px",
        lineHeight: "1.2",
      }}
    >
      Style Redefined
    </h1>
    <p
      className="lead mb-4 text-white-50"
      style={{ fontSize: "1.25rem", lineHeight: "1.5" }}
    >
      Discover timeless elegance — dresses, crop tops, and more.
    </p>
    <Link
      to="/tops/all"
      className="btn btn-outline-light btn-lg px-5 py-3 rounded-0"
      style={{
        fontSize: "1rem",
        letterSpacing: "1px",
      }}
    >
      SHOP NOW
    </Link>
  </div>
</section>


      {/* ===== Shop by Category ===== */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ letterSpacing: "2px" }}>Shop by Category</h2>
          <p className="text-muted">Find your style in our curated collections</p>
        </div>
        <div className="row g-4 justify-content-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <Link to={cat.link} className="text-decoration-none w-100">
                <div className="card shadow-sm border-0 hover-lift w-100" style={{ borderRadius: "16px", overflow: "hidden" }}>
                  <img
                    src={cat.image}
                    className="card-img-top"
                    alt={cat.name}
                    style={{ height: "300px", objectFit: "contain", backgroundColor: "#fff", padding: "10px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold text-dark text-uppercase" style={{ letterSpacing: "1px" }}>
                      {cat.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ letterSpacing: "2px" }}>Featured Products</h2>
          <p className="text-muted">Handpicked items for you</p>
        </div>
        <div className="row g-4 justify-content-center">
          {featuredProducts.map((prod, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <Link to={prod.link} className="text-decoration-none w-100">
                <div className="card shadow-sm border-0 hover-lift w-100" style={{ borderRadius: "16px", overflow: "hidden" }}>
                  <img
                    src={prod.image}
                    className="card-img-top"
                    alt={prod.name}
                    style={{ height: "300px", objectFit: "contain", backgroundColor: "#fff", padding: "10px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold text-dark text-uppercase" style={{ letterSpacing: "1px" }}>
                      {prod.name}
                    </h5>
                    
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      {/* ===== Footer ===== */}

    </div>
  );
};

export default HomePage;
