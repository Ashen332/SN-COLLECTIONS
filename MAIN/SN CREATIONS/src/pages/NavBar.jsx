import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as RBNavbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { ShoppingBag } from "lucide-react";
import CartDropdown from "./CartDropDown";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateCartQuantity = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartQuantity(totalItems);
    };

    updateCartQuantity();
    window.addEventListener("storage", updateCartQuantity);
    return () => window.removeEventListener("storage", updateCartQuantity);
  }, [showCart]);

  return (
    <RBNavbar
      expand="lg"
      bg="light"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="shadow-sm px-5 py-3"
    >
      <Container>
        <RBNavbar.Brand as={Link} to="/" className="fw-bold fs-3" onClick={() => setExpanded(false)}>
          SN COLLECTIONS
        </RBNavbar.Brand>

        <RBNavbar.Toggle aria-controls="navbarNav" />
        <RBNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="align-items-lg-center">

            <NavDropdown title="TOPS" id="topsDropdown" className="mx-3">
              <NavDropdown.Item as={Link} to="/tops/all" onClick={() => setExpanded(false)}>All Tops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tops/long-sleeve" onClick={() => setExpanded(false)}>Long Sleeve Tops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tops/short-sleeve" onClick={() => setExpanded(false)}>Short Sleeve Tops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tops/crop" onClick={() => setExpanded(false)}>Crop Tops</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="DRESSES" id="dressesDropdown" className="mx-3">
              <NavDropdown.Item as={Link} to="/dresses/all" onClick={() => setExpanded(false)}>All Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dresses/mini" onClick={() => setExpanded(false)}>Mini Dresses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dresses/midi" onClick={() => setExpanded(false)}>Midi Dresses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dresses/maxi" onClick={() => setExpanded(false)}>Maxi Dresses</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="mx-3" onClick={() => setExpanded(false)}>
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
                    {cartQuantity}
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

export default NavBar;
