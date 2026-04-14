import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import BentoGrid from './components/sections/BentoGrid';
import Contact from './components/sections/Contact';
import './styles/index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="top-0 right-0 left-0 z-50 fixed border-dark-border border-b glass-effect">
        <div className="mx-auto px-4 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gradient text-2xl cursor-pointer" onClick={() => scrollToSection('home')}>
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyber-blue transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyber-blue transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyber-blue transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyber-blue transition-colors">
                Contact
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-cyber-blue transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-3 bg-dark-card/95 backdrop-blur-lg px-4 py-4 border-dark-border border-t">
            <button
              onClick={() => scrollToSection('home')}
              className="block hover:bg-cyber-blue/10 px-4 py-3 rounded-lg w-full text-gray-300 hover:text-cyber-blue text-left transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block hover:bg-cyber-blue/10 px-4 py-3 rounded-lg w-full text-gray-300 hover:text-cyber-blue text-left transition-all"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block hover:bg-cyber-blue/10 px-4 py-3 rounded-lg w-full text-gray-300 hover:text-cyber-blue text-left transition-all"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block hover:bg-cyber-blue/10 px-4 py-3 rounded-lg w-full text-gray-300 hover:text-cyber-blue text-left transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden z-40 fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <TechStack />
        </div>
        <div id="projects">
          <BentoGrid />
        </div>
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-dark-border border-t">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <p className="text-gray-400">
            © 2026 RAZAFISON Kevin Fitahiana. Built with React & Tailwind CSS
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/Kevin-Razafison" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-cyber-blue transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;