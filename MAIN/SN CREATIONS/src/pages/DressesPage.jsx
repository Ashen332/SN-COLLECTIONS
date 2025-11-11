import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // ✅ use same modern black-white styling

// ✅ Import images
import DSC00660 from "../optimized/DSC00660.webp";
import DSC00687 from "../optimized/DSC00687.webp";
import DSC00727 from "../optimized/DSC00727.webp";
import DSC00735 from "../optimized/DSC00735.webp";

import DSC00230 from "../optimized/DSC00230.webp";
import DSC00264 from "../optimized/DSC00264.webp";
import DSC00280 from "../optimized/DSC00280.webp";
import DSC00284 from "../optimized/DSC00284.webp";

import DSC00312 from "../optimized/DSC00312.webp";
import DSC00347 from "../optimized/DSC00347.webp";
import DSC00369 from "../optimized/DSC00369.webp";
import DSC00376 from "../optimized/DSC00376.webp";

import DSC00399 from "../optimized/DSC00399.webp";
import DSC00430 from "../optimized/DSC00430.webp";
import DSC00447 from "../optimized/DSC00447.webp";
import DSC00456 from "../optimized/DSC00456.webp";
import DSC00458 from "../optimized/DSC00458.webp";

import DSC00597 from "../optimized/DSC00597.webp";
import DSC00628 from "../optimized/DSC00628.webp";
import DSC00645 from "../optimized/DSC00645.webp";
import DSC00652 from "../optimized/DSC00652.webp";

import DSC00823 from "../optimized/DSC00823.webp";
import DSC00832 from "../optimized/DSC00832.webp";
import DSC00845 from "../optimized/DSC00845.webp";
import DSC00849 from "../optimized/DSC00849.webp";
import DSC00854 from "../optimized/DSC00854.webp";

import DSC00473 from "../optimized/DSC00473.webp";
import DSC00502 from "../optimized/DSC00502.webp";
import DSC00535 from "../optimized/DSC00535.webp";
import DSC00553 from "../optimized/DSC00553.webp";

import DSC00871 from "../optimized/DSC00871.webp";
import DSC00883 from "../optimized/DSC00883.webp";
import DSC00913 from "../optimized/DSC00913.webp";
import DSC00921 from "../optimized/DSC00921.webp";

import DSC00946 from "../optimized/DSC00946.webp";
import DSC01045 from "../optimized/DSC01045.webp";
import DSC01058 from "../optimized/DSC01058.webp";
import DSC01071 from "../optimized/DSC01071.webp";
import DSC01075 from "../optimized/DSC01075.webp";

const DressesPage = () => {
  const navigate = useNavigate();

  const allDresses = [
    {
       name: "Twist Front Cami Dress",
      price: "1,990",
      images: [DSC00660, DSC00687, DSC00727, DSC00735],
      colors: "Red",
      material: "Chiffon",
      size: "UK10",
      height: "5'6\"",
    },
    {
     name: "Cami Tiered Mini Dress",
      price: "2,350",
      images: [DSC00230, DSC00264, DSC00280, DSC00284],
      colors: "Blue,Black",
      material: "Waffle Knit",
      size: "UK10",
      height: "5'5\"",
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
      colors: "Green",
      material: "Cotton Elastane",
      size: "UK10",
      height: "5'5\"",
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
      price: "5,600",
      images: [DSC00823, DSC00832, DSC00845, DSC00849, DSC00854],
      colors: "Purple,Green",
      material: "Cupro",
      size: "UK10",
      height: "5'5\"",
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
