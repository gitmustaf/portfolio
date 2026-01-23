'use client';

import { Canvas } from '@react-three/fiber';
import Stars from './Stars';
import Sphere from './Sphere';
import Comets from './Comets';
import MouseLight from './MouseLight';
import UI from './UI';

const Hero = () => {
  return (
    <div className="h-screen relative">
      <Canvas>
        <ambientLight />
        <Stars />
        <Sphere />
        <Comets />
        <MouseLight />
      </Canvas>
      <UI />
    </div>
  );
};

export default Hero;
