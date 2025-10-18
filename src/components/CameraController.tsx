import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const CameraController = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame((state) => {
    const offset = scroll.offset;
    
    // Calculate camera position - move through each section ring
    // Each section is 25 units apart: 0, -25, -50, -75, -100
    const targetZ = 5 - (offset * 125); // Extended range for all 5 sections
    
    // Smooth camera movement with slower lerp for cinematic feel
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    
    // Camera lens rolling effect - simulate lens rotation while zooming
    const rollIntensity = offset * Math.PI * 4; // Multiple rotations
    camera.rotation.z = Math.sin(rollIntensity) * 0.15; // Rolling effect
    
    // Subtle vertical movement for dynamic feel
    camera.position.y = Math.sin(offset * Math.PI * 2) * 0.5;
    
    // Slight horizontal oscillation for depth perception
    camera.position.x = Math.cos(offset * Math.PI * 2) * 0.3;
    
    // Gentle pitch rotation
    camera.rotation.x = Math.sin(offset * Math.PI) * 0.08;
    
    // Look at the next ring slightly
    const lookAheadZ = camera.position.z - 10;
    camera.lookAt(0, 0, lookAheadZ);
  });

  return null;
};
