import { useState } from 'react';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useTextReveal, useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  const titleRef = useTextReveal(true);
  const formRef = useScrollAnimation(true);
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
    <div className="w-screen h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-foreground tracking-tight text-center mb-12 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
          Click with Us: Let's Connect
        </h2>
        <div ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card"
                />
              </div>
              <AnimatedButton type="submit" size="lg" className="w-full">
                Send Message
              </AnimatedButton>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Get in Touch</h3>
              <p className="text-muted-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                Ready to transform your digital presence? Let's create something extraordinary together.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">gumming4u@gmail.com</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                  <div>
                    <p className="font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Aryaan Alam</p>
                    <p className="text-muted-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">+91 95510 77771</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                  <div>
                    <p className="font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Isaac Vivian</p>
                    <p className="text-muted-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">+91 86670 31931</p>
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
