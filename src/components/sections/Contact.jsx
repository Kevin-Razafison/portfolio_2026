import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GlowButton from '../ui/GlowButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-4 py-20" id="contact">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-4xl md:text-5xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-cyber-blue/10 rounded-lg w-12 h-12">
                  <Mail className="text-cyber-blue" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Email</h3>
                  <a 
                    href="mailto:kevinrazafison2@gmail.com" 
                    className="text-gray-400 hover:text-cyber-blue break-all transition-colors"
                  >
                    kevinrazafison2@gmail.com
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-cyber-purple/10 rounded-lg w-12 h-12">
                  <MapPin className="text-cyber-purple" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Location</h3>
                  <p className="text-gray-400">
                    Antananarivo, Madagascar
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-green-500/10 rounded-lg w-12 h-12">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">WhatsApp</h3>
                  <a 
                    href="https://wa.me/261339500447" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    +261 33 95 004 47
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-blue-500/10 rounded-lg w-12 h-12">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/kevin-razafison-025952383/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 break-all transition-colors"
                  >
                    kevin-razafison-025952383
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-cyber-pink/10 rounded-lg w-12 h-12">
                  <Github className="text-cyber-pink" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">GitHub</h3>
                  <a 
                    href="https://github.com/Kevin-Razafison" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-pink transition-colors"
                  >
                    @Kevin-Razafison
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Additional Info */}
            <div className="p-6 border-cyber-blue border-l-4 rounded-xl glass-effect">
              <h3 className="mb-3 font-semibold text-lg">Open to Opportunities</h3>
              <p className="text-gray-400 text-sm">
                I'm currently looking for full-time positions or freelance projects in 
                software development. With expertise in full-stack development, mobile apps, 
                and modern web technologies, I'm ready to contribute to exciting projects. 
                Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark-bg px-4 py-3 border border-dark-border focus:border-cyber-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 w-full text-white transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark-bg px-4 py-3 border border-dark-border focus:border-cyber-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 w-full text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-dark-bg px-4 py-3 border border-dark-border focus:border-cyber-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 w-full text-white transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <GlowButton type="submit" icon={Send} className="justify-center w-full">
                Send Message
              </GlowButton>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;