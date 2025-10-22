import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DepthMarkers = () => {
  const gridRefs = useRef<THREE.GridHelper[]>([]);
  const lightStandRefs = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Subtle animation for grids - slower rotation
    gridRefs.current.forEach((grid, i) => {
      if (grid) {
        grid.rotation.y = time * 0.03 + i * 0.1;
        grid.position.y = -5 + Math.sin(time * 0.5 + i) * 0.1;
      }
    });

    // Gentle sway and pulse for light stands
    lightStandRefs.current.forEach((stand, i) => {
      if (stand) {
        stand.rotation.z = Math.sin(time * 0.8 + i) * 0.03;
        stand.position.y = Math.sin(time * 0.6 + i * 0.5) * 0.2;
      }
    });
  });

  // 8 sections matching the 8 scenes
  const sections = [
    { z: 0, label: 'Home' },
    { z: -47.5, label: 'Founder' },
    { z: -95, label: 'Mission' },
    { z: -142.5, label: 'Clients' },
    { z: -190, label: 'Team' },
    { z: -237.5, label: 'Solutions' },
    { z: -285, label: 'Projects' },
    { z: -332.5, label: 'Contact' },
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
            <pointLight position={[0, 1.5, 0]} intensity={0.8} color={index === 0 ? "#ff00ff" : index === 1 ? "#00ffff" : index === 2 ? "#ffff00" : index === 3 ? "#00ff00" : index === 4 ? "#ff0080" : index === 5 ? "#ff6600" : index === 6 ? "#0099ff" : "#ff0066"} distance={12} decay={2} />
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
            <pointLight position={[0, 1.5, 0]} intensity={0.8} color={index === 0 ? "#00ffff" : index === 1 ? "#ffff00" : index === 2 ? "#ff00ff" : index === 3 ? "#ff0080" : index === 4 ? "#00ff00" : index === 5 ? "#0099ff" : index === 6 ? "#ff6600" : "#00ff99"} distance={12} decay={2} />
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

      {/* Ambient studio elements with vibrant cinematic lighting */}
      <spotLight position={[0, 15, -95]} intensity={2} angle={0.5} penumbra={1} color="#ff00ff" decay={2} />
      <spotLight position={[10, 10, -47.5]} intensity={1.5} angle={0.4} penumbra={1} color="#00ffff" decay={2} />
      <spotLight position={[-10, 10, -142.5]} intensity={1.5} angle={0.4} penumbra={1} color="#ffff00" decay={2} />
      <spotLight position={[0, 12, -190]} intensity={1.8} angle={0.45} penumbra={1} color="#00ff00" decay={2} />
      <spotLight position={[10, 12, -237.5]} intensity={1.6} angle={0.45} penumbra={1} color="#ff6600" decay={2} />
      <spotLight position={[-10, 12, -285]} intensity={1.7} angle={0.45} penumbra={1} color="#0099ff" decay={2} />
      <spotLight position={[0, 15, -332.5]} intensity={1.9} angle={0.5} penumbra={1} color="#ff0066" decay={2} />
    </>
  );
};
