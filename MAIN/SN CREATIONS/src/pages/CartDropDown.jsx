import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartDropDown.css";

const CartDropdown = ({ show, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart items from localStorage whenever dropdown opens
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [show]);

  // ✅ Calculate subtotal dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  // ✅ Remove item function
  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className={`cart-dropdown shadow-lg ${show ? "show" : ""}`}>
      <div className="cart-header d-flex justify-content-between align-items-center border-bottom pb-2 px-3 pt-2">
        <h6 className="fw-bold text-uppercase mb-0">Your Cart</h6>
        <button
          className="btn-close shadow-none"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>

      {/* 🛍️ Cart Items Section */}
      <div className="cart-body px-3 py-2">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item d-flex align-items-center mb-3 border-bottom pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img rounded-3 shadow-sm"
              />
              <div className="cart-item-info ms-3 flex-grow-1">
                <h6 className="fw-semibold mb-1 text-truncate">
                  {item.name}
                </h6>
                <small className="text-muted d-block">
                  {item.size} / {item.color}
                </small>
                <p className="mb-1 text-dark fw-semibold small">
                  LKR {item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>

              {/* ❌ Remove Button */}
              <button
                className="btn btn-sm btn-outline-danger rounded-circle ms-2"
                title="Remove item"
                onClick={() => handleRemove(index)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">Your cart is empty.</p>
        )}
      </div>

      {/* 🧾 Footer */}
      {cartItems.length > 0 && (
        <>
          <hr className="my-2" />
          <div className="cart-footer text-center px-3 pb-3">
            <p className="fw-bold fs-5 mb-3">
              Subtotal:{" "}
              <span className="text-dark">
                LKR {subtotal.toLocaleString()}
              </span>
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                to="/checkout"
                className="btn btn-dark rounded-pill px-4 py-2 shadow-sm"
                onClick={onClose}
              >
                Checkout →
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
