import { motion } from 'framer-motion';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  {
    title: 'Brand Campaign',
    category: 'Social Media',
    image: project1
  },
  {
    title: 'Product Launch',
    category: 'Marketing',
    image: project2
  },
  {
    title: 'Digital Strategy',
    category: 'Content Creation',
    image: project3
  },
  {
    title: 'Visual Identity',
    category: 'Branding',
    image: project4
  },
  {
    title: 'Engagement Campaign',
    category: 'Social Media',
    image: project5
  },
  {
    title: 'Creative Direction',
    category: 'Photography',
    image: project6
  }
];

export const ProjectsSection = () => {
  return (
    <div className="w-screen h-screen bg-foreground text-background overflow-y-auto py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light mb-12 tracking-tight"
        >
          OUR WORK
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="overflow-hidden border border-background/20 mb-4 transform-gpu">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <motion.h3 
                className="text-xl font-light tracking-tight mb-2"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-sm uppercase tracking-wider opacity-60">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
