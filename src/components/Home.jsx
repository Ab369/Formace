import { useEffect, useState } from 'react'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import bg1 from '../assets/4.jpeg'
import bg2 from '../assets/5.jpeg'
import bg3 from '../assets/6.jpeg'
import bg4 from '../assets/13.jpeg'
import bg5 from '../assets/24.jpg'

function Home() {
    // Using high-quality architecture images from Unsplash for the demo
    const backgrounds = [bg1,bg4,bg3,bg2,bg5];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000); // Changes every 5 seconds

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div id='home' className="outer relative bg-gray-900 border-t-2 border-solid border-gray-800 w-full overflow-hidden h-[90vh] md:h-[89vh]">
            
            {/* --- BACKGROUND SLIDER LAYER --- */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out
                        ${index === currentIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
                    `}
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Dark Overlay Layer: Reduced opacity from 50% to 20% for brighter images */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Gradient Overlay: Reduced intensity for a subtler vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
                </div>
            ))}

            {/* --- CONTENT LAYER --- */}
            <div className="inner relative z-10 flex flex-col justify-center text-center items-center h-full px-4">
                {/* Animated Text Container */}
                <div className="max-w-5xl overflow-hidden px-4">
                    <h1 className={`text-3xl md:text-7xl text-stone-100 font-bold drop-shadow-2xl tracking-wide transform transition-all duration-1000 ease-out
                        ${currentIndex >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                    `}>
                        CRAFTING SPACES THAT INSPIRE
                    </h1>
                    <p className="text-stone-200 mt-6 text-base md:text-2xl font-light max-w-3xl mx-auto drop-shadow-xl tracking-wide leading-relaxed">
                        From concept to creation, we bring your architectural vision to life with elegance and precision.
                    </p>
                </div>
            </div>

            {/* --- NAVIGATION DOTS (Bottom Center) --- */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {backgrounds.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 shadow-md
                            ${index === currentIndex ? 'bg-stone-100 w-8' : 'bg-stone-100/40 w-2 hover:bg-stone-100/80'}
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* --- SOCIALS (Right Side Vertical on Desktop) --- */}
            <div className="socials absolute z-20 flex gap-4 md:flex-col md:gap-12 
                            bottom-6 right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-8 md:block hidden">                 
                <a href="https://www.instagram.com/the_formace_architects/?igsh=MW1tMjY4djQ4aTRnYQ%3D%3D#" target='_blank' className='group relative text-stone-100 hover:text-white transition-colors '>
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Instagram className="w-6 h-6 md:w-8 md:h-8 relative hover:scale-110 transition-transform duration-200 drop-shadow-lg" />
                </a>
            </div>
        </div>
    )
}

export default Home