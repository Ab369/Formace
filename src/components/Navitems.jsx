import { useState, useEffect } from "react";

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
            // Offset helps trigger the change a bit before the section hits the very top
            const scrollPosition = window.scrollY + 150; 

            for (const item of items) {
                const sectionId = item.link.replace('#', '');
                const section = document.getElementById(sectionId);

                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    // Check if scroll position is within this section's bounds
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break; // Stop once we find the visible section
                    }
                }
            }
        };

        // Attach listener
        window.addEventListener('scroll', handleScroll);
        // Run once on mount to set initial active state
        handleScroll();

        // Cleanup
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
                        if (closeNav) closeNav(); // Close mobile menu on click
                    }}
                    className={`
                        text-sm font-bold tracking-widest transition-all duration-300
                        pb-1 border-b-2 
                        ${activeSection === item.link.replace('#', '') 
                            ? 'text-stone-900 border-stone-900' // Active State
                            : 'text-stone-500 border-transparent hover:text-stone-900' // Inactive State
                        }
                    `}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}

export default Navitems;