import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AllTopsPage.css"; // ✅ Reuse same styling for consistency

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

const MiniDressesPage = () => {
  const navigate = useNavigate();

  const miniDresses = [
    {
       name: "Cami Tiered Mini Dress",
           price: "2,350",
           images: [DSC00660, DSC00687, DSC00727, DSC00735],
           colors: "Blue,Black",
           material: "Waffle Knit",
           size: "UK10",
           height: "5'5\"",
    },
    {
       name: "Twist Front Cami Dress",
            price: "1,990",
            images: [DSC00230, DSC00264, DSC00280, DSC00284],
            colors: "Red",
            material: "Chiffon",
            size: "UK10",
            height: "5'6\"",
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
  ];

  const handleProductClick = (dress) => {
    navigate("/product-details", { state: { product: dress } });
  };

  return (
    <div className="container-fluid py-5 mt-5 all-tops-container">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-uppercase title-heading">
          Mini Dresses Collection
        </h2>
        <p className="text-muted mb-0">
          Discover our stunning collection of elegant and stylish mini dresses.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {miniDresses.map((dress, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              onClick={() => handleProductClick(dress)}
              style={{ cursor: "pointer" }}
            >
              <div className="card border-0 shadow-sm h-100 product-card">
                <div
                  id={`carousel-mini-${index}`}
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-bs-interval="2500"
                >
                  <div className="carousel-inner">
                    {dress.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${
                          imgIndex === 0 ? "active" : ""
                        }`}
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
        © {new Date().getFullYear()} SN Collections — Grace in Every Stitch.
      </div>
    </div>
  );
};

export default MiniDressesPage;
