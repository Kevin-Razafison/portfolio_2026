import React from 'react';
import { 
  Code2, FileCode, Atom, Coffee, Server, Box, Terminal, 
  Smartphone, Code, GitBranch, Monitor, Database 
} from 'lucide-react';
import BentoCard from '../ui/BentoCard';
import { techStack } from '../../data/stack';

const iconMap = {
  Code2, FileCode, Atom, Coffee, Server, Box, Terminal,
  Smartphone, Code, GitBranch, Monitor, Database
};

const TechStack = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-4xl md:text-5xl">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Bento Grid */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto">
          {/* Frontend */}
          <BentoCard size="medium" glow>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex justify-center items-center bg-cyber-blue/10 rounded-lg w-12 h-12">
                  <Code2 className="text-cyber-blue" size={24} />
                </div>
                <h3 className="font-semibold text-2xl">Frontend</h3>
              </div>
              <div className="flex-1 space-y-4">
                {techStack.frontend.map((tech, index) => {
                  const Icon = iconMap[tech.icon];
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          {Icon && <Icon size={16} className="text-cyber-blue" />}
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{tech.level}%</span>
                      </div>
                      <div className="bg-dark-border rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyber-blue to-cyan-400 rounded-full h-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BentoCard>

          {/* Backend */}
          <BentoCard size="medium" glow>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex justify-center items-center bg-cyber-purple/10 rounded-lg w-12 h-12">
                  <Server className="text-cyber-purple" size={24} />
                </div>
                <h3 className="font-semibold text-2xl">Backend</h3>
              </div>
              <div className="flex-1 space-y-4">
                {techStack.backend.map((tech, index) => {
                  const Icon = iconMap[tech.icon];
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          {Icon && <Icon size={16} className="text-cyber-purple" />}
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{tech.level}%</span>
                      </div>
                      <div className="bg-dark-border rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyber-purple to-purple-400 rounded-full h-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BentoCard>

          {/* Mobile */}
          <BentoCard size="small">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-cyber-pink/10 rounded-lg w-10 h-10">
                <Smartphone className="text-cyber-pink" size={20} />
              </div>
              <h3 className="font-semibold text-xl">Mobile</h3>
            </div>
            <div className="space-y-3">
              {techStack.mobile.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {Icon && <Icon size={14} className="text-cyber-pink" />}
                        <span className="font-medium text-sm">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{tech.level}%</span>
                    </div>
                    <div className="bg-dark-border rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyber-pink to-pink-400 rounded-full h-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          {/* Tools */}
          <BentoCard size="small">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-cyber-blue/10 rounded-lg w-10 h-10">
                <GitBranch className="text-cyber-blue" size={20} />
              </div>
              <h3 className="font-semibold text-xl">Tools</h3>
            </div>
            <div className="space-y-3">
              {techStack.tools.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {Icon && <Icon size={14} className="text-cyber-blue" />}
                        <span className="font-medium text-sm">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{tech.level}%</span>
                    </div>
                    <div className="bg-dark-border rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyber-blue to-cyan-400 rounded-full h-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          {/* Database */}
          <BentoCard size="medium">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex justify-center items-center bg-cyber-purple/10 rounded-lg w-12 h-12">
                <Database className="text-cyber-purple" size={24} />
              </div>
              <h3 className="font-semibold text-2xl">Database</h3>
            </div>
            <div className="space-y-4">
              {techStack.database.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {Icon && <Icon size={16} className="text-cyber-purple" />}
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{tech.level}%</span>
                    </div>
                    <div className="bg-dark-border rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyber-purple to-purple-400 rounded-full h-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default TechStack;