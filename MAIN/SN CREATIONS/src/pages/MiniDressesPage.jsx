import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import images from assets folder
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

const MiniDressesPage = () => {
  const miniDresses = [
    {
      name: "Cami Tiered Mini Dress",
      images: [DSC00660, DSC00687, DSC00727, DSC00735],
    },
    {
      name: "Twist Front Cami Dress",
      images: [DSC00230, DSC00264, DSC00280, DSC00284],
    },
    {
      name: "Sunset Tie Dye Dress",
      images: [DSC00312, DSC00347, DSC00369, DSC00376],
    },
  ];

  return (
    <div
      className="container py-5 mt-5"
      style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#fafafa" }}
    >
      <h2 className="text-center fw-bold mb-5 text-uppercase">
        Mini Dresses Collection
      </h2>

      <div className="row justify-content-center">
        {miniDresses.map((dress, index) => (
          <div key={index} className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
            <div
              className="card shadow-sm border-0"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                maxWidth: "360px",
              }}
            >
              {/* ✅ Carousel for each dress */}
              <div
                id={`carouselMini${index}`}
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

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselMini${index}`}
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
                  data-bs-target={`#carouselMini${index}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-dark rounded-circle p-2"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="card-body text-center py-4">
                <h5 className="card-title fw-semibold text-uppercase">
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

      <div className="text-center mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} SN Collections — Elegance in Every Stitch.
      </div>
    </div>
  );
};

export default MiniDressesPage;
