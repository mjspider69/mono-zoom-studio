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

export const Scene3DContent = ({ onExplore, onNavigate }: Scene3DContentProps) => {
  return (
    <>
      {/* Depth markers to show 3D space */}
      <DepthMarkers />

      {/* Home Section - Z: 0 */}
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
        <HeroSection onExplore={onExplore} />
      </Html>

      {/* About Section - Z: -25 */}
      <Html
        position={[0, 0, -25]}
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

      {/* Services Section - Z: -50 */}
      <Html
        position={[0, 0, -50]}
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

      {/* Projects Section - Z: -75 */}
      <Html
        position={[0, 0, -75]}
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

      {/* Contact Section - Z: -100 */}
      <Html
        position={[0, 0, -100]}
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
