import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DepthMarkers = () => {
  const gridRefs = useRef<THREE.GridHelper[]>([]);
  const lightStandRefs = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Subtle animation for grids
    gridRefs.current.forEach((grid, i) => {
      if (grid) {
        grid.rotation.y = time * 0.05 + i * 0.1;
      }
    });
    
    // Gentle sway for light stands
    lightStandRefs.current.forEach((stand, i) => {
      if (stand) {
        stand.rotation.z = Math.sin(time + i) * 0.02;
      }
    });
  });

  const sections = [
    { z: 0, label: 'Home' },
    { z: -25, label: 'About' },
    { z: -50, label: 'Services' },
    { z: -75, label: 'Projects' },
    { z: -100, label: 'Contact' },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <group key={section.label} position={[0, 0, section.z]}>
          {/* Studio floor grid */}
          <gridHelper
            ref={(el) => {
              if (el) gridRefs.current[index] = el;
            }}
            args={[30, 30, '#333333', '#1a1a1a']}
            position={[0, -5, 0]}
          />
          
          {/* Light stand on the left */}
          <group
            ref={(el) => {
              if (el) lightStandRefs.current[index * 2] = el;
            }}
            position={[-8, 0, 0]}
          >
            <mesh position={[0, -2, 0]}>
              <cylinderGeometry args={[0.05, 0.15, 4, 8]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
            </mesh>
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.3, 0.1, 1, 8]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.6} />
            </mesh>
            <pointLight position={[0, 1.5, 0]} intensity={0.5} color="#ffffff" distance={10} />
          </group>
          
          {/* Light stand on the right */}
          <group
            ref={(el) => {
              if (el) lightStandRefs.current[index * 2 + 1] = el;
            }}
            position={[8, 0, 0]}
          >
            <mesh position={[0, -2, 0]}>
              <cylinderGeometry args={[0.05, 0.15, 4, 8]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
            </mesh>
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.3, 0.1, 1, 8]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.6} />
            </mesh>
            <pointLight position={[0, 1.5, 0]} intensity={0.5} color="#ffffff" distance={10} />
          </group>
          
          {/* Backdrop frame */}
          <mesh position={[0, 0, -3]}>
            <boxGeometry args={[16, 10, 0.1]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.3} 
              roughness={0.7}
              transparent
              opacity={0.3}
            />
          </mesh>
          
          {/* Corner frame markers */}
          {[
            [-7, 4, -2.9],
            [7, 4, -2.9],
            [-7, -4, -2.9],
            [7, -4, -2.9],
          ].map((pos, i) => (
            <mesh key={`corner-${i}`} position={pos as [number, number, number]}>
              <boxGeometry args={[0.5, 0.5, 0.05]} />
              <meshStandardMaterial color="#ffffff" metalness={0.9} />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Ambient studio elements */}
      <spotLight position={[0, 15, -50]} intensity={2} angle={0.5} penumbra={1} color="#ffffff" />
      <spotLight position={[10, 10, -25]} intensity={1.5} angle={0.4} penumbra={1} color="#f0f0f0" />
      <spotLight position={[-10, 10, -75]} intensity={1.5} angle={0.4} penumbra={1} color="#f0f0f0" />
    </>
  );
};
