import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // ✅ feedback state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: "", message: "" }); // reset status on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("https://sn-collections.onrender.com/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({
          type: "success",
          message: `Thanks, ${formData.name}! Your message has been sent.`,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send. Try again later." });
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus({
        type: "error",
        message: "Server error. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page d-flex align-items-center justify-content-center">
      <div className="contact-card shadow-lg rounded-4 overflow-hidden">
        <div className="row g-0">
          {/* Left — Info */}
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

            {/* First Contact Number */}
            <div className="info-item mb-3 d-flex align-items-start">
              <FaPhoneAlt size={20} className="me-3 text-light mt-1" />
              <div>
                <p className="mb-1 fw-semibold">Phone</p>
                <a
                  href="tel:+94776879778"
                  className="text-white text-decoration-none small d-block"
                >
                  +94 776 879 778
                </a>
                <a
                  href="tel:+94714821003"
                  className="text-white text-decoration-none small d-block"
                >
                  +94 714 821 003
                </a>
              </div>
            </div>

            <div className="social-links mt-4 d-flex justify-content-center gap-4">
              <a
                href="https://www.instagram.com/sncollection230"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063859521801"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-md-7 bg-white p-5">
            <h3 className="fw-bold mb-4 text-uppercase text-center">
              Send Us a Message
            </h3>

            {/* ✅ Inline Feedback */}
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
