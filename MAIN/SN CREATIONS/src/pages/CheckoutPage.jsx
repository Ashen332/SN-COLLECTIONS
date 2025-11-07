import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(450); // Fixed shipping fee
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    const sub = storedCart.reduce((acc, item) => acc + item.total, 0);
    setSubtotal(sub);
    setTotal(sub + 450);
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const validateForm = (form) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{9,12}$/;
    const postalRegex = /^\d{4,6}$/;

    if (!form.firstName.value.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.value.trim()) newErrors.lastName = "Last name is required.";
    if (!emailRegex.test(form.email.value)) newErrors.email = "Enter a valid email address.";
    if (!form.address.value.trim()) newErrors.address = "Address is required.";
    if (!form.city.value.trim()) newErrors.city = "City is required.";
    if (!postalRegex.test(form.postal.value)) newErrors.postal = "Enter a valid postal code.";
    if (!phoneRegex.test(form.phone.value)) newErrors.phone = "Enter a valid phone number (9–12 digits).";
    if (paymentMethod === "cdm" && !file) newErrors.file = "Please upload your payment slip.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!validateForm(form)) return;

    const orderData = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      address: form.address.value,
      city: form.city.value,
      postal: form.postal.value,
      phone: form.phone.value,
      payment: paymentMethod,
      total,
      items: cartItems,
    };

    setSending(true);
    try {
      const res = await fetch("https://sn-collections.onrender.com/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("lastOrder", JSON.stringify(orderData));
        localStorage.removeItem("cart");
        window.location.href = "/order-success";
      } else {
        alert("Failed to send order email. Please try again.");
      }
    } catch (err) {
      console.error("Order send error:", err);
      alert("Error sending your order. Please try again later.");
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
              <form onSubmit={handlePlaceOrder} noValidate>
                <div className="row g-3">
                  {/* First Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      name="email"
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Address */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Address</label>
                    <input
                      name="address"
                      type="text"
                      className={`form-control ${errors.address ? "is-invalid" : ""}`}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City</label>
                    <input
                      name="city"
                      type="text"
                      className={`form-control ${errors.city ? "is-invalid" : ""}`}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>

                  {/* Postal */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Postal Code</label>
                    <input
                      name="postal"
                      type="text"
                      className={`form-control ${errors.postal ? "is-invalid" : ""}`}
                    />
                    {errors.postal && <div className="invalid-feedback">{errors.postal}</div>}
                  </div>

                  {/* Phone */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      name="phone"
                      type="text"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>

                {/* Payment Method */}
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

                  {/* CDM Upload */}
                  {paymentMethod === "cdm" && (
                    <div className="cdm-box p-4 bg-light border rounded-4 mt-3">
                      <h6 className="fw-bold mb-3 text-uppercase text-dark">Bank Details</h6>
                      <ul className="list-unstyled small mb-3">
                        <li><strong>Bank:</strong> S @ N Collections Pvt Ltd</li>
                        <li><strong>Branch:</strong> 035020682299-S/A</li>
                        <li><strong>Account Name:</strong> S.N. Collection</li>
                        <li><strong>Account No:</strong> 035010048841-C/A</li>
                      </ul>

                      <label className="form-label fw-semibold">Upload Payment Slip</label>
                      <input
                        type="file"
                        className={`form-control ${errors.file ? "is-invalid" : ""}`}
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                      {errors.file && <div className="invalid-feedback">{errors.file}</div>}
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
                    <div key={i} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-3 me-3 shadow-sm"
                          style={{ width: "65px", height: "65px", objectFit: "cover" }}
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
                    <span>LKR {shipping}</span>
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
