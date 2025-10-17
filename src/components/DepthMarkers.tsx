import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DepthMarkers = () => {
  const ringRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    // Rotate rings for visual effect
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z += 0.001 * (i + 1);
      }
    });
  });

  // Create rings at each section depth
  const depths = [0, -25, -50, -75, -100];
  
  return (
    <>
      {depths.map((z, index) => (
        <mesh 
          key={z} 
          position={[0, 0, z]} 
          ref={(el) => { if (el) ringRefs.current[index] = el; }}
        >
          <torusGeometry args={[8, 0.05, 16, 100]} />
          <meshBasicMaterial 
            color={index % 2 === 0 ? '#ffffff' : '#000000'} 
            transparent 
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      
      {/* Grid lines for depth perception */}
      {depths.map((z, index) => (
        <gridHelper 
          key={`grid-${z}`}
          args={[20, 20, index % 2 === 0 ? '#ffffff' : '#000000', '#333333']} 
          position={[0, -5, z]}
          rotation={[0, 0, 0]}
        />
      ))}
    </>
  );
};
