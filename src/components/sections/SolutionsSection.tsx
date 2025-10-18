import { motion } from 'framer-motion';
import { Target, Share2, Code, FileText, Camera, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Strategic campaigns to capture and convert high-quality leads for your business growth'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Comprehensive social media strategies to build brand presence and engage your audience'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to your business needs and objectives'
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Compelling content across all formats to tell your brand story and connect with audiences'
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional visual storytelling through high-quality photography and video production'
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns optimized for ROI and measurable business results'
  }
];

export const SolutionsSection = () => {
  return (
    <div className="w-screen h-screen bg-background text-foreground overflow-y-auto py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light mb-12 tracking-tight"
        >
          SOLUTIONS
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border p-8 hover:bg-card transition-colors duration-300"
            >
              <solution.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-light mb-4 tracking-tight">{solution.title}</h3>
              <p className="text-muted-foreground font-light">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
