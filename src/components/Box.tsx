import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { HTMLMesh } from 'three/examples/jsm/Addons.js';
import { Boxpostion } from '../interface/global';
import { config, useSpring, animated } from '@react-spring/three';

const Box: React.FC<Boxpostion> = (props) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef<HTMLMesh>(null);

  useFrame(() => (ref.current!.rotation.x += 0 - 0.01));

  const { scale } = useSpring({
    scale: isClick ? 2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      onClick={() => {
        setIsClick(!isClick);
      }}
      onPointerOver={() => {
        setIsHover(true);
      }}
      onPointerLeave={() => {
        setIsHover(false);
      }}
      scale={scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHover ? 'orange' : 'hotpink'} />
    </animated.mesh>
  );
};

export default Box;
