import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import images from assets
import DSC00399 from "../assets/DSC00399.jpg";
import DSC00430 from "../assets/DSC00430.jpg";
import DSC00447 from "../assets/DSC00447.jpg";
import DSC00456 from "../assets/DSC00456.jpg";
import DSC00458 from "../assets/DSC00458.jpg";

import DSC00597 from "../assets/DSC00597.jpg";
import DSC00628 from "../assets/DSC00628.jpg";
import DSC00645 from "../assets/DSC00645.jpg";
import DSC00652 from "../assets/DSC00652.jpg";

const MidiDressesPage = () => {
  const midiDresses = [
    {
      name: "Elegant Floral V-Neck Midi Dress",
      images: [DSC00399, DSC00430, DSC00447, DSC00456, DSC00458],
    },
    {
      name: "Ocean Rhythm Midi Dress",
      images: [DSC00597, DSC00628, DSC00645, DSC00652],
    },
  ];

  return (
    <div
      className="container py-5 mt-5"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-center fw-bold mb-5 text-uppercase">
        Midi Dresses Collection
      </h2>

      <div className="row gy-5 justify-content-center">
        {midiDresses.map((dress, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center"
          >
            <div
              className="card shadow-sm border-0 h-100"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                maxWidth: "360px",
                backgroundColor: "#fff",
              }}
            >
              {/* ✅ Carousel */}
              <div
                id={`carouselMidi${index}`}
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
                          borderTopLeftRadius: "18px",
                          borderTopRightRadius: "18px",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* ✅ Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselMidi${index}`}
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
                  data-bs-target={`#carouselMidi${index}`}
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
                <h5 className="card-title fw-semibold text-uppercase mb-3">
                  {dress.name}
                </h5>
                <button
                  className="btn px-4 py-2 text-white rounded-0"
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
          </div>
        ))}
      </div>

      {/* ✅ Footer */}
      <div className="text-center mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} SN Collections — Elegance in Every Stitch.
      </div>
    </div>
  );
};

export default MidiDressesPage;
