import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import { assetPath } from '../utils/assetPath.js';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF(assetPath('models/cube.glb'));

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!cubeRef.current) return;

    const speed = hovered ? 2 : 0.75;
    cubeRef.current.rotation.y += delta * speed;
    cubeRef.current.rotation.x -= delta * speed;
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}>
          <meshLambertMaterial color="#22C55E" />
          <directionalLight position={[10, 10, 10]} intensity={0.6} castShadow />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload(assetPath('models/cube.glb'));

export default Cube;
