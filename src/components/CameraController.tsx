import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const CameraController = () => {
  const scroll = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>();

  useFrame(({ camera }) => {
    const offset = scroll.offset;
    
    // Calculate camera position based on scroll
    // Each section is 20 units apart on Z axis
    const targetZ = 10 - (offset * 80);
    
    // Smooth camera movement
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    
    // Slight rotation for dynamic effect
    camera.rotation.y = Math.sin(offset * Math.PI) * 0.1;
  });

  return null;
};
