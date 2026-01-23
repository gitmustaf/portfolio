'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 2;
      ref.current.rotation.y += delta / 2;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial
        color="#8A2BE2"
        emissive="#8A2BE2"
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0.1}
      />
    </mesh>
  );
};

export default Sphere;
