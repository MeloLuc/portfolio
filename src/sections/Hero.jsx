import { Leva } from 'leva';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import useInView from '../hooks/useInView.js';

const Hero = () => {
  const sectionRef = useRef(null);
  const isHeroInView = useInView(sectionRef, { rootMargin: '160px 0px' });

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section ref={sectionRef} className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
        
        <p className="hero_tag text-gray_gradient">Learning, Building, Growing</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          frameloop={isHeroInView ? 'always' : 'never'}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: 'high-performance' }}>
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Cube position={sizes.cube2Position} />
              <Cube position={sizes.cube1Position} />
              <Cube position={sizes.cube3Position} />
              <Cube position={sizes.cube4Position} />
            </group>

            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a
          href="https://www.linkedin.com/in/lucas-de-melo-monteiro-peixoto-34b78926b"
          target="_blank"
          rel="noreferrer"
          className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
