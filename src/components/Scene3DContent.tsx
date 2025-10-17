import { Html } from '@react-three/drei';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
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
        style={{ width: '100vw', height: '100vh' }}
      >
        <HeroSection />
      </Html>

      {/* About Section - Z: -25 */}
      <Html 
        position={[0, 0, -25]} 
        transform 
        occlude
        style={{ width: '100vw', height: '100vh' }}
      >
        <AboutSection />
      </Html>

      {/* Services Section - Z: -50 */}
      <Html 
        position={[0, 0, -50]} 
        transform 
        occlude
        style={{ width: '100vw', height: '100vh' }}
      >
        <ServicesSection />
      </Html>

      {/* Projects Section - Z: -75 */}
      <Html 
        position={[0, 0, -75]} 
        transform 
        occlude
        style={{ width: '100vw', height: '100vh' }}
      >
        <ProjectsSection />
      </Html>

      {/* Contact Section - Z: -100 */}
      <Html 
        position={[0, 0, -100]} 
        transform 
        occlude
        style={{ width: '100vw', height: '100vh' }}
      >
        <ContactSection />
      </Html>
    </>
  );
};
