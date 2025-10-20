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
        <HeroSection />
      </Html>

      {/* About Section - Z: -47.5 */}
      <Html 
        position={[0, 0, -47.5]} 
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

      {/* Services Section - Z: -95 */}
      <Html 
        position={[0, 0, -95]} 
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

      {/* Projects Section - Z: -142.5 */}
      <Html 
        position={[0, 0, -142.5]} 
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

      {/* Contact Section - Z: -190 */}
      <Html 
        position={[0, 0, -190]}
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
