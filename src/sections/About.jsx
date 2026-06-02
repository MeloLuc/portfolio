import Globe from 'react-globe.gl';
import { useRef } from 'react';

import Button from '../components/Button.jsx';
import useInView from '../hooks/useInView.js';

const linkedinUrl = 'https://www.linkedin.com/in/lucas-de-melo-monteiro-peixoto-34b78926b';

const stackIcons = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'assets/typescript.png',
  },
  {
    name: '',
    icon: null,
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const isAboutInView = useInView(sectionRef, { rootMargin: '320px 0px' });

  return (
    <section ref={sectionRef} className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-stretch">
        <div className="col-span-1">
          <div className="grid-container about-card">
            <div className="about-visual">
              <img
                src="assets/lucas-melo.png"
                alt="Lucas Melo"
                className="about-profile-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-copy">
              <p className="grid-headtext">Hi, I'm Lucas Melo</p>
              <p className="grid-subtext">
                I'm a Computer Engineering student at UEMG. With 1 year of experience, I have honed my skills in both
                frontend and backend dev, working with dynamic and responsive websites, APIs, and AI-powered applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container about-card">
            <div className="about-visual">
              <div className="stack-grid" aria-label="Tech stack">
                {stackIcons.map((stack, index) => (
                  <div className="stack-icon" key={stack.name || `more-${index}`}>
                    {stack.icon ? <img src={stack.icon} alt={stack.name} loading="lazy" decoding="async" /> : <span>...</span>}
                    <p>{stack.name || 'More'}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-copy">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Fueled by curiosity and a passion for solving complex problems, I actively explore a focused set of
                technologies to build effective solutions across web apps, databases, backend logic, and AI features.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <div className="grid-container about-card">
            <div className="about-visual globe-visual">
              {isAboutInView && (
                <Globe
                  height={292}
                  width={292}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: -18.5, lng: -44.5, text: 'Minas Gerais, Brazil', color: 'white', size: 15 }]}
                />
              )}
            </div>
            <div className="about-copy about-contact">
              <p className="grid-headtext">I'm very flexible with time zone & locations</p>
              <p className="grid-subtext">I&apos;m based in Minas Gerais, Brazil, and I'm open to remote work around the world.</p>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="block">
                <Button name="Contact Me" isBeam containerClass="w-full mt-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
