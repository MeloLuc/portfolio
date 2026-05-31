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
    <section className="c-space my-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="head-text">My Work Experience</p>

        <div className="flex flex-wrap gap-3">
          <a className="resume-btn" href={assetPath('resume/curriculo-pt.pdf')} download>
            Curriculo PT
          </a>
          <a className="resume-btn" href={assetPath('resume/resume-en.pdf')} download>
            Resume EN
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src={assetPath('assets/arrow-up.png')} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={assetPath('assets/left-arrow.png')} alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
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
            />
          ) : (
            <img className="project-media_asset" src={currentProject.texture} alt={currentProject.title} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
