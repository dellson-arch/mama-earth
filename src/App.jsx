import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import DarkMode from "./components/Darkmode/DarkMode";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <DarkMode />
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
