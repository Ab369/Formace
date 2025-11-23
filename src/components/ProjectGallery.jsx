import React, { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectGallery = () => {
  
  // --- 1. GENERATE ALL DATA ---
  // We create the definitions for all 29 images first
  const allProjects = useMemo(() => {
    return Array.from({ length: 29 }, (_, i) => {
      const fileNum = i + 1;
      // Logic: Files 1-15 and 18 are .jpeg, the rest are .jpg
      const isJpeg = (fileNum <= 15&&fileNum>1) || fileNum === 18;
      const extension = isJpeg ? 'jpeg' : 'jpg';

      return {
        id: i,
        // Adjust path if necessary (e.g. './assets' vs '../assets')
        src: new URL(`../assets/${fileNum}.${extension}`, import.meta.url).href,
        title: `Project ${fileNum}`,
      };
    });
  }, []);

  // --- 2. SELECTION LOGIC ---
  // Select 9 images total: Project 28 (static) + 8 Random others
  const visibleProjects = useMemo(() => {
    const targetId = 27; // Array index for Project 28 (since ID starts at 0)
    
    // Get the specific static image (28.jpg)
    const staticProject = allProjects.find(p => p.id === targetId);
    
    // Get everyone else
    const otherProjects = allProjects.filter(p => p.id !== targetId);

    // Shuffle the "other" projects randomly
    const shuffled = [...otherProjects].sort(() => 0.5 - Math.random());

    // Take the first 8 random images
    const randomSelection = shuffled.slice(0, 8);

    // Return combined array: 28.jpg first, then the 8 random ones
    return [staticProject, ...randomSelection];
  }, [allProjects]);

  return (
    <section className="gallery-section" id='project'>
      {/* HEADER */}
      <div className="gallery-header">
        <h2>SELECTED WORKS</h2>
        <p>A visual journey through our recent architectural endeavors.</p>
      </div>

      {/* MASONRY GRID */}
      <div className="masonry-grid">
        {visibleProjects.map((project) => (
          <div key={project.id} className="gallery-item">
            <img 
              src={project.src} 
              alt={project.title} 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* VIEW MORE LINK */}
      <div className="load-more-container">
        <a href="/gallery" className="load-more-btn">
          View More Projects
          <ArrowRight size={18} style={{ marginLeft: '8px' }} />
        </a>
      </div>

      {/* STYLES */}
      <style>{`
        /* Section Containers */
        .gallery-section {
          padding: 80px 20px;
          background-color: #E2E6E7;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .gallery-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 700px) {
          .gallery-header h2 {
            font-size: 2rem;
          }
        }

        .gallery-header p {
          color: #666;
          font-size: 1rem;
        }

        /* Masonry Layout Logic */
        .masonry-grid {
          column-count: 1;
          column-gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .masonry-grid { column-count: 2; }
        }
        @media (min-width: 1024px) {
          .masonry-grid { column-count: 3; }
        }

        /* Individual Image Cards */
        .gallery-item {
          margin-bottom: 20px;
          break-inside: avoid;
          overflow: hidden;
          border-radius: 2px;
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s ease;
        }

        /* Hover Effects */
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* View More Button */
        .load-more-container {
          text-align: center;
          margin-top: 50px;
        }

        .load-more-btn {
          background: transparent;
          border: 1px solid #333;
          color: #333;
          padding: 12px 30px;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .load-more-btn:hover {
          background: #333;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;