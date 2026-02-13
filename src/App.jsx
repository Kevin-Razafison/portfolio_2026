import React from 'react';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import BentoGrid from './components/sections/BentoGrid';
import Contact from './components/sections/Contact';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="top-0 right-0 left-0 z-50 fixed border-dark-border border-b glass-effect">
        <div className="mx-auto px-4 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gradient text-2xl">
              Portfolio
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-cyber-blue transition-colors">
                Home
              </a>
              <a href="#skills" className="text-gray-300 hover:text-cyber-blue transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-cyber-blue transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyber-blue transition-colors">
                Contact
              </a>
            </div>
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

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
            <a href="#contact" className="text-gray-400 hover:text-cyber-blue transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;