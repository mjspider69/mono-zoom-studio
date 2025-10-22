import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const CameraController = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;

    // Smooth traveling movie camera movement through 8 scenes
    // Camera starts at Z=10 and travels to Z=-370 (380 units total)
    // Fixed scroll parameters: pages=26, MAX_Z_DISTANCE=380
    const MAX_Z_DISTANCE = 380;
    const targetZ = 10 - (offset * MAX_Z_DISTANCE);

    // Ultra-smooth cinematic camera movement
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
