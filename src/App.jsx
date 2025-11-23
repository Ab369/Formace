import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectGallery from "./components/ProjectGallery";
import Gallery from "./components/Gallery";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  // Preloader shows ONLY on first load / refresh
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const hideNavbar = location.pathname === "/gallery";

  // GSAP page fade-in
  useEffect(() => {
    if (!isLoading) {
      gsap.set(".content", { opacity: 0, y: 10 });
      gsap.to(".content", {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power3.out",
      });
    }
  }, [isLoading, location.pathname]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="font-ubuntu">
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="content">
                {!hideNavbar && <Navbar />}
                <Home />
                <About />
                <ProjectGallery />
                <Footer />
              </div>
            }
          />

          {/* Gallery Route (Navbar OFF) */}
          <Route
            path="/gallery"
            element={
              <div className="content">
                {!hideNavbar && <Navbar />}
                <Gallery />
                <Footer />
              </div>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
