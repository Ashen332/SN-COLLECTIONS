// src/pages/MaxiDressesPage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import images properly from assets
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

const MaxiDressesPage = () => {
  const maxiDresses = [
    {
      name: "Women Bodycon Dress with Side Slit",
      images: [DSC00823, DSC00832, DSC00845, DSC00849, DSC00854],
    },
    {
      name: "Graceful Grow Maxi Dress",
      images: [DSC00473, DSC00502, DSC00535, DSC00553],
    },
    {
      name: "Casual White Long Dress",
      images: [DSC00871, DSC00883, DSC00913, DSC00921],
    },
    {
      name: "White Aura Dress",
      images: [DSC00946, DSC01045, DSC01058, DSC01071, DSC01075],
    },
  ];

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{
        backgroundColor: "#fafafa",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* ✅ Title Section */}
      <div className="text-center mb-5">
        <h2
          className="fw-bold display-6 text-uppercase"
          style={{ letterSpacing: "2px" }}
        >
          Maxi Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Elegant and timeless — explore our maxi dresses perfect for any
          occasion.
        </p>
      </div>

      {/* ✅ Dress Cards Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {maxiDresses.map((dress, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
            >
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "360px",
                }}
              >
                {/* ✅ Carousel for each dress */}
                <div
                  id={`carouselMaxi${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="4000"
                >
                  <div className="carousel-inner">
                    {dress.images.map((img, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
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

                  {/* ✅ Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carouselMaxi${index}`}
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
                    data-bs-target={`#carouselMaxi${index}`}
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
                    className="card-title fw-semibold text-uppercase mb-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {dress.name}
                  </h5>
                  <button
                    className="btn px-4 py-2 rounded-0 text-white"
                    style={{
                      backgroundColor: "#000",
                      letterSpacing: "1px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#333")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#000")
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      <div
        className="text-center mt-5 text-muted"
        style={{ fontSize: "0.9rem" }}
      >
        © {new Date().getFullYear()} SN Collections — Elegance in Every Stitch.
      </div>
    </div>
  );
};

export default MaxiDressesPage;
