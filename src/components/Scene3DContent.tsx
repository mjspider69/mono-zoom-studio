import { Html } from '@react-three/drei';
import { Scene0_Home } from './scenes/Scene0_Home';
import { Scene1_FounderIntro } from './scenes/Scene1_FounderIntro';
import { Scene2_MissionPillars } from './scenes/Scene2_MissionPillars';
import { Scene3_ClientsSuccess } from './scenes/Scene3_ClientsSuccess';
import { Scene4_TeamValues } from './scenes/Scene4_TeamValues';
import { Scene5_Solutions } from './scenes/Scene5_Solutions';
import { Scene6_Projects } from './scenes/Scene6_Projects';
import { Scene7_Contact } from './scenes/Scene7_Contact';
import { DepthMarkers } from './DepthMarkers';

interface Scene3DContentProps {
  onExplore?: () => void;
  onNavigate?: (index: number) => void;
}

// Z-position mapping for 8 scenes across 380 units
// 380 / 8 = 47.5 units per scene
const Z_POSITIONS_MAP = [
  0,        // Scene 0: Home
  -47.5,    // Scene 1: Founder Intro
  -95,      // Scene 2: Mission & Pillars
  -142.5,   // Scene 3: Clients & Success
  -190,     // Scene 4: Team & Values
  -237.5,   // Scene 5: Solutions
  -285,     // Scene 6: Projects
  -332.5,   // Scene 7: Contact
];

export const Scene3DContent = ({ onExplore }: Scene3DContentProps) => {
  const handleExplore = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: scrollHeight * (1 / 8), behavior: 'smooth' });
    onExplore?.();
  };

  return (
    <>
      {/* Depth markers to show 3D space */}
      <DepthMarkers />

      {/* Scene 0: Home */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[0]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene0_Home onExplore={handleExplore} />
      </Html>

      {/* Scene 1: Founder Intro */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[1]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene1_FounderIntro />
      </Html>

      {/* Scene 2: Mission & Pillars */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[2]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene2_MissionPillars />
      </Html>

      {/* Scene 3: Clients & Success */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[3]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene3_ClientsSuccess />
      </Html>

      {/* Scene 4: Team & Values */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[4]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene4_TeamValues />
      </Html>

      {/* Scene 5: Solutions */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[5]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene5_Solutions />
      </Html>

      {/* Scene 6: Projects */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[6]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene6_Projects />
      </Html>

      {/* Scene 7: Contact */}
      <Html
        position={[0, 0, Z_POSITIONS_MAP[7]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <Scene7_Contact />
      </Html>
    </>
  );
};
