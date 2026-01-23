'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MouseLight = () => {
  const ref = useRef<THREE.PointLight>(null);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.position.x = (mouse.x * window.innerWidth) / 2;
      ref.current.position.y = -(mouse.y * window.innerHeight) / 2;
    }
  });

  return <pointLight ref={ref} intensity={1} color="#ffffff" />;
};

export default MouseLight;
