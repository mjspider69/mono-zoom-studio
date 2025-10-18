import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const industries = [
  'Healthcare', 'E-Commerce', 'Real Estate', 'Finance', 'Education', 
  'Technology', 'Hospitality', 'Retail'
];

const clients = [
  'TechCorp', 'HealthPlus', 'RetailHub', 'FinanceFirst', 'EduWorld',
  'PropMasters', 'HospitalityPro', 'TechInnovate'
];

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    company: 'HealthPlus Clinics',
    text: 'Gumming4U transformed our digital presence completely. Their strategic approach increased our patient inquiries by 300%.'
  },
  {
    name: 'Priya Sharma',
    company: 'TechCorp Solutions',
    text: 'Working with Gumming4U has been a game-changer. Their creativity and execution are unmatched in the industry.'
  },
  {
    name: 'Arun Patel',
    company: 'RetailHub',
    text: 'The team delivered beyond expectations. Our social media engagement skyrocketed within the first month.'
  }
];

export const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-background text-foreground overflow-y-auto py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <img src={logo} alt="Gumming4U" className="h-24 mx-auto mb-6 object-contain" />
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tight">GUMMING4U</h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            Transform Ordinary Ideas Into Extraordinary Outcomes
          </p>
          <ChevronDown className="mx-auto w-6 h-6 animate-bounce mt-6" />
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">INDUSTRIES WE SERVE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="border border-border p-6 text-center hover:bg-card transition-colors"
              >
                <p className="text-lg font-light">{industry}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">OUR CLIENTS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-2xl font-light opacity-60 hover:opacity-100 transition-opacity"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">CLIENT TESTIMONIALS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="border border-border p-8"
              >
                <p className="text-muted-foreground font-light mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
