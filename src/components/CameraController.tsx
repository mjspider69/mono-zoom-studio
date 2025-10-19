import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const CameraController = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;

    // Smooth traveling movie camera movement through 5 sections
    // Sections at: Z=0, Z≈-13.75, Z≈-27.5, Z≈-41.25, Z≈-55
    // Camera starts at Z=10 and travels across 8 virtual pages
    const maxZDistance = 110;
    const targetZ = 10 - (offset * maxZDistance);

    // Snappier cinematic camera movement with tighter lerp
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    
    // Keep camera steady - no rotation for clean viewing
    camera.position.y = 0;
    camera.position.x = 0;
    camera.rotation.x = 0;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    
    // Look straight ahead
    camera.lookAt(0, 0, targetZ - 10);
  });

  return null;
};
