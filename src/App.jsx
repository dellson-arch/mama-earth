import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function ThemeDebugger() {
  const { theme } = useTheme();
  
  // Real-time DOM verification
  useEffect(() => {
    console.log(`[Theme Debug] React: ${theme} | DOM: ${document.documentElement.className}`);
  }, [theme]);

  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white p-2 text-xs z-50">
      THEME DEBUG: {theme} | HTML class: {document.documentElement.className}
    </div>
  );
}

function MainApp() {
  const { theme } = useTheme();

  // Nuclear sync guarantee
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains(theme)) {
      console.warn("Force-correcting DOM theme class");
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      root.style.colorScheme = theme;
    }
  }, [theme]);

  return (
    <div 
      className={`app ${theme}`}
      data-theme={theme} // Additional attribute for CSS targeting
      style={{
        // Immediate fallback colors
        '--bg-fallback': theme === 'dark' ? '#111827' : '#ffffff',
        '--text-fallback': theme === 'dark' ? '#f3f4f6' : '#111827'
      }}
    >
      <ThemeDebugger />
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