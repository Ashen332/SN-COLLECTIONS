import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as RBNavbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { ShoppingBag } from "lucide-react";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  // Update cart quantity on load and when localStorage changes
  useEffect(() => {
    const updateCartQuantity = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartQuantity(totalItems);
    };

    updateCartQuantity();

    // Listen to storage events if cart changes in another tab
    window.addEventListener("storage", updateCartQuantity);
    return () => window.removeEventListener("storage", updateCartQuantity);
  }, [showCart]);

  return (
    <RBNavbar expand="lg" bg="light" fixed="top" className="shadow-sm px-5 py-3">
      <Container>
        <RBNavbar.Brand as={Link} to="/" className="fw-bold fs-3">
          SN COLLECTIONS
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="navbarNav" />
        <RBNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <NavDropdown title="TOPS" id="topsDropdown" className="mx-3">
              <NavDropdown.Item as={Link} to="/tops/all">All Tops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tops/long-sleeve">Long Sleeve Tops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tops/short-sleeve">Short Sleeve Tops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tops/crop">Crop Tops</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="DRESSES" id="dressesDropdown" className="mx-3">
              <NavDropdown.Item as={Link} to="/dresses/all">All Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dresses/mini">Mini Dresses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dresses/midi">Midi Dresses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dresses/maxi">Maxi Dresses</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="mx-3">
              CONTACT
            </Nav.Link>

            <div className="ms-4 position-relative">
              <button
                className="btn btn-outline-dark rounded-circle p-2 position-relative"
                onClick={() => setShowCart(!showCart)}
              >
                <ShoppingBag size={22} />
                {cartQuantity > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {cartQuantity} {/* Total items in cart */}
                  </span>
                )}
              </button>
              <CartDropdown show={showCart} onClose={() => setShowCart(false)} />
            </div>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
