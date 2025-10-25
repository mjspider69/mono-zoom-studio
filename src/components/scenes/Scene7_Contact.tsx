import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export const Scene7_Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-8 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-light text-center mb-12 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          Scene 7: Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-light"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                Get in Touch
              </h3>
              <p className="text-gray-600 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                Ready to transform your digital presence? Let's create something extraordinary together.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 drop-shadow-[0_0_12px_rgba(0,0,0,0.15)]" />
                <span className="drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">gumming4u@gmail.com</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600 drop-shadow-[0_0_12px_rgba(0,0,0,0.15)]" />
                  <div>
                    <p className="font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">Aryaan Alam</p>
                    <p className="text-gray-600 text-sm">+91 95510 77771</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div>
                    <p className="font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">Isaac Vivian</p>
                    <p className="text-gray-600 text-sm">+91 86670 31931</p>
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
