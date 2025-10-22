import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { CameraController } from './CameraController';
import { Scene3DContent } from './Scene3DContent';
import { Camera3DModel } from './Camera3DModel';

interface Scene3DProps {
  onExplore?: () => void;
  onNavigate?: (index: number) => void;
}

export const Scene3D = ({ onExplore, onNavigate }: Scene3DProps) => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={['#000000']} />

        {/* Cinematic studio lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, 10, -5]} intensity={0.8} color="#f5f5f5" />
        <spotLight position={[0, 15, 0]} intensity={1.2} angle={0.4} penumbra={1} color="#ffffff" />

        <ScrollControls pages={26} damping={0.1}>
          <CameraController />
          <Camera3DModel />
          <Scene3DContent onExplore={onExplore} onNavigate={onNavigate} />
        </ScrollControls>

        {/* Atmospheric fog for depth */}
        <fog attach="fog" args={['#000000', 10, 200]} />
      </Canvas>
    </div>
  );
};
