import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import images
import DSC09965 from "../assets/DSC09965.jpg";
import DSC09972 from "../assets/DSC09972.jpg";
import DSC09982 from "../assets/DSC09982.jpg";
import DSC09988 from "../assets/DSC09988.jpg";

const ShortSleeveTopsPage = () => {
  const navigate = useNavigate();

  // ✅ Product data
  const shortSleeveTops = [
    {
      name: "Shoulder Black Crop Top",
            price: "1,350",
            images: [DSC09965, DSC09972, DSC09982, DSC09988],
            colors: "Black,Blue",
            material: "Polyester",
            size: "UK10",
            height: "5'6\"",
    },
  ];

  // ✅ Navigate to product details
  const handleProductClick = (top) => {
    navigate("/product-details", { state: { product: top } });
  };

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{ backgroundColor: "#fafafa", fontFamily: "Poppins, sans-serif" }}
    >
      {/* ✅ Header */}
      <div className="text-center mb-5">
        <h2
          className="fw-bold display-6 text-uppercase"
          style={{ letterSpacing: "2px" }}
        >
          Short Sleeve Tops
        </h2>
        <p className="text-muted mb-0">
          Chic and trendy short sleeve tops designed for everyday elegance.
        </p>
      </div>

      {/* ✅ Product Section */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {shortSleeveTops.map((top, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              onClick={() => handleProductClick(top)}
              style={{ cursor: "pointer" }}
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
                <div
                  id={`carousel-${index}`}
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-inner">
                    {top.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${
                          imgIndex === 0 ? "active" : ""
                        }`}
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
                            backgroundColor: "#fff",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ Card Body */}
                <div className="card-body text-center py-4">
                  <h5
                    className="card-title fw-semibold mb-2 text-uppercase"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {top.name}
                  </h5>
                  <p className="price-text mb-3">LKR {top.price}</p>
                  
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
        © {new Date().getFullYear()} SN Collections — Crafted with elegance.
      </div>
    </div>
  );
};

export default ShortSleeveTopsPage;
