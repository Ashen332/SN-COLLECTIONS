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

  // ✅ Preload product images (smooth transitions)
  useEffect(() => {
    if (product?.images) {
      product.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [product]);

  // ✅ Recalculate total
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

  // ✅ Add to cart
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

    // ✅ Proper modal handling
    const modalElement = modalRef.current;
    if (modalElement) {
      const modalInstance =
        window.bootstrap.Modal.getOrCreateInstance(modalElement);
      modalInstance.show();
    }
  };

  // ✅ Smooth modal close
  const closeModal = () => {
    const modalInstance = window.bootstrap.Modal.getInstance(modalRef.current);
    if (modalInstance) modalInstance.hide();
  };

  return (
    <div
      className="product-details-wrapper"
      style={{
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 1,
        margin: 0,
        padding: "60px 0 40px 0",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <div className="container product-details-container">
        <div className="row align-items-start">
          {/* Left — Image Gallery */}
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
                {["UK06", "UK08", "UK10", "UK12", "UK14", "UK16"].map((size) => (
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
                className="btn btn-outline-dark rounded-circle quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="fs-5 fw-semibold">{quantity}</span>
              <button
                className="btn btn-outline-dark rounded-circle quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              className="btn btn-dark w-100 mt-4 py-3 add-to-cart-btn"
              onClick={handleAddToCart}
            >
              🛒 ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modern Bootstrap Modal */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        ref={modalRef}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content cart-modal-content">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold text-uppercase">
                Item Added to Your Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-md-6 text-center border-end">
                  <div className="check-circle mx-auto mb-3">
                    <span>✔</span>
                  </div>
                  <h6 className="fw-semibold mb-1">{product.name}</h6>
                  <p className="text-muted mb-1">LKR {product.price}</p>
                  <small className="text-secondary d-block mb-2">
                    Variant: {selectedSize} / {product.colors}
                    <br />
                    Qty: x{quantity}
                  </small>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="img-fluid rounded shadow-sm my-3"
                    style={{ maxHeight: "230px", objectFit: "cover" }}
                  />
                </div>

                <div className="col-md-6 text-center py-4">
                  <h5 className="fw-bold text-uppercase mb-3">Cart Summary</h5>
                  <p className="fs-5 fw-bold text-dark mb-4">
                    Total: LKR {total.toLocaleString()}
                  </p>
                  <div className="d-flex flex-column gap-3 align-items-center">
                    <button
                      className="btn btn-outline-dark w-75 rounded-pill"
                      onClick={closeModal}
                    >
                      ← Continue Shopping
                    </button>
                    <button
                      className="btn btn-dark w-75 rounded-pill proceed-btn"
                      onClick={() => {
                        closeModal();
                        navigate("/checkout");
                      }}
                    >
                      Proceed to Checkout →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0 text-center py-3 bg-light">
              <p className="text-muted small w-100 mb-0">
                You can close this popup manually anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
