import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#2D313D] ">
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
