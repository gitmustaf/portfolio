'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = () => {
  const ref = useRef<THREE.Points>(null);

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 1, 1);
    const mat = new THREE.PointsMaterial({
      size: 0.02,
      color: '#ffffff',
    });
    const coords = new Array(2000)
      .fill(0)
      .map(() => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, coords];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <points ref={ref} geometry={geo} material={mat}>
      {coords.map((pos, i) => (
        <mesh key={i} position={new THREE.Vector3(...pos)}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </points>
  );
};

export default Stars;
