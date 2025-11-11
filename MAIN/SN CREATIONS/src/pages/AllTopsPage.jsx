import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css";

import DSC00123 from "../optimized/DSC00123.webp";
import DSC00140 from "../optimized/DSC00140.webp";
import DSC00151 from "../optimized/DSC00151.webp";
import DSC00159 from "../optimized/DSC00159.webp";
import DSC00187 from "../optimized/DSC00187.webp";
import DSC00203 from "../optimized/DSC00203.webp";
import DSC00206 from "../optimized/DSC00206.webp";
import DSC00228 from "../optimized/DSC00228.webp";
import DSC09965 from "../optimized/DSC09965.webp";
import DSC09972 from "../optimized/DSC09972.webp";
import DSC09982 from "../optimized/DSC09982.webp";
import DSC09988 from "../optimized/DSC09988.webp";
import DSC00047 from "../optimized/DSC00047.webp";
import DSC00052 from "../optimized/DSC00052.webp";
import DSC00055 from "../optimized/DSC00055.webp";
import DSC00059 from "../optimized/DSC00059.webp";
import DSC00077 from "../optimized/DSC00077.webp";
import DSC09994 from "../optimized/DSC09994.webp";
import DSC09997 from "../optimized/DSC09997.webp";
import DSC09998 from "../optimized/DSC09998.webp";

const AllTopsPage = () => {
  const navigate = useNavigate();

  const allTops = [
    {
      name: "Knot Tie Crop Top",
      price: "1,990",
      images: [DSC00123, DSC00140, DSC00151, DSC00159],
      colors: "Pink, Beige",
      material: "Viscose rayon",
      size: "UK10",
      height: "5'5\"",
    },
    {
      name: "Summer Belly Sleeve",
      price: "1,750",
      images: [DSC00187, DSC00203, DSC00206, DSC00228],
      colors: "White",
      material: "Cotton Elastene",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "Shoulder Black Crop Top",
      price: "1,350",
      images: [DSC09965, DSC09972, DSC09982, DSC09988],
      colors: "Black,Blue",
      material: "Polyester",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "One Shoulder Crop Top",
      price: "1,290",
      images: [DSC00047, DSC00052, DSC00055, DSC00059, DSC00077],
      colors: "Pink",
      material: "Cotton Blend",
      size: "UK10",
      height: "5'6\"",
    },
    {
      name: "Neck Top Valerie",
      price: "1,350",
      images: [DSC09994, DSC09997, DSC09998],
      colors: "Beige,White",
      material: "Crape",
      size: "UK10",
      height: "5'5\"",
    },
  ];

  const handleProductClick = (top) => {
    navigate("/product-details", { state: { product: top } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          All Tops Collection
        </h2>
        <p className="text-muted mb-0">
          Discover our latest selection of elegant and trendy tops for every occasion.
        </p>
        <div className="underline mx-auto mt-3"></div>
      </div>

      {/* Products */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {allTops.map((top, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-10"
              onClick={() => handleProductClick(top)}
              style={{ cursor: "pointer" }}
            >
              <div className="card border-0 shadow-sm h-100 product-card">
                <div
                  id={`carousel-${index}`}
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-bs-interval="2500"
                >
                  <div className="carousel-inner">
                    {top.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 img-fluid product-img"
                          alt={`${top.name} ${imgIndex + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-body text-center py-4">
                  <h5 className="card-title fw-semibold mb-2 text-uppercase">
                    {top.name}
                  </h5>
                  <p className="price-text mb-3">LKR {top.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-5 text-muted footer-text">
        © {new Date().getFullYear()} SN Collections — Crafted with elegance.
      </div>
    </div>
  );
};

export default AllTopsPage;
