import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css";

import DSC00123 from "../assets/DSC00123.jpg";
import DSC00140 from "../assets/DSC00140.jpg";
import DSC00151 from "../assets/DSC00151.jpg";
import DSC00159 from "../assets/DSC00159.jpg";
import DSC00187 from "../assets/DSC00187.jpg";
import DSC00203 from "../assets/DSC00203.jpg";
import DSC00206 from "../assets/DSC00206.jpg";
import DSC00228 from "../assets/DSC00228.jpg";
import DSC09965 from "../assets/DSC09965.jpg";
import DSC09972 from "../assets/DSC09972.jpg";
import DSC09982 from "../assets/DSC09982.jpg";
import DSC09988 from "../assets/DSC09988.jpg";
import DSC00047 from "../assets/DSC00047.jpg";
import DSC00052 from "../assets/DSC00052.jpg";
import DSC00055 from "../assets/DSC00055.jpg";
import DSC00059 from "../assets/DSC00059.jpg";
import DSC00077 from "../assets/DSC00077.jpg";
import DSC09994 from "../assets/DSC09994.jpg";
import DSC09997 from "../assets/DSC09997.jpg";
import DSC09998 from "../assets/DSC09998.jpg";

const AllTopsPage = () => {
  const navigate = useNavigate();

  const allTops = [
    {
      name: "Knot Tie Crop Top",
      price: "3,490",
      images: [DSC00123, DSC00140, DSC00151, DSC00159],
      colors: "White, Beige",
      material: "Cotton Blend",
      size: "UK08",
      height: "5'8\"",
    },
    {
      name: "Summer Belly Sleeve",
      price: "3,990",
      images: [DSC00187, DSC00203, DSC00206, DSC00228],
      colors: "Light Blue, White",
      material: "Linen",
      size: "UK10",
      height: "5'7\"",
    },
    {
      name: "Shoulder Black Crop Top",
      price: "2,990",
      images: [DSC09965, DSC09972, DSC09982, DSC09988],
      colors: "Black",
      material: "Polyester",
      size: "UK08",
      height: "5'6\"",
    },
    {
      name: "One Shoulder Crop Top",
      price: "3,790",
      images: [DSC00047, DSC00052, DSC00055, DSC00059, DSC00077],
      colors: "Black, Red",
      material: "Cotton Blend",
      size: "UK10",
      height: "5'9\"",
    },
    {
      name: "Neck Top Valerie",
      price: "3,250",
      images: [DSC09994, DSC09997, DSC09998],
      colors: "Cream",
      material: "Rayon",
      size: "UK08",
      height: "5'7\"",
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
                          style={{
                            objectFit: "cover",
                            borderRadius: "15px 15px 0 0",
                            height: "auto",
                            maxHeight: "480px",
                          }}
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
