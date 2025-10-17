import { Html } from '@react-three/drei';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';

export const Scene3DContent = () => {
  return (
    <>
      {/* Hero Section - Z: 0 */}
      <Html position={[0, 0, 0]} transform occlude>
        <HeroSection />
      </Html>

      {/* About Section - Z: -20 */}
      <Html position={[0, 0, -20]} transform occlude>
        <AboutSection />
      </Html>

      {/* Services Section - Z: -40 */}
      <Html position={[0, 0, -40]} transform occlude>
        <ServicesSection />
      </Html>

      {/* Projects Section - Z: -60 */}
      <Html position={[0, 0, -60]} transform occlude>
        <ProjectsSection />
      </Html>

      {/* Contact Section - Z: -80 */}
      <Html position={[0, 0, -80]} transform occlude>
        <ContactSection />
      </Html>
    </>
  );
};
