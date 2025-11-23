import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

// --- Internal Navitems Component ---
function Navitems({ navopen, closeNav }) {
    const [activeSection, setActiveSection] = useState('home');

    const items = [
        { label: 'HOME', link: '#home' },
        { label: 'ABOUT', link: '#about' },
        { label: 'PROJECTS', link: '#project' },
        { label: 'CONTACT', link: '#contact' },
    ];

    // --- SCROLL LISTENER LOGIC ---
    useEffect(() => {
        const handleScroll = () => {
            // 1. Check if user is at the very bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
                setActiveSection('contact');
                return;
            }

            // 2. Normal scroll logic for other sections
            const scrollPosition = window.scrollY + 150; 

            for (const item of items) {
                const sectionId = item.link.replace('#', '');
                const section = document.getElementById(sectionId);

                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
            flex flex-col md:flex-row gap-8 items-center 
            md:static absolute left-0 w-full md:w-auto bg-white md:bg-transparent
            transition-all duration-300 ease-in-out z-40
            ${navopen ? 'top-16 opacity-100 py-8 shadow-xl md:shadow-none' : '-top-[500px] md:opacity-100 opacity-0'}
        `}>
            {items.map((item) => (
                <a 
                    key={item.label}
                    href={item.link}
                    onClick={() => {
                        setActiveSection(item.link.replace('#', ''));
                        if (closeNav) closeNav();
                    }}
                    className={`
                        hover:scale-110 transform transition-all duration-300 ease-in-out
                        pb-1 border-b-2 
                        ${activeSection === item.link.replace('#', '') 
                            ? 'text-black border-black' // Active: Black Text + Black Underline
                            : 'text-gray-600 border-transparent hover:text-black' // Inactive: Gray Text + Invisible Underline
                        }
                    `}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}

// --- Main Navbar Component ---
function Navbar() {
    const [navopen, setNavOpen] = useState(false);
    
    const changeToggle = () => setNavOpen(!navopen);

    return (
        <div className="navbar w-full sticky top-0 bg-white z-50 md:py-4 shadow-sm">
            <div className="container mx-auto md:px-6 flex justify-between items-center">
                
                {/* LOGO */}
                <div 
                    className="logo text-2xl md:text-3xl font-semibold font-funnel cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    FORMACE
                </div>

                {/* NAVIGATION */}
                <Navitems navopen={navopen} closeNav={() => setNavOpen(false)} />

                {/* MOBILE TOGGLE */}
                <div className="toggle md:hidden cursor-pointer" onClick={changeToggle}>
                    {navopen ? <X size={30} /> : <Menu size={30} />}
                </div>

            </div>
        </div>
    );
}

export default Navbar;