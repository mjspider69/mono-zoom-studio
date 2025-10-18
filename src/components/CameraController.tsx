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
    // Slow down movement to see each page fully
    const targetZ = 10 - (offset * 130); // Extended range with slower progression
    
    // Very smooth camera movement for cinematic feel
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.06);
    
    // Camera lens rolling effect - simulate lens rotation while zooming
    const rollIntensity = offset * Math.PI * 6; // More visible rotations
    camera.rotation.z = Math.sin(rollIntensity) * 0.12; // Reduced rolling for stability
    
    // Minimal vertical movement to keep pages centered
    camera.position.y = Math.sin(offset * Math.PI * 2) * 0.2;
    
    // Minimal horizontal movement
    camera.position.x = Math.cos(offset * Math.PI * 2) * 0.15;
    
    // Very gentle pitch
    camera.rotation.x = Math.sin(offset * Math.PI) * 0.04;
    
    // Look straight ahead at the current section
    camera.lookAt(0, 0, camera.position.z - 15);
  });

  return null;
};
