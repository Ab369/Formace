import React, { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectGallery = () => {
  const navigate = useNavigate();

  // --- 1. GENERATE ALL DATA ---
  const allProjects = useMemo(() => {
    return Array.from({ length: 29 }, (_, i) => {
      const fileNum = i + 1;
      // Logic: Files 2-15 and 18 and 20 are .jpeg, the rest are .jpg
      const isJpeg = (fileNum <= 15 && fileNum > 1) || fileNum === 18 || fileNum === 20;
      const extension = isJpeg ? 'jpeg' : 'jpg';

      return {
        id: i,
        src: new URL(`../assets/${fileNum}.${extension}`, import.meta.url).href,
        title: `Project ${fileNum}`,
      };
    });
  }, []);

  // --- 2. SELECTION LOGIC ---
  // Still select 9 images total so desktop sees them all
  const visibleProjects = useMemo(() => {
    const targetId = 27; // Array index for Project 28
    
    const staticProject = allProjects.find(p => p.id === targetId);
    const otherProjects = allProjects.filter(p => p.id !== targetId);
    const shuffled = [...otherProjects].sort(() => 0.5 - Math.random());
    const randomSelection = shuffled.slice(0, 8);

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
        <button onClick={() => {
          navigate('/Gallery')
          window.scrollTo(0,0)
          }} className="load-more-btn">
          View More Projects
          <ArrowRight size={18} style={{ marginLeft: '8px' }} />
         </button>
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

        /* Tablet: 2 Columns */
        @media (min-width: 768px) {
          .masonry-grid { column-count: 2; }
        }
        
        /* Desktop: 3 Columns */
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

        /* 👉 NEW RULE: Hide items 6 through 9 on Mobile (max-width 767px) */
        @media (max-width: 767px) {
           .gallery-item:nth-child(n+6) {
              display: none;
           }
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