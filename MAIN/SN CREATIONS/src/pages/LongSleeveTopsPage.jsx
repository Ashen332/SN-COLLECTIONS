import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // reuse same professional style

// ✅ Import images
import DSC00123 from "../optimized/DSC00123.webp";
import DSC00140 from "../optimized/DSC00140.webp";
import DSC00151 from "../optimized/DSC00151.webp";
import DSC00159 from "../optimized/DSC00159.webp";
import DSC00187 from "../optimized/DSC00187.webp";
import DSC00203 from "../optimized/DSC00203.webp";
import DSC00206 from "../optimized/DSC00206.webp";
import DSC00228 from "../optimized/DSC00228.webp";

const LongSleeveTopsPage = () => {
  const navigate = useNavigate();

  // ✅ Product data
  const longSleeveTops = [
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
  ];

  // ✅ Navigate to product details
  const handleProductClick = (top) => {
    navigate("/product-details", { state: { product: top } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      {/* ===== Heading Section ===== */}
      <div className="text-center mb-5 px-3">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          Long Sleeve Tops
        </h2>
        <p className="text-muted mb-0">
          Explore our elegant collection of stylish long-sleeve tops.
        </p>
      </div>

      {/* ===== Product Grid ===== */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {longSleeveTops.map((top, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-5 col-md-6 col-sm-10 d-flex justify-content-center"
              onClick={() => handleProductClick(top)}
              style={{ cursor: "pointer" }}
            >
              <div className="card border-0 shadow-sm h-100 product-card w-100">
                {/* Carousel */}
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
                          className="d-block w-100 product-img"
                          alt={`${top.name} ${imgIndex + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
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

      {/* ===== Footer ===== */}
      <div className="text-center mt-5 text-muted footer-text">
        © {new Date().getFullYear()} SN Collections — Crafted with elegance.
      </div>
    </div>
  );
};

export default LongSleeveTopsPage;
