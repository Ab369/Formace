import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();
      tl.set(".content", { opacity: 0, y: 10 }) // Initial state
        .to(".content", {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power3.out"
        });
    }
  }, [isLoading]);

  return (
    <div className="font-ubuntu">
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="content">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
