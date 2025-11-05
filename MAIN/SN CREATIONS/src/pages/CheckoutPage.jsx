import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    const sub = storedCart.reduce((acc, item) => acc + item.total, 0);
    const shippingCost = sub > 10000 ? 0 : 750;
    setSubtotal(sub);
    setShipping(shippingCost);
    setTotal(sub + shippingCost);
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      address: form.address.value,
      city: form.city.value,
      postal: form.postal.value,
      phone: form.phone.value,
      payment: paymentMethod,
      total,
    };

    if (paymentMethod === "cdm" && !file) {
      alert("Please upload your CDM payment slip before placing the order.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        "service_1jauqqn",
        "template_y1sw6hl",
        {
          ...orderData,
          message:
            paymentMethod === "cdm"
              ? "Customer selected CDM Deposit and attached payment slip."
              : "Customer selected Cash on Delivery.",
        },
        "d2jfBxd_FpaDoKw9M"
      );

      localStorage.setItem("lastOrder", JSON.stringify(orderData));
      localStorage.removeItem("cart");

      window.location.href = "/order-success";
    } catch (err) {
      console.error("Email send error:", err);
      alert("Error sending your order. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="checkout-wrapper py-5">
      <div className="container">
        <h2 className="fw-bold text-uppercase mb-5 text-center display-6 tracking-wide">
          Checkout
        </h2>
        <div className="row g-5">
          {/* LEFT: Billing Details */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg p-4 rounded-4">
              <h5 className="fw-semibold mb-4 text-dark">Billing Details</h5>
              <form onSubmit={handlePlaceOrder}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City</label>
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Postal Code
                    </label>
                    <input
                      name="postal"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-semibold mb-3">Payment Method</h6>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="cdm"
                      checked={paymentMethod === "cdm"}
                      onChange={() => setPaymentMethod("cdm")}
                    />
                    <label className="form-check-label" htmlFor="cdm">
                      CDM Deposit
                    </label>
                  </div>

                  {paymentMethod === "cdm" && (
                    <div className="cdm-box p-4 bg-light border rounded-4 mt-3">
                      <h6 className="fw-bold mb-3 text-uppercase text-dark">
                        Bank Details
                      </h6>
                      <ul className="list-unstyled small mb-3">
                        <li>
                          <strong>Bank:</strong> S @ N Collections Pvt Ltd
                        </li>
                        <li>
                          <strong>Branch:</strong> 035020682299-S/A
                        </li>
                        <li>
                          <strong>Account Name:</strong> S.N. Collection
                        </li>
                        <li>
                          <strong>Account No:</strong> 035010048841-C/A
                        </li>
                      </ul>

                      <label className="form-label fw-semibold">
                        Upload Payment Slip (Image / PDF)
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        required
                      />
                      <small className="text-muted">
                        Please upload your payment slip to confirm your deposit.
                      </small>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 mt-4 py-3 fw-semibold rounded-pill shadow-sm"
                  disabled={sending}
                >
                  {sending ? "Processing..." : "Place Order"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg p-4 rounded-4">
              <h5 className="fw-semibold mb-4 text-dark">Order Summary</h5>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-3 me-3 shadow-sm"
                          style={{
                            width: "65px",
                            height: "65px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <p className="mb-0 fw-semibold small">{item.name}</p>
                          <small className="text-muted">
                            {item.size} / {item.color}
                          </small>
                        </div>
                      </div>
                      <p className="fw-semibold mb-0 small text-secondary">
                        ×{item.quantity}
                      </p>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between small">
                    <span>Subtotal</span>
                    <span>LKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between small">
                    <span>Shipping</span>
                    <span>{shipping ? `LKR ${shipping}` : "Free"}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span>LKR {total.toLocaleString()}</span>
                  </div>
                </>
              ) : (
                <p className="text-muted">Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
