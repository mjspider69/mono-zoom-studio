import { Html } from '@react-three/drei';
import { HeroSection } from './sections/HeroSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { ClientsSection } from './sections/ClientsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
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
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <HeroSection />
      </Html>

      {/* Industries Section - Z: -52.5 */}
      <Html 
        position={[0, 0, -52.5]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <IndustriesSection />
      </Html>

      {/* Clients Section - Z: -105 */}
      <Html 
        position={[0, 0, -105]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ClientsSection />
      </Html>

      {/* Testimonials Section - Z: -157.5 */}
      <Html 
        position={[0, 0, -157.5]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <TestimonialsSection />
      </Html>

      {/* About Section - Z: -210 */}
      <Html 
        position={[0, 0, -210]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <AboutSection />
      </Html>

      {/* Services Section - Z: -262.5 */}
      <Html 
        position={[0, 0, -262.5]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <SolutionsSection />
      </Html>

      {/* Projects Section - Z: -315 */}
      <Html 
        position={[0, 0, -315]} 
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        <ProjectsSection />
      </Html>

      {/* Contact Section - Z: -367.5 */}
      <Html 
        position={[0, 0, -367.5]}
        center
        distanceFactor={10}
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
