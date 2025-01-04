// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default App;
