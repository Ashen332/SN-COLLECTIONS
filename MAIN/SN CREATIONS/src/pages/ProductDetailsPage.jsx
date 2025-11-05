import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    if (product?.images) {
      product.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      const numericPrice = parseFloat(
        String(product.price).replace(/[^\d.-]/g, "")
      );
      setTotal(numericPrice * quantity);
    }
  }, [product, quantity]);

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h4>No product selected.</h4>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size before adding to cart.");
      return;
    }
    if (quantity < 1) {
      setError("Quantity must be at least 1.");
      return;
    }

    setError("");

    const numericPrice = parseFloat(
      String(product.price).replace(/[^\d.-]/g, "")
    );
    const totalAmount = numericPrice * quantity;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      name: product.name,
      price: numericPrice,
      size: selectedSize,
      quantity,
      total: totalAmount,
      image: product.images[0],
      color: product.colors,
    };
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    const modalElement = modalRef.current;
    if (modalElement) {
      const modalInstance =
        window.bootstrap.Modal.getOrCreateInstance(modalElement);
      modalInstance.show();
    }
  };

  const closeModal = () => {
    const modalInstance = window.bootstrap.Modal.getInstance(modalRef.current);
    if (modalInstance) modalInstance.hide();
  };

  // ✅ Dress and Crop Top Data
  const dressSizes = [
    ["XS", 13.5, 30, 26, 34, 35.5, 53],
    ["S", 14, 32, 28, 36, 35.5, 53],
    ["M", 14.5, 34, 30, 38, 36, 54],
    ["L", 15, 36, 32, 40, 36, 54],
    ["XL", 15.5, 38, 34, 42, 36.5, 55],
    ["2XL", 16, 40, 36, 44, 36.5, 55],
  ];

  const cropSizes = [
    ["XS", 13.5, 30, 26, 13.5],
    ["S", 14, 32, 28, 13.5],
    ["M", 14.5, 34, 30, 14],
    ["L", 15, 36, 32, 14],
    ["XL", 15.5, 38, 34, 14.5],
    ["2XL", 16, 40, 36, 14.5],
  ];

  const isCropTop =
    product.category?.toLowerCase().includes("crop") ||
    product.name?.toLowerCase().includes("crop");

  return (
    <div className="product-details-wrapper bg-white">
      <div className="container product-details-container">
        <div className="row align-items-start">
          {/* Left — Images */}
          <div className="col-md-6 text-center">
            <img
              src={mainImage}
              alt={product.name}
              className="img-fluid product-main-img rounded-4 shadow-sm"
            />
            <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail-img rounded ${
                    mainImage === img ? "border border-dark border-2" : "border"
                  }`}
                  onClick={() => setMainImage(img)}
                  style={{
                    width: "75px",
                    height: "75px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — Product Details */}
          <div className="col-md-6">
            <h2 className="fw-bold text-uppercase mb-3">{product.name}</h2>
            <hr />
            <p className="price fs-4 text-dark fw-semibold">
              LKR {product.price}
            </p>

            <div className="detail-info small">
              <p>
                <strong>Colors:</strong> {product.colors}
              </p>
              <p>
                <strong>Material:</strong> {product.material}
              </p>
              <p>
                <strong>Model Wearing:</strong> UK Size {product.size}
              </p>
              <p>
                <strong>Model Height:</strong> {product.height}
              </p>
            </div>

            {/* Sizes */}
            <div className="size-section mt-4">
              <p className="mb-1 fw-semibold">Available Sizes</p>
              <div className="d-flex gap-2 flex-wrap">
                {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                  <button
                    key={size}
                    className={`btn btn-outline-dark size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p
                className="mt-3 text-decoration-underline text-dark fw-semibold"
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#sizeChartModal"
              >
                (Size Chart)
              </p>

              {error && (
                <div
                  className="text-danger mt-2 fw-medium"
                  style={{ fontSize: "0.9rem" }}
                >
                  {error}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="quantity mt-4 d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-dark rounded-circle"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="fs-5 fw-semibold">{quantity}</span>
              <button
                className="btn btn-outline-dark rounded-circle"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              className="btn btn-dark w-100 mt-4 py-3"
              onClick={handleAddToCart}
            >
              🛒 ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Size Chart Modal */}
      <div
        className="modal fade"
        id="sizeChartModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold text-uppercase">
                Size Guide
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="size-guide-intro mb-4">
                <p className="text-muted small">
                  We design our garments to align with the measurements listed
                  below. Use this guide to find your best fit based on{" "}
                  <strong>
                    Shoulder, Bust, Waist, Hip, Knee Length, and Anchor Length.
                  </strong>{" "}
                  Actual fit may vary slightly depending on the fabric and
                  design style.
                </p>
                <ul className="text-muted small ps-3">
                  <li>
                    <strong>SHOULDER:</strong> Measure straight across from one
                    shoulder tip to the other.
                  </li>
                  <li>
                    <strong>BUST:</strong> Measure around the fullest part of
                    your chest, keeping the tape parallel to the floor.
                  </li>
                  <li>
                    <strong>WAIST:</strong> Measure around the narrowest part of
                    your waistline.
                  </li>
                  <li>
                    <strong>HIP:</strong> Measure around the widest part of your
                    hips, about 8 inches below your waist.
                  </li>
                  <li>
                    <strong>KNEE LENGTH:</strong> Measure vertically from the
                    waist to the middle of the knee.
                  </li>
                  <li>
                    <strong>ANCHOR LENGTH:</strong> Measure vertically from the
                    shoulder down to the garment’s full length.
                  </li>
                </ul>
              </div>

              <div className="table-responsive">
                <table className="table table-striped align-middle text-center">
                  <thead className="table-dark">
                    <tr>
                      {isCropTop ? (
                        <>
                          <th>Size</th>
                          <th>Shoulder (in)</th>
                          <th>Bust (in)</th>
                          <th>Waist (in)</th>
                          <th>Top Length (in)</th>
                        </>
                      ) : (
                        <>
                          <th>Size</th>
                          <th>Shoulder (in)</th>
                          <th>Bust (in)</th>
                          <th>Waist (in)</th>
                          <th>Hip (in)</th>
                          <th>Knee Length (in)</th>
                          <th>Anchor Length (in)</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {(isCropTop ? cropSizes : dressSizes).map((row, index) => (
                      <tr key={index}>
                        {row.map((cell, i) => (
                          <td key={i}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
