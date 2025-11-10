import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // ✅ Auto switch between localhost & Render backend
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://sn-collections.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const res = await fetch(`${API_BASE}/send-contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await res.json();
      console.log("Response:", data);

      if (data.success) {
        setStatus({
          type: "success",
          message: `✅ Thanks, ${formData.name}! Your message has been sent successfully.`,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            "⚠️ Something went wrong. Please try again or contact us via email.",
        });
      }
    } catch (err) {
      console.error("❌ Contact send error:", err);
      if (err.name === "AbortError") {
        setStatus({
          type: "error",
          message: "⏱️ Request timed out. Please try again.",
        });
      } else {
        setStatus({
          type: "error",
          message: "⚠️ Server error. Please try again later.",
        });
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page d-flex align-items-center justify-content-center py-5">
      <div className="contact-card shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: "900px" }}>
        <div className="row g-0">
          {/* LEFT — Info */}
          <div className="col-md-5 bg-dark text-white p-5 contact-info">
            <h3 className="fw-bold mb-4 text-uppercase text-center">Get in Touch</h3>

            <div className="info-item mb-4 d-flex align-items-start">
              <FaEnvelope size={22} className="me-3 text-light mt-1" />
              <div>
                <p className="mb-1 fw-semibold">Email</p>
                <a
                  href="mailto:sncollection230@gmail.com"
                  className="text-white text-decoration-none small"
                >
                  sncollection230@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item mb-3 d-flex align-items-start">
              <FaPhoneAlt size={20} className="me-3 text-light mt-1" />
              <div>
                <p className="mb-1 fw-semibold">Phone</p>
                <a href="tel:+94776879778" className="text-white text-decoration-none small d-block">
                  +94 776 879 778
                </a>
                <a href="tel:+94714821003" className="text-white text-decoration-none small d-block">
                  +94 714 821 003
                </a>
              </div>
            </div>

            <div className="social-links mt-4 d-flex justify-content-center gap-4">
              <a href="https://www.instagram.com/sncollection230" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063859521801" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="col-md-7 bg-white p-5">
            <h3 className="fw-bold mb-4 text-uppercase text-center">Send Us a Message</h3>

            {status.message && (
              <div
                className={`alert ${
                  status.type === "success" ? "alert-success" : "alert-danger"
                } text-center py-2`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark px-5 py-2 rounded-3 fw-semibold"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
