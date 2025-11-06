import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // ✅ Reuse same consistent styling

// ✅ Import images
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
  const navigate = useNavigate();

  const midiDresses = [
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
  ];

  const handleProductClick = (dress) => {
    navigate("/product-details", { state: { product: dress } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          Midi Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Discover our graceful range of midi dresses designed for every occasion.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {midiDresses.map((dress, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              onClick={() => handleProductClick(dress)}
              style={{ cursor: "pointer" }}
            >
              <div className="card border-0 shadow-sm h-100 product-card">
                {/* ✅ Carousel */}
                <div
                  id={`carousel-midi-${index}`}
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

                {/* ✅ Card Body */}
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

      {/* ✅ Footer */}
      <div className="text-center mt-5 text-muted footer-text">
        © {new Date().getFullYear()} SN Collections — Timeless Elegance.
      </div>
    </div>
  );
};

export default MidiDressesPage;
