import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // ✅ use same modern black-white styling

// ✅ Import images
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
  const navigate = useNavigate();

  const allDresses = [
    {
      name: "Cami Tiered Mini Dress",
      price: "2,350",
      images: [DSC00660, DSC00687, DSC00727, DSC00735],
      colors: "White",
      material: "Cotton Blend",
      size: "UK10",
      height: "5'7\"",
    },
    {
      name: "Twist Front Cami Dress",
      price: "1,990",
      images: [DSC00230, DSC00264, DSC00280, DSC00284],
      colors: "Beige",
      material: "Polyester",
      size: "UK10",
      height: "5'7\"",
    },
    {
      name: "Sunset Tie Dye Dress",
      price: "2,100",
      images: [DSC00312, DSC00347, DSC00369, DSC00376],
      colors: "White",
      material: "Viscose Rayon",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "Elegant Floral V-Neck Midi Dress",
      price: "3,990",
      images: [DSC00399, DSC00430, DSC00447, DSC00456, DSC00458],
      colors: "Floral",
      material: "Cotton Blend",
      size: "UK10",
      height: "5'7\"",
    },
    {
      name: "Ocean Rhythm Midi Dress",
      price: "4,200",
      images: [DSC00597, DSC00628, DSC00645, DSC00652],
      colors: "Blue",
      material: "Waffle Knit",
      size: "UK10",
      height: "5'5\"",
    },
    {
      name: "Graceful Grow Maxi Dress",
      price: "5,600",
      images: [DSC00473, DSC00502, DSC00535, DSC00553],
      colors: "Green",
      material: "Cupro",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "Casual White Long Dress",
      price: "4,990",
      images: [DSC00871, DSC00883, DSC00913, DSC00921],
      colors: "White",
      material: "Cotton Satin",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "White Aura Dress",
      price: "8,500",
      images: [DSC00946, DSC01045, DSC01058, DSC01071, DSC01075],
      colors: "White",
      material: "Jacquard waffle knit & satin sleeves",
      size: "UK10",
      height: "5'5\"",
    },
    {
      name: "Women Bodycon Dress with Side Slit",
      price: "4,450",
      images: [DSC00823, DSC00832, DSC00845, DSC00849, DSC00854],
      colors: "Black",
      material: "Lycra Blend",
      size: "UK10",
      height: "5'7\"",
    },
  ];

  const handleProductClick = (dress) => {
    navigate("/product-details", { state: { product: dress } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          All Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Explore our stunning mini, midi, and maxi dresses — designed for elegance.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {allDresses.map((dress, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              onClick={() => handleProductClick(dress)}
              style={{ cursor: "pointer" }}
            >
              <div className="card border-0 shadow-sm h-100 product-card">
                <div
                  id={`carousel-${index}`}
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-inner">
                    {dress.images.map((img, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 product-img"
                          alt={`${dress.name} ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-body text-center py-4">
                  <h5 className="card-title fw-semibold mb-2 text-uppercase">
                    {dress.name}
                  </h5>
                  <p className="price-text mb-3">LKR {dress.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5 text-muted footer-text">
        © {new Date().getFullYear()} SN Collections — Grace in every dress.
      </div>
    </div>
  );
};

export default DressesPage;
