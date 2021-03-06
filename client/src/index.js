import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Encode,
  Decode,
  Steganography,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encode" element={<Encode />} />
      <Route path="/decode" element={<Decode />} />
      <Route path="/steganography" element={<Steganography />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
