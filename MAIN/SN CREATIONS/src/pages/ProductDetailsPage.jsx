import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetailsPage.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
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
      color: selectedColor || product.colors.split(",")[0].trim(),
      quantity,
      total: totalAmount,
      image: product.images[0],
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
      <div className="container product-details-container py-5">
        <div className="row align-items-start">
          {/* LEFT SIDE — IMAGES */}
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
                  className={`thumbnail-img rounded ${mainImage === img ? "border border-dark border-2" : "border"
                    }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — DETAILS */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold text-uppercase mb-3">{product.name}</h2>
            <p className="price fs-4 text-dark fw-semibold">
              LKR {product.price}
            </p>

            <div className="detail-info mb-4">
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

            {/* ✅ COLORS */}
            <div className="color-section mb-4">
              <p className="mb-2 fw-semibold">Available Colors</p>
              <div className="d-flex gap-2 flex-wrap">
                {product.colors.split(",").map((color, index) => (
                  <div
                    key={index}
                    title={color.trim()}
                    onClick={() => setSelectedColor(color.trim())}
                    className={`color-circle ${selectedColor === color.trim() ? "selected" : ""
                      }`}
                    style={{
                      backgroundColor: color.trim().toLowerCase(),
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* ✅ SIZES */}
            <div className="size-section mb-4">
              <p className="mb-2 fw-semibold">Available Sizes</p>
              <div className="d-flex gap-2 flex-wrap">
                {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                  <button
                    key={size}
                    className={`btn btn-outline-dark size-btn ${selectedSize === size ? "active" : ""
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <span
                className="mt-3 d-inline-block size-chart-link"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#sizeChartModal"
              >
                (Size Chart)
              </span>

              {error && (
                <div className="text-danger mt-2 fw-medium small">{error}</div>
              )}
            </div>

            {/* QUANTITY */}
            <div className="quantity d-flex align-items-center gap-3 mb-4">
  <button
    type="button"
    className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
    style={{ width: '40px', height: '40px', padding: 0 }}
    onClick={() => setQuantity(Math.max(1, quantity - 1))}
    aria-label="Decrease quantity"
  >
    <FaMinus />
  </button>

  <span className="fs-5 fw-semibold">{quantity}</span>

  <button
    type="button"
    className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center"
    style={{ width: '40px', height: '40px', padding: 0 }}
    onClick={() => setQuantity(quantity + 1)}
    aria-label="Increase quantity"
  >
    <FaPlus />
  </button>
</div>


            {/* ADD TO CART */}
            <button
              className="btn btn-dark w-100 py-3 rounded-3 fw-semibold"
              onClick={handleAddToCart}
            >
              🛒 ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ✅ ORDER SUMMARY MODAL */}
      <div
        className="modal fade"
        ref={modalRef}
        id="orderSummaryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content shadow-lg border-0 rounded-4">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold text-uppercase">
                Order Summary
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-center py-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="order-modal-img rounded mb-3"
              />
              <h6 className="fw-bold text-uppercase mb-2">{product.name}</h6>
              <p className="text-muted small mb-1">
                <strong>Color:</strong>{" "}
                {selectedColor || product.colors.split(",")[0]}
              </p>
              <p className="text-muted small mb-1">
                <strong>Size:</strong> {selectedSize}
              </p>
              <p className="text-muted small mb-1">
                <strong>Quantity:</strong> {quantity}
              </p>
              <p className="text-dark fw-semibold mt-3 fs-5">
                Total: LKR {total.toLocaleString()}
              </p>
            </div>

            <div className="modal-footer border-0 d-flex justify-content-center gap-3 pb-4">
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill px-4"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Continue Shopping
              </button>
              <button
                type="button"
                className="btn btn-dark rounded-pill px-4"
                onClick={() => {
                  closeModal();
                  navigate("/checkout");
                }}
              >
                Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ SIZE CHART MODAL */}
      <div
        className="modal fade"
        id="sizeChartModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold text-uppercase">Size Guide</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-muted small mb-4">
                Use this chart to find your best fit. Measurements are in inches.
              </p>
              <div className="table-responsive">
                <table className="table table-striped text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      {isCropTop ? (
                        <>
                          <th>Size</th>
                          <th>Shoulder</th>
                          <th>Bust</th>
                          <th>Waist</th>
                          <th>Top Length</th>
                        </>
                      ) : (
                        <>
                          <th>Size</th>
                          <th>Shoulder</th>
                          <th>Bust</th>
                          <th>Waist</th>
                          <th>Hip</th>
                          <th>Knee</th>
                          <th>Length</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {(isCropTop ? cropSizes : dressSizes).map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
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
