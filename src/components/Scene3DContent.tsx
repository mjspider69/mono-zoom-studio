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
        <AboutSection />
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
        <SolutionsSection />
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
        <ProjectsSection />
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
        <ContactSection />
      </Html>
    </>
  );
};
