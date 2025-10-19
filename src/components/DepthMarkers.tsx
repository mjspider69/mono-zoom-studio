import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DepthMarkersProps {
  maxZ: number;
}

export const DepthMarkers = ({ maxZ }: DepthMarkersProps) => {
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

  // Create markers based on the new maxZ range
  const depths = [0, -maxZ/4, -maxZ/2, -maxZ*3/4, -maxZ];

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
                ref={(el) => { if (el) studioElementRefs.current[index * 8 + i] = el; }}
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

      {/* Studio Grid Floor (Only place it once at the starting point for visual reference) */}
      <group position={[0, -8, 0]}>
        <gridHelper
          args={[30, 30, '#111111', '#222222']}
          rotation={[0, 0, 0]}
        />
      </group>

      {/* Floating frame corners (Placed at start and end for cinematic frame effect) */}
      {[0, -maxZ].map((z, index) => (
        <group key={`frame-${z}`} position={[0, 0, z]}>
          {[[-12, 8], [12, 8], [-12, -8], [12, -8]].map((pos, i) => (
            <mesh
              key={`corner-${i}`}
              position={[pos[0], pos[1], 0]}
              ref={(el) => { if (el) backdropRefs.current[index * 4 + i] = el; }}
            >
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshStandardMaterial
                color={index === 0 ? '#ffffff' : '#000000'}
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
