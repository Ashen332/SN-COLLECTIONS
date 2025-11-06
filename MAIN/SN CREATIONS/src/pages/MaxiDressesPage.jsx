import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // ✅ reuse for consistent style

// ✅ Import images
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
  const navigate = useNavigate();

  const maxiDresses = [
    {
     name: "Women Bodycon Dress with Side Slit",
           price: "5,600",
           images: [DSC00823, DSC00832, DSC00845, DSC00849, DSC00854],
           colors: "Purple,Green",
           material: "Cupro",
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
  ];

  const handleProductClick = (dress) => {
    navigate("/product-details", { state: { product: dress } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          Maxi Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Discover our elegant collection of maxi dresses, crafted for every occasion.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {maxiDresses.map((dress, index) => (
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
                  data-bs-interval="2500"
                >
                  <div className="carousel-inner">
                    {dress.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 product-img"
                          alt={`${dress.name} ${imgIndex + 1}`}
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
        © {new Date().getFullYear()} SN Collections — Crafted with elegance.
      </div>
    </div>
  );
};

export default MaxiDressesPage;
