import React, { useRef, useState } from 'react';
import { Facebook, Instagram, Phone, Mail, Send, Loader2, MapPin } from 'lucide-react';
// import emailjs from '@emailjs/browser'; // Uncomment this in your local project

export default function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // --- SIMULATION FOR UI PREVIEW (Remove this block in production) ---
    setTimeout(() => {
      setStatus('success');
      // Reset form simulation
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
    // ---------------------------------------------------------------
  };

  return (
    <footer id='contact' className="relative bg-stone-950 text-stone-200 font-funnel pt-20 pb-10 overflow-hidden">
       
       {/* Background Texture/Image */}
       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
       </div>

       {/* Gradient Overlay */}
       <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent"></div>
       
       <div className="relative z-10 container mx-auto px-6">
         
         {/* TOP HEADER SECTION */}
         <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16 border-b border-stone-800 pb-10">
             <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-funnel text-white tracking-tight mb-4">
                   Let's Build <br/> <span className="text-stone-500 italic font-serif">Something Iconic.</span>
                </h2>
                <p className="text-stone-400 text-lg max-w-lg">
                   Ready to bring your vision to life? Reach out to our team of architects and designers.
                </p>
             </div>
             
             {/* Contact Details Section */}
             <div className="flex flex-col gap-4 min-w-[300px] items-center justify-center align-center">
                <p className="text-stone-300 text-base font-medium tracking-wide">For any queries contact:</p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center align-center">
                   {/* Updated Email with mailto link */}
                   <ContactPill 
                     Icon={Mail} 
                     label="Email Us" 
                     value="theformacegroup@gmail.com" 
                     href="mailto:theformacegroup@gmail.com"
                   />
                   
                   {/* Updated Instagram with direct URL */}
                   <ContactPill 
                     Icon={Instagram} 
                     label="DM on Instagram" 
                     value="@the_formace_architects" 
                     href="https://www.instagram.com/the_formace_architects/?igsh=MW1tMjY4djQ4aTRnYQ%3D%3D#"
                   />
                </div>
             </div>
         </div>

         {/* FOOTER BOTTOM: Socials & Copyright */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-stone-800 pt-8">
             
             {/* Social Icons */}
             <div className="flex gap-4">
                <SocialIcon 
                    Icon={Instagram} 
                    label="Instagram" 
                    href="https://www.instagram.com/the_formace_architects/?igsh=MW1tMjY4djQ4aTRnYQ%3D%3D#" 
                />
             </div>

             <div className="text-center md:text-right">
                <p className="text-stone-500 text-sm font-medium tracking-wide">FORMACE ARCHITECT SOLUTIONS</p>
                <p className="text-stone-600 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
             </div>
         </div>

       </div>
    </footer>
  );
}

// Helper Components for cleaner code
// Now accepts an 'href' prop to render as a link
const ContactPill = ({ Icon, label, value, href }) => {
    const content = (
       <>
          <div className="p-2 bg-stone-800 rounded-full text-white shadow-inner"><Icon size={20} /></div>
          <div>
             <p className="text-xs text-stone-400 uppercase tracking-wider font-bold mb-0.5">{label}</p>
             <p className="font-medium text-stone-100 text-base select-all tracking-wide">{value}</p>
          </div>
       </>
    );

    const containerClasses = "flex items-center gap-4 bg-stone-900/80 backdrop-blur-sm border border-stone-800 px-6 py-4 rounded-xl hover:border-stone-500 hover:bg-stone-900 transition-all cursor-pointer shadow-lg";

    if (href) {
        return (
            <a 
                href={href} 
                target={href.startsWith('mailto') ? undefined : "_blank"} 
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={containerClasses}
            >
                {content}
            </a>
        );
    }

    return (
        <div className={containerClasses}>
            {content}
        </div>
    );
};

const SocialIcon = ({ Icon, label, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label} 
    className="p-3 bg-stone-900 border border-stone-800 rounded-full text-stone-400 hover:text-white hover:border-stone-500 hover:bg-stone-800 transition-all duration-300 transform hover:scale-105"
  >
     <Icon size={20} />
  </a>
);