import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { CameraController } from './CameraController';
import { Scene3DContent } from './Scene3DContent';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <ScrollControls pages={5} damping={0.2}>
          <CameraController />
          <Scene3DContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
};
