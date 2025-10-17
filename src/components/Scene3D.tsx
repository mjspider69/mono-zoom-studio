import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { CameraController } from './CameraController';
import { Scene3DContent } from './Scene3DContent';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ScrollControls pages={5} damping={0.1}>
          <CameraController />
          <Scene3DContent />
        </ScrollControls>
        
        {/* Fog for depth effect */}
        <fog attach="fog" args={['#000000', 10, 120]} />
      </Canvas>
    </div>
  );
};
