import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import { myProjects } from '../constants/index.js';
import { assetPath } from '../utils/assetPath.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  const isVideo = currentProject.texture?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <section className="c-space my-20" id="projects">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="head-text">My Projects</p>

        <div className="flex flex-wrap gap-3">
          <a className="resume-btn" href='https://github.com/MeloLuc/MeloLuc/blob/main/curriculo_lucas_melo_monteiro_peixoto.pdf'>
            Portuguese Resume
          </a>
          <a className="resume-btn" href='https://github.com/MeloLuc/MeloLuc/blob/main/curriculum_lucas_melo_monteiro_peixoto.pdf'>
            Resume EN
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="pointer-events-none absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="relative z-10 flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo" title={tag.name}>
                  {tag.path ? (
                    <img src={tag.path} alt={tag.name} loading="lazy" decoding="async" />
                  ) : (
                    <span>{tag.label}</span>
                  )}
                </div>
              ))}
            </div>

          </div>

          <div className="relative z-10 flex justify-between items-center mt-7">
            <button type="button" className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={assetPath('assets/left-arrow.png')} alt="left arrow" />
            </button>

            <button type="button" className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={assetPath('assets/right-arrow.png')} alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="project-media">
          {isVideo ? (
            <video
              key={currentProject.texture}
              className="project-media_asset"
              src={currentProject.texture}
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            />
          ) : (
            <img
              className="project-media_asset"
              src={currentProject.texture}
              alt={currentProject.title}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
