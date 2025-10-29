import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import images (from your assets folder)
import DSC00123 from "../assets/DSC00123.jpg";
import DSC00140 from "../assets/DSC00140.jpg";
import DSC00151 from "../assets/DSC00151.jpg";
import DSC00159 from "../assets/DSC00159.jpg";
import DSC00187 from "../assets/DSC00187.jpg";
import DSC00203 from "../assets/DSC00203.jpg";
import DSC00206 from "../assets/DSC00206.jpg";
import DSC00228 from "../assets/DSC00228.jpg";

const LongSleeveTopsPage = () => {
  const longSleeveTops = [
    {
      name: "Knot Tie Crop Top",
      images: [DSC00123, DSC00140, DSC00151, DSC00159],
    },
    {
      name: "Summer Belly Sleeve",
      images: [DSC00187, DSC00203, DSC00206, DSC00228],
    },
  ];

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{ backgroundColor: "#fafafa", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase" style={{ letterSpacing: "2px" }}>
          Long Sleeve Tops
        </h2>
        <p className="text-muted mb-0">
          Explore our beautiful collection of elegant long-sleeve tops designed for any occasion.
        </p>
      </div>

      <div className="container">
        {/* ✅ Centered layout for 2 items */}
        <div className="row g-4 justify-content-center">
          {longSleeveTops.map((top, index) => (
            <div key={index} className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center">
              <ProductCard top={top} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} SN Collections — Crafted with elegance.
      </div>
    </div>
  );
};

// ✅ Reusable Product Card Component
const ProductCard = ({ top, index }) => (
  <div
    className="card border-0 shadow-sm h-100"
    style={{
      borderRadius: "16px",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      maxWidth: "380px",
    }}
  >
    <div
      id={`carousel-${index}`}
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        {top.images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`${top.name} ${imgIndex + 1}`}
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

      {/* ✅ Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${index}`}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark rounded-circle p-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${index}`}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark rounded-circle p-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* ✅ Card Body */}
    <div className="card-body text-center py-4">
      <h5
        className="card-title fw-semibold mb-3 text-uppercase"
        style={{ fontSize: "1.1rem" }}
      >
        {top.name}
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

export default LongSleeveTopsPage;
