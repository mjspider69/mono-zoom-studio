import { Html } from '@react-three/drei';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { DepthMarkers } from './DepthMarkers';

export const Scene3DContent = () => {
  return (
    <>
      {/* Depth markers to show 3D space */}
      <DepthMarkers />

      {/* Hero Section - Z: 0 */}
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
        <HeroSection />
      </Html>

      {/* About Section - Z: -26 */}
      <Html 
        position={[0, 0, -26]} 
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <AboutSection />
      </Html>

      {/* Solutions Section - Z: -52 */}
      <Html 
        position={[0, 0, -52]} 
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <SolutionsSection />
      </Html>

      {/* Projects Section - Z: -78 */}
      <Html 
        position={[0, 0, -78]} 
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ProjectsSection />
      </Html>

      {/* Contact Section - Z: -104 */}
      <Html 
        position={[0, 0, -104]} 
        transform 
        occlude
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ContactSection />
      </Html>
    </>
  );
};
