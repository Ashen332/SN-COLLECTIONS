import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import AllTops from "./pages/AllTopsPage";
import LongSleeveTops from "./pages/LongSleeveTopsPage";
import ShortSleeveTops from "./pages/ShortSleeveTopsPage";
import CropTops from "./pages/CropTopsPage";
import DressesPage from "./pages/DressesPage";
import MiniDressesPage from "./pages/MiniDressesPage";
import MidiDresses from "./pages/MidiDressesPage";
import MaxiDresses from "./pages/MaxiDressesPage";
import Contact from "./pages/ContactUsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage"; // ✅ added

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
      <Navbar />

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
