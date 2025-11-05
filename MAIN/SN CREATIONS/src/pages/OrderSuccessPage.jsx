import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderSuccessPage.css";

const OrderSuccessPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const o = JSON.parse(localStorage.getItem("lastOrder"));
    if (o) setOrder(o);
  }, []);

  if (!order)
    return (
      <div className="order-success d-flex justify-content-center align-items-center vh-100">
        <h5>No order found.</h5>
      </div>
    );

  return (
    <div className="order-success container py-5">
      <div className="card shadow-lg border-0 p-5 text-center">
        <div className="check-circle mx-auto mb-4">
          <span>✓</span>
        </div>
        <h2 className="fw-bold">Thank You for Your Order!</h2>
        <p className="text-muted mb-4">
          Your order has been received. We’ll reach out soon to confirm details.
        </p>

        <div className="text-start mx-auto" style={{ maxWidth: "500px" }}>
          <h5 className="fw-semibold mb-3">Order Summary</h5>
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Total:</strong> LKR {order.total.toLocaleString()}</p>
          <p>
            <strong>Payment Method:</strong>{" "}
            {order.payment === "cdm" ? "CDM Deposit" : "Cash on Delivery"}
          </p>

          {order.payment === "cdm" && (
            <div className="bank-box p-3 rounded-3 mt-3">
              <h6 className="fw-bold text-uppercase mb-2">Deposit Details</h6>
              <p className="mb-1"><strong>Bank:</strong> S @ N Collections Pvt Ltd</p>
              <p className="mb-1"><strong>Branch:</strong> 035020682299-S/A</p>
              <p className="mb-1"><strong>Account:</strong> 035010048841-C/A</p>
              <p className="mb-1"><strong>Name:</strong> S.N. Collection</p>
              <p className="small text-muted mt-2">
                Once you deposit, send your slip via WhatsApp to confirm your order.
              </p>
              <a
                href="https://wa.me/94776879778?text=Hi, I have made the deposit and attached my slip."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-pill mt-2"
              >
                Send Slip on WhatsApp
              </a>
            </div>
          )}
        </div>

        <Link to="/" className="btn btn-outline-dark rounded-pill mt-5">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
