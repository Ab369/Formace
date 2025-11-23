import React from 'react';
import { ArrowRight } from 'lucide-react';
import bg from '../assets/2.jpeg'

function About() {
  return (
    <div id='about' className="relative bg-stone-50 text-stone-800 font-sans">
      
      {/* HEADER - Minimalist & Clean */}
      <div className="pt-6 pb-2 md:py-20 text-center md:bg-cream1 bg-grey">
        <h2 className="text-3xl md:text-5xl font-serif tracking-widest uppercase text-stone-900">About Us</h2>
        <div className="w-16 h-1 bg-stone-900 mx-auto md:mt-6"></div>
      </div>

      {/* MAIN SPLIT SECTION: Image Quote vs Detailed Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* LEFT COLUMN: The Quote (Visualized) */}
        {/* We place the quote over an image to make it a 'Hero' moment */}
        <div className="relative h-96 md:h-auto group overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-stone-900/50 group-hover:bg-stone-900/40 transition-colors duration-500"></div>
            </div>
            
            {/* The Quote Text */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-20 text-center">
                <h3 className="text-2xl md:text-4xl lg:text-5xl text-white font-serif leading-snug tracking-wide drop-shadow-lg italic">
                    "ELEGANT INTUITIVE DESIGNS CRAFTED BY PASSION"
                </h3>
            </div>
        </div>

        {/* RIGHT COLUMN: The Content (Clean & Readable) */}
        <div className="flex flex-col justify-center p-8 md:p-20 bg-stone-100">
            <div className="max-w-lg mx-auto">
                <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-stone-400">Our Philosophy</h4>
                <p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-6 font-light">
                    Architecture is not just about constructing buildings; it is about shaping the way we live. We strive to create environments that resonate with their inhabitants, fusing modern innovation with timeless aesthetic principles to build spaces that are both striking and sustainable.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-10 font-light">
                    We believe that every line drawn and every space curated tells a story. Our mission is to ensure that your story is told with clarity, elegance, and function.
                </p>
                
                {/* <button className="group flex items-center gap-3 text-stone-900 font-semibold uppercase tracking-wider hover:gap-5 transition-all text-sm border-b-2 border-stone-900 pb-1 w-fit">
                    Read Our Story <ArrowRight size={18} />
                </button> */}
            </div>
        </div>
      </div>

      {/* BOTTOM BANNER: Parallax Effect */}
      {/* bg-fixed creates the parallax scrolling effect */}
      <div className="relative py-24 md:py-32 flex items-center justify-center bg-fixed bg-cover bg-center"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80')" }}>
          
          <div className="absolute inset-0 bg-stone-900/70"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center border-y-2 border-white/20 py-10 max-w-4xl">
              <p className="text-xl md:text-3xl font-serif text-stone-100 leading-relaxed tracking-widest uppercase">
                  From concept to design we work closely with you to bring your vision to life
              </p>
          </div>
      </div>

    </div>
  );
}

export default About;