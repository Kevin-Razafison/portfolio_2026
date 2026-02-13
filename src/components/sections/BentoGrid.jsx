import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import BentoCard from '../ui/BentoCard';
import { projects } from '../../data/projects';

const BentoGrid = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-4xl md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <BentoCard 
              key={project.id}
              size={index === 0 ? 'medium' : 'small'}
              className="group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative -mx-6 -mt-6 mb-4 rounded-t-2xl h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="top-4 right-4 absolute">
                  <span className="bg-cyber-blue/20 backdrop-blur-sm px-3 py-1 border border-cyber-blue/50 rounded-full font-medium text-cyber-blue text-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col h-[calc(100%-12rem)]">
                <h3 className="mb-2 font-semibold group-hover:text-cyber-blue text-xl transition-colors">
                  {project.title}
                </h3>
                <p className="flex-1 mb-4 text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-dark-bg/50 px-2 py-1 border border-dark-border rounded text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-dark-bg/50 px-2 py-1 border border-dark-border rounded text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyber-blue hover:text-cyan-400 text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Github size={16} />
                    Frontend
                  </a>
                  {project.githubBackend && (
                    <a 
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      <Github size={16} />
                      Backend
                    </a>
                  )}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Kevin-Razafison"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:bg-cyber-blue px-8 py-3 border-2 border-cyber-blue rounded-lg font-medium text-cyber-blue hover:text-dark-bg transition-all duration-300"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;