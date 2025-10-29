import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import all dress images from assets
import DSC00660 from "../assets/DSC00660.jpg";
import DSC00687 from "../assets/DSC00687.jpg";
import DSC00727 from "../assets/DSC00727.jpg";
import DSC00735 from "../assets/DSC00735.jpg";

import DSC00230 from "../assets/DSC00230.jpg";
import DSC00264 from "../assets/DSC00264.jpg";
import DSC00280 from "../assets/DSC00280.jpg";
import DSC00284 from "../assets/DSC00284.jpg";

import DSC00312 from "../assets/DSC00312.jpg";
import DSC00347 from "../assets/DSC00347.jpg";
import DSC00369 from "../assets/DSC00369.jpg";
import DSC00376 from "../assets/DSC00376.jpg";

import DSC00399 from "../assets/DSC00399.jpg";
import DSC00430 from "../assets/DSC00430.jpg";
import DSC00447 from "../assets/DSC00447.jpg";
import DSC00456 from "../assets/DSC00456.jpg";
import DSC00458 from "../assets/DSC00458.jpg";

import DSC00597 from "../assets/DSC00597.jpg";
import DSC00628 from "../assets/DSC00628.jpg";
import DSC00645 from "../assets/DSC00645.jpg";
import DSC00652 from "../assets/DSC00652.jpg";

import DSC00823 from "../assets/DSC00823.jpg";
import DSC00832 from "../assets/DSC00832.jpg";
import DSC00845 from "../assets/DSC00845.jpg";
import DSC00849 from "../assets/DSC00849.jpg";
import DSC00854 from "../assets/DSC00854.jpg";

import DSC00473 from "../assets/DSC00473.jpg";
import DSC00502 from "../assets/DSC00502.jpg";
import DSC00535 from "../assets/DSC00535.jpg";
import DSC00553 from "../assets/DSC00553.jpg";

import DSC00871 from "../assets/DSC00871.jpg";
import DSC00883 from "../assets/DSC00883.jpg";
import DSC00913 from "../assets/DSC00913.jpg";
import DSC00921 from "../assets/DSC00921.jpg";

import DSC00946 from "../assets/DSC00946.jpg";
import DSC01045 from "../assets/DSC01045.jpg";
import DSC01058 from "../assets/DSC01058.jpg";
import DSC01071 from "../assets/DSC01071.jpg";
import DSC01075 from "../assets/DSC01075.jpg";

const DressesPage = () => {
  const miniDresses = [
    { name: "Cami Tiered Mini Dress", images: [DSC00660, DSC00687, DSC00727, DSC00735] },
    { name: "Twist Front Cami Dress", images: [DSC00230, DSC00264, DSC00280, DSC00284] },
    { name: "Sunset Tie Dye Dress", images: [DSC00312, DSC00347, DSC00369, DSC00376] },
  ];

  const midiDresses = [
    { name: "Elegant Floral V-Neck Midi Dress", images: [DSC00399, DSC00430, DSC00447, DSC00456, DSC00458] },
    { name: "Ocean Rhythm Midi Dress", images: [DSC00597, DSC00628, DSC00645, DSC00652] },
  ];

  const maxiDresses = [
    { name: "Women Bodycon Dress with Side Slit", images: [DSC00823, DSC00832, DSC00845, DSC00849, DSC00854] },
    { name: "Graceful Grow Maxi Dress", images: [DSC00473, DSC00502, DSC00535, DSC00553] },
    { name: "Casual White Long Dress", images: [DSC00871, DSC00883, DSC00913, DSC00921] },
    { name: "White Aura Dress", images: [DSC00946, DSC01045, DSC01058, DSC01071, DSC01075] },
  ];

  const renderDresses = (dresses, category) => (
    <section className="mb-5">
      <h3 className="text-center fw-bold text-uppercase mb-4" style={{ letterSpacing: "2px" }}>
        {category}
      </h3>
      <div className="row g-4 justify-content-center">
        {dresses.map((dress, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <DressCard dress={dress} index={`${category}-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{ backgroundColor: "#fafafa", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase" style={{ letterSpacing: "2px" }}>
          All Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Explore our stunning mini, midi, and maxi dresses — perfect for every moment.
        </p>
      </div>

      <div className="container">
        {renderDresses(miniDresses, "Mini Dresses")}
        {renderDresses(midiDresses, "Midi Dresses")}
        {renderDresses(maxiDresses, "Maxi Dresses")}
      </div>

      <div className="text-center mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} SN Collections — Grace in every dress.
      </div>
    </div>
  );
};

// ✅ Reusable Dress Card Component
const DressCard = ({ dress, index }) => (
  <div
    className="card border-0 shadow-sm h-100"
    style={{
      borderRadius: "16px",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      maxWidth: "360px",
    }}
  >
    <div
      id={`carousel-${index}`}
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        {dress.images.map((img, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img
              src={img}
              className="d-block w-100"
              alt={`${dress.name} ${i + 1}`}
              style={{
                height: "420px",
                objectFit: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${index}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${index}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="card-body text-center py-4">
      <h5 className="card-title fw-semibold mb-3 text-uppercase" style={{ fontSize: "1.1rem" }}>
        {dress.name}
      </h5>
      <button
        className="btn px-4 py-2 rounded-0 text-white"
        style={{
          backgroundColor: "#000",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
      >
        Buy Now
      </button>
    </div>
  </div>
);

export default DressesPage;
