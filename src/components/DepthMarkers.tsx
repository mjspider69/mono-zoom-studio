import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DepthMarkers = () => {
  const ringRefs = useRef<THREE.Mesh[]>([]);
  const studioElementRefs = useRef<THREE.Mesh[]>([]);
  const backdropRefs = useRef<THREE.Mesh[]>([]);

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

    // Subtle backdrop movement
    backdropRefs.current.forEach((backdrop, i) => {
      if (backdrop) {
        backdrop.position.y = Math.sin(time * 0.5 + i) * 0.1;
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
        <group key={`studio-${z}`} position={[0, -8, z]}>
          <gridHelper 
            args={[30, 30, index % 2 === 0 ? '#ffffff' : '#111111', '#222222']} 
            rotation={[0, 0, 0]}
          />
          
          {/* Studio Light Stands with Tripods */}
          {[[-12, -12], [12, -12], [-12, 12], [12, 12]].map((pos, i) => (
            <group key={`lightstand-${i}`} position={[pos[0], 0, pos[1]]}>
              {/* Tripod Legs */}
              {[0, 120, 240].map((angle) => (
                <mesh
                  key={`leg-${angle}`}
                  position={[
                    Math.cos((angle * Math.PI) / 180) * 0.3,
                    1.5,
                    Math.sin((angle * Math.PI) / 180) * 0.3
                  ]}
                  rotation={[0.3, (angle * Math.PI) / 180, 0]}
                >
                  <cylinderGeometry args={[0.03, 0.05, 3, 8]} />
                  <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
                </mesh>
              ))}
              
              {/* Main Stand */}
              <mesh 
                position={[0, 4, 0]}
                ref={(el) => { if (el) studioElementRefs.current[index * 12 + i] = el; }}
              >
                <cylinderGeometry args={[0.08, 0.08, 5, 8]} />
                <meshStandardMaterial 
                  color={index % 2 === 0 ? '#cccccc' : '#1a1a1a'} 
                  metalness={0.7}
                  roughness={0.2}
                />
              </mesh>
              
              {/* Light Head */}
              <mesh position={[0, 6.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
                <coneGeometry args={[0.4, 0.8, 8]} />
                <meshStandardMaterial 
                  color="#0a0a0a" 
                  metalness={0.9}
                  emissive="#ffffff"
                  emissiveIntensity={0.2}
                />
              </mesh>
            </group>
          ))}
          
          {/* Studio Spotlights */}
          {[[-12, -12], [12, -12], [-12, 12], [12, 12]].map((pos, i) => (
            <spotLight
              key={`spotlight-${i}`}
              position={[pos[0], 6.5, pos[1]]}
              angle={0.4}
              penumbra={0.5}
              intensity={1}
              distance={20}
              color={index % 2 === 0 ? '#ffffff' : '#cccccc'}
              castShadow
            />
          ))}
          
          {/* Backdrop Stands */}
          {[[-15, 0], [15, 0]].map((pos, i) => (
            <mesh
              key={`backdrop-stand-${i}`}
              position={[pos[0], 4, 0]}
            >
              <cylinderGeometry args={[0.12, 0.12, 8, 8]} />
              <meshStandardMaterial color="#0a0a0a" metalness={0.8} />
            </mesh>
          ))}
          
          {/* Backdrop Cloth */}
          <mesh 
            position={[0, 4, 1]}
            ref={(el) => { if (el) backdropRefs.current[index] = el; }}
          >
            <planeGeometry args={[30, 8]} />
            <meshStandardMaterial 
              color={index % 2 === 0 ? '#f0f0f0' : '#0a0a0a'} 
              side={THREE.DoubleSide}
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          
          {/* Camera Dolly Track */}
          {[-1, 1].map((side) => (
            <mesh 
              key={`track-${side}`}
              position={[side * 2, -0.5, -5]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <boxGeometry args={[0.1, 20, 0.2]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.9} />
            </mesh>
          ))}
          
          {/* Reflector Boards */}
          {[[-8, -8], [8, -8]].map((pos, i) => (
            <group key={`reflector-${i}`} position={[pos[0], 2, pos[1]]} rotation={[0, Math.PI / 4, 0]}>
              <mesh>
                <planeGeometry args={[1.5, 2]} />
                <meshStandardMaterial 
                  color="#e0e0e0" 
                  metalness={0.5}
                  roughness={0.3}
                  side={THREE.DoubleSide}
                />
              </mesh>
              {/* Reflector Stand */}
              <mesh position={[0, -1.5, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                <meshStandardMaterial color="#1a1a1a" />
              </mesh>
            </group>
          ))}
          
          {/* Studio Clamps and Equipment */}
          {[[-14, -14], [14, -14], [-14, 14], [14, 14]].map((pos, i) => (
            <group key={`equipment-${i}`} position={[pos[0], 0, pos[1]]}>
              <mesh position={[0, 0.3, 0]}>
                <boxGeometry args={[0.5, 0.6, 0.5]} />
                <meshStandardMaterial color="#3a3a3a" metalness={0.6} />
              </mesh>
            </group>
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
