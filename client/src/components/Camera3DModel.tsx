import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export const Camera3DModel = () => {
  const cameraBodyRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset;
    
    if (cameraBodyRef.current) {
      // Position camera model to follow viewport camera
      cameraBodyRef.current.position.z = 5 - (offset * 125) - 8;
      cameraBodyRef.current.position.y = 2;
      cameraBodyRef.current.position.x = -6;
      
      // Rotate entire camera body slightly
      cameraBodyRef.current.rotation.y = -0.3 + offset * 0.5;
      cameraBodyRef.current.rotation.x = -0.1;
    }
    
    // Lens rolling effect
    if (lensRef.current) {
      lensRef.current.rotation.z = offset * Math.PI * 8; // Multiple rotations
    }
  });

  return (
    <group ref={cameraBodyRef}>
      {/* Camera Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Camera Grip */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1, 0.5, 0.8]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Lens Mount */}
      <mesh position={[0, 0, -1.2]}>
        <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
        <meshStandardMaterial 
          color="#333333" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Main Lens - This rotates */}
      <mesh ref={lensRef} position={[0, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 1.2, 32]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Lens Glass */}
      <mesh position={[0, 0, -2.3]}>
        <circleGeometry args={[0.45, 32]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={1} 
          roughness={0}
          emissive="#1a4d7a"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Lens Aperture Blades */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh 
            key={`aperture-${i}`}
            position={[
              Math.cos(angle) * 0.3, 
              Math.sin(angle) * 0.3, 
              -2.2
            ]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.02, 0.3, 0.05]} />
            <meshStandardMaterial 
              color="#666666" 
              metalness={0.8}
            />
          </mesh>
        );
      })}
      
      {/* Lens Hood */}
      <mesh position={[0, 0, -2.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.5, 1, 32]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.8} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Viewfinder */}
      <mesh position={[0, 0.5, 0.3]}>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.7}
        />
      </mesh>
      
      {/* Camera Details - Buttons */}
      <mesh position={[0.8, 0, 0.3]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Top Dial */}
      <mesh position={[0.6, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} />
      </mesh>
    </group>
  );
};
