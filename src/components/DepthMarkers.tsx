import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DepthMarkers = () => {
  const ringRefs = useRef<THREE.Mesh[]>([]);
  const studioElementRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rotate camera lens rings
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z += 0.002 * (i + 1);
        // Pulsing effect for lens aperture simulation
        ring.scale.setScalar(1 + Math.sin(time * 2 + i) * 0.05);
      }
    });

    // Animate studio elements
    studioElementRefs.current.forEach((element, i) => {
      if (element) {
        element.rotation.y += 0.001;
        element.position.y = Math.sin(time + i) * 0.2;
      }
    });
  });

  // Create camera lens rings at each section depth
  const depths = [0, -25, -50, -75, -100];
  
  return (
    <>
      {/* Camera Lens Rings - simulate camera aperture */}
      {depths.map((z, index) => (
        <group key={`lens-${z}`} position={[0, 0, z]}>
          {/* Main lens ring */}
          <mesh 
            ref={(el) => { if (el) ringRefs.current[index] = el; }}
          >
            <torusGeometry args={[10, 0.08, 16, 64]} />
            <meshStandardMaterial 
              color={index % 2 === 0 ? '#ffffff' : '#000000'} 
              transparent 
              opacity={0.5}
              metalness={0.8}
              roughness={0.2}
              emissive={index % 2 === 0 ? '#ffffff' : '#000000'}
              emissiveIntensity={0.3}
            />
          </mesh>
          
          {/* Inner lens aperture blades */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <mesh 
                key={`blade-${i}`}
                position={[Math.cos(angle) * 9, Math.sin(angle) * 9, 0]}
                rotation={[0, 0, angle]}
              >
                <boxGeometry args={[0.1, 2, 0.05]} />
                <meshStandardMaterial 
                  color={index % 2 === 0 ? '#cccccc' : '#333333'} 
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
            );
          })}
        </group>
      ))}
      
      {/* Studio Grid Floor */}
      {depths.map((z, index) => (
        <group key={`studio-${z}`} position={[0, -6, z]}>
          <gridHelper 
            args={[24, 24, index % 2 === 0 ? '#ffffff' : '#111111', '#333333']} 
            rotation={[0, 0, 0]}
          />
          
          {/* Studio Light Stands */}
          {[[-10, 0], [10, 0], [0, -10], [0, 10]].map((pos, i) => (
            <mesh 
              key={`stand-${i}`}
              position={[pos[0], 3, pos[1]]}
              ref={(el) => { if (el) studioElementRefs.current[index * 4 + i] = el; }}
            >
              <cylinderGeometry args={[0.1, 0.1, 6, 8]} />
              <meshStandardMaterial 
                color={index % 2 === 0 ? '#cccccc' : '#222222'} 
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          ))}
          
          {/* Studio Spotlights */}
          {[[-10, 0], [10, 0]].map((pos, i) => (
            <pointLight
              key={`light-${i}`}
              position={[pos[0], 5, pos[1] + z]}
              intensity={0.5}
              distance={15}
              color={index % 2 === 0 ? '#ffffff' : '#aaaaaa'}
            />
          ))}
        </group>
      ))}
      
      {/* Floating camera frame corners */}
      {depths.map((z, index) => (
        <group key={`frame-${z}`} position={[0, 0, z]}>
          {[[-12, 8], [12, 8], [-12, -8], [12, -8]].map((pos, i) => (
            <mesh 
              key={`corner-${i}`}
              position={[pos[0], pos[1], 0]}
            >
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshStandardMaterial 
                color={index % 2 === 0 ? '#ffffff' : '#000000'} 
                transparent
                opacity={0.6}
                metalness={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}
    </>
  );
};
