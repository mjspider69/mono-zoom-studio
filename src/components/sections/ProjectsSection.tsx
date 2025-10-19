import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  { title: 'Brand Campaign', category: 'Marketing', image: project1 },
  { title: 'E-commerce Platform', category: 'Development', image: project2 },
  { title: 'Social Media Strategy', category: 'Social Media', image: project3 },
  { title: 'Product Photography', category: 'Photography', image: project4 },
  { title: 'Video Production', category: 'Videography', image: project5 },
  { title: 'SEO Campaign', category: 'SEO', image: project6 },
];

export const ProjectsSection = () => {
  const handleViewProject = (project: string) => {
    toast({
      title: project,
      description: "Explore this project in our portfolio.",
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background px-4 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-foreground tracking-tight text-center mb-12">
          Picture Perfect: Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => handleViewProject(project.title)}
                    variant="secondary"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-light">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
