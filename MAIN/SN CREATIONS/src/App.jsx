import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar.jsx";
import Footer from "./pages/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AllTops from "./pages/AllTopsPage.jsx";
import LongSleeveTops from "./pages/LongSleeveTopsPage.jsx";
import ShortSleeveTops from "./pages/ShortSleeveTopsPage.jsx";
import CropTops from "./pages/CropTopsPage.jsx";
import DressesPage from "./pages/DressesPage.jsx";
import MiniDressesPage from "./pages/MiniDressesPage.jsx";
import MidiDresses from "./pages/MidiDressesPage.jsx";
import MaxiDresses from "./pages/MaxiDressesPage.jsx";
import Contact from "./pages/ContactUsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import OrderSuccessPage from "./pages/OrderSuccessPage.jsx";
 // ✅ added

import ScrollToTop from "./pages/ScrollToTop.jsx";

function App() {
  return (
    <div
      className="app-container"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {/* Persistent Navbar */}
      <NavBar />
      <ScrollToTop />

      {/* Page Content */}
      <main style={{ flex: 1, marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tops/all" element={<AllTops />} />
          <Route path="/tops/long-sleeve" element={<LongSleeveTops />} />
          <Route path="/tops/short-sleeve" element={<ShortSleeveTops />} />
          <Route path="/tops/crop" element={<CropTops />} />
          <Route path="/dresses/all" element={<DressesPage />} />
          <Route path="/dresses/mini" element={<MiniDressesPage />} />
          <Route path="/dresses/midi" element={<MidiDresses />} />
          <Route path="/dresses/maxi" element={<MaxiDresses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} /> {/* ✅ new success page */}
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default App;
