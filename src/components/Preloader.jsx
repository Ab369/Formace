import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
    const completeText = new SplitType(".loading-text.complete", { types: "chars" });

    gsap.set(".loading-text.complete", { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.2, // Further reduced duration
      stagger: 0.02, // Faster stagger for quicker animation
      ease: "power2.out"
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete(); // Notify App that preloading is complete
      }
    });

    tl.to(".progress-bar", {
      width: "100%",
      duration: 1.5, // Further reduced progress bar duration
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        document.querySelector(".percentage").textContent = progress;
      }
    })
      .to(".loading-text.initial", {
        y: "-100%",
        duration: 0.3, // Further reduced duration
        ease: "power2.inOut"
      })
      .to(".loading-text.complete", {
        y: "0%",
        duration: 0.3, // Further reduced duration
        ease: "power2.inOut"
      }, "<")
      .to(completeText.chars, {
        opacity: 1,
        y: 0,
        duration: 0.15, // Faster duration
        stagger: 0.01, // Faster stagger
        ease: "power2.out"
      }, "<0.1")
      .to(".preloader", {
        y: "-100vh",
        duration: 0.6, // Further reduced exit duration
        ease: "power2.inOut",
        delay: 0.3 // Further reduced delay before hiding preloader
      });
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <div className="text-container">
        <div className="loading-text initial">Loading</div>
        <div className="loading-text complete">Welcome to FORMACE!</div>
      </div>
      <div className="percentage">0</div>
    </div>
  );
};

export default Preloader;
