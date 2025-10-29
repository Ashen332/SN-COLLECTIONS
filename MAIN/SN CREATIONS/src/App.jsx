import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./pages/Navbar";
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

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
