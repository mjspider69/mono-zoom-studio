import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  { id: 1, title: 'E-Commerce Transformation', image: project1 },
  { id: 2, title: 'Healthcare Digital Platform', image: project2 },
  { id: 3, title: 'Real Estate Showcase', image: project3 },
  { id: 4, title: 'Educational App', image: project4 },
  { id: 5, title: 'Tech Startup Launch', image: project5 },
  { id: 6, title: 'Fashion Brand Campaign', image: project6 },
];

export const Scene6Projects = () => {
  const titleRef = useTextReveal(true);
  const projectsRef = useStaggerAnimation(true, '.project-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white tracking-tight text-center mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
          Our Projects
        </h2>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <AnimatedCard key={project.id} className="project-card overflow-hidden bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">{project.title}</h3>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};
