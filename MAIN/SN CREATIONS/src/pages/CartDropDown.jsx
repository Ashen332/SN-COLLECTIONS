import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartDropdown.css";

const CartDropdown = ({ show, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [show]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className={`cart-dropdown ${show ? "show" : ""}`}>
      <div className="cart-header d-flex justify-content-between align-items-center">
        <h6 className="fw-bold text-uppercase mb-0">Your Cart</h6>
        <button className="btn-close" onClick={onClose}></button>
      </div>

      <div className="cart-body">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item d-flex align-items-center mb-3"
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
                <small className="text-muted">
                  {item.size} / {item.color}
                </small>
                <p className="mb-0 text-dark fw-semibold">
                  LKR {item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">
            Your cart is empty.
          </p>
        )}
      </div>

      {cartItems.length > 0 && (
        <>
          <hr className="my-2" />
          <div className="cart-footer text-center">
            <p className="fw-bold fs-5 mb-3">
              Subtotal:{" "}
              <span className="text-dark">
                LKR {subtotal.toLocaleString()}
              </span>
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                to="/checkout"
                className="btn btn-dark rounded-pill px-4"
                onClick={onClose} // ✅ close dropdown when navigating
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
