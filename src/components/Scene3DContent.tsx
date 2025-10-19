import { Html } from '@react-three/drei';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { DepthMarkers } from './DepthMarkers';

interface Scene3DContentProps {
  onExplore?: () => void;
  onNavigate?: (index: number) => void;
}

// Z-positions with 27.5 unit spacing per page (220 / 8 = 27.5)
const SECTION_POSITIONS = [
  0,        // Home (0 * 27.5)
  -27.5,    // About (1 * 27.5)
  -55,      // Solutions (2 * 27.5)
  -82.5,    // Projects (3 * 27.5)
  -110,     // Contact (4 * 27.5)
];

export const Scene3DContent = ({ onExplore, onNavigate }: Scene3DContentProps) => {
  return (
    <>
      {/* Depth markers to show 3D space */}
      <DepthMarkers maxZ={220} />

      {/* Home Section - Z: 0 */}
      <Html
        position={[0, 0, SECTION_POSITIONS[0]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <HeroSection onExplore={onExplore} />
      </Html>

      {/* About Section - Z: -13.75 */}
      <Html
        position={[0, 0, SECTION_POSITIONS[1]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <AboutSection onNavigate={onNavigate} />
      </Html>

      {/* Services Section - Z: -27.5 */}
      <Html
        position={[0, 0, SECTION_POSITIONS[2]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <SolutionsSection onNavigate={onNavigate} />
      </Html>

      {/* Projects Section - Z: -41.25 */}
      <Html
        position={[0, 0, SECTION_POSITIONS[3]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ProjectsSection onNavigate={onNavigate} />
      </Html>

      {/* Contact Section - Z: -55 */}
      <Html
        position={[0, 0, SECTION_POSITIONS[4]]}
        transform
        occlude
        zIndexRange={[100, 0]}
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ContactSection onNavigate={onNavigate} />
      </Html>
    </>
  );
};
