// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </div>
  );
};

export default App;
