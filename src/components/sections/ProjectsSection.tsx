import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Brand Reimagined',
    category: 'Branding',
    year: '2024'
  },
  {
    title: 'Digital Transformation',
    category: 'Strategy',
    year: '2024'
  },
  {
    title: 'Social Impact',
    category: 'Campaign',
    year: '2023'
  },
  {
    title: 'Market Disruption',
    category: 'Launch',
    year: '2023'
  }
];

export const ProjectsSection = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-foreground text-background px-8 overflow-y-auto py-20">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-light mb-16 tracking-tight"
        >
          PROJECTS
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-background/20 pb-8 hover:border-background/60 transition-colors duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
                <span className="text-sm uppercase tracking-wider opacity-60">{project.year}</span>
              </div>
              <p className="text-sm uppercase tracking-wider opacity-60 mt-2">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
