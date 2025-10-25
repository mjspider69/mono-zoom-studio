import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export const Scene6_Projects = () => {
  const projects = [
    { title: 'Brand Relaunch Campaign', category: 'Brand Strategy', image: project1 },
    { title: 'E-Commerce Strategy', category: 'Digital Commerce', image: project2 },
    { title: 'Visual Identity Design', category: 'Branding', image: project3 },
    { title: 'Product Launch Campaign', category: 'Marketing', image: project4 },
    { title: 'Social Media Transformation', category: 'Social Media', image: project5 },
    { title: 'Corporate Video Series', category: 'Video Production', image: project6 },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-8 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light text-center text-white mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
          Scene 6: Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-light text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
