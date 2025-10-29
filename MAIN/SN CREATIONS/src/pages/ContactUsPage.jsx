import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page d-flex align-items-center justify-content-center py-5 mt-5">
      <div className="contact-card shadow-lg p-4 p-md-5 rounded-4">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5 bg-dark text-white rounded-4 p-4 contact-info d-flex flex-column justify-content-center">
            <h3 className="fw-bold mb-4 text-uppercase text-center">
              Get in Touch
            </h3>
            <div className="info-item mb-3 d-flex align-items-center">
              <FaEnvelope size={22} className="me-3 text-light" />
              <div>
                <p className="mb-0 fw-semibold">Email</p>
                <small>support@sncollections.com</small>
              </div>
            </div>
            <div className="info-item mb-3 d-flex align-items-center">
              <FaPhoneAlt size={20} className="me-3 text-light" />
              <div>
                <p className="mb-0 fw-semibold">Phone</p>
                <small>+94 11 123 4567</small>
              </div>
            </div>
            <div className="info-item d-flex align-items-center">
              <FaMapMarkerAlt size={22} className="me-3 text-light" />
              <div>
                <p className="mb-0 fw-semibold">Address</p>
                <small>123 Fashion Street, Colombo, Sri Lanka</small>
              </div>
            </div>
            <p className="mt-4 small text-center text-secondary">
              We'd love to hear from you! Reach out with any questions or feedback.
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <h3 className="fw-bold mb-4 text-uppercase text-center">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control rounded-3"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark px-5 py-2 rounded-3 fw-semibold"
                >
                  Send Message
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
