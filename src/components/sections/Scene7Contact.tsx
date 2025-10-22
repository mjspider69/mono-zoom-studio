import { useState } from 'react';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useTextReveal } from '@/hooks/useScrollAnimation';
import { Mail, Phone } from 'lucide-react';

export const Scene7Contact = () => {
  const titleRef = useTextReveal(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-black tracking-tight text-center mb-12 drop-shadow-[0_0_35px_rgba(0,0,0,0.3)]">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-gray-50 border-2 border-gray-200"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-gray-50 border-2 border-gray-200"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-gray-50 border-2 border-gray-200"
                />
              </div>
              <AnimatedButton type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                Send Message
              </AnimatedButton>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-4 text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">Director Details</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">gumming4u@gmail.com</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-light text-black">Aryaan Alam</p>
                    <p className="text-gray-600">+91 95510 77771</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-light text-black">Isaac Vivian</p>
                    <p className="text-gray-600">+91 86670 31931</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
