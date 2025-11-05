import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = "service_1jauqqn";
    const templateID = "template_y1sw6hl";
    const publicKey = "d2jfBxd_FpaDoKw9M";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert(`Thank you ${formData.name}, your message has been sent!`);
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Something went wrong. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page d-flex align-items-center justify-content-center">
      <div className="contact-card shadow-lg rounded-4 overflow-hidden">
        <div className="row g-0">
          {/* Left Section — Contact Info */}
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

            <div className="info-item mb-4 d-flex align-items-start">
              <FaPhoneAlt size={20} className="me-3 text-light mt-1" />
              <div>
                <p className="mb-1 fw-semibold">Phone</p>
                <a
                  href="tel:+94776879778"
                  className="text-white text-decoration-none small"
                >
                  +94 776 879 778
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

            <p className="mt-4 small text-center text-secondary">
              We'd love to hear from you — reach out with any questions or feedback.
            </p>
          </div>

          {/* Right Section — Contact Form */}
          <div className="col-md-7 bg-white p-5">
            <h3 className="fw-bold mb-4 text-uppercase text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
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
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
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
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
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
