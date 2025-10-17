import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const CameraController = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;
    
    // Calculate camera position - zoom through the sections
    // Start at Z=15, end at Z=-75 (past all sections)
    const targetZ = 15 - (offset * 100);
    
    // Smooth camera movement
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);
    
    // Add dynamic rotation for more dramatic effect
    camera.rotation.y = Math.sin(offset * Math.PI * 2) * 0.05;
    camera.rotation.x = offset * 0.1;
    
    // Look slightly ahead
    camera.lookAt(0, 0, camera.position.z - 5);
  });

  return null;
};
