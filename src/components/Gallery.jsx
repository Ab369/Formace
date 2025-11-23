import React, { useState, useEffect, useRef } from 'react';
import { X, Grid, Columns, ArrowLeft } from 'lucide-react';

const ImmersiveGallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImg, setSelectedImg] = useState(null);
  const [animState, setAnimState] = useState('closed');
  const [originRect, setOriginRect] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  const lightboxRef = useRef(null);

  // --- DATA ---
  const allProjects = Array.from({ length: 29 }, (_, i) => {
    const fileNum = i + 1;
    const isJpeg = (fileNum <= 15 && fileNum > 1) || fileNum === 18;
    const extension = isJpeg ? 'jpeg' : 'jpg';
    return {
      id: i,
      src: new URL(`../assets/${fileNum}.${extension}`, import.meta.url).href,
      category: "Architecture",
      title: `Project ${fileNum}`,
    };
  });

  // --- LIGHTBOX LOGIC ---
  const openLightbox = (e, project) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOriginRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });

    setSelectedImg(project);
    setAnimState('opening');
  };

  const closeLightbox = () => {
    setAnimState('closing');
    setTimeout(() => {
      setSelectedImg(null);
      setAnimState('closed');
    }, 500);
  };

  // Scroll to center after opening
  useEffect(() => {
    if (animState === 'opening') {
      requestAnimationFrame(() => setAnimState('open'));
    }

    if (animState === 'open' && lightboxRef.current) {
      lightboxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [animState]);

  // Lightbox animation styles
  const getLightboxStyle = () => {
    if (!originRect) return {};

    if (animState === 'opening' || animState === 'closing') {
      return {
        top: originRect.top,
        left: originRect.left,
        width: originRect.width,
        height: originRect.height,
        borderRadius: '8px',
        objectFit: 'cover',
      };
    }

    if (animState === 'open') {
      return {
        top: '50%',
        left: '50%',
        width: '90vw',
        height: '90vh',
        transform: 'translate(-50%, -50%)',
        borderRadius: '4px',
        objectFit: 'contain',
      };
    }

    return {};
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-white selection:text-black">

      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-row justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="/" className="text-stone-400 hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-white/10 flex items-center justify-center">
               <ArrowLeft size={24} />
            </a>
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-white"></div>
              <div>
                <h1 className="text-xl font-serif tracking-widest uppercase">The Archive</h1>
                <p className="text-xs text-stone-500 tracking-wide">Formace</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-stone-900/50 p-1 rounded-lg border border-stone-800">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-stone-700 text-white' : 'text-stone-500 hover:text-white'}`}>
              <Grid size={18} />
            </button>
            <button onClick={() => setViewMode('stream')} className={`p-2 rounded-md transition-all ${viewMode === 'stream' ? 'bg-stone-700 text-white' : 'text-stone-500 hover:text-white'}`}>
              <Columns size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN GALLERY */}
      <main className="p-4 md:p-8 min-h-[80vh]">

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="masonry-grid" onMouseLeave={() => setHoveredImg(null)}>
            {allProjects.map((project) => (
              <div
                key={project.id}
                className={`gallery-item group mb-6 break-inside-avoid relative cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-out
                  ${hoveredImg && hoveredImg !== project.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}
                  ${selectedImg?.id === project.id ? 'opacity-0' : ''}
                `}
                onMouseEnter={() => setHoveredImg(project.id)}
                onClick={(e) => openLightbox(e, project)}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* STREAM VIEW */}
        {viewMode === 'stream' && (
          <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide h-[70vh] items-center">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="snap-center shrink-0 relative group cursor-pointer h-full w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-lg overflow-hidden border border-stone-800 shadow-2xl"
                onClick={(e) => openLightbox(e, project)}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}

      </main>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div
          ref={lightboxRef}
          className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500
            ${animState === 'open' ? 'bg-black/95' : 'bg-transparent pointer-events-none'}
          `}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className={`absolute top-6 right-6 text-stone-400 hover:text-white transition-all duration-300 p-2 bg-white/10 rounded-full backdrop-blur-sm z-50
              ${animState === 'open' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* IMAGE — CLICKING IT ALSO CLOSES */}
          <img
            src={selectedImg.src}
            alt="Project View"
            className="fixed shadow-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
            style={getLightboxStyle()}
            onClick={closeLightbox}
          />
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .masonry-grid {
          column-count: 1;
          column-gap: 24px;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 768px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1280px) { .masonry-grid { column-count: 3; } }
      `}</style>
    </div>
  );
};

export default ImmersiveGallery;
