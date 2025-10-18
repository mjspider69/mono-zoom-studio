import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { CameraController } from './CameraController';
import { Scene3DContent } from './Scene3DContent';
import { Camera3DModel } from './Camera3DModel';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Studio lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} />
        <spotLight position={[0, 20, 0]} intensity={1.5} angle={0.3} penumbra={1} />
        
        <ScrollControls pages={5} damping={0.08}>
          <CameraController />
          <Camera3DModel />
          <Scene3DContent />
        </ScrollControls>
        
        {/* Enhanced fog for studio atmosphere */}
        <fog attach="fog" args={['#000000', 5, 140]} />
      </Canvas>
    </div>
  );
};
