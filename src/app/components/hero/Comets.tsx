'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Trail } from '@react-three/drei';

const Comet = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { radius, speed, angle } = useMemo(() => {
    return {
      radius: Math.random() * 5 + 3,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <Trail
      width={1}
      length={8}
      color={new THREE.Color(0xffffff * Math.random())}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Trail>
  );
};

const Comets = () => {
  return (
    <group>
      {[...Array(20)].map((_, i) => (
        <Comet key={i} />
      ))}
    </group>
  );
};

export default Comets;
