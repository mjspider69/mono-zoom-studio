import { Html } from '@react-three/drei';
import { Scene0Hero } from './sections/Scene0Hero';
import { Scene1FounderIntro } from './sections/Scene1FounderIntro';
import { Scene2MissionPillars } from './sections/Scene2MissionPillars';
import { Scene3ClientsSuccess } from './sections/Scene3ClientsSuccess';
import { Scene4TeamValues } from './sections/Scene4TeamValues';
import { Scene5Solutions } from './sections/Scene5Solutions';
import { Scene6Projects } from './sections/Scene6Projects';
import { Scene7Contact } from './sections/Scene7Contact';
import { DepthMarkers } from './DepthMarkers';

export const Scene3DContent = () => {
  // 8 evenly spaced sections from Z=0 to Z=-380
  const spacing = 380 / 7; // 54.29 units between each section
  
  return (
    <>
      {/* Depth markers to show 3D space */}
      <DepthMarkers />

      {/* Scene 0: Home - Z: 0 */}
      <Html 
        position={[0, 0, 0]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene0Hero />
      </Html>

      {/* Scene 1: Founder Intro - Z: -54.29 */}
      <Html 
        position={[0, 0, -spacing]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene1FounderIntro />
      </Html>

      {/* Scene 2: Mission & Pillars - Z: -108.57 */}
      <Html 
        position={[0, 0, -spacing * 2]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene2MissionPillars />
      </Html>

      {/* Scene 3: Clients & Success - Z: -162.86 */}
      <Html 
        position={[0, 0, -spacing * 3]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene3ClientsSuccess />
      </Html>

      {/* Scene 4: Team & Values - Z: -217.14 */}
      <Html 
        position={[0, 0, -spacing * 4]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene4TeamValues />
      </Html>

      {/* Scene 5: Solutions - Z: -271.43 */}
      <Html 
        position={[0, 0, -spacing * 5]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene5Solutions />
      </Html>

      {/* Scene 6: Projects - Z: -325.71 */}
      <Html 
        position={[0, 0, -spacing * 6]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene6Projects />
      </Html>

      {/* Scene 7: Contact - Z: -380 */}
      <Html 
        position={[0, 0, -380]}
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene7Contact />
      </Html>
    </>
  );
};
